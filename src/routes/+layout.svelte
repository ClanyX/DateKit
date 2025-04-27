<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import logo from "$lib/assets/tinder_logo.png";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav
  class="bg-white fixed ixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:bg-gray-800"
>
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-8" alt="Tinder Logo" />
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >DateKit</span
      >
    </a>
    <button
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded={isMenuOpen}
      on:click={toggleMenu}
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div
      class="w-full md:block md:w-auto"
      id="navbar-default"
      class:hidden={!isMenuOpen}
    >
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700"
      >
        <li>
          <a
            href="/"
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            aria-current="page">Home</a
          >
        </li>
        {#if !$page.data.user}
          <li>
            <a
              href="/login"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Login</a
            >
          </li>
          <li>
            <a
              href="/register"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Register</a
            >
          </li>
        {/if}
        {#if $page.data.user}
          <li>
            <a
              href="/main"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Application</a
            >
          </li>
          <li>
            <form action="/logout" method="POST">
              <button
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                type="submit">Logout</button
              >
            </form>
          </li>
          <li>
            <a
              href="/profile"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Profile</a
            >
          </li>
        {/if}
        <li>
          <a
            href="/about"
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >About</a
          >
        </li>
        <li>
          <!-- Only frontend (not working) -->
          <div
            class="flex items-center border border-solid border-white rounded-full h-7"
          >
            <button
              class="inline-flex items-center justify-center ring-offset-white transition-colors text-white hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-black w-[var(--sz)] h-[var(--sz)] min-w-[var(--sz)] min-h-[var(--sz)] max-w-[var(--sz)] max-h-[var(--sz)] [--sz:36px] p-0.5 rounded-full hover:bg-transparent data-[state=active]:bg-white-600/30 data-[state=active]:text-black"
              aria-label="light"
              data-state=""
              type="button"
            >
              <svg
                data-initial="icon-theme-sync"
                width="13px"
                height="13px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              >
                <path
                  d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"
                ></path>
                <g data-g="high">
                  <path d="M4 12h-3"></path>
                  <path d="M12 4v-3"></path>
                  <path d="M20 12h3"></path>
                  <path d="M12 20v3"></path>
                </g>
                <g data-g="low">
                  <path d="M6.343 17.657l-1.414 1.414"></path>
                  <path d="M6.343 6.343l-1.414 -1.414"></path>
                  <path d="M17.657 6.343l1.414 -1.414"></path>
                  <path d="M17.657 17.657l1.414 1.414"></path>
                </g>
              </svg>
            </button>

            <button
              class="inline-flex items-center justify-center ring-offset-white transition-colors text-white hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-black w-[var(--sz)] h-[var(--sz)] min-w-[var(--sz)] min-h-[var(--sz)] max-w-[var(--sz)] max-h-[var(--sz)] [--sz:36px] p-0.5 rounded-full hover:bg-transparent data-[state=active]:bg-white-600/30 data-[state=active]:text-black"
              aria-label="dark"
              data-state=""
              type="button"
            >
              <svg
                data-initial="icon-theme-sync"
                width="13px"
                height="13px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="0"
                stroke="currentColor"
                fill="none"
              >
                <path
                  d="m4.8.69c0-.38-.31-.69-.69-.69s-.69.31-.69.69v1.03h-1.03c-.38,0-.69.31-.69.69s.31.69.69.69h1.03v1.03c0,.38.31.69.69.69s.69-.31.69-.69v-1.03h1.03c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-1.03V.69Zm5.14,5.14c0-.38-.31-.69-.69-.69s-.69.31-.69.69v1.03h-1.03c-.38,0-.69.31-.69.69s.31.69.69.69h1.03v1.03c0,.38.31.69.69.69s.69-.31.69-.69v-1.03h1.03c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-1.03v-1.03Zm-6.86,5.14c0-.38-.31-.69-.69-.69s-.69.31-.69.69v1.03H.69c-.38,0-.69.31-.69.69s.31.69.69.69h1.03v1.03c0,.38.31.69.69.69s.69-.31.69-.69v-1.03h1.03c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-1.03v-1.03ZM14.47,1.51l-.51-.07c-.37-.04-.58.38-.37.69.24.35.46.71.67,1.08.86,1.59,1.35,3.42,1.35,5.36,0,5.61-4.08,10.26-9.43,11.16-.41.07-.84.12-1.27.14-.37.02-.57.45-.31.71.12.12.24.24.36.35l.12.11.45.39.32.25.21.15.32.22.3.2c.21.13.42.25.64.37l.45.23.45.2.52.21.42.15c.23.08.46.14.7.21.18.05.36.09.54.13.22.04.43.08.65.12l.54.07.46.04c.22.01.44.02.66.02,6.25,0,11.31-5.07,11.31-11.31,0-.43-.02-.85-.07-1.27l-.06-.48c-.06-.38-.14-.76-.23-1.13-.12-.44-.26-.88-.43-1.3l-.19-.46-.13-.28-.13-.26c-.27-.53-.58-1.03-.93-1.51l-.26-.34-.34-.41-.28-.31-.2-.21-.28-.27-.38-.34-.55-.45-.42-.3-.5-.33-.55-.32-.56-.28-.19-.09-.41-.17-.47-.18-.43-.14-.56-.15-.45-.1-.5-.09Zm3.19,7.4c0-1.76-.35-3.43-.98-4.96,3.31,1.52,5.61,4.86,5.61,8.73,0,5.3-4.3,9.6-9.6,9.6-1.49,0-2.89-.34-4.15-.94,2.5-.79,4.67-2.3,6.27-4.3.23.32.61.53,1.04.53.71,0,1.29-.58,1.29-1.29,0-.61-.43-1.12-1-1.25.11-.2.21-.4.3-.61.33.2.71.32,1.13.32,1.18,0,2.14-.96,2.14-2.14s-.96-2.14-2.14-2.14c.06-.51.09-1.02.09-1.54Z"
                  fill="currentColor"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

<slot />
