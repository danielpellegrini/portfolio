<template>
    <div>
        <div id="expandContactsLayover" class="holoContainerLayover"></div>
        <div id="expandContactsContainer" class="holoContainer">
            <div class="holo-top">
                <h2 class="text-center">Contacts</h2>
            </div> 
            <main id="contacts">
            </main>      
              <i id="expandContacts" @click="expandContacts()" class="fas fa-expand-arrows-alt"></i>
              <i id="compressContacts" @click="compressContacts()" class=""></i>        
        </div>
    </div>
</template>

<script>
export default {
  methods: {
     expandContacts() {
      document.getElementById("expandContactsLayover").className = "max-width holoContainerLayover";
      document.getElementById("expandContactsContainer").className = "max-width holoContainer";
      document.getElementById("compressContacts").className = "fas fa-compress-arrows-alt";
      document.getElementById("expandContacts").className = " ";
    },
    compressContacts() {
      document.getElementById("expandContactsLayover").className = "holoContainerLayover";
      document.getElementById("expandContactsContainer").className = "holoContainer";
      document.getElementById("expandContacts").className = "fas fa-expand-arrows-alt";
      document.getElementById("compressContacts").className = " ";
    }
  },
}
</script>