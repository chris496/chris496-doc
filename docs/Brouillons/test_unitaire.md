# Installez PHPUnit avec Composer

composer require --dev phpunit/phpunit ^9

composer require --dev symfony/phpunit-bridge

* test installation

* dossier de tests -> Entity

vendor/bin/phpunit

# Obtenez le rapport de couverture de code

* Générez le rapport de couverture de code

vendor/bin/phpunit --coverage-html public/test-coverage

(installer xdebug)

* pour cibler le dossier contenant le rapport

ls -lah public/test-coverage

vendor/bin/phpunit --filter=testcomputeTVAFoodProduct

un projet que vous n'avez pas développé, et que l'on vous demande de tester de façon unitaire tout le code en rapport avec l'authentification d'un utilisateur.

Une doublure est un élément que l’on crée de toutes pièces pour maîtriser une dépendance externe. Cela permet de ne pas dépendre du bon fonctionnement de GitHub

Un “mock” est une doublure. C'est un objet créé à partir d'un type de classe dont vous maîtrisez entièrement le comportement.

Un “dummy” est un objet un peu particulier qui remplit un contrat.

Un “stub” est un “dummy” auquel on ajoute un comportement.