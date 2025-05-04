<script lang="ts">
  let { user, title, local } = $props();
  import female from "$lib/assets/female.png";
  import male from "$lib/assets/male.png";
  import other from "$lib/assets/other.png";
  import { onMount } from "svelte";

  let isUserLoad = $state(true);

  if (!local) {
    isUserLoad = false;
    onMount(() => {
      swapUser();
    });
  }

  async function promoteUser() {
    isUserLoad = false;
    await fetch("/api/promote", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    });
  }

  async function swapUser() {
    const res = await fetch("/api/swap", { method: "POST" });
    const data = await res.json();
    if (user.name !== data.randomUser.name) {
      user = data.randomUser;
    } else {
      swapUser();
    }

    isUserLoad = true;
  }

  async function showProfile(){
    await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = '/profile';
  }
</script>

{#if isUserLoad}
  <div
    class="product-card w-[300px] rounded-md shadow-xl overflow-hidden z-10 relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
  >
    <div
      class="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150"
    >
      <div class="flex gap-1">
        <svg
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="1"
          fill="none"
          viewBox="0 0 24 24"
          class="fill-gray-300 rotate-[24deg]"
          height="200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          ></polygon>
        </svg>
      </div>
    </div>
    <div
      class="absolute rounded-full bg-gray-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"
    ></div>
    <div class="para uppercase text-center leading-none z-40">
      <p class="text-black font-semibold text-xs font-serif">{title}</p>
      <p class="font-bold text-xl tracking-wider text-gray-500">{user.name}</p>
    </div>
    <div class="img w-[256px] aspect-square bg-gray-100 z-40 rounded-md">
      <img
        src={user.sex === "male"
          ? male
          : user.sex === "female"
            ? female
            : other}
        alt="profile_photo"
      />
    </div>
    <div
      class="btm-_container z-40 flex flex-row justify-between items-end gap-10"
    >
      <div class="flex flex-col items-start gap-1">
        <div class="inline-flex gap-3 items-center justify-center">
          <div
            class="p-1 bg-white flex items-center justify-center rounded-full"
          >
            <svg
              class="w-4 h-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <p class="font-semibold text-xs text-white">Age: {user.age}</p>
        </div>
        <div class="flex flex-row gap-2">
          <div class="inline-flex gap-3 items-center justify-center">
            <div
              class="p-1 bg-white flex items-center justify-center rounded-full"
            >
              <svg
                class="w-4 h-4 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v13m0-13 4 4m-4-4-4 4"
                />
              </svg>
            </div>
            <p class="font-semibold text-xs text-white">Point: {user.points}</p>
          </div>
        </div>
      </div>
      {#if !local}
        <div class="btn">
          <button
            class="uppercase font-semibold text-xs px-2 whitespace-nowrap py-1 rounded-full bg-white text-gray-800"
            onclick={promoteUser}
          >
            Promote
          </button>
          <button
            class="uppercase font-semibold text-xs px-2 whitespace-nowrap py-1 rounded-full bg-white text-gray-800"
            onclick={swapUser}
          >
            Swap
          </button>
          <button
            class="uppercase font-semibold text-xs px-2 whitespace-nowrap py-1 rounded-full bg-white text-gray-800 mt-1"
            onclick={showProfile}
          >
            Profile
          </button>
        </div>
      {/if}
    </div>
  </div>
{:else}
  <div class="flex flex-row gap-2 justify-center items-center">
    <div class="w-4 h-4 rounded-full bg-indigo-700 animate-bounce"></div>
    <div
      class="w-4 h-4 rounded-full bg-indigo-700 animate-bounce [animation-delay:-.3s]"
    ></div>
    <div
      class="w-4 h-4 rounded-full bg-indigo-700 animate-bounce [animation-delay:-.5s]"
    ></div>
  </div>
{/if}
