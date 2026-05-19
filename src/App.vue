<template>
  <div class="min-h-screen flex items-center justify-center bg-s-gray-100">
    <div class="w-full mx-auto rounded-xl lg:max-w-5xl bg-white">
      <div class="flex flex-col">
        <div class="flex items-center justify-between border-b border-s-gray-100 p-4">
        <h2 class="text-black-heading text-4xl">Developers</h2>
        <button class="bg-s-gray-100 text-black-heading rounded-full cursor-pointer px-6 py-3 font-medium">Create New</button>
      </div>
      <div class="flex items-center justify-between gap-x-8 p-4">
        <div class="w-full">
          <input class="w-full bg-s-gray-100 px-4 py-3 rounded-lg outline-0" type="text" placeholder="Search...">
        </div>
        <ul class="flex items-center gap-x-4">
          <li>
            <button class="border border-s-gray-200 text-black-heading cursor-pointer font-medium px-4 py-2 rounded-full">React</button>
          </li>
          <li>
            <button class="border border-s-gray-200 text-black-heading cursor-pointer font-medium px-4 py-2 rounded-full">Vue</button>
          </li>
          <li>
            <button class="border border-s-gray-200 text-black-heading cursor-pointer font-medium px-4 py-2 rounded-full">Angular</button>
          </li>
          <li>
            <button class="border border-s-gray-200 text-black-heading cursor-pointer font-medium px-4 py-2 rounded-full">Svelte</button>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-y-2 p-4">
        <div class="flex items-center rounded-lg justify-between p-4 border border-s-gray-100">
          <div class="flex items-center gap-x-3">
            <div class="size-12 bg-s-gray-200 rounded-full"></div>
            <div>
              <h4 class="font-medium text-lg text-black-heading">Harry Potter</h4>
              <span class="block text-s-gray-500 text-sm font-medium">Front-End Developer</span>
            </div>
          </div>
          <div>
            <button class="border border-s-gray-200 text-black-heading cursor-pointer font-medium px-4 py-2 rounded-full">View Profile</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    developerList: [
      {
        id: '1',
        name: 'Harry Potter',

      }
    ]
  })
}
</script>