<script lang="ts">
    let { form } = $props();
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Register</h2>
      
      <form class="space-y-4" action="?/register" method="POST">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            id="name"
            type="text"
            required
            name="name"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="Username"
          />
        </div>

        <div>
            <label for="age" class="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input 
              id="age"
              type="number"
              required
              name="age"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="0"
            />
          </div>
  
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            id="password"
            type="password"
            required
            name="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label for="password1" class="block text-sm font-medium text-gray-700 mb-1">Password again</label>
          <input 
            id="password1"
            type="password"
            required
            name="password1"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
          />
        </div> 

        {#if form?.error}
             <div class="text-red-500 text-sm mt-2">{form.error}</div>
        {/if}

        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
          Register
        </button>
      </form>
  
      <div class="mt-6 text-center text-sm text-gray-600">
        You have account?
        <a href="/login" class="text-indigo-600 hover:text-indigo-500 font-medium">Login</a>
      </div>
    </div>
  </div>