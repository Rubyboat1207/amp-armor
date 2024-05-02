<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { base } from "$app/paths";
    import "../app.css";
    import background from '../assets/hexagon_tile.webp'
    import logo from '../assets/AMPARMORtextlogo.webp'
</script>
<Navbar class=" border-b-2 border-primary-50 sticky top-0 z-50" style="background: url({background}); box-shadow: 0px 0px 15px #00ffff;">
    <NavBrand href="{base}">
      <img src="{logo}" class="me-10 h-10 sm:h-20" alt="Amp-Armor Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold text-primary-500 dark:text-white"></span>
    </NavBrand>
    <NavHamburger/>
    <NavUl >
      <NavLi class="text-primary-400" href="{base}/teampages">Meet The Team</NavLi>
      <NavLi class="text-primary-400" href="{base}/about">About</NavLi>
      <NavLi class="text-primary-400" href="{base}/pricing">Pricing</NavLi>
      <NavLi class="text-primary-400" href="{base}/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
<body>
  <slot />
</body>