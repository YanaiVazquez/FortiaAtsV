# 🎯 Especificación de Diseño: Diferencias entre Kanban Vacantes y Pipeline Candidatos

## 📋 Contexto del Proyecto

Como **equipo multidisciplinario** (Product Manager, UX/UI Designer, Tech Lead, AI Strategist), es fundamental clarificar las diferencias entre estos dos módulos core del ATS para garantizar una implementación coherente y una experiencia de usuario óptima.

## 🔍 **DIFERENCIAS FUNDAMENTALES**

### **📋 KANBAN DE VACANTES**
**Propósito:** Gestión del **proceso de creación y publicación** de vacantes

```
Estados: Borrador → Revisión → Aprobada → Publicada → Activa → Pausada → Cerrada
```

**Enfoque:**
- Workflow de **aprobación de vacantes**
- Control de **qué** se publica y **cuándo**
- Gestión de **requisiciones de personal**
- Estados organizacionales internos

### **🚀 PIPELINE DE CANDIDATOS**
**Propósito:** Gestión del **proceso de selección** de personas

```
Estados: Aplicado → IA Screening → Revisión RH → Entrevista Técnica → Entrevista Final → Oferta → Contratado
```

**Enfoque:**
- Workflow de **evaluación de personas**
- Control de **quién** avanza en el proceso
- Gestión de **candidatos específicos**
- Estados del proceso de selección

## 📊 **COMPARACIÓN TÉCNICA DETALLADA**

| Aspecto | **KANBAN VACANTES** | **PIPELINE CANDIDATOS** |
|---------|---------------------|-------------------------|
| **Entidad Principal** | Job/Vacante | Candidate/Application |
| **Usuario Principal** | Managers/HR Business Partners | Reclutadores/Talent Acquisition |
| **Objetivo** | Aprobar qué contratar | Decidir a quién contratar |
| **Tipo de Decisión** | Organizacional/Presupuestaria | Individual/Técnica |
| **Métricas Clave** | Time-to-publish, Approval rate | Time-to-hire, Conversion rate |
| **IA Focus** | Optimización de demanda | Evaluación de personas |
| **Integración** | ERP, Budget systems | Assessment tools, Calendar |
| **Datos en Cards** | Presupuesto, Departamento, Urgencia | Skills, Experiencia, Scores IA |

## 💻 **ESPECIFICACIONES TÉCNICAS PARA IMPLEMENTACIÓN**

### **A. Estructura de Datos Diferenciada**

```javascript
// VACANTES - Job Entity
const vacancyCardData = {
    id: "job_001",
    title: "Senior React Developer",
    department: "Tecnología", 
    requestedBy: "Carlos López",
    budget: "$80,000 - $120,000",
    headcount: 2,
    priority: "alta",
    status: "en_revision",
    publishedChannels: ["LinkedIn", "Portal Corporativo"],
    applicationsReceived: 45,
    timeInStage: "3 días",
    
    // Métricas específicas de vacante
    metrics: {
        viewsGenerated: 1250,
        applicationRate: 3.6,
        qualityScore: 8.2
    },
    
    // IA específica para vacantes
    aiInsights: {
        demandPrediction: "Alta demanda en el mercado",
        salaryRecommendation: "Considerar ajustar +15%",
        bestChannels: ["LinkedIn", "Stack Overflow Jobs"]
    }
};

// CANDIDATOS - Application Entity  
const candidateCardData = {
    id: "candidate_001",
    firstName: "Ana",
    lastName: "García",
    email: "ana.garcia@email.com",
    currentPosition: "Frontend Developer",
    currentCompany: "TechStart",
    experience: 5,
    location: "CDMX",
    status: "entrevista_tecnica",
    timeInStage: "2 días",
    
    // Aplicación específica
    applicationData: {
        jobId: "job_001",
        jobTitle: "Senior React Developer",
        appliedDate: "2024-01-15",
        source: "LinkedIn"
    },
    
    // Scoring de IA para candidatos
    aiScoring: {
        overallScore: 8.5,
        skillsMatch: 9.2,
        experienceMatch: 8.0,
        cultureMatch: 8.8,
        successProbability: 87
    },
    
    skills: ["React", "Node.js", "TypeScript", "AWS"]
};
```

