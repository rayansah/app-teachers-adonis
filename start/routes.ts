/*
|-------------------------------------------------------------------------
| Routes file
|-------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
import TeachersController from '#controllers/teachers_controller'
// Amélioration de la route permettant d'afficher la liste des enseignants.
// C'est la Homepage de l'application
router.get('/', [TeachersController, 'index']).as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
    // Route permettant de voir les détails d'un enseignant
    router.get('/teacher/:id/show', [TeachersController, 'show']).as('teacher.show')
    // Route permettant de supprimer un enseignant
    router.delete('/teacher/:id/destroy', [TeachersController, 'destroy']).as('teacher.destroy')
    // Route permettant d'afficher le formulaire permettant l'ajout d'un enseignant
    router.get('/teacher/add', [TeachersController, 'create']).as('teacher.create')
    // Route permettant l'ajout de l'enseignant
    router.post('/teacher/add', [TeachersController, 'store']).as('teacher.store')
  })
  .use(middleware.guest())
router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())
