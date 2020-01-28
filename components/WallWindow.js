export default {
    template: `
    	<a-entity static-body>
            <a-entity position="0 1 0"> 
                <!-- aken läheb siia -->
                <a-entity scale="1.5 1.5 1.5" position="0 0.01 0" rotation="0 -90 0" material="side: double; castShadow: true" class="aken" obj-model="obj: #aken; mtl: #aken-mtl"></a-entity>
                 
                </a-entity>
            <a-plane position="0 0.5 0" scale="1 0.21 1" shadow="recieve: true" material="color: white; side: double"  width="10" height="5" class="wall1"></a-plane>
            <a-plane position="0 4.5 0" scale="1 0.21 1" shadow="recieve: true" material="color: white; side: double"  width="10" height="5" class="wall2"></a-plane>
            
            <a-plane position="-4.4 2.5 0" scale="0.13 1 1" shadow="recieve: true" material="color: white; side: double"  width="10" height="5" class="wall3"></a-plane>
            <a-plane position="4.385 2.5 0" scale="0.13 1 1" shadow="recieve: true" material="color: white; side: double"  width="10" height="5" class="wall4"> </a-plane>
        </a-entity>
    `
}