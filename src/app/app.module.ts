import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjetComponent } from './projet/projet.component';
import { AdminAddCapexComponent } from './admin-add-capex/admin-add-capex.component';
import { ListeCapexComponent } from './liste-capex/liste-capex.component';
import { AdminAddOpexComponent } from './admin-add-opex/admin-add-opex.component';
import { ListOpexComponent } from './list-opex/list-opex.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { ModifierProjetComponent } from './modifier-projet/modifier-projet.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { AjouterProjetComponent } from './ajouter-projet/ajouter-projet.component';

import { ListeCapexUtilComponent } from './liste-capex-util/liste-capex-util.component';
import { ListeOpexUtilComponent } from './liste-opex-util/liste-opex-util.component';
import { ProjetUtilComponent } from './projet-util/projet-util.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { ListeCapexManagerComponent } from './liste-capex-manager/liste-capex-manager.component';
import { ListeOpexManagerComponent } from './liste-opex-manager/liste-opex-manager.component';
import { AjoutCapexManagerComponent } from './ajout-capex-manager/ajout-capex-manager.component';
import { AjoutOpexManagerComponent } from './ajout-opex-manager/ajout-opex-manager.component';
import { ProjetManagerComponent } from './projet-manager/projet-manager.component';
import { ListeCapexLeadComponent } from './liste-capex-lead/liste-capex-lead.component';
import { ListeOpexLeadComponent } from './liste-opex-lead/liste-opex-lead.component';
import { HomeLeadComponent } from './home-lead/home-lead.component';
import { ProjetLeadComponent } from './projet-lead/projet-lead.component';
import { ConsommationAdminComponent } from './consommation-admin/consommation-admin.component';
import { ConsommationComponent } from './consommation/consommation.component';
import { ConsommationUtilComponent } from './consommation-util/consommation-util.component';
import { ConsommationManagerComponent } from './consommation-manager/consommation-manager.component';
import { CosommationLeadComponent } from './cosommation-lead/cosommation-lead.component';
import { AnalyseAdminComponent } from './analyse-admin/analyse-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BondecommandeaddComponent } from './bondecommandeadd/bondecommandeadd.component';
import { ModifListCapexAdminComponent } from './modif-list-capex-admin/modif-list-capex-admin.component';
import { ModifListOpexAdminComponent } from './modif-list-opex-admin/modif-list-opex-admin.component';
import { ListeBondecommandeAdminComponent } from './liste-bondecommande-admin/liste-bondecommande-admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { BondeommandeopexAdminComponent } from './bondeommandeopex-admin/bondeommandeopex-admin.component';
import { ListeBondecommandeopexAdminComponent } from './liste-bondecommandeopex-admin/liste-bondecommandeopex-admin.component';
import { FacturesaddAdminComponent } from './facturesadd-admin/facturesadd-admin.component';
import { ListeFacturesAdminComponent } from './liste-factures-admin/liste-factures-admin.component';
import { FactureopexaddAdminComponent } from './factureopexadd-admin/factureopexadd-admin.component';
import { ListeFactureopexAdminComponent } from './liste-factureopex-admin/liste-factureopex-admin.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ModifBandecommandeCapexComponent } from './modif-bandecommande-capex/modif-bandecommande-capex.component';
import { ModifBondecommadeOpexComponent } from './modif-bondecommade-opex/modif-bondecommade-opex.component';
import { ModifFactureCpexComponent } from './modif-facture-cpex/modif-facture-cpex.component';
import { ModifFactureOpexComponent } from './modif-facture-opex/modif-facture-opex.component';
import { ProjectsAdminComponent } from './projects-admin/projects-admin.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AnalyseComponent } from './analyse/analyse.component';
import { CompteComponent } from './compte/compte.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProjetComponent,
    AdminAddCapexComponent,
    ListeCapexComponent,
    AdminAddOpexComponent,
    ListOpexComponent,
    ModifierUtilisateurComponent,
    ModifierProjetComponent,
    AddUtilisateurComponent,
    ListeUtilisateurComponent,
    AjouterProjetComponent,
 
    ListeCapexUtilComponent,
    ListeOpexUtilComponent,
    ProjetUtilComponent,
    HomeManagerComponent,
    ListeCapexManagerComponent,
    ListeOpexManagerComponent,
    AjoutCapexManagerComponent,
    AjoutOpexManagerComponent,
    ProjetManagerComponent,
    ListeCapexLeadComponent,
    ListeOpexLeadComponent,
    HomeLeadComponent,
    ProjetLeadComponent,
    ConsommationAdminComponent,
    ConsommationComponent,
    ConsommationUtilComponent,
    ConsommationManagerComponent,
    CosommationLeadComponent,
    AnalyseAdminComponent,
    BondecommandeaddComponent,
    ModifListCapexAdminComponent,
    ModifListOpexAdminComponent,
    ListeBondecommandeAdminComponent,
    BondeommandeopexAdminComponent,
    ListeBondecommandeopexAdminComponent,
    FacturesaddAdminComponent,
    ListeFacturesAdminComponent,
    FactureopexaddAdminComponent,
    ListeFactureopexAdminComponent,
    ModifBandecommandeCapexComponent,
    ModifBondecommadeOpexComponent,
    ModifFactureCpexComponent,
    ModifFactureOpexComponent,
    ProjectsAdminComponent,
    AnalyseComponent,
    CompteComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    HighchartsChartModule,
    ChartModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
