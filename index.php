<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil - ACB CLEAN</title>
    <link rel="stylesheet" href="./css/navbar.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="icon" href="../images/logo.png">
</head>
<body>
    <?php 
    include "include/navbar.php";
    ?>

    <h1 id="title1">Bienvenue chez ACB CLEAN</h1>
    <p id="title2">Votre satisfaction est notre priorité</p><hr id="entete">
    <h1 id="title3">Qui Somme Nous ?</h1>
    <div class="container">
        <p id="text-presentation">
            Depuis 2019, je travaille dur jour après jour pour 
            fournir les meilleurs services à mes clients. 
            Je personnalise mes offres en fonction de vos besoins 
            spécifiques. Contactez-moi dès aujourd'hui 
            pour recevoir un devis initial ! 
        </p>
        <img src="images/nettoyage.jpg" alt="" id="img-presentation">
    </div>
    <div class="container">
        <button class="btn"><a href="/ACB CLEAN/php/nos-services.php" class="link">Nos Services</a></button>
    </div>
    <hr class="entete2">

    <div class="container2">
        <div id="devis">
            <h1 id="devis-title">Vous voulez un devis ?</h1>
            <h3 id="devis-subtitle">N'hésiter pas ! Contactez nous</h3>
            <button class="btn"><a href="/ACB CLEAN/php/obtenir-un-devis.php" class="link">Obtenir un devis</a></button>
        </div>
        <div id="text-devis">
            <p>
                Depuis ma création, j’ai travaillé avec de nombreux clients de la région. 
                Besoin d’un professionnel  expérimenté et à votre écoute ? Je réalise tous les projets de manière efficace 
                et dans les délais impartis, et fais mon maximum pour établir des relations durables avec nos clients.
            </p>
        </div>
    </div>

    <?php 
    include "include/footer.php";
    ?>
    <script src="./script/script.js"></script>
</body>
</html>