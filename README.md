# Purpose
 - A link shortener is a service that allows users to click a short link that redirects them to a longer link.
 - Traditional link shorteners have to store the target link on the server so they can redirect users from the short link to the long link.
 - This requirement of storage results in overhead for the server, as now someone has to pay to keep that data stored indefinitely.
 - This link shortening service is entirely stateless; all data about the target link is stored in URI parameters in the URL. Upon visiting this link, the server decodes the data in the URI parameters to produce a link, and then redirects the user to that link.

# Installation
 - The contents of this repo can run on any webserver that supports JavaScript, server-side PHP execution, and Node.JS version 16.0.0 or later.
 - **There is already a version available at:** https://tools.snailien.net/LinkShortener

# Usage
 1. Visit the `creator.html`.
 2. Type the link you want it to redirect to (the long link) in the `Input Link` box.
 3. Click `Copy` on the button to the right of the `Output Link`.
 4. Your clipboard now contains the resultant shortened link. Share as desired.

# How it Works
 - This program piggybacks heavily off of my work on the [Rapid Tree Notetaker](https://github.com/Snail51/Rapid-Tree-Note), where data is compressed with LZMA2 and encoded in URI-safe Base-64.
 - Due to the nature of data compression, short links will actually get LONGER than the input. This is because all compression necessitates some fixed "space tax" to store instructions for decompression. The longer the link, the better the return on investment.
 - This tool is intended to be used with other tools that encode massive amounts of data in the URL such as [Edotor](https://edotor.net/) and [BeepBox](https://www.beepbox.co/).

# Example
 [Link A](https://edotor.net/?engine=dot?engine=dot#%23%20Place%20the%20cursor%20inside%20%22graph%22%20to%20get%20some%20refactoring%20options%0A%0Adigraph%20%7B%0A%20%20%20%20root%20-%3E%20Combustion%0A%20%20%20%20root%20-%3E%20House%0A%20%20%20%20root%20-%3E%20Factory%0A%20%20%20%20root%20-%3E%20Nature%0A%20%20%20%20root%20-%3E%20Policy%0A%20%20%20%20root%20-%3E%20Infrastructure%0A%20%20%20%20Combustion%20-%3E%20Wood%0A%20%20%20%20Wood%20-%3E%20AdvWood%0A%20%20%20%20Combustion%20-%3E%20Coal%0A%20%20%20%20Coal%20-%3E%20AdvCoal%0A%20%20%20%20Coal%20-%3E%20Oil%0A%20%20%20%20Oil%20-%3E%20AdvOil%0A%20%20%20%20Oil%20-%3E%20NaturalGas%0A%20%20%20%20NaturalGas%20-%3E%20AdvGas%0A%20%20%20%20House%20-%3E%20Townhouse%0A%20%20%20%20Townhouse%20-%3E%20Apartment%0A%20%20%20%20NaturalGas%20-%3E%20Apartment%0A%20%20%20%20Oil%20-%3E%20Plastics%0A%20%20%20%20Infrastructure%20-%3E%20Recycling%0A%20%20%20%20Infrastructure%20-%3E%20Research1%0A%20%20%20%20Research1%20-%3E%20Research2%0A%20%20%20%20Factory%20-%3E%20Research2%0A%20%20%20%20Plastics%20-%3E%20Research2%0A%20%20%20%20Research2%20-%3E%20Research3%0A%20%20%20%20Electronics%20-%3E%20Research3%0A%20%20%20%20Recycling%20-%3E%20ChemicalRecycling%0A%20%20%20%20ChemicalRecycling%20-%3E%20EWasteRecycling%0A%20%20%20%20Plastics%20-%3E%20ChemicalRecycling%0A%20%20%20%20Electronics%20-%3E%20EWasteRecycling%0A%20%20%20%20Factory%20-%3E%20AdvFactory%0A%20%20%20%20AdvFactory%20-%3E%20OrganicFactory%0A%20%20%20%20AdvFactory%20-%3E%20Electronics%0A%20%20%20%20Nature%20-%3E%20Renewables%0A%20%20%20%20Factory%20-%3E%20Renewables%0A%20%20%20%20Renewables%20-%3E%20Wind%0A%20%20%20%20Wind%20-%3E%20LargeWind%0A%20%20%20%20LargeWind%20-%3E%20VerticalWind%0A%20%20%20%20Renewables%20-%3E%20Photovoltaics%0A%20%20%20%20Photovoltaics%20-%3E%20Solar%0A%20%20%20%20Solar%20-%3E%20ConcentratedSolar%0A%20%20%20%20Solar%20-%3E%20ModernSolar%0A%20%20%20%20Renewables%20-%3E%20Hydro%0A%20%20%20%20Hydro%20-%3E%20Dams%0A%20%20%20%20Hydro%20-%3E%20Wave%0A%20%20%20%20Electronics%20-%3E%20Wave%0A%20%20%20%20Renewables%20-%3E%20Geothermal%0A%20%20%20%20Geothermal%20-%3E%20DeepGeothermal%0A%20%20%20%20Infrastructure%20-%3E%20Nuclear%0A%20%20%20%20Electronics%20-%3E%20Nuclear%0A%20%20%20%20Nuclear%20-%3E%20Fission%0A%20%20%20%20Fission%20-%3E%20Uranium%0A%20%20%20%20Fission%20-%3E%20Thorium%0A%20%20%20%20Uranium%20-%3E%20Thorium%0A%20%20%20%20Nature%20-%3E%20Plants%0A%20%20%20%20Plants%20-%3E%20Trees%0A%20%20%20%20Plants%20-%3E%20PeatBog%0A%20%20%20%20Plants%20-%3E%20Biofuel%0A%20%20%20%20AdvOil%20-%3E%20Biofuel%0A%20%20%20%20Infrastructure%20-%3E%20DirectCarbonCapture%0A%20%20%20%20Electronics%20-%3E%20DirectCarbonCapture%0A%20%20%20%20Policy%20-%3E%20Subsidies%0A%20%20%20%20Policy%20-%3E%20Conservation%0A%20%20%20%20Conservation%20-%3E%20AquaticConservation%0A%20%20%20%20Policy%20-%3E%20Negawats%0A%20%20%20%20Infrastructure%20-%3E%20Distribution1%0A%20%20%20%20Distribution1%20-%3E%20Distribution2%0A%20%20%20%20Distribution2%20-%3E%20Distribution3%0A%20%20%20%20Plastics%20-%3E%20Distribution2%0A%20%20%20%20Electronics%20-%3E%20Distribution3%0A%20%20%20%20Trees%20-%3E%20Conservation%0A%20%20%20%20Biofuel%20-%3E%20OrganicFactory%0A%20%20%20%20Plastics%20-%3E%20VerticalWind%0A%20%20%20%20Plastics%20-%3E%20ModernSolar%0A%20%20%20%20Plants%20-%3E%20Algae%0A%20%20%20%20Nuclear%20-%3E%20Fusion%0A%20%20%20%20Fission%20-%3E%20Fusion%0A%20%20%20%20DirectCarbonCapture%20-%3E%20MethaneLandfill%0A%20%20%20%20Combustion%20-%3E%20Incineration%0A%20%20%20%20Recycling%20-%3E%20Incineration%0A%20%20%20%20Infrastructure%20-%3E%20ImprovedInsulation%0A%20%20%20%20House%20-%3E%20ImprovedInsulation%0A%20%20%20%20Oil%20-%3E%20ImprovedInsulation%0A%20%20%20%20Biofuel%20-%3E%20Corn%0A%20%20%20%20Biofuel%20-%3E%20Switchgrass%0A%20%20%20%20Rico%20-%3E%20Awesome%0A%20%20%20%20%0A%7D%0A) is 3,817 characters long and is the target link. After running it through this program, we get [Link B](https://tools.snailien.net/LinkShortener/unpack.php?enc=URI-B64&cmpr=LZMA2&data=3YCAgIJpjoCAgICAgID0va1gcTVP_53KII-eOPvXC8WQNzba83xcxPIL6QWA8bIaQ51rLD7-hYoarx_zbZj14uu0VARtddpygRCepQvwrzMv5H5nMZSjNzNJ_ViPA-tO0LUrWrPMXA2IIMg_EZYze7UKIoy9TlcLe4Ku-Pnb9fzma4uOknG5IZ8snT8McCyGtTj6sjx1awlniQ24PLM_uq4YB1_ciPvymBEercB6qwwDedyhDM9pUJe8sUxJ2PAfUJnoV0-_9zr0WnYqHACY4zmj6_-v8Dm5zY4OylfWSnidqeQYAkwfV_wc7Manr0TIllKbK4S9MiMKDNDbPmSUk97SXQg30bWGlXkN4CsdORsaBa84cRQjsU69Alw7vEVL_X8WmPI3-Fknsfxws9_BYCidDxCDPivvYiEYtuonXoWdseVo4XbDEoqtmCbWZMm_qj4TwUgwXpd3PNyFVeBDMYEFuiU6CiIxFuatVPy_kcEuDQj_v8YaJfZJiZAiwq5vinkeleFNKpWaU8pD7mVops57a7IhCtqPcEbxME3g6HKN06enrP4GVmAclFAVAYcBPJzSMWHlABpPitVES66NW0-1w-LbFdqsClOOtUUTHIykxi25e3S3wAUEvmy8kdZ1_8eqpXJ-MKg0V63pQpJlIpE1fP18t-QRw-8p5SvIwHwEzx-XX_eYJTNvf112BwxCTp3Il5fpnY1-LIomriNAf77SUVKf1tEaCMkZ2Yugzo28I2Z4pWss048nD6Fl318tbR8ZbcItgODr2CZWNXjgmXzayqCZbuuTtuonT3IUEb5kYoh0UhvlIvisVqRH5HBnYJDpEobPlrZ5gpYgntAAduMFiNJzIit5G23tMxx1LYZH6H8joqwbZtXspHtQYFPYhpGl-zVysDrEBf0Vw3zDIo_abVXGDV1dJ9S3ZaA7fCaPjRzGRd1UQWiIh-yAnui66LZFdGVcApnmH3KljUJiZoTKNSYmr_dKMCwtGaQmTEDvfJKHNpkwYDmj8ogwVoMvYHNG38Sxpc7Rw3Oor3-_ms-A), which is 1,128 characters long. This is a reduction of 3.38x! Link B is still pointing to the exact same location as Link A, it is just more efficiently encoding that data.