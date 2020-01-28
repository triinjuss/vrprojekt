import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import WallWindow from "./components/WallWindow.js";
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
import CeilingWindow from './components/CeilingWindow.js'
import Rig from "./components/Rig.js";

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling, Rig, WallWindow, CeilingWindow,},
    
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
          

            <a-asset-item id="aken" src="./assets/models/aken.obj"></a-asset-item>
            <a-asset-item id="aken-mtl" src="./assets/models/aken.mtl"></a-asset-item>

            <a-asset-item id="UmbrellaPalmtree" src="./assets/models/UmbrellaPalmtree.obj"></a-asset-item>
            <a-asset-item id="UmbrellaPalmtree-mtl" src="./assets/models/UmbrellaPalmtree.mtl"></a-asset-item>

            <a-asset-item id="1" src="./assets/models/1.obj"></a-asset-item>
            <a-asset-item id="1-mtl" src="./assets/models/1.mtl"></a-asset-item>

            
            <a-asset-item id="raamat" src="./assets/models/raamat.obj"></a-asset-item>
            <a-asset-item id="raamat-mtl" src="./assets/models/raamat.mtl"></a-asset-item>

            <a-asset-item id="raam" src="./assets/models/raam.obj"></a-asset-item>
            <a-asset-item id="raam-mtl" src="./assets/models/raam.mtl"></a-asset-item>


          </a-assets>
        </template>

         <!-- blenderist imporditud .obj-mudel koos .mtl-materjalidega; vt a-assets ülalpool -->
    


        <a-entity class="pinkpuit" position=" 5.016 0.810 3.687" rotation="-51.99 127.976 4.813" scale="0.0015 0.0015 0.0015" obj-model="obj: #1; mtl: #1-mtl"></a-entity>  
        <a-entity class="pinkpuit2" position=" -4.603 0.810 3.687" rotation="-51.99 127.976 4.813" scale="0.0015 0.0015 0.0015" obj-model="obj: #1; mtl: #1-mtl"></a-entity>  

        <a-entity class="raamat" position="-0.02 0.998 4.108" rotation="0 99.829 0" scale="1 1 1" obj-model="obj: #raamat; mtl: #raamat-mtl"></a-entity>  
      
        <a-entity class="puu" position=" 8.19 0.2 3.3" rotation="0 -90 0" scale="0.45 0.4 0.45" obj-model="obj: #UmbrellaPalmtree; mtl: #UmbrellaPalmtree-mtl"></a-entity>  
       
        <Box  class="hover"
              position="0 0.471 4.1" 
              scale="1 0.6 1"
              shadow="cast: true" 
              material="src: ./assets/models/1_0.jpg;" 
              
               />

        
          <!-- Rig-i sisse võib panna asju, mis peaks liikuma koos kaameraga, märksõna HUD -->
          <!-- Hetkel on siin tekstid, mis muutuvad nähtavaks, kui vaatad õige asja peale -->


        <Rig>
<!-- pildinimetused -->
        <a-entity id="pilt1" visible="false" position="0 -0.2 -0.5" > <a-text  value="Natüürmort\n autor: Triin Juss \n Juhendaja: Maaria Treima" font="./assets/signika/Signika-SemiBold-msdf.json" negate="false" width="0.5" align="center" color="#222222" /> </a-entity>
        <a-entity id="pilt2" visible="false" position="0 -0.2 -0.5" > <a-text  value="Monokroom akvarell kuiv tehnika sinistes toonides \n autor: Triin Juss \n Juhendaja: Leelo Leesi" font="./assets/signika/Signika-SemiBold-msdf.json" negate="false" width="0.5" align="center" color="#222222" /> </a-entity>
        <a-entity id="pilt3" visible="false" position="0 -0.2 -0.5" > <a-text  value="Akvarell märg tehnika \n Tulbid  \n autor: Triin Juss \n Juhendaja: Leelo Leesi" font="./assets/signika/Signika-SemiBold-msdf.json" negate="false" width="0.5" align="center" color="#222222" /> </a-entity>
        <a-entity id="pilt4" visible="false" position="0 -0.2 -0.5" > <a-text  value="Natüürmort sinise akrüüliga \n autor: Triin Juss \n Juhendaja: Maria Evestus" font="./assets/signika/Signika-SemiBold-msdf.json" negate="false" width="0.5" align="center" color="#222222" /> </a-entity>
        <a-entity id="pilt5" visible="false" position="0 -0.2 -0.5" > <a-text  value="Natüürmort ultramariin ja burnt sienna \n autor: Triin Juss \n Juhendaja: Maria Evestus" font="./assets/signika/Signika-SemiBold-msdf.json" negate="false" width="0.5" align="center" color="#222222" /> </a-entity>
        <a-entity id="pilt6" visible="false" position="0 -0.2 -0.5" > <a-text  value="Autoportree tintenpen\n autor: Triin Juss \n Juhendaja: Leelo Leesi" font="./assets/signika/Signika-SemiBold-msdf.json" negate="false" width="0.5" align="center" color="#222222" /> </a-entity>
        <a-entity id="pilt7" visible="false" position="0 -0.2 -0.5" > <a-text  value="Autoportree tintenpen \n autor: Triin Juss \n Juhendaja: Leelo Leesi" font="./assets/signika/Signika-SemiBold-msdf.json" negate="false" width="0.5" align="center" color="#222222" /> </a-entity>
        <a-entity id="pilt8" visible="false" position="0 -0.2 -0.5" > <a-text  value="\n Grimm: Kaia Pihlak \n Foto Kristi Toiger" font="./assets/signika/Signika-SemiBold-msdf.json" negate="false" width="0.5" align="center" color="#222222" /></a-entity>
        <!-- <a-plane  material="shader: flat" color="gray" scale="0.5 0.1 0" opacity="0.3" />  </a-entity> -->

