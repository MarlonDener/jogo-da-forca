(function(a){function e(e){for(var i,s,n=e[0],c=e[1],l=e[2],v=0,u=[];v<n.length;v++)s=n[v],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(a[i]=c[i]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var a,e=0;e<r.length;e++){for(var t=r[e],i=!0,n=1;n<t.length;n++){var c=t[n];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),a=s(s.s=t[0]))}return a}var i={},o={app:0},r=[];function s(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=a,s.c=i,s.d=function(a,e,t){s.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,e){if(1&e&&(a=s(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var i in a)s.d(t,i,function(e){return a[e]}.bind(null,i));return t},s.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(e,"a",e),e},s.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},s.p="/jogo-da-forca/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;r.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"0eed":function(a,e,t){"use strict";t("af0d")},1602:function(a,e,t){},"1c30":function(a,e,t){},"3dab":function(a,e,t){"use strict";t("728a")},5066:function(a,e,t){},"557a":function(a,e,t){},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},["escolha"===a.tela?t("section",{attrs:{id:"escolha"}},[t("EscolherModoDeJogo",{attrs:{EscolherModo:a.EscolherModo}})],1):a._e(),"escolherDica"===a.tela?t("section",[t("BotaoEscolherDica",{attrs:{actionChoiceValues:a.setValues}}),t("button",{staticClass:"give_up",on:{click:a.reset}},[a._v("Voltar")])],1):a._e(),"inicio"===a.tela?t("section",{attrs:{id:"inicio"}},["palavra"==a.etapa?t("Formulario",{attrs:{defina:"Defina a palavra",action:a.setPalavra,title:"Palavra para seu amigo ao lado:",button:"Próximo"}}):a._e(),t("button",{staticClass:"give_up",on:{click:a.reset}},[a._v("Voltar")])],1):a._e(),"inicio"===a.tela?t("section",{attrs:{id:"jogo"}},["dica"==a.etapa?t("Formulario",{attrs:{defina:"Defina a dica",action:a.setDica,title:"Uma palavra pra ajudar seu amigo",button:"Iniciar jogo"}}):a._e(),t("button",{staticClass:"give_up",on:{click:a.reset}},[a._v("Voltar")])],1):a._e(),"jogo"===a.tela?t("section",[t("Jogo",{attrs:{jogarNovamente:a.jogarNovamente,erros:a.erros,palavra:a.palavra,dica:a.dica,verificarLetra:a.verificarLetra,etapa:a.etapa,letras:a.letras,winsorfail:a.winsorfail,jogar:a.jogar}})],1):a._e()])},r=[],s=t("2909"),n=(t("7db0"),t("6062"),t("d3b7"),t("3ca3"),t("ddb0"),t("1276"),t("ac1f"),t("77ed"),t("6b90"),function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"formulario animate__animated animate__backInLeft"},[t("h1",[a._v(a._s(a.defina))]),t("div",{staticClass:"Formulario-title"},[a._v(a._s(a.title))]),t("small",{directives:[{name:"show",rawName:"v-show",value:a.deuErro,expression:"deuErro"}],staticClass:"error"},[a._v("Não é permitido espaços ou campo vazio")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.inputValue,expression:"inputValue"}],staticClass:"formulario-input",attrs:{type:"text",placeholder:a.defina},domProps:{value:a.inputValue},on:{keyup:function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.onSubmit(e)},input:function(e){e.target.composing||(a.inputValue=e.target.value)}}}),t("button",{staticClass:"final-botao",attrs:{disabled:0===a.inputValue.length},on:{click:[a.song,a.onSubmit]}},[a._v(a._s(a.button))])])}),c=[],l={name:"Formulario",props:{title:String,button:String,action:Function,defina:String},data:function(){return{deuErro:!1,inputValue:""}},methods:{onSubmit:function(){if(""===this.inputValue||this.inputValue.indexOf(" ")>=0||this.inputValue.indexOf("?")>=0||this.inputValue.indexOf("-")>=0||this.inputValue.indexOf("_")>=0||this.inputValue.indexOf("@")>=0||this.inputValue.indexOf("+")>=0||this.inputValue.indexOf("{")>=0||this.inputValue.indexOf("}")>=0||this.inputValue.indexOf(".")>=0)return this.deuErro=!0,!1;this.deuErro=!1,this.action(this.inputValue),this.inputValue=""},song:function(){var a=new Audio("/songs/click.mp3");a.play()}}},d=l,v=(t("a54b"),t("2877")),u=Object(v["a"])(d,n,c,!1,null,"69ad06a2",null),p=u.exports,f=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"lay"},[a._m(0),t("div",{staticClass:"jogo"},[t("Forca",{attrs:{erros:a.erros}}),t("Palavra",{attrs:{palavra:a.palavra,dica:a.dica,verificarLetra:a.verificarLetra,etapa:a.etapa}}),"jogo"===a.etapa?t("Teclado",{attrs:{letras:a.letras,verificarLetra:a.verificarLetra,jogar:a.jogar}}):a._e(),"jogo"!=a.etapa?t("Final",{attrs:{jogarNovamente:a.jogarNovamente,etapa:a.etapa,winsorfail:a.winsorfail,texto:"ganhador"===a.etapa?"Parabéns":"Você perdeu"}}):a._e()],1)])},h=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"forca_parte"},[t("h1",[a._v("F"),t("img",{staticClass:"imagem",attrs:{src:"/jogo-da-forca/images/brain.png"}}),a._v("rca")])])}],m=(t("a9e3"),function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"forca"},[t("img",{attrs:{src:"https://raw.githubusercontent.com/william-costa/wdev-hangman-game-resources/master/images/hangman/"+a.erros+".svg\n"}})])}),g=[],b={name:"Forca",props:{erros:Number}},_=b,z=(t("7979"),Object(v["a"])(_,m,g,!1,null,"323ce8a4",null)),C=z.exports,j=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"palavra"},[t("div",{staticClass:"palavra-letras"},a._l(a.palavra,(function(e,i){return t("div",{key:i,staticClass:"palavra-letra"},[a._v(" "+a._s(a.verificarLetra(e)||"enforcado"===a.etapa?e:"")+" ")])})),0),t("div",{staticClass:"palavra-dica"},[a._v(" "+a._s(a.dica)+" ")])])},E=[],w={name:"Palavra",props:{palavra:String,dica:String,verificarLetra:Function,etapa:String}},y=w,k=(t("94ca7"),Object(v["a"])(y,j,E,!1,null,"437d6e41",null)),O=k.exports,V=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"teclado"},a._l("abcdefghijklmnopqrstuvwxyz",(function(e,i){return t("button",{key:i,staticClass:"teclado-button",attrs:{disable:a.verificarLetra(e)},on:{click:function(t){return a.jogar(e)}}},[a._v(a._s(e)+" ")])})),0)},x=[],F={name:"Teclado",props:{letras:Array,verificarLetra:Function,jogar:Function}},M=F,P=(t("b40f"),Object(v["a"])(M,V,x,!1,null,"306b58a8",null)),S=P.exports,L=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"final"},[t("div",{class:"final-texto "+a.etapa,attrs:{winsorfail:a.winsorfail}},[a._v(" "+a._s(a.texto)+" ")]),t("button",{staticClass:"final-botao",on:{click:a.jogarNovamente}},[a._v("Jogar novamente")])])},A=[],D={name:"Jogo",props:{etapa:String,texto:String,jogarNovamente:Function,winsorfail:Boolean},created:function(){var a=new Audio("./songs/gameover.mp3"),e=new Audio("./songs/wins.mp3");1==this.winsorfail?a.play():e.play()}},T=D,J=(t("9cc3"),Object(v["a"])(T,L,A,!1,null,"a0d804b6",null)),B=J.exports,N={name:"Jogo",props:{erros:Number,palavra:String,dica:String,verificarLetra:Function,etapa:String,letras:Array,jogar:Function,jogarNovamente:Function,winsorfail:Boolean},components:{Forca:C,Palavra:O,Teclado:S,Final:B}},$=N,q=(t("3dab"),Object(v["a"])($,f,h,!1,null,"e62313d8",null)),G=q.exports,I=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"buttons"},[a._m(0),t("button",{staticClass:"tec",attrs:{id:"buttonClick",value:"tecnologia"},on:{click:[a.song,a.EscolherTipo1]}},[a._v("Tecnologia")]),t("button",{staticClass:"pro",attrs:{id:"buttonClick",value:"profissao"},on:{click:[a.song,a.EscolherTipo2]}},[a._v("Profissões")]),t("button",{staticClass:"ani",attrs:{id:"buttonClick",value:"animais"},on:{click:[a.song,a.EscolherTipo3]}},[a._v("Animais")]),t("button",{staticClass:"obj",attrs:{id:"buttonClick",value:"objetos"},on:{click:[a.song,a.EscolherTipo4]}},[a._v("Objetos")])])},H=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"forca"},[t("h1",[a._v("Esc"),t("img",{attrs:{src:"/jogo-da-forca/images/brain.png"}}),a._v("lha o tema")])])}],R={name:"Escolher",components:{},props:{actionChoiceValues:Function},methods:{song:function(){var a=new Audio("./songs/click.mp3");a.play()},EscolherTipo1:function(){var a=document.querySelector(".tec").value;this.actionChoiceValues(a)},EscolherTipo2:function(){var a=document.querySelector(".pro").value;this.actionChoiceValues(a)},EscolherTipo3:function(){var a=document.querySelector(".ani").value;this.actionChoiceValues(a)},EscolherTipo4:function(){var a=document.querySelector(".obj").value;this.actionChoiceValues(a)}}},U=R,W=(t("e516"),Object(v["a"])(U,I,H,!1,null,"5c8e4f9c",null)),Y=W.exports,Z=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"choice"},[a._m(0),t("button",{staticClass:"btn",attrs:{id:"inicio",value:"inicio"},on:{click:[a.song,a.StartOnly]}},[a._v("Jogar solo")]),t("button",{staticClass:"btn",attrs:{id:"modo",value:"escolherDica"},on:{click:[a.song,a.startWithFriend]}},[a._v("Desafiar amigo")])])},K=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"forca_parte"},[t("div",{staticClass:"logo"},[t("img",{staticClass:"imagem_relate",attrs:{src:"/jogo-da-forca/images/ayurveda.png"}})]),t("div",{staticClass:"titulo"},[t("h1",[a._v("Modo de jogo")])])])}],Q={name:"MododeJogo",props:{EscolherModo:Function},methods:{StartOnly:function(){var a=document.getElementById("modo").value;this.EscolherModo(a,a)},startWithFriend:function(){var a="palavra",e=document.getElementById("inicio").value;this.EscolherModo(e,a)},song:function(){var a=new Audio("./songs/click.mp3");a.play()}}},X=Q,aa=(t("0eed"),Object(v["a"])(X,Z,K,!1,null,"651dffa6",null)),ea=aa.exports,ta=[{palavradavez:"RUBY",dica:"Linguagem"},{palavradavez:"Pascal",dica:"Linguagem"},{palavradavez:"Python",dica:"Linguagem"},{palavradavez:"Firebase",dica:"Banco de dados"},{palavradavez:"Javascript",dica:"Linguagem"},{palavradavez:"MariaDB",dica:"Banco de dados"},{palavradavez:"MongoDB",dica:"Banco de dados"},{palavradavez:"Oracle",dica:"Banco de dados"},{palavradavez:"nuvem",dica:"armazenamento"},{palavradavez:"SCRUM",dica:"Métodologia"},{palavradavez:"DEVOPS",dica:"Métodologia"},{palavradavez:"LARAVEL",dica:"Framework"},{palavradavez:"DJANGO",dica:"Framework"},{palavradavez:"Materialize",dica:"Framework"},{palavradavez:"Bootstrap",dica:"Framework"},{palavradavez:"redes",dica:"telecomunicação"},{palavradavez:"spring",dica:"java"},{palavradavez:"cloud",dica:"nuvem"},{palavradavez:"Hotmail",dica:"Mensagens"},{palavradavez:"hardware",dica:"Físico"},{palavradavez:"flutter",dica:"framework"},{palavradavez:"Dart",dica:"linguagem"},{palavradavez:"nubank",dica:"Banco"}],ia=[{palavradavez:"Fisioterapia",dica:"Saúde"},{palavradavez:"Jornalismo",dica:"Comunicação"},{palavradavez:"Delegado",dica:"Cargo público"},{palavradavez:"Juiz",dica:"Cargo público"},{palavradavez:"Marketing",dica:"Mídias"},{palavradavez:"Designer",dica:"Criativo"},{palavradavez:"Professor",dica:"Fundamental"},{palavradavez:"Padeiro",dica:"Comerciante"},{palavradavez:"Autor",dica:"livro"},{palavradavez:"Vendedor",dica:"Comunicativo"},{palavradavez:"Suporte",dica:"Comunicativo"},{palavradavez:"Produtor",dica:"Criativo"},{palavradavez:"Fazendeiro",dica:"Campo"},{palavradavez:"agricultor",dica:"rural"},{palavradavez:"Futebol",dica:"Esporte"},{palavradavez:"Corrida",dica:"Esporte"},{palavradavez:"Volei",dica:"Esporte"},{palavradavez:"Pintor",dica:"arte"}],oa=[{palavradavez:"Golfinho",dica:"Aquático"},{palavradavez:"Camelo",dica:"Mamífero"},{palavradavez:"ovelha",dica:"Mamífero"},{palavradavez:"Caranguejo",dica:"Aquático"},{palavradavez:"Foca",dica:"Aquático"},{palavradavez:"Coelho",dica:"herbívoro"},{palavradavez:"Girafa",dica:"herbívoro"},{palavradavez:"Zebra",dica:"herbívoro"},{palavradavez:"Cavalo",dica:"herbívoro"},{palavradavez:"Tigre",dica:"Carnívoros"},{palavradavez:"Hiena",dica:"Carnívoros"},{palavradavez:"Esquilo",dica:"Onívoro"},{palavradavez:"Tartaruga",dica:"Silvestre"},{palavradavez:"Gafanhoto",dica:"herbívoro"},{palavradavez:"Canguru",dica:"Mamífero"},{palavradavez:"Javali",dica:"Mamífero"}],ra=[{palavradavez:"Geladeira",dica:"Doméstico"},{palavradavez:"Tapete",dica:"Chão"},{palavradavez:"Cama",dica:"Doméstico"},{palavradavez:"Panela",dica:"Doméstico"},{palavradavez:"Talher",dica:"Doméstico"},{palavradavez:"Controle",dica:"Video game"},{palavradavez:"Carregador",dica:"Eletrônico"},{palavradavez:"Apagador",dica:"Escolar"},{palavradavez:"Lapis",dica:"Escolar"},{palavradavez:"Fone",dica:"Eletrônico"},{palavradavez:"Copo",dica:"Cozinha"},{palavradavez:"Capa",dica:"Livro"},{palavradavez:"Mouse",dica:"Computador"},{palavradavez:"Gaveta",dica:"Tem na cozinha"},{palavradavez:"porta",dica:"casa"},{palavradavez:"Gaita",dica:"Instrumento"},{palavradavez:"Viola",dica:"Instrumento"},{palavradavez:"Monitor",dica:"Eletrônico"},{palavradavez:"Sabonete",dica:"Higiene"},{palavradavez:"Mochila",dica:"escola"},{palavradavez:"notebook",dica:"Eletrônico"}],sa={name:"App",data:function(){return{tela:"escolha",etapa:"escolha",palavra:"",dica:"",erros:0,letras:[],palavras_sorteadas_tecnologia:ta,palavras_sorteadas_animais:oa,palavras_sorteadas_objetos:ra,palavras_sorteadas_profissao:ia,selected:null,winsorfail:!1,positive:!1}},components:{Formulario:p,Jogo:G,BotaoEscolherDica:Y,EscolherModoDeJogo:ea},methods:{setPalavra:function(a){this.palavra=a,this.etapa="dica"},setDica:function(a){this.dica=a,this.tela="jogo",this.etapa="jogo"},EscolherModo:function(a,e){this.tela=a,this.etapa=e},setValues:function(a){switch(a){case"tecnologia":this.sortearTecnologia();break;case"animais":this.sortearAnimais();break;case"objetos":this.sortearObjetos();break;case"profissao":this.sortearProfissao();break}},reset:function(){this.palavra="",this.erros="",this.erros=0,this.letras=[],this.tela="escolha",this.etapa="escolha"},verificarLetra:function(a){return this.letras.find((function(e){return e.toLowerCase()===a.toLowerCase()}))},jogar:function(a){this.letras.push(a),this.verificarErros(a)},verificarErros:function(a){var e=new Audio("./songs/wrong.mp3"),t=new Audio("./songs/contain.mp3");if(this.palavra.toLowerCase().indexOf(a.toLowerCase())>=0)return t.play(),this.verificarAcertos();e.play(),this.erros++,6==this.erros&&(this.etapa="enforcado",this.winsorfail=!0)},verificarAcertos:function(){var a=Object(s["a"])(new Set(this.palavra.split("")));a.length===this.letras.length-this.erros&&(this.winsorfail=!1,this.etapa="ganhador",this.positive=!0)},jogarNovamente:function(){this.palavra="",this.erros="",this.erros=0,this.letras=[],this.tela="escolha",this.etapa="escolha"},randomPalavra:function(a){return a[Math.floor(Math.random()*a.length)]},sortearTecnologia:function(){this.selected=this.randomPalavra(this.palavras_sorteadas_tecnologia),this.tela="jogo",this.etapa="jogo",this.palavra=this.selected.palavradavez,this.dica=this.selected.dica},sortearAnimais:function(){this.selected=this.randomPalavra(this.palavras_sorteadas_animais),this.tela="jogo",this.etapa="jogo",this.palavra=this.selected.palavradavez,this.dica=this.selected.dica},sortearObjetos:function(){this.selected=this.randomPalavra(this.palavras_sorteadas_objetos),this.tela="jogo",this.etapa="jogo",this.palavra=this.selected.palavradavez,this.dica=this.selected.dica},sortearProfissao:function(){this.selected=this.randomPalavra(this.palavras_sorteadas_profissao),this.tela="jogo",this.etapa="jogo",this.palavra=this.selected.palavradavez,this.dica=this.selected.dica}}},na=sa,ca=(t("c3e6"),Object(v["a"])(na,o,r,!1,null,"46763aa4",null)),la=ca.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(a){return a(la)}}).$mount("#app")},5853:function(a,e,t){},"6b90":function(a,e,t){},7273:function(a,e,t){},"728a":function(a,e,t){},7979:function(a,e,t){"use strict";t("1602")},"94ca7":function(a,e,t){"use strict";t("5853")},"9cc3":function(a,e,t){"use strict";t("b230")},a54b:function(a,e,t){"use strict";t("7273")},af0d:function(a,e,t){},b230:function(a,e,t){},b40f:function(a,e,t){"use strict";t("557a")},c3e6:function(a,e,t){"use strict";t("5066")},e516:function(a,e,t){"use strict";t("1c30")}});
//# sourceMappingURL=app.4596bb53.js.map