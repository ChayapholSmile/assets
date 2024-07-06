document.getElementById('generate').addEventListener('click', function() {
    // ดึงเนื้อหาจาก textarea
    var content = document.getElementById('content').value;

    // สร้างเอกสาร Word ใหม่
    var PizZip = window.PizZip;
    var Docxtemplater = window.Docxtemplater;

    // สร้าง Zip และ Docxtemplater instance
    var zip = new PizZip();
    var doc = new Docxtemplater(zip);

    // กำหนดเนื้อหาของเอกสาร
    doc.setData({
        content: content
    });

    // สร้างไฟล์ Word
    try {
        doc.render();
    } catch (error) {
        console.error('Error rendering document:', error);
    }

    var out = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    // ดาวน์โหลดไฟล์ Word
    saveAs(out, "document.docx");
});
