<template>
	<div>
    <select v-model="cmOptions.theme">
      <option disabled value="">Please Select An Theme</option>
      <option>cobalt</option>
      <option>3024-night</option>    
      <option>abcdef</option>    
      <option>ambiance</option>    
      <option>base16-dark</option>    
      <option>bespin</option>    
      <option>blackboard</option>    
    </select>
    <select v-model="cmOptions.mode">
      <option disabled value="">Please Select An Theme</option>
      <option>clojure</option>
      <option>coffeescript</option>    
      <option>javascript</option>     
      <option>php</option>    
      <option>ruby</option>    
      <option>python</option>    
      <option>sql</option>    
      <option>vue</option>    
    </select>
    
		<codemirror ref="myCm"
      v-model="code"       
			:options="cmOptions"				
			@input="sendMessage">
		</codemirror>  		
	</div>
</template>

<script>
  import io from 'socket.io-client'
  import {codemirror} from 'vue-codemirror'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/mode/clojure/clojure.js'
  import 'codemirror/mode/coffeescript/coffeescript.js'  
  import 'codemirror/mode/php/php.js'
  import 'codemirror/mode/ruby/ruby.js'
  import 'codemirror/mode/python/python.js'
  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/mode/vue/vue.js'
  import 'codemirror/theme/cobalt.css'		
  import 'codemirror/theme/3024-night.css'		
  import 'codemirror/theme/abcdef.css'		
  import 'codemirror/theme/ambiance.css'		
  import 'codemirror/theme/base16-dark.css'		
  import 'codemirror/theme/bespin.css'		
  import 'codemirror/theme/blackboard.css'

  export default {
    data(){
      return{                        
        code:'//Start Typing here',                
        cmOptions:{
          theme:'cobalt',
          tabSize:2,
          mode:'text/javascript',
          line:true,
          lineNumbers:true,              
          matchBrackets:true,
          autoCloseTags: true,
          extraKeys: {"Ctrl-Space": "autocomplete"}                     
        },        
        socket: io('localhost:3001')    
      }
    },
    methods:{
    sendMessage() {
      this.socket.emit('SEND_MESSAGE', {      
      message: this.code
    });
    return false
    }         
    }, 
    mounted() {      
    this.socket.on('MESSAGE', (data) => {
      let {message} = data
      this.code = message
    });
    },  
    components:{
        codemirror
    }
  }
</script>

<style lang="scss">
.CodeMirror{
    text-align: left;
    margin-bottom: 20px;
}
</style>