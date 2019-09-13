<template>
   <b-container>
      <!-- Header do calendário -->
      <b-row>
         <b-col class="col-2 col-sm-2 offset-sm-2 text-right p-0">
            <button id="btn-dia-anterior" class="btn btn-outline-info btn-lg">
               <i class="fa fa-caret-left"></i>
            </button>
         </b-col>
         <b-col class="col-8 col-sm-4 text-center p-0">
            <button id="btn-calendar"
                    class="btn btn-outline-info btn-lg btn-block text-center"
                    @click="isOpen = !isOpen"
                    v-b-toggle.collapse-corpo-calendario>
               <i class="fa fa-calendar fa-fw mr-2 d-none d-sm-inline"></i>
               <strong>16/09/2019</strong>
            </button>
         </b-col>
         <b-col class="col-2 col-sm-2 text-left p-0">
            <button id="btn-proximo-dia" class="btn btn-outline-info btn-lg">
               <i class="fa fa-caret-right"></i>
            </button>
         </b-col>
      </b-row>
      <!-- Corpo do calendário -->
      <b-row>
         <b-col>
            <div class="mt-2 p-2 cm-blue cursor-pointer"
                 @click="isOpen = !isOpen"
                 v-b-toggle.collapse-corpo-calendario>
               <b-row class="header-body-filter">
                  <b-col cols="6">
                     <i class="fa fa-filter fa-fw"></i>Filtro
                  </b-col>
                  <b-col cols="6" class="text-right">
                     <i class="fa fa-minus-square fa-fw" v-if="isOpen"></i>
                     <i class="fa fa-plus-square fa-fw" v-else></i>
                  </b-col>
               </b-row>
            </div>
            <b-collapse id="collapse-corpo-calendario" visible class="mt-2">
               <b-card-group>
                  <b-card>
                     <label for="nom_profissional" class="col-12 mt-2 p-0">
                        <span class="font-weight-bold text-muted">Nome do profissional</span>
                     </label>
                     <b-form-input type="text"
                                   maxlength="100"
                                   class="form-control col-12 p-3"
                                   id="nom_profissional"
                                   size="sm"
                                   placeholder="Informe o profissional desejado">
                     </b-form-input>
                     <label for="localidade" class="col-12 mt-2 p-0 pt-2">
                        <span class="font-weight-bold text-muted">Localidade</span>
                     </label>
                     <b-form-select id="localidade"
                                    v-model="localidadesSelecionadas"
                                    :options="listaLocalidades"
                                    text-field="descricao" value-field="id"
                                    multiple
                                    :select-size="3"
                                    size="sm"
                                    placeholder="Escolha a localidade"
                                    class="form-control col-12">
                        <template slot="first">
                           <option :value="-1" disabled>
                              Informe as localidades
                           </option>
                        </template>
                     </b-form-select>
                     <label for="filtro-data" class="col-12 mt-2 p-0">
                        <span class="font-weight-bold text-muted">A partir das</span>
                     </label>
                     <b-form-input
                        id="filtro-data"
                        type="time"
                        class="col-12"
                        size="sm">
                     </b-form-input>
                  </b-card>
                  <b-card>
                     <h2>Calendario</h2>
                     <!--                     <calendario-->
                     <!--                        :dias-com-horarios="associadosCalendario"-->
                     <!--                        :css-dia-inicial="'cor-dia-verde texto-dia-branco dia-hoje'"-->
                     <!--                        :css-dia-com-horario="'cor-dia-azul texto-dia-preto'"-->
                     <!--                        :css-dia-padrao="'cor-dia-branco texto-dia-preto'"-->
                     <!--                        :estilo-visualizacao="'mes'"-->
                     <!--                        :acesso-ao-passado="false"-->
                     <!--                        :loader-ligado="loadingBusca"-->
                     <!--                        v-on:mudou-ano="mudouAno"-->
                     <!--                        v-on:mudou-mes="mudouMes"-->
                     <!--                        v-on:seleciona-dia="selecionaDia"-->
                     <!--                        v-on:fui-criado="calendarioCriado">-->
                     <!--                     </calendario>-->
                  </b-card>
               </b-card-group>
            </b-collapse>
         </b-col>
      </b-row>
      <!-- Tooltips -->
      <b-tooltip target="btn-dia-anterior"
                 placement="bottom"
                 triggers="hover"
                 variant="secondary"
                 title="Dia Anterior"/>
      <b-tooltip target="btn-calendar"
                 placement="bottom"
                 triggers="hover"
                 variant="secondary"
                 title="Exibir / Ocultar Calendário"/>
      <b-tooltip target="btn-proximo-dia"
                 placement="bottom"
                 triggers="hover"
                 variant="secondary"
                 title="Próximo Dia"/>
   </b-container>
</template>

<script>

    import CalendarioDias from "./CalendarioDias";
   
   export default {
       name: "Calendario",
       components: {
           CalendarioDias,
       },
       data: function() {
           return {
               isOpen: true,
               localidadesSelecionadas: [],
               listaLocalidades: [],
           }
       }
   }
</script>

<style scoped>
   .form-control {
      border-radius: 0;
      box-shadow: inset 1px 2px 3px #ddd;
   }
   
   .btn {
      border-radius: 0;
      outline: none;
      box-shadow: none !important;
   }
   
   .cm-blue {
      color: #17a2b8 !important;
   }
   
   .cursor-pointer {
      cursor: pointer;
   }
   
   .header-body-filter {
      background: #f5f5f5;
      border: 1px solid #ddd;
      box-shadow: 0 1px 3px #ddd;
      padding: 15px 5px;
      font-size: 1.4rem;
   }
   
   .card-group {
      box-shadow: 0 1px 3px #ddd;
   }
</style>