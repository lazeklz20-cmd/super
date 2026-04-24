const baseLinks = {
    up1: "https://pay.transacaoseguraemprestimosuper.online/c/32370d72-8e10-402f-bff5-32747e6e5f87", // Verifique
    up2: "https://pay.transacaoseguraemprestimosuper.online/c/48cce762-8266-4f92-ac12-da4570ca303a", // Prossiga
    up3: "https://pay.transacaoseguraemprestimosuper.online/c/a056b8f9-b857-4975-b969-4557b4139e22", // Cadastro
    up4: "https://pay.transacaoseguraemprestimosuper.online/c/df718561-8fbf-4bc1-912b-1055d1f272f8", // Pendente
    up5: "https://pay.transacaoseguraemprestimosuper.online/c/b40a9888-d840-4006-9657-8700efe31db2", // Ativar Conta
    up6: "https://pay.transacaoseguraemprestimosuper.online/c/78c5d367-c4f9-463d-9a62-89e6b71972e0", // Registro
    up7: "https://pay.transacaoseguraemprestimosuper.online/c/262eb8f3-6f66-4e52-abfb-5bd82c84fef3", // Acréscimo
    up8: "https://pay.transacaoseguraemprestimosuper.online/c/6a344b8d-6ca1-4652-8fd1-f47f82970ff0", // Documento
    up9: "https://pay.transacaoseguraemprestimosuper.online/c/97059442-7166-4a47-9c23-e0340dc3fe33", // Aplicativo
    up10:"https://pay.transacaoseguraemprestimosuper.online/c/30f3c78b-7f35-4ed9-8d46-83784cc574bf", // Abertura
    up11:"https://pay.transacaoseguraemprestimosuper.online/c/6a3848f5-25f5-4311-a17b-fbdaa71efea1", // Consultoria
    up12:"https://pay.transacaoseguraemprestimosuper.online/c/32370d72-8e10-402f-bff5-32747e6e5f87"  // Administrativo
};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);
