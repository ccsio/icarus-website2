<script setup>
</script>

<template>

<div class="max-w-6xl mx-auto px-6 py-12">
  <!-- 
      Container: 
      - Vertical (border-s) on mobile 
      - Horizontal (flex) on md and up 
  -->
  <ol class="relative border-s border-icarus-red md:border-s-0 md:flex md:items-start md:gap-x-0">
    
    <!-- Timeline Item 1 -->
    <li class="relative mb-10 ms-7 md:ms-0 md:mb-0 md:flex-1">
      <!-- DOT & LINE SECTION -->
      <div class="flex items-center">
        <!-- 
          The Dot: 
          - Mobile: Absolute, moved left to center on the border-s
          - Desktop: Relative, flex-shrink-0 to keep its shape
        -->
        <div class="absolute md:relative -start-9.5 md:start-0 z-10 w-5 h-5 bg-icarus-red rounded-full border-4 border-white shrink-0"></div>
        
        <!-- The Horizontal Line: Only visible on Desktop -->
        <div class="hidden md:block w-full h-px bg-icarus-red"></div>
      </div>

      <!-- CONTENT SECTION -->
      <div class="mt-4 md:pe-8">
        <time class="inline-block border border-icarus-red text-slate-700 text-xs font-bold px-2 py-1 rounded mb-2">
          October 2022
        </time>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Lorem Ipsum Title</h3>
        <p class="text-slate-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Team formation and initial strategy sessions.
        </p>
      </div>
    </li>

    <!-- Timeline Item 2 -->
    <li class="relative mb-10 ms-7 md:ms-0 md:mb-0 md:flex-1">
      <div class="flex items-center">
        <div class="absolute md:relative -start-9.5 md:start-0 z-10 w-5 h-5 bg-icarus-red rounded-full border-4 border-white shrink-0"></div>
        <div class="hidden md:block w-full h-px bg-icarus-red"></div>
      </div>
      <div class="mt-4 md:pe-8">
        <time class="inline-block border border-icarus-red text-slate-700 text-xs font-bold px-2 py-1 rounded mb-2">
          2023-2025
        </time>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Lorem Ipsum Title</h3>
        <p class="text-slate-600 text-sm leading-relaxed">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Multiple podium finishes across the region.
        </p>
      </div>
    </li>

    <!-- Timeline Item 3 -->
    <!-- <li class="relative mb-10 ms-7 md:ms-0 md:mb-0 md:flex-1">
      <div class="flex items-center">
        <div class="absolute md:relative -start-9.5 md:start-0 z-10 w-5 h-5 bg-icarus-red rounded-full border-4 border-white shrink-0"></div>
        <div class="hidden md:block w-full h-px bg-icarus-red"></div>
      </div>
      <div class="mt-4 md:pe-8">
        <time class="inline-block border border-icarus-red text-slate-700 text-xs font-bold px-2 py-1 rounded mb-2">
          May 2025
        </time>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Lorem Ipsum Title</h3>
        <p class="text-slate-600 text-sm leading-relaxed">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </li> -->

    <!-- Timeline Item 4 -->
    <li class="relative mb-0 ms-7 md:ms-0 md:flex-1">
      <div class="flex items-center">
        <div class="absolute md:relative -start-9.5 md:start-0 z-10 w-5 h-5 bg-icarus-red rounded-full border-4 border-white shrink-0"></div>
        <div class="hidden md:block w-full h-px bg-icarus-red"></div>
      </div>
      <div class="mt-4 md:pe-8">
        <time class="inline-block border border-icarus-red text-slate-700 text-xs font-bold px-2 py-1 rounded mb-2">
          Sept 2025
        </time>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Lorem Ipsum Title</h3>
        <p class="text-slate-600 text-sm leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </li>
  </ol>
</div>
</template>