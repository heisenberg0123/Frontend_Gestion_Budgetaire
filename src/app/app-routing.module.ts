import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { AdminAddCapexComponent } from './admin-add-capex/admin-add-capex.component';
import { AdminAddOpexComponent } from './admin-add-opex/admin-add-opex.component';
import { AjoutCapexManagerComponent } from './ajout-capex-manager/ajout-capex-manager.component';
import { AjoutOpexManagerComponent } from './ajout-opex-manager/ajout-opex-manager.component';
import { AnalyseAdminComponent } from './analyse-admin/analyse-admin.component';
import { ConsommationAdminComponent } from './consommation-admin/consommation-admin.component';
import { ConsommationManagerComponent } from './consommation-manager/consommation-manager.component';
import { ConsommationUtilComponent } from './consommation-util/consommation-util.component';
import { CosommationLeadComponent } from './cosommation-lead/cosommation-lead.component';
import { HomeLeadComponent } from './home-lead/home-lead.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { HomeComponent } from './home/home.component';
import { ListOpexComponent } from './list-opex/list-opex.component';
import { ListeCapexLeadComponent } from './liste-capex-lead/liste-capex-lead.component';
import { ListeCapexManagerComponent } from './liste-capex-manager/liste-capex-manager.component';
import { ListeCapexUtilComponent } from './liste-capex-util/liste-capex-util.component';
import { ListeCapexComponent } from './liste-capex/liste-capex.component';
import { ListeOpexLeadComponent } from './liste-opex-lead/liste-opex-lead.component';
import { ListeOpexManagerComponent } from './liste-opex-manager/liste-opex-manager.component';
import { ListeOpexUtilComponent } from './liste-opex-util/liste-opex-util.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { LoginComponent } from './login/login.component';
import { ModifierProjetComponent } from './modifier-projet/modifier-projet.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { ProjetLeadComponent } from './projet-lead/projet-lead.component';
import { ProjetManagerComponent } from './projet-manager/projet-manager.component';
import { ProjetUtilComponent } from './projet-util/projet-util.component';
import { ProjetComponent } from './projet/projet.component';
import { BondecommandeaddComponent } from './bondecommandeadd/bondecommandeadd.component';
import { ModifListCapexAdminComponent } from './modif-list-capex-admin/modif-list-capex-admin.component';
import { ModifListOpexAdminComponent } from './modif-list-opex-admin/modif-list-opex-admin.component';
import { ListeBondecommandeAdminComponent } from './liste-bondecommande-admin/liste-bondecommande-admin.component';
import { BondeommandeopexAdminComponent } from './bondeommandeopex-admin/bondeommandeopex-admin.component';
import { ListeBondecommandeopexAdminComponent } from './liste-bondecommandeopex-admin/liste-bondecommandeopex-admin.component';
import { ListeFacturesAdminComponent } from './liste-factures-admin/liste-factures-admin.component';
import { FacturesaddAdminComponent } from './facturesadd-admin/facturesadd-admin.component';
import { ListeFactureopexAdminComponent } from './liste-factureopex-admin/liste-factureopex-admin.component';
import { FactureopexaddAdminComponent } from './factureopexadd-admin/factureopexadd-admin.component';
import { ModifBandecommandeCapexComponent } from './modif-bandecommande-capex/modif-bandecommande-capex.component';
import { ModifBondecommadeOpexComponent } from './modif-bondecommade-opex/modif-bondecommade-opex.component';
import { ModifFactureCpexComponent } from './modif-facture-cpex/modif-facture-cpex.component';
import { ModifFactureOpexComponent } from './modif-facture-opex/modif-facture-opex.component';
import { ProjectsAdminComponent } from './projects-admin/projects-admin.component';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"home-admin" , component:HomeComponent},
  {path:"capex-admin" , component:AdminAddCapexComponent},
  {path:"opex-admin" , component:AdminAddOpexComponent},
  {path:"liste-capex-admin" , component:ListeCapexComponent},
  {path:"liste-opex-admin" , component:ListOpexComponent},
  {path:"projet-admin" , component:ProjetComponent},
  {path:"project-admin" , component:ProjectsAdminComponent},
  {path:"analyse" , component:AnalyseAdminComponent},


  {path:"modif-projet-admin" , component:ModifierProjetComponent},
  {path:"add-utilisateur-admin" , component:AddUtilisateurComponent},
  {path:"modif-utilisateur-admin/:id" , component:ModifierUtilisateurComponent},
  {path:"liste-utilisateur-admin" , component : ListeUtilisateurComponent},
  
  {path:"projet-util" , component : ProjetUtilComponent},
  {path:"liste-capex-util" , component:ListeCapexUtilComponent},
  {path:"liste-opex-util" , component:ListeOpexUtilComponent},

  {path:"home-manager" , component:HomeManagerComponent},
  {path:"ajout-capex-manager" , component:AjoutCapexManagerComponent},
  {path:"ajout-opex-manager" , component:AjoutOpexManagerComponent},
  {path:"liste-capex-manager" , component:ListeOpexManagerComponent},
  {path:"liste-opex-manager" , component:ListeOpexManagerComponent},
  {path:"projet-manager" , component:ProjetManagerComponent},


  {path:"home-lead" , component :HomeLeadComponent },
  {path:"projet-lead" , component : ProjetLeadComponent},
  {path:"liste-capex-lead" , component:ListeCapexLeadComponent},
  {path:"liste-opex-lead" , component:ListeOpexLeadComponent},

  {path:"consommation-admin" , component :ConsommationAdminComponent },
  {path:"consommation-manager" , component :ConsommationManagerComponent },
  {path:"consommation-lead" , component :CosommationLeadComponent },
  {path:"consommation-util" , component :ConsommationUtilComponent },

  {path:"bondecommandelist" , component :ListeBondecommandeAdminComponent },
  {path:"bondecommandeadd" , component :BondecommandeaddComponent },

  
  {path:"bondecommandeopexlist" , component :ListeBondecommandeopexAdminComponent },
  {path:"bondecommandeopexadd" , component :BondeommandeopexAdminComponent },


  
  {path:"factureslist" , component :ListeFacturesAdminComponent },
  {path:"facturesadd" , component :FacturesaddAdminComponent},
  {path:"modifFactures-admin/:id" , component :ModifFactureCpexComponent},

  
  {path:"facturesolist" , component :ListeFactureopexAdminComponent },
  {path:"facturesoadd" , component :FactureopexaddAdminComponent},
  {path:"modifFacturesOpex-admin/:id" , component :ModifFactureOpexComponent},



  {path:"analyse-admin" , component :AnalyseAdminComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:"modif-list-capex-admin/:id" , component :ModifListCapexAdminComponent },
  {path:"modif-list-opex-admin/:id" , component :ModifListOpexAdminComponent},

  {path:"modif-list-bonde-admin/:id" , component :ModifBandecommandeCapexComponent},
  {path:"modif-list-bondeopexadmin/:id" , component :ModifBondecommadeOpexComponent},

  {path:"compte" , component :CompteComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
