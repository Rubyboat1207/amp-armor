<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    import "../app.css";
</script>
<Navbar class="bg-primary-300 border-b-2 border-primary-50 sticky top-0 z-50" >
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center  whitespace-nowrap text-xl font-semibold text-primary-500 dark:text-white">Amp-Armor</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl >
      <NavLi class="text-primary-400" href="/">Home</NavLi>
      <NavLi class="text-primary-400" href="/about">About</NavLi>
      <NavLi class="text-primary-400" href="/docs/components/navbar">Navbar</NavLi>
      <NavLi class="text-primary-400" href="/pricing">Pricing</NavLi>
      <NavLi class="text-primary-400" href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
<slot />