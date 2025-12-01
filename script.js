function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    // sidebar highlight
    document.querySelectorAll("nav li").forEach(li => li.classList.remove("active"));
    document.querySelectorAll("nav li").forEach(li => {
        if (li.textContent.trim().toLowerCase().replace(/ /g, '-') === pageId) {
            li.classList.add("active");
        }
    });
}

function showTemplatePreview(type) {
    document.querySelectorAll('.template-preview').forEach(p => p.classList.add('hidden'));
    document.getElementById("preview-" + type).classList.remove("hidden");
    document.getElementById("backToCards").classList.remove("hidden");
}

function hideTemplatePreview() {
    document.querySelectorAll('.template-preview').forEach(p => p.classList.add('hidden'));
    document.getElementById("backToCards").classList.add("hidden");
}
