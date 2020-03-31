import ExampleComponent from '../components/ExampleComponent'
import TestComponent from '../components/Test'
import DashboardView from '../views/DashboardView'

export default [
  {
      path: '/',
      component: DashboardView
  },
  {
    path: '/example',
    component: ExampleComponent
  },
  {
    path: '/test',
    component: TestComponent
  }
]
