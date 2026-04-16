<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref(null)

// 1. Define your languages and flag paths (pointing to /public/flags/)
const languages = [
  { code: 'en', name: 'English', flag: 'icons/flags/en.svg' },
  { code: 'lb', name: 'Lëtzebuergesch', flag: 'icons/flags/lb.svg' },
  { code: 'fr', name: 'Français', flag: 'icons/flags/fr.svg' },
  { code: 'de', name: 'Deutsch', flag: 'icons/flags/de.svg' }
]

// 2. Get the currently active language object
const currentLanguage = computed(() => 
  languages.find(lang => lang.code === locale.value) || languages[0]
)

// 3. Function to change language
const selectLanguage = (code) => {
  locale.value = code
  localStorage.setItem('user-lang', code)
  isOpen.value = false
}

// 4. Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => window.addEventListener('click', handleClickOutside))
onUnmounted(() => window.removeEventListener('click', handleClickOutside))

const props = defineProps({
  isScrolled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <!-- Trigger Button -->
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="inline-flex items-center justify-between w-48 rounded-md px-4 py-2 text-sm font-semibold text-black md:text-inherit border hover:border-icarus-red focus:outline-none"
      :class="isScrolled ? 'border-gray-300' : 'border-transparent'"
    >
      <div class="flex items-center gap-3">
        <img :src="currentLanguage.flag" class="h-5 w-5 rounded-sm object-cover" />
        <span>{{ currentLanguage.name }}</span>
      </div>
      <!-- Chevron Icon -->
      <svg 
        :class="['ml-2 h-5 w-5 transition-transform', isOpen ? 'rotate-180' : '']" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white/80 ring-1 ring-icarus-red ring-opacity-5 z-50"
      >
        <div class="py-1">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="selectLanguage(lang.code)"
            :class="[
              'flex items-center gap-3 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors rounded-md',
              locale === lang.code ? 'bg-gray-50 text-icarus-red font-semibold' : 'text-gray-700'
            ]"
          >
            <img :src="lang.flag" class="h-5 w-5 rounded-sm object-cover" />
            <span class="flex-1 font-semibold">{{ lang.name }}</span>
            
            <!-- Checkmark for active language -->
            <svg v-if="locale === lang.code" class="h-4 w-4 text-icarus-red" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>