const form = document.getElementById('contrato');
const nomeInput = document.getElementById('nome');
const dataInicioInput = document.getElementById('data-inicio');
const clausulas = document.getElementById('clausulas');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = nomeInput.value;
    const dataInicio = dataInicioInput.value;

    const clausulasTexto = `
1. As partes se comprometem a amar, respeitar e valorizar uma à outra.
2. Resolver conflitos de forma pacífica, evitando prolongar desentendimentos.
3. Comunicar sentimentos, desejos e preocupações com honestidade.
4. Evitar comportamentos que possam gerar ciúmes ou desconfiança.
5. Priorizar o bem-estar do relacionamento em todas as decisões.
6. Este contrato é simbólico, sem valor jurídico, mas representa um compromisso emocional.
`;

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4"); // Garantir formato A4

    // Configurar borda e cor
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.5);
    pdf.rect(10, 10, 190, 277); // Borda da página

    // Título
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("CONTRATO DE NAMORO", 105, 25, { align: "center" });

    // Introdução
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(
        `Pelo presente documento, celebrado em ${dataInicio}, as partes abaixo identificadas:`,
        105,
        40,
        { align: "center" }
    );
    pdf.text("Parte 1: Kamille Monteiro Ramos", 105, 50, { align: "center" });
    pdf.text(`Parte 2: ${nome}`, 105, 60, { align: "center" });

    // Adicionar espaçamento
    pdf.text(
        `Declaram e concordam em cumprir os compromissos estabelecidos a seguir:`,
        105,
        80, // Espaçamento ajustado
        { align: "center" }
    );

    // Cláusulas
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(11);
    pdf.text("CLÁUSULAS:", 105, 95, { align: "center" });

    const clausulasFormatadas = pdf.splitTextToSize(clausulasTexto, 180);
    pdf.text(clausulasFormatadas, 105, 105, { align: "center" });

    // Assinaturas
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(
        "E, por estarem de acordo com as cláusulas acima, as partes assinam o presente contrato.",
        105,
        180,
        { align: "center" }
    );

    // Assinatura Parte 1
    pdf.text("Parte 1: _____________________________", 105, 200, {
        align: "center",
    });
    pdf.text("Kamille Monteiro Ramos", 105, 210, { align: "center" });

    // Assinatura Parte 2
    pdf.text("Parte 2: _____________________________", 105, 230, {
        align: "center",
    });
    pdf.text(nome, 105, 240, { align: "center" });

    // Rodapé
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(10);
    pdf.text(
        "Nota: Este contrato é de caráter simbólico e não possui validade jurídica.",
        105,
        285,
        { align: "center" }
    );

    // Salvar PDF
    pdf.save(`Contrato_de_Namoro_${nome}.pdf`);
});