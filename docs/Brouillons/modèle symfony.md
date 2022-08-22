* Une fois la base de données mise en place on va pouvoir insérer, modifier, supprimer et récupérer des informations de la base de données sans saisir de requêtes via des méthodes en initialisant l'entité fraichement créée :

```php
/**
 * @Route("/test", name="test")
 */
public function test()
{
    $post = new Post(); // initialise l'entité
    $post->setTitle('Mon titre'); // on set les différents champs
    $post->setEnable(true);
    $post->setDateCreated(new \Datetime);

    $em = $this->getDoctrine()->getManager(); // on récupère le gestionnaire d'entité
    $em->persist( $post ); // on déclare une modification de type persist et la génération des différents liens entre entité
    $em->flush(); // on effectue les différentes modifications sur la base de données 
    // réelle

    return new Response('Sauvegarde OK sur : ' . $post->getId() );
}
```

* pour une modification il suffit de modifier l'instanciation de l'entité de la sorte (ici on récupère le repository de Post et on récupère l'id 1 ; tout le restant du code reste inchangé.
) :

```php
/**
 * @Route("/test/modification", name="test")
 */
public function testModification()
{
    // récupération du post avec id 1 
    $post = $this->getDoctrine()->getRepository(Post::class)->find(1); 
    //equivalent à SELECT * FROM post WHERE id=1
    
    $post->setTitle('Mon titre'); // on set les différents champs
    $post->setEnable(true);
    $post->setDateCreated(new \Datetime);

    $em = $this->getDoctrine()->getManager(); // on récupère le gestionnaire d'entité
    $em->flush(); // on effectue les différentes modifications sur la base de données 
    // réelle

    return new Response('Sauvegarde OK sur : ' . $post->getId() );
}
```

## Recherche d'entité

* Symfony et Doctrine proposes des requêtes prédéfinies, qui répondent aux usages les plus courant.
Si $em est le manager associé à une entité :
  * $em->find($id); on récupère qu'un seul élément de l'entité avec l'id $id;
  * $em->findAll(); on récupère toutes les entrées de l'entité concernée
  * $em->findBy($where, $order, $limit, $offset); on recherche avec le tableau $where on tri avec le tableau $order on récupère $limit éléments à partir de l'élément $offset.
  * $em->findOneBy($where, $order); on récupère le premier élément respectant le tableau $where et trié avec le tableau $order;
  * $em->findByX($search); requêtes magiques où X correspond à n'importe quel champs défini dans votre entité
  * $em->findOneByX($search) ; requêtes magiques où X correspond à n'importe quel champs défini dans votre entité
Par exemple findBySlug('home'); ou findByTitle('Bonjour); génèrera des requêtes de recherche automatiquement. Pour les requêtes avec plusieurs éléments il faudra faire une itération (foreach) ou lister les différents éléments.

```php
// Modifications multiples : 
/**
 * @Route("/est", name="test")
 */
public function test()
{
    // récupération de tous les posts
    $posts = $this->getDoctrine()->getRepository(Post::class)->findAll(); 
    //équivalent à SELECT * FROM post
    $em = $this->getDoctrine()->getManager(); // on récupère le gestionnaire d'entité

    foreach($posts as $post)
    {
        $post->setTitle('Mon titre ' . $post->getId() ); // on set les différents champs
    }

    $em->flush(); // on effectue les différentes modifications sur la base de données 
    // réelle

    return new Response('Sauvegarde OK ');
}
```

* Si aucune requête prédéfinie ne correspond à vos besoin, vous pouvez bien sûr en créer une en passant par le repository.
Vous pouvez également générer vos requêtes manuellement pour avoir une requête complexe et précise directement dans le controller mais idéalement il faudrait le placer dans le repository dédié.

```php
// src/AppBundle/Repository/Post.php

public function maRequete( $where )
{
    // avec querybuilder
    $queryBuilder = $this->createQueryBuilder("p");

    $queryBuilder->where(' p.title like :w');
    $queryBuilder->setParameter(':w', '%'.$where.'%');
    $query = $queryBuilder->getQuery(); // on récupère la requêtes 

       return $query->getResult(); // on renvoie le résultat
}
//OU
 public function maRequeteSQL( $where )
    {
        // avec requête SQL
        $em = $this->getEntityManager();
        $query = $em->createQuery('SELECT p from AppBundle:Post p 
    WHERE p.title like :w');

        $query->setParameter(':w', '%'.$where.'%');


        return $query->getResult(); // on renvoie le résultat
     }
}
```

* Et l'utiliser dans votre controller


```php
// src/AppBundle/Controller/DefautController
$this->getDoctrine()->getRepository(Post::class)->maRequete('test');
```