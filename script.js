function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* illness-specific logging schema */
function openTemplate(type) {
    showPage("template-preview");

    const logs = {
        diabetes: [
            {title:"Glucose Logging", example:"98 mg/dl — Fasting — 7:16 AM"},
            {title:"Insulin Dose Tracking", example:"6 units (Bolus) — 6:15 PM"},
            {title:"Carb Intake Record", example:"45g carbs — Breakfast"},
            {title:"Hypoglycemia Events", example:"LOW episode resolved — 2:40 PM"}
        ],
        alzheimers: [
            {title:"Behavior Observation", example:"Calm — engaged — 10:20 AM"},
            {title:"Cognitive Prompting", example:"Memory recall activity — completed"},
            {title:"Safety Notes", example:"Tried wandering — redirected smoothly"}
        ],
        heart: [
            {title:"Blood Pressure Log", example:"132/84 — seated — 9:00 AM"},
            {title:"Weight Log", example:"167 lbs — trending stable"},
            {title:"Symptom Journal", example:"Mild fatigue reported"}
        ],
        cancer: [
            {title:"Chemo Log", example:"Cycle 3 — tolerated fairly"},
            {title:"Side Effects Log", example:"Fatigue 7/10 — nausea mild"},
            {title:"Pain Log", example:"2/10 — Tylenol effective"}
        ],
        pain: [
            {title:"Pain Score Tracking", example:"5/10 — lower back"},
            {title:"Trigger Journal", example:"Walking aggravated"},
            {title:"Mobility Log", example:"Reduced range"}
        ]
    };

    let container = document.getElementById("preview-fields");
    container.innerHTML = "";

    (logs[type.toLowerCase()] || []).forEach(entry => {
        container.innerHTML += `
            <div class="panel">
                <strong>${entry.title}</strong>
                <p>${entry.example}</p>
            </div>
        `;
    });

    container.innerHTML += `
        <p style="font-size:13px;margin-top:10px;">
        These logs can be reordered or expanded in Custom Builder.
        </p>
    `;
}
