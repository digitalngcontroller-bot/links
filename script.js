async function condividiPagina() {
    // Dati da condividere
    const shareData = {
        title: 'Next Gen Controller',
        text: 'Guarda la nuova frontiera dei controller!',
        url: window.location.href // Prende l'URL attuale della pagina
    };

    try {
        // Controlla se il browser supporta la Web Share API
        if (navigator.share) {
            await navigator.share(shareData);
            console.log('Contenuto condiviso con successo!');
        } else {
            // Fallback: se il browser non lo supporta (es. Desktop vecchi)
            alert("La condivisione nativa non è supportata su questo browser. Copia l'URL manualmente.");
            // Qui potresti aggiungere una funzione per copiare il link negli appunti
        }
    } catch (err) {
        console.error('Errore durante la condivisione:', err);
    }
}
(function() {
    // 1. Definiamo la funzione di controllo
    function checkDevice() {
        const isMobile = window.innerWidth <= 768; // Standard per smartphone

        if (!isMobile) {
            // 2. Blocchiamo tutto e iniettiamo l'interfaccia di errore
            document.documentElement.innerHTML = `
                <head>
                    <title>Accesso Negato</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
                    <style>
                        body { 
                            margin: 0; 
                            display: flex; 
                            justify-content: center; 
                            align-items: center; 
                            height: 100vh; 
                            background: #0f0f0f; 
                            color: #ffffff; 
                            font-family: 'Lato', sans-serif; 
                            text-align: center;
                        }
                        .box { padding: 30px; border: 1px solid #333; border-radius: 20px; background: #1a1a1a; }
                        i { font-size: 60px; color: #ff4757; margin-bottom: 20px; }
                        h1 { font-size: 24px; margin: 10px 0; }
                        p { color: #888; font-size: 16px; }
                    </style>
                </head>
                <body>
                    <div class="box">
                        <i class="fa-solid fa-mobile-screen"></i>
                        <h1>Sito Ottimizzato solo per Mobile</h1>
                        <p>Spiacenti, questa pagina è visibile esclusivamente <br> da uno smartphone.</p>
                    </div>
                </body>
            `;
            // Interrompiamo l'esecuzione di altri script se necessario
            window.stop(); 
        }
    }

    // Eseguiamo al caricamento e al ridimensionamento (opzionale)
    window.addEventListener('load', checkDevice);
    window.addEventListener('resize', checkDevice);
})();