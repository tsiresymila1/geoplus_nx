/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CountryCodeAlpha3: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeUtc: { input: any; output: any; }
  Price: { input: any; output: any; }
  Upload: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type ActivatePhysicalCardInput = {
  id: Scalars['ID']['input'];
  identifier: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type ActualiteContent = PostContent & {
  __typename?: 'ActualiteContent';
  id?: Maybe<Scalars['ID']['output']>;
  type: ContentType;
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['ID']['output'];
  items: PaginatedAlbumItems;
};


export type AlbumItemsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type AlbumContent = PostContent & {
  __typename?: 'AlbumContent';
  /** @deprecated 29/09/2022 Use id */
  albumId: Scalars['ID']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  images: Array<Media>;
  imagesCount: Scalars['Int']['output'];
  preview: Array<Media>;
  type: ContentType;
};

export type AlbumContentInput = {
  imageIds: Array<Scalars['ID']['input']>;
};

export type AlbumItem = {
  __typename?: 'AlbumItem';
  id: Scalars['ID']['output'];
  media: Media;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  apiToken: Scalars['String']['output'];
  authToken?: Maybe<Scalars['String']['output']>;
  expires: Scalars['Int']['output'];
};

export type Author = MinimalistOrganisme | MinimalistUser;

export enum BonplansCommandeLigneType {
  Article = 'ARTICLE',
  Assurance = 'ASSURANCE',
  Ecc = 'ECC',
  Frais = 'FRAIS',
  Livraison = 'LIVRAISON',
  Remise = 'REMISE',
  Sub = 'SUB'
}

export type BonsplansArticle = {
  __typename?: 'BonsplansArticle';
  carteCadeau?: Maybe<BonsplansArticleCarteCadeau>;
  description?: Maybe<Scalars['String']['output']>;
  detail?: Maybe<Scalars['String']['output']>;
  hasDescription: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
  prixPublic: Scalars['Price']['output'];
  prixTTC: Scalars['Price']['output'];
  quantiteMax?: Maybe<Scalars['Int']['output']>;
  quantiteMin?: Maybe<Scalars['Int']['output']>;
  sku: BonsplansSku;
  volatiles?: Maybe<Array<BonsplansVolatile>>;
};

export type BonsplansArticleCarteCadeau = {
  __typename?: 'BonsplansArticleCarteCadeau';
  valeurFacialeMax?: Maybe<Scalars['Price']['output']>;
  valeurFacialeMin?: Maybe<Scalars['Price']['output']>;
};

export type BonsplansArticleInput = {
  espace: BonsplansEspace;
  sku: BonsplansSkuInput;
};

export type BonsplansCapabilities = {
  __typename?: 'BonsplansCapabilities';
  stats: Scalars['Boolean']['output'];
};

export type BonsplansCatalogue = {
  __typename?: 'BonsplansCatalogue';
  accroche?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<BonsplansCategory>>;
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
  univers?: Maybe<BonsplansUnivers>;
  visuel?: Maybe<Media>;
};

export type BonsplansCatalogueInput = {
  espace: BonsplansEspace;
  id: Scalars['ID']['input'];
};

export type BonsplansCataloguesInput = {
  espace: BonsplansEspace;
  subventionCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type BonsplansCategorieInput = {
  espace: BonsplansEspace;
  id: Scalars['ID']['input'];
};

export type BonsplansCategoriesInput = {
  catalogueId?: InputMaybe<Scalars['ID']['input']>;
  espace: BonsplansEspace;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type BonsplansCategory = {
  __typename?: 'BonsplansCategory';
  catalogueId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
};

export type BonsplansCommande = {
  __typename?: 'BonsplansCommande';
  billets?: Maybe<Array<BonsplansCommandeBillet>>;
  createdAt: Scalars['DateTimeUtc']['output'];
  espace: BonsplansEspace;
  id: Scalars['ID']['output'];
  libelle: Scalars['String']['output'];
  lignes: Array<BonsplansCommandeLigne>;
  livraison?: Maybe<BonsplansCommandeLivraison>;
  numeroCommande: Scalars['ID']['output'];
  statut: BonsplansCommandeStatut;
  total: Scalars['Price']['output'];
  totalRemise: Scalars['Price']['output'];
};

export type BonsplansCommandeBillet = {
  __typename?: 'BonsplansCommandeBillet';
  codeActivation?: Maybe<Scalars['String']['output']>;
  codeBarres?: Maybe<Scalars['String']['output']>;
  commandeId: Scalars['ID']['output'];
  dateExpiration?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  montant?: Maybe<Scalars['Price']['output']>;
  nom: Scalars['String']['output'];
  produit?: Maybe<BonsplansProduit>;
  url?: Maybe<Scalars['String']['output']>;
  utilise?: Maybe<Scalars['Boolean']['output']>;
};

export type BonsplansCommandeBilletInput = {
  billetId: Scalars['ID']['input'];
  commandeId: Scalars['ID']['input'];
};

export type BonsplansCommandeBilletUtiliseInput = {
  billetId: Scalars['ID']['input'];
  commandeId: Scalars['ID']['input'];
  utilise: Scalars['Boolean']['input'];
};

export type BonsplansCommandeBilletsInput = {
  espace?: InputMaybe<BonsplansEspace>;
  utilise?: InputMaybe<Scalars['Boolean']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type BonsplansCommandeLigne = {
  __typename?: 'BonsplansCommandeLigne';
  id: Scalars['ID']['output'];
  libelle: Scalars['String']['output'];
  prixUnitaire: Scalars['Price']['output'];
  quantite: Scalars['Int']['output'];
  statut: BonsplansCommandeStatut;
  type: BonplansCommandeLigneType;
};

export type BonsplansCommandeLivraison = {
  __typename?: 'BonsplansCommandeLivraison';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  zipcode: Scalars['String']['output'];
};

export type BonsplansCommandeStats = {
  __typename?: 'BonsplansCommandeStats';
  count: Scalars['Int']['output'];
  since: Scalars['DateTimeUtc']['output'];
  total: Scalars['Price']['output'];
  totalRemise: Scalars['Price']['output'];
};

export type BonsplansCommandeStatsInput = {
  espace?: InputMaybe<BonsplansEspace>;
};

export enum BonsplansCommandeStatut {
  Annule = 'ANNULE',
  Cree = 'CREE',
  Paye = 'PAYE',
  Valide = 'VALIDE'
}

export type BonsplansCommandesInput = {
  espace?: InputMaybe<BonsplansEspace>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type BonsplansCoordonnees = {
  __typename?: 'BonsplansCoordonnees';
  adresse1?: Maybe<Scalars['String']['output']>;
  adresse2?: Maybe<Scalars['String']['output']>;
  area?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['String']['output']>;
  lng?: Maybe<Scalars['String']['output']>;
  nom?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export enum BonsplansEspace {
  Ca = 'CA',
  Ecc = 'ECC'
}

export type BonsplansLignePanier = {
  __typename?: 'BonsplansLignePanier';
  libelle: Scalars['String']['output'];
  params: BonsplansLignePanierParams;
  prixUnitaire: Scalars['Price']['output'];
  quantite: Scalars['Int']['output'];
  sku?: Maybe<BonsplansSku>;
  total: Scalars['Price']['output'];
  totalRemise: Scalars['Price']['output'];
  type: BonsplansTypeLignePanier;
  uuid: Scalars['ID']['output'];
};

export type BonsplansLignePanierParams = {
  __typename?: 'BonsplansLignePanierParams';
  carteCadeau?: Maybe<BonsplansLignePanierParamsCarteCadeau>;
  volatiles?: Maybe<Array<BonsplansVolatile>>;
};

export type BonsplansLignePanierParamsCarteCadeau = {
  __typename?: 'BonsplansLignePanierParamsCarteCadeau';
  valeurFaciale?: Maybe<Scalars['Price']['output']>;
};

export type BonsplansMarketingTag = {
  __typename?: 'BonsplansMarketingTag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: BonsplansMarketingTagType;
};

export enum BonsplansMarketingTagType {
  CoupDeCoeur = 'COUP_DE_COEUR',
  Exclusivite = 'EXCLUSIVITE',
  IdeeCadeau = 'IDEE_CADEAU',
  NePasManquer = 'NE_PAS_MANQUER',
  Nouveaute = 'NOUVEAUTE',
  OffreLimitee = 'OFFRE_LIMITEE',
  TopVentes = 'TOP_VENTES'
}

export type BonsplansPanier = {
  __typename?: 'BonsplansPanier';
  espace: BonsplansEspace;
  lignes: Array<BonsplansLignePanier>;
  livraisons: Array<BonsplansLignePanier>;
  params?: Maybe<BonsplansPanierParams>;
  sousTotal: Scalars['Price']['output'];
  total: Scalars['Price']['output'];
  totalRemise: Scalars['Price']['output'];
  wallets: Array<BonsplansWalletPanier>;
};

export type BonsplansPanierAddArticleInput = {
  params?: InputMaybe<BonsplansPanierLigneParamsInput>;
  quantite: Scalars['Int']['input'];
  sku: BonsplansSkuInput;
};

export type BonsplansPanierAddArticlesInput = {
  articles: Array<BonsplansPanierAddArticleInput>;
  espace: BonsplansEspace;
};

export type BonsplansPanierClearInput = {
  espace: BonsplansEspace;
};

export type BonsplansPanierLigneParamsCarteCadeauInput = {
  valeurFaciale?: InputMaybe<Scalars['Price']['input']>;
};

export type BonsplansPanierLigneParamsInput = {
  carteCadeau?: InputMaybe<BonsplansPanierLigneParamsCarteCadeauInput>;
  volatiles?: InputMaybe<Array<BonsplansVolatileInput>>;
};

export type BonsplansPanierParams = {
  __typename?: 'BonsplansPanierParams';
  livraison?: Maybe<BonsplansPanierParamsLivraison>;
};

export type BonsplansPanierParamsLivraison = {
  __typename?: 'BonsplansPanierParamsLivraison';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  zipcode: Scalars['String']['output'];
};

export type BonsplansPanierRemoveLigneInput = {
  espace: BonsplansEspace;
  uuid: Scalars['ID']['input'];
};

export type BonsplansPanierTmp = {
  __typename?: 'BonsplansPanierTmp';
  espace: BonsplansEspace;
  lignes: Array<BonsplansLignePanier>;
  montantWalletsApplique: Scalars['Price']['output'];
  sousTotal: Scalars['Price']['output'];
  total: Scalars['Price']['output'];
  totalRemise: Scalars['Price']['output'];
};

export type BonsplansPanierUpdateLigneInput = {
  espace: BonsplansEspace;
  params?: InputMaybe<BonsplansPanierLigneParamsInput>;
  quantite: Scalars['Int']['input'];
  uuid: Scalars['ID']['input'];
};

export type BonsplansPanierUseWalletInput = {
  espace: BonsplansEspace;
  reset?: InputMaybe<Scalars['Boolean']['input']>;
  utiliser: Scalars['Boolean']['input'];
  walletId: Scalars['ID']['input'];
};

export type BonsplansProduit = {
  __typename?: 'BonsplansProduit';
  aide?: Maybe<Scalars['String']['output']>;
  articles?: Maybe<Array<BonsplansArticle>>;
  coordonnees?: Maybe<BonsplansCoordonnees>;
  cover?: Maybe<Media>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Media>;
  marketingTags: Array<BonsplansMarketingTag>;
  nom: Scalars['String']['output'];
  offre?: Maybe<Scalars['String']['output']>;
  offrePartenaire?: Maybe<BonsplansProduitOffrePartenaire>;
  searchArticles: Array<BonsplansArticle>;
  searchArticlesFiltres?: Maybe<Array<BonsplansProduitFiltre>>;
  type: BonsplansProduitType;
};


export type BonsplansProduitSearchArticlesArgs = {
  input: BonsplansProduitSearchArticlesInput;
};


export type BonsplansProduitSearchArticlesFiltresArgs = {
  input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
};

export type BonsplansProduitFiltre = {
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: BonsplansProduitFiltreType;
};

export type BonsplansProduitFiltreDate = BonsplansProduitFiltre & {
  __typename?: 'BonsplansProduitFiltreDate';
  label?: Maybe<Scalars['String']['output']>;
  max?: Maybe<Scalars['Date']['output']>;
  min?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  type: BonsplansProduitFiltreType;
};

export type BonsplansProduitFiltreOptions = BonsplansProduitFiltre & {
  __typename?: 'BonsplansProduitFiltreOptions';
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: BonsplansProduitFiltreType;
  values: Array<BonsplansProduitFiltreOptionsValue>;
};

export type BonsplansProduitFiltreOptionsValue = {
  __typename?: 'BonsplansProduitFiltreOptionsValue';
  label: Scalars['String']['output'];
  value: Scalars['ID']['output'];
};

export enum BonsplansProduitFiltreType {
  Date = 'DATE',
  Options = 'OPTIONS'
}

export type BonsplansProduitFiltreValue = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type BonsplansProduitInput = {
  espace: BonsplansEspace;
  id: Scalars['ID']['input'];
};

export type BonsplansProduitOffrePartenaire = {
  __typename?: 'BonsplansProduitOffrePartenaire';
  redirectUrl: Scalars['String']['output'];
};

export type BonsplansProduitSearchArticlesInput = {
  filtres: Array<BonsplansProduitFiltreValue>;
};

export enum BonsplansProduitType {
  BonAchat = 'BON_ACHAT',
  BonAchatVariable = 'BON_ACHAT_VARIABLE',
  Cinema = 'CINEMA',
  OffrePartenaire = 'OFFRE_PARTENAIRE',
  Parc = 'PARC',
  Ski = 'SKI',
  Skipass = 'SKIPASS',
  Spectacle = 'SPECTACLE'
}

export type BonsplansSearchMedia = {
  __typename?: 'BonsplansSearchMedia';
  resized?: Maybe<Array<BonsplansSearchMedia>>;
  resolution?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};

export type BonsplansSearchProduit = {
  __typename?: 'BonsplansSearchProduit';
  coordonnees?: Maybe<BonsplansCoordonnees>;
  cover?: Maybe<BonsplansSearchMedia>;
  highlights: Array<BonsplansSearchProduitHighlight>;
  id: Scalars['ID']['output'];
  logo?: Maybe<BonsplansSearchMedia>;
  marketingTags: Array<BonsplansMarketingTag>;
  nom: Scalars['String']['output'];
  offre?: Maybe<Scalars['String']['output']>;
  type: BonsplansProduitType;
};

export type BonsplansSearchProduitHighlight = {
  __typename?: 'BonsplansSearchProduitHighlight';
  end: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
};

export type BonsplansSearchProduitsInput = {
  catalogueId?: InputMaybe<Scalars['ID']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  espace: BonsplansEspace;
  q?: InputMaybe<Scalars['String']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type BonsplansSku = {
  __typename?: 'BonsplansSku';
  articleId: Scalars['ID']['output'];
  productId: Scalars['ID']['output'];
  source: Scalars['String']['output'];
};

export type BonsplansSkuInput = {
  articleId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  source: Scalars['String']['input'];
};

export type BonsplansSuggestProduitsInput = {
  catalogueId?: InputMaybe<Scalars['ID']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  espace: BonsplansEspace;
  q: Scalars['String']['input'];
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type BonsplansTunnelCommandePaiement = {
  __typename?: 'BonsplansTunnelCommandePaiement';
  montant: Scalars['Price']['output'];
  url: Scalars['String']['output'];
};

export type BonsplansTunnelCommandeSetLivraison = {
  __typename?: 'BonsplansTunnelCommandeSetLivraison';
  panier: BonsplansPanier;
  workflow?: Maybe<Workflow>;
};

export type BonsplansTunnelCommandeSetLivraisonInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  company?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  espace: BonsplansEspace;
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  zipcode: Scalars['String']['input'];
};

export type BonsplansTunnelCommandeValidate = {
  __typename?: 'BonsplansTunnelCommandeValidate';
  commande: BonsplansCommande;
  paiement?: Maybe<BonsplansTunnelCommandePaiement>;
  panier: BonsplansPanier;
  workflow?: Maybe<Workflow>;
};

export type BonsplansTunnelCommandeValidateInput = {
  espace: BonsplansEspace;
  paiementRedirectUrl?: InputMaybe<Scalars['String']['input']>;
};

export enum BonsplansTypeLignePanier {
  Article = 'ARTICLE',
  Frais = 'FRAIS',
  Livraison = 'LIVRAISON'
}

export enum BonsplansUnivers {
  Culture = 'CULTURE',
  Shopping = 'SHOPPING',
  Sport = 'SPORT',
  Vacances = 'VACANCES'
}

export type BonsplansVolatile = {
  __typename?: 'BonsplansVolatile';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BonsplansVolatileInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type BonsplansWalletPanier = {
  __typename?: 'BonsplansWalletPanier';
  dateFin: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  montantApplique: Scalars['Price']['output'];
  nom: Scalars['String']['output'];
  params: BonsplansWalletPanierParams;
  solde: Scalars['Price']['output'];
  utiliser: Scalars['Boolean']['output'];
};

export type BonsplansWalletPanierParams = {
  __typename?: 'BonsplansWalletPanierParams';
  montantsAppliques: Array<BonsplansWalletPanierParamsMontantApplique>;
};

export type BonsplansWalletPanierParamsMontantApplique = {
  __typename?: 'BonsplansWalletPanierParamsMontantApplique';
  ligne: Scalars['ID']['output'];
  montantApplique: Scalars['Price']['output'];
};

export type CrudCapabilities = {
  __typename?: 'CRUDCapabilities';
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  read: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

export type CardCapabilities = {
  __typename?: 'CardCapabilities';
  activatePhysicalCard: Scalars['Boolean']['output'];
  lockPhysicalCard: Scalars['Boolean']['output'];
  orderPhysicalCard: Scalars['Boolean']['output'];
  showCard: Scalars['Boolean']['output'];
  showPin: Scalars['Boolean']['output'];
  unlockPhysicalCard: Scalars['Boolean']['output'];
};

export type CardProviderConsent = {
  __typename?: 'CardProviderConsent';
  uri: Scalars['String']['output'];
};

export type CardTransaction = {
  capabilities: CardTransactionCapabilities;
  date: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  montant: Scalars['Price']['output'];
  nom: Scalars['String']['output'];
  statut: CardTransactionStatut;
  type: CardTransactionType;
};

export type CardTransactionCapabilities = {
  __typename?: 'CardTransactionCapabilities';
  requestMerchantEligibility: Scalars['Boolean']['output'];
};

export type CardTransactionInternal = CardTransaction & {
  __typename?: 'CardTransactionInternal';
  capabilities: CardTransactionCapabilities;
  date: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  montant: Scalars['Price']['output'];
  nom: Scalars['String']['output'];
  statut: CardTransactionStatut;
  type: CardTransactionType;
};

export type CardTransactionMerchant = CardTransaction & {
  __typename?: 'CardTransactionMerchant';
  capabilities: CardTransactionCapabilities;
  date: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  merchant: CardTransactionMerchantInfo;
  montant: Scalars['Price']['output'];
  motifRefus?: Maybe<CardTransactionMotifRefus>;
  nom: Scalars['String']['output'];
  statut: CardTransactionStatut;
  type: CardTransactionType;
};

export type CardTransactionMerchantInfo = {
  __typename?: 'CardTransactionMerchantInfo';
  mcc: Scalars['String']['output'];
  merchantCategory?: Maybe<MerchantCategory>;
  merchantCity: Scalars['String']['output'];
  merchantCountry: Scalars['String']['output'];
  merchantName: Scalars['String']['output'];
};

export enum CardTransactionMotifRefus {
  Echoue = 'ECHOUE',
  HorsAbonnement = 'HORS_ABONNEMENT',
  MarchantRefuse = 'MARCHANT_REFUSE',
  SoldeInsuffisant = 'SOLDE_INSUFFISANT'
}

export enum CardTransactionStatut {
  Canceled = 'CANCELED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Released = 'RELEASED',
  Settled = 'SETTLED'
}

export enum CardTransactionType {
  Internal = 'INTERNAL',
  Merchant = 'MERCHANT'
}

export type Carte = {
  __typename?: 'Carte';
  capabilities: CardCapabilities;
  cardHolder: Scalars['String']['output'];
  cardMaskedNumber: Scalars['String']['output'];
  expiryDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageBackgroundUrl: Scalars['String']['output'];
  physique?: Maybe<PhysicalCard>;
  solde: Scalars['Price']['output'];
  transactions: PaginatedCardTransactions;
};


export type CarteTransactionsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export enum CarteStatut {
  Active = 'ACTIVE',
  Onboard = 'ONBOARD',
  OnboardUser = 'ONBOARD_USER',
  Processing = 'PROCESSING',
  Wait = 'WAIT'
}

export type CarteVacances = {
  __typename?: 'CarteVacances';
  abonnement?: Maybe<CarteVacancesAbonnement>;
  carte?: Maybe<Carte>;
  personalWallet: WalletsUserPersonalWallet;
  solde: Scalars['Price']['output'];
  statut: CarteStatut;
};

export type CarteVacancesAbonnement = {
  __typename?: 'CarteVacancesAbonnement';
  dateDebut: Scalars['DateTimeUtc']['output'];
  dateFin: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  physique: Scalars['Boolean']['output'];
  statut: CarteVacancesAbonnementStatut;
  user: MinimalistUser;
};

export type CarteVacancesAbonnementCapabilities = {
  __typename?: 'CarteVacancesAbonnementCapabilities';
  create: Scalars['Boolean']['output'];
  read: Scalars['Boolean']['output'];
  useOptionsPaiement: Scalars['Boolean']['output'];
};

export type CarteVacancesAbonnementCheque = {
  __typename?: 'CarteVacancesAbonnementCheque';
  ADRESSE: Scalars['String']['output'];
  CODE_POSTAL: Scalars['String']['output'];
  ORDRE: Scalars['String']['output'];
  VILLE: Scalars['String']['output'];
};

export type CarteVacancesAbonnementCommande = {
  __typename?: 'CarteVacancesAbonnementCommande';
  abonnements?: Maybe<PaginatedCarteVacancesAbonnements>;
  cheque: CarteVacancesAbonnementCheque;
  dateCommande: Scalars['DateTimeUtc']['output'];
  duree: Scalars['Int']['output'];
  factureUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  montant: Scalars['Price']['output'];
  montantAbonnements: Scalars['Price']['output'];
  montantAbonnementsHT: Scalars['Price']['output'];
  montantAbonnementsTVA: Scalars['Price']['output'];
  montantCartes: Scalars['Price']['output'];
  montantCartesHT: Scalars['Price']['output'];
  montantCartesTVA: Scalars['Price']['output'];
  montantHT: Scalars['Price']['output'];
  montantRemise: Scalars['Price']['output'];
  montantRemiseHT: Scalars['Price']['output'];
  montantRemiseTVA: Scalars['Price']['output'];
  montantTVA: Scalars['Price']['output'];
  physique: Scalars['Boolean']['output'];
  quantiteAbonnements: Scalars['Int']['output'];
  reference: Scalars['String']['output'];
  statut: CarteVacancesAbonnementCommandeStatut;
  tauxTVA: Scalars['Price']['output'];
  typePaiement: CarteVacancesAbonnementTypePaiement;
  virement: CarteVacancesAbonnementVirement;
};


export type CarteVacancesAbonnementCommandeAbonnementsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type CarteVacancesAbonnementCommandeAbonnementInput = {
  userId: Scalars['ID']['input'];
};

export type CarteVacancesAbonnementCommandeInput = {
  abonnementOptionId: Scalars['ID']['input'];
  abonnements?: InputMaybe<Array<CarteVacancesAbonnementCommandeAbonnementInput>>;
  choixAbonnements: Scalars['Boolean']['input'];
  physique: Scalars['Boolean']['input'];
  typePaiement?: InputMaybe<CarteVacancesAbonnementTypePaiement>;
};

export enum CarteVacancesAbonnementCommandeStatut {
  Annule = 'ANNULE',
  Attente = 'ATTENTE',
  Valide = 'VALIDE'
}

export type CarteVacancesAbonnementCommandesInput = {
  statut?: InputMaybe<CarteVacancesAbonnementCommandeStatut>;
};

export type CarteVacancesAbonnementOption = {
  __typename?: 'CarteVacancesAbonnementOption';
  duree: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  libelle: Scalars['String']['output'];
  moisOfferts: Scalars['Int']['output'];
  pourcentageRemise: Scalars['Price']['output'];
};

export type CarteVacancesAbonnementOptionsInput = {
  abonnements?: InputMaybe<Array<CarteVacancesAbonnementCommandeAbonnementInput>>;
  choixAbonnements: Scalars['Boolean']['input'];
};

export type CarteVacancesAbonnementSimulation = {
  __typename?: 'CarteVacancesAbonnementSimulation';
  coutAbonnementUnitaire: Scalars['Price']['output'];
  coutCartePhysiqueUnitaire: Scalars['Price']['output'];
  dateCommande: Scalars['DateTimeUtc']['output'];
  duree: Scalars['Int']['output'];
  montant: Scalars['Price']['output'];
  montantAbonnements: Scalars['Price']['output'];
  montantAbonnementsHT: Scalars['Price']['output'];
  montantAbonnementsTVA: Scalars['Price']['output'];
  montantCartes: Scalars['Price']['output'];
  montantCartesHT: Scalars['Price']['output'];
  montantCartesTVA: Scalars['Price']['output'];
  montantHT: Scalars['Price']['output'];
  montantRemise: Scalars['Price']['output'];
  montantRemiseHT: Scalars['Price']['output'];
  montantRemiseTVA: Scalars['Price']['output'];
  montantTVA: Scalars['Price']['output'];
  physique: Scalars['Boolean']['output'];
  quantiteAbonnements: Scalars['Int']['output'];
  quantiteAbonnementsIgnores: Scalars['Int']['output'];
  solde?: Maybe<Scalars['Price']['output']>;
  tauxTVA: Scalars['Price']['output'];
  typePaiement: CarteVacancesAbonnementTypePaiement;
};

export type CarteVacancesAbonnementSimulationInput = {
  abonnementOptionId: Scalars['ID']['input'];
  abonnements?: InputMaybe<Array<CarteVacancesAbonnementCommandeAbonnementInput>>;
  choixAbonnements: Scalars['Boolean']['input'];
  physique: Scalars['Boolean']['input'];
  typePaiement?: InputMaybe<CarteVacancesAbonnementTypePaiement>;
};

export type CarteVacancesAbonnementStats = {
  __typename?: 'CarteVacancesAbonnementStats';
  count: Scalars['Int']['output'];
  statut: CarteVacancesAbonnementStatut;
};

export enum CarteVacancesAbonnementStatut {
  Aucun = 'AUCUN',
  BientotExpire = 'BIENTOT_EXPIRE',
  Expire = 'EXPIRE',
  Valide = 'VALIDE'
}

export enum CarteVacancesAbonnementTypePaiement {
  Cheque = 'CHEQUE',
  Virement = 'VIREMENT',
  Wallet = 'WALLET'
}

export type CarteVacancesAbonnementVirement = {
  __typename?: 'CarteVacancesAbonnementVirement';
  BANQUE: Scalars['String']['output'];
  BIC: Scalars['String']['output'];
  IBAN: Scalars['String']['output'];
};

export type CarteVacancesAbonnementsInput = {
  statut?: InputMaybe<CarteVacancesAbonnementStatut>;
};

export type CarteVacancesAlimentationCreateInput = {
  montant: Scalars['Price']['input'];
  paiementRedirectUrl: Scalars['String']['input'];
};

export type CarteVacancesAlimentationSimulation = {
  __typename?: 'CarteVacancesAlimentationSimulation';
  frais: Scalars['Price']['output'];
  montant: Scalars['Price']['output'];
  soldeCarte: Scalars['Price']['output'];
  soldeUserPersonnalWallet: Scalars['Price']['output'];
};

export type CarteVacancesAlimentationSimulationInput = {
  montant: Scalars['Price']['input'];
};

export type CarteVacancesTransactionIssue = {
  __typename?: 'CarteVacancesTransactionIssue';
  commercant: Scalars['String']['output'];
  createdAt: Scalars['DateTimeUtc']['output'];
  dateTraitement?: Maybe<Scalars['DateTimeUtc']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  statut: CarteVacancesTransactionIssueStatut;
  transaction: CardTransaction;
};

export type CarteVacancesTransactionIssueInput = {
  commercant: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['ID']['input'];
};

export enum CarteVacancesTransactionIssueStatut {
  Accepte = 'ACCEPTE',
  Attente = 'ATTENTE',
  Refuse = 'REFUSE'
}

export type CarteVacancesUsersInput = {
  abonnementValide?: InputMaybe<Scalars['Boolean']['input']>;
  statut?: InputMaybe<CarteVacancesAbonnementStatut>;
};

export type CashbackBalance = {
  __typename?: 'CashbackBalance';
  balanceAmount: Scalars['Float']['output'];
  capAmount: Scalars['Float']['output'];
  creditAmount: Scalars['Float']['output'];
  debitAmount: Scalars['Float']['output'];
  gainAmount: Scalars['Float']['output'];
  payAmount: Scalars['Float']['output'];
  thresholdAmount: Scalars['Float']['output'];
  waitAmount: Scalars['Float']['output'];
};

export type CashbackCategory = {
  __typename?: 'CashbackCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subCategories: Array<CashbackSubCategory>;
};

export type CashbackOffer = {
  __typename?: 'CashbackOffer';
  brandDescription?: Maybe<Scalars['String']['output']>;
  brandId?: Maybe<Scalars['Int']['output']>;
  brandLogo?: Maybe<Scalars['String']['output']>;
  brandName?: Maybe<Scalars['String']['output']>;
  categories: Array<CashbackCategory>;
  companyId?: Maybe<Scalars['Int']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  condition: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  reduction?: Maybe<Scalars['String']['output']>;
  shops: Array<CashbackShop>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTimeUtc']['output']>;
  subCategories: Array<CashbackSubCategory>;
  unit?: Maybe<CashbackUnitType>;
  urlRedirectMobile: Scalars['String']['output'];
  urlRedirectWeb: Scalars['String']['output'];
};

export type CashbackPayment = {
  __typename?: 'CashbackPayment';
  amount?: Maybe<Scalars['Float']['output']>;
  date: Scalars['DateTimeUtc']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
  ibic?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  transacState: CashbackTransacState;
};

export type CashbackPaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  firstName: Scalars['String']['input'];
  iban: Scalars['String']['input'];
  ibic: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CashbackShop = {
  __typename?: 'CashbackShop';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name2?: Maybe<Scalars['String']['output']>;
  siret?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CashbackSubCategory = {
  __typename?: 'CashbackSubCategory';
  id: Scalars['ID']['output'];
  idCat: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CashbackTransacState = {
  __typename?: 'CashbackTransacState';
  code: Scalars['Int']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CashbackTransaction = {
  __typename?: 'CashbackTransaction';
  amount: Scalars['Float']['output'];
  date: Scalars['DateTimeUtc']['output'];
  gain: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  offerId: Scalars['Int']['output'];
  percentCashback: Scalars['Float']['output'];
  shopId: Scalars['Int']['output'];
  shopName?: Maybe<Scalars['String']['output']>;
  transacState: CashbackTransacState;
  unitCashback: CashbackUnitType;
};

export enum CashbackUnitType {
  Euro = 'EURO',
  Percent = 'PERCENT'
}

export type ChangeEmailSendVerificationInput = {
  email: Scalars['String']['input'];
};

export type ChangeEmailTfaCodeInput = {
  tfaCode: Scalars['String']['input'];
};

export type ChangeEmailVerifyEmailInput = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type ChangePasswordTfaCodeInput = {
  tfaCode: Scalars['String']['input'];
};

export type ChangePhoneNumberSendVerificationInput = {
  phone: PhoneInput;
};

export type ChangePhoneNumberTfaCodeInput = {
  tfaCode: Scalars['String']['input'];
};

export type ChangePhoneNumberVerifyPhoneNumberInput = {
  phone: PhoneInput;
  token: Scalars['String']['input'];
};

export type ChangeUserGroupsInput = {
  groupIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type ChangeUserRoleInput = {
  id: Scalars['ID']['input'];
  role: UserRole;
};

export type ChatToken = {
  __typename?: 'ChatToken';
  email: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type ClubAvantagesCapabilities = {
  __typename?: 'ClubAvantagesCapabilities';
  read: Scalars['Boolean']['output'];
  use: Scalars['Boolean']['output'];
};

export type ClubAvantagesCatalogue = BonsplansCatalogue | ReductionCodeCatalogue;

export type Comment = {
  __typename?: 'Comment';
  capabilities: CommentCapabilities;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  user: MinimalistUser;
};

export type CommentCapabilities = {
  __typename?: 'CommentCapabilities';
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  read: Scalars['Boolean']['output'];
  report: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

export type CommentInput = {
  content: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
};

export type Contact = {
  __typename?: 'Contact';
  capabilities: CrudCapabilities;
  category?: Maybe<ContactCategory>;
  dateAnniversaire?: Maybe<Scalars['String']['output']>;
  firstname: Scalars['String']['output'];
  fonction: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastname: Scalars['String']['output'];
  lines: Array<ContactLine>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type ContactCategory = {
  __typename?: 'ContactCategory';
  capabilities: CrudCapabilities;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
};

export type ContactCategoryInput = {
  name: Scalars['String']['input'];
};

export type ContactInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  dateAnniversaire?: InputMaybe<Scalars['String']['input']>;
  firstname: Scalars['String']['input'];
  fonction: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  lines: Array<ContactLineInput>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ContactLine = {
  __typename?: 'ContactLine';
  id?: Maybe<Scalars['ID']['output']>;
  label: Scalars['String']['output'];
  propertyId: Scalars['ID']['output'];
  type: ContactPropertyType;
  value: Scalars['String']['output'];
};

export type ContactLineInput = {
  propertyId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

export type ContactProperty = {
  __typename?: 'ContactProperty';
  capabilities: CrudCapabilities;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  type: ContactPropertyType;
};

export type ContactPropertyInput = {
  label: Scalars['String']['input'];
  type: ContactPropertyType;
};

export enum ContactPropertyType {
  Email = 'EMAIL',
  Localisation = 'LOCALISATION',
  MobilePhone = 'MOBILE_PHONE',
  Other = 'OTHER',
  Phone = 'PHONE',
  Slack = 'SLACK',
  Teams = 'TEAMS'
}

export enum ContentType {
  Actualite = 'ACTUALITE',
  Album = 'ALBUM',
  Event = 'EVENT',
  PvReunion = 'PV_REUNION',
  Sondage = 'SONDAGE'
}

export type CreateOrganismeInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  effectif: Scalars['Int']['input'];
  indicatif: Scalars['String']['input'];
  name: Scalars['String']['input'];
  zipcode: Scalars['String']['input'];
};

export type CreateUserGroupInput = {
  nom: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  groupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  sendInvitation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeletePostUserReactionInput = {
  postId: Scalars['ID']['input'];
};

export type DeprecatedAuthor = {
  __typename?: 'DeprecatedAuthor';
  avatar?: Maybe<Media>;
  displayName: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
};

export type Device = {
  __typename?: 'Device';
  appVersion: Scalars['String']['output'];
  buildNumber: Scalars['String']['output'];
  createdAt: Scalars['DateTimeUtc']['output'];
  deviceModel: Scalars['String']['output'];
  deviceOs: Scalars['String']['output'];
  deviceUid: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  pushEnabled?: Maybe<Scalars['Boolean']['output']>;
  pushToken?: Maybe<Scalars['String']['output']>;
  systemVersion: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeUtc']['output'];
};

export type DeviceInput = {
  appVersion: Scalars['String']['input'];
  buildNumber: Scalars['String']['input'];
  deviceModel: Scalars['String']['input'];
  deviceOs: Scalars['String']['input'];
  deviceUid: Scalars['ID']['input'];
  pushEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  systemVersion: Scalars['String']['input'];
};

export type EccCapabilities = {
  __typename?: 'EccCapabilities';
  preview: Scalars['Boolean']['output'];
  use: Scalars['Boolean']['output'];
};

export type EventContent = PostContent & {
  __typename?: 'EventContent';
  endDate: Scalars['DateTimeUtc']['output'];
  /** @deprecated 29/09/2022 Use id */
  eventId: Scalars['ID']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  participants: Array<EventParticipant>;
  startDate: Scalars['DateTimeUtc']['output'];
  type: ContentType;
};

export type EventContentInput = {
  endDate: Scalars['DateTimeUtc']['input'];
  startDate: Scalars['DateTimeUtc']['input'];
};

export type EventParticipant = {
  __typename?: 'EventParticipant';
  statut: EventParticipationStatut;
  user: MinimalistUser;
};

export enum EventParticipationStatut {
  Decline = 'DECLINE',
  Interesse = 'INTERESSE',
  Participe = 'PARTICIPE'
}

export type ExecuteImportInput = {
  execute: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

export type FirstConnectionCreateAccountInput = {
  acceptGCU: Scalars['Boolean']['input'];
  organismeId: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type FirstConnectionJoinInput = {
  organismeId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type FirstConnectionSetAvatarInput = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
};

export type FirstConnectionSetBirthdateInput = {
  birthdate?: InputMaybe<Scalars['String']['input']>;
};

export type FirstConnectionSetNameInput = {
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
};

export type FirstConnectionSetupPushInput = {
  deviceUid: Scalars['ID']['input'];
  pushEnabled: Scalars['Boolean']['input'];
  pushToken?: InputMaybe<Scalars['String']['input']>;
};

export type FirstConnectionVerifyPhoneNumberInput = {
  token: Scalars['String']['input'];
};

export type IdentifiedInput = {
  id: Scalars['ID']['input'];
};

export type Import = {
  __typename?: 'Import';
  columns: Array<ImportedColumn>;
  errors: Array<ImportRowError>;
  id: Scalars['ID']['output'];
  rows: Array<ImportedRow>;
};

export type ImportError = {
  __typename?: 'ImportError';
  key: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ImportInput = {
  mediaId: Scalars['ID']['input'];
  type: ImportType;
};

export type ImportRowError = {
  __typename?: 'ImportRowError';
  errors: Array<ImportError>;
  row: ImportedRow;
};

export enum ImportType {
  Distribution = 'DISTRIBUTION',
  Users = 'USERS'
}

export type ImportedColumn = {
  __typename?: 'ImportedColumn';
  display: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type ImportedRow = {
  __typename?: 'ImportedRow';
  values: Array<Maybe<Scalars['String']['output']>>;
};

export type Interrupt = {
  __typename?: 'Interrupt';
  action: InterruptAction;
  workflow?: Maybe<WorkflowType>;
};

export enum InterruptAction {
  Workflow = 'WORKFLOW'
}

export type LockPhysicalCardInput = {
  id: Scalars['ID']['input'];
  reason: LockPhysicalCardReason;
};

export enum LockPhysicalCardReason {
  Defected = 'DEFECTED',
  Lock = 'LOCK',
  Lost = 'LOST',
  NonReceived = 'NON_RECEIVED',
  Stolen = 'STOLEN'
}

export type Me = {
  __typename?: 'Me';
  about?: Maybe<Scalars['String']['output']>;
  activatedAt?: Maybe<Scalars['DateTime']['output']>;
  avatar: Media;
  chatToken?: Maybe<ChatToken>;
  created_at: Scalars['DateTime']['output'];
  currentOrganisme?: Maybe<Organisme>;
  dateAnniversaire?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  fonction?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  incognito: Scalars['Boolean']['output'];
  isDefaultAvatar: Scalars['Boolean']['output'];
  lastname: Scalars['String']['output'];
  organismes: Array<Organisme>;
  /** @deprecated 06/06/2022 Use `currentOrganisme.capabilities` */
  permissions: Array<Permission>;
  phone?: Maybe<Phone>;
  role?: Maybe<UserRole>;
  updated_at: Scalars['DateTime']['output'];
};

export type Media = {
  __typename?: 'Media';
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  mimetype: Scalars['String']['output'];
  name: Scalars['String']['output'];
  resized?: Maybe<Array<Media>>;
  resolution?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};

export enum MediaTargetType {
  AlbumItem = 'ALBUM_ITEM',
  Import = 'IMPORT',
  PostImage = 'POST_IMAGE',
  PvDocument = 'PV_DOCUMENT',
  UserAvatar = 'USER_AVATAR'
}

export type MerchantCategory = {
  __typename?: 'MerchantCategory';
  icon: Scalars['String']['output'];
  mcc: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MinimalistOrganisme = {
  __typename?: 'MinimalistOrganisme';
  avatar?: Maybe<Media>;
  displayName: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
};

export type MinimalistUser = {
  __typename?: 'MinimalistUser';
  avatar?: Maybe<Media>;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Field no longer supported */
  nom?: Maybe<Scalars['String']['output']>;
};

export type MisesEnAvantVedette = {
  __typename?: 'MisesEnAvantVedette';
  catalogue?: Maybe<BonsplansCatalogue>;
  categorie?: Maybe<BonsplansCategory>;
  cta: Scalars['String']['output'];
  dateDebut: Scalars['DateTimeUtc']['output'];
  dateFin: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  produit?: Maybe<BonsplansProduit>;
  target: MisesEnAvantVedetteTarget;
  /** @deprecated 24/06/2022 Use `target.id` */
  targetId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated 24/06/2022 Use `target.type` */
  targetType: MisesEnAvantVedetteTargetType;
  /** @deprecated 24/06/2022 Use `target.url` */
  targetUrl?: Maybe<Scalars['String']['output']>;
  visuel?: Maybe<Media>;
};

export type MisesEnAvantVedetteEmplacement = {
  __typename?: 'MisesEnAvantVedetteEmplacement';
  emplacementId?: Maybe<Scalars['ID']['output']>;
  emplacementType: MisesEnAvantVedetteEmplacementType;
};

export enum MisesEnAvantVedetteEmplacementType {
  ClubavantagesCatalogue = 'CLUBAVANTAGES_CATALOGUE',
  ClubavantagesHome = 'CLUBAVANTAGES_HOME',
  Culture = 'CULTURE',
  Ecc = 'ECC',
  Home = 'HOME'
}

export type MisesEnAvantVedetteTarget = {
  __typename?: 'MisesEnAvantVedetteTarget';
  id?: Maybe<Scalars['ID']['output']>;
  type: MisesEnAvantVedetteTargetType;
  url?: Maybe<Scalars['String']['output']>;
};

export enum MisesEnAvantVedetteTargetType {
  /** @deprecated 24/06/2022 Use `CLUBAVANTAGES_CATALOGUE` */
  BonsplansCatalogue = 'BONSPLANS_CATALOGUE',
  /** @deprecated 24/06/2022 Use `CLUBAVANTAGES_CATEGORIE` */
  BonsplansCategorie = 'BONSPLANS_CATEGORIE',
  /** @deprecated 24/06/2022 Use `CLUBAVANTAGES_PRODUIT` */
  BonsplansProduit = 'BONSPLANS_PRODUIT',
  ClubavantagesCatalogue = 'CLUBAVANTAGES_CATALOGUE',
  ClubavantagesCategorie = 'CLUBAVANTAGES_CATEGORIE',
  ClubavantagesProduit = 'CLUBAVANTAGES_PRODUIT',
  CultureCategorie = 'CULTURE_CATEGORIE',
  CultureProduit = 'CULTURE_PRODUIT',
  EccCategorie = 'ECC_CATEGORIE',
  EccProduit = 'ECC_PRODUIT',
  Url = 'URL'
}

export type MisesEnAvantVedettesInput = {
  emplacementId?: InputMaybe<Scalars['ID']['input']>;
  emplacementType: MisesEnAvantVedetteEmplacementType;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptReport: Report;
  activatePhysicalCard: CardProviderConsent;
  bonsplansCommandeBilletUtilise: BonsplansCommandeBillet;
  bonsplansPanierAddArticles: BonsplansPanier;
  bonsplansPanierAddArticlesTmp: BonsplansPanierTmp;
  bonsplansPanierClear: BonsplansPanier;
  bonsplansPanierRemoveLigne: BonsplansPanier;
  bonsplansPanierUpdateLigne: BonsplansPanier;
  bonsplansPanierUseWallet: BonsplansPanier;
  bonsplansTunnelCommandeSetLivraison: BonsplansTunnelCommandeSetLivraison;
  bonsplansTunnelCommandeValidate: BonsplansTunnelCommandeValidate;
  carteVacancesAbonnementCommandeCreate: CarteVacancesAbonnementCommande;
  carteVacancesAlimentationCreate: WalletsPaiement;
  carteVacancesTransactionIssueCreate: CarteVacancesTransactionIssue;
  changeCurrentOrganization: Me;
  changeEmailSendVerification?: Maybe<Scalars['Void']['output']>;
  changeEmailVerifyEmail?: Maybe<Scalars['Void']['output']>;
  changeEmailVerifyTfa?: Maybe<Scalars['Void']['output']>;
  changePassword?: Maybe<Scalars['Void']['output']>;
  changePasswordVerifyTfa?: Maybe<Scalars['Void']['output']>;
  changePhoneNumberSendVerification?: Maybe<Scalars['Void']['output']>;
  changePhoneNumberVerifyPhoneNumber?: Maybe<Scalars['Void']['output']>;
  changePhoneNumberVerifyTfa?: Maybe<Scalars['Void']['output']>;
  changeUserGroups: User;
  changeUserRole: User;
  createCashbackPayment: CashbackPayment;
  createComment: Comment;
  createContact: Contact;
  createContactCategory: ContactCategory;
  createContactProperty: ContactProperty;
  createOrganisme: Organisme;
  createPost: Post;
  createPostCategory: PostCategory;
  createUser: User;
  createUserGroup: UserGroup;
  createWalletsDistribution: WalletsDistribution;
  /** @deprecated 17/08/2022 Use `createWalletsProvisionningEcc` */
  createWalletsProvisionning: WalletsProvisionning;
  createWalletsProvisionningCulture: WalletsProvisionning;
  createWalletsProvisionningEcc: WalletsProvisionning;
  createWalletsProvisionningSub: WalletsProvisionning;
  deactiveUser: User;
  declineReport: Report;
  deleteComment: Comment;
  deleteContact: Contact;
  deleteContactCategory: ContactCategory;
  deleteContactProperty: ContactProperty;
  deletePost: Post;
  deletePostCategory: PostCategory;
  deletePostUserReaction: Post;
  deleteUser: User;
  deleteUserGroup: UserGroup;
  executeImport?: Maybe<Scalars['Void']['output']>;
  firstConnectionCreateAccount?: Maybe<AuthResponse>;
  firstConnectionJoin?: Maybe<AuthResponse>;
  firstConnectionProductTourDone?: Maybe<Scalars['Void']['output']>;
  firstConnectionSetAvatar?: Maybe<Scalars['Void']['output']>;
  firstConnectionSetBirthdate?: Maybe<Scalars['Void']['output']>;
  firstConnectionSetName?: Maybe<Scalars['Void']['output']>;
  firstConnectionSetupPush?: Maybe<Scalars['Void']['output']>;
  firstConnectionVerifyPhoneNumber?: Maybe<Scalars['Void']['output']>;
  import: Import;
  lockPhysicalCard: CarteVacances;
  logout?: Maybe<Scalars['Void']['output']>;
  onboardCarteVacances?: Maybe<CardProviderConsent>;
  onboardCarteVacancesUser?: Maybe<CardProviderConsent>;
  participationEvent?: Maybe<Scalars['Void']['output']>;
  reactPost: Post;
  reactiveUser: User;
  refreshAuthToken: AuthResponse;
  reorderContactCategories: Array<ContactCategory>;
  reorderContactProperties: Array<ContactProperty>;
  reponseSondage: SondageContent;
  reportComment: Report;
  resendInvitation: User;
  resetPassword?: Maybe<Scalars['Void']['output']>;
  sendEmailAccountVerification?: Maybe<Scalars['Void']['output']>;
  sendPhoneNumberAccountVerification?: Maybe<Scalars['Void']['output']>;
  sendResetPassword?: Maybe<Scalars['Void']['output']>;
  sendTfaCode?: Maybe<Scalars['Void']['output']>;
  showCard: CardProviderConsent;
  showPin: CardProviderConsent;
  signin: AuthResponse;
  signupCreateAccount: AuthResponse;
  signupCreateOrganisme: Organisme;
  signupCreateOrganismeV2: Organisme;
  signupProductTourDone?: Maybe<Scalars['Void']['output']>;
  signupSetupPush?: Maybe<Scalars['Void']['output']>;
  signupValidateUserInformations?: Maybe<Scalars['Void']['output']>;
  signupVerifyEmail?: Maybe<Scalars['Void']['output']>;
  signupVerifyPhoneNumber?: Maybe<Scalars['Void']['output']>;
  sso: AuthResponse;
  startWorkflow: Workflow;
  unlockPhysicalCard: CardProviderConsent;
  updateComment: Comment;
  updateContact: Contact;
  updateContactCategory: ContactCategory;
  updateContactProperty: ContactProperty;
  updateDevice: Device;
  updateMe: Me;
  updateOrganisme: Organisme;
  updatePost: Post;
  updatePostCategory: PostCategory;
  updateUser: User;
  updateUserGroup: UserGroup;
  uploadMedia: Media;
  userExecuteImport?: Maybe<Scalars['Void']['output']>;
  userSendInvitations: UserSendInvitations;
  walletsUserActivateWallet: WalletsUserWallet;
  walletsUserPartageWallet: WalletsUserWalletPartage;
  walletsUserSendActivationCode?: Maybe<Scalars['Void']['output']>;
};


export type MutationAcceptReportArgs = {
  input: IdentifiedInput;
};


export type MutationActivatePhysicalCardArgs = {
  input: ActivatePhysicalCardInput;
};


export type MutationBonsplansCommandeBilletUtiliseArgs = {
  input: BonsplansCommandeBilletUtiliseInput;
};


export type MutationBonsplansPanierAddArticlesArgs = {
  input: BonsplansPanierAddArticlesInput;
};


export type MutationBonsplansPanierAddArticlesTmpArgs = {
  input: BonsplansPanierAddArticlesInput;
};


export type MutationBonsplansPanierClearArgs = {
  input: BonsplansPanierClearInput;
};


export type MutationBonsplansPanierRemoveLigneArgs = {
  input: BonsplansPanierRemoveLigneInput;
};


export type MutationBonsplansPanierUpdateLigneArgs = {
  input: BonsplansPanierUpdateLigneInput;
};


export type MutationBonsplansPanierUseWalletArgs = {
  input: BonsplansPanierUseWalletInput;
};


export type MutationBonsplansTunnelCommandeSetLivraisonArgs = {
  input: BonsplansTunnelCommandeSetLivraisonInput;
};


export type MutationBonsplansTunnelCommandeValidateArgs = {
  input: BonsplansTunnelCommandeValidateInput;
};


export type MutationCarteVacancesAbonnementCommandeCreateArgs = {
  input: CarteVacancesAbonnementCommandeInput;
};


export type MutationCarteVacancesAlimentationCreateArgs = {
  input: CarteVacancesAlimentationCreateInput;
};


export type MutationCarteVacancesTransactionIssueCreateArgs = {
  input: CarteVacancesTransactionIssueInput;
};


export type MutationChangeCurrentOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChangeEmailSendVerificationArgs = {
  input: ChangeEmailSendVerificationInput;
};


export type MutationChangeEmailVerifyEmailArgs = {
  input: ChangeEmailVerifyEmailInput;
};


export type MutationChangeEmailVerifyTfaArgs = {
  input: ChangeEmailTfaCodeInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationChangePasswordVerifyTfaArgs = {
  input: ChangePasswordTfaCodeInput;
};


export type MutationChangePhoneNumberSendVerificationArgs = {
  input: ChangePhoneNumberSendVerificationInput;
};


export type MutationChangePhoneNumberVerifyPhoneNumberArgs = {
  input: ChangePhoneNumberVerifyPhoneNumberInput;
};


export type MutationChangePhoneNumberVerifyTfaArgs = {
  input: ChangePhoneNumberTfaCodeInput;
};


export type MutationChangeUserGroupsArgs = {
  input: ChangeUserGroupsInput;
};


export type MutationChangeUserRoleArgs = {
  input: ChangeUserRoleInput;
};


export type MutationCreateCashbackPaymentArgs = {
  input?: InputMaybe<CashbackPaymentInput>;
};


export type MutationCreateCommentArgs = {
  input?: InputMaybe<CommentInput>;
};


export type MutationCreateContactArgs = {
  input: ContactInput;
};


export type MutationCreateContactCategoryArgs = {
  input: ContactCategoryInput;
};


export type MutationCreateContactPropertyArgs = {
  input: ContactPropertyInput;
};


export type MutationCreateOrganismeArgs = {
  input: CreateOrganismeInput;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationCreatePostCategoryArgs = {
  input: PostCategoryInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserGroupArgs = {
  input: CreateUserGroupInput;
};


export type MutationCreateWalletsDistributionArgs = {
  input: WalletsDistributionInput;
};


export type MutationCreateWalletsProvisionningArgs = {
  input?: InputMaybe<WalletsProvisionningInput>;
};


export type MutationCreateWalletsProvisionningCultureArgs = {
  input?: InputMaybe<WalletsProvisionningCultureInput>;
};


export type MutationCreateWalletsProvisionningEccArgs = {
  input?: InputMaybe<WalletsProvisionningEccInput>;
};


export type MutationCreateWalletsProvisionningSubArgs = {
  input?: InputMaybe<WalletsProvisionningSubInput>;
};


export type MutationDeactiveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeclineReportArgs = {
  input: IdentifiedInput;
};


export type MutationDeleteCommentArgs = {
  input: IdentifiedInput;
};


export type MutationDeleteContactArgs = {
  input: IdentifiedInput;
};


export type MutationDeleteContactCategoryArgs = {
  input: IdentifiedInput;
};


export type MutationDeleteContactPropertyArgs = {
  input: IdentifiedInput;
};


export type MutationDeletePostArgs = {
  input: IdentifiedInput;
};


export type MutationDeletePostCategoryArgs = {
  input: IdentifiedInput;
};


export type MutationDeletePostUserReactionArgs = {
  input: DeletePostUserReactionInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExecuteImportArgs = {
  input: ExecuteImportInput;
};


export type MutationFirstConnectionCreateAccountArgs = {
  input: FirstConnectionCreateAccountInput;
};


export type MutationFirstConnectionJoinArgs = {
  input: FirstConnectionJoinInput;
};


export type MutationFirstConnectionSetAvatarArgs = {
  input: FirstConnectionSetAvatarInput;
};


export type MutationFirstConnectionSetBirthdateArgs = {
  input: FirstConnectionSetBirthdateInput;
};


export type MutationFirstConnectionSetNameArgs = {
  input: FirstConnectionSetNameInput;
};


export type MutationFirstConnectionSetupPushArgs = {
  input: FirstConnectionSetupPushInput;
};


export type MutationFirstConnectionVerifyPhoneNumberArgs = {
  input: FirstConnectionVerifyPhoneNumberInput;
};


export type MutationImportArgs = {
  input: ImportInput;
};


export type MutationLockPhysicalCardArgs = {
  input: LockPhysicalCardInput;
};


export type MutationOnboardCarteVacancesArgs = {
  input: OnboardCarteVacancesInput;
};


export type MutationOnboardCarteVacancesUserArgs = {
  input: OnboardCarteVacancesUserInput;
};


export type MutationParticipationEventArgs = {
  input: ParticipationEventInput;
};


export type MutationReactPostArgs = {
  input: ReactPostInput;
};


export type MutationReactiveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRefreshAuthTokenArgs = {
  input?: InputMaybe<RefreshAuthTokenInput>;
};


export type MutationReorderContactCategoriesArgs = {
  input: ReorderContactCategoriesInput;
};


export type MutationReorderContactPropertiesArgs = {
  input: ReorderContactPropertiesInput;
};


export type MutationReponseSondageArgs = {
  input: ReponseSondageInput;
};


export type MutationReportCommentArgs = {
  input: IdentifiedInput;
};


export type MutationResendInvitationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendEmailAccountVerificationArgs = {
  input: SendEmailAccountVerification;
};


export type MutationSendPhoneNumberAccountVerificationArgs = {
  input: SendPhoneNumberAccountVerification;
};


export type MutationSendResetPasswordArgs = {
  input: SendResetPasswordInput;
};


export type MutationShowCardArgs = {
  input: ShowCardInput;
};


export type MutationShowPinArgs = {
  input: ShowPinInput;
};


export type MutationSigninArgs = {
  input: SigninInput;
};


export type MutationSignupCreateAccountArgs = {
  input: SignupCreateAccountInput;
};


export type MutationSignupCreateOrganismeArgs = {
  input: SignupCreateOrganismeInput;
};


export type MutationSignupCreateOrganismeV2Args = {
  input: SignupCreateOrganismeInput;
};


export type MutationSignupSetupPushArgs = {
  input: SignupSetupPushInput;
};


export type MutationSignupValidateUserInformationsArgs = {
  input: SignupValidateUserInformationsInput;
};


export type MutationSignupVerifyEmailArgs = {
  input: SignupVerifyEmailInput;
};


export type MutationSignupVerifyPhoneNumberArgs = {
  input: SignupVerifyPhoneNumberInput;
};


export type MutationStartWorkflowArgs = {
  input: StartWorkflowInput;
};


export type MutationUnlockPhysicalCardArgs = {
  input: UnlockPhysicalCardInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateContactArgs = {
  input: UpdateContactInput;
};


export type MutationUpdateContactCategoryArgs = {
  input: UpdateContactCategoryInput;
};


export type MutationUpdateContactPropertyArgs = {
  input: UpdateContactPropertyInput;
};


export type MutationUpdateDeviceArgs = {
  input: DeviceInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};


export type MutationUpdateOrganismeArgs = {
  input: UpdateOrganismeInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdatePostCategoryArgs = {
  input: UpdatePostCategoryInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserGroupArgs = {
  input: UpdateUserGroupInput;
};


export type MutationUploadMediaArgs = {
  input: UploadInput;
};


export type MutationUserExecuteImportArgs = {
  importInput: UserExecuteImportInput;
  input: ExecuteImportInput;
};


export type MutationWalletsUserActivateWalletArgs = {
  input: WalletsUserActivateWalletInput;
};


export type MutationWalletsUserPartageWalletArgs = {
  input: WalletsUserPartageWalletInput;
};


export type MutationWalletsUserSendActivationCodeArgs = {
  input: WalletsUserSendActivationCodeInput;
};

export type OffsetPagination = {
  __typename?: 'OffsetPagination';
  count: Scalars['Int']['output'];
  firstItem?: Maybe<Scalars['Int']['output']>;
  lastItem?: Maybe<Scalars['Int']['output']>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OffsetPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type OnboardCarteVacancesAdresseLivraisonInput = {
  address: Scalars['String']['input'];
  addressComplement?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country: Scalars['CountryCodeAlpha3']['input'];
  zipcode: Scalars['String']['input'];
};

export type OnboardCarteVacancesInput = {
  adresseLivraison?: InputMaybe<OnboardCarteVacancesAdresseLivraisonInput>;
  birthdate: Scalars['Date']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type OnboardCarteVacancesUserInput = {
  redirectUrl: Scalars['String']['input'];
};

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByClause = {
  column: Scalars['String']['input'];
  order: SortOrder;
};

export enum OrderByRelationAggregateFunction {
  Count = 'COUNT'
}

export enum OrderByRelationWithColumnAggregateFunction {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM'
}

export type Organisme = {
  __typename?: 'Organisme';
  address: Scalars['String']['output'];
  avatar: Media;
  capabilities: RootCapabilities;
  city: Scalars['String']['output'];
  config: OrganismeConfig;
  country: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  indicatif: Scalars['String']['output'];
  name: Scalars['String']['output'];
  zipcode: Scalars['String']['output'];
};

export enum OrganismeAbonnementType {
  Basic = 'BASIC',
  Free = 'FREE',
  Full = 'FULL'
}

export type OrganismeCapabilities = {
  __typename?: 'OrganismeCapabilities';
  createChild: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

export type OrganismeConfig = {
  __typename?: 'OrganismeConfig';
  organisme: OrganismeOrganismeConfig;
  wallet: WalletsOrganismeConfig;
};

export type OrganismeOrganismeConfig = {
  __typename?: 'OrganismeOrganismeConfig';
  hasMultiOrganisme: Scalars['Boolean']['output'];
  timezone: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  lastPage: Scalars['Int']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type PaginatedAlbumItems = {
  __typename?: 'PaginatedAlbumItems';
  data: Array<AlbumItem>;
  pagination: OffsetPagination;
};

export type PaginatedBonsplansCommandeBillets = {
  __typename?: 'PaginatedBonsplansCommandeBillets';
  data: Array<BonsplansCommandeBillet>;
  pagination: OffsetPagination;
};

export type PaginatedBonsplansCommandes = {
  __typename?: 'PaginatedBonsplansCommandes';
  data: Array<BonsplansCommande>;
  pagination: OffsetPagination;
};

export type PaginatedBonsplansSearchProduit = {
  __typename?: 'PaginatedBonsplansSearchProduit';
  data: Array<BonsplansSearchProduit>;
  pagination: OffsetPagination;
};

export type PaginatedCardTransactions = {
  __typename?: 'PaginatedCardTransactions';
  data: Array<CardTransaction>;
  pagination: OffsetPagination;
};

export type PaginatedCarteVacancesAbonnementCommandes = {
  __typename?: 'PaginatedCarteVacancesAbonnementCommandes';
  data: Array<CarteVacancesAbonnementCommande>;
  pagination: OffsetPagination;
};

export type PaginatedCarteVacancesAbonnements = {
  __typename?: 'PaginatedCarteVacancesAbonnements';
  data: Array<CarteVacancesAbonnement>;
  pagination: OffsetPagination;
};

export type PaginatedCashbackOffers = {
  __typename?: 'PaginatedCashbackOffers';
  data: Array<CashbackOffer>;
  pagination: OffsetPagination;
};

export type PaginatedCashbackPayments = {
  __typename?: 'PaginatedCashbackPayments';
  data: Array<CashbackPayment>;
  pagination: OffsetPagination;
};

export type PaginatedCashbackTransactions = {
  __typename?: 'PaginatedCashbackTransactions';
  data: Array<CashbackTransaction>;
  pagination: OffsetPagination;
};

export type PaginatedComments = {
  __typename?: 'PaginatedComments';
  data: Array<Comment>;
  pagination: OffsetPagination;
};

export type PaginatedContacts = {
  __typename?: 'PaginatedContacts';
  data: Array<Contact>;
  pagination: OffsetPagination;
};

export type PaginatedMisesEnAvants = {
  __typename?: 'PaginatedMisesEnAvants';
  data: Array<Post>;
  pagination: OffsetPagination;
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  data: Array<Post>;
  pagination: OffsetPagination;
};

export type PaginatedReductionCodeShops = {
  __typename?: 'PaginatedReductionCodeShops';
  data: Array<ReductionCodeShop>;
  pagination: OffsetPagination;
};

export type PaginatedReductionCodes = {
  __typename?: 'PaginatedReductionCodes';
  data: Array<ReductionCode>;
  pagination: OffsetPagination;
};

export type PaginatedReports = {
  __typename?: 'PaginatedReports';
  data: Array<Report>;
  pagination: OffsetPagination;
};

export type PaginatedSondageParticipations = {
  __typename?: 'PaginatedSondageParticipations';
  data: Array<SondageParticipation>;
  pagination: OffsetPagination;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  data: Array<User>;
  pagination: OffsetPagination;
};

export type PaginatedWalletsDistributionMotifs = {
  __typename?: 'PaginatedWalletsDistributionMotifs';
  data: Array<WalletsDistributionMotif>;
  pagination: OffsetPagination;
};

export type PaginatedWalletsDistributions = {
  __typename?: 'PaginatedWalletsDistributions';
  data: Array<WalletsDistribution>;
  pagination: OffsetPagination;
};

export type PaginatedWalletsMouvements = {
  __typename?: 'PaginatedWalletsMouvements';
  data: Array<WalletsOrganismeWalletMvt>;
  pagination: OffsetPagination;
};

export type PaginatedWalletsProvisionnings = {
  __typename?: 'PaginatedWalletsProvisionnings';
  data: Array<WalletsProvisionning>;
  pagination: OffsetPagination;
};

export type PaginatedWalletsUserWallets = {
  __typename?: 'PaginatedWalletsUserWallets';
  data: Array<WalletsUserWallet>;
  pagination: OffsetPagination;
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  firstItem?: Maybe<Scalars['Int']['output']>;
  hasMorePages: Scalars['Boolean']['output'];
  lastItem?: Maybe<Scalars['Int']['output']>;
  lastPage: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ParticipationEventInput = {
  eventId: Scalars['ID']['input'];
  statut: EventParticipationStatut;
};

export type Permission = {
  __typename?: 'Permission';
  action: Array<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
};

export type Phone = {
  __typename?: 'Phone';
  indicatif: Scalars['String']['output'];
  number: Scalars['String']['output'];
};

export type PhoneInput = {
  indicatif: Scalars['String']['input'];
  number: Scalars['String']['input'];
};

export type PhysicalCard = {
  __typename?: 'PhysicalCard';
  blocked: Scalars['Boolean']['output'];
  canceled: Scalars['Boolean']['output'];
  deliveryDate?: Maybe<Scalars['DateTimeUtc']['output']>;
  deliveryUrl?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author: DeprecatedAuthor;
  authorV2: Author;
  capabilities: PostCapabilities;
  category?: Maybe<PostCategory>;
  /** @deprecated 05/10/2022 Il vaut mieux utiliser la propriété category */
  categoryId?: Maybe<Scalars['ID']['output']>;
  comments: Array<Comment>;
  content: PostContent;
  group?: Maybe<UserGroup>;
  id: Scalars['ID']['output'];
  image?: Maybe<Media>;
  /** @deprecated Field no longer supported */
  images: Array<Media>;
  interactions: PostInteractions;
  publish: Scalars['Boolean']['output'];
  publishedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  reactions: Array<Reaction>;
  status: PostStatus;
  textContent?: Maybe<Scalars['String']['output']>;
  /** @deprecated 28/09/2022 Le post n'affiche plus que textContent */
  title?: Maybe<Scalars['String']['output']>;
  userReaction?: Maybe<Reaction>;
};

export type PostCapabilities = {
  __typename?: 'PostCapabilities';
  /** @deprecated 27/09/2022 Use `commentV2.create` */
  comment: Scalars['Boolean']['output'];
  commentV2: CommentCapabilities;
  content: PostContentCapabilities;
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  reaction: CrudCapabilities;
  read: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

export type PostCategory = {
  __typename?: 'PostCategory';
  capabilities: CrudCapabilities;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
};

export type PostCategoryInput = {
  label: Scalars['String']['input'];
};

export type PostContent = {
  id?: Maybe<Scalars['ID']['output']>;
  type: ContentType;
};

export type PostContentCapabilities = {
  __typename?: 'PostContentCapabilities';
  actualite: PostContentCapability;
  album: PostContentCapability;
  event: PostContentCapability;
  pvReunion: PostContentCapability;
  sondage: PostSondageContentCapability;
};

export type PostContentCapability = {
  __typename?: 'PostContentCapability';
  create: Scalars['Boolean']['output'];
};

export type PostContentInput = {
  album?: InputMaybe<AlbumContentInput>;
  event?: InputMaybe<EventContentInput>;
  pvReunion?: InputMaybe<PvReunionContentInput>;
  sondage?: InputMaybe<SondageContentInput>;
  type: ContentType;
};

export type PostInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<PostContentInput>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostInteractions = {
  __typename?: 'PostInteractions';
  comment: Scalars['Int']['output'];
  like: Scalars['Int']['output'];
  love: Scalars['Int']['output'];
  praise: Scalars['Int']['output'];
  surprised: Scalars['Int']['output'];
  thinking: Scalars['Int']['output'];
};

export type PostInteractionsSubscription = {
  __typename?: 'PostInteractionsSubscription';
  interactions: PostInteractions;
  postId: Scalars['ID']['output'];
};

export type PostSondageContentCapability = {
  __typename?: 'PostSondageContentCapability';
  create: Scalars['Boolean']['output'];
  respond: Scalars['Boolean']['output'];
};

export enum PostStatus {
  Brouillon = 'BROUILLON',
  Planifie = 'PLANIFIE',
  Publie = 'PUBLIE'
}

export type PvReunionContent = PostContent & {
  __typename?: 'PvReunionContent';
  /** @deprecated Cela devient le type DocumentContent donc pas de date */
  date?: Maybe<Scalars['DateTimeUtc']['output']>;
  documents: Array<Media>;
  id: Scalars['ID']['output'];
  type: ContentType;
};

export type PvReunionContentInput = {
  date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  documentIds: Array<Scalars['ID']['input']>;
};

export type Query = {
  __typename?: 'Query';
  album: Album;
  bonsplansArticle: BonsplansArticle;
  bonsplansCatalogue: BonsplansCatalogue;
  bonsplansCatalogues: Array<BonsplansCatalogue>;
  bonsplansCategorie: BonsplansCategory;
  bonsplansCategories: Array<BonsplansCategory>;
  bonsplansCommande: BonsplansCommande;
  bonsplansCommandeAdminStats: BonsplansCommandeStats;
  bonsplansCommandeBillet: BonsplansCommandeBillet;
  bonsplansCommandeBillets: PaginatedBonsplansCommandeBillets;
  bonsplansCommandeStats: BonsplansCommandeStats;
  bonsplansCommandes: PaginatedBonsplansCommandes;
  bonsplansPanier: BonsplansPanier;
  bonsplansProduit: BonsplansProduit;
  bonsplansSearchProduits: PaginatedBonsplansSearchProduit;
  bonsplansSuggestProduits: Array<BonsplansSearchProduit>;
  carteVacances?: Maybe<CarteVacances>;
  carteVacancesAbonnementCommande: CarteVacancesAbonnementCommande;
  carteVacancesAbonnementCommandes: PaginatedCarteVacancesAbonnementCommandes;
  carteVacancesAbonnementOptions: Array<CarteVacancesAbonnementOption>;
  carteVacancesAbonnementSimulation: CarteVacancesAbonnementSimulation;
  carteVacancesAbonnementStats?: Maybe<Array<CarteVacancesAbonnementStats>>;
  carteVacancesAbonnements: PaginatedCarteVacancesAbonnements;
  carteVacancesAlimentationSimulation: CarteVacancesAlimentationSimulation;
  carteVacancesTransaction: CardTransaction;
  cashbackBalance: CashbackBalance;
  cashbackCategories: Array<CashbackCategory>;
  cashbackOffer: CashbackOffer;
  cashbackOffers: PaginatedCashbackOffers;
  cashbackPayment: CashbackPayment;
  cashbackPayments: PaginatedCashbackPayments;
  cashbackSubCategories: Array<CashbackSubCategory>;
  cashbackTransaction: CashbackTransaction;
  cashbackTransactions: PaginatedCashbackTransactions;
  clubAvantagesCatalogues: Array<ClubAvantagesCatalogue>;
  comments: PaginatedComments;
  contact?: Maybe<Contact>;
  contactCategories: Array<ContactCategory>;
  contactProperties: Array<ContactProperty>;
  contacts: PaginatedContacts;
  importSample: Media;
  interrupt?: Maybe<Interrupt>;
  me: Me;
  misesEnAvantVedette: MisesEnAvantVedette;
  misesEnAvantVedettes: Array<MisesEnAvantVedette>;
  misesEnAvants: PaginatedMisesEnAvants;
  organisme?: Maybe<Organisme>;
  post: Post;
  postCategories: Array<PostCategory>;
  postCategory: PostCategory;
  posts: PaginatedPosts;
  reductionCode: ReductionCode;
  reductionCodeCatalogue: ReductionCodeCatalogue;
  reductionCodeCategories: Array<ReductionCodeCategory>;
  reductionCodeShop: ReductionCodeShop;
  reductionCodeShops: PaginatedReductionCodeShops;
  reductionCodeSubCategories: Array<ReductionCodeSubCategory>;
  reductionCodes: PaginatedReductionCodes;
  report: Report;
  reports: PaginatedReports;
  signupInvitation: SignupInvitation;
  /** @deprecated 24/11/2022 Use `walletsDistributionSimulation` */
  simulateWalletsDistribution: WalletsDistributionSimulation;
  ssoAuthToken: Scalars['String']['output'];
  user?: Maybe<User>;
  userGroup: UserGroup;
  userGroups: Array<UserGroup>;
  userStats: UserStats;
  users: PaginatedUsers;
  usersExport: Media;
  walletsAdvantages: Array<WalletsAdvantage>;
  walletsAllUserWallets: PaginatedWalletsUserWallets;
  walletsDistribution: WalletsDistribution;
  walletsDistributionCultureMotif: WalletsDistributionMotif;
  walletsDistributionECCMotifs: PaginatedWalletsDistributionMotifs;
  walletsDistributionMotif: WalletsDistributionMotif;
  walletsDistributionMotifs: PaginatedWalletsDistributionMotifs;
  walletsDistributionSimulation: WalletsDistributionSimulation;
  walletsDistributionUserWallets: PaginatedWalletsUserWallets;
  walletsDistributions: PaginatedWalletsDistributions;
  walletsOrganismeWallet: WalletsOrganismeWallet;
  walletsProvisionning: WalletsProvisionning;
  walletsProvisionnings: PaginatedWalletsProvisionnings;
  walletsUserWallet: WalletsUserWallet;
  walletsUserWallets: PaginatedWalletsUserWallets;
  workflow?: Maybe<Workflow>;
};


export type QueryAlbumArgs = {
  input: IdentifiedInput;
};


export type QueryBonsplansArticleArgs = {
  input: BonsplansArticleInput;
};


export type QueryBonsplansCatalogueArgs = {
  input: BonsplansCatalogueInput;
};


export type QueryBonsplansCataloguesArgs = {
  input: BonsplansCataloguesInput;
};


export type QueryBonsplansCategorieArgs = {
  input: BonsplansCategorieInput;
};


export type QueryBonsplansCategoriesArgs = {
  input: BonsplansCategoriesInput;
};


export type QueryBonsplansCommandeArgs = {
  input: IdentifiedInput;
};


export type QueryBonsplansCommandeAdminStatsArgs = {
  input: BonsplansCommandeStatsInput;
};


export type QueryBonsplansCommandeBilletArgs = {
  input: BonsplansCommandeBilletInput;
};


export type QueryBonsplansCommandeBilletsArgs = {
  input?: InputMaybe<BonsplansCommandeBilletsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryBonsplansCommandeStatsArgs = {
  input: BonsplansCommandeStatsInput;
};


export type QueryBonsplansCommandesArgs = {
  input?: InputMaybe<BonsplansCommandesInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryBonsplansPanierArgs = {
  espace: BonsplansEspace;
};


export type QueryBonsplansProduitArgs = {
  input: BonsplansProduitInput;
};


export type QueryBonsplansSearchProduitsArgs = {
  input: BonsplansSearchProduitsInput;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryBonsplansSuggestProduitsArgs = {
  input: BonsplansSuggestProduitsInput;
};


export type QueryCarteVacancesAbonnementCommandeArgs = {
  input: IdentifiedInput;
};


export type QueryCarteVacancesAbonnementCommandesArgs = {
  input?: InputMaybe<CarteVacancesAbonnementCommandesInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryCarteVacancesAbonnementOptionsArgs = {
  input?: InputMaybe<CarteVacancesAbonnementOptionsInput>;
};


export type QueryCarteVacancesAbonnementSimulationArgs = {
  input: CarteVacancesAbonnementSimulationInput;
};


export type QueryCarteVacancesAbonnementsArgs = {
  input?: InputMaybe<CarteVacancesAbonnementsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryCarteVacancesAlimentationSimulationArgs = {
  input: CarteVacancesAlimentationSimulationInput;
};


export type QueryCarteVacancesTransactionArgs = {
  input: IdentifiedInput;
};


export type QueryCashbackOfferArgs = {
  input: IdentifiedInput;
};


export type QueryCashbackOffersArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<OffsetPaginationInput>;
  subCategoryId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCashbackPaymentArgs = {
  input: IdentifiedInput;
};


export type QueryCashbackTransactionArgs = {
  input: IdentifiedInput;
};


export type QueryCommentsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
  postId: Scalars['ID']['input'];
};


export type QueryContactArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactsArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Order>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryImportSampleArgs = {
  type: ImportType;
};


export type QueryMisesEnAvantVedetteArgs = {
  input: IdentifiedInput;
};


export type QueryMisesEnAvantVedettesArgs = {
  input: MisesEnAvantVedettesInput;
};


export type QueryMisesEnAvantsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryOrganismeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  input: IdentifiedInput;
};


export type QueryPostCategoryArgs = {
  input: IdentifiedInput;
};


export type QueryPostsArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Order>;
  pagination?: InputMaybe<OffsetPaginationInput>;
  status?: InputMaybe<PostStatus>;
};


export type QueryReductionCodeArgs = {
  input: IdentifiedInput;
};


export type QueryReductionCodeShopArgs = {
  input: IdentifiedInput;
};


export type QueryReductionCodeShopsArgs = {
  input?: InputMaybe<ReductionCodeShopsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryReductionCodesArgs = {
  input?: InputMaybe<ReductionCodesInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryReportArgs = {
  input: IdentifiedInput;
};


export type QueryReportsArgs = {
  order?: InputMaybe<Order>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QuerySignupInvitationArgs = {
  input?: InputMaybe<SignupInvitationInput>;
};


export type QuerySimulateWalletsDistributionArgs = {
  input: WalletsDistributionInput;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUserGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  input?: InputMaybe<UsersInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryUsersExportArgs = {
  input?: InputMaybe<UsersInput>;
};


export type QueryWalletsAllUserWalletsArgs = {
  input?: InputMaybe<WalletsAllUserWalletsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWalletsDistributionArgs = {
  input: IdentifiedInput;
};


export type QueryWalletsDistributionEccMotifsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWalletsDistributionMotifArgs = {
  input: IdentifiedInput;
};


export type QueryWalletsDistributionMotifsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWalletsDistributionSimulationArgs = {
  input: WalletsDistributionSimulationInput;
};


export type QueryWalletsDistributionUserWalletsArgs = {
  input: IdentifiedInput;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWalletsDistributionsArgs = {
  input?: InputMaybe<WalletsDistributionsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWalletsProvisionningArgs = {
  input: IdentifiedInput;
};


export type QueryWalletsProvisionningsArgs = {
  input?: InputMaybe<WalletsProvisionningsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWalletsUserWalletArgs = {
  input: IdentifiedInput;
};


export type QueryWalletsUserWalletsArgs = {
  input?: InputMaybe<WalletsUserWalletsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWorkflowArgs = {
  id: Scalars['ID']['input'];
};

export type ReactPostInput = {
  postId: Scalars['ID']['input'];
  type: ReactionType;
};

export type Reaction = {
  __typename?: 'Reaction';
  capabilities: CrudCapabilities;
  id: Scalars['ID']['output'];
  type: ReactionType;
  user: MinimalistUser;
};

export enum ReactionType {
  Like = 'LIKE',
  Love = 'LOVE',
  Praise = 'PRAISE',
  Surprised = 'SURPRISED',
  Thinking = 'THINKING'
}

export type ReductionCode = {
  __typename?: 'ReductionCode';
  brand: Scalars['String']['output'];
  brandLogoUrl?: Maybe<Scalars['String']['output']>;
  codeReduction?: Maybe<Scalars['String']['output']>;
  conditions: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  offre?: Maybe<Scalars['String']['output']>;
  reduction: Scalars['String']['output'];
  shop: ReductionCodeShop;
  shortDescription?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTimeUtc']['output']>;
  unit: ReductionCodeUnitType;
  urlRedirectMobile: Scalars['String']['output'];
  urlRedirectWeb: Scalars['String']['output'];
};

export type ReductionCodeCatalogue = {
  __typename?: 'ReductionCodeCatalogue';
  accroche?: Maybe<Scalars['String']['output']>;
  nom: Scalars['String']['output'];
  visuel?: Maybe<Media>;
};

export type ReductionCodeCategory = {
  __typename?: 'ReductionCodeCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subCategories: Array<ReductionCodeSubCategory>;
};

export type ReductionCodeShop = {
  __typename?: 'ReductionCodeShop';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  reductions: Array<ReductionCode>;
};

export type ReductionCodeShopsInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  subCategoryId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReductionCodeSubCategory = {
  __typename?: 'ReductionCodeSubCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum ReductionCodeUnitType {
  Euro = 'EURO',
  Percent = 'PERCENT'
}

export type ReductionCodesInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  subCategoryId?: InputMaybe<Scalars['ID']['input']>;
};

export type RefreshAuthTokenInput = {
  organismeId: Scalars['ID']['input'];
};

export type ReorderContactCategoriesInput = {
  categoryIds: Array<Scalars['ID']['input']>;
};

export type ReorderContactPropertiesInput = {
  propertyIds: Array<Scalars['ID']['input']>;
};

export type ReponseSondageInput = {
  propositionId: Scalars['ID']['input'];
  sondageId: Scalars['ID']['input'];
};

export type Report = {
  __typename?: 'Report';
  id: Scalars['ID']['output'];
  reportable: Reportable;
  reportedAt: Scalars['DateTimeUtc']['output'];
};

export type ReportCapabilities = {
  __typename?: 'ReportCapabilities';
  read: Scalars['Boolean']['output'];
};

export type Reportable = Comment;

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type RootCapabilities = {
  __typename?: 'RootCapabilities';
  Abonnement: CrudCapabilities;
  Bonsplans: BonsplansCapabilities;
  CarteVacancesAbonnement: CarteVacancesAbonnementCapabilities;
  ClubAvantages: ClubAvantagesCapabilities;
  Contact: CrudCapabilities;
  ContactCategory: CrudCapabilities;
  ContactProperty: CrudCapabilities;
  DistributionCulture: CrudCapabilities;
  DistributionEcc: CrudCapabilities;
  DistributionSub: CrudCapabilities;
  DistributionVacances: CrudCapabilities;
  Ecc: EccCapabilities;
  Organisme: OrganismeCapabilities;
  OrganismeWallet: CrudCapabilities;
  Post: PostCapabilities;
  PostCategory: CrudCapabilities;
  Provisionning: CrudCapabilities;
  Report: ReportCapabilities;
  User: UserCapabilities;
  UserGroup: CrudCapabilities;
};

export type SendEmailAccountVerification = {
  email: Scalars['String']['input'];
};

export type SendPhoneNumberAccountVerification = {
  phone: PhoneInput;
};

export type SendResetPasswordInput = {
  email: Scalars['String']['input'];
};

export type ShowCardInput = {
  id: Scalars['ID']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type ShowPinInput = {
  id: Scalars['ID']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type SigninInput = {
  deviceUid?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  tfaCode?: InputMaybe<Scalars['String']['input']>;
};

export type SignupCreateAccountInput = {
  acceptGCU: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  workflowId?: InputMaybe<Scalars['ID']['input']>;
};

export type SignupCreateOrganismeInput = {
  abonnementType?: InputMaybe<OrganismeAbonnementType>;
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  codeParrainage?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  effectif: Scalars['Int']['input'];
  indicatif: Scalars['String']['input'];
  name: Scalars['String']['input'];
  zipcode: Scalars['String']['input'];
};

export type SignupInput = {
  acceptGCU: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type SignupInvitation = {
  __typename?: 'SignupInvitation';
  id: Scalars['ID']['output'];
  invitedBy: MinimalistUser;
  organisme: Organisme;
  token: Scalars['String']['output'];
  user: MinimalistUser;
  userActivatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SignupInvitationInput = {
  organismeId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SignupSetupPushInput = {
  deviceUid: Scalars['ID']['input'];
  pushEnabled: Scalars['Boolean']['input'];
  pushToken?: InputMaybe<Scalars['String']['input']>;
};

export type SignupValidateUserInformationsInput = {
  acceptGCU: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  workflowId?: InputMaybe<Scalars['ID']['input']>;
};

export type SignupVerifyEmailInput = {
  token: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SignupVerifyPhoneNumberInput = {
  token: Scalars['String']['input'];
};

export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  count: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  firstItem?: Maybe<Scalars['Int']['output']>;
  hasMorePages: Scalars['Boolean']['output'];
  lastItem?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
};

export type SondageContent = PostContent & {
  __typename?: 'SondageContent';
  anonymous: Scalars['Boolean']['output'];
  capabilities: PostSondageContentCapability;
  endDate: Scalars['DateTimeUtc']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  participations?: Maybe<PaginatedSondageParticipations>;
  propositions: Array<SondageProposition>;
  question: Scalars['String']['output'];
  reponsesAfterEnd: Scalars['Boolean']['output'];
  resultats?: Maybe<Array<SondageResultat>>;
  /** @deprecated 29/09/2022 Use id */
  sondageId: Scalars['ID']['output'];
  type: ContentType;
  userReponse?: Maybe<SondageReponse>;
};


export type SondageContentParticipationsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type SondageContentInput = {
  anonymous: Scalars['Boolean']['input'];
  endDate: Scalars['DateTimeUtc']['input'];
  propositions: Array<Scalars['String']['input']>;
  question: Scalars['String']['input'];
  reponsesAfterEnd: Scalars['Boolean']['input'];
};

export type SondageParticipation = {
  __typename?: 'SondageParticipation';
  user: MinimalistUser;
};

export type SondageProposition = {
  __typename?: 'SondageProposition';
  id: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type SondageReponse = {
  __typename?: 'SondageReponse';
  id: Scalars['ID']['output'];
  proposition: SondageProposition;
  user: MinimalistUser;
};

export type SondageResultat = {
  __typename?: 'SondageResultat';
  label: Scalars['String']['output'];
  pourcentage: Scalars['Float']['output'];
  propositionId: Scalars['ID']['output'];
  value: Scalars['Int']['output'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StartWorkflowInput = {
  type: WorkflowType;
};

export type Subscription = {
  __typename?: 'Subscription';
  postInteractions?: Maybe<PostInteractionsSubscription>;
  postPublished?: Maybe<Post>;
  walletsOrganismeWalletMvt?: Maybe<WalletsOrganismeWalletMvt>;
  walletsUserWalletMvt?: Maybe<WalletsUserWalletMvt>;
  workflowChanged?: Maybe<Workflow>;
};


export type SubscriptionPostPublishedArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionWorkflowChangedArgs = {
  id: Scalars['ID']['input'];
};

export enum Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT'
}

export type UnlockPhysicalCardInput = {
  id: Scalars['ID']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type UpdateCommentInput = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateContactCategoryInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateContactInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  dateAnniversaire?: InputMaybe<Scalars['String']['input']>;
  firstname: Scalars['String']['input'];
  fonction?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastname: Scalars['String']['input'];
  lines: Array<ContactLineInput>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateContactPropertyInput = {
  id: Scalars['ID']['input'];
  label: Scalars['String']['input'];
  type: ContactPropertyType;
};

export type UpdateMeInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  dateAnniversaire?: InputMaybe<Scalars['String']['input']>;
  firstname: Scalars['String']['input'];
  fonction?: InputMaybe<Scalars['String']['input']>;
  incognito?: InputMaybe<Scalars['Boolean']['input']>;
  lastname: Scalars['String']['input'];
};

export type UpdateOrganismeInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  indicatif?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostCategoryInput = {
  id: Scalars['ID']['input'];
  label: Scalars['String']['input'];
};

export type UpdatePostInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<PostContentInput>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserGroupInput = {
  id: Scalars['ID']['input'];
  nom: Scalars['String']['input'];
};

export type UpdateUserInput = {
  dateAnniversaire?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  fonction?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastname: Scalars['String']['input'];
};

export type UploadInput = {
  file: Scalars['Upload']['input'];
  targetType?: InputMaybe<MediaTargetType>;
};

export type User = {
  __typename?: 'User';
  avatar: Media;
  capabilities: UserCapabilities;
  carteVacances: UserCarteVacances;
  created_at: Scalars['DateTime']['output'];
  dateAnniversaire?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  fonction?: Maybe<Scalars['String']['output']>;
  groups: Array<UserGroup>;
  id: Scalars['ID']['output'];
  lastname: Scalars['String']['output'];
  phone?: Maybe<Phone>;
  role?: Maybe<UserRole>;
  status: UserStatus;
  updated_at: Scalars['DateTime']['output'];
};

export type UserCapabilities = {
  __typename?: 'UserCapabilities';
  changeGroups: Scalars['Boolean']['output'];
  changeRole: Scalars['Boolean']['output'];
  create: Scalars['Boolean']['output'];
  createBatch: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  read: Scalars['Boolean']['output'];
  /** @deprecated 12/01/23 Utiliser sendInvitation */
  resendInvitation: Scalars['Boolean']['output'];
  resume: Scalars['Boolean']['output'];
  sendInvitation: Scalars['Boolean']['output'];
  suspend: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

export type UserCarteVacances = {
  __typename?: 'UserCarteVacances';
  abonnement?: Maybe<CarteVacancesAbonnement>;
};

export type UserExecuteImportInput = {
  sendInvitation: Scalars['Boolean']['input'];
};

export type UserGroup = {
  __typename?: 'UserGroup';
  capabilities?: Maybe<CrudCapabilities>;
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  Owner = 'OWNER',
  User = 'USER'
}

export type UserSendInvitations = {
  __typename?: 'UserSendInvitations';
  count: Scalars['Int']['output'];
};

export type UserStats = {
  __typename?: 'UserStats';
  count: Scalars['Int']['output'];
  toInvite: Scalars['Int']['output'];
};

export enum UserStatus {
  Active = 'ACTIVE',
  Created = 'CREATED',
  Inactive = 'INACTIVE',
  Invited = 'INVITED'
}

export type UsersInput = {
  carteVacances?: InputMaybe<CarteVacancesUsersInput>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  inactive?: InputMaybe<Scalars['Boolean']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<UserStatus>;
};

export type WalletsAdvantage = {
  __typename?: 'WalletsAdvantage';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Media;
  name: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  typeDistribution: WalletsDistributionType;
};

export type WalletsAllUserWalletsInput = {
  distributionTypes?: InputMaybe<Array<WalletsDistributionType>>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type WalletsDistribution = {
  __typename?: 'WalletsDistribution';
  capabilities: CrudCapabilities;
  cnt: Scalars['Int']['output'];
  conditionsUtilisation?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeUtc']['output'];
  dateCloture?: Maybe<Scalars['DateTimeUtc']['output']>;
  dateDebut: Scalars['DateTimeUtc']['output'];
  dateFin: Scalars['DateTimeUtc']['output'];
  distribuables: Array<WalletsDistributionDistribuable>;
  factureUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  montant: Scalars['Price']['output'];
  montantRembourse?: Maybe<Scalars['Price']['output']>;
  montantRemise: Scalars['Price']['output'];
  /** @deprecated 27/06/2022 Use `distribuables.WalletsDistributionMotif` */
  motif?: Maybe<WalletsDistributionMotif>;
  /** @deprecated 27/06/2022 Use `distribuables.WalletsDistributionMotif.id` */
  motifId?: Maybe<Scalars['ID']['output']>;
  nom: Scalars['String']['output'];
  pourcentageConsomme: Scalars['Int']['output'];
  reference?: Maybe<Scalars['String']['output']>;
  secured: Scalars['Boolean']['output'];
  solde: Scalars['Price']['output'];
  statut: WalletsDistributionStatut;
  typeDistribution: WalletsDistributionType;
  updatedAt: Scalars['DateTimeUtc']['output'];
};

export type WalletsDistributionCarteConfig = {
  __typename?: 'WalletsDistributionCarteConfig';
  typeDistribuable: WalletsDistributionDistribuableType;
};

export type WalletsDistributionCarteInput = {
  neant?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WalletsDistributionDistribuable = WalletsDistributionCarteConfig | WalletsDistributionMotif | WalletsDistributionReductionRule | WalletsDistributionRemboursementRule;

export enum WalletsDistributionDistribuableType {
  Carte = 'CARTE',
  Motif = 'MOTIF',
  Reduction = 'REDUCTION',
  Remboursement = 'REMBOURSEMENT'
}

export type WalletsDistributionInput = {
  carte?: InputMaybe<WalletsDistributionCarteInput>;
  conditionsUtilisation?: InputMaybe<Scalars['String']['input']>;
  dateDebut: Scalars['DateTimeUtc']['input'];
  dateFin: Scalars['DateTimeUtc']['input'];
  importId?: InputMaybe<Scalars['ID']['input']>;
  montantFixe?: InputMaybe<Scalars['Price']['input']>;
  motif?: InputMaybe<WalletsDistributionMotifInput>;
  motifId?: InputMaybe<Scalars['ID']['input']>;
  mouvements?: InputMaybe<Array<WalletsDistributionMouvementInput>>;
  nom: Scalars['String']['input'];
  reduction?: InputMaybe<WalletsDistributionReductionRuleInput>;
  remboursement?: InputMaybe<WalletsDistributionRemboursementRuleInput>;
  secured: Scalars['Boolean']['input'];
  typeDistribution: WalletsDistributionType;
  variable: Scalars['Boolean']['input'];
};

export type WalletsDistributionMotif = {
  __typename?: 'WalletsDistributionMotif';
  conditionsUtilisation?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Media>;
  duree: Scalars['Int']['output'];
  dureeMax: Scalars['Int']['output'];
  fontColor: WalletsDistributionMotifFontColor;
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
  produitPapierId?: Maybe<Scalars['String']['output']>;
  typeDistribuable: WalletsDistributionDistribuableType;
};

export enum WalletsDistributionMotifFontColor {
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type WalletsDistributionMotifInput = {
  id: Scalars['ID']['input'];
};

export type WalletsDistributionMouvementInput = {
  montant: Scalars['Price']['input'];
  userId: Scalars['ID']['input'];
};

export enum WalletsDistributionQuotaRenouvelable {
  Aucun = 'AUCUN',
  Mois = 'MOIS',
  Semaine = 'SEMAINE'
}

export type WalletsDistributionQuotaRule = {
  __typename?: 'WalletsDistributionQuotaRule';
  quota: Scalars['Price']['output'];
  quotaRenouvelable: WalletsDistributionQuotaRenouvelable;
  quotaType: WalletsDistributionQuotaType;
};

export type WalletsDistributionQuotaRuleInput = {
  quota: Scalars['Price']['input'];
  quotaRenouvelable: WalletsDistributionQuotaRenouvelable;
  quotaType: WalletsDistributionQuotaType;
};

export enum WalletsDistributionQuotaType {
  Montant = 'MONTANT',
  Quantite = 'QUANTITE'
}

export type WalletsDistributionReductionRule = {
  __typename?: 'WalletsDistributionReductionRule';
  catalogue?: Maybe<BonsplansCatalogue>;
  quotaRule?: Maybe<WalletsDistributionQuotaRule>;
  subventionRule: WalletsDistributionSubventionRule;
  subventionnables: Array<WalletsDistributionSubventionnable>;
  typeDistribuable: WalletsDistributionDistribuableType;
};

export type WalletsDistributionReductionRuleInput = {
  allCatalogues: Scalars['Boolean']['input'];
  allCategories?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueId?: InputMaybe<Scalars['ID']['input']>;
  categorieIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  quotaRule?: InputMaybe<WalletsDistributionQuotaRuleInput>;
  subventionRule: WalletsDistributionSubventionRuleInput;
};

export type WalletsDistributionRemboursementRule = {
  __typename?: 'WalletsDistributionRemboursementRule';
  subventionRule: WalletsDistributionSubventionRule;
  typeDistribuable: WalletsDistributionDistribuableType;
};

export type WalletsDistributionRemboursementRuleInput = {
  subventionRule: WalletsDistributionSubventionRuleInput;
};

export type WalletsDistributionSimulation = {
  __typename?: 'WalletsDistributionSimulation';
  montantDistribution: Scalars['Price']['output'];
  montantRemise: Scalars['Price']['output'];
  nbrUsers: Scalars['Int']['output'];
  solde: Scalars['Price']['output'];
};

export type WalletsDistributionSimulationInput = {
  importId?: InputMaybe<Scalars['ID']['input']>;
  montantFixe?: InputMaybe<Scalars['Price']['input']>;
  mouvements?: InputMaybe<Array<WalletsDistributionMouvementInput>>;
  typeDistribution?: InputMaybe<WalletsDistributionType>;
  variable: Scalars['Boolean']['input'];
};

export type WalletsDistributionStats = {
  __typename?: 'WalletsDistributionStats';
  count: Scalars['Int']['output'];
  montant: Scalars['Price']['output'];
  montantRembourse: Scalars['Price']['output'];
  since: Scalars['DateTimeUtc']['output'];
  solde: Scalars['Price']['output'];
  walletCount: Scalars['Int']['output'];
};

export enum WalletsDistributionStatut {
  Annule = 'ANNULE',
  Attente = 'ATTENTE',
  Brouillon = 'BROUILLON',
  Cloture = 'CLOTURE',
  Distribue = 'DISTRIBUE',
  Planifie = 'PLANIFIE'
}

export type WalletsDistributionSubventionRule = WalletsDistributionSubventionRuleCagnotte | WalletsDistributionSubventionRuleFixe | WalletsDistributionSubventionRulePourcentage;

export type WalletsDistributionSubventionRuleCagnotte = {
  __typename?: 'WalletsDistributionSubventionRuleCagnotte';
  typeSubventionRule: WalletsDistributionSubventionRuleType;
};

export type WalletsDistributionSubventionRuleFixe = {
  __typename?: 'WalletsDistributionSubventionRuleFixe';
  typeSubventionRule: WalletsDistributionSubventionRuleType;
  value: Scalars['Price']['output'];
};

export type WalletsDistributionSubventionRuleInput = {
  typeSubventionRule: WalletsDistributionSubventionRuleType;
  value?: InputMaybe<Scalars['Price']['input']>;
};

export type WalletsDistributionSubventionRulePourcentage = {
  __typename?: 'WalletsDistributionSubventionRulePourcentage';
  typeSubventionRule: WalletsDistributionSubventionRuleType;
  value: Scalars['Price']['output'];
};

export enum WalletsDistributionSubventionRuleType {
  Cagnotte = 'CAGNOTTE',
  Fixe = 'FIXE',
  Pourcentage = 'POURCENTAGE'
}

export type WalletsDistributionSubventionnable = {
  __typename?: 'WalletsDistributionSubventionnable';
  subventionnableId: Scalars['ID']['output'];
  subventionnableNom: Scalars['String']['output'];
  subventionnableType: WalletsDistributionSubventionnableType;
};

export type WalletsDistributionSubventionnableInput = {
  subventionnableId: Scalars['ID']['input'];
  subventionnableType: WalletsDistributionSubventionnableType;
};

export enum WalletsDistributionSubventionnableType {
  Catalogue = 'CATALOGUE',
  Categorie = 'CATEGORIE',
  Produit = 'PRODUIT'
}

export enum WalletsDistributionType {
  Culture = 'CULTURE',
  Ecc = 'ECC',
  Subvention = 'SUBVENTION',
  Vacances = 'VACANCES'
}

export type WalletsDistributionsInput = {
  motifId?: InputMaybe<Scalars['ID']['input']>;
  statut?: InputMaybe<WalletsDistributionStatut>;
  typeDistribution?: InputMaybe<WalletsDistributionType>;
};

export type WalletsOrganismeConfig = {
  __typename?: 'WalletsOrganismeConfig';
  hasCarteVacances: Scalars['Boolean']['output'];
  hasOrganismeWallet: Scalars['Boolean']['output'];
  rembourserEccPerime: Scalars['Boolean']['output'];
};

export type WalletsOrganismeVirtualWallet = {
  __typename?: 'WalletsOrganismeVirtualWallet';
  distributionStats: WalletsDistributionStats;
  montantAttente: Scalars['Price']['output'];
  provisionningStats: WalletsProvisionningStats;
  solde: Scalars['Price']['output'];
};

export type WalletsOrganismeWallet = {
  __typename?: 'WalletsOrganismeWallet';
  bic: Scalars['String']['output'];
  capabilities: CrudCapabilities;
  culture: WalletsOrganismeVirtualWallet;
  ecc: WalletsOrganismeVirtualWallet;
  iban: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** @deprecated 04/08/2022 Use `sub.montantAttente` */
  montantAttente: Scalars['Price']['output'];
  mouvements?: Maybe<PaginatedWalletsMouvements>;
  nom: Scalars['String']['output'];
  /** @deprecated 04/08/2022 Use `sub.solde` */
  solde: Scalars['Price']['output'];
  sub: WalletsOrganismeVirtualWallet;
};


export type WalletsOrganismeWalletMouvementsArgs = {
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type WalletsOrganismeWalletMvt = {
  __typename?: 'WalletsOrganismeWalletMvt';
  dateMvt: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  montant: Scalars['Price']['output'];
  nom: Scalars['String']['output'];
  solde: Scalars['Price']['output'];
};

export type WalletsPaiement = {
  __typename?: 'WalletsPaiement';
  montant: Scalars['Price']['output'];
  url: Scalars['String']['output'];
};

export type WalletsProvisionning = {
  __typename?: 'WalletsProvisionning';
  capabilities: CrudCapabilities;
  createdAt: Scalars['DateTimeUtc']['output'];
  dateReception?: Maybe<Scalars['DateTimeUtc']['output']>;
  factureUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  montant: Scalars['Price']['output'];
  montantAttente: Scalars['Price']['output'];
  montantRemise: Scalars['Price']['output'];
  nom?: Maybe<Scalars['String']['output']>;
  organismeWallet: WalletsOrganismeWallet;
  statut: WalletsProvisionningStatut;
  typePaiement: WalletsProvisionningTypePaiement;
  typeProvisionning: WalletsProvisionningTypeProvisionning;
  updatedAt: Scalars['DateTimeUtc']['output'];
};

export type WalletsProvisionningCultureInput = {
  montant: Scalars['Price']['input'];
  nom?: InputMaybe<Scalars['String']['input']>;
  typePaiement: WalletsProvisionningTypePaiement;
};

export type WalletsProvisionningEccInput = {
  motifs: Array<WalletsProvisionningEccMotifsInput>;
  nom?: InputMaybe<Scalars['String']['input']>;
  typePaiement: WalletsProvisionningTypePaiement;
};

export type WalletsProvisionningEccMotifsInput = {
  id: Scalars['ID']['input'];
  montant: Scalars['Price']['input'];
};

export type WalletsProvisionningInput = {
  montant: Scalars['Price']['input'];
  nom?: InputMaybe<Scalars['String']['input']>;
  typePaiement: WalletsProvisionningTypePaiement;
  typeProvisionning?: InputMaybe<WalletsProvisionningTypeProvisionning>;
};

export type WalletsProvisionningStats = {
  __typename?: 'WalletsProvisionningStats';
  count: Scalars['Int']['output'];
  montant: Scalars['Price']['output'];
  montantRemise: Scalars['Price']['output'];
  since: Scalars['DateTimeUtc']['output'];
};

export enum WalletsProvisionningStatut {
  Annule = 'ANNULE',
  Attente = 'ATTENTE',
  Recu = 'RECU'
}

export type WalletsProvisionningSubInput = {
  montant: Scalars['Price']['input'];
  nom?: InputMaybe<Scalars['String']['input']>;
  typePaiement: WalletsProvisionningTypePaiement;
};

export enum WalletsProvisionningTypePaiement {
  Cheque = 'CHEQUE',
  Online = 'ONLINE',
  Virement = 'VIREMENT'
}

export enum WalletsProvisionningTypeProvisionning {
  Culture = 'CULTURE',
  Ecc = 'ECC',
  Sub = 'SUB'
}

export type WalletsProvisionningsInput = {
  statut?: InputMaybe<WalletsProvisionningStatut>;
  typePaiement?: InputMaybe<WalletsProvisionningTypePaiement>;
  typeProvisionning?: InputMaybe<WalletsProvisionningTypeProvisionning>;
};

export type WalletsUserActivateWalletInput = {
  activationCode: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type WalletsUserPartageWalletInput = {
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  montant: Scalars['Price']['input'];
  userWalletId: Scalars['ID']['input'];
};

export type WalletsUserPersonalWallet = {
  __typename?: 'WalletsUserPersonalWallet';
  id: Scalars['ID']['output'];
  solde: Scalars['Price']['output'];
};

export type WalletsUserSendActivationCodeInput = {
  id: Scalars['ID']['input'];
};

export type WalletsUserWallet = {
  __typename?: 'WalletsUserWallet';
  actif: Scalars['Boolean']['output'];
  capabilities: WalletsUserWalletCapabilities;
  distribution: WalletsUserWalletDistribution;
  distributionId: Scalars['Int']['output'];
  espace: BonsplansEspace;
  id: Scalars['ID']['output'];
  montantInitial: Scalars['Price']['output'];
  nbrRelances: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
  pourcentageConsomme: Scalars['Int']['output'];
  quota?: Maybe<WalletsUserWalletQuota>;
  solde: Scalars['Price']['output'];
  statut: WalletsUserWalletStatut;
  used: Scalars['Boolean']['output'];
  usedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  user: MinimalistUser;
  vedetteEmplacement?: Maybe<MisesEnAvantVedetteEmplacement>;
};

export type WalletsUserWalletCapabilities = {
  __typename?: 'WalletsUserWalletCapabilities';
  share: Scalars['Boolean']['output'];
  use: Scalars['Boolean']['output'];
};

export type WalletsUserWalletDistribution = {
  __typename?: 'WalletsUserWalletDistribution';
  conditionsUtilisation?: Maybe<Scalars['String']['output']>;
  dateDebut: Scalars['DateTimeUtc']['output'];
  dateFin: Scalars['DateTimeUtc']['output'];
  distribuables: Array<WalletsDistributionDistribuable>;
  id: Scalars['ID']['output'];
  /** @deprecated 27/06/2022 Use `distribuables.WalletsDistributionMotif` */
  motif?: Maybe<WalletsDistributionMotif>;
  /** @deprecated 27/06/2022 Use `distribuables.WalletsDistributionMotif.id` */
  motifId?: Maybe<Scalars['ID']['output']>;
  nom: Scalars['String']['output'];
  typeDistribution: WalletsDistributionType;
};

export type WalletsUserWalletMvt = {
  __typename?: 'WalletsUserWalletMvt';
  dateMvt: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  montant: Scalars['Price']['output'];
  nom: Scalars['String']['output'];
  solde: Scalars['Price']['output'];
  walletId: Scalars['Int']['output'];
};

export type WalletsUserWalletPartage = {
  __typename?: 'WalletsUserWalletPartage';
  datePartage: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  montant: Scalars['Price']['output'];
  nom: Scalars['String']['output'];
};

export type WalletsUserWalletQuota = {
  __typename?: 'WalletsUserWalletQuota';
  dateDebut?: Maybe<Scalars['DateTimeUtc']['output']>;
  dateFin?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  quotaConsomme: Scalars['Price']['output'];
  quotaRule: WalletsDistributionQuotaRule;
};

export enum WalletsUserWalletStatut {
  Attente = 'ATTENTE',
  Consomme = 'CONSOMME',
  NonConsomme = 'NON_CONSOMME',
  PartiellementConsomme = 'PARTIELLEMENT_CONSOMME'
}

export type WalletsUserWalletsInput = {
  distributionType?: InputMaybe<WalletsDistributionType>;
  distributionTypes?: InputMaybe<Array<WalletsDistributionType>>;
};

export type Workflow = {
  __typename?: 'Workflow';
  id: Scalars['ID']['output'];
  steps: Array<WorkflowStep>;
  type: WorkflowType;
};

export type WorkflowStep = {
  __typename?: 'WorkflowStep';
  action: Scalars['ID']['output'];
  done: Scalars['Boolean']['output'];
};

export enum WorkflowType {
  ChangeEmail = 'CHANGE_EMAIL',
  ChangePassword = 'CHANGE_PASSWORD',
  ChangePhoneNumber = 'CHANGE_PHONE_NUMBER',
  FirstConnection = 'FIRST_CONNECTION',
  Signup = 'SIGNUP',
  TunnelCommandeCa = 'TUNNEL_COMMANDE_CA',
  TunnelCommandeEcc = 'TUNNEL_COMMANDE_ECC'
}

export type SinginMutationVariables = Exact<{
  input: SigninInput;
}>;


export type SinginMutation = { __typename?: 'Mutation', signin: { __typename?: 'AuthResponse', authToken?: string | null, apiToken: string } };


export const SinginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"singin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authToken"}},{"kind":"Field","name":{"kind":"Name","value":"apiToken"}}]}}]}}]} as unknown as DocumentNode<SinginMutation, SinginMutationVariables>;