</Rig>

        <Ceiling> 
        <CeilingWindow class="aknaga sein" position="5 5 -2.5" rotation="90 90 90">  </CeilingWindow>
        <CeilingWindow  class="aknaga sein" position="-5 5 -2.5" rotation="-90 -90 -90" > </CeilingWindow > 
        </Ceiling> 

        
        <Ceiling> 
        <a-entity class="keskkonnavalgus" light="type: point; color: #fff; intensity: 0.5;"  position="0.2 2.5 0" rotation="0 0 0">
          <a-entity material="color: white; emissive: white; emissionIntensity: 0.3;"></a-entity>
        </a-entity>            
        </Ceiling> 
        
       <!-- parem sein -->

      	<Wall position="0 0 -5" w="20" h="5">  
          <!-- seina komponenti on muudetud nii, et tema 'sisse' saab panna asju, mis peaks ta peal rippuma, vaikimisi täpselt keskel -->
          <!-- allpoolse a-plane-i küljes on evendid e. sündmused, mis m4udavad selle peale vaadates õige teksti nähtavaks (ja ka nähtamatuks) -->
       
            <a-entity class="oun" position=" -5.444 -0.751 0.038" rotation="0.6 0.4 -0.1" scale="7.1 7.809 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

            <a-plane 
              position="-6 0 0"
              scale="2 3 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/ouna_pilt.png"
              class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt1; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt1; visible: false"
          ></a-plane>
          
          <a-entity class="sinine" position=" 6.439 -0.751 0.038" rotation="0.6 0.4 -0.2" scale="7.23 7.809 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

          <a-plane
                position="6 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/sinine_vv.jpg"
                shadow="cast: true"
                class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt2; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt2; visible: false"
            ></a-plane>

            <a-entity class="tulp" position=" 3.468 -0.751 0.038" rotation="0.6 0.4 -0.1" scale="7.1 8 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

          <a-plane 
              position="3 0 0"
              scale="2 3 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/vesiv_tulp.jpg"
              class="hover" 
              event-set__enter="_event: mouseenter; _target: #pilt3; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt3; visible: false"
              
          ></a-plane>

          <a-entity class="monokroom" position=" 0.486 -0.751 0.038" rotation="0.6 0.4 -0.1" scale="6.9 8.2 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

          <a-plane 

              position="0 0 0"
              scale="2 3.1 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/sinine_momocrom.png"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilt4; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt4; visible: false"
           ></a-plane>

           <a-entity class="kannud" position=" -2.473 -0.751 0.038" rotation="0 0 0" scale="7.2 8 0.1" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    

           <a-plane
                position="-3 0 0"
                scale="2 3 0"
                material="src: ./assets/pildid/kannud_burn.jpg"
                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilt5; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilt5; visible: false"
            ></a-plane>    

        </Wall>

        <!-- esiseina seinatekst -->
               <a-text value="SOLO EXIBITION –" rotation="0 90 0" position="-9.975 3.3 3.415" width="8" color="grey"></a-text> 
                <a-text value="LIFE IS CREATION" rotation="0 90 0" position="-9.975 2.9 3.415" width="8" color="grey"></a-text>
               <a-text value="TRIIN JUSS" rotation="0 90 0" position="-9.975 2.4 3.414" width="5" color="grey"></a-text>
               <a-text value="2020" rotation="0 90 0" position="-9.975 2. 3.414" width="4" color="grey"></a-text>
                     
<!-- esisein -->    
           <Wall position="-10 0 0" rotation="0 90 0" w="10" h="5">
          
          
          <a-entity class="varviline" position=" 2 -0.750 0.0395" rotation="0.6 0.4 0" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>         
            <a-plane
              position="1.5 0 0"
              scale="2.2 3.2 0"
              shadow="cast: true" 
              material="src: ./assets/pildid/veb_Triin_3.jpg"
              
              class="hover"
              event-set__enter="_event: mouseenter; _target: #pilt8; visible: true"
              event-set__leave="_event: mouseleave; _target: #pilt8; visible: false"
          ></a-plane>


</Wall>

<!-- otsasein -->
<Wall position="10 0 0" rotation="0 -90 0"w="10" h="5" >

<a-entity class="varviline" position=" -2.213 -0.751 0.038" rotation="0.6 0.4 0" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    
          <a-plane
                position="-2.7 0 0"
                scale="2.2 3.1 0"
                material="src: ./assets/pildid/varviline_mina.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilt6; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilt6; visible: false"
            ></a-plane>
            <a-entity class="mustvalge" position=" 1.187 -0.751 0.038" rotation="0.6 0.4 0" scale="7.468 8.309 0.988" obj-model="obj: #raam; mtl: #raam-mtl;"></a-entity>    
            <a-plane
                position="0.738 0 0"
                scale="2.09 3 0"
                material="src: ./assets/pildid/mina-must-valge.png"
                shadow="cast: true"

                class="hover"
                event-set__enter="_event: mouseenter; _target: #pilt7; visible: true"
                event-set__leave="_event: mouseleave; _target: #pilt7; visible: false"
            ></a-plane>
        

        
</Wall>
<WallWindow class="aknaga sein" position="5 0 5" rotation="0 -180 0">  </WallWindow>
        <WallWindow class="aknaga sein" position="-5 0 5 " rotation="0 180 0">  </WallWindow> 
        </Wall>
</Wall>

        <Floor />
        
        
        <a-entity environment="preset: forest; gridColor:#445; grid:none;  " ></a-entity>
      </Scene>
    </Layout>
    `
});