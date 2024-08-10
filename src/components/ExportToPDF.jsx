// ExportToPDF.jsx
import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ExportToPDF = ({ data }) => {
  const generatePDF = () => {
    const docDefinition = {
      content: [
        { text: 'Expenses Report', style: 'header' },
        {
          table: {
            widths: ['*', '*', '*', '*', '*'],
            body: [
              ['Category', 'Amount', 'Date', 'Note', 'Payment Method'],
              ...data.map(expense => [
                expense.category,
                expense.amount,
                expense.date,
                expense.note,
                expense.paymentMethod,
              ]),
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 20],
        },
      },
    };

    pdfMake.createPdf(docDefinition).download('expenses.pdf');
  };

  return (
    <button onClick={generatePDF} className="btn btn-primary">
      Export to PDF
    </button>
  );
};

export default ExportToPDF;
