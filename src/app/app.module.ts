import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EvolucaoFisioComponent } from './evolucao-fisio/evolucao-fisio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { LaudoFisioComponent } from './laudo-fisio/laudo-fisio.component';
import { SinaisVitaisComponent } from './laudo-fisio/sinais-vitais/sinais-vitais.component';
import { SinaisVitaisPediatricoComponent } from './laudo-fisio/sinais-vitais-pediatrico/sinais-vitais-pediatrico.component';
import { AltaComponent } from './laudo-fisio/alta/alta.component';
import { AvaliacaoComponent } from './laudo-fisio/avaliacao/avaliacao.component';
import { ReavaliacaoComponent } from './laudo-fisio/reavaliacao/reavaliacao.component';
import { LaudoComponent } from './laudo-fisio/laudo/laudo.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ConsultaComponent } from './evolucao-fisio/consulta/consulta.component';
import { NeurologiaComponent } from './evolucao-fisio/neurologia/neurologia.component';
import { RespiratorioComponent } from './evolucao-fisio/respiratorio/respiratorio.component';
import { SecrecaoComponent } from './evolucao-fisio/secrecao/secrecao.component';
import { AvaliacaoMotoraComponent } from './evolucao-fisio/avaliacao-motora/avaliacao-motora.component';
import { EquilibrioComponent } from './evolucao-fisio/equilibrio/equilibrio.component';
import { EscalaDeMorseComponent } from './evolucao-fisio/escala-de-morse/escala-de-morse.component';
import { MetasComponent } from './evolucao-fisio/metas/metas.component';
import { OrientacoesComponent } from './evolucao-fisio/orientacoes/orientacoes.component';
import { CondutasComponent } from './evolucao-fisio/condutas/condutas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FichaIdentificacaoComponent } from './ficha-identificacao/ficha-identificacao.component';
import { DadospacienteComponent } from './ficha-identificacao/dadospaciente/dadospaciente.component';
import { IdentificacaoComponent } from './ficha-identificacao/identificacao/identificacao.component';
import { ContatoComponent } from './ficha-identificacao/contato/contato.component';
import { FiliacaoComponent } from './ficha-identificacao/filiacao/filiacao.component';
import { EnderecoComponent } from './ficha-identificacao/endereco/endereco.component';
import { MatButtonModule } from '@angular/material/button';
import { FichaIdentImpressaoComponent } from './ficha-ident-impressao/ficha-ident-impressao.component';
import { LaudoFisioImpressaoComponent } from './laudo-fisio-impressao/laudo-fisio-impressao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EvolucaoFisioComponent,
    LaudoFisioComponent,
    SinaisVitaisComponent,
    SinaisVitaisPediatricoComponent,
    AltaComponent,
    AvaliacaoComponent,
    ReavaliacaoComponent,
    LaudoComponent,
    CabecalhoComponent,
    ConsultaComponent,
    NeurologiaComponent,
    RespiratorioComponent,
    SecrecaoComponent,
    AvaliacaoMotoraComponent,
    EquilibrioComponent,
    EscalaDeMorseComponent,
    MetasComponent,
    OrientacoesComponent,
    CondutasComponent,
    DashboardComponent,
    FichaIdentificacaoComponent,
    DadospacienteComponent,
    IdentificacaoComponent,
    ContatoComponent,
    FiliacaoComponent,
    EnderecoComponent,
    FichaIdentImpressaoComponent,
    LaudoFisioImpressaoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
