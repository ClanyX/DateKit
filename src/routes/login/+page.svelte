<script lang="ts">
  let { form } = $props();
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h2>

    <form class="space-y-4" action="?/login" method="POST">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1"
          >Username</label
        >
        <input
          id="name"
          type="text"
          name="name"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="Name"
        />
      </div>

      <div>
        <label
          for="password"
          class="block text-sm font-medium text-gray-700 mb-1">Password</label
        >
        <input
          id="password"
          type="password"
          name="password"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="••••••••"
        />
      </div>

      {#if form?.error}
        <div class="text-red-500 text-sm mt-2">{form.error}</div>
      {/if}

      <button
        type="submit"
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
      >
        Login
      </button>
    </form>

    <div class="mt-6 text-center text-sm text-gray-600">
      Don't have an account?
      <a
        href="/register"
        class="text-indigo-600 hover:text-indigo-500 font-medium">Register</a
      >
    </div>
  </div>
</div>
