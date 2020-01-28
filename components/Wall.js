export default {
    props: ["w", "h"],
    template: `
    	<a-entity>
        <a-plane static-body position="0 2.5 0" shadow="recieve: true" material="color: #e5e5e5; side: double"  :width=this.w :height=this.h class="wall">
           
                <a-entity position="0 0 0.01">
                    <slot />
                </a-entity>
            </a-plane>
        </a-entity>
    `
}