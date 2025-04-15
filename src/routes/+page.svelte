<script lang="ts">
    import logo from "../lib/assets/tinder_logo.png";
    import { page } from "$app/stores";
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-0 mt-15">
        <div
            class="relative flex justify-center mx-auto h-[400px] w-[210px] border-4 border-black rounded-2xl contant bg-white"
            style="box-shadow: 5px 5px 2.5px 6px rgb(209, 218, 218)"
        >
            <span
                class="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"
            ></span>

            <span
                class="absolute -right-2 top-14 border-4 border-black h-7 rounded-md"
            ></span>
            <span
                class="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md"
            ></span>

            <div
                class="absolute top-0 w-[80%] h-[80%] flex items-center justify-center"
            >
                <img src={logo} alt="logo" />
            </div>
            <h1 class="absolute bottom-15 text-2xl font-bold">DateKit</h1>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 text-center">
            <section class="flex flex-col justify-center items-center">
                <h2 class="text-3xl font-bold mb-6 text-center">⚙️ Tech Stack & Info</h2>
                <p class="text-gray-700 mb-6 text-center">
                  Seznamka inspirovaná Tinderem, postavená na moderním web stacku:
                </p>
              
                <ul class="space-y-3 text-gray-800">
                  <li><span class="font-semibold">SvelteKit + TypeScript:</span> rychlý frontend s výborným DX</li>
                  <li><span class="font-semibold">Prisma + SQLite:</span> typově bezpečný ORM a jednoduchá databáze</li>
                  <li><span class="font-semibold">bcrypt + session autentizace:</span> bezpečné přihlašování</li>
                </ul>
              
                <p class="text-gray-600 mt-6 text-center">
                  Projekt slouží jako fullstack ukázka s možností dalšího rozšíření.
                </p>
              </section><br>
            
            {#if !$page.data.user}
            <div
                class="relative inline-flex items-center justify-center gap-4 group"
            >
                <div
                    class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a
                    role="button"
                    class="group relative inline-flex items-center justify-center text-base rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-indigo-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                    title="payment"
                    href="/register"
                    >Get Started For Free<svg
                        aria-hidden="true"
                        viewBox="0 0 10 10"
                        height="10"
                        width="10"
                        fill="none"
                        class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                        <path
                            d="M0 5h7"
                            class="transition opacity-0 group-hover:opacity-100"
                        ></path>
                        <path
                            d="M1 1l4 4-4 4"
                            class="transition group-hover:translate-x-[3px]"
                        ></path>
                    </svg>
                </a>
            </div>
            {:else}
            <div
                class="relative inline-flex items-center justify-center gap-4 group"
            >
                <div
                    class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <a
                    role="button"
                    class="group relative inline-flex items-center justify-center text-base rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-indigo-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                    title="payment"
                    href="/main"
                    >Get started<svg
                        aria-hidden="true"
                        viewBox="0 0 10 10"
                        height="10"
                        width="10"
                        fill="none"
                        class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                        <path
                            d="M0 5h7"
                            class="transition opacity-0 group-hover:opacity-100"
                        ></path>
                        <path
                            d="M1 1l4 4-4 4"
                            class="transition group-hover:translate-x-[3px]"
                        ></path>
                    </svg>
                </a>
            </div>
            {/if}
        </div>
    </div>
</div>
