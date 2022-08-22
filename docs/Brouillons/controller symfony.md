# https://cours.davidannebicque.fr/symfony/controller

* route url contenant des variables et pointant une méthode

```php
/**
* @Route("/page/{page}/{subpage}", name="blog_index")
*/
public function indexAction($page, $subpage)
{
    echo $page.' '.$subpage;
}
```

* Une méthode render() (définie quand la classe AbstractController dont votre controller doit hériter) permet aux Actions de récupérer une vue et d'afficher le contenu de la vue compilée avec les différentes variables envoyées.)

:::danger Take care

    (render -> page html construite + variable injecter (construite dans la méthode ou issue de l'url)

:::

```php
/**
 * @ Route("/", name="page")
 */
public function index() 
{
    // votre code

    return $this->render('default/index.html.twig', 
        ['variable' => $variable]
    );
}
```

## Request

* L'objet "request" contient toutes les données envoyées par l'utilisateur (formulaire, ...), mais aussi les données envoyées par le navigateur.
En passant en paramètre un objet de type Request, on peut le manipuler selon les méthodes ci-dessous.
Passer un objet en paramètre de cette manière est ce que l'on nomme de l'injection de dépendance. Le lien est fait automatiquement par Symfony grâce au mécanisme d'autowiring.