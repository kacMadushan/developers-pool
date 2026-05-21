<script lang="ts">
import type { Developer } from '@/types';
import { defineComponent } from 'vue';

interface DeveloperListData {
  developerList: Developer[];
}

export default defineComponent({
  data: (): DeveloperListData => ({
    developerList: [
      {
        id: '1',
        name: 'Chamika Madushan',
        email: 'kachamika@gmail.com',
        title: 'Senior Frontend Developer',
        headline: 'Senior Frontend Developer | Vue/Nuxt/TypeScript',
        employmentType: 'Full-time',
        location: 'Colombo',
        skills: [
          { id: '1', label: 'Vue.js' },
          { id: '2', label: 'Pinia' },
          { id: '3', label: 'TypeScript' },
        ],
      },
    ],
  }),
});
</script>

<template>
  <div>Developer list</div>
</template>
