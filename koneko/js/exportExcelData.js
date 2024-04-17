const $btnExport = document.querySelector("#btnExport"),
        $tableUsers = document.querySelector("#tableUsers");

    $btnExport.addEventListener("click", function() {
        let tableExport = new TableExport($tableUsers, {
            exportButtons: false, // No queremos botones
            filename: "Lista de Clientes Grupo Koneko", //Nombre del archivo de Excel
            sheetname: "Lista de Clientes", //Título de la hoja
        });
        let datas = tableExport.getExportData();
        let preferencesDocument = datas.tableUsers.xlsx;
        tableExport.export2file(preferencesDocument.data, preferencesDocument.mimeType, preferencesDocument.filename, preferencesDocument.fileExtension, preferencesDocument.merges, preferencesDocument.RTL, preferencesDocument.sheetname);
    });