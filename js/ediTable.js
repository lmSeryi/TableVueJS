    let a = false;
    let b = false;
    let t1, t2, datot1 = '', datot2 = '', d1,d2;
    

    let app = new Vue({
        el: '#app',
        data: {
            divisiones: 1,
            cantidad: '',
        },
        computed: {
            total1: function() {
            x = Number(this.divisiones)
            
                if (a == true) {
                    t1 = x
                    return x
                }
                else{
                    return t1
                }
            },
            total2: function() {
                y = Number(this.divisiones)
                if (b == true) {
                    t2 = y
                    return y
                }
                else{
                    return t2;
                }
            },
            dato1:function(){
            datot1 = this.cantidad;
                if(a == true){
                    d1 = datot1;
                    return d1;
                }
                else{
                    return d1;
                }
            },
            dato2:function(){
            datot2 = this.cantidad;
                if(b == true){
                    d2 = datot2;
                    return d2;
                }
                else{
                    return d2;
                }
            }
        },
        methods: {
            tabla1: function() {
                a = true;
                b = false;
                console.log("click tabla 1");
                x = document.getElementById("T1");
            },
            tabla2: function() {
                a = false;
                b = true;
                console.log("click tabla 2");
            },
            numero: function(){
            }
        }
    });