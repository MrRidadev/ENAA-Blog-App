# 📰 Blog App - Projet Angular

Une application de blog construite avec Angular 18 permettant aux utilisateurs de consulter, créer, modifier et supprimer des articles, avec système d'authentification et gestion des commentaires.

---

## 🔧 Fonctionnalités

### Utilisateur anonyme
- 🔍 Consulter la liste des articles
- 📖 Lire un article en détail
- 🗂️ Filtrer les articles par catégorie ou mot-clé
- 🔎 Rechercher un article par titre

### Utilisateur authentifié (auteur/admin)
- 🔐 Connexion via un formulaire de login
- 📝 Création de nouveaux articles (titre, contenu, image, catégorie)
- ✏️ Modification des articles existants
- ❌ Suppression d’articles créés
- 💬 Ajouter ou supprimer des commentaires
- 📊 Accès à un tableau de bord privé

### Sécurité
- 🔒 Ajout, modification et suppression des articles réservés aux utilisateurs authentifiés
- 🛡️ Accès au tableau de bord protégé par `AuthGuard`

---

## 🧱 Architecture Technique

### Composants Angular
- `navbar` : barre de navigation dynamique
- `home` : page d’accueil avec articles récents
- `post-list` : liste des articles avec pagination
- `post-detail` : détail d’un article
- `post-form` : création/modification d’un article
- `login` : formulaire d’authentification
- `comment-section` : gestion des commentaires

### Services Angular
- `PostService` : CRUD des articles via une API
- `AuthService` : gestion de l'authentification et session
- `CommentService` : gestion des commentaires
- `AuthGuard` : protection des routes privées

---

## 💻 Technologies Utilisées

| Type          | Technologie         |
|---------------|---------------------|
| Frontend      | Angular 18         |
| Langages      | TypeScript, HTML, SCSS |
| UI Framework  | Tailwind CSS ( Bootstrap) |
| Backend/API   |  Firebase |
| Authentification | LocalStorage      |
| Outils        | Git, GitHub, Postman, Angular CLI |

---

## 🚀 Installation et Lancement

### 1. Cloner le projet
```bash
git clone https://github.com/MrRidadev/ENAA-Blog-App.git
cd ENAABolgApp
