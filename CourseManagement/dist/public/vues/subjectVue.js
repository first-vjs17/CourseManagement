let app = new Vue({
    el: '#addSub',
    data: {
        subjects:[],
        name:'',
        id:''
    },
    created() {
        this.getSubjects()
    },
    methods: {
        getSubjects() {
            axios.get("/subjects")
                .then( response => {
                    this.subjects = response.data
                    console.log(this.subjects)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        addSubject() {
            this.error = ''
            if(this.name.trim() == ""){
                alert("Data is empty")
                return
            }
            else{
                alert("Data successfully added")
            }
            axios.post("/subjects", {
                name: this.name
            }).then(response => {
                this.getSubjects()
            }).catch(error => {
                console.log(error);
            })
        }

    }
}); 

