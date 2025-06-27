<template>
  <div class="border p-4 my-2">
    <h3>{{ course.title }}</h3>
    <p>{{ course.description }}</p>
    <RouterLink :to="`/course/${course.id}`">Ver más</RouterLink>
  </div>
</template>

<template>
  <div class="card">
    <h3>{{ course.title }}</h3>
    <p>{{ course.description }}</p>

    <!-- Filtro global (pipe) -->
    <small>Duración: {{ $filters.formatDuration(course.duration) }}</small><br />

    <RouterLink :to="`/course/${course.id}`" class="btn mt-1">Ver más</RouterLink>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>