### **B. Templates de Cards Diferenciados**

```javascript
// Template para VACANTES
getVacancyKanbanCardTemplate() {
    return `
        <div class="vacancy-kanban-card" data-id="#id#" data-type="vacancy">
            <!-- Header de Vacante -->
            <div class="vacancy-card-header">
                <div class="vacancy-icon">
                    <span class="dept-icon">#departmentIcon#</span>
                </div>
                <div class="vacancy-info">
                    <h3 class="vacancy-title">#title#</h3>
                    <p class="vacancy-department">#department# • #headcount# posiciones</p>
                    <p class="vacancy-requester">Solicitado por: #requestedBy#</p>
                </div>
                <div class="priority-badge priority-#priority#">#priority#</div>
            </div>
            
            <!-- Información presupuestaria -->
            <div class="vacancy-budget">
                <span class="budget-label">💰 Presupuesto:</span>
                <span class="budget-amount">#budget#</span>
            </div>
            
            <!-- Métricas de publicación -->
            <div class="vacancy-metrics">
                <div class="metric-item">
                    <span class="metric-icon">📊</span>
                    <span class="metric-text">#applicationsReceived# aplicaciones</span>
                </div>
                <div class="metric-item">
                    <span class="metric-icon">👁️</span>
                    <span class="metric-text">#viewsGenerated# vistas</span>
                </div>
            </div>
            
            <!-- Canales de publicación -->
            <div class="vacancy-channels">
                {common.publishedChannels(#publishedChannels#)}
            </div>
            
            <!-- Tiempo en etapa -->
            <div class="vacancy-timing">
                <span class="timing-icon">⏱️</span>
                <span class="timing-text">#timeInStage# en esta etapa</span>
            </div>
            
            <!-- Acciones de vacante -->
            <div class="vacancy-actions">
                <button class="btn-vacancy-action approve">✅ Aprobar</button>
                <button class="btn-vacancy-action edit">✏️ Editar</button>
                <button class="btn-vacancy-action publish">📢 Publicar</button>
                <button class="btn-vacancy-more">⋯</button>
            </div>
        </div>
    `;
}

// Template para CANDIDATOS (ya existente pero con mejoras)
getCandidatePipelineCardTemplate() {
    return `
        <div class="candidate-pipeline-card" data-id="#id#" data-type="candidate">
            <!-- Header de Candidato -->
            <div class="candidate-card-header">
                <div class="candidate-avatar">
                    <img src="#avatar#" alt="#firstName# #lastName#" onerror="this.src='/default-avatar.png'">
                    <div class="ai-score-badge">#aiOverallScore#</div>
                </div>
                <div class="candidate-info">
                    <h3 class="candidate-name">#firstName# #lastName#</h3>
                    <p class="candidate-position">#currentPosition# en #currentCompany#</p>
                    <p class="candidate-location">📍 #location# • #experience# años exp.</p>
                </div>
            </div>
            
            <!-- Vacante aplicada -->
            <div class="applied-job">
                <span class="job-label">🎯 Aplicó a:</span>
                <span class="job-title-link" onclick="goToVacancy('#applicationData.jobId#')">
                    #applicationData.jobTitle#
                </span>
            </div>
            
            <!-- Skills principales -->
            <div class="candidate-skills">
                {common.topSkills(#skills#, 3)}
            </div>
            
            <!-- Métricas de IA -->
            <div class="candidate-ai-metrics">
                <div class="ai-metric">
                    <span class="metric-label">Skills:</span>
                    <span class="metric-value">#aiScoring.skillsMatch#/10</span>
                </div>
                <div class="ai-metric">
                    <span class="metric-label">Fit:</span>
                    <span class="metric-value">#aiScoring.cultureMatch#/10</span>
                </div>
                <div class="ai-metric">
                    <span class="metric-label">Éxito:</span>
                    <span class="metric-value">#aiScoring.successProbability#%</span>
                </div>
            </div>
            
            <!-- Tiempo en etapa -->
            <div class="candidate-timing">
                <span class="timing-icon">⏱️</span>
                <span class="timing-text">#timeInStage# en esta etapa</span>
            </div>
            
            <!-- Acciones de candidato -->
            <div class="candidate-actions">
                <button class="btn-candidate-action advance">➡️ Avanzar</button>
                <button class="btn-candidate-action interview">📅 Entrevista</button>
                <button class="btn-candidate-action contact">📧 Contactar</button>
                <button class="btn-candidate-more">⋯</button>
            </div>
        </div>
    `;
}
```

### **C. Configuración de Estados Diferenciada**

```javascript
// Estados para VACANTES
const vacancyStates = [
    {
        id: "borrador",
        name: "📝 Borrador",
        color: "#9CA3AF",
        description: "Requisición en preparación",
        actions: ["editar", "enviar_revision"]
    },
    {
        id: "en_revision", 
        name: "👁️ En Revisión",
        color: "#F59E0B",
        description: "Pendiente de aprobación gerencial",
        actions: ["aprobar", "rechazar", "solicitar_cambios"]
    },
    {
        id: "aprobada",
        name: "✅ Aprobada", 
        color: "#10B981",
        description: "Lista para publicar",
        actions: ["publicar", "editar", "pausar"]
    },
    {
        id: "publicada",
        name: "📢 Publicada",
        color: "#3B82F6", 
        description: "Activa y recibiendo aplicaciones",
        actions: ["pausar", "editar", "ver_candidatos"]
    },
    {
        id: "pausada",
        name: "⏸️ Pausada",
        color: "#EF4444",
        description: "Temporalmente inactiva", 
        actions: ["reactivar", "cerrar"]
    },
    {
        id: "cerrada",
        name: "🔒 Cerrada",
        color: "#6B7280",
        description: "Proceso finalizado",
        actions: ["reabrir", "archivar"]
    }
];

// Estados para CANDIDATOS (ya definidos anteriormente)
const candidateStates = [
    {
        id: "aplicado",
        name: "📝 Aplicado",
        color: "#3B82F6",
        description: "Candidato recién aplicado",
        actions: ["revisar", "rechazar_rapido"]
    },
    {
        id: "ia_screening", 
        name: "🤖 IA Screening",
        color: "#8B5CF6",
        description: "Análisis automático en proceso",
        actions: ["ver_resultados", "forzar_avance"]
    },
    // ... resto de estados
];
```

### **D. Navegación Integrada Entre Módulos**

```javascript
// Funciones de navegación cruzada
class ModuleCrossNavigation {
    
    // Desde Vacantes → Ver candidatos aplicados
    goToCandidatesForJob(jobId) {
        this.app.show("/candidatos", {
            view: "pipeline",
            filter: { jobId: jobId },
            highlight: true
        });
    }
    
    // Desde Candidatos → Ver vacante original  
    goToVacancyFromCandidate(candidateId, jobId) {
        this.app.show("/vacantes", {
            view: "kanban", 
            filter: { jobId: jobId },
            highlight: true,
            context: { fromCandidate: candidateId }
        });
    }
    
    // Métricas conectadas
    getConnectedMetrics(jobId) {
        return {
            vacancy: {
                status: "publicada",
                applicationsReceived: 45,
                timeOpen: "12 días"
            },
            candidates: {
                inPipeline: 23,
                interviewed: 8, 
                offered: 2,
                averageScore: 7.8
            }
        };
    }
}
```

### **E. Estilos CSS Diferenciados**

```css
/* Estilos para VACANTES */
.vacancy-kanban-card {
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.vacancy-kanban-card:hover {
    border-color: #4AC1E0;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(74, 193, 224, 0.15);
}

.vacancy-card-header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
}

.vacancy-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    font-size: 20px;
}

.vacancy-title {
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 4px 0;
    line-height: 1.2;
}

.vacancy-department {
    font-size: 13px;
    color: #64748b;
    margin: 0 0 2px 0;
}

.vacancy-requester {
    font-size: 12px;
    color: #94a3b8;
    margin: 0;
}

.priority-badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
}

.priority-alta { background: #fee2e2; color: #991b1b; }
.priority-media { background: #fef3c7; color: #92400e; }
.priority-baja { background: #d1fae5; color: #065f46; }

.vacancy-budget {
    background: #f8fafc;
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 10px;
    font-size: 13px;
}

.budget-label {
    color: #64748b;
    margin-right: 8px;
}

.budget-amount {
    font-weight: 600;
    color: #059669;
}

.vacancy-metrics {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.metric-item {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #64748b;
}

.metric-icon {
    margin-right: 4px;
}

.vacancy-channels {
    margin-bottom: 10px;
}

.channel-tag {
    display: inline-block;
    background: #dbeafe;
    color: #1e40af;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 10px;
    margin-right: 4px;
    margin-bottom: 2px;
}

.vacancy-actions {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.btn-vacancy-action {
    padding: 6px 10px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background: white;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-vacancy-action:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
}

.btn-vacancy-action.approve {
    background: #dcfce7;
    border-color: #16a34a;
    color: #15803d;
}

/* Estilos para CANDIDATOS (mejorar existentes) */
.candidate-pipeline-card {
    background: white;
    border: 2px solid #f1f5f9;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.candidate-pipeline-card:hover {
    border-color: #8b5cf6;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);
}

.applied-job {
    background: #f3f4f6;
    padding: 6px 10px;
    border-radius: 6px;
    margin-bottom: 10px;
    font-size: 12px;
}

.job-label {
    color: #6b7280;
    margin-right: 6px;
}

.job-title-link {
    color: #3b82f6;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 500;
}

.job-title-link:hover {
    color: #1d4ed8;
}

.candidate-ai-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    margin-bottom: 10px;
}

.ai-metric {
    text-align: center;
    padding: 6px;
    background: #f8fafc;
    border-radius: 4px;
}

.metric-label {
    font-size: 10px;
    color: #64748b;
    display: block;
}

.metric-value {
    font-size: 12px;
    font-weight: 600;
    color: #1e293b;
}

.btn-candidate-action {
    padding: 6px 10px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background: white;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-candidate-action:hover {
    background: #f9fafb;
}

.btn-candidate-action.advance {
    background: #dbeafe;
    border-color: #3b82f6;
    color: #1e40af;
}
```

### **F. Configuración de Headers y Toolbars**

```javascript
// Header para VACANTES
getVacanciesKanbanHeader() {
    return {
        view: "toolbar",
        css: "vacancies-kanban-header",
        elements: [
            {
                view: "template",
                template: `
                    <div class="module-header">
                        <h2>📋 Gestión de Vacantes</h2>
                        <p>Control de requisiciones y publicaciones</p>
                    </div>
                `
            },
            { view: "spacer" },
            {
                view: "button",
                value: "➕ Nueva Requisición",
                css: "btn-primary",
                width: 150
            },
            {
                view: "button", 
                value: "📊 Ver Métricas",
                css: "btn-outline",
                width: 120
            },
            {
                view: "button",
                value: "🔄 Actualizar",
                css: "btn-outline", 
                width: 100
            }
        ]
    };
}

// Header para CANDIDATOS  
getCandidatesPipelineHeader() {
    return {
        view: "toolbar",
        css: "candidates-pipeline-header", 
        elements: [
            {
                view: "template",
                template: `
                    <div class="module-header">
                        <h2>🚀 Pipeline de Candidatos</h2>
                        <p>Gestión del proceso de selección</p>
                    </div>
                `
            },
            { view: "spacer" },
            {
                view: "button",
                value: "👤 Nuevo Candidato",
                css: "btn-primary",
                width: 140
            },
            {
                view: "button",
                value: "🤖 IA Análisis", 
                css: "btn-outline",
                width: 110
            },
            {
                view: "button",
                value: "🔄 Actualizar",
                css: "btn-outline",
                width: 100
            }
        ]
    };
}
```

## 🔄 **FLUJO DE INTEGRACIÓN**

### **Conexiones Entre Módulos:**

1. **Desde Vacante → Candidatos:**
   - Botón "Ver Candidatos" en card de vacante
   - Filtra pipeline por esa vacante específica
   - Contexto mantenido (breadcrumb: "Vacantes > Senior React Dev > Candidatos")

2. **Desde Candidato → Vacante:**
   - Link clickeable en "Aplicó a: [Job Title]"  
   - Navega a la vacante específica
   - Highlight temporal de la vacante

3. **Métricas Conectadas:**
   - Vacante muestra: "45 aplicaciones, 23 en pipeline"
   - Candidato muestra: "Aplicando a: Senior React Developer"

## 🎯 **CASOS DE USO ESPECÍFICOS**

### **Caso 1: Manager Revisando Requisiciones**
```
CONTEXTO: Soy Director y necesito aprobar headcount
NAVEGO A: Vacantes → Kanban
VEO: Cards con presupuesto, justificación, prioridad
HAGO: Aprobar/rechazar requisiciones, ajustar presupuesto
```

### **Caso 2: Reclutador Gestionando Selección**
```
CONTEXTO: Soy Talent Acquisition y gestiono candidatos  
NAVEGO A: Candidatos → Pipeline
VEO: Cards con scores IA, skills, fit con vacante
HAGO: Mover candidatos entre etapas, programar entrevistas
```

### **Caso 3: HR Director Vista 360**
```
CONTEXTO: Necesito vista completa del proceso
NAVEGO: Entre Vacantes y Candidatos seamlessly
VEO: Métricas conectadas, estado completo del hiring
HAGO: Optimizar proceso end-to-end
```

## 📱 **CONSIDERACIONES RESPONSIVE**

```css
/* Responsive para ambos módulos */
@media (max-width: 768px) {
    .vacancy-kanban-card,
    .candidate-pipeline-card {
        margin-bottom: 8px;
        padding: 12px;
    }
    
    .vacancy-metrics,
    .candidate-ai-metrics {
        flex-direction: column;
        gap: 6px;
    }
    
    .module-header h2 {
        font-size: 18px;
    }
    
    .module-header p {
        font-size: 12px;
    }
}
```

## ✅ **CHECKLIST DE IMPLEMENTACIÓN**

### **Para Vacantes Kanban:**
- [ ] Implementar estados de aprobación workflow
- [ ] Cards con información presupuestaria
- [ ] Métricas de publicación y reach  
- [ ] Acciones de approval/rejection
- [ ] Integración con canales de publicación
- [ ] Link a candidatos aplicados

### **Para Candidatos Pipeline:**
- [ ] Implementar estados de evaluación
- [ ] Cards con scoring de IA prominente
- [ ] Métricas de fit y compatibilidad
- [ ] Acciones de evaluación y avance
- [ ] Timeline de actividad del candidato
- [ ] Link a vacante original

### **Para Integración:**
- [ ] Navegación cruzada entre módulos
- [ ] Métricas conectadas y contextuales
- [ ] Breadcrumbs y contexto mantenido
- [ ] Filtros automáticos al navegar
- [ ] Estados sincronizados entre módulos

## 🚀 **VALOR DIFERENCIAL**

Esta separación clara pero integrada entre Vacantes y Candidatos nos diferencia de competidores porque:

1. **Workflows Específicos:** Cada usuario tiene su interfaz optimizada
2. **Integración Seamless:** Navegación natural entre procesos  
3. **IA Contextual:** Inteligencia específica para cada flujo
4. **Métricas Conectadas:** Visibilidad completa del funnel de hiring
5. **Roles Diferenciados:** Permisos y vistas apropiadas por rol

---

**🎯 Objetivo:** Crear dos módulos diferenciados pero perfectamente integrados que soporten los workflows reales de organizaciones modernas, desde la requisición hasta la contratación.

**⚠️ Crítico:** La navegación entre módulos debe ser intuitiva y mantener el contexto para evitar confusión del usuario sobre "dónde estoy" y "qué estoy haciendo".