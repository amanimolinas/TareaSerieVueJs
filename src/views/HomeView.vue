<template>
  <div class="home">
  <h1 class="main-title">Bienvenido a la Aplicación de Tareas con Vue</h1>
  <p class="subtitle">
      Esta aplicación te permite gestionar tus tareas de manera eficiente. 
      Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
  </p>
  <img alt="Vue logo" src="../assets/logo.png" class="logo"/>
  
  <div class="sections">
      <h2>Secciones de la Aplicación</h2>
      <ul>
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</li>
      <li><strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</li>
      </ul>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.main-title {
  font-size: 40px;
  font-weight: bold;
  color: #cf228d;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #000000;
  margin-bottom: 30px;
}

.logo {
  width: 150px;
  margin-bottom: 40px;
}

.sections {
  font-size: 1rem;
  color: #333;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.sections h2 {
  color: #da46a1;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.sections ul {
  list-style: none;
  padding-left: 0;
}

.sections li {
  margin-bottom: 10px;
}

.sections li strong {
  color: #333;
}
</style>
