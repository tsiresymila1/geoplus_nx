import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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
  type: ContentType | '%future added value';
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
  type: ContentType | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
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
  univers?: Maybe<BonsplansUnivers | '%future added value'>;
  visuel?: Maybe<Media>;
};

export type BonsplansCatalogueInput = {
  espace: BonsplansEspace | '%future added value';
  id: Scalars['ID']['input'];
};

export type BonsplansCataloguesInput = {
  espace: BonsplansEspace | '%future added value';
  subventionCompatible?: InputMaybe<Scalars['Boolean']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type BonsplansCategorieInput = {
  espace: BonsplansEspace | '%future added value';
  id: Scalars['ID']['input'];
};

export type BonsplansCategoriesInput = {
  catalogueId?: InputMaybe<Scalars['ID']['input']>;
  espace: BonsplansEspace | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
  id: Scalars['ID']['output'];
  libelle: Scalars['String']['output'];
  lignes: Array<BonsplansCommandeLigne>;
  livraison?: Maybe<BonsplansCommandeLivraison>;
  numeroCommande: Scalars['ID']['output'];
  statut: BonsplansCommandeStatut | '%future added value';
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
  espace?: InputMaybe<BonsplansEspace | '%future added value'>;
  utilise?: InputMaybe<Scalars['Boolean']['input']>;
  walletId?: InputMaybe<Scalars['ID']['input']>;
};

export type BonsplansCommandeLigne = {
  __typename?: 'BonsplansCommandeLigne';
  id: Scalars['ID']['output'];
  libelle: Scalars['String']['output'];
  prixUnitaire: Scalars['Price']['output'];
  quantite: Scalars['Int']['output'];
  statut: BonsplansCommandeStatut | '%future added value';
  type: BonplansCommandeLigneType | '%future added value';
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
  espace?: InputMaybe<BonsplansEspace | '%future added value'>;
};

export enum BonsplansCommandeStatut {
  Annule = 'ANNULE',
  Cree = 'CREE',
  Paye = 'PAYE',
  Valide = 'VALIDE'
}

export type BonsplansCommandesInput = {
  espace?: InputMaybe<BonsplansEspace | '%future added value'>;
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
  type: BonsplansTypeLignePanier | '%future added value';
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
  type: BonsplansMarketingTagType | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
};

export type BonsplansPanierClearInput = {
  espace: BonsplansEspace | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
  uuid: Scalars['ID']['input'];
};

export type BonsplansPanierTmp = {
  __typename?: 'BonsplansPanierTmp';
  espace: BonsplansEspace | '%future added value';
  lignes: Array<BonsplansLignePanier>;
  montantWalletsApplique: Scalars['Price']['output'];
  sousTotal: Scalars['Price']['output'];
  total: Scalars['Price']['output'];
  totalRemise: Scalars['Price']['output'];
};

export type BonsplansPanierUpdateLigneInput = {
  espace: BonsplansEspace | '%future added value';
  params?: InputMaybe<BonsplansPanierLigneParamsInput>;
  quantite: Scalars['Int']['input'];
  uuid: Scalars['ID']['input'];
};

export type BonsplansPanierUseWalletInput = {
  espace: BonsplansEspace | '%future added value';
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
  type: BonsplansProduitType | '%future added value';
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
  type: BonsplansProduitFiltreType | '%future added value';
};

export type BonsplansProduitFiltreDate = BonsplansProduitFiltre & {
  __typename?: 'BonsplansProduitFiltreDate';
  label?: Maybe<Scalars['String']['output']>;
  max?: Maybe<Scalars['Date']['output']>;
  min?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  type: BonsplansProduitFiltreType | '%future added value';
};

export type BonsplansProduitFiltreOptions = BonsplansProduitFiltre & {
  __typename?: 'BonsplansProduitFiltreOptions';
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: BonsplansProduitFiltreType | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
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
  type: BonsplansProduitType | '%future added value';
};

export type BonsplansSearchProduitHighlight = {
  __typename?: 'BonsplansSearchProduitHighlight';
  end: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
};

export type BonsplansSearchProduitsInput = {
  catalogueId?: InputMaybe<Scalars['ID']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  espace: BonsplansEspace | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
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
  espace: BonsplansEspace | '%future added value';
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
  statut: CardTransactionStatut | '%future added value';
  type: CardTransactionType | '%future added value';
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
  statut: CardTransactionStatut | '%future added value';
  type: CardTransactionType | '%future added value';
};

export type CardTransactionMerchant = CardTransaction & {
  __typename?: 'CardTransactionMerchant';
  capabilities: CardTransactionCapabilities;
  date: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  merchant: CardTransactionMerchantInfo;
  montant: Scalars['Price']['output'];
  motifRefus?: Maybe<CardTransactionMotifRefus | '%future added value'>;
  nom: Scalars['String']['output'];
  statut: CardTransactionStatut | '%future added value';
  type: CardTransactionType | '%future added value';
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
  statut: CarteStatut | '%future added value';
};

export type CarteVacancesAbonnement = {
  __typename?: 'CarteVacancesAbonnement';
  dateDebut: Scalars['DateTimeUtc']['output'];
  dateFin: Scalars['DateTimeUtc']['output'];
  id: Scalars['ID']['output'];
  physique: Scalars['Boolean']['output'];
  statut: CarteVacancesAbonnementStatut | '%future added value';
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
  statut: CarteVacancesAbonnementCommandeStatut | '%future added value';
  tauxTVA: Scalars['Price']['output'];
  typePaiement: CarteVacancesAbonnementTypePaiement | '%future added value';
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
  typePaiement?: InputMaybe<CarteVacancesAbonnementTypePaiement | '%future added value'>;
};

export enum CarteVacancesAbonnementCommandeStatut {
  Annule = 'ANNULE',
  Attente = 'ATTENTE',
  Valide = 'VALIDE'
}

export type CarteVacancesAbonnementCommandesInput = {
  statut?: InputMaybe<CarteVacancesAbonnementCommandeStatut | '%future added value'>;
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
  typePaiement: CarteVacancesAbonnementTypePaiement | '%future added value';
};

export type CarteVacancesAbonnementSimulationInput = {
  abonnementOptionId: Scalars['ID']['input'];
  abonnements?: InputMaybe<Array<CarteVacancesAbonnementCommandeAbonnementInput>>;
  choixAbonnements: Scalars['Boolean']['input'];
  physique: Scalars['Boolean']['input'];
  typePaiement?: InputMaybe<CarteVacancesAbonnementTypePaiement | '%future added value'>;
};

export type CarteVacancesAbonnementStats = {
  __typename?: 'CarteVacancesAbonnementStats';
  count: Scalars['Int']['output'];
  statut: CarteVacancesAbonnementStatut | '%future added value';
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
  statut?: InputMaybe<CarteVacancesAbonnementStatut | '%future added value'>;
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
  statut: CarteVacancesTransactionIssueStatut | '%future added value';
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
  statut?: InputMaybe<CarteVacancesAbonnementStatut | '%future added value'>;
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
  unit?: Maybe<CashbackUnitType | '%future added value'>;
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
  unitCashback: CashbackUnitType | '%future added value';
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
  role: UserRole | '%future added value';
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
  type: ContactPropertyType | '%future added value';
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
  type: ContactPropertyType | '%future added value';
};

export type ContactPropertyInput = {
  label: Scalars['String']['input'];
  type: ContactPropertyType | '%future added value';
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
  type: ContentType | '%future added value';
};

export type EventContentInput = {
  endDate: Scalars['DateTimeUtc']['input'];
  startDate: Scalars['DateTimeUtc']['input'];
};

export type EventParticipant = {
  __typename?: 'EventParticipant';
  statut: EventParticipationStatut | '%future added value';
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
  type: ImportType | '%future added value';
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
  action: InterruptAction | '%future added value';
  workflow?: Maybe<WorkflowType | '%future added value'>;
};

export enum InterruptAction {
  Workflow = 'WORKFLOW'
}

export type LockPhysicalCardInput = {
  id: Scalars['ID']['input'];
  reason: LockPhysicalCardReason | '%future added value';
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
  role?: Maybe<UserRole | '%future added value'>;
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
  targetType: MisesEnAvantVedetteTargetType | '%future added value';
  /** @deprecated 24/06/2022 Use `target.url` */
  targetUrl?: Maybe<Scalars['String']['output']>;
  visuel?: Maybe<Media>;
};

export type MisesEnAvantVedetteEmplacement = {
  __typename?: 'MisesEnAvantVedetteEmplacement';
  emplacementId?: Maybe<Scalars['ID']['output']>;
  emplacementType: MisesEnAvantVedetteEmplacementType | '%future added value';
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
  type: MisesEnAvantVedetteTargetType | '%future added value';
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
  emplacementType: MisesEnAvantVedetteEmplacementType | '%future added value';
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
  order: SortOrder | '%future added value';
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
  statut: EventParticipationStatut | '%future added value';
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
  status: PostStatus | '%future added value';
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
  type: ContentType | '%future added value';
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
  type: ContentType | '%future added value';
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
  type: ContentType | '%future added value';
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
  type: ReactionType | '%future added value';
};

export type Reaction = {
  __typename?: 'Reaction';
  capabilities: CrudCapabilities;
  id: Scalars['ID']['output'];
  type: ReactionType | '%future added value';
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
  unit: ReductionCodeUnitType | '%future added value';
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
  abonnementType?: InputMaybe<OrganismeAbonnementType | '%future added value'>;
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
  type: ContentType | '%future added value';
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
  type: WorkflowType | '%future added value';
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
  type: ContactPropertyType | '%future added value';
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
  targetType?: InputMaybe<MediaTargetType | '%future added value'>;
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
  role?: Maybe<UserRole | '%future added value'>;
  status: UserStatus | '%future added value';
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
  status?: InputMaybe<UserStatus | '%future added value'>;
};

export type WalletsAdvantage = {
  __typename?: 'WalletsAdvantage';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Media;
  name: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  typeDistribution: WalletsDistributionType | '%future added value';
};

export type WalletsAllUserWalletsInput = {
  distributionTypes?: InputMaybe<Array<WalletsDistributionType | '%future added value'>>;
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
  statut: WalletsDistributionStatut | '%future added value';
  typeDistribution: WalletsDistributionType | '%future added value';
  updatedAt: Scalars['DateTimeUtc']['output'];
};

export type WalletsDistributionCarteConfig = {
  __typename?: 'WalletsDistributionCarteConfig';
  typeDistribuable: WalletsDistributionDistribuableType | '%future added value';
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
  typeDistribution: WalletsDistributionType | '%future added value';
  variable: Scalars['Boolean']['input'];
};

export type WalletsDistributionMotif = {
  __typename?: 'WalletsDistributionMotif';
  conditionsUtilisation?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Media>;
  duree: Scalars['Int']['output'];
  dureeMax: Scalars['Int']['output'];
  fontColor: WalletsDistributionMotifFontColor | '%future added value';
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
  produitPapierId?: Maybe<Scalars['String']['output']>;
  typeDistribuable: WalletsDistributionDistribuableType | '%future added value';
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
  quotaRenouvelable: WalletsDistributionQuotaRenouvelable | '%future added value';
  quotaType: WalletsDistributionQuotaType | '%future added value';
};

export type WalletsDistributionQuotaRuleInput = {
  quota: Scalars['Price']['input'];
  quotaRenouvelable: WalletsDistributionQuotaRenouvelable | '%future added value';
  quotaType: WalletsDistributionQuotaType | '%future added value';
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
  typeDistribuable: WalletsDistributionDistribuableType | '%future added value';
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
  typeDistribuable: WalletsDistributionDistribuableType | '%future added value';
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
  typeDistribution?: InputMaybe<WalletsDistributionType | '%future added value'>;
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
  typeSubventionRule: WalletsDistributionSubventionRuleType | '%future added value';
};

export type WalletsDistributionSubventionRuleFixe = {
  __typename?: 'WalletsDistributionSubventionRuleFixe';
  typeSubventionRule: WalletsDistributionSubventionRuleType | '%future added value';
  value: Scalars['Price']['output'];
};

export type WalletsDistributionSubventionRuleInput = {
  typeSubventionRule: WalletsDistributionSubventionRuleType | '%future added value';
  value?: InputMaybe<Scalars['Price']['input']>;
};

export type WalletsDistributionSubventionRulePourcentage = {
  __typename?: 'WalletsDistributionSubventionRulePourcentage';
  typeSubventionRule: WalletsDistributionSubventionRuleType | '%future added value';
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
  subventionnableType: WalletsDistributionSubventionnableType | '%future added value';
};

export type WalletsDistributionSubventionnableInput = {
  subventionnableId: Scalars['ID']['input'];
  subventionnableType: WalletsDistributionSubventionnableType | '%future added value';
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
  statut?: InputMaybe<WalletsDistributionStatut | '%future added value'>;
  typeDistribution?: InputMaybe<WalletsDistributionType | '%future added value'>;
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
  statut: WalletsProvisionningStatut | '%future added value';
  typePaiement: WalletsProvisionningTypePaiement | '%future added value';
  typeProvisionning: WalletsProvisionningTypeProvisionning | '%future added value';
  updatedAt: Scalars['DateTimeUtc']['output'];
};

export type WalletsProvisionningCultureInput = {
  montant: Scalars['Price']['input'];
  nom?: InputMaybe<Scalars['String']['input']>;
  typePaiement: WalletsProvisionningTypePaiement | '%future added value';
};

export type WalletsProvisionningEccInput = {
  motifs: Array<WalletsProvisionningEccMotifsInput>;
  nom?: InputMaybe<Scalars['String']['input']>;
  typePaiement: WalletsProvisionningTypePaiement | '%future added value';
};

export type WalletsProvisionningEccMotifsInput = {
  id: Scalars['ID']['input'];
  montant: Scalars['Price']['input'];
};

export type WalletsProvisionningInput = {
  montant: Scalars['Price']['input'];
  nom?: InputMaybe<Scalars['String']['input']>;
  typePaiement: WalletsProvisionningTypePaiement | '%future added value';
  typeProvisionning?: InputMaybe<WalletsProvisionningTypeProvisionning | '%future added value'>;
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
  typePaiement: WalletsProvisionningTypePaiement | '%future added value';
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
  statut?: InputMaybe<WalletsProvisionningStatut | '%future added value'>;
  typePaiement?: InputMaybe<WalletsProvisionningTypePaiement | '%future added value'>;
  typeProvisionning?: InputMaybe<WalletsProvisionningTypeProvisionning | '%future added value'>;
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
  espace: BonsplansEspace | '%future added value';
  id: Scalars['ID']['output'];
  montantInitial: Scalars['Price']['output'];
  nbrRelances: Scalars['Int']['output'];
  nom: Scalars['String']['output'];
  pourcentageConsomme: Scalars['Int']['output'];
  quota?: Maybe<WalletsUserWalletQuota>;
  solde: Scalars['Price']['output'];
  statut: WalletsUserWalletStatut | '%future added value';
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
  typeDistribution: WalletsDistributionType | '%future added value';
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
  distributionType?: InputMaybe<WalletsDistributionType | '%future added value'>;
  distributionTypes?: InputMaybe<Array<WalletsDistributionType | '%future added value'>>;
};

export type Workflow = {
  __typename?: 'Workflow';
  id: Scalars['ID']['output'];
  steps: Array<WorkflowStep>;
  type: WorkflowType | '%future added value';
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

export type SigninMutationVariables = Exact<{
  input: SigninInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'AuthResponse', authToken?: string | null, apiToken: string, expires: number } };

export type SsoMutationVariables = Exact<{ [key: string]: never; }>;


export type SsoMutation = { __typename?: 'Mutation', sso: { __typename?: 'AuthResponse', authToken?: string | null, apiToken: string, expires: number } };

export type RefreshAuthTokenMutationVariables = Exact<{
  input?: InputMaybe<RefreshAuthTokenInput>;
}>;


export type RefreshAuthTokenMutation = { __typename?: 'Mutation', refreshAuthToken: { __typename?: 'AuthResponse', authToken?: string | null, apiToken: string, expires: number } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: any | null };

export type SendTfaCodeMutationVariables = Exact<{ [key: string]: never; }>;


export type SendTfaCodeMutation = { __typename?: 'Mutation', sendTfaCode?: any | null };

export type SendResetPasswordMutationVariables = Exact<{
  input: SendResetPasswordInput;
}>;


export type SendResetPasswordMutation = { __typename?: 'Mutation', sendResetPassword?: any | null };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: any | null };

export type SendEmailAccountVerificationMutationVariables = Exact<{
  input: SendEmailAccountVerification;
}>;


export type SendEmailAccountVerificationMutation = { __typename?: 'Mutation', sendEmailAccountVerification?: any | null };

export type SendPhoneNumberAccountVerificationMutationVariables = Exact<{
  input: SendPhoneNumberAccountVerification;
}>;


export type SendPhoneNumberAccountVerificationMutation = { __typename?: 'Mutation', sendPhoneNumberAccountVerification?: any | null };

export type UpdateDeviceMutationVariables = Exact<{
  input: DeviceInput;
}>;


export type UpdateDeviceMutation = { __typename?: 'Mutation', updateDevice: { __typename?: 'Device', id: string, deviceUid: string, deviceOs: string, deviceModel: string, pushToken?: string | null, pushEnabled?: boolean | null, appVersion: string, systemVersion: string, buildNumber: string, createdAt: any, updatedAt: any } };

export type UploadMediaMutationVariables = Exact<{
  input: UploadInput;
}>;


export type UploadMediaMutation = { __typename?: 'Mutation', uploadMedia: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } };

export type CreateOrganismeMutationVariables = Exact<{
  input: CreateOrganismeInput;
}>;


export type CreateOrganismeMutation = { __typename?: 'Mutation', createOrganisme: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } } };

export type UpdateOrganismeMutationVariables = Exact<{
  input: UpdateOrganismeInput;
}>;


export type UpdateOrganismeMutation = { __typename?: 'Mutation', updateOrganisme: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } } };

export type ChangeCurrentOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ChangeCurrentOrganizationMutation = { __typename?: 'Mutation', changeCurrentOrganization: { __typename?: 'Me', id: string, firstname: string, lastname: string, email: string, displayName: string, isDefaultAvatar: boolean, incognito: boolean, dateAnniversaire?: string | null, fonction?: string | null, about?: string | null, activatedAt?: any | null, created_at: any, updated_at: any, role?: UserRole | null, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, permissions: Array<{ __typename?: 'Permission', subject: string, action: Array<string> }>, currentOrganisme?: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } } | null, organismes: Array<{ __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } }>, chatToken?: { __typename?: 'ChatToken', token: string, email: string } | null } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } | null } } };

export type UserExecuteImportMutationVariables = Exact<{
  input: ExecuteImportInput;
  importInput: UserExecuteImportInput;
}>;


export type UserExecuteImportMutation = { __typename?: 'Mutation', userExecuteImport?: any | null };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } | null } } };

export type DeactiveUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeactiveUserMutation = { __typename?: 'Mutation', deactiveUser: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } | null } } };

export type ReactiveUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReactiveUserMutation = { __typename?: 'Mutation', reactiveUser: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } | null } } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } | null } } };

export type ChangeUserRoleMutationVariables = Exact<{
  input: ChangeUserRoleInput;
}>;


export type ChangeUserRoleMutation = { __typename?: 'Mutation', changeUserRole: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } | null } } };

export type ChangeUserGroupsMutationVariables = Exact<{
  input: ChangeUserGroupsInput;
}>;


export type ChangeUserGroupsMutation = { __typename?: 'Mutation', changeUserGroups: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } | null } } };

export type ResendInvitationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ResendInvitationMutation = { __typename?: 'Mutation', resendInvitation: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } | null } } };

export type UserSendInvitationsMutationVariables = Exact<{ [key: string]: never; }>;


export type UserSendInvitationsMutation = { __typename?: 'Mutation', userSendInvitations: { __typename?: 'UserSendInvitations', count: number } };

export type CreateUserGroupMutationVariables = Exact<{
  input: CreateUserGroupInput;
}>;


export type CreateUserGroupMutation = { __typename?: 'Mutation', createUserGroup: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } };

export type UpdateUserGroupMutationVariables = Exact<{
  input: UpdateUserGroupInput;
}>;


export type UpdateUserGroupMutation = { __typename?: 'Mutation', updateUserGroup: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } };

export type DeleteUserGroupMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserGroupMutation = { __typename?: 'Mutation', deleteUserGroup: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } };

export type UpdateMeMutationVariables = Exact<{
  input: UpdateMeInput;
}>;


export type UpdateMeMutation = { __typename?: 'Mutation', updateMe: { __typename?: 'Me', id: string, firstname: string, lastname: string, email: string, displayName: string, isDefaultAvatar: boolean, incognito: boolean, dateAnniversaire?: string | null, fonction?: string | null, about?: string | null, activatedAt?: any | null, created_at: any, updated_at: any, role?: UserRole | null, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, permissions: Array<{ __typename?: 'Permission', subject: string, action: Array<string> }>, currentOrganisme?: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } } | null, organismes: Array<{ __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } }>, chatToken?: { __typename?: 'ChatToken', token: string, email: string } | null } };

export type ImportMutationVariables = Exact<{
  input: ImportInput;
}>;


export type ImportMutation = { __typename?: 'Mutation', import: { __typename?: 'Import', id: string, columns: Array<{ __typename?: 'ImportedColumn', key: string, label: string, display: boolean }>, rows: Array<{ __typename?: 'ImportedRow', values: Array<string | null> }>, errors: Array<{ __typename?: 'ImportRowError', row: { __typename?: 'ImportedRow', values: Array<string | null> }, errors: Array<{ __typename?: 'ImportError', key: string, message: string }> }> } };

export type ExecuteImportMutationVariables = Exact<{
  input: ExecuteImportInput;
}>;


export type ExecuteImportMutation = { __typename?: 'Mutation', executeImport?: any | null };

export type StartWorkflowMutationVariables = Exact<{
  input: StartWorkflowInput;
}>;


export type StartWorkflowMutation = { __typename?: 'Mutation', startWorkflow: { __typename?: 'Workflow', id: string, type: WorkflowType, steps: Array<{ __typename?: 'WorkflowStep', action: string, done: boolean }> } };

export type ChangeEmailVerifyTfaMutationVariables = Exact<{
  input: ChangeEmailTfaCodeInput;
}>;


export type ChangeEmailVerifyTfaMutation = { __typename?: 'Mutation', changeEmailVerifyTfa?: any | null };

export type ChangeEmailSendVerificationMutationVariables = Exact<{
  input: ChangeEmailSendVerificationInput;
}>;


export type ChangeEmailSendVerificationMutation = { __typename?: 'Mutation', changeEmailSendVerification?: any | null };

export type ChangeEmailVerifyEmailMutationVariables = Exact<{
  input: ChangeEmailVerifyEmailInput;
}>;


export type ChangeEmailVerifyEmailMutation = { __typename?: 'Mutation', changeEmailVerifyEmail?: any | null };

export type ChangePasswordVerifyTfaMutationVariables = Exact<{
  input: ChangePasswordTfaCodeInput;
}>;


export type ChangePasswordVerifyTfaMutation = { __typename?: 'Mutation', changePasswordVerifyTfa?: any | null };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: any | null };

export type ChangePhoneNumberVerifyTfaMutationVariables = Exact<{
  input: ChangePhoneNumberTfaCodeInput;
}>;


export type ChangePhoneNumberVerifyTfaMutation = { __typename?: 'Mutation', changePhoneNumberVerifyTfa?: any | null };

export type ChangePhoneNumberSendVerificationMutationVariables = Exact<{
  input: ChangePhoneNumberSendVerificationInput;
}>;


export type ChangePhoneNumberSendVerificationMutation = { __typename?: 'Mutation', changePhoneNumberSendVerification?: any | null };

export type ChangePhoneNumberVerifyPhoneNumberMutationVariables = Exact<{
  input: ChangePhoneNumberVerifyPhoneNumberInput;
}>;


export type ChangePhoneNumberVerifyPhoneNumberMutation = { __typename?: 'Mutation', changePhoneNumberVerifyPhoneNumber?: any | null };

export type FirstConnectionJoinMutationVariables = Exact<{
  input: FirstConnectionJoinInput;
}>;


export type FirstConnectionJoinMutation = { __typename?: 'Mutation', firstConnectionJoin?: { __typename?: 'AuthResponse', authToken?: string | null, apiToken: string, expires: number } | null };

export type FirstConnectionCreateAccountMutationVariables = Exact<{
  input: FirstConnectionCreateAccountInput;
}>;


export type FirstConnectionCreateAccountMutation = { __typename?: 'Mutation', firstConnectionCreateAccount?: { __typename?: 'AuthResponse', authToken?: string | null, apiToken: string, expires: number } | null };

export type FirstConnectionSetNameMutationVariables = Exact<{
  input: FirstConnectionSetNameInput;
}>;


export type FirstConnectionSetNameMutation = { __typename?: 'Mutation', firstConnectionSetName?: any | null };

export type FirstConnectionSetBirthdateMutationVariables = Exact<{
  input: FirstConnectionSetBirthdateInput;
}>;


export type FirstConnectionSetBirthdateMutation = { __typename?: 'Mutation', firstConnectionSetBirthdate?: any | null };

export type FirstConnectionSetAvatarMutationVariables = Exact<{
  input: FirstConnectionSetAvatarInput;
}>;


export type FirstConnectionSetAvatarMutation = { __typename?: 'Mutation', firstConnectionSetAvatar?: any | null };

export type FirstConnectionVerifyPhoneNumberMutationVariables = Exact<{
  input: FirstConnectionVerifyPhoneNumberInput;
}>;


export type FirstConnectionVerifyPhoneNumberMutation = { __typename?: 'Mutation', firstConnectionVerifyPhoneNumber?: any | null };

export type FirstConnectionSetupPushMutationVariables = Exact<{
  input: FirstConnectionSetupPushInput;
}>;


export type FirstConnectionSetupPushMutation = { __typename?: 'Mutation', firstConnectionSetupPush?: any | null };

export type FirstConnectionProductTourDoneMutationVariables = Exact<{ [key: string]: never; }>;


export type FirstConnectionProductTourDoneMutation = { __typename?: 'Mutation', firstConnectionProductTourDone?: any | null };

export type SignupValidateUserInformationsMutationVariables = Exact<{
  input: SignupValidateUserInformationsInput;
}>;


export type SignupValidateUserInformationsMutation = { __typename?: 'Mutation', signupValidateUserInformations?: any | null };

export type SignupCreateAccountMutationVariables = Exact<{
  input: SignupCreateAccountInput;
}>;


export type SignupCreateAccountMutation = { __typename?: 'Mutation', signupCreateAccount: { __typename?: 'AuthResponse', authToken?: string | null, apiToken: string, expires: number } };

export type SignupCreateOrganismeMutationVariables = Exact<{
  input: SignupCreateOrganismeInput;
}>;


export type SignupCreateOrganismeMutation = { __typename?: 'Mutation', signupCreateOrganisme: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } } };

export type SignupCreateOrganismeV2MutationVariables = Exact<{
  input: SignupCreateOrganismeInput;
}>;


export type SignupCreateOrganismeV2Mutation = { __typename?: 'Mutation', signupCreateOrganismeV2: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } } };

export type SignupVerifyPhoneNumberMutationVariables = Exact<{
  input: SignupVerifyPhoneNumberInput;
}>;


export type SignupVerifyPhoneNumberMutation = { __typename?: 'Mutation', signupVerifyPhoneNumber?: any | null };

export type SignupSetupPushMutationVariables = Exact<{
  input: SignupSetupPushInput;
}>;


export type SignupSetupPushMutation = { __typename?: 'Mutation', signupSetupPush?: any | null };

export type SignupVerifyEmailMutationVariables = Exact<{
  input: SignupVerifyEmailInput;
}>;


export type SignupVerifyEmailMutation = { __typename?: 'Mutation', signupVerifyEmail?: any | null };

export type SignupProductTourDoneMutationVariables = Exact<{ [key: string]: never; }>;


export type SignupProductTourDoneMutation = { __typename?: 'Mutation', signupProductTourDone?: any | null };

export type BonsplansTunnelCommandeSetLivraisonMutationVariables = Exact<{
  input: BonsplansTunnelCommandeSetLivraisonInput;
}>;


export type BonsplansTunnelCommandeSetLivraisonMutation = { __typename?: 'Mutation', bonsplansTunnelCommandeSetLivraison: { __typename?: 'BonsplansTunnelCommandeSetLivraison', panier: { __typename?: 'BonsplansPanier', espace: BonsplansEspace, sousTotal: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }>, livraisons: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null }>, wallets: Array<{ __typename?: 'BonsplansWalletPanier', id: string, nom: string, solde: any, utiliser: boolean, dateFin: any, montantApplique: any, params: { __typename?: 'BonsplansWalletPanierParams', montantsAppliques: Array<{ __typename?: 'BonsplansWalletPanierParamsMontantApplique', ligne: string, montantApplique: any }> } }>, params?: { __typename?: 'BonsplansPanierParams', livraison?: { __typename?: 'BonsplansPanierParamsLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } | null }, workflow?: { __typename?: 'Workflow', id: string, type: WorkflowType, steps: Array<{ __typename?: 'WorkflowStep', action: string, done: boolean }> } | null } };

export type BonsplansTunnelCommandeValidateMutationVariables = Exact<{
  bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input: BonsplansTunnelCommandeValidateInput;
}>;


export type BonsplansTunnelCommandeValidateMutation = { __typename?: 'Mutation', bonsplansTunnelCommandeValidate: { __typename?: 'BonsplansTunnelCommandeValidate', commande: { __typename?: 'BonsplansCommande', id: string, numeroCommande: string, libelle: string, espace: BonsplansEspace, statut: BonsplansCommandeStatut, total: any, totalRemise: any, createdAt: any, lignes: Array<{ __typename?: 'BonsplansCommandeLigne', id: string, statut: BonsplansCommandeStatut, type: BonplansCommandeLigneType, quantite: number, prixUnitaire: any, libelle: string }>, billets?: Array<{ __typename?: 'BonsplansCommandeBillet', id: string, commandeId: string, nom: string, utilise?: boolean | null, codeBarres?: string | null, codeActivation?: string | null, dateExpiration?: any | null, montant?: any | null, url?: string | null, info?: string | null, produit?: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } | null }> | null, livraison?: { __typename?: 'BonsplansCommandeLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null }, panier: { __typename?: 'BonsplansPanier', espace: BonsplansEspace, sousTotal: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }>, livraisons: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null }>, wallets: Array<{ __typename?: 'BonsplansWalletPanier', id: string, nom: string, solde: any, utiliser: boolean, dateFin: any, montantApplique: any, params: { __typename?: 'BonsplansWalletPanierParams', montantsAppliques: Array<{ __typename?: 'BonsplansWalletPanierParamsMontantApplique', ligne: string, montantApplique: any }> } }>, params?: { __typename?: 'BonsplansPanierParams', livraison?: { __typename?: 'BonsplansPanierParamsLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } | null }, workflow?: { __typename?: 'Workflow', id: string, type: WorkflowType, steps: Array<{ __typename?: 'WorkflowStep', action: string, done: boolean }> } | null, paiement?: { __typename?: 'BonsplansTunnelCommandePaiement', url: string, montant: any } | null } };

export type DeclineReportMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type DeclineReportMutation = { __typename?: 'Mutation', declineReport: { __typename?: 'Report', id: string, reportedAt: any, reportable: { __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } } } };

export type AcceptReportMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type AcceptReportMutation = { __typename?: 'Mutation', acceptReport: { __typename?: 'Report', id: string, reportedAt: any, reportable: { __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } } } };

export type CreateContactMutationVariables = Exact<{
  input: ContactInput;
}>;


export type CreateContactMutation = { __typename?: 'Mutation', createContact: { __typename?: 'Contact', id: string, userId?: string | null, firstname: string, lastname: string, dateAnniversaire?: string | null, fonction: string, category?: { __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, lines: Array<{ __typename?: 'ContactLine', id?: string | null, label: string, type: ContactPropertyType, propertyId: string, value: string }>, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type UpdateContactMutationVariables = Exact<{
  input: UpdateContactInput;
}>;


export type UpdateContactMutation = { __typename?: 'Mutation', updateContact: { __typename?: 'Contact', id: string, userId?: string | null, firstname: string, lastname: string, dateAnniversaire?: string | null, fonction: string, category?: { __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, lines: Array<{ __typename?: 'ContactLine', id?: string | null, label: string, type: ContactPropertyType, propertyId: string, value: string }>, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type DeleteContactMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type DeleteContactMutation = { __typename?: 'Mutation', deleteContact: { __typename?: 'Contact', id: string, userId?: string | null, firstname: string, lastname: string, dateAnniversaire?: string | null, fonction: string, category?: { __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, lines: Array<{ __typename?: 'ContactLine', id?: string | null, label: string, type: ContactPropertyType, propertyId: string, value: string }>, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type CreateContactCategoryMutationVariables = Exact<{
  input: ContactCategoryInput;
}>;


export type CreateContactCategoryMutation = { __typename?: 'Mutation', createContactCategory: { __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type UpdateContactCategoryMutationVariables = Exact<{
  input: UpdateContactCategoryInput;
}>;


export type UpdateContactCategoryMutation = { __typename?: 'Mutation', updateContactCategory: { __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type DeleteContactCategoryMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type DeleteContactCategoryMutation = { __typename?: 'Mutation', deleteContactCategory: { __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type ReorderContactCategoriesMutationVariables = Exact<{
  input: ReorderContactCategoriesInput;
}>;


export type ReorderContactCategoriesMutation = { __typename?: 'Mutation', reorderContactCategories: Array<{ __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }> };

export type CreateContactPropertyMutationVariables = Exact<{
  input: ContactPropertyInput;
}>;


export type CreateContactPropertyMutation = { __typename?: 'Mutation', createContactProperty: { __typename?: 'ContactProperty', id: string, label: string, position: number, type: ContactPropertyType, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type UpdateContactPropertyMutationVariables = Exact<{
  input: UpdateContactPropertyInput;
}>;


export type UpdateContactPropertyMutation = { __typename?: 'Mutation', updateContactProperty: { __typename?: 'ContactProperty', id: string, label: string, position: number, type: ContactPropertyType, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type DeleteContactPropertyMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type DeleteContactPropertyMutation = { __typename?: 'Mutation', deleteContactProperty: { __typename?: 'ContactProperty', id: string, label: string, position: number, type: ContactPropertyType, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type ReorderContactPropertiesMutationVariables = Exact<{
  input: ReorderContactPropertiesInput;
}>;


export type ReorderContactPropertiesMutation = { __typename?: 'Mutation', reorderContactProperties: Array<{ __typename?: 'ContactProperty', id: string, label: string, position: number, type: ContactPropertyType, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }> };

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } } };

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } } };

export type DeletePostMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } } };

export type ParticipationEventMutationVariables = Exact<{
  input: ParticipationEventInput;
}>;


export type ParticipationEventMutation = { __typename?: 'Mutation', participationEvent?: any | null };

export type ReponseSondageMutationVariables = Exact<{
  reponseSondage_participations_pagination?: InputMaybe<OffsetPaginationInput>;
  input: ReponseSondageInput;
}>;


export type ReponseSondageMutation = { __typename?: 'Mutation', reponseSondage: { __typename?: 'SondageContent', id?: string | null, type: ContentType, question: string, sondageId: string, endDate: any, anonymous: boolean, reponsesAfterEnd: boolean, propositions: Array<{ __typename?: 'SondageProposition', id: string, value: string }>, resultats?: Array<{ __typename?: 'SondageResultat', propositionId: string, label: string, value: number, pourcentage: number }> | null, userReponse?: { __typename?: 'SondageReponse', id: string, proposition: { __typename?: 'SondageProposition', id: string, value: string }, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null } } | null, participations?: { __typename?: 'PaginatedSondageParticipations', data: Array<{ __typename?: 'SondageParticipation', user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null, capabilities: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean } } };

export type CreateCommentMutationVariables = Exact<{
  input?: InputMaybe<CommentInput>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } } };

export type UpdateCommentMutationVariables = Exact<{
  input: UpdateCommentInput;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } } };

export type DeleteCommentMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: { __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } } };

export type ReportCommentMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type ReportCommentMutation = { __typename?: 'Mutation', reportComment: { __typename?: 'Report', id: string, reportedAt: any, reportable: { __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } } } };

export type ReactPostMutationVariables = Exact<{
  input: ReactPostInput;
}>;


export type ReactPostMutation = { __typename?: 'Mutation', reactPost: { __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } } };

export type DeletePostUserReactionMutationVariables = Exact<{
  input: DeletePostUserReactionInput;
}>;


export type DeletePostUserReactionMutation = { __typename?: 'Mutation', deletePostUserReaction: { __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } } };

export type CreatePostCategoryMutationVariables = Exact<{
  input: PostCategoryInput;
}>;


export type CreatePostCategoryMutation = { __typename?: 'Mutation', createPostCategory: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type UpdatePostCategoryMutationVariables = Exact<{
  input: UpdatePostCategoryInput;
}>;


export type UpdatePostCategoryMutation = { __typename?: 'Mutation', updatePostCategory: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type DeletePostCategoryMutationVariables = Exact<{
  input: IdentifiedInput;
}>;


export type DeletePostCategoryMutation = { __typename?: 'Mutation', deletePostCategory: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type BonsplansCommandeBilletUtiliseMutationVariables = Exact<{
  bonsplansCommandeBilletUtilise_produit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  bonsplansCommandeBilletUtilise_produit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input: BonsplansCommandeBilletUtiliseInput;
}>;


export type BonsplansCommandeBilletUtiliseMutation = { __typename?: 'Mutation', bonsplansCommandeBilletUtilise: { __typename?: 'BonsplansCommandeBillet', id: string, commandeId: string, nom: string, utilise?: boolean | null, codeBarres?: string | null, codeActivation?: string | null, dateExpiration?: any | null, montant?: any | null, url?: string | null, info?: string | null, produit?: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } | null } };

export type BonsplansPanierAddArticlesTmpMutationVariables = Exact<{
  input: BonsplansPanierAddArticlesInput;
}>;


export type BonsplansPanierAddArticlesTmpMutation = { __typename?: 'Mutation', bonsplansPanierAddArticlesTmp: { __typename?: 'BonsplansPanierTmp', espace: BonsplansEspace, sousTotal: any, montantWalletsApplique: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }> } };

export type BonsplansPanierAddArticlesMutationVariables = Exact<{
  input: BonsplansPanierAddArticlesInput;
}>;


export type BonsplansPanierAddArticlesMutation = { __typename?: 'Mutation', bonsplansPanierAddArticles: { __typename?: 'BonsplansPanier', espace: BonsplansEspace, sousTotal: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }>, livraisons: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null }>, wallets: Array<{ __typename?: 'BonsplansWalletPanier', id: string, nom: string, solde: any, utiliser: boolean, dateFin: any, montantApplique: any, params: { __typename?: 'BonsplansWalletPanierParams', montantsAppliques: Array<{ __typename?: 'BonsplansWalletPanierParamsMontantApplique', ligne: string, montantApplique: any }> } }>, params?: { __typename?: 'BonsplansPanierParams', livraison?: { __typename?: 'BonsplansPanierParamsLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } | null } };

export type BonsplansPanierUpdateLigneMutationVariables = Exact<{
  input: BonsplansPanierUpdateLigneInput;
}>;


export type BonsplansPanierUpdateLigneMutation = { __typename?: 'Mutation', bonsplansPanierUpdateLigne: { __typename?: 'BonsplansPanier', espace: BonsplansEspace, sousTotal: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }>, livraisons: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null }>, wallets: Array<{ __typename?: 'BonsplansWalletPanier', id: string, nom: string, solde: any, utiliser: boolean, dateFin: any, montantApplique: any, params: { __typename?: 'BonsplansWalletPanierParams', montantsAppliques: Array<{ __typename?: 'BonsplansWalletPanierParamsMontantApplique', ligne: string, montantApplique: any }> } }>, params?: { __typename?: 'BonsplansPanierParams', livraison?: { __typename?: 'BonsplansPanierParamsLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } | null } };

export type BonsplansPanierRemoveLigneMutationVariables = Exact<{
  input: BonsplansPanierRemoveLigneInput;
}>;


export type BonsplansPanierRemoveLigneMutation = { __typename?: 'Mutation', bonsplansPanierRemoveLigne: { __typename?: 'BonsplansPanier', espace: BonsplansEspace, sousTotal: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }>, livraisons: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null }>, wallets: Array<{ __typename?: 'BonsplansWalletPanier', id: string, nom: string, solde: any, utiliser: boolean, dateFin: any, montantApplique: any, params: { __typename?: 'BonsplansWalletPanierParams', montantsAppliques: Array<{ __typename?: 'BonsplansWalletPanierParamsMontantApplique', ligne: string, montantApplique: any }> } }>, params?: { __typename?: 'BonsplansPanierParams', livraison?: { __typename?: 'BonsplansPanierParamsLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } | null } };

export type BonsplansPanierUseWalletMutationVariables = Exact<{
  input: BonsplansPanierUseWalletInput;
}>;


export type BonsplansPanierUseWalletMutation = { __typename?: 'Mutation', bonsplansPanierUseWallet: { __typename?: 'BonsplansPanier', espace: BonsplansEspace, sousTotal: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }>, livraisons: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null }>, wallets: Array<{ __typename?: 'BonsplansWalletPanier', id: string, nom: string, solde: any, utiliser: boolean, dateFin: any, montantApplique: any, params: { __typename?: 'BonsplansWalletPanierParams', montantsAppliques: Array<{ __typename?: 'BonsplansWalletPanierParamsMontantApplique', ligne: string, montantApplique: any }> } }>, params?: { __typename?: 'BonsplansPanierParams', livraison?: { __typename?: 'BonsplansPanierParamsLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } | null } };

export type BonsplansPanierClearMutationVariables = Exact<{
  input: BonsplansPanierClearInput;
}>;


export type BonsplansPanierClearMutation = { __typename?: 'Mutation', bonsplansPanierClear: { __typename?: 'BonsplansPanier', espace: BonsplansEspace, sousTotal: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }>, livraisons: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null }>, wallets: Array<{ __typename?: 'BonsplansWalletPanier', id: string, nom: string, solde: any, utiliser: boolean, dateFin: any, montantApplique: any, params: { __typename?: 'BonsplansWalletPanierParams', montantsAppliques: Array<{ __typename?: 'BonsplansWalletPanierParamsMontantApplique', ligne: string, montantApplique: any }> } }>, params?: { __typename?: 'BonsplansPanierParams', livraison?: { __typename?: 'BonsplansPanierParamsLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } | null } };

export type CreateCashbackPaymentMutationVariables = Exact<{
  input?: InputMaybe<CashbackPaymentInput>;
}>;


export type CreateCashbackPaymentMutation = { __typename?: 'Mutation', createCashbackPayment: { __typename?: 'CashbackPayment', id: string, amount?: number | null, iban?: string | null, ibic?: string | null, firstName?: string | null, lastName?: string | null, date: any, transacState: { __typename?: 'CashbackTransacState', code: number, status?: string | null, comment?: string | null } } };

export type CarteVacancesAbonnementCommandeCreateMutationVariables = Exact<{
  carteVacancesAbonnementCommandeCreate_abonnements_pagination?: InputMaybe<OffsetPaginationInput>;
  input: CarteVacancesAbonnementCommandeInput;
}>;


export type CarteVacancesAbonnementCommandeCreateMutation = { __typename?: 'Mutation', carteVacancesAbonnementCommandeCreate: { __typename?: 'CarteVacancesAbonnementCommande', id: string, reference: string, statut: CarteVacancesAbonnementCommandeStatut, montant: any, montantHT: any, montantTVA: any, montantAbonnements: any, montantAbonnementsHT: any, montantAbonnementsTVA: any, montantCartes: any, montantCartesHT: any, montantCartesTVA: any, montantRemise: any, montantRemiseHT: any, montantRemiseTVA: any, tauxTVA: any, quantiteAbonnements: number, duree: number, physique: boolean, dateCommande: any, typePaiement: CarteVacancesAbonnementTypePaiement, factureUrl?: string | null, cheque: { __typename?: 'CarteVacancesAbonnementCheque', ORDRE: string, ADRESSE: string, CODE_POSTAL: string, VILLE: string }, virement: { __typename?: 'CarteVacancesAbonnementVirement', IBAN: string, BIC: string, BANQUE: string }, abonnements?: { __typename?: 'PaginatedCarteVacancesAbonnements', data: Array<{ __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null } };

export type CarteVacancesAlimentationCreateMutationVariables = Exact<{
  input: CarteVacancesAlimentationCreateInput;
}>;


export type CarteVacancesAlimentationCreateMutation = { __typename?: 'Mutation', carteVacancesAlimentationCreate: { __typename?: 'WalletsPaiement', url: string, montant: any } };

export type CarteVacancesTransactionIssueCreateMutationVariables = Exact<{
  input: CarteVacancesTransactionIssueInput;
}>;


export type CarteVacancesTransactionIssueCreateMutation = { __typename?: 'Mutation', carteVacancesTransactionIssueCreate: { __typename?: 'CarteVacancesTransactionIssue', id: string, commercant: string, description?: string | null, statut: CarteVacancesTransactionIssueStatut, dateTraitement?: any | null, createdAt: any, transaction: { __typename?: 'CardTransactionInternal', id: string, type: CardTransactionType, nom: string, montant: any, statut: CardTransactionStatut, date: any, capabilities: { __typename?: 'CardTransactionCapabilities', requestMerchantEligibility: boolean } } | { __typename?: 'CardTransactionMerchant', id: string, type: CardTransactionType, nom: string, montant: any, statut: CardTransactionStatut, date: any, capabilities: { __typename?: 'CardTransactionCapabilities', requestMerchantEligibility: boolean } } } };

export type OnboardCarteVacancesMutationVariables = Exact<{
  input: OnboardCarteVacancesInput;
}>;


export type OnboardCarteVacancesMutation = { __typename?: 'Mutation', onboardCarteVacances?: { __typename?: 'CardProviderConsent', uri: string } | null };

export type OnboardCarteVacancesUserMutationVariables = Exact<{
  input: OnboardCarteVacancesUserInput;
}>;


export type OnboardCarteVacancesUserMutation = { __typename?: 'Mutation', onboardCarteVacancesUser?: { __typename?: 'CardProviderConsent', uri: string } | null };

export type ActivatePhysicalCardMutationVariables = Exact<{
  input: ActivatePhysicalCardInput;
}>;


export type ActivatePhysicalCardMutation = { __typename?: 'Mutation', activatePhysicalCard: { __typename?: 'CardProviderConsent', uri: string } };

export type ShowCardMutationVariables = Exact<{
  input: ShowCardInput;
}>;


export type ShowCardMutation = { __typename?: 'Mutation', showCard: { __typename?: 'CardProviderConsent', uri: string } };

export type ShowPinMutationVariables = Exact<{
  input: ShowPinInput;
}>;


export type ShowPinMutation = { __typename?: 'Mutation', showPin: { __typename?: 'CardProviderConsent', uri: string } };

export type LockPhysicalCardMutationVariables = Exact<{
  lockPhysicalCard_carte_transactions_pagination?: InputMaybe<OffsetPaginationInput>;
  input: LockPhysicalCardInput;
}>;


export type LockPhysicalCardMutation = { __typename?: 'Mutation', lockPhysicalCard: { __typename?: 'CarteVacances', statut: CarteStatut, solde: any, abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null } } | null, carte?: { __typename?: 'Carte', id: string, imageBackgroundUrl: string, cardMaskedNumber: string, cardHolder: string, expiryDate?: string | null, solde: any, physique?: { __typename?: 'PhysicalCard', blocked: boolean, canceled: boolean, deliveryUrl?: string | null, deliveryDate?: any | null } | null, transactions: { __typename?: 'PaginatedCardTransactions', data: Array<{ __typename?: 'CardTransactionInternal', id: string, type: CardTransactionType, nom: string, montant: any, statut: CardTransactionStatut, date: any, capabilities: { __typename?: 'CardTransactionCapabilities', requestMerchantEligibility: boolean } } | { __typename?: 'CardTransactionMerchant', id: string, type: CardTransactionType, nom: string, montant: any, statut: CardTransactionStatut, date: any, capabilities: { __typename?: 'CardTransactionCapabilities', requestMerchantEligibility: boolean } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } }, capabilities: { __typename?: 'CardCapabilities', showCard: boolean, showPin: boolean, activatePhysicalCard: boolean, lockPhysicalCard: boolean, unlockPhysicalCard: boolean, orderPhysicalCard: boolean } } | null, personalWallet: { __typename?: 'WalletsUserPersonalWallet', id: string, solde: any } } };

export type UnlockPhysicalCardMutationVariables = Exact<{
  input: UnlockPhysicalCardInput;
}>;


export type UnlockPhysicalCardMutation = { __typename?: 'Mutation', unlockPhysicalCard: { __typename?: 'CardProviderConsent', uri: string } };

export type CreateWalletsDistributionMutationVariables = Exact<{
  input: WalletsDistributionInput;
}>;


export type CreateWalletsDistributionMutation = { __typename?: 'Mutation', createWalletsDistribution: { __typename?: 'WalletsDistribution', id: string, nom: string, reference?: string | null, typeDistribution: WalletsDistributionType, statut: WalletsDistributionStatut, motifId?: string | null, dateDebut: any, dateFin: any, dateCloture?: any | null, conditionsUtilisation?: string | null, montant: any, montantRemise: any, solde: any, pourcentageConsomme: number, montantRembourse?: any | null, cnt: number, secured: boolean, factureUrl?: string | null, createdAt: any, updatedAt: any, motif?: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null } | null, distribuables: Array<{ __typename?: 'WalletsDistributionCarteConfig', typeDistribuable: WalletsDistributionDistribuableType } | { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'WalletsDistributionReductionRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any }, quotaRule?: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } | null, subventionnables: Array<{ __typename?: 'WalletsDistributionSubventionnable', subventionnableType: WalletsDistributionSubventionnableType, subventionnableId: string, subventionnableNom: string }>, catalogue?: { __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null, categories?: Array<{ __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string }> | null } | null } | { __typename?: 'WalletsDistributionRemboursementRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } }>, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type CreateWalletsProvisionningMutationVariables = Exact<{
  createWalletsProvisionning_organismeWallet_mouvements_pagination?: InputMaybe<OffsetPaginationInput>;
  input?: InputMaybe<WalletsProvisionningInput>;
}>;


export type CreateWalletsProvisionningMutation = { __typename?: 'Mutation', createWalletsProvisionning: { __typename?: 'WalletsProvisionning', id: string, nom?: string | null, montant: any, montantAttente: any, montantRemise: any, typeProvisionning: WalletsProvisionningTypeProvisionning, typePaiement: WalletsProvisionningTypePaiement, statut: WalletsProvisionningStatut, dateReception?: any | null, factureUrl?: string | null, createdAt: any, updatedAt: any, organismeWallet: { __typename?: 'WalletsOrganismeWallet', id: string, nom: string, solde: any, montantAttente: any, iban: string, bic: string, culture: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, ecc: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, sub: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, mouvements?: { __typename?: 'PaginatedWalletsMouvements', data: Array<{ __typename?: 'WalletsOrganismeWalletMvt', id: string, nom: string, montant: any, solde: any, dateMvt: any }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type CreateWalletsProvisionningCultureMutationVariables = Exact<{
  createWalletsProvisionningCulture_organismeWallet_mouvements_pagination?: InputMaybe<OffsetPaginationInput>;
  input?: InputMaybe<WalletsProvisionningCultureInput>;
}>;


export type CreateWalletsProvisionningCultureMutation = { __typename?: 'Mutation', createWalletsProvisionningCulture: { __typename?: 'WalletsProvisionning', id: string, nom?: string | null, montant: any, montantAttente: any, montantRemise: any, typeProvisionning: WalletsProvisionningTypeProvisionning, typePaiement: WalletsProvisionningTypePaiement, statut: WalletsProvisionningStatut, dateReception?: any | null, factureUrl?: string | null, createdAt: any, updatedAt: any, organismeWallet: { __typename?: 'WalletsOrganismeWallet', id: string, nom: string, solde: any, montantAttente: any, iban: string, bic: string, culture: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, ecc: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, sub: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, mouvements?: { __typename?: 'PaginatedWalletsMouvements', data: Array<{ __typename?: 'WalletsOrganismeWalletMvt', id: string, nom: string, montant: any, solde: any, dateMvt: any }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type CreateWalletsProvisionningEccMutationVariables = Exact<{
  createWalletsProvisionningEcc_organismeWallet_mouvements_pagination?: InputMaybe<OffsetPaginationInput>;
  input?: InputMaybe<WalletsProvisionningEccInput>;
}>;


export type CreateWalletsProvisionningEccMutation = { __typename?: 'Mutation', createWalletsProvisionningEcc: { __typename?: 'WalletsProvisionning', id: string, nom?: string | null, montant: any, montantAttente: any, montantRemise: any, typeProvisionning: WalletsProvisionningTypeProvisionning, typePaiement: WalletsProvisionningTypePaiement, statut: WalletsProvisionningStatut, dateReception?: any | null, factureUrl?: string | null, createdAt: any, updatedAt: any, organismeWallet: { __typename?: 'WalletsOrganismeWallet', id: string, nom: string, solde: any, montantAttente: any, iban: string, bic: string, culture: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, ecc: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, sub: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, mouvements?: { __typename?: 'PaginatedWalletsMouvements', data: Array<{ __typename?: 'WalletsOrganismeWalletMvt', id: string, nom: string, montant: any, solde: any, dateMvt: any }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type CreateWalletsProvisionningSubMutationVariables = Exact<{
  createWalletsProvisionningSub_organismeWallet_mouvements_pagination?: InputMaybe<OffsetPaginationInput>;
  input?: InputMaybe<WalletsProvisionningSubInput>;
}>;


export type CreateWalletsProvisionningSubMutation = { __typename?: 'Mutation', createWalletsProvisionningSub: { __typename?: 'WalletsProvisionning', id: string, nom?: string | null, montant: any, montantAttente: any, montantRemise: any, typeProvisionning: WalletsProvisionningTypeProvisionning, typePaiement: WalletsProvisionningTypePaiement, statut: WalletsProvisionningStatut, dateReception?: any | null, factureUrl?: string | null, createdAt: any, updatedAt: any, organismeWallet: { __typename?: 'WalletsOrganismeWallet', id: string, nom: string, solde: any, montantAttente: any, iban: string, bic: string, culture: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, ecc: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, sub: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, mouvements?: { __typename?: 'PaginatedWalletsMouvements', data: Array<{ __typename?: 'WalletsOrganismeWalletMvt', id: string, nom: string, montant: any, solde: any, dateMvt: any }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type WalletsUserActivateWalletMutationVariables = Exact<{
  input: WalletsUserActivateWalletInput;
}>;


export type WalletsUserActivateWalletMutation = { __typename?: 'Mutation', walletsUserActivateWallet: { __typename?: 'WalletsUserWallet', id: string, nom: string, distributionId: number, montantInitial: any, solde: any, used: boolean, usedAt?: any | null, nbrRelances: number, actif: boolean, statut: WalletsUserWalletStatut, pourcentageConsomme: number, espace: BonsplansEspace, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, distribution: { __typename?: 'WalletsUserWalletDistribution', id: string, nom: string, typeDistribution: WalletsDistributionType, motifId?: string | null, dateDebut: any, dateFin: any, conditionsUtilisation?: string | null, motif?: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null } | null, distribuables: Array<{ __typename?: 'WalletsDistributionCarteConfig', typeDistribuable: WalletsDistributionDistribuableType } | { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'WalletsDistributionReductionRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any }, quotaRule?: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } | null, subventionnables: Array<{ __typename?: 'WalletsDistributionSubventionnable', subventionnableType: WalletsDistributionSubventionnableType, subventionnableId: string, subventionnableNom: string }>, catalogue?: { __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null } | null } | { __typename?: 'WalletsDistributionRemboursementRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } }> }, capabilities: { __typename?: 'WalletsUserWalletCapabilities', share: boolean, use: boolean }, vedetteEmplacement?: { __typename?: 'MisesEnAvantVedetteEmplacement', emplacementType: MisesEnAvantVedetteEmplacementType, emplacementId?: string | null } | null, quota?: { __typename?: 'WalletsUserWalletQuota', id: string, quotaConsomme: any, dateDebut?: any | null, dateFin?: any | null, quotaRule: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } } | null } };

export type WalletsUserSendActivationCodeMutationVariables = Exact<{
  input: WalletsUserSendActivationCodeInput;
}>;


export type WalletsUserSendActivationCodeMutation = { __typename?: 'Mutation', walletsUserSendActivationCode?: any | null };

export type WalletsUserPartageWalletMutationVariables = Exact<{
  input: WalletsUserPartageWalletInput;
}>;


export type WalletsUserPartageWalletMutation = { __typename?: 'Mutation', walletsUserPartageWallet: { __typename?: 'WalletsUserWalletPartage', id: string, nom: string, montant: any, datePartage: any } };

export type InterruptQueryVariables = Exact<{ [key: string]: never; }>;


export type InterruptQuery = { __typename?: 'Query', interrupt?: { __typename?: 'Interrupt', action: InterruptAction, workflow?: WorkflowType | null } | null };

export type SignupInvitationQueryVariables = Exact<{
  input?: InputMaybe<SignupInvitationInput>;
}>;


export type SignupInvitationQuery = { __typename?: 'Query', signupInvitation: { __typename?: 'SignupInvitation', id: string, userActivatedAt?: any | null, token: string, organisme: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } }, invitedBy: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } } };

export type SsoAuthTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type SsoAuthTokenQuery = { __typename?: 'Query', ssoAuthToken: string };

export type ClubAvantagesCataloguesQueryVariables = Exact<{ [key: string]: never; }>;


export type ClubAvantagesCataloguesQuery = { __typename?: 'Query', clubAvantagesCatalogues: Array<{ __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null, categories?: Array<{ __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string }> | null } | { __typename?: 'ReductionCodeCatalogue', nom: string, accroche?: string | null }> };

export type OrganismeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrganismeQuery = { __typename?: 'Query', organisme?: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } } | null };

export type UsersQueryVariables = Exact<{
  input?: InputMaybe<UsersInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'PaginatedUsers', data: Array<{ __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string } } | null } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type UsersExportQueryVariables = Exact<{
  input?: InputMaybe<UsersInput>;
}>;


export type UsersExportQuery = { __typename?: 'Query', usersExport: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } };

export type UserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstname: string, lastname: string, status: UserStatus, email: string, displayName: string, dateAnniversaire?: string | null, fonction?: string | null, role?: UserRole | null, created_at: any, updated_at: any, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, groups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }>, capabilities: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, carteVacances: { __typename?: 'UserCarteVacances', abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string } } | null } } | null };

export type UserGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGroupsQuery = { __typename?: 'Query', userGroups: Array<{ __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null }> };

export type UserGroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserGroupQuery = { __typename?: 'Query', userGroup: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } };

export type UserStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserStatsQuery = { __typename?: 'Query', userStats: { __typename?: 'UserStats', count: number, toInvite: number } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Me', id: string, firstname: string, lastname: string, email: string, displayName: string, isDefaultAvatar: boolean, incognito: boolean, dateAnniversaire?: string | null, fonction?: string | null, about?: string | null, activatedAt?: any | null, created_at: any, updated_at: any, role?: UserRole | null, phone?: { __typename?: 'Phone', indicatif: string, number: string } | null, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }, permissions: Array<{ __typename?: 'Permission', subject: string, action: Array<string> }>, currentOrganisme?: { __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, capabilities: { __typename?: 'RootCapabilities', Organisme: { __typename?: 'OrganismeCapabilities', update: boolean, createChild: boolean }, ClubAvantages: { __typename?: 'ClubAvantagesCapabilities', read: boolean, use: boolean }, Bonsplans: { __typename?: 'BonsplansCapabilities', stats: boolean }, Contact: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, ContactProperty: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionCulture: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionEcc: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionSub: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, DistributionVacances: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, CarteVacancesAbonnement: { __typename?: 'CarteVacancesAbonnementCapabilities', read: boolean, create: boolean, useOptionsPaiement: boolean }, Ecc: { __typename?: 'EccCapabilities', preview: boolean, use: boolean }, OrganismeWallet: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Post: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, PostCategory: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Provisionning: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Report: { __typename?: 'ReportCapabilities', read: boolean }, User: { __typename?: 'UserCapabilities', read: boolean, create: boolean, createBatch: boolean, update: boolean, suspend: boolean, resume: boolean, delete: boolean, resendInvitation: boolean, sendInvitation: boolean, changeRole: boolean, changeGroups: boolean }, UserGroup: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, Abonnement: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }, config: { __typename?: 'OrganismeConfig', organisme: { __typename?: 'OrganismeOrganismeConfig', hasMultiOrganisme: boolean, timezone: string }, wallet: { __typename?: 'WalletsOrganismeConfig', hasOrganismeWallet: boolean, hasCarteVacances: boolean, rembourserEccPerime: boolean } }, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } } | null, organismes: Array<{ __typename?: 'Organisme', id: string, name: string, address: string, zipcode: string, city: string, country: string, indicatif: string, avatar: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } }>, chatToken?: { __typename?: 'ChatToken', token: string, email: string } | null } };

export type ImportSampleQueryVariables = Exact<{
  type: ImportType;
}>;


export type ImportSampleQuery = { __typename?: 'Query', importSample: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } };

export type WorkflowQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type WorkflowQuery = { __typename?: 'Query', workflow?: { __typename?: 'Workflow', id: string, type: WorkflowType, steps: Array<{ __typename?: 'WorkflowStep', action: string, done: boolean }> } | null };

export type ReportsQueryVariables = Exact<{
  order?: InputMaybe<Order>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type ReportsQuery = { __typename?: 'Query', reports: { __typename?: 'PaginatedReports', data: Array<{ __typename?: 'Report', id: string, reportedAt: any, reportable: { __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type ReportQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type ReportQuery = { __typename?: 'Query', report: { __typename?: 'Report', id: string, reportedAt: any, reportable: { __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } } } };

export type ContactsQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Order>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type ContactsQuery = { __typename?: 'Query', contacts: { __typename?: 'PaginatedContacts', data: Array<{ __typename?: 'Contact', id: string, userId?: string | null, firstname: string, lastname: string, dateAnniversaire?: string | null, fonction: string, category?: { __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, lines: Array<{ __typename?: 'ContactLine', id?: string | null, label: string, type: ContactPropertyType, propertyId: string, value: string }>, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type ContactQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ContactQuery = { __typename?: 'Query', contact?: { __typename?: 'Contact', id: string, userId?: string | null, firstname: string, lastname: string, dateAnniversaire?: string | null, fonction: string, category?: { __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, lines: Array<{ __typename?: 'ContactLine', id?: string | null, label: string, type: ContactPropertyType, propertyId: string, value: string }>, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null };

export type ContactCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactCategoriesQuery = { __typename?: 'Query', contactCategories: Array<{ __typename?: 'ContactCategory', id: string, name: string, position: number, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }> };

export type ContactPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPropertiesQuery = { __typename?: 'Query', contactProperties: Array<{ __typename?: 'ContactProperty', id: string, label: string, position: number, type: ContactPropertyType, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }> };

export type PostsQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<PostStatus>;
  order?: InputMaybe<Order>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPosts', data: Array<{ __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type PostQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } } };

export type AlbumQueryVariables = Exact<{
  album_items_pagination?: InputMaybe<OffsetPaginationInput>;
  input: IdentifiedInput;
}>;


export type AlbumQuery = { __typename?: 'Query', album: { __typename?: 'Album', id: string, items: { __typename?: 'PaginatedAlbumItems', data: Array<{ __typename?: 'AlbumItem', id: string, media: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } } };

export type MisesEnAvantsQueryVariables = Exact<{
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type MisesEnAvantsQuery = { __typename?: 'Query', misesEnAvants: { __typename?: 'PaginatedMisesEnAvants', data: Array<{ __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type PostCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type PostCategoriesQuery = { __typename?: 'Query', postCategories: Array<{ __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }> };

export type PostCategoryQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type PostCategoryQuery = { __typename?: 'Query', postCategory: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type CommentsQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: { __typename?: 'PaginatedComments', data: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type BonsplansCataloguesQueryVariables = Exact<{
  input: BonsplansCataloguesInput;
}>;


export type BonsplansCataloguesQuery = { __typename?: 'Query', bonsplansCatalogues: Array<{ __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null, categories?: Array<{ __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string }> | null }> };

export type BonsplansCatalogueQueryVariables = Exact<{
  input: BonsplansCatalogueInput;
}>;


export type BonsplansCatalogueQuery = { __typename?: 'Query', bonsplansCatalogue: { __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null, categories?: Array<{ __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string }> | null } };

export type BonsplansCategoriesQueryVariables = Exact<{
  input: BonsplansCategoriesInput;
}>;


export type BonsplansCategoriesQuery = { __typename?: 'Query', bonsplansCategories: Array<{ __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string }> };

export type BonsplansCategorieQueryVariables = Exact<{
  input: BonsplansCategorieInput;
}>;


export type BonsplansCategorieQuery = { __typename?: 'Query', bonsplansCategorie: { __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string } };

export type BonsplansSearchProduitsQueryVariables = Exact<{
  input: BonsplansSearchProduitsInput;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type BonsplansSearchProduitsQuery = { __typename?: 'Query', bonsplansSearchProduits: { __typename?: 'PaginatedBonsplansSearchProduit', data: Array<{ __typename?: 'BonsplansSearchProduit', id: string, nom: string, type: BonsplansProduitType, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string, resized?: Array<{ __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string, resized?: Array<{ __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string }> | null }> | null } | null, cover?: { __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string, resized?: Array<{ __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string }> | null } | null, highlights: Array<{ __typename?: 'BonsplansSearchProduitHighlight', start: number, end: number }> }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type BonsplansSuggestProduitsQueryVariables = Exact<{
  input: BonsplansSuggestProduitsInput;
}>;


export type BonsplansSuggestProduitsQuery = { __typename?: 'Query', bonsplansSuggestProduits: Array<{ __typename?: 'BonsplansSearchProduit', id: string, nom: string, type: BonsplansProduitType, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string, resized?: Array<{ __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string, resized?: Array<{ __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string }> | null }> | null } | null, cover?: { __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string, resized?: Array<{ __typename?: 'BonsplansSearchMedia', resolution?: number | null, url: string }> | null } | null, highlights: Array<{ __typename?: 'BonsplansSearchProduitHighlight', start: number, end: number }> }> };

export type BonsplansProduitQueryVariables = Exact<{
  bonsplansProduit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  bonsplansProduit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input: BonsplansProduitInput;
}>;


export type BonsplansProduitQuery = { __typename?: 'Query', bonsplansProduit: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } };

export type BonsplansArticleQueryVariables = Exact<{
  input: BonsplansArticleInput;
}>;


export type BonsplansArticleQuery = { __typename?: 'Query', bonsplansArticle: { __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } };

export type BonsplansCommandesQueryVariables = Exact<{
  bonsplansCommandes_data_billets_produit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  bonsplansCommandes_data_billets_produit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input?: InputMaybe<BonsplansCommandesInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type BonsplansCommandesQuery = { __typename?: 'Query', bonsplansCommandes: { __typename?: 'PaginatedBonsplansCommandes', data: Array<{ __typename?: 'BonsplansCommande', id: string, numeroCommande: string, libelle: string, espace: BonsplansEspace, statut: BonsplansCommandeStatut, total: any, totalRemise: any, createdAt: any, lignes: Array<{ __typename?: 'BonsplansCommandeLigne', id: string, statut: BonsplansCommandeStatut, type: BonplansCommandeLigneType, quantite: number, prixUnitaire: any, libelle: string }>, billets?: Array<{ __typename?: 'BonsplansCommandeBillet', id: string, commandeId: string, nom: string, utilise?: boolean | null, codeBarres?: string | null, codeActivation?: string | null, dateExpiration?: any | null, montant?: any | null, url?: string | null, info?: string | null, produit?: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } | null }> | null, livraison?: { __typename?: 'BonsplansCommandeLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type BonsplansCommandeQueryVariables = Exact<{
  bonsplansCommande_billets_produit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  bonsplansCommande_billets_produit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input: IdentifiedInput;
}>;


export type BonsplansCommandeQuery = { __typename?: 'Query', bonsplansCommande: { __typename?: 'BonsplansCommande', id: string, numeroCommande: string, libelle: string, espace: BonsplansEspace, statut: BonsplansCommandeStatut, total: any, totalRemise: any, createdAt: any, lignes: Array<{ __typename?: 'BonsplansCommandeLigne', id: string, statut: BonsplansCommandeStatut, type: BonplansCommandeLigneType, quantite: number, prixUnitaire: any, libelle: string }>, billets?: Array<{ __typename?: 'BonsplansCommandeBillet', id: string, commandeId: string, nom: string, utilise?: boolean | null, codeBarres?: string | null, codeActivation?: string | null, dateExpiration?: any | null, montant?: any | null, url?: string | null, info?: string | null, produit?: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } | null }> | null, livraison?: { __typename?: 'BonsplansCommandeLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } };

export type BonsplansCommandeBilletsQueryVariables = Exact<{
  bonsplansCommandeBillets_data_produit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  bonsplansCommandeBillets_data_produit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input?: InputMaybe<BonsplansCommandeBilletsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type BonsplansCommandeBilletsQuery = { __typename?: 'Query', bonsplansCommandeBillets: { __typename?: 'PaginatedBonsplansCommandeBillets', data: Array<{ __typename?: 'BonsplansCommandeBillet', id: string, commandeId: string, nom: string, utilise?: boolean | null, codeBarres?: string | null, codeActivation?: string | null, dateExpiration?: any | null, montant?: any | null, url?: string | null, info?: string | null, produit?: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } | null }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type BonsplansCommandeBilletQueryVariables = Exact<{
  bonsplansCommandeBillet_produit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  bonsplansCommandeBillet_produit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input: BonsplansCommandeBilletInput;
}>;


export type BonsplansCommandeBilletQuery = { __typename?: 'Query', bonsplansCommandeBillet: { __typename?: 'BonsplansCommandeBillet', id: string, commandeId: string, nom: string, utilise?: boolean | null, codeBarres?: string | null, codeActivation?: string | null, dateExpiration?: any | null, montant?: any | null, url?: string | null, info?: string | null, produit?: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } | null } };

export type BonsplansCommandeStatsQueryVariables = Exact<{
  input: BonsplansCommandeStatsInput;
}>;


export type BonsplansCommandeStatsQuery = { __typename?: 'Query', bonsplansCommandeStats: { __typename?: 'BonsplansCommandeStats', since: any, count: number, total: any, totalRemise: any } };

export type BonsplansCommandeAdminStatsQueryVariables = Exact<{
  input: BonsplansCommandeStatsInput;
}>;


export type BonsplansCommandeAdminStatsQuery = { __typename?: 'Query', bonsplansCommandeAdminStats: { __typename?: 'BonsplansCommandeStats', since: any, count: number, total: any, totalRemise: any } };

export type BonsplansPanierQueryVariables = Exact<{
  espace: BonsplansEspace;
}>;


export type BonsplansPanierQuery = { __typename?: 'Query', bonsplansPanier: { __typename?: 'BonsplansPanier', espace: BonsplansEspace, sousTotal: any, total: any, totalRemise: any, lignes: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null, params: { __typename?: 'BonsplansLignePanierParams', carteCadeau?: { __typename?: 'BonsplansLignePanierParamsCarteCadeau', valeurFaciale?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null } }>, livraisons: Array<{ __typename?: 'BonsplansLignePanier', uuid: string, type: BonsplansTypeLignePanier, quantite: number, libelle: string, prixUnitaire: any, total: any, totalRemise: any, sku?: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string } | null }>, wallets: Array<{ __typename?: 'BonsplansWalletPanier', id: string, nom: string, solde: any, utiliser: boolean, dateFin: any, montantApplique: any, params: { __typename?: 'BonsplansWalletPanierParams', montantsAppliques: Array<{ __typename?: 'BonsplansWalletPanierParamsMontantApplique', ligne: string, montantApplique: any }> } }>, params?: { __typename?: 'BonsplansPanierParams', livraison?: { __typename?: 'BonsplansPanierParamsLivraison', company?: string | null, firstname: string, lastname: string, address: string, zipcode: string, city: string, country: string } | null } | null } };

export type CashbackCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CashbackCategoriesQuery = { __typename?: 'Query', cashbackCategories: Array<{ __typename?: 'CashbackCategory', id: string, name: string, subCategories: Array<{ __typename?: 'CashbackSubCategory', id: string, idCat: string, name: string }> }> };

export type CashbackSubCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CashbackSubCategoriesQuery = { __typename?: 'Query', cashbackSubCategories: Array<{ __typename?: 'CashbackSubCategory', id: string, idCat: string, name: string }> };

export type CashbackOffersQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  subCategoryId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type CashbackOffersQuery = { __typename?: 'Query', cashbackOffers: { __typename?: 'PaginatedCashbackOffers', data: Array<{ __typename?: 'CashbackOffer', id: string, brandId?: number | null, brandLogo?: string | null, brandName?: string | null, brandDescription?: string | null, companyId?: number | null, companyName?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, condition: Array<string>, startDate?: any | null, endDate?: any | null, reduction?: string | null, unit?: CashbackUnitType | null, shops: Array<{ __typename?: 'CashbackShop', id: string, name?: string | null, name2?: string | null, logo?: string | null, description?: string | null, url?: string | null, type?: string | null, siret?: string | null }>, categories: Array<{ __typename?: 'CashbackCategory', id: string, name: string, subCategories: Array<{ __typename?: 'CashbackSubCategory', id: string, idCat: string, name: string }> }>, subCategories: Array<{ __typename?: 'CashbackSubCategory', id: string, idCat: string, name: string }> }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type CashbackOfferQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type CashbackOfferQuery = { __typename?: 'Query', cashbackOffer: { __typename?: 'CashbackOffer', id: string, brandId?: number | null, brandLogo?: string | null, brandName?: string | null, brandDescription?: string | null, companyId?: number | null, companyName?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, condition: Array<string>, startDate?: any | null, endDate?: any | null, reduction?: string | null, unit?: CashbackUnitType | null, shops: Array<{ __typename?: 'CashbackShop', id: string, name?: string | null, name2?: string | null, logo?: string | null, description?: string | null, url?: string | null, type?: string | null, siret?: string | null }>, categories: Array<{ __typename?: 'CashbackCategory', id: string, name: string, subCategories: Array<{ __typename?: 'CashbackSubCategory', id: string, idCat: string, name: string }> }>, subCategories: Array<{ __typename?: 'CashbackSubCategory', id: string, idCat: string, name: string }> } };

export type CashbackPaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type CashbackPaymentsQuery = { __typename?: 'Query', cashbackPayments: { __typename?: 'PaginatedCashbackPayments', data: Array<{ __typename?: 'CashbackPayment', id: string, amount?: number | null, iban?: string | null, ibic?: string | null, firstName?: string | null, lastName?: string | null, date: any, transacState: { __typename?: 'CashbackTransacState', code: number, status?: string | null, comment?: string | null } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type CashbackPaymentQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type CashbackPaymentQuery = { __typename?: 'Query', cashbackPayment: { __typename?: 'CashbackPayment', id: string, amount?: number | null, iban?: string | null, ibic?: string | null, firstName?: string | null, lastName?: string | null, date: any, transacState: { __typename?: 'CashbackTransacState', code: number, status?: string | null, comment?: string | null } } };

export type CashbackTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CashbackTransactionsQuery = { __typename?: 'Query', cashbackTransactions: { __typename?: 'PaginatedCashbackTransactions', data: Array<{ __typename?: 'CashbackTransaction', id: string, amount: number, percentCashback: number, unitCashback: CashbackUnitType, offerId: number, shopId: number, shopName?: string | null, gain: number, date: any, transacState: { __typename?: 'CashbackTransacState', code: number, status?: string | null, comment?: string | null } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type CashbackTransactionQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type CashbackTransactionQuery = { __typename?: 'Query', cashbackTransaction: { __typename?: 'CashbackTransaction', id: string, amount: number, percentCashback: number, unitCashback: CashbackUnitType, offerId: number, shopId: number, shopName?: string | null, gain: number, date: any, transacState: { __typename?: 'CashbackTransacState', code: number, status?: string | null, comment?: string | null } } };

export type CashbackBalanceQueryVariables = Exact<{ [key: string]: never; }>;


export type CashbackBalanceQuery = { __typename?: 'Query', cashbackBalance: { __typename?: 'CashbackBalance', creditAmount: number, debitAmount: number, balanceAmount: number, waitAmount: number, gainAmount: number, payAmount: number, capAmount: number, thresholdAmount: number } };

export type ReductionCodeCatalogueQueryVariables = Exact<{ [key: string]: never; }>;


export type ReductionCodeCatalogueQuery = { __typename?: 'Query', reductionCodeCatalogue: { __typename?: 'ReductionCodeCatalogue', nom: string, accroche?: string | null, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null } };

export type ReductionCodeCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReductionCodeCategoriesQuery = { __typename?: 'Query', reductionCodeCategories: Array<{ __typename?: 'ReductionCodeCategory', id: string, name: string, subCategories: Array<{ __typename?: 'ReductionCodeSubCategory', id: string, name: string }> }> };

export type ReductionCodeSubCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReductionCodeSubCategoriesQuery = { __typename?: 'Query', reductionCodeSubCategories: Array<{ __typename?: 'ReductionCodeSubCategory', id: string, name: string }> };

export type ReductionCodesQueryVariables = Exact<{
  input?: InputMaybe<ReductionCodesInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type ReductionCodesQuery = { __typename?: 'Query', reductionCodes: { __typename?: 'PaginatedReductionCodes', data: Array<{ __typename?: 'ReductionCode', id: string, brand: string, brandLogoUrl?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, conditions: Array<string>, startDate?: any | null, endDate?: any | null, reduction: string, unit: ReductionCodeUnitType, offre?: string | null, codeReduction?: string | null, shop: { __typename?: 'ReductionCodeShop', id: string, name: string, logoUrl?: string | null, description?: string | null, reductions: Array<{ __typename?: 'ReductionCode', id: string, brand: string, brandLogoUrl?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, conditions: Array<string>, startDate?: any | null, endDate?: any | null, reduction: string, unit: ReductionCodeUnitType, offre?: string | null, codeReduction?: string | null, shop: { __typename?: 'ReductionCodeShop', id: string, name: string, logoUrl?: string | null, description?: string | null } }> } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type ReductionCodeQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type ReductionCodeQuery = { __typename?: 'Query', reductionCode: { __typename?: 'ReductionCode', id: string, brand: string, brandLogoUrl?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, conditions: Array<string>, startDate?: any | null, endDate?: any | null, reduction: string, unit: ReductionCodeUnitType, offre?: string | null, codeReduction?: string | null, shop: { __typename?: 'ReductionCodeShop', id: string, name: string, logoUrl?: string | null, description?: string | null, reductions: Array<{ __typename?: 'ReductionCode', id: string, brand: string, brandLogoUrl?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, conditions: Array<string>, startDate?: any | null, endDate?: any | null, reduction: string, unit: ReductionCodeUnitType, offre?: string | null, codeReduction?: string | null, shop: { __typename?: 'ReductionCodeShop', id: string, name: string, logoUrl?: string | null, description?: string | null } }> } } };

export type ReductionCodeShopsQueryVariables = Exact<{
  input?: InputMaybe<ReductionCodeShopsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type ReductionCodeShopsQuery = { __typename?: 'Query', reductionCodeShops: { __typename?: 'PaginatedReductionCodeShops', data: Array<{ __typename?: 'ReductionCodeShop', id: string, name: string, logoUrl?: string | null, description?: string | null, reductions: Array<{ __typename?: 'ReductionCode', id: string, brand: string, brandLogoUrl?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, conditions: Array<string>, startDate?: any | null, endDate?: any | null, reduction: string, unit: ReductionCodeUnitType, offre?: string | null, codeReduction?: string | null, shop: { __typename?: 'ReductionCodeShop', id: string, name: string, logoUrl?: string | null, description?: string | null, reductions: Array<{ __typename?: 'ReductionCode', id: string, brand: string, brandLogoUrl?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, conditions: Array<string>, startDate?: any | null, endDate?: any | null, reduction: string, unit: ReductionCodeUnitType, offre?: string | null, codeReduction?: string | null }> } }> }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type ReductionCodeShopQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type ReductionCodeShopQuery = { __typename?: 'Query', reductionCodeShop: { __typename?: 'ReductionCodeShop', id: string, name: string, logoUrl?: string | null, description?: string | null, reductions: Array<{ __typename?: 'ReductionCode', id: string, brand: string, brandLogoUrl?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, conditions: Array<string>, startDate?: any | null, endDate?: any | null, reduction: string, unit: ReductionCodeUnitType, offre?: string | null, codeReduction?: string | null, shop: { __typename?: 'ReductionCodeShop', id: string, name: string, logoUrl?: string | null, description?: string | null, reductions: Array<{ __typename?: 'ReductionCode', id: string, brand: string, brandLogoUrl?: string | null, urlRedirectWeb: string, urlRedirectMobile: string, description?: string | null, shortDescription?: string | null, conditions: Array<string>, startDate?: any | null, endDate?: any | null, reduction: string, unit: ReductionCodeUnitType, offre?: string | null, codeReduction?: string | null }> } }> } };

export type WalletsAdvantagesQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletsAdvantagesQuery = { __typename?: 'Query', walletsAdvantages: Array<{ __typename?: 'WalletsAdvantage', id: string, name: string, typeDistribution: WalletsDistributionType, shortDescription: string, description: string, image: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } }> };

export type CarteVacancesQueryVariables = Exact<{
  carteVacances_carte_transactions_pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type CarteVacancesQuery = { __typename?: 'Query', carteVacances?: { __typename?: 'CarteVacances', statut: CarteStatut, solde: any, abonnement?: { __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null } } | null, carte?: { __typename?: 'Carte', id: string, imageBackgroundUrl: string, cardMaskedNumber: string, cardHolder: string, expiryDate?: string | null, solde: any, physique?: { __typename?: 'PhysicalCard', blocked: boolean, canceled: boolean, deliveryUrl?: string | null, deliveryDate?: any | null } | null, transactions: { __typename?: 'PaginatedCardTransactions', data: Array<{ __typename?: 'CardTransactionInternal', id: string, type: CardTransactionType, nom: string, montant: any, statut: CardTransactionStatut, date: any, capabilities: { __typename?: 'CardTransactionCapabilities', requestMerchantEligibility: boolean } } | { __typename?: 'CardTransactionMerchant', id: string, type: CardTransactionType, nom: string, montant: any, statut: CardTransactionStatut, date: any, capabilities: { __typename?: 'CardTransactionCapabilities', requestMerchantEligibility: boolean } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } }, capabilities: { __typename?: 'CardCapabilities', showCard: boolean, showPin: boolean, activatePhysicalCard: boolean, lockPhysicalCard: boolean, unlockPhysicalCard: boolean, orderPhysicalCard: boolean } } | null, personalWallet: { __typename?: 'WalletsUserPersonalWallet', id: string, solde: any } } | null };

export type CarteVacancesTransactionQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type CarteVacancesTransactionQuery = { __typename?: 'Query', carteVacancesTransaction: { __typename?: 'CardTransactionInternal', id: string, type: CardTransactionType, nom: string, montant: any, statut: CardTransactionStatut, date: any, capabilities: { __typename?: 'CardTransactionCapabilities', requestMerchantEligibility: boolean } } | { __typename?: 'CardTransactionMerchant', id: string, type: CardTransactionType, nom: string, montant: any, statut: CardTransactionStatut, date: any, capabilities: { __typename?: 'CardTransactionCapabilities', requestMerchantEligibility: boolean } } };

export type CarteVacancesAbonnementCommandeQueryVariables = Exact<{
  carteVacancesAbonnementCommande_abonnements_pagination?: InputMaybe<OffsetPaginationInput>;
  input: IdentifiedInput;
}>;


export type CarteVacancesAbonnementCommandeQuery = { __typename?: 'Query', carteVacancesAbonnementCommande: { __typename?: 'CarteVacancesAbonnementCommande', id: string, reference: string, statut: CarteVacancesAbonnementCommandeStatut, montant: any, montantHT: any, montantTVA: any, montantAbonnements: any, montantAbonnementsHT: any, montantAbonnementsTVA: any, montantCartes: any, montantCartesHT: any, montantCartesTVA: any, montantRemise: any, montantRemiseHT: any, montantRemiseTVA: any, tauxTVA: any, quantiteAbonnements: number, duree: number, physique: boolean, dateCommande: any, typePaiement: CarteVacancesAbonnementTypePaiement, factureUrl?: string | null, cheque: { __typename?: 'CarteVacancesAbonnementCheque', ORDRE: string, ADRESSE: string, CODE_POSTAL: string, VILLE: string }, virement: { __typename?: 'CarteVacancesAbonnementVirement', IBAN: string, BIC: string, BANQUE: string }, abonnements?: { __typename?: 'PaginatedCarteVacancesAbonnements', data: Array<{ __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null } };

export type CarteVacancesAbonnementCommandesQueryVariables = Exact<{
  carteVacancesAbonnementCommandes_data_abonnements_pagination?: InputMaybe<OffsetPaginationInput>;
  input?: InputMaybe<CarteVacancesAbonnementCommandesInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type CarteVacancesAbonnementCommandesQuery = { __typename?: 'Query', carteVacancesAbonnementCommandes: { __typename?: 'PaginatedCarteVacancesAbonnementCommandes', data: Array<{ __typename?: 'CarteVacancesAbonnementCommande', id: string, reference: string, statut: CarteVacancesAbonnementCommandeStatut, montant: any, montantHT: any, montantTVA: any, montantAbonnements: any, montantAbonnementsHT: any, montantAbonnementsTVA: any, montantCartes: any, montantCartesHT: any, montantCartesTVA: any, montantRemise: any, montantRemiseHT: any, montantRemiseTVA: any, tauxTVA: any, quantiteAbonnements: number, duree: number, physique: boolean, dateCommande: any, typePaiement: CarteVacancesAbonnementTypePaiement, factureUrl?: string | null, cheque: { __typename?: 'CarteVacancesAbonnementCheque', ORDRE: string, ADRESSE: string, CODE_POSTAL: string, VILLE: string }, virement: { __typename?: 'CarteVacancesAbonnementVirement', IBAN: string, BIC: string, BANQUE: string }, abonnements?: { __typename?: 'PaginatedCarteVacancesAbonnements', data: Array<{ __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type CarteVacancesAbonnementsQueryVariables = Exact<{
  input?: InputMaybe<CarteVacancesAbonnementsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type CarteVacancesAbonnementsQuery = { __typename?: 'Query', carteVacancesAbonnements: { __typename?: 'PaginatedCarteVacancesAbonnements', data: Array<{ __typename?: 'CarteVacancesAbonnement', id: string, statut: CarteVacancesAbonnementStatut, dateDebut: any, dateFin: any, physique: boolean, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type CarteVacancesAbonnementStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type CarteVacancesAbonnementStatsQuery = { __typename?: 'Query', carteVacancesAbonnementStats?: Array<{ __typename?: 'CarteVacancesAbonnementStats', statut: CarteVacancesAbonnementStatut, count: number }> | null };

export type CarteVacancesAbonnementOptionsQueryVariables = Exact<{
  input?: InputMaybe<CarteVacancesAbonnementOptionsInput>;
}>;


export type CarteVacancesAbonnementOptionsQuery = { __typename?: 'Query', carteVacancesAbonnementOptions: Array<{ __typename?: 'CarteVacancesAbonnementOption', id: string, libelle: string, duree: number, moisOfferts: number, pourcentageRemise: any }> };

export type CarteVacancesAbonnementSimulationQueryVariables = Exact<{
  input: CarteVacancesAbonnementSimulationInput;
}>;


export type CarteVacancesAbonnementSimulationQuery = { __typename?: 'Query', carteVacancesAbonnementSimulation: { __typename?: 'CarteVacancesAbonnementSimulation', coutAbonnementUnitaire: any, coutCartePhysiqueUnitaire: any, montant: any, montantHT: any, montantTVA: any, montantAbonnements: any, montantAbonnementsHT: any, montantAbonnementsTVA: any, montantCartes: any, montantCartesHT: any, montantCartesTVA: any, montantRemise: any, montantRemiseHT: any, montantRemiseTVA: any, tauxTVA: any, quantiteAbonnements: number, quantiteAbonnementsIgnores: number, duree: number, physique: boolean, dateCommande: any, typePaiement: CarteVacancesAbonnementTypePaiement, solde?: any | null } };

export type CarteVacancesAlimentationSimulationQueryVariables = Exact<{
  input: CarteVacancesAlimentationSimulationInput;
}>;


export type CarteVacancesAlimentationSimulationQuery = { __typename?: 'Query', carteVacancesAlimentationSimulation: { __typename?: 'CarteVacancesAlimentationSimulation', frais: any, soldeUserPersonnalWallet: any, soldeCarte: any, montant: any } };

export type WalletsDistributionsQueryVariables = Exact<{
  input?: InputMaybe<WalletsDistributionsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type WalletsDistributionsQuery = { __typename?: 'Query', walletsDistributions: { __typename?: 'PaginatedWalletsDistributions', data: Array<{ __typename?: 'WalletsDistribution', id: string, nom: string, reference?: string | null, typeDistribution: WalletsDistributionType, statut: WalletsDistributionStatut, motifId?: string | null, dateDebut: any, dateFin: any, dateCloture?: any | null, conditionsUtilisation?: string | null, montant: any, montantRemise: any, solde: any, pourcentageConsomme: number, montantRembourse?: any | null, cnt: number, secured: boolean, factureUrl?: string | null, createdAt: any, updatedAt: any, motif?: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null } | null, distribuables: Array<{ __typename?: 'WalletsDistributionCarteConfig', typeDistribuable: WalletsDistributionDistribuableType } | { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'WalletsDistributionReductionRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any }, quotaRule?: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } | null, subventionnables: Array<{ __typename?: 'WalletsDistributionSubventionnable', subventionnableType: WalletsDistributionSubventionnableType, subventionnableId: string, subventionnableNom: string }>, catalogue?: { __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null } | null } | { __typename?: 'WalletsDistributionRemboursementRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } }>, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type WalletsDistributionMotifsQueryVariables = Exact<{
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type WalletsDistributionMotifsQuery = { __typename?: 'Query', walletsDistributionMotifs: { __typename?: 'PaginatedWalletsDistributionMotifs', data: Array<{ __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type WalletsDistributionEccMotifsQueryVariables = Exact<{
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type WalletsDistributionEccMotifsQuery = { __typename?: 'Query', walletsDistributionECCMotifs: { __typename?: 'PaginatedWalletsDistributionMotifs', data: Array<{ __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type WalletsDistributionCultureMotifQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletsDistributionCultureMotifQuery = { __typename?: 'Query', walletsDistributionCultureMotif: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null } };

export type WalletsDistributionQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type WalletsDistributionQuery = { __typename?: 'Query', walletsDistribution: { __typename?: 'WalletsDistribution', id: string, nom: string, reference?: string | null, typeDistribution: WalletsDistributionType, statut: WalletsDistributionStatut, motifId?: string | null, dateDebut: any, dateFin: any, dateCloture?: any | null, conditionsUtilisation?: string | null, montant: any, montantRemise: any, solde: any, pourcentageConsomme: number, montantRembourse?: any | null, cnt: number, secured: boolean, factureUrl?: string | null, createdAt: any, updatedAt: any, motif?: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null } | null, distribuables: Array<{ __typename?: 'WalletsDistributionCarteConfig', typeDistribuable: WalletsDistributionDistribuableType } | { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'WalletsDistributionReductionRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any }, quotaRule?: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } | null, subventionnables: Array<{ __typename?: 'WalletsDistributionSubventionnable', subventionnableType: WalletsDistributionSubventionnableType, subventionnableId: string, subventionnableNom: string }>, catalogue?: { __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null, categories?: Array<{ __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string }> | null } | null } | { __typename?: 'WalletsDistributionRemboursementRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } }>, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type WalletsDistributionMotifQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type WalletsDistributionMotifQuery = { __typename?: 'Query', walletsDistributionMotif: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null } };

export type SimulateWalletsDistributionQueryVariables = Exact<{
  input: WalletsDistributionInput;
}>;


export type SimulateWalletsDistributionQuery = { __typename?: 'Query', simulateWalletsDistribution: { __typename?: 'WalletsDistributionSimulation', solde: any, montantDistribution: any, montantRemise: any, nbrUsers: number } };

export type WalletsDistributionSimulationQueryVariables = Exact<{
  input: WalletsDistributionSimulationInput;
}>;


export type WalletsDistributionSimulationQuery = { __typename?: 'Query', walletsDistributionSimulation: { __typename?: 'WalletsDistributionSimulation', solde: any, montantDistribution: any, montantRemise: any, nbrUsers: number } };

export type WalletsOrganismeWalletQueryVariables = Exact<{
  walletsOrganismeWallet_mouvements_pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type WalletsOrganismeWalletQuery = { __typename?: 'Query', walletsOrganismeWallet: { __typename?: 'WalletsOrganismeWallet', id: string, nom: string, solde: any, montantAttente: any, iban: string, bic: string, culture: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, ecc: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, sub: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, mouvements?: { __typename?: 'PaginatedWalletsMouvements', data: Array<{ __typename?: 'WalletsOrganismeWalletMvt', id: string, nom: string, montant: any, solde: any, dateMvt: any }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null } };

export type WalletsProvisionningsQueryVariables = Exact<{
  walletsProvisionnings_data_organismeWallet_mouvements_pagination?: InputMaybe<OffsetPaginationInput>;
  input?: InputMaybe<WalletsProvisionningsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type WalletsProvisionningsQuery = { __typename?: 'Query', walletsProvisionnings: { __typename?: 'PaginatedWalletsProvisionnings', data: Array<{ __typename?: 'WalletsProvisionning', id: string, nom?: string | null, montant: any, montantAttente: any, montantRemise: any, typeProvisionning: WalletsProvisionningTypeProvisionning, typePaiement: WalletsProvisionningTypePaiement, statut: WalletsProvisionningStatut, dateReception?: any | null, factureUrl?: string | null, createdAt: any, updatedAt: any, organismeWallet: { __typename?: 'WalletsOrganismeWallet', id: string, nom: string, solde: any, montantAttente: any, iban: string, bic: string, culture: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, ecc: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, sub: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, mouvements?: { __typename?: 'PaginatedWalletsMouvements', data: Array<{ __typename?: 'WalletsOrganismeWalletMvt', id: string, nom: string, montant: any, solde: any, dateMvt: any }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type WalletsProvisionningQueryVariables = Exact<{
  walletsProvisionning_organismeWallet_mouvements_pagination?: InputMaybe<OffsetPaginationInput>;
  input: IdentifiedInput;
}>;


export type WalletsProvisionningQuery = { __typename?: 'Query', walletsProvisionning: { __typename?: 'WalletsProvisionning', id: string, nom?: string | null, montant: any, montantAttente: any, montantRemise: any, typeProvisionning: WalletsProvisionningTypeProvisionning, typePaiement: WalletsProvisionningTypePaiement, statut: WalletsProvisionningStatut, dateReception?: any | null, factureUrl?: string | null, createdAt: any, updatedAt: any, organismeWallet: { __typename?: 'WalletsOrganismeWallet', id: string, nom: string, solde: any, montantAttente: any, iban: string, bic: string, culture: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, ecc: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, sub: { __typename?: 'WalletsOrganismeVirtualWallet', solde: any, montantAttente: any, provisionningStats: { __typename?: 'WalletsProvisionningStats', since: any, count: number, montant: any, montantRemise: any }, distributionStats: { __typename?: 'WalletsDistributionStats', since: any, count: number, solde: any, montant: any, montantRembourse: any, walletCount: number } }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, mouvements?: { __typename?: 'PaginatedWalletsMouvements', data: Array<{ __typename?: 'WalletsOrganismeWalletMvt', id: string, nom: string, montant: any, solde: any, dateMvt: any }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } };

export type WalletsDistributionUserWalletsQueryVariables = Exact<{
  input: IdentifiedInput;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type WalletsDistributionUserWalletsQuery = { __typename?: 'Query', walletsDistributionUserWallets: { __typename?: 'PaginatedWalletsUserWallets', data: Array<{ __typename?: 'WalletsUserWallet', id: string, nom: string, distributionId: number, montantInitial: any, solde: any, used: boolean, usedAt?: any | null, nbrRelances: number, actif: boolean, statut: WalletsUserWalletStatut, pourcentageConsomme: number, espace: BonsplansEspace, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null }, distribution: { __typename?: 'WalletsUserWalletDistribution', id: string, nom: string, typeDistribution: WalletsDistributionType, motifId?: string | null, dateDebut: any, dateFin: any, conditionsUtilisation?: string | null, motif?: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | null, distribuables: Array<{ __typename?: 'WalletsDistributionCarteConfig', typeDistribuable: WalletsDistributionDistribuableType } | { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null } | { __typename?: 'WalletsDistributionReductionRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } } | { __typename?: 'WalletsDistributionRemboursementRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } }> }, capabilities: { __typename?: 'WalletsUserWalletCapabilities', share: boolean, use: boolean }, vedetteEmplacement?: { __typename?: 'MisesEnAvantVedetteEmplacement', emplacementType: MisesEnAvantVedetteEmplacementType, emplacementId?: string | null } | null, quota?: { __typename?: 'WalletsUserWalletQuota', id: string, quotaConsomme: any, dateDebut?: any | null, dateFin?: any | null, quotaRule: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } } | null }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type WalletsUserWalletsQueryVariables = Exact<{
  input?: InputMaybe<WalletsUserWalletsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type WalletsUserWalletsQuery = { __typename?: 'Query', walletsUserWallets: { __typename?: 'PaginatedWalletsUserWallets', data: Array<{ __typename?: 'WalletsUserWallet', id: string, nom: string, distributionId: number, montantInitial: any, solde: any, used: boolean, usedAt?: any | null, nbrRelances: number, actif: boolean, statut: WalletsUserWalletStatut, pourcentageConsomme: number, espace: BonsplansEspace, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null }, distribution: { __typename?: 'WalletsUserWalletDistribution', id: string, nom: string, typeDistribution: WalletsDistributionType, motifId?: string | null, dateDebut: any, dateFin: any, conditionsUtilisation?: string | null, motif?: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | null, distribuables: Array<{ __typename?: 'WalletsDistributionCarteConfig', typeDistribuable: WalletsDistributionDistribuableType } | { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null } | { __typename?: 'WalletsDistributionReductionRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } } | { __typename?: 'WalletsDistributionRemboursementRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } }> }, capabilities: { __typename?: 'WalletsUserWalletCapabilities', share: boolean, use: boolean }, vedetteEmplacement?: { __typename?: 'MisesEnAvantVedetteEmplacement', emplacementType: MisesEnAvantVedetteEmplacementType, emplacementId?: string | null } | null, quota?: { __typename?: 'WalletsUserWalletQuota', id: string, quotaConsomme: any, dateDebut?: any | null, dateFin?: any | null, quotaRule: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } } | null }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type WalletsAllUserWalletsQueryVariables = Exact<{
  input?: InputMaybe<WalletsAllUserWalletsInput>;
  pagination?: InputMaybe<OffsetPaginationInput>;
}>;


export type WalletsAllUserWalletsQuery = { __typename?: 'Query', walletsAllUserWallets: { __typename?: 'PaginatedWalletsUserWallets', data: Array<{ __typename?: 'WalletsUserWallet', id: string, nom: string, distributionId: number, montantInitial: any, solde: any, used: boolean, usedAt?: any | null, nbrRelances: number, actif: boolean, statut: WalletsUserWalletStatut, pourcentageConsomme: number, espace: BonsplansEspace, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null }, distribution: { __typename?: 'WalletsUserWalletDistribution', id: string, nom: string, typeDistribution: WalletsDistributionType, motifId?: string | null, dateDebut: any, dateFin: any, conditionsUtilisation?: string | null, motif?: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | null, distribuables: Array<{ __typename?: 'WalletsDistributionCarteConfig', typeDistribuable: WalletsDistributionDistribuableType } | { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null } | { __typename?: 'WalletsDistributionReductionRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } } | { __typename?: 'WalletsDistributionRemboursementRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } }> }, capabilities: { __typename?: 'WalletsUserWalletCapabilities', share: boolean, use: boolean }, vedetteEmplacement?: { __typename?: 'MisesEnAvantVedetteEmplacement', emplacementType: MisesEnAvantVedetteEmplacementType, emplacementId?: string | null } | null, quota?: { __typename?: 'WalletsUserWalletQuota', id: string, quotaConsomme: any, dateDebut?: any | null, dateFin?: any | null, quotaRule: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } } | null }>, pagination: { __typename?: 'OffsetPagination', count: number, offset: number, firstItem?: number | null, lastItem?: number | null, limit: number, total: number } } };

export type WalletsUserWalletQueryVariables = Exact<{
  input: IdentifiedInput;
}>;


export type WalletsUserWalletQuery = { __typename?: 'Query', walletsUserWallet: { __typename?: 'WalletsUserWallet', id: string, nom: string, distributionId: number, montantInitial: any, solde: any, used: boolean, usedAt?: any | null, nbrRelances: number, actif: boolean, statut: WalletsUserWalletStatut, pourcentageConsomme: number, espace: BonsplansEspace, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, distribution: { __typename?: 'WalletsUserWalletDistribution', id: string, nom: string, typeDistribution: WalletsDistributionType, motifId?: string | null, dateDebut: any, dateFin: any, conditionsUtilisation?: string | null, motif?: { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null } | null, distribuables: Array<{ __typename?: 'WalletsDistributionCarteConfig', typeDistribuable: WalletsDistributionDistribuableType } | { __typename?: 'WalletsDistributionMotif', id: string, typeDistribuable: WalletsDistributionDistribuableType, nom: string, fontColor: WalletsDistributionMotifFontColor, duree: number, dureeMax: number, conditionsUtilisation?: string | null, produitPapierId?: string | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'WalletsDistributionReductionRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any }, quotaRule?: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } | null, subventionnables: Array<{ __typename?: 'WalletsDistributionSubventionnable', subventionnableType: WalletsDistributionSubventionnableType, subventionnableId: string, subventionnableNom: string }>, catalogue?: { __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null } | null } | { __typename?: 'WalletsDistributionRemboursementRule', typeDistribuable: WalletsDistributionDistribuableType, subventionRule: { __typename?: 'WalletsDistributionSubventionRuleCagnotte', typeSubventionRule: WalletsDistributionSubventionRuleType } | { __typename?: 'WalletsDistributionSubventionRuleFixe', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } | { __typename?: 'WalletsDistributionSubventionRulePourcentage', typeSubventionRule: WalletsDistributionSubventionRuleType, value: any } }> }, capabilities: { __typename?: 'WalletsUserWalletCapabilities', share: boolean, use: boolean }, vedetteEmplacement?: { __typename?: 'MisesEnAvantVedetteEmplacement', emplacementType: MisesEnAvantVedetteEmplacementType, emplacementId?: string | null } | null, quota?: { __typename?: 'WalletsUserWalletQuota', id: string, quotaConsomme: any, dateDebut?: any | null, dateFin?: any | null, quotaRule: { __typename?: 'WalletsDistributionQuotaRule', quotaType: WalletsDistributionQuotaType, quota: any, quotaRenouvelable: WalletsDistributionQuotaRenouvelable } } | null } };

export type MisesEnAvantVedettesQueryVariables = Exact<{
  misesEnAvantVedettes_produit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  misesEnAvantVedettes_produit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input: MisesEnAvantVedettesInput;
}>;


export type MisesEnAvantVedettesQuery = { __typename?: 'Query', misesEnAvantVedettes: Array<{ __typename?: 'MisesEnAvantVedette', id: string, cta: string, targetType: MisesEnAvantVedetteTargetType, targetId?: string | null, targetUrl?: string | null, dateDebut: any, dateFin: any, target: { __typename?: 'MisesEnAvantVedetteTarget', type: MisesEnAvantVedetteTargetType, id?: string | null, url?: string | null }, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null, catalogue?: { __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null, categories?: Array<{ __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string }> | null } | null, categorie?: { __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string } | null, produit?: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } | null }> };

export type MisesEnAvantVedetteQueryVariables = Exact<{
  misesEnAvantVedette_produit_searchArticlesFiltres_input?: InputMaybe<BonsplansProduitSearchArticlesInput>;
  misesEnAvantVedette_produit_searchArticles_input: BonsplansProduitSearchArticlesInput;
  input: IdentifiedInput;
}>;


export type MisesEnAvantVedetteQuery = { __typename?: 'Query', misesEnAvantVedette: { __typename?: 'MisesEnAvantVedette', id: string, cta: string, targetType: MisesEnAvantVedetteTargetType, targetId?: string | null, targetUrl?: string | null, dateDebut: any, dateFin: any, target: { __typename?: 'MisesEnAvantVedetteTarget', type: MisesEnAvantVedetteTargetType, id?: string | null, url?: string | null }, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null, catalogue?: { __typename?: 'BonsplansCatalogue', id: string, nom: string, univers?: BonsplansUnivers | null, accroche?: string | null, visuel?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null, categories?: Array<{ __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string }> | null } | null, categorie?: { __typename?: 'BonsplansCategory', id: string, catalogueId: string, parentId?: string | null, level: number, nom: string } | null, produit?: { __typename?: 'BonsplansProduit', id: string, nom: string, type: BonsplansProduitType, description?: string | null, aide?: string | null, offre?: string | null, coordonnees?: { __typename?: 'BonsplansCoordonnees', nom?: string | null, adresse1?: string | null, adresse2?: string | null, zipcode?: string | null, city?: string | null, area?: string | null, country?: string | null, lat?: string | null, lng?: string | null, website?: string | null } | null, marketingTags: Array<{ __typename?: 'BonsplansMarketingTag', id: string, name: string, type: BonsplansMarketingTagType }>, logo?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, cover?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, articles?: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }> | null, searchArticlesFiltres?: Array<{ __typename?: 'BonsplansProduitFiltreDate', type: BonsplansProduitFiltreType, name: string, label?: string | null } | { __typename?: 'BonsplansProduitFiltreOptions', type: BonsplansProduitFiltreType, name: string, label?: string | null }> | null, searchArticles: Array<{ __typename?: 'BonsplansArticle', id: string, nom: string, detail?: string | null, hasDescription: boolean, description?: string | null, quantiteMin?: number | null, quantiteMax?: number | null, prixPublic: any, prixTTC: any, sku: { __typename?: 'BonsplansSku', source: string, productId: string, articleId: string }, carteCadeau?: { __typename?: 'BonsplansArticleCarteCadeau', valeurFacialeMin?: any | null, valeurFacialeMax?: any | null } | null, volatiles?: Array<{ __typename?: 'BonsplansVolatile', name: string, value: string }> | null }>, offrePartenaire?: { __typename?: 'BonsplansProduitOffrePartenaire', redirectUrl: string } | null } | null } };

export type WorkflowChangedSubscriptionVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type WorkflowChangedSubscription = { __typename?: 'Subscription', workflowChanged?: { __typename?: 'Workflow', id: string, type: WorkflowType, steps: Array<{ __typename?: 'WorkflowStep', action: string, done: boolean }> } | null };

export type PostPublishedSubscriptionVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type PostPublishedSubscription = { __typename?: 'Subscription', postPublished?: { __typename?: 'Post', id: string, categoryId?: string | null, title?: string | null, textContent?: string | null, publish: boolean, status: PostStatus, publishedAt?: any | null, author: { __typename?: 'DeprecatedAuthor', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }> | null } | null }, authorV2: { __typename?: 'MinimalistOrganisme', id?: string | null, displayName: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null } | { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, category?: { __typename?: 'PostCategory', id: string, label: string, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, group?: { __typename?: 'UserGroup', id: string, nom: string, code: string, capabilities?: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } | null } | null, content: { __typename?: 'ActualiteContent', id?: string | null, type: ContentType } | { __typename?: 'AlbumContent', id?: string | null, type: ContentType } | { __typename?: 'EventContent', id?: string | null, type: ContentType } | { __typename?: 'PvReunionContent', id: string, type: ContentType } | { __typename?: 'SondageContent', id?: string | null, type: ContentType }, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number }, reactions: Array<{ __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string, avatar?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null } | null }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } }>, comments: Array<{ __typename?: 'Comment', id: string, content: string, createdAt: any, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean } }>, userReaction?: { __typename?: 'Reaction', id: string, type: ReactionType, user: { __typename?: 'MinimalistUser', id?: string | null, displayName: string, nom?: string | null, email: string }, capabilities: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean } } | null, images: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null }>, image?: { __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null, resized?: Array<{ __typename?: 'Media', id: string, name: string, mimetype: string, size?: number | null, url: string, resolution?: number | null, createdAt?: any | null }> | null } | null, capabilities: { __typename?: 'PostCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, comment: boolean, commentV2: { __typename?: 'CommentCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean, report: boolean }, reaction: { __typename?: 'CRUDCapabilities', read: boolean, create: boolean, update: boolean, delete: boolean }, content: { __typename?: 'PostContentCapabilities', actualite: { __typename?: 'PostContentCapability', create: boolean }, album: { __typename?: 'PostContentCapability', create: boolean }, event: { __typename?: 'PostContentCapability', create: boolean }, sondage: { __typename?: 'PostSondageContentCapability', create: boolean, respond: boolean }, pvReunion: { __typename?: 'PostContentCapability', create: boolean } } } } | null };

export type PostInteractionsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PostInteractionsSubscription = { __typename?: 'Subscription', postInteractions?: { __typename?: 'PostInteractionsSubscription', postId: string, interactions: { __typename?: 'PostInteractions', comment: number, like: number, love: number, praise: number, surprised: number, thinking: number } } | null };

export type WalletsOrganismeWalletMvtSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type WalletsOrganismeWalletMvtSubscription = { __typename?: 'Subscription', walletsOrganismeWalletMvt?: { __typename?: 'WalletsOrganismeWalletMvt', id: string, nom: string, montant: any, solde: any, dateMvt: any } | null };

export type WalletsUserWalletMvtSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type WalletsUserWalletMvtSubscription = { __typename?: 'Subscription', walletsUserWalletMvt?: { __typename?: 'WalletsUserWalletMvt', id: string, nom: string, montant: any, solde: any, walletId: number, dateMvt: any } | null };


export const SigninDocument = gql`
    mutation signin($input: SigninInput!) {
  signin(input: $input) {
    authToken
    apiToken
    expires
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const SsoDocument = gql`
    mutation sso {
  sso {
    authToken
    apiToken
    expires
  }
}
    `;
export type SsoMutationFn = Apollo.MutationFunction<SsoMutation, SsoMutationVariables>;

/**
 * __useSsoMutation__
 *
 * To run a mutation, you first call `useSsoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSsoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ssoMutation, { data, loading, error }] = useSsoMutation({
 *   variables: {
 *   },
 * });
 */
export function useSsoMutation(baseOptions?: Apollo.MutationHookOptions<SsoMutation, SsoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SsoMutation, SsoMutationVariables>(SsoDocument, options);
      }
export type SsoMutationHookResult = ReturnType<typeof useSsoMutation>;
export type SsoMutationResult = Apollo.MutationResult<SsoMutation>;
export type SsoMutationOptions = Apollo.BaseMutationOptions<SsoMutation, SsoMutationVariables>;
export const RefreshAuthTokenDocument = gql`
    mutation refreshAuthToken($input: RefreshAuthTokenInput) {
  refreshAuthToken(input: $input) {
    authToken
    apiToken
    expires
  }
}
    `;
export type RefreshAuthTokenMutationFn = Apollo.MutationFunction<RefreshAuthTokenMutation, RefreshAuthTokenMutationVariables>;

/**
 * __useRefreshAuthTokenMutation__
 *
 * To run a mutation, you first call `useRefreshAuthTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAuthTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAuthTokenMutation, { data, loading, error }] = useRefreshAuthTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshAuthTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshAuthTokenMutation, RefreshAuthTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshAuthTokenMutation, RefreshAuthTokenMutationVariables>(RefreshAuthTokenDocument, options);
      }
export type RefreshAuthTokenMutationHookResult = ReturnType<typeof useRefreshAuthTokenMutation>;
export type RefreshAuthTokenMutationResult = Apollo.MutationResult<RefreshAuthTokenMutation>;
export type RefreshAuthTokenMutationOptions = Apollo.BaseMutationOptions<RefreshAuthTokenMutation, RefreshAuthTokenMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SendTfaCodeDocument = gql`
    mutation sendTfaCode {
  sendTfaCode
}
    `;
export type SendTfaCodeMutationFn = Apollo.MutationFunction<SendTfaCodeMutation, SendTfaCodeMutationVariables>;

/**
 * __useSendTfaCodeMutation__
 *
 * To run a mutation, you first call `useSendTfaCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendTfaCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendTfaCodeMutation, { data, loading, error }] = useSendTfaCodeMutation({
 *   variables: {
 *   },
 * });
 */
export function useSendTfaCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendTfaCodeMutation, SendTfaCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendTfaCodeMutation, SendTfaCodeMutationVariables>(SendTfaCodeDocument, options);
      }
export type SendTfaCodeMutationHookResult = ReturnType<typeof useSendTfaCodeMutation>;
export type SendTfaCodeMutationResult = Apollo.MutationResult<SendTfaCodeMutation>;
export type SendTfaCodeMutationOptions = Apollo.BaseMutationOptions<SendTfaCodeMutation, SendTfaCodeMutationVariables>;
export const SendResetPasswordDocument = gql`
    mutation sendResetPassword($input: SendResetPasswordInput!) {
  sendResetPassword(input: $input)
}
    `;
export type SendResetPasswordMutationFn = Apollo.MutationFunction<SendResetPasswordMutation, SendResetPasswordMutationVariables>;

/**
 * __useSendResetPasswordMutation__
 *
 * To run a mutation, you first call `useSendResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendResetPasswordMutation, { data, loading, error }] = useSendResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<SendResetPasswordMutation, SendResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendResetPasswordMutation, SendResetPasswordMutationVariables>(SendResetPasswordDocument, options);
      }
export type SendResetPasswordMutationHookResult = ReturnType<typeof useSendResetPasswordMutation>;
export type SendResetPasswordMutationResult = Apollo.MutationResult<SendResetPasswordMutation>;
export type SendResetPasswordMutationOptions = Apollo.BaseMutationOptions<SendResetPasswordMutation, SendResetPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SendEmailAccountVerificationDocument = gql`
    mutation sendEmailAccountVerification($input: SendEmailAccountVerification!) {
  sendEmailAccountVerification(input: $input)
}
    `;
export type SendEmailAccountVerificationMutationFn = Apollo.MutationFunction<SendEmailAccountVerificationMutation, SendEmailAccountVerificationMutationVariables>;

/**
 * __useSendEmailAccountVerificationMutation__
 *
 * To run a mutation, you first call `useSendEmailAccountVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailAccountVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailAccountVerificationMutation, { data, loading, error }] = useSendEmailAccountVerificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendEmailAccountVerificationMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailAccountVerificationMutation, SendEmailAccountVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendEmailAccountVerificationMutation, SendEmailAccountVerificationMutationVariables>(SendEmailAccountVerificationDocument, options);
      }
export type SendEmailAccountVerificationMutationHookResult = ReturnType<typeof useSendEmailAccountVerificationMutation>;
export type SendEmailAccountVerificationMutationResult = Apollo.MutationResult<SendEmailAccountVerificationMutation>;
export type SendEmailAccountVerificationMutationOptions = Apollo.BaseMutationOptions<SendEmailAccountVerificationMutation, SendEmailAccountVerificationMutationVariables>;
export const SendPhoneNumberAccountVerificationDocument = gql`
    mutation sendPhoneNumberAccountVerification($input: SendPhoneNumberAccountVerification!) {
  sendPhoneNumberAccountVerification(input: $input)
}
    `;
export type SendPhoneNumberAccountVerificationMutationFn = Apollo.MutationFunction<SendPhoneNumberAccountVerificationMutation, SendPhoneNumberAccountVerificationMutationVariables>;

/**
 * __useSendPhoneNumberAccountVerificationMutation__
 *
 * To run a mutation, you first call `useSendPhoneNumberAccountVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPhoneNumberAccountVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPhoneNumberAccountVerificationMutation, { data, loading, error }] = useSendPhoneNumberAccountVerificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendPhoneNumberAccountVerificationMutation(baseOptions?: Apollo.MutationHookOptions<SendPhoneNumberAccountVerificationMutation, SendPhoneNumberAccountVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendPhoneNumberAccountVerificationMutation, SendPhoneNumberAccountVerificationMutationVariables>(SendPhoneNumberAccountVerificationDocument, options);
      }
export type SendPhoneNumberAccountVerificationMutationHookResult = ReturnType<typeof useSendPhoneNumberAccountVerificationMutation>;
export type SendPhoneNumberAccountVerificationMutationResult = Apollo.MutationResult<SendPhoneNumberAccountVerificationMutation>;
export type SendPhoneNumberAccountVerificationMutationOptions = Apollo.BaseMutationOptions<SendPhoneNumberAccountVerificationMutation, SendPhoneNumberAccountVerificationMutationVariables>;
export const UpdateDeviceDocument = gql`
    mutation updateDevice($input: DeviceInput!) {
  updateDevice(input: $input) {
    id
    deviceUid
    deviceOs
    deviceModel
    pushToken
    pushEnabled
    appVersion
    systemVersion
    buildNumber
    createdAt
    updatedAt
  }
}
    `;
export type UpdateDeviceMutationFn = Apollo.MutationFunction<UpdateDeviceMutation, UpdateDeviceMutationVariables>;

/**
 * __useUpdateDeviceMutation__
 *
 * To run a mutation, you first call `useUpdateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeviceMutation, { data, loading, error }] = useUpdateDeviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDeviceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeviceMutation, UpdateDeviceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeviceMutation, UpdateDeviceMutationVariables>(UpdateDeviceDocument, options);
      }
export type UpdateDeviceMutationHookResult = ReturnType<typeof useUpdateDeviceMutation>;
export type UpdateDeviceMutationResult = Apollo.MutationResult<UpdateDeviceMutation>;
export type UpdateDeviceMutationOptions = Apollo.BaseMutationOptions<UpdateDeviceMutation, UpdateDeviceMutationVariables>;
export const UploadMediaDocument = gql`
    mutation uploadMedia($input: UploadInput!) {
  uploadMedia(input: $input) {
    id
    name
    mimetype
    size
    url
    resolution
    resized {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
    `;
export type UploadMediaMutationFn = Apollo.MutationFunction<UploadMediaMutation, UploadMediaMutationVariables>;

/**
 * __useUploadMediaMutation__
 *
 * To run a mutation, you first call `useUploadMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMediaMutation, { data, loading, error }] = useUploadMediaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadMediaMutation(baseOptions?: Apollo.MutationHookOptions<UploadMediaMutation, UploadMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadMediaMutation, UploadMediaMutationVariables>(UploadMediaDocument, options);
      }
export type UploadMediaMutationHookResult = ReturnType<typeof useUploadMediaMutation>;
export type UploadMediaMutationResult = Apollo.MutationResult<UploadMediaMutation>;
export type UploadMediaMutationOptions = Apollo.BaseMutationOptions<UploadMediaMutation, UploadMediaMutationVariables>;
export const CreateOrganismeDocument = gql`
    mutation createOrganisme($input: CreateOrganismeInput!) {
  createOrganisme(input: $input) {
    id
    name
    address
    zipcode
    city
    country
    indicatif
    capabilities {
      Organisme {
        update
        createChild
      }
      ClubAvantages {
        read
        use
      }
      Bonsplans {
        stats
      }
      Contact {
        read
        create
        update
        delete
      }
      ContactCategory {
        read
        create
        update
        delete
      }
      ContactProperty {
        read
        create
        update
        delete
      }
      DistributionCulture {
        read
        create
        update
        delete
      }
      DistributionEcc {
        read
        create
        update
        delete
      }
      DistributionSub {
        read
        create
        update
        delete
      }
      DistributionVacances {
        read
        create
        update
        delete
      }
      CarteVacancesAbonnement {
        read
        create
        useOptionsPaiement
      }
      Ecc {
        preview
        use
      }
      OrganismeWallet {
        read
        create
        update
        delete
      }
      Post {
        read
        create
        update
        delete
        commentV2 {
          read
          create
          update
          delete
          report
        }
        comment
        reaction {
          read
          create
          update
          delete
        }
        content {
          actualite {
            create
          }
          album {
            create
          }
          event {
            create
          }
          sondage {
            create
            respond
          }
          pvReunion {
            create
          }
        }
      }
      PostCategory {
        read
        create
        update
        delete
      }
      Provisionning {
        read
        create
        update
        delete
      }
      Report {
        read
      }
      User {
        read
        create
        createBatch
        update
        suspend
        resume
        delete
        resendInvitation
        sendInvitation
        changeRole
        changeGroups
      }
      UserGroup {
        read
        create
        update
        delete
      }
      Abonnement {
        read
        create
        update
        delete
      }
    }
    config {
      organisme {
        hasMultiOrganisme
        timezone
      }
      wallet {
        hasOrganismeWallet
        hasCarteVacances
        rembourserEccPerime
      }
    }
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
  }
}
    `;
export type CreateOrganismeMutationFn = Apollo.MutationFunction<CreateOrganismeMutation, CreateOrganismeMutationVariables>;

/**
 * __useCreateOrganismeMutation__
 *
 * To run a mutation, you first call `useCreateOrganismeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganismeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganismeMutation, { data, loading, error }] = useCreateOrganismeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrganismeMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrganismeMutation, CreateOrganismeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrganismeMutation, CreateOrganismeMutationVariables>(CreateOrganismeDocument, options);
      }
export type CreateOrganismeMutationHookResult = ReturnType<typeof useCreateOrganismeMutation>;
export type CreateOrganismeMutationResult = Apollo.MutationResult<CreateOrganismeMutation>;
export type CreateOrganismeMutationOptions = Apollo.BaseMutationOptions<CreateOrganismeMutation, CreateOrganismeMutationVariables>;
export const UpdateOrganismeDocument = gql`
    mutation updateOrganisme($input: UpdateOrganismeInput!) {
  updateOrganisme(input: $input) {
    id
    name
    address
    zipcode
    city
    country
    indicatif
    capabilities {
      Organisme {
        update
        createChild
      }
      ClubAvantages {
        read
        use
      }
      Bonsplans {
        stats
      }
      Contact {
        read
        create
        update
        delete
      }
      ContactCategory {
        read
        create
        update
        delete
      }
      ContactProperty {
        read
        create
        update
        delete
      }
      DistributionCulture {
        read
        create
        update
        delete
      }
      DistributionEcc {
        read
        create
        update
        delete
      }
      DistributionSub {
        read
        create
        update
        delete
      }
      DistributionVacances {
        read
        create
        update
        delete
      }
      CarteVacancesAbonnement {
        read
        create
        useOptionsPaiement
      }
      Ecc {
        preview
        use
      }
      OrganismeWallet {
        read
        create
        update
        delete
      }
      Post {
        read
        create
        update
        delete
        commentV2 {
          read
          create
          update
          delete
          report
        }
        comment
        reaction {
          read
          create
          update
          delete
        }
        content {
          actualite {
            create
          }
          album {
            create
          }
          event {
            create
          }
          sondage {
            create
            respond
          }
          pvReunion {
            create
          }
        }
      }
      PostCategory {
        read
        create
        update
        delete
      }
      Provisionning {
        read
        create
        update
        delete
      }
      Report {
        read
      }
      User {
        read
        create
        createBatch
        update
        suspend
        resume
        delete
        resendInvitation
        sendInvitation
        changeRole
        changeGroups
      }
      UserGroup {
        read
        create
        update
        delete
      }
      Abonnement {
        read
        create
        update
        delete
      }
    }
    config {
      organisme {
        hasMultiOrganisme
        timezone
      }
      wallet {
        hasOrganismeWallet
        hasCarteVacances
        rembourserEccPerime
      }
    }
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
  }
}
    `;
export type UpdateOrganismeMutationFn = Apollo.MutationFunction<UpdateOrganismeMutation, UpdateOrganismeMutationVariables>;

/**
 * __useUpdateOrganismeMutation__
 *
 * To run a mutation, you first call `useUpdateOrganismeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganismeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganismeMutation, { data, loading, error }] = useUpdateOrganismeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrganismeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrganismeMutation, UpdateOrganismeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrganismeMutation, UpdateOrganismeMutationVariables>(UpdateOrganismeDocument, options);
      }
export type UpdateOrganismeMutationHookResult = ReturnType<typeof useUpdateOrganismeMutation>;
export type UpdateOrganismeMutationResult = Apollo.MutationResult<UpdateOrganismeMutation>;
export type UpdateOrganismeMutationOptions = Apollo.BaseMutationOptions<UpdateOrganismeMutation, UpdateOrganismeMutationVariables>;
export const ChangeCurrentOrganizationDocument = gql`
    mutation changeCurrentOrganization($id: ID!) {
  changeCurrentOrganization(id: $id) {
    id
    firstname
    lastname
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    isDefaultAvatar
    incognito
    dateAnniversaire
    fonction
    about
    activatedAt
    created_at
    updated_at
    role
    permissions {
      subject
      action
    }
    currentOrganisme {
      id
      name
      address
      zipcode
      city
      country
      indicatif
      capabilities {
        Organisme {
          update
          createChild
        }
        ClubAvantages {
          read
          use
        }
        Bonsplans {
          stats
        }
        Contact {
          read
          create
          update
          delete
        }
        ContactCategory {
          read
          create
          update
          delete
        }
        ContactProperty {
          read
          create
          update
          delete
        }
        DistributionCulture {
          read
          create
          update
          delete
        }
        DistributionEcc {
          read
          create
          update
          delete
        }
        DistributionSub {
          read
          create
          update
          delete
        }
        DistributionVacances {
          read
          create
          update
          delete
        }
        CarteVacancesAbonnement {
          read
          create
          useOptionsPaiement
        }
        Ecc {
          preview
          use
        }
        OrganismeWallet {
          read
          create
          update
          delete
        }
        Post {
          read
          create
          update
          delete
          commentV2 {
            read
            create
            update
            delete
            report
          }
          comment
          reaction {
            read
            create
            update
            delete
          }
        }
        PostCategory {
          read
          create
          update
          delete
        }
        Provisionning {
          read
          create
          update
          delete
        }
        Report {
          read
        }
        User {
          read
          create
          createBatch
          update
          suspend
          resume
          delete
          resendInvitation
          sendInvitation
          changeRole
          changeGroups
        }
        UserGroup {
          read
          create
          update
          delete
        }
        Abonnement {
          read
          create
          update
          delete
        }
      }
      config {
        organisme {
          hasMultiOrganisme
          timezone
        }
        wallet {
          hasOrganismeWallet
          hasCarteVacances
          rembourserEccPerime
        }
      }
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
    }
    organismes {
      id
      name
      address
      zipcode
      city
      country
      indicatif
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
    }
    chatToken {
      token
      email
    }
  }
}
    `;
export type ChangeCurrentOrganizationMutationFn = Apollo.MutationFunction<ChangeCurrentOrganizationMutation, ChangeCurrentOrganizationMutationVariables>;

/**
 * __useChangeCurrentOrganizationMutation__
 *
 * To run a mutation, you first call `useChangeCurrentOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCurrentOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCurrentOrganizationMutation, { data, loading, error }] = useChangeCurrentOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChangeCurrentOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<ChangeCurrentOrganizationMutation, ChangeCurrentOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeCurrentOrganizationMutation, ChangeCurrentOrganizationMutationVariables>(ChangeCurrentOrganizationDocument, options);
      }
export type ChangeCurrentOrganizationMutationHookResult = ReturnType<typeof useChangeCurrentOrganizationMutation>;
export type ChangeCurrentOrganizationMutationResult = Apollo.MutationResult<ChangeCurrentOrganizationMutation>;
export type ChangeCurrentOrganizationMutationOptions = Apollo.BaseMutationOptions<ChangeCurrentOrganizationMutation, ChangeCurrentOrganizationMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UserExecuteImportDocument = gql`
    mutation userExecuteImport($input: ExecuteImportInput!, $importInput: UserExecuteImportInput!) {
  userExecuteImport(input: $input, importInput: $importInput)
}
    `;
export type UserExecuteImportMutationFn = Apollo.MutationFunction<UserExecuteImportMutation, UserExecuteImportMutationVariables>;

/**
 * __useUserExecuteImportMutation__
 *
 * To run a mutation, you first call `useUserExecuteImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserExecuteImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userExecuteImportMutation, { data, loading, error }] = useUserExecuteImportMutation({
 *   variables: {
 *      input: // value for 'input'
 *      importInput: // value for 'importInput'
 *   },
 * });
 */
export function useUserExecuteImportMutation(baseOptions?: Apollo.MutationHookOptions<UserExecuteImportMutation, UserExecuteImportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserExecuteImportMutation, UserExecuteImportMutationVariables>(UserExecuteImportDocument, options);
      }
export type UserExecuteImportMutationHookResult = ReturnType<typeof useUserExecuteImportMutation>;
export type UserExecuteImportMutationResult = Apollo.MutationResult<UserExecuteImportMutation>;
export type UserExecuteImportMutationOptions = Apollo.BaseMutationOptions<UserExecuteImportMutation, UserExecuteImportMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeactiveUserDocument = gql`
    mutation deactiveUser($id: ID!) {
  deactiveUser(id: $id) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
    }
  }
}
    `;
export type DeactiveUserMutationFn = Apollo.MutationFunction<DeactiveUserMutation, DeactiveUserMutationVariables>;

/**
 * __useDeactiveUserMutation__
 *
 * To run a mutation, you first call `useDeactiveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactiveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactiveUserMutation, { data, loading, error }] = useDeactiveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeactiveUserMutation(baseOptions?: Apollo.MutationHookOptions<DeactiveUserMutation, DeactiveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeactiveUserMutation, DeactiveUserMutationVariables>(DeactiveUserDocument, options);
      }
export type DeactiveUserMutationHookResult = ReturnType<typeof useDeactiveUserMutation>;
export type DeactiveUserMutationResult = Apollo.MutationResult<DeactiveUserMutation>;
export type DeactiveUserMutationOptions = Apollo.BaseMutationOptions<DeactiveUserMutation, DeactiveUserMutationVariables>;
export const ReactiveUserDocument = gql`
    mutation reactiveUser($id: ID!) {
  reactiveUser(id: $id) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
    }
  }
}
    `;
export type ReactiveUserMutationFn = Apollo.MutationFunction<ReactiveUserMutation, ReactiveUserMutationVariables>;

/**
 * __useReactiveUserMutation__
 *
 * To run a mutation, you first call `useReactiveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReactiveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reactiveUserMutation, { data, loading, error }] = useReactiveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReactiveUserMutation(baseOptions?: Apollo.MutationHookOptions<ReactiveUserMutation, ReactiveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReactiveUserMutation, ReactiveUserMutationVariables>(ReactiveUserDocument, options);
      }
export type ReactiveUserMutationHookResult = ReturnType<typeof useReactiveUserMutation>;
export type ReactiveUserMutationResult = Apollo.MutationResult<ReactiveUserMutation>;
export type ReactiveUserMutationOptions = Apollo.BaseMutationOptions<ReactiveUserMutation, ReactiveUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: ID!) {
  deleteUser(id: $id) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
    }
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const ChangeUserRoleDocument = gql`
    mutation changeUserRole($input: ChangeUserRoleInput!) {
  changeUserRole(input: $input) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
    }
  }
}
    `;
export type ChangeUserRoleMutationFn = Apollo.MutationFunction<ChangeUserRoleMutation, ChangeUserRoleMutationVariables>;

/**
 * __useChangeUserRoleMutation__
 *
 * To run a mutation, you first call `useChangeUserRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserRoleMutation, { data, loading, error }] = useChangeUserRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeUserRoleMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserRoleMutation, ChangeUserRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeUserRoleMutation, ChangeUserRoleMutationVariables>(ChangeUserRoleDocument, options);
      }
export type ChangeUserRoleMutationHookResult = ReturnType<typeof useChangeUserRoleMutation>;
export type ChangeUserRoleMutationResult = Apollo.MutationResult<ChangeUserRoleMutation>;
export type ChangeUserRoleMutationOptions = Apollo.BaseMutationOptions<ChangeUserRoleMutation, ChangeUserRoleMutationVariables>;
export const ChangeUserGroupsDocument = gql`
    mutation changeUserGroups($input: ChangeUserGroupsInput!) {
  changeUserGroups(input: $input) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
    }
  }
}
    `;
export type ChangeUserGroupsMutationFn = Apollo.MutationFunction<ChangeUserGroupsMutation, ChangeUserGroupsMutationVariables>;

/**
 * __useChangeUserGroupsMutation__
 *
 * To run a mutation, you first call `useChangeUserGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserGroupsMutation, { data, loading, error }] = useChangeUserGroupsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeUserGroupsMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserGroupsMutation, ChangeUserGroupsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeUserGroupsMutation, ChangeUserGroupsMutationVariables>(ChangeUserGroupsDocument, options);
      }
export type ChangeUserGroupsMutationHookResult = ReturnType<typeof useChangeUserGroupsMutation>;
export type ChangeUserGroupsMutationResult = Apollo.MutationResult<ChangeUserGroupsMutation>;
export type ChangeUserGroupsMutationOptions = Apollo.BaseMutationOptions<ChangeUserGroupsMutation, ChangeUserGroupsMutationVariables>;
export const ResendInvitationDocument = gql`
    mutation resendInvitation($id: ID!) {
  resendInvitation(id: $id) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
    }
  }
}
    `;
export type ResendInvitationMutationFn = Apollo.MutationFunction<ResendInvitationMutation, ResendInvitationMutationVariables>;

/**
 * __useResendInvitationMutation__
 *
 * To run a mutation, you first call `useResendInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendInvitationMutation, { data, loading, error }] = useResendInvitationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResendInvitationMutation(baseOptions?: Apollo.MutationHookOptions<ResendInvitationMutation, ResendInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendInvitationMutation, ResendInvitationMutationVariables>(ResendInvitationDocument, options);
      }
export type ResendInvitationMutationHookResult = ReturnType<typeof useResendInvitationMutation>;
export type ResendInvitationMutationResult = Apollo.MutationResult<ResendInvitationMutation>;
export type ResendInvitationMutationOptions = Apollo.BaseMutationOptions<ResendInvitationMutation, ResendInvitationMutationVariables>;
export const UserSendInvitationsDocument = gql`
    mutation userSendInvitations {
  userSendInvitations {
    count
  }
}
    `;
export type UserSendInvitationsMutationFn = Apollo.MutationFunction<UserSendInvitationsMutation, UserSendInvitationsMutationVariables>;

/**
 * __useUserSendInvitationsMutation__
 *
 * To run a mutation, you first call `useUserSendInvitationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSendInvitationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSendInvitationsMutation, { data, loading, error }] = useUserSendInvitationsMutation({
 *   variables: {
 *   },
 * });
 */
export function useUserSendInvitationsMutation(baseOptions?: Apollo.MutationHookOptions<UserSendInvitationsMutation, UserSendInvitationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSendInvitationsMutation, UserSendInvitationsMutationVariables>(UserSendInvitationsDocument, options);
      }
export type UserSendInvitationsMutationHookResult = ReturnType<typeof useUserSendInvitationsMutation>;
export type UserSendInvitationsMutationResult = Apollo.MutationResult<UserSendInvitationsMutation>;
export type UserSendInvitationsMutationOptions = Apollo.BaseMutationOptions<UserSendInvitationsMutation, UserSendInvitationsMutationVariables>;
export const CreateUserGroupDocument = gql`
    mutation createUserGroup($input: CreateUserGroupInput!) {
  createUserGroup(input: $input) {
    id
    nom
    code
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateUserGroupMutationFn = Apollo.MutationFunction<CreateUserGroupMutation, CreateUserGroupMutationVariables>;

/**
 * __useCreateUserGroupMutation__
 *
 * To run a mutation, you first call `useCreateUserGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserGroupMutation, { data, loading, error }] = useCreateUserGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserGroupMutation, CreateUserGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserGroupMutation, CreateUserGroupMutationVariables>(CreateUserGroupDocument, options);
      }
export type CreateUserGroupMutationHookResult = ReturnType<typeof useCreateUserGroupMutation>;
export type CreateUserGroupMutationResult = Apollo.MutationResult<CreateUserGroupMutation>;
export type CreateUserGroupMutationOptions = Apollo.BaseMutationOptions<CreateUserGroupMutation, CreateUserGroupMutationVariables>;
export const UpdateUserGroupDocument = gql`
    mutation updateUserGroup($input: UpdateUserGroupInput!) {
  updateUserGroup(input: $input) {
    id
    nom
    code
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type UpdateUserGroupMutationFn = Apollo.MutationFunction<UpdateUserGroupMutation, UpdateUserGroupMutationVariables>;

/**
 * __useUpdateUserGroupMutation__
 *
 * To run a mutation, you first call `useUpdateUserGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserGroupMutation, { data, loading, error }] = useUpdateUserGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserGroupMutation, UpdateUserGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserGroupMutation, UpdateUserGroupMutationVariables>(UpdateUserGroupDocument, options);
      }
export type UpdateUserGroupMutationHookResult = ReturnType<typeof useUpdateUserGroupMutation>;
export type UpdateUserGroupMutationResult = Apollo.MutationResult<UpdateUserGroupMutation>;
export type UpdateUserGroupMutationOptions = Apollo.BaseMutationOptions<UpdateUserGroupMutation, UpdateUserGroupMutationVariables>;
export const DeleteUserGroupDocument = gql`
    mutation deleteUserGroup($id: ID!) {
  deleteUserGroup(id: $id) {
    id
    nom
    code
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type DeleteUserGroupMutationFn = Apollo.MutationFunction<DeleteUserGroupMutation, DeleteUserGroupMutationVariables>;

/**
 * __useDeleteUserGroupMutation__
 *
 * To run a mutation, you first call `useDeleteUserGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserGroupMutation, { data, loading, error }] = useDeleteUserGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserGroupMutation, DeleteUserGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserGroupMutation, DeleteUserGroupMutationVariables>(DeleteUserGroupDocument, options);
      }
export type DeleteUserGroupMutationHookResult = ReturnType<typeof useDeleteUserGroupMutation>;
export type DeleteUserGroupMutationResult = Apollo.MutationResult<DeleteUserGroupMutation>;
export type DeleteUserGroupMutationOptions = Apollo.BaseMutationOptions<DeleteUserGroupMutation, DeleteUserGroupMutationVariables>;
export const UpdateMeDocument = gql`
    mutation updateMe($input: UpdateMeInput!) {
  updateMe(input: $input) {
    id
    firstname
    lastname
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    isDefaultAvatar
    incognito
    dateAnniversaire
    fonction
    about
    activatedAt
    created_at
    updated_at
    role
    permissions {
      subject
      action
    }
    currentOrganisme {
      id
      name
      address
      zipcode
      city
      country
      indicatif
      capabilities {
        Organisme {
          update
          createChild
        }
        ClubAvantages {
          read
          use
        }
        Bonsplans {
          stats
        }
        Contact {
          read
          create
          update
          delete
        }
        ContactCategory {
          read
          create
          update
          delete
        }
        ContactProperty {
          read
          create
          update
          delete
        }
        DistributionCulture {
          read
          create
          update
          delete
        }
        DistributionEcc {
          read
          create
          update
          delete
        }
        DistributionSub {
          read
          create
          update
          delete
        }
        DistributionVacances {
          read
          create
          update
          delete
        }
        CarteVacancesAbonnement {
          read
          create
          useOptionsPaiement
        }
        Ecc {
          preview
          use
        }
        OrganismeWallet {
          read
          create
          update
          delete
        }
        Post {
          read
          create
          update
          delete
          commentV2 {
            read
            create
            update
            delete
            report
          }
          comment
          reaction {
            read
            create
            update
            delete
          }
        }
        PostCategory {
          read
          create
          update
          delete
        }
        Provisionning {
          read
          create
          update
          delete
        }
        Report {
          read
        }
        User {
          read
          create
          createBatch
          update
          suspend
          resume
          delete
          resendInvitation
          sendInvitation
          changeRole
          changeGroups
        }
        UserGroup {
          read
          create
          update
          delete
        }
        Abonnement {
          read
          create
          update
          delete
        }
      }
      config {
        organisme {
          hasMultiOrganisme
          timezone
        }
        wallet {
          hasOrganismeWallet
          hasCarteVacances
          rembourserEccPerime
        }
      }
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
    }
    organismes {
      id
      name
      address
      zipcode
      city
      country
      indicatif
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
    }
    chatToken {
      token
      email
    }
  }
}
    `;
export type UpdateMeMutationFn = Apollo.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, options);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
export const ImportDocument = gql`
    mutation import($input: ImportInput!) {
  import(input: $input) {
    id
    columns {
      key
      label
      display
    }
    rows {
      values
    }
    errors {
      row {
        values
      }
      errors {
        key
        message
      }
    }
  }
}
    `;
export type ImportMutationFn = Apollo.MutationFunction<ImportMutation, ImportMutationVariables>;

/**
 * __useImportMutation__
 *
 * To run a mutation, you first call `useImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importMutation, { data, loading, error }] = useImportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImportMutation(baseOptions?: Apollo.MutationHookOptions<ImportMutation, ImportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportMutation, ImportMutationVariables>(ImportDocument, options);
      }
export type ImportMutationHookResult = ReturnType<typeof useImportMutation>;
export type ImportMutationResult = Apollo.MutationResult<ImportMutation>;
export type ImportMutationOptions = Apollo.BaseMutationOptions<ImportMutation, ImportMutationVariables>;
export const ExecuteImportDocument = gql`
    mutation executeImport($input: ExecuteImportInput!) {
  executeImport(input: $input)
}
    `;
export type ExecuteImportMutationFn = Apollo.MutationFunction<ExecuteImportMutation, ExecuteImportMutationVariables>;

/**
 * __useExecuteImportMutation__
 *
 * To run a mutation, you first call `useExecuteImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExecuteImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [executeImportMutation, { data, loading, error }] = useExecuteImportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExecuteImportMutation(baseOptions?: Apollo.MutationHookOptions<ExecuteImportMutation, ExecuteImportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExecuteImportMutation, ExecuteImportMutationVariables>(ExecuteImportDocument, options);
      }
export type ExecuteImportMutationHookResult = ReturnType<typeof useExecuteImportMutation>;
export type ExecuteImportMutationResult = Apollo.MutationResult<ExecuteImportMutation>;
export type ExecuteImportMutationOptions = Apollo.BaseMutationOptions<ExecuteImportMutation, ExecuteImportMutationVariables>;
export const StartWorkflowDocument = gql`
    mutation startWorkflow($input: StartWorkflowInput!) {
  startWorkflow(input: $input) {
    id
    type
    steps {
      action
      done
    }
  }
}
    `;
export type StartWorkflowMutationFn = Apollo.MutationFunction<StartWorkflowMutation, StartWorkflowMutationVariables>;

/**
 * __useStartWorkflowMutation__
 *
 * To run a mutation, you first call `useStartWorkflowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartWorkflowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startWorkflowMutation, { data, loading, error }] = useStartWorkflowMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStartWorkflowMutation(baseOptions?: Apollo.MutationHookOptions<StartWorkflowMutation, StartWorkflowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartWorkflowMutation, StartWorkflowMutationVariables>(StartWorkflowDocument, options);
      }
export type StartWorkflowMutationHookResult = ReturnType<typeof useStartWorkflowMutation>;
export type StartWorkflowMutationResult = Apollo.MutationResult<StartWorkflowMutation>;
export type StartWorkflowMutationOptions = Apollo.BaseMutationOptions<StartWorkflowMutation, StartWorkflowMutationVariables>;
export const ChangeEmailVerifyTfaDocument = gql`
    mutation changeEmailVerifyTfa($input: ChangeEmailTfaCodeInput!) {
  changeEmailVerifyTfa(input: $input)
}
    `;
export type ChangeEmailVerifyTfaMutationFn = Apollo.MutationFunction<ChangeEmailVerifyTfaMutation, ChangeEmailVerifyTfaMutationVariables>;

/**
 * __useChangeEmailVerifyTfaMutation__
 *
 * To run a mutation, you first call `useChangeEmailVerifyTfaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailVerifyTfaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailVerifyTfaMutation, { data, loading, error }] = useChangeEmailVerifyTfaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeEmailVerifyTfaMutation(baseOptions?: Apollo.MutationHookOptions<ChangeEmailVerifyTfaMutation, ChangeEmailVerifyTfaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeEmailVerifyTfaMutation, ChangeEmailVerifyTfaMutationVariables>(ChangeEmailVerifyTfaDocument, options);
      }
export type ChangeEmailVerifyTfaMutationHookResult = ReturnType<typeof useChangeEmailVerifyTfaMutation>;
export type ChangeEmailVerifyTfaMutationResult = Apollo.MutationResult<ChangeEmailVerifyTfaMutation>;
export type ChangeEmailVerifyTfaMutationOptions = Apollo.BaseMutationOptions<ChangeEmailVerifyTfaMutation, ChangeEmailVerifyTfaMutationVariables>;
export const ChangeEmailSendVerificationDocument = gql`
    mutation changeEmailSendVerification($input: ChangeEmailSendVerificationInput!) {
  changeEmailSendVerification(input: $input)
}
    `;
export type ChangeEmailSendVerificationMutationFn = Apollo.MutationFunction<ChangeEmailSendVerificationMutation, ChangeEmailSendVerificationMutationVariables>;

/**
 * __useChangeEmailSendVerificationMutation__
 *
 * To run a mutation, you first call `useChangeEmailSendVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailSendVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailSendVerificationMutation, { data, loading, error }] = useChangeEmailSendVerificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeEmailSendVerificationMutation(baseOptions?: Apollo.MutationHookOptions<ChangeEmailSendVerificationMutation, ChangeEmailSendVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeEmailSendVerificationMutation, ChangeEmailSendVerificationMutationVariables>(ChangeEmailSendVerificationDocument, options);
      }
export type ChangeEmailSendVerificationMutationHookResult = ReturnType<typeof useChangeEmailSendVerificationMutation>;
export type ChangeEmailSendVerificationMutationResult = Apollo.MutationResult<ChangeEmailSendVerificationMutation>;
export type ChangeEmailSendVerificationMutationOptions = Apollo.BaseMutationOptions<ChangeEmailSendVerificationMutation, ChangeEmailSendVerificationMutationVariables>;
export const ChangeEmailVerifyEmailDocument = gql`
    mutation changeEmailVerifyEmail($input: ChangeEmailVerifyEmailInput!) {
  changeEmailVerifyEmail(input: $input)
}
    `;
export type ChangeEmailVerifyEmailMutationFn = Apollo.MutationFunction<ChangeEmailVerifyEmailMutation, ChangeEmailVerifyEmailMutationVariables>;

/**
 * __useChangeEmailVerifyEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailVerifyEmailMutation, { data, loading, error }] = useChangeEmailVerifyEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeEmailVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<ChangeEmailVerifyEmailMutation, ChangeEmailVerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeEmailVerifyEmailMutation, ChangeEmailVerifyEmailMutationVariables>(ChangeEmailVerifyEmailDocument, options);
      }
export type ChangeEmailVerifyEmailMutationHookResult = ReturnType<typeof useChangeEmailVerifyEmailMutation>;
export type ChangeEmailVerifyEmailMutationResult = Apollo.MutationResult<ChangeEmailVerifyEmailMutation>;
export type ChangeEmailVerifyEmailMutationOptions = Apollo.BaseMutationOptions<ChangeEmailVerifyEmailMutation, ChangeEmailVerifyEmailMutationVariables>;
export const ChangePasswordVerifyTfaDocument = gql`
    mutation changePasswordVerifyTfa($input: ChangePasswordTfaCodeInput!) {
  changePasswordVerifyTfa(input: $input)
}
    `;
export type ChangePasswordVerifyTfaMutationFn = Apollo.MutationFunction<ChangePasswordVerifyTfaMutation, ChangePasswordVerifyTfaMutationVariables>;

/**
 * __useChangePasswordVerifyTfaMutation__
 *
 * To run a mutation, you first call `useChangePasswordVerifyTfaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordVerifyTfaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordVerifyTfaMutation, { data, loading, error }] = useChangePasswordVerifyTfaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordVerifyTfaMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordVerifyTfaMutation, ChangePasswordVerifyTfaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordVerifyTfaMutation, ChangePasswordVerifyTfaMutationVariables>(ChangePasswordVerifyTfaDocument, options);
      }
export type ChangePasswordVerifyTfaMutationHookResult = ReturnType<typeof useChangePasswordVerifyTfaMutation>;
export type ChangePasswordVerifyTfaMutationResult = Apollo.MutationResult<ChangePasswordVerifyTfaMutation>;
export type ChangePasswordVerifyTfaMutationOptions = Apollo.BaseMutationOptions<ChangePasswordVerifyTfaMutation, ChangePasswordVerifyTfaMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($input: ChangePasswordInput!) {
  changePassword(input: $input)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangePhoneNumberVerifyTfaDocument = gql`
    mutation changePhoneNumberVerifyTfa($input: ChangePhoneNumberTfaCodeInput!) {
  changePhoneNumberVerifyTfa(input: $input)
}
    `;
export type ChangePhoneNumberVerifyTfaMutationFn = Apollo.MutationFunction<ChangePhoneNumberVerifyTfaMutation, ChangePhoneNumberVerifyTfaMutationVariables>;

/**
 * __useChangePhoneNumberVerifyTfaMutation__
 *
 * To run a mutation, you first call `useChangePhoneNumberVerifyTfaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePhoneNumberVerifyTfaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePhoneNumberVerifyTfaMutation, { data, loading, error }] = useChangePhoneNumberVerifyTfaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePhoneNumberVerifyTfaMutation(baseOptions?: Apollo.MutationHookOptions<ChangePhoneNumberVerifyTfaMutation, ChangePhoneNumberVerifyTfaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePhoneNumberVerifyTfaMutation, ChangePhoneNumberVerifyTfaMutationVariables>(ChangePhoneNumberVerifyTfaDocument, options);
      }
export type ChangePhoneNumberVerifyTfaMutationHookResult = ReturnType<typeof useChangePhoneNumberVerifyTfaMutation>;
export type ChangePhoneNumberVerifyTfaMutationResult = Apollo.MutationResult<ChangePhoneNumberVerifyTfaMutation>;
export type ChangePhoneNumberVerifyTfaMutationOptions = Apollo.BaseMutationOptions<ChangePhoneNumberVerifyTfaMutation, ChangePhoneNumberVerifyTfaMutationVariables>;
export const ChangePhoneNumberSendVerificationDocument = gql`
    mutation changePhoneNumberSendVerification($input: ChangePhoneNumberSendVerificationInput!) {
  changePhoneNumberSendVerification(input: $input)
}
    `;
export type ChangePhoneNumberSendVerificationMutationFn = Apollo.MutationFunction<ChangePhoneNumberSendVerificationMutation, ChangePhoneNumberSendVerificationMutationVariables>;

/**
 * __useChangePhoneNumberSendVerificationMutation__
 *
 * To run a mutation, you first call `useChangePhoneNumberSendVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePhoneNumberSendVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePhoneNumberSendVerificationMutation, { data, loading, error }] = useChangePhoneNumberSendVerificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePhoneNumberSendVerificationMutation(baseOptions?: Apollo.MutationHookOptions<ChangePhoneNumberSendVerificationMutation, ChangePhoneNumberSendVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePhoneNumberSendVerificationMutation, ChangePhoneNumberSendVerificationMutationVariables>(ChangePhoneNumberSendVerificationDocument, options);
      }
export type ChangePhoneNumberSendVerificationMutationHookResult = ReturnType<typeof useChangePhoneNumberSendVerificationMutation>;
export type ChangePhoneNumberSendVerificationMutationResult = Apollo.MutationResult<ChangePhoneNumberSendVerificationMutation>;
export type ChangePhoneNumberSendVerificationMutationOptions = Apollo.BaseMutationOptions<ChangePhoneNumberSendVerificationMutation, ChangePhoneNumberSendVerificationMutationVariables>;
export const ChangePhoneNumberVerifyPhoneNumberDocument = gql`
    mutation changePhoneNumberVerifyPhoneNumber($input: ChangePhoneNumberVerifyPhoneNumberInput!) {
  changePhoneNumberVerifyPhoneNumber(input: $input)
}
    `;
export type ChangePhoneNumberVerifyPhoneNumberMutationFn = Apollo.MutationFunction<ChangePhoneNumberVerifyPhoneNumberMutation, ChangePhoneNumberVerifyPhoneNumberMutationVariables>;

/**
 * __useChangePhoneNumberVerifyPhoneNumberMutation__
 *
 * To run a mutation, you first call `useChangePhoneNumberVerifyPhoneNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePhoneNumberVerifyPhoneNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePhoneNumberVerifyPhoneNumberMutation, { data, loading, error }] = useChangePhoneNumberVerifyPhoneNumberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePhoneNumberVerifyPhoneNumberMutation(baseOptions?: Apollo.MutationHookOptions<ChangePhoneNumberVerifyPhoneNumberMutation, ChangePhoneNumberVerifyPhoneNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePhoneNumberVerifyPhoneNumberMutation, ChangePhoneNumberVerifyPhoneNumberMutationVariables>(ChangePhoneNumberVerifyPhoneNumberDocument, options);
      }
export type ChangePhoneNumberVerifyPhoneNumberMutationHookResult = ReturnType<typeof useChangePhoneNumberVerifyPhoneNumberMutation>;
export type ChangePhoneNumberVerifyPhoneNumberMutationResult = Apollo.MutationResult<ChangePhoneNumberVerifyPhoneNumberMutation>;
export type ChangePhoneNumberVerifyPhoneNumberMutationOptions = Apollo.BaseMutationOptions<ChangePhoneNumberVerifyPhoneNumberMutation, ChangePhoneNumberVerifyPhoneNumberMutationVariables>;
export const FirstConnectionJoinDocument = gql`
    mutation firstConnectionJoin($input: FirstConnectionJoinInput!) {
  firstConnectionJoin(input: $input) {
    authToken
    apiToken
    expires
  }
}
    `;
export type FirstConnectionJoinMutationFn = Apollo.MutationFunction<FirstConnectionJoinMutation, FirstConnectionJoinMutationVariables>;

/**
 * __useFirstConnectionJoinMutation__
 *
 * To run a mutation, you first call `useFirstConnectionJoinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFirstConnectionJoinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [firstConnectionJoinMutation, { data, loading, error }] = useFirstConnectionJoinMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFirstConnectionJoinMutation(baseOptions?: Apollo.MutationHookOptions<FirstConnectionJoinMutation, FirstConnectionJoinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FirstConnectionJoinMutation, FirstConnectionJoinMutationVariables>(FirstConnectionJoinDocument, options);
      }
export type FirstConnectionJoinMutationHookResult = ReturnType<typeof useFirstConnectionJoinMutation>;
export type FirstConnectionJoinMutationResult = Apollo.MutationResult<FirstConnectionJoinMutation>;
export type FirstConnectionJoinMutationOptions = Apollo.BaseMutationOptions<FirstConnectionJoinMutation, FirstConnectionJoinMutationVariables>;
export const FirstConnectionCreateAccountDocument = gql`
    mutation firstConnectionCreateAccount($input: FirstConnectionCreateAccountInput!) {
  firstConnectionCreateAccount(input: $input) {
    authToken
    apiToken
    expires
  }
}
    `;
export type FirstConnectionCreateAccountMutationFn = Apollo.MutationFunction<FirstConnectionCreateAccountMutation, FirstConnectionCreateAccountMutationVariables>;

/**
 * __useFirstConnectionCreateAccountMutation__
 *
 * To run a mutation, you first call `useFirstConnectionCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFirstConnectionCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [firstConnectionCreateAccountMutation, { data, loading, error }] = useFirstConnectionCreateAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFirstConnectionCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<FirstConnectionCreateAccountMutation, FirstConnectionCreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FirstConnectionCreateAccountMutation, FirstConnectionCreateAccountMutationVariables>(FirstConnectionCreateAccountDocument, options);
      }
export type FirstConnectionCreateAccountMutationHookResult = ReturnType<typeof useFirstConnectionCreateAccountMutation>;
export type FirstConnectionCreateAccountMutationResult = Apollo.MutationResult<FirstConnectionCreateAccountMutation>;
export type FirstConnectionCreateAccountMutationOptions = Apollo.BaseMutationOptions<FirstConnectionCreateAccountMutation, FirstConnectionCreateAccountMutationVariables>;
export const FirstConnectionSetNameDocument = gql`
    mutation firstConnectionSetName($input: FirstConnectionSetNameInput!) {
  firstConnectionSetName(input: $input)
}
    `;
export type FirstConnectionSetNameMutationFn = Apollo.MutationFunction<FirstConnectionSetNameMutation, FirstConnectionSetNameMutationVariables>;

/**
 * __useFirstConnectionSetNameMutation__
 *
 * To run a mutation, you first call `useFirstConnectionSetNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFirstConnectionSetNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [firstConnectionSetNameMutation, { data, loading, error }] = useFirstConnectionSetNameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFirstConnectionSetNameMutation(baseOptions?: Apollo.MutationHookOptions<FirstConnectionSetNameMutation, FirstConnectionSetNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FirstConnectionSetNameMutation, FirstConnectionSetNameMutationVariables>(FirstConnectionSetNameDocument, options);
      }
export type FirstConnectionSetNameMutationHookResult = ReturnType<typeof useFirstConnectionSetNameMutation>;
export type FirstConnectionSetNameMutationResult = Apollo.MutationResult<FirstConnectionSetNameMutation>;
export type FirstConnectionSetNameMutationOptions = Apollo.BaseMutationOptions<FirstConnectionSetNameMutation, FirstConnectionSetNameMutationVariables>;
export const FirstConnectionSetBirthdateDocument = gql`
    mutation firstConnectionSetBirthdate($input: FirstConnectionSetBirthdateInput!) {
  firstConnectionSetBirthdate(input: $input)
}
    `;
export type FirstConnectionSetBirthdateMutationFn = Apollo.MutationFunction<FirstConnectionSetBirthdateMutation, FirstConnectionSetBirthdateMutationVariables>;

/**
 * __useFirstConnectionSetBirthdateMutation__
 *
 * To run a mutation, you first call `useFirstConnectionSetBirthdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFirstConnectionSetBirthdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [firstConnectionSetBirthdateMutation, { data, loading, error }] = useFirstConnectionSetBirthdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFirstConnectionSetBirthdateMutation(baseOptions?: Apollo.MutationHookOptions<FirstConnectionSetBirthdateMutation, FirstConnectionSetBirthdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FirstConnectionSetBirthdateMutation, FirstConnectionSetBirthdateMutationVariables>(FirstConnectionSetBirthdateDocument, options);
      }
export type FirstConnectionSetBirthdateMutationHookResult = ReturnType<typeof useFirstConnectionSetBirthdateMutation>;
export type FirstConnectionSetBirthdateMutationResult = Apollo.MutationResult<FirstConnectionSetBirthdateMutation>;
export type FirstConnectionSetBirthdateMutationOptions = Apollo.BaseMutationOptions<FirstConnectionSetBirthdateMutation, FirstConnectionSetBirthdateMutationVariables>;
export const FirstConnectionSetAvatarDocument = gql`
    mutation firstConnectionSetAvatar($input: FirstConnectionSetAvatarInput!) {
  firstConnectionSetAvatar(input: $input)
}
    `;
export type FirstConnectionSetAvatarMutationFn = Apollo.MutationFunction<FirstConnectionSetAvatarMutation, FirstConnectionSetAvatarMutationVariables>;

/**
 * __useFirstConnectionSetAvatarMutation__
 *
 * To run a mutation, you first call `useFirstConnectionSetAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFirstConnectionSetAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [firstConnectionSetAvatarMutation, { data, loading, error }] = useFirstConnectionSetAvatarMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFirstConnectionSetAvatarMutation(baseOptions?: Apollo.MutationHookOptions<FirstConnectionSetAvatarMutation, FirstConnectionSetAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FirstConnectionSetAvatarMutation, FirstConnectionSetAvatarMutationVariables>(FirstConnectionSetAvatarDocument, options);
      }
export type FirstConnectionSetAvatarMutationHookResult = ReturnType<typeof useFirstConnectionSetAvatarMutation>;
export type FirstConnectionSetAvatarMutationResult = Apollo.MutationResult<FirstConnectionSetAvatarMutation>;
export type FirstConnectionSetAvatarMutationOptions = Apollo.BaseMutationOptions<FirstConnectionSetAvatarMutation, FirstConnectionSetAvatarMutationVariables>;
export const FirstConnectionVerifyPhoneNumberDocument = gql`
    mutation firstConnectionVerifyPhoneNumber($input: FirstConnectionVerifyPhoneNumberInput!) {
  firstConnectionVerifyPhoneNumber(input: $input)
}
    `;
export type FirstConnectionVerifyPhoneNumberMutationFn = Apollo.MutationFunction<FirstConnectionVerifyPhoneNumberMutation, FirstConnectionVerifyPhoneNumberMutationVariables>;

/**
 * __useFirstConnectionVerifyPhoneNumberMutation__
 *
 * To run a mutation, you first call `useFirstConnectionVerifyPhoneNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFirstConnectionVerifyPhoneNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [firstConnectionVerifyPhoneNumberMutation, { data, loading, error }] = useFirstConnectionVerifyPhoneNumberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFirstConnectionVerifyPhoneNumberMutation(baseOptions?: Apollo.MutationHookOptions<FirstConnectionVerifyPhoneNumberMutation, FirstConnectionVerifyPhoneNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FirstConnectionVerifyPhoneNumberMutation, FirstConnectionVerifyPhoneNumberMutationVariables>(FirstConnectionVerifyPhoneNumberDocument, options);
      }
export type FirstConnectionVerifyPhoneNumberMutationHookResult = ReturnType<typeof useFirstConnectionVerifyPhoneNumberMutation>;
export type FirstConnectionVerifyPhoneNumberMutationResult = Apollo.MutationResult<FirstConnectionVerifyPhoneNumberMutation>;
export type FirstConnectionVerifyPhoneNumberMutationOptions = Apollo.BaseMutationOptions<FirstConnectionVerifyPhoneNumberMutation, FirstConnectionVerifyPhoneNumberMutationVariables>;
export const FirstConnectionSetupPushDocument = gql`
    mutation firstConnectionSetupPush($input: FirstConnectionSetupPushInput!) {
  firstConnectionSetupPush(input: $input)
}
    `;
export type FirstConnectionSetupPushMutationFn = Apollo.MutationFunction<FirstConnectionSetupPushMutation, FirstConnectionSetupPushMutationVariables>;

/**
 * __useFirstConnectionSetupPushMutation__
 *
 * To run a mutation, you first call `useFirstConnectionSetupPushMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFirstConnectionSetupPushMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [firstConnectionSetupPushMutation, { data, loading, error }] = useFirstConnectionSetupPushMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFirstConnectionSetupPushMutation(baseOptions?: Apollo.MutationHookOptions<FirstConnectionSetupPushMutation, FirstConnectionSetupPushMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FirstConnectionSetupPushMutation, FirstConnectionSetupPushMutationVariables>(FirstConnectionSetupPushDocument, options);
      }
export type FirstConnectionSetupPushMutationHookResult = ReturnType<typeof useFirstConnectionSetupPushMutation>;
export type FirstConnectionSetupPushMutationResult = Apollo.MutationResult<FirstConnectionSetupPushMutation>;
export type FirstConnectionSetupPushMutationOptions = Apollo.BaseMutationOptions<FirstConnectionSetupPushMutation, FirstConnectionSetupPushMutationVariables>;
export const FirstConnectionProductTourDoneDocument = gql`
    mutation firstConnectionProductTourDone {
  firstConnectionProductTourDone
}
    `;
export type FirstConnectionProductTourDoneMutationFn = Apollo.MutationFunction<FirstConnectionProductTourDoneMutation, FirstConnectionProductTourDoneMutationVariables>;

/**
 * __useFirstConnectionProductTourDoneMutation__
 *
 * To run a mutation, you first call `useFirstConnectionProductTourDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFirstConnectionProductTourDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [firstConnectionProductTourDoneMutation, { data, loading, error }] = useFirstConnectionProductTourDoneMutation({
 *   variables: {
 *   },
 * });
 */
export function useFirstConnectionProductTourDoneMutation(baseOptions?: Apollo.MutationHookOptions<FirstConnectionProductTourDoneMutation, FirstConnectionProductTourDoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FirstConnectionProductTourDoneMutation, FirstConnectionProductTourDoneMutationVariables>(FirstConnectionProductTourDoneDocument, options);
      }
export type FirstConnectionProductTourDoneMutationHookResult = ReturnType<typeof useFirstConnectionProductTourDoneMutation>;
export type FirstConnectionProductTourDoneMutationResult = Apollo.MutationResult<FirstConnectionProductTourDoneMutation>;
export type FirstConnectionProductTourDoneMutationOptions = Apollo.BaseMutationOptions<FirstConnectionProductTourDoneMutation, FirstConnectionProductTourDoneMutationVariables>;
export const SignupValidateUserInformationsDocument = gql`
    mutation signupValidateUserInformations($input: SignupValidateUserInformationsInput!) {
  signupValidateUserInformations(input: $input)
}
    `;
export type SignupValidateUserInformationsMutationFn = Apollo.MutationFunction<SignupValidateUserInformationsMutation, SignupValidateUserInformationsMutationVariables>;

/**
 * __useSignupValidateUserInformationsMutation__
 *
 * To run a mutation, you first call `useSignupValidateUserInformationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupValidateUserInformationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupValidateUserInformationsMutation, { data, loading, error }] = useSignupValidateUserInformationsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupValidateUserInformationsMutation(baseOptions?: Apollo.MutationHookOptions<SignupValidateUserInformationsMutation, SignupValidateUserInformationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupValidateUserInformationsMutation, SignupValidateUserInformationsMutationVariables>(SignupValidateUserInformationsDocument, options);
      }
export type SignupValidateUserInformationsMutationHookResult = ReturnType<typeof useSignupValidateUserInformationsMutation>;
export type SignupValidateUserInformationsMutationResult = Apollo.MutationResult<SignupValidateUserInformationsMutation>;
export type SignupValidateUserInformationsMutationOptions = Apollo.BaseMutationOptions<SignupValidateUserInformationsMutation, SignupValidateUserInformationsMutationVariables>;
export const SignupCreateAccountDocument = gql`
    mutation signupCreateAccount($input: SignupCreateAccountInput!) {
  signupCreateAccount(input: $input) {
    authToken
    apiToken
    expires
  }
}
    `;
export type SignupCreateAccountMutationFn = Apollo.MutationFunction<SignupCreateAccountMutation, SignupCreateAccountMutationVariables>;

/**
 * __useSignupCreateAccountMutation__
 *
 * To run a mutation, you first call `useSignupCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupCreateAccountMutation, { data, loading, error }] = useSignupCreateAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<SignupCreateAccountMutation, SignupCreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupCreateAccountMutation, SignupCreateAccountMutationVariables>(SignupCreateAccountDocument, options);
      }
export type SignupCreateAccountMutationHookResult = ReturnType<typeof useSignupCreateAccountMutation>;
export type SignupCreateAccountMutationResult = Apollo.MutationResult<SignupCreateAccountMutation>;
export type SignupCreateAccountMutationOptions = Apollo.BaseMutationOptions<SignupCreateAccountMutation, SignupCreateAccountMutationVariables>;
export const SignupCreateOrganismeDocument = gql`
    mutation signupCreateOrganisme($input: SignupCreateOrganismeInput!) {
  signupCreateOrganisme(input: $input) {
    id
    name
    address
    zipcode
    city
    country
    indicatif
    capabilities {
      Organisme {
        update
        createChild
      }
      ClubAvantages {
        read
        use
      }
      Bonsplans {
        stats
      }
      Contact {
        read
        create
        update
        delete
      }
      ContactCategory {
        read
        create
        update
        delete
      }
      ContactProperty {
        read
        create
        update
        delete
      }
      DistributionCulture {
        read
        create
        update
        delete
      }
      DistributionEcc {
        read
        create
        update
        delete
      }
      DistributionSub {
        read
        create
        update
        delete
      }
      DistributionVacances {
        read
        create
        update
        delete
      }
      CarteVacancesAbonnement {
        read
        create
        useOptionsPaiement
      }
      Ecc {
        preview
        use
      }
      OrganismeWallet {
        read
        create
        update
        delete
      }
      Post {
        read
        create
        update
        delete
        commentV2 {
          read
          create
          update
          delete
          report
        }
        comment
        reaction {
          read
          create
          update
          delete
        }
        content {
          actualite {
            create
          }
          album {
            create
          }
          event {
            create
          }
          sondage {
            create
            respond
          }
          pvReunion {
            create
          }
        }
      }
      PostCategory {
        read
        create
        update
        delete
      }
      Provisionning {
        read
        create
        update
        delete
      }
      Report {
        read
      }
      User {
        read
        create
        createBatch
        update
        suspend
        resume
        delete
        resendInvitation
        sendInvitation
        changeRole
        changeGroups
      }
      UserGroup {
        read
        create
        update
        delete
      }
      Abonnement {
        read
        create
        update
        delete
      }
    }
    config {
      organisme {
        hasMultiOrganisme
        timezone
      }
      wallet {
        hasOrganismeWallet
        hasCarteVacances
        rembourserEccPerime
      }
    }
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
  }
}
    `;
export type SignupCreateOrganismeMutationFn = Apollo.MutationFunction<SignupCreateOrganismeMutation, SignupCreateOrganismeMutationVariables>;

/**
 * __useSignupCreateOrganismeMutation__
 *
 * To run a mutation, you first call `useSignupCreateOrganismeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupCreateOrganismeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupCreateOrganismeMutation, { data, loading, error }] = useSignupCreateOrganismeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupCreateOrganismeMutation(baseOptions?: Apollo.MutationHookOptions<SignupCreateOrganismeMutation, SignupCreateOrganismeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupCreateOrganismeMutation, SignupCreateOrganismeMutationVariables>(SignupCreateOrganismeDocument, options);
      }
export type SignupCreateOrganismeMutationHookResult = ReturnType<typeof useSignupCreateOrganismeMutation>;
export type SignupCreateOrganismeMutationResult = Apollo.MutationResult<SignupCreateOrganismeMutation>;
export type SignupCreateOrganismeMutationOptions = Apollo.BaseMutationOptions<SignupCreateOrganismeMutation, SignupCreateOrganismeMutationVariables>;
export const SignupCreateOrganismeV2Document = gql`
    mutation signupCreateOrganismeV2($input: SignupCreateOrganismeInput!) {
  signupCreateOrganismeV2(input: $input) {
    id
    name
    address
    zipcode
    city
    country
    indicatif
    capabilities {
      Organisme {
        update
        createChild
      }
      ClubAvantages {
        read
        use
      }
      Bonsplans {
        stats
      }
      Contact {
        read
        create
        update
        delete
      }
      ContactCategory {
        read
        create
        update
        delete
      }
      ContactProperty {
        read
        create
        update
        delete
      }
      DistributionCulture {
        read
        create
        update
        delete
      }
      DistributionEcc {
        read
        create
        update
        delete
      }
      DistributionSub {
        read
        create
        update
        delete
      }
      DistributionVacances {
        read
        create
        update
        delete
      }
      CarteVacancesAbonnement {
        read
        create
        useOptionsPaiement
      }
      Ecc {
        preview
        use
      }
      OrganismeWallet {
        read
        create
        update
        delete
      }
      Post {
        read
        create
        update
        delete
        commentV2 {
          read
          create
          update
          delete
          report
        }
        comment
        reaction {
          read
          create
          update
          delete
        }
        content {
          actualite {
            create
          }
          album {
            create
          }
          event {
            create
          }
          sondage {
            create
            respond
          }
          pvReunion {
            create
          }
        }
      }
      PostCategory {
        read
        create
        update
        delete
      }
      Provisionning {
        read
        create
        update
        delete
      }
      Report {
        read
      }
      User {
        read
        create
        createBatch
        update
        suspend
        resume
        delete
        resendInvitation
        sendInvitation
        changeRole
        changeGroups
      }
      UserGroup {
        read
        create
        update
        delete
      }
      Abonnement {
        read
        create
        update
        delete
      }
    }
    config {
      organisme {
        hasMultiOrganisme
        timezone
      }
      wallet {
        hasOrganismeWallet
        hasCarteVacances
        rembourserEccPerime
      }
    }
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
  }
}
    `;
export type SignupCreateOrganismeV2MutationFn = Apollo.MutationFunction<SignupCreateOrganismeV2Mutation, SignupCreateOrganismeV2MutationVariables>;

/**
 * __useSignupCreateOrganismeV2Mutation__
 *
 * To run a mutation, you first call `useSignupCreateOrganismeV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupCreateOrganismeV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupCreateOrganismeV2Mutation, { data, loading, error }] = useSignupCreateOrganismeV2Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupCreateOrganismeV2Mutation(baseOptions?: Apollo.MutationHookOptions<SignupCreateOrganismeV2Mutation, SignupCreateOrganismeV2MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupCreateOrganismeV2Mutation, SignupCreateOrganismeV2MutationVariables>(SignupCreateOrganismeV2Document, options);
      }
export type SignupCreateOrganismeV2MutationHookResult = ReturnType<typeof useSignupCreateOrganismeV2Mutation>;
export type SignupCreateOrganismeV2MutationResult = Apollo.MutationResult<SignupCreateOrganismeV2Mutation>;
export type SignupCreateOrganismeV2MutationOptions = Apollo.BaseMutationOptions<SignupCreateOrganismeV2Mutation, SignupCreateOrganismeV2MutationVariables>;
export const SignupVerifyPhoneNumberDocument = gql`
    mutation signupVerifyPhoneNumber($input: SignupVerifyPhoneNumberInput!) {
  signupVerifyPhoneNumber(input: $input)
}
    `;
export type SignupVerifyPhoneNumberMutationFn = Apollo.MutationFunction<SignupVerifyPhoneNumberMutation, SignupVerifyPhoneNumberMutationVariables>;

/**
 * __useSignupVerifyPhoneNumberMutation__
 *
 * To run a mutation, you first call `useSignupVerifyPhoneNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupVerifyPhoneNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupVerifyPhoneNumberMutation, { data, loading, error }] = useSignupVerifyPhoneNumberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupVerifyPhoneNumberMutation(baseOptions?: Apollo.MutationHookOptions<SignupVerifyPhoneNumberMutation, SignupVerifyPhoneNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupVerifyPhoneNumberMutation, SignupVerifyPhoneNumberMutationVariables>(SignupVerifyPhoneNumberDocument, options);
      }
export type SignupVerifyPhoneNumberMutationHookResult = ReturnType<typeof useSignupVerifyPhoneNumberMutation>;
export type SignupVerifyPhoneNumberMutationResult = Apollo.MutationResult<SignupVerifyPhoneNumberMutation>;
export type SignupVerifyPhoneNumberMutationOptions = Apollo.BaseMutationOptions<SignupVerifyPhoneNumberMutation, SignupVerifyPhoneNumberMutationVariables>;
export const SignupSetupPushDocument = gql`
    mutation signupSetupPush($input: SignupSetupPushInput!) {
  signupSetupPush(input: $input)
}
    `;
export type SignupSetupPushMutationFn = Apollo.MutationFunction<SignupSetupPushMutation, SignupSetupPushMutationVariables>;

/**
 * __useSignupSetupPushMutation__
 *
 * To run a mutation, you first call `useSignupSetupPushMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupSetupPushMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupSetupPushMutation, { data, loading, error }] = useSignupSetupPushMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupSetupPushMutation(baseOptions?: Apollo.MutationHookOptions<SignupSetupPushMutation, SignupSetupPushMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupSetupPushMutation, SignupSetupPushMutationVariables>(SignupSetupPushDocument, options);
      }
export type SignupSetupPushMutationHookResult = ReturnType<typeof useSignupSetupPushMutation>;
export type SignupSetupPushMutationResult = Apollo.MutationResult<SignupSetupPushMutation>;
export type SignupSetupPushMutationOptions = Apollo.BaseMutationOptions<SignupSetupPushMutation, SignupSetupPushMutationVariables>;
export const SignupVerifyEmailDocument = gql`
    mutation signupVerifyEmail($input: SignupVerifyEmailInput!) {
  signupVerifyEmail(input: $input)
}
    `;
export type SignupVerifyEmailMutationFn = Apollo.MutationFunction<SignupVerifyEmailMutation, SignupVerifyEmailMutationVariables>;

/**
 * __useSignupVerifyEmailMutation__
 *
 * To run a mutation, you first call `useSignupVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupVerifyEmailMutation, { data, loading, error }] = useSignupVerifyEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<SignupVerifyEmailMutation, SignupVerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupVerifyEmailMutation, SignupVerifyEmailMutationVariables>(SignupVerifyEmailDocument, options);
      }
export type SignupVerifyEmailMutationHookResult = ReturnType<typeof useSignupVerifyEmailMutation>;
export type SignupVerifyEmailMutationResult = Apollo.MutationResult<SignupVerifyEmailMutation>;
export type SignupVerifyEmailMutationOptions = Apollo.BaseMutationOptions<SignupVerifyEmailMutation, SignupVerifyEmailMutationVariables>;
export const SignupProductTourDoneDocument = gql`
    mutation signupProductTourDone {
  signupProductTourDone
}
    `;
export type SignupProductTourDoneMutationFn = Apollo.MutationFunction<SignupProductTourDoneMutation, SignupProductTourDoneMutationVariables>;

/**
 * __useSignupProductTourDoneMutation__
 *
 * To run a mutation, you first call `useSignupProductTourDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupProductTourDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupProductTourDoneMutation, { data, loading, error }] = useSignupProductTourDoneMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignupProductTourDoneMutation(baseOptions?: Apollo.MutationHookOptions<SignupProductTourDoneMutation, SignupProductTourDoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupProductTourDoneMutation, SignupProductTourDoneMutationVariables>(SignupProductTourDoneDocument, options);
      }
export type SignupProductTourDoneMutationHookResult = ReturnType<typeof useSignupProductTourDoneMutation>;
export type SignupProductTourDoneMutationResult = Apollo.MutationResult<SignupProductTourDoneMutation>;
export type SignupProductTourDoneMutationOptions = Apollo.BaseMutationOptions<SignupProductTourDoneMutation, SignupProductTourDoneMutationVariables>;
export const BonsplansTunnelCommandeSetLivraisonDocument = gql`
    mutation bonsplansTunnelCommandeSetLivraison($input: BonsplansTunnelCommandeSetLivraisonInput!) {
  bonsplansTunnelCommandeSetLivraison(input: $input) {
    panier {
      espace
      lignes {
        uuid
        type
        sku {
          source
          productId
          articleId
        }
        quantite
        libelle
        prixUnitaire
        total
        totalRemise
        params {
          carteCadeau {
            valeurFaciale
          }
          volatiles {
            name
            value
          }
        }
      }
      livraisons {
        uuid
        type
        sku {
          source
          productId
          articleId
        }
        quantite
        libelle
        prixUnitaire
        total
        totalRemise
      }
      wallets {
        id
        nom
        solde
        utiliser
        dateFin
        montantApplique
        params {
          montantsAppliques {
            ligne
            montantApplique
          }
        }
      }
      params {
        livraison {
          company
          firstname
          lastname
          address
          zipcode
          city
          country
        }
      }
      sousTotal
      total
      totalRemise
    }
    workflow {
      id
      type
      steps {
        action
        done
      }
    }
  }
}
    `;
export type BonsplansTunnelCommandeSetLivraisonMutationFn = Apollo.MutationFunction<BonsplansTunnelCommandeSetLivraisonMutation, BonsplansTunnelCommandeSetLivraisonMutationVariables>;

/**
 * __useBonsplansTunnelCommandeSetLivraisonMutation__
 *
 * To run a mutation, you first call `useBonsplansTunnelCommandeSetLivraisonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansTunnelCommandeSetLivraisonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansTunnelCommandeSetLivraisonMutation, { data, loading, error }] = useBonsplansTunnelCommandeSetLivraisonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansTunnelCommandeSetLivraisonMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansTunnelCommandeSetLivraisonMutation, BonsplansTunnelCommandeSetLivraisonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansTunnelCommandeSetLivraisonMutation, BonsplansTunnelCommandeSetLivraisonMutationVariables>(BonsplansTunnelCommandeSetLivraisonDocument, options);
      }
export type BonsplansTunnelCommandeSetLivraisonMutationHookResult = ReturnType<typeof useBonsplansTunnelCommandeSetLivraisonMutation>;
export type BonsplansTunnelCommandeSetLivraisonMutationResult = Apollo.MutationResult<BonsplansTunnelCommandeSetLivraisonMutation>;
export type BonsplansTunnelCommandeSetLivraisonMutationOptions = Apollo.BaseMutationOptions<BonsplansTunnelCommandeSetLivraisonMutation, BonsplansTunnelCommandeSetLivraisonMutationVariables>;
export const BonsplansTunnelCommandeValidateDocument = gql`
    mutation bonsplansTunnelCommandeValidate($bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: BonsplansTunnelCommandeValidateInput!) {
  bonsplansTunnelCommandeValidate(input: $input) {
    commande {
      id
      numeroCommande
      libelle
      espace
      statut
      total
      totalRemise
      lignes {
        id
        statut
        type
        quantite
        prixUnitaire
        libelle
      }
      billets {
        id
        commandeId
        nom
        utilise
        codeBarres
        codeActivation
        dateExpiration
        montant
        url
        info
        produit {
          id
          nom
          type
          description
          aide
          coordonnees {
            nom
            adresse1
            adresse2
            zipcode
            city
            area
            country
            lat
            lng
            website
          }
          offre
          marketingTags {
            id
            name
            type
          }
          logo {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          cover {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          articles {
            id
            nom
            detail
            hasDescription
            description
            quantiteMin
            quantiteMax
            prixPublic
            prixTTC
          }
          searchArticlesFiltres(
            input: $bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticlesFiltres_input
          ) {
            type
            name
            label
          }
          searchArticles(
            input: $bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticles_input
          ) {
            id
            nom
            detail
            hasDescription
            description
            quantiteMin
            quantiteMax
            prixPublic
            prixTTC
          }
          offrePartenaire {
            redirectUrl
          }
        }
      }
      livraison {
        company
        firstname
        lastname
        address
        zipcode
        city
        country
      }
      createdAt
    }
    panier {
      espace
      lignes {
        uuid
        type
        sku {
          source
          productId
          articleId
        }
        quantite
        libelle
        prixUnitaire
        total
        totalRemise
        params {
          carteCadeau {
            valeurFaciale
          }
          volatiles {
            name
            value
          }
        }
      }
      livraisons {
        uuid
        type
        sku {
          source
          productId
          articleId
        }
        quantite
        libelle
        prixUnitaire
        total
        totalRemise
      }
      wallets {
        id
        nom
        solde
        utiliser
        dateFin
        montantApplique
        params {
          montantsAppliques {
            ligne
            montantApplique
          }
        }
      }
      params {
        livraison {
          company
          firstname
          lastname
          address
          zipcode
          city
          country
        }
      }
      sousTotal
      total
      totalRemise
    }
    workflow {
      id
      type
      steps {
        action
        done
      }
    }
    paiement {
      url
      montant
    }
  }
}
    `;
export type BonsplansTunnelCommandeValidateMutationFn = Apollo.MutationFunction<BonsplansTunnelCommandeValidateMutation, BonsplansTunnelCommandeValidateMutationVariables>;

/**
 * __useBonsplansTunnelCommandeValidateMutation__
 *
 * To run a mutation, you first call `useBonsplansTunnelCommandeValidateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansTunnelCommandeValidateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansTunnelCommandeValidateMutation, { data, loading, error }] = useBonsplansTunnelCommandeValidateMutation({
 *   variables: {
 *      bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticlesFiltres_input: // value for 'bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticlesFiltres_input'
 *      bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticles_input: // value for 'bonsplansTunnelCommandeValidate_commande_billets_produit_searchArticles_input'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansTunnelCommandeValidateMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansTunnelCommandeValidateMutation, BonsplansTunnelCommandeValidateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansTunnelCommandeValidateMutation, BonsplansTunnelCommandeValidateMutationVariables>(BonsplansTunnelCommandeValidateDocument, options);
      }
export type BonsplansTunnelCommandeValidateMutationHookResult = ReturnType<typeof useBonsplansTunnelCommandeValidateMutation>;
export type BonsplansTunnelCommandeValidateMutationResult = Apollo.MutationResult<BonsplansTunnelCommandeValidateMutation>;
export type BonsplansTunnelCommandeValidateMutationOptions = Apollo.BaseMutationOptions<BonsplansTunnelCommandeValidateMutation, BonsplansTunnelCommandeValidateMutationVariables>;
export const DeclineReportDocument = gql`
    mutation declineReport($input: IdentifiedInput!) {
  declineReport(input: $input) {
    id
    reportable {
      ... on Comment {
        id
        content
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
        createdAt
        capabilities {
          read
          create
          update
          delete
          report
        }
      }
    }
    reportedAt
  }
}
    `;
export type DeclineReportMutationFn = Apollo.MutationFunction<DeclineReportMutation, DeclineReportMutationVariables>;

/**
 * __useDeclineReportMutation__
 *
 * To run a mutation, you first call `useDeclineReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeclineReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [declineReportMutation, { data, loading, error }] = useDeclineReportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeclineReportMutation(baseOptions?: Apollo.MutationHookOptions<DeclineReportMutation, DeclineReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeclineReportMutation, DeclineReportMutationVariables>(DeclineReportDocument, options);
      }
export type DeclineReportMutationHookResult = ReturnType<typeof useDeclineReportMutation>;
export type DeclineReportMutationResult = Apollo.MutationResult<DeclineReportMutation>;
export type DeclineReportMutationOptions = Apollo.BaseMutationOptions<DeclineReportMutation, DeclineReportMutationVariables>;
export const AcceptReportDocument = gql`
    mutation acceptReport($input: IdentifiedInput!) {
  acceptReport(input: $input) {
    id
    reportable {
      ... on Comment {
        id
        content
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
        createdAt
        capabilities {
          read
          create
          update
          delete
          report
        }
      }
    }
    reportedAt
  }
}
    `;
export type AcceptReportMutationFn = Apollo.MutationFunction<AcceptReportMutation, AcceptReportMutationVariables>;

/**
 * __useAcceptReportMutation__
 *
 * To run a mutation, you first call `useAcceptReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptReportMutation, { data, loading, error }] = useAcceptReportMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAcceptReportMutation(baseOptions?: Apollo.MutationHookOptions<AcceptReportMutation, AcceptReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptReportMutation, AcceptReportMutationVariables>(AcceptReportDocument, options);
      }
export type AcceptReportMutationHookResult = ReturnType<typeof useAcceptReportMutation>;
export type AcceptReportMutationResult = Apollo.MutationResult<AcceptReportMutation>;
export type AcceptReportMutationOptions = Apollo.BaseMutationOptions<AcceptReportMutation, AcceptReportMutationVariables>;
export const CreateContactDocument = gql`
    mutation createContact($input: ContactInput!) {
  createContact(input: $input) {
    id
    userId
    firstname
    lastname
    dateAnniversaire
    fonction
    category {
      id
      name
      position
      capabilities {
        read
        create
        update
        delete
      }
    }
    lines {
      id
      label
      type
      propertyId
      value
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateContactMutationFn = Apollo.MutationFunction<CreateContactMutation, CreateContactMutationVariables>;

/**
 * __useCreateContactMutation__
 *
 * To run a mutation, you first call `useCreateContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactMutation, { data, loading, error }] = useCreateContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContactMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactMutation, CreateContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContactMutation, CreateContactMutationVariables>(CreateContactDocument, options);
      }
export type CreateContactMutationHookResult = ReturnType<typeof useCreateContactMutation>;
export type CreateContactMutationResult = Apollo.MutationResult<CreateContactMutation>;
export type CreateContactMutationOptions = Apollo.BaseMutationOptions<CreateContactMutation, CreateContactMutationVariables>;
export const UpdateContactDocument = gql`
    mutation updateContact($input: UpdateContactInput!) {
  updateContact(input: $input) {
    id
    userId
    firstname
    lastname
    dateAnniversaire
    fonction
    category {
      id
      name
      position
      capabilities {
        read
        create
        update
        delete
      }
    }
    lines {
      id
      label
      type
      propertyId
      value
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type UpdateContactMutationFn = Apollo.MutationFunction<UpdateContactMutation, UpdateContactMutationVariables>;

/**
 * __useUpdateContactMutation__
 *
 * To run a mutation, you first call `useUpdateContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContactMutation, { data, loading, error }] = useUpdateContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateContactMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContactMutation, UpdateContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContactMutation, UpdateContactMutationVariables>(UpdateContactDocument, options);
      }
export type UpdateContactMutationHookResult = ReturnType<typeof useUpdateContactMutation>;
export type UpdateContactMutationResult = Apollo.MutationResult<UpdateContactMutation>;
export type UpdateContactMutationOptions = Apollo.BaseMutationOptions<UpdateContactMutation, UpdateContactMutationVariables>;
export const DeleteContactDocument = gql`
    mutation deleteContact($input: IdentifiedInput!) {
  deleteContact(input: $input) {
    id
    userId
    firstname
    lastname
    dateAnniversaire
    fonction
    category {
      id
      name
      position
      capabilities {
        read
        create
        update
        delete
      }
    }
    lines {
      id
      label
      type
      propertyId
      value
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type DeleteContactMutationFn = Apollo.MutationFunction<DeleteContactMutation, DeleteContactMutationVariables>;

/**
 * __useDeleteContactMutation__
 *
 * To run a mutation, you first call `useDeleteContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactMutation, { data, loading, error }] = useDeleteContactMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteContactMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactMutation, DeleteContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactMutation, DeleteContactMutationVariables>(DeleteContactDocument, options);
      }
export type DeleteContactMutationHookResult = ReturnType<typeof useDeleteContactMutation>;
export type DeleteContactMutationResult = Apollo.MutationResult<DeleteContactMutation>;
export type DeleteContactMutationOptions = Apollo.BaseMutationOptions<DeleteContactMutation, DeleteContactMutationVariables>;
export const CreateContactCategoryDocument = gql`
    mutation createContactCategory($input: ContactCategoryInput!) {
  createContactCategory(input: $input) {
    id
    name
    position
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateContactCategoryMutationFn = Apollo.MutationFunction<CreateContactCategoryMutation, CreateContactCategoryMutationVariables>;

/**
 * __useCreateContactCategoryMutation__
 *
 * To run a mutation, you first call `useCreateContactCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactCategoryMutation, { data, loading, error }] = useCreateContactCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContactCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactCategoryMutation, CreateContactCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContactCategoryMutation, CreateContactCategoryMutationVariables>(CreateContactCategoryDocument, options);
      }
export type CreateContactCategoryMutationHookResult = ReturnType<typeof useCreateContactCategoryMutation>;
export type CreateContactCategoryMutationResult = Apollo.MutationResult<CreateContactCategoryMutation>;
export type CreateContactCategoryMutationOptions = Apollo.BaseMutationOptions<CreateContactCategoryMutation, CreateContactCategoryMutationVariables>;
export const UpdateContactCategoryDocument = gql`
    mutation updateContactCategory($input: UpdateContactCategoryInput!) {
  updateContactCategory(input: $input) {
    id
    name
    position
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type UpdateContactCategoryMutationFn = Apollo.MutationFunction<UpdateContactCategoryMutation, UpdateContactCategoryMutationVariables>;

/**
 * __useUpdateContactCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateContactCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContactCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContactCategoryMutation, { data, loading, error }] = useUpdateContactCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateContactCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContactCategoryMutation, UpdateContactCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContactCategoryMutation, UpdateContactCategoryMutationVariables>(UpdateContactCategoryDocument, options);
      }
export type UpdateContactCategoryMutationHookResult = ReturnType<typeof useUpdateContactCategoryMutation>;
export type UpdateContactCategoryMutationResult = Apollo.MutationResult<UpdateContactCategoryMutation>;
export type UpdateContactCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateContactCategoryMutation, UpdateContactCategoryMutationVariables>;
export const DeleteContactCategoryDocument = gql`
    mutation deleteContactCategory($input: IdentifiedInput!) {
  deleteContactCategory(input: $input) {
    id
    name
    position
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type DeleteContactCategoryMutationFn = Apollo.MutationFunction<DeleteContactCategoryMutation, DeleteContactCategoryMutationVariables>;

/**
 * __useDeleteContactCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteContactCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactCategoryMutation, { data, loading, error }] = useDeleteContactCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteContactCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactCategoryMutation, DeleteContactCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactCategoryMutation, DeleteContactCategoryMutationVariables>(DeleteContactCategoryDocument, options);
      }
export type DeleteContactCategoryMutationHookResult = ReturnType<typeof useDeleteContactCategoryMutation>;
export type DeleteContactCategoryMutationResult = Apollo.MutationResult<DeleteContactCategoryMutation>;
export type DeleteContactCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteContactCategoryMutation, DeleteContactCategoryMutationVariables>;
export const ReorderContactCategoriesDocument = gql`
    mutation reorderContactCategories($input: ReorderContactCategoriesInput!) {
  reorderContactCategories(input: $input) {
    id
    name
    position
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type ReorderContactCategoriesMutationFn = Apollo.MutationFunction<ReorderContactCategoriesMutation, ReorderContactCategoriesMutationVariables>;

/**
 * __useReorderContactCategoriesMutation__
 *
 * To run a mutation, you first call `useReorderContactCategoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderContactCategoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderContactCategoriesMutation, { data, loading, error }] = useReorderContactCategoriesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReorderContactCategoriesMutation(baseOptions?: Apollo.MutationHookOptions<ReorderContactCategoriesMutation, ReorderContactCategoriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReorderContactCategoriesMutation, ReorderContactCategoriesMutationVariables>(ReorderContactCategoriesDocument, options);
      }
export type ReorderContactCategoriesMutationHookResult = ReturnType<typeof useReorderContactCategoriesMutation>;
export type ReorderContactCategoriesMutationResult = Apollo.MutationResult<ReorderContactCategoriesMutation>;
export type ReorderContactCategoriesMutationOptions = Apollo.BaseMutationOptions<ReorderContactCategoriesMutation, ReorderContactCategoriesMutationVariables>;
export const CreateContactPropertyDocument = gql`
    mutation createContactProperty($input: ContactPropertyInput!) {
  createContactProperty(input: $input) {
    id
    label
    position
    type
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateContactPropertyMutationFn = Apollo.MutationFunction<CreateContactPropertyMutation, CreateContactPropertyMutationVariables>;

/**
 * __useCreateContactPropertyMutation__
 *
 * To run a mutation, you first call `useCreateContactPropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactPropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactPropertyMutation, { data, loading, error }] = useCreateContactPropertyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContactPropertyMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactPropertyMutation, CreateContactPropertyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContactPropertyMutation, CreateContactPropertyMutationVariables>(CreateContactPropertyDocument, options);
      }
export type CreateContactPropertyMutationHookResult = ReturnType<typeof useCreateContactPropertyMutation>;
export type CreateContactPropertyMutationResult = Apollo.MutationResult<CreateContactPropertyMutation>;
export type CreateContactPropertyMutationOptions = Apollo.BaseMutationOptions<CreateContactPropertyMutation, CreateContactPropertyMutationVariables>;
export const UpdateContactPropertyDocument = gql`
    mutation updateContactProperty($input: UpdateContactPropertyInput!) {
  updateContactProperty(input: $input) {
    id
    label
    position
    type
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type UpdateContactPropertyMutationFn = Apollo.MutationFunction<UpdateContactPropertyMutation, UpdateContactPropertyMutationVariables>;

/**
 * __useUpdateContactPropertyMutation__
 *
 * To run a mutation, you first call `useUpdateContactPropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContactPropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContactPropertyMutation, { data, loading, error }] = useUpdateContactPropertyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateContactPropertyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContactPropertyMutation, UpdateContactPropertyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContactPropertyMutation, UpdateContactPropertyMutationVariables>(UpdateContactPropertyDocument, options);
      }
export type UpdateContactPropertyMutationHookResult = ReturnType<typeof useUpdateContactPropertyMutation>;
export type UpdateContactPropertyMutationResult = Apollo.MutationResult<UpdateContactPropertyMutation>;
export type UpdateContactPropertyMutationOptions = Apollo.BaseMutationOptions<UpdateContactPropertyMutation, UpdateContactPropertyMutationVariables>;
export const DeleteContactPropertyDocument = gql`
    mutation deleteContactProperty($input: IdentifiedInput!) {
  deleteContactProperty(input: $input) {
    id
    label
    position
    type
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type DeleteContactPropertyMutationFn = Apollo.MutationFunction<DeleteContactPropertyMutation, DeleteContactPropertyMutationVariables>;

/**
 * __useDeleteContactPropertyMutation__
 *
 * To run a mutation, you first call `useDeleteContactPropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContactPropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContactPropertyMutation, { data, loading, error }] = useDeleteContactPropertyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteContactPropertyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContactPropertyMutation, DeleteContactPropertyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContactPropertyMutation, DeleteContactPropertyMutationVariables>(DeleteContactPropertyDocument, options);
      }
export type DeleteContactPropertyMutationHookResult = ReturnType<typeof useDeleteContactPropertyMutation>;
export type DeleteContactPropertyMutationResult = Apollo.MutationResult<DeleteContactPropertyMutation>;
export type DeleteContactPropertyMutationOptions = Apollo.BaseMutationOptions<DeleteContactPropertyMutation, DeleteContactPropertyMutationVariables>;
export const ReorderContactPropertiesDocument = gql`
    mutation reorderContactProperties($input: ReorderContactPropertiesInput!) {
  reorderContactProperties(input: $input) {
    id
    label
    position
    type
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type ReorderContactPropertiesMutationFn = Apollo.MutationFunction<ReorderContactPropertiesMutation, ReorderContactPropertiesMutationVariables>;

/**
 * __useReorderContactPropertiesMutation__
 *
 * To run a mutation, you first call `useReorderContactPropertiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderContactPropertiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderContactPropertiesMutation, { data, loading, error }] = useReorderContactPropertiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReorderContactPropertiesMutation(baseOptions?: Apollo.MutationHookOptions<ReorderContactPropertiesMutation, ReorderContactPropertiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReorderContactPropertiesMutation, ReorderContactPropertiesMutationVariables>(ReorderContactPropertiesDocument, options);
      }
export type ReorderContactPropertiesMutationHookResult = ReturnType<typeof useReorderContactPropertiesMutation>;
export type ReorderContactPropertiesMutationResult = Apollo.MutationResult<ReorderContactPropertiesMutation>;
export type ReorderContactPropertiesMutationOptions = Apollo.BaseMutationOptions<ReorderContactPropertiesMutation, ReorderContactPropertiesMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($input: PostInput!) {
  createPost(input: $input) {
    id
    author {
      id
      displayName
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    authorV2 {
      ... on MinimalistOrganisme {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      ... on MinimalistUser {
        id
        displayName
        nom
        email
      }
    }
    categoryId
    category {
      id
      label
      capabilities {
        read
        create
        update
        delete
      }
    }
    group {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    title
    textContent
    content {
      id
      type
    }
    interactions {
      comment
      like
      love
      praise
      surprised
      thinking
    }
    reactions {
      id
      type
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    comments {
      id
      content
      user {
        id
        displayName
        nom
        email
      }
      createdAt
      capabilities {
        read
        create
        update
        delete
        report
      }
    }
    userReaction {
      id
      type
      user {
        id
        displayName
        nom
        email
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    images {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    image {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    publish
    status
    publishedAt
    capabilities {
      read
      create
      update
      delete
      commentV2 {
        read
        create
        update
        delete
        report
      }
      comment
      reaction {
        read
        create
        update
        delete
      }
      content {
        actualite {
          create
        }
        album {
          create
        }
        event {
          create
        }
        sondage {
          create
          respond
        }
        pvReunion {
          create
        }
      }
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation updatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    author {
      id
      displayName
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    authorV2 {
      ... on MinimalistOrganisme {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      ... on MinimalistUser {
        id
        displayName
        nom
        email
      }
    }
    categoryId
    category {
      id
      label
      capabilities {
        read
        create
        update
        delete
      }
    }
    group {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    title
    textContent
    content {
      id
      type
    }
    interactions {
      comment
      like
      love
      praise
      surprised
      thinking
    }
    reactions {
      id
      type
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    comments {
      id
      content
      user {
        id
        displayName
        nom
        email
      }
      createdAt
      capabilities {
        read
        create
        update
        delete
        report
      }
    }
    userReaction {
      id
      type
      user {
        id
        displayName
        nom
        email
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    images {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    image {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    publish
    status
    publishedAt
    capabilities {
      read
      create
      update
      delete
      commentV2 {
        read
        create
        update
        delete
        report
      }
      comment
      reaction {
        read
        create
        update
        delete
      }
      content {
        actualite {
          create
        }
        album {
          create
        }
        event {
          create
        }
        sondage {
          create
          respond
        }
        pvReunion {
          create
        }
      }
    }
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($input: IdentifiedInput!) {
  deletePost(input: $input) {
    id
    author {
      id
      displayName
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    authorV2 {
      ... on MinimalistOrganisme {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      ... on MinimalistUser {
        id
        displayName
        nom
        email
      }
    }
    categoryId
    category {
      id
      label
      capabilities {
        read
        create
        update
        delete
      }
    }
    group {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    title
    textContent
    content {
      id
      type
    }
    interactions {
      comment
      like
      love
      praise
      surprised
      thinking
    }
    reactions {
      id
      type
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    comments {
      id
      content
      user {
        id
        displayName
        nom
        email
      }
      createdAt
      capabilities {
        read
        create
        update
        delete
        report
      }
    }
    userReaction {
      id
      type
      user {
        id
        displayName
        nom
        email
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    images {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    image {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    publish
    status
    publishedAt
    capabilities {
      read
      create
      update
      delete
      commentV2 {
        read
        create
        update
        delete
        report
      }
      comment
      reaction {
        read
        create
        update
        delete
      }
      content {
        actualite {
          create
        }
        album {
          create
        }
        event {
          create
        }
        sondage {
          create
          respond
        }
        pvReunion {
          create
        }
      }
    }
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const ParticipationEventDocument = gql`
    mutation participationEvent($input: ParticipationEventInput!) {
  participationEvent(input: $input)
}
    `;
export type ParticipationEventMutationFn = Apollo.MutationFunction<ParticipationEventMutation, ParticipationEventMutationVariables>;

/**
 * __useParticipationEventMutation__
 *
 * To run a mutation, you first call `useParticipationEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useParticipationEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [participationEventMutation, { data, loading, error }] = useParticipationEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useParticipationEventMutation(baseOptions?: Apollo.MutationHookOptions<ParticipationEventMutation, ParticipationEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ParticipationEventMutation, ParticipationEventMutationVariables>(ParticipationEventDocument, options);
      }
export type ParticipationEventMutationHookResult = ReturnType<typeof useParticipationEventMutation>;
export type ParticipationEventMutationResult = Apollo.MutationResult<ParticipationEventMutation>;
export type ParticipationEventMutationOptions = Apollo.BaseMutationOptions<ParticipationEventMutation, ParticipationEventMutationVariables>;
export const ReponseSondageDocument = gql`
    mutation reponseSondage($reponseSondage_participations_pagination: OffsetPaginationInput, $input: ReponseSondageInput!) {
  reponseSondage(input: $input) {
    id
    type
    question
    sondageId
    endDate
    anonymous
    reponsesAfterEnd
    propositions {
      id
      value
    }
    resultats {
      propositionId
      label
      value
      pourcentage
    }
    userReponse {
      id
      proposition {
        id
        value
      }
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
    }
    participations(pagination: $reponseSondage_participations_pagination) {
      data {
        user {
          id
          displayName
          nom
          email
        }
      }
      pagination {
        count
        offset
        firstItem
        lastItem
        limit
        total
      }
    }
    capabilities {
      create
      respond
    }
  }
}
    `;
export type ReponseSondageMutationFn = Apollo.MutationFunction<ReponseSondageMutation, ReponseSondageMutationVariables>;

/**
 * __useReponseSondageMutation__
 *
 * To run a mutation, you first call `useReponseSondageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReponseSondageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reponseSondageMutation, { data, loading, error }] = useReponseSondageMutation({
 *   variables: {
 *      reponseSondage_participations_pagination: // value for 'reponseSondage_participations_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReponseSondageMutation(baseOptions?: Apollo.MutationHookOptions<ReponseSondageMutation, ReponseSondageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReponseSondageMutation, ReponseSondageMutationVariables>(ReponseSondageDocument, options);
      }
export type ReponseSondageMutationHookResult = ReturnType<typeof useReponseSondageMutation>;
export type ReponseSondageMutationResult = Apollo.MutationResult<ReponseSondageMutation>;
export type ReponseSondageMutationOptions = Apollo.BaseMutationOptions<ReponseSondageMutation, ReponseSondageMutationVariables>;
export const CreateCommentDocument = gql`
    mutation createComment($input: CommentInput) {
  createComment(input: $input) {
    id
    content
    user {
      id
      displayName
      nom
      email
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    createdAt
    capabilities {
      read
      create
      update
      delete
      report
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation updateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    user {
      id
      displayName
      nom
      email
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    createdAt
    capabilities {
      read
      create
      update
      delete
      report
    }
  }
}
    `;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, options);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($input: IdentifiedInput!) {
  deleteComment(input: $input) {
    id
    content
    user {
      id
      displayName
      nom
      email
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    createdAt
    capabilities {
      read
      create
      update
      delete
      report
    }
  }
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const ReportCommentDocument = gql`
    mutation reportComment($input: IdentifiedInput!) {
  reportComment(input: $input) {
    id
    reportable {
      ... on Comment {
        id
        content
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
        createdAt
        capabilities {
          read
          create
          update
          delete
          report
        }
      }
    }
    reportedAt
  }
}
    `;
export type ReportCommentMutationFn = Apollo.MutationFunction<ReportCommentMutation, ReportCommentMutationVariables>;

/**
 * __useReportCommentMutation__
 *
 * To run a mutation, you first call `useReportCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportCommentMutation, { data, loading, error }] = useReportCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReportCommentMutation(baseOptions?: Apollo.MutationHookOptions<ReportCommentMutation, ReportCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReportCommentMutation, ReportCommentMutationVariables>(ReportCommentDocument, options);
      }
export type ReportCommentMutationHookResult = ReturnType<typeof useReportCommentMutation>;
export type ReportCommentMutationResult = Apollo.MutationResult<ReportCommentMutation>;
export type ReportCommentMutationOptions = Apollo.BaseMutationOptions<ReportCommentMutation, ReportCommentMutationVariables>;
export const ReactPostDocument = gql`
    mutation reactPost($input: ReactPostInput!) {
  reactPost(input: $input) {
    id
    author {
      id
      displayName
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    authorV2 {
      ... on MinimalistOrganisme {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      ... on MinimalistUser {
        id
        displayName
        nom
        email
      }
    }
    categoryId
    category {
      id
      label
      capabilities {
        read
        create
        update
        delete
      }
    }
    group {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    title
    textContent
    content {
      id
      type
    }
    interactions {
      comment
      like
      love
      praise
      surprised
      thinking
    }
    reactions {
      id
      type
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    comments {
      id
      content
      user {
        id
        displayName
        nom
        email
      }
      createdAt
      capabilities {
        read
        create
        update
        delete
        report
      }
    }
    userReaction {
      id
      type
      user {
        id
        displayName
        nom
        email
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    images {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    image {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    publish
    status
    publishedAt
    capabilities {
      read
      create
      update
      delete
      commentV2 {
        read
        create
        update
        delete
        report
      }
      comment
      reaction {
        read
        create
        update
        delete
      }
      content {
        actualite {
          create
        }
        album {
          create
        }
        event {
          create
        }
        sondage {
          create
          respond
        }
        pvReunion {
          create
        }
      }
    }
  }
}
    `;
export type ReactPostMutationFn = Apollo.MutationFunction<ReactPostMutation, ReactPostMutationVariables>;

/**
 * __useReactPostMutation__
 *
 * To run a mutation, you first call `useReactPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReactPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reactPostMutation, { data, loading, error }] = useReactPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReactPostMutation(baseOptions?: Apollo.MutationHookOptions<ReactPostMutation, ReactPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReactPostMutation, ReactPostMutationVariables>(ReactPostDocument, options);
      }
export type ReactPostMutationHookResult = ReturnType<typeof useReactPostMutation>;
export type ReactPostMutationResult = Apollo.MutationResult<ReactPostMutation>;
export type ReactPostMutationOptions = Apollo.BaseMutationOptions<ReactPostMutation, ReactPostMutationVariables>;
export const DeletePostUserReactionDocument = gql`
    mutation deletePostUserReaction($input: DeletePostUserReactionInput!) {
  deletePostUserReaction(input: $input) {
    id
    author {
      id
      displayName
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    authorV2 {
      ... on MinimalistOrganisme {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      ... on MinimalistUser {
        id
        displayName
        nom
        email
      }
    }
    categoryId
    category {
      id
      label
      capabilities {
        read
        create
        update
        delete
      }
    }
    group {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    title
    textContent
    content {
      id
      type
    }
    interactions {
      comment
      like
      love
      praise
      surprised
      thinking
    }
    reactions {
      id
      type
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    comments {
      id
      content
      user {
        id
        displayName
        nom
        email
      }
      createdAt
      capabilities {
        read
        create
        update
        delete
        report
      }
    }
    userReaction {
      id
      type
      user {
        id
        displayName
        nom
        email
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    images {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    image {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    publish
    status
    publishedAt
    capabilities {
      read
      create
      update
      delete
      commentV2 {
        read
        create
        update
        delete
        report
      }
      comment
      reaction {
        read
        create
        update
        delete
      }
      content {
        actualite {
          create
        }
        album {
          create
        }
        event {
          create
        }
        sondage {
          create
          respond
        }
        pvReunion {
          create
        }
      }
    }
  }
}
    `;
export type DeletePostUserReactionMutationFn = Apollo.MutationFunction<DeletePostUserReactionMutation, DeletePostUserReactionMutationVariables>;

/**
 * __useDeletePostUserReactionMutation__
 *
 * To run a mutation, you first call `useDeletePostUserReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostUserReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostUserReactionMutation, { data, loading, error }] = useDeletePostUserReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePostUserReactionMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostUserReactionMutation, DeletePostUserReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostUserReactionMutation, DeletePostUserReactionMutationVariables>(DeletePostUserReactionDocument, options);
      }
export type DeletePostUserReactionMutationHookResult = ReturnType<typeof useDeletePostUserReactionMutation>;
export type DeletePostUserReactionMutationResult = Apollo.MutationResult<DeletePostUserReactionMutation>;
export type DeletePostUserReactionMutationOptions = Apollo.BaseMutationOptions<DeletePostUserReactionMutation, DeletePostUserReactionMutationVariables>;
export const CreatePostCategoryDocument = gql`
    mutation createPostCategory($input: PostCategoryInput!) {
  createPostCategory(input: $input) {
    id
    label
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreatePostCategoryMutationFn = Apollo.MutationFunction<CreatePostCategoryMutation, CreatePostCategoryMutationVariables>;

/**
 * __useCreatePostCategoryMutation__
 *
 * To run a mutation, you first call `useCreatePostCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostCategoryMutation, { data, loading, error }] = useCreatePostCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostCategoryMutation, CreatePostCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostCategoryMutation, CreatePostCategoryMutationVariables>(CreatePostCategoryDocument, options);
      }
export type CreatePostCategoryMutationHookResult = ReturnType<typeof useCreatePostCategoryMutation>;
export type CreatePostCategoryMutationResult = Apollo.MutationResult<CreatePostCategoryMutation>;
export type CreatePostCategoryMutationOptions = Apollo.BaseMutationOptions<CreatePostCategoryMutation, CreatePostCategoryMutationVariables>;
export const UpdatePostCategoryDocument = gql`
    mutation updatePostCategory($input: UpdatePostCategoryInput!) {
  updatePostCategory(input: $input) {
    id
    label
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type UpdatePostCategoryMutationFn = Apollo.MutationFunction<UpdatePostCategoryMutation, UpdatePostCategoryMutationVariables>;

/**
 * __useUpdatePostCategoryMutation__
 *
 * To run a mutation, you first call `useUpdatePostCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostCategoryMutation, { data, loading, error }] = useUpdatePostCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostCategoryMutation, UpdatePostCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostCategoryMutation, UpdatePostCategoryMutationVariables>(UpdatePostCategoryDocument, options);
      }
export type UpdatePostCategoryMutationHookResult = ReturnType<typeof useUpdatePostCategoryMutation>;
export type UpdatePostCategoryMutationResult = Apollo.MutationResult<UpdatePostCategoryMutation>;
export type UpdatePostCategoryMutationOptions = Apollo.BaseMutationOptions<UpdatePostCategoryMutation, UpdatePostCategoryMutationVariables>;
export const DeletePostCategoryDocument = gql`
    mutation deletePostCategory($input: IdentifiedInput!) {
  deletePostCategory(input: $input) {
    id
    label
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type DeletePostCategoryMutationFn = Apollo.MutationFunction<DeletePostCategoryMutation, DeletePostCategoryMutationVariables>;

/**
 * __useDeletePostCategoryMutation__
 *
 * To run a mutation, you first call `useDeletePostCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostCategoryMutation, { data, loading, error }] = useDeletePostCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePostCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostCategoryMutation, DeletePostCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostCategoryMutation, DeletePostCategoryMutationVariables>(DeletePostCategoryDocument, options);
      }
export type DeletePostCategoryMutationHookResult = ReturnType<typeof useDeletePostCategoryMutation>;
export type DeletePostCategoryMutationResult = Apollo.MutationResult<DeletePostCategoryMutation>;
export type DeletePostCategoryMutationOptions = Apollo.BaseMutationOptions<DeletePostCategoryMutation, DeletePostCategoryMutationVariables>;
export const BonsplansCommandeBilletUtiliseDocument = gql`
    mutation bonsplansCommandeBilletUtilise($bonsplansCommandeBilletUtilise_produit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $bonsplansCommandeBilletUtilise_produit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: BonsplansCommandeBilletUtiliseInput!) {
  bonsplansCommandeBilletUtilise(input: $input) {
    id
    commandeId
    nom
    utilise
    codeBarres
    codeActivation
    dateExpiration
    montant
    url
    info
    produit {
      id
      nom
      type
      description
      aide
      coordonnees {
        nom
        adresse1
        adresse2
        zipcode
        city
        area
        country
        lat
        lng
        website
      }
      offre
      marketingTags {
        id
        name
        type
      }
      logo {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      cover {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      articles {
        id
        sku {
          source
          productId
          articleId
        }
        nom
        detail
        hasDescription
        description
        quantiteMin
        quantiteMax
        prixPublic
        prixTTC
        carteCadeau {
          valeurFacialeMin
          valeurFacialeMax
        }
        volatiles {
          name
          value
        }
      }
      searchArticlesFiltres(
        input: $bonsplansCommandeBilletUtilise_produit_searchArticlesFiltres_input
      ) {
        type
        name
        label
      }
      searchArticles(
        input: $bonsplansCommandeBilletUtilise_produit_searchArticles_input
      ) {
        id
        sku {
          source
          productId
          articleId
        }
        nom
        detail
        hasDescription
        description
        quantiteMin
        quantiteMax
        prixPublic
        prixTTC
        carteCadeau {
          valeurFacialeMin
          valeurFacialeMax
        }
        volatiles {
          name
          value
        }
      }
      offrePartenaire {
        redirectUrl
      }
    }
  }
}
    `;
export type BonsplansCommandeBilletUtiliseMutationFn = Apollo.MutationFunction<BonsplansCommandeBilletUtiliseMutation, BonsplansCommandeBilletUtiliseMutationVariables>;

/**
 * __useBonsplansCommandeBilletUtiliseMutation__
 *
 * To run a mutation, you first call `useBonsplansCommandeBilletUtiliseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCommandeBilletUtiliseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansCommandeBilletUtiliseMutation, { data, loading, error }] = useBonsplansCommandeBilletUtiliseMutation({
 *   variables: {
 *      bonsplansCommandeBilletUtilise_produit_searchArticlesFiltres_input: // value for 'bonsplansCommandeBilletUtilise_produit_searchArticlesFiltres_input'
 *      bonsplansCommandeBilletUtilise_produit_searchArticles_input: // value for 'bonsplansCommandeBilletUtilise_produit_searchArticles_input'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCommandeBilletUtiliseMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansCommandeBilletUtiliseMutation, BonsplansCommandeBilletUtiliseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansCommandeBilletUtiliseMutation, BonsplansCommandeBilletUtiliseMutationVariables>(BonsplansCommandeBilletUtiliseDocument, options);
      }
export type BonsplansCommandeBilletUtiliseMutationHookResult = ReturnType<typeof useBonsplansCommandeBilletUtiliseMutation>;
export type BonsplansCommandeBilletUtiliseMutationResult = Apollo.MutationResult<BonsplansCommandeBilletUtiliseMutation>;
export type BonsplansCommandeBilletUtiliseMutationOptions = Apollo.BaseMutationOptions<BonsplansCommandeBilletUtiliseMutation, BonsplansCommandeBilletUtiliseMutationVariables>;
export const BonsplansPanierAddArticlesTmpDocument = gql`
    mutation bonsplansPanierAddArticlesTmp($input: BonsplansPanierAddArticlesInput!) {
  bonsplansPanierAddArticlesTmp(input: $input) {
    espace
    lignes {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
      params {
        carteCadeau {
          valeurFaciale
        }
        volatiles {
          name
          value
        }
      }
    }
    sousTotal
    montantWalletsApplique
    total
    totalRemise
  }
}
    `;
export type BonsplansPanierAddArticlesTmpMutationFn = Apollo.MutationFunction<BonsplansPanierAddArticlesTmpMutation, BonsplansPanierAddArticlesTmpMutationVariables>;

/**
 * __useBonsplansPanierAddArticlesTmpMutation__
 *
 * To run a mutation, you first call `useBonsplansPanierAddArticlesTmpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansPanierAddArticlesTmpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansPanierAddArticlesTmpMutation, { data, loading, error }] = useBonsplansPanierAddArticlesTmpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansPanierAddArticlesTmpMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansPanierAddArticlesTmpMutation, BonsplansPanierAddArticlesTmpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansPanierAddArticlesTmpMutation, BonsplansPanierAddArticlesTmpMutationVariables>(BonsplansPanierAddArticlesTmpDocument, options);
      }
export type BonsplansPanierAddArticlesTmpMutationHookResult = ReturnType<typeof useBonsplansPanierAddArticlesTmpMutation>;
export type BonsplansPanierAddArticlesTmpMutationResult = Apollo.MutationResult<BonsplansPanierAddArticlesTmpMutation>;
export type BonsplansPanierAddArticlesTmpMutationOptions = Apollo.BaseMutationOptions<BonsplansPanierAddArticlesTmpMutation, BonsplansPanierAddArticlesTmpMutationVariables>;
export const BonsplansPanierAddArticlesDocument = gql`
    mutation bonsplansPanierAddArticles($input: BonsplansPanierAddArticlesInput!) {
  bonsplansPanierAddArticles(input: $input) {
    espace
    lignes {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
      params {
        carteCadeau {
          valeurFaciale
        }
        volatiles {
          name
          value
        }
      }
    }
    livraisons {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
    }
    wallets {
      id
      nom
      solde
      utiliser
      dateFin
      montantApplique
      params {
        montantsAppliques {
          ligne
          montantApplique
        }
      }
    }
    params {
      livraison {
        company
        firstname
        lastname
        address
        zipcode
        city
        country
      }
    }
    sousTotal
    total
    totalRemise
  }
}
    `;
export type BonsplansPanierAddArticlesMutationFn = Apollo.MutationFunction<BonsplansPanierAddArticlesMutation, BonsplansPanierAddArticlesMutationVariables>;

/**
 * __useBonsplansPanierAddArticlesMutation__
 *
 * To run a mutation, you first call `useBonsplansPanierAddArticlesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansPanierAddArticlesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansPanierAddArticlesMutation, { data, loading, error }] = useBonsplansPanierAddArticlesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansPanierAddArticlesMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansPanierAddArticlesMutation, BonsplansPanierAddArticlesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansPanierAddArticlesMutation, BonsplansPanierAddArticlesMutationVariables>(BonsplansPanierAddArticlesDocument, options);
      }
export type BonsplansPanierAddArticlesMutationHookResult = ReturnType<typeof useBonsplansPanierAddArticlesMutation>;
export type BonsplansPanierAddArticlesMutationResult = Apollo.MutationResult<BonsplansPanierAddArticlesMutation>;
export type BonsplansPanierAddArticlesMutationOptions = Apollo.BaseMutationOptions<BonsplansPanierAddArticlesMutation, BonsplansPanierAddArticlesMutationVariables>;
export const BonsplansPanierUpdateLigneDocument = gql`
    mutation bonsplansPanierUpdateLigne($input: BonsplansPanierUpdateLigneInput!) {
  bonsplansPanierUpdateLigne(input: $input) {
    espace
    lignes {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
      params {
        carteCadeau {
          valeurFaciale
        }
        volatiles {
          name
          value
        }
      }
    }
    livraisons {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
    }
    wallets {
      id
      nom
      solde
      utiliser
      dateFin
      montantApplique
      params {
        montantsAppliques {
          ligne
          montantApplique
        }
      }
    }
    params {
      livraison {
        company
        firstname
        lastname
        address
        zipcode
        city
        country
      }
    }
    sousTotal
    total
    totalRemise
  }
}
    `;
export type BonsplansPanierUpdateLigneMutationFn = Apollo.MutationFunction<BonsplansPanierUpdateLigneMutation, BonsplansPanierUpdateLigneMutationVariables>;

/**
 * __useBonsplansPanierUpdateLigneMutation__
 *
 * To run a mutation, you first call `useBonsplansPanierUpdateLigneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansPanierUpdateLigneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansPanierUpdateLigneMutation, { data, loading, error }] = useBonsplansPanierUpdateLigneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansPanierUpdateLigneMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansPanierUpdateLigneMutation, BonsplansPanierUpdateLigneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansPanierUpdateLigneMutation, BonsplansPanierUpdateLigneMutationVariables>(BonsplansPanierUpdateLigneDocument, options);
      }
export type BonsplansPanierUpdateLigneMutationHookResult = ReturnType<typeof useBonsplansPanierUpdateLigneMutation>;
export type BonsplansPanierUpdateLigneMutationResult = Apollo.MutationResult<BonsplansPanierUpdateLigneMutation>;
export type BonsplansPanierUpdateLigneMutationOptions = Apollo.BaseMutationOptions<BonsplansPanierUpdateLigneMutation, BonsplansPanierUpdateLigneMutationVariables>;
export const BonsplansPanierRemoveLigneDocument = gql`
    mutation bonsplansPanierRemoveLigne($input: BonsplansPanierRemoveLigneInput!) {
  bonsplansPanierRemoveLigne(input: $input) {
    espace
    lignes {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
      params {
        carteCadeau {
          valeurFaciale
        }
        volatiles {
          name
          value
        }
      }
    }
    livraisons {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
    }
    wallets {
      id
      nom
      solde
      utiliser
      dateFin
      montantApplique
      params {
        montantsAppliques {
          ligne
          montantApplique
        }
      }
    }
    params {
      livraison {
        company
        firstname
        lastname
        address
        zipcode
        city
        country
      }
    }
    sousTotal
    total
    totalRemise
  }
}
    `;
export type BonsplansPanierRemoveLigneMutationFn = Apollo.MutationFunction<BonsplansPanierRemoveLigneMutation, BonsplansPanierRemoveLigneMutationVariables>;

/**
 * __useBonsplansPanierRemoveLigneMutation__
 *
 * To run a mutation, you first call `useBonsplansPanierRemoveLigneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansPanierRemoveLigneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansPanierRemoveLigneMutation, { data, loading, error }] = useBonsplansPanierRemoveLigneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansPanierRemoveLigneMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansPanierRemoveLigneMutation, BonsplansPanierRemoveLigneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansPanierRemoveLigneMutation, BonsplansPanierRemoveLigneMutationVariables>(BonsplansPanierRemoveLigneDocument, options);
      }
export type BonsplansPanierRemoveLigneMutationHookResult = ReturnType<typeof useBonsplansPanierRemoveLigneMutation>;
export type BonsplansPanierRemoveLigneMutationResult = Apollo.MutationResult<BonsplansPanierRemoveLigneMutation>;
export type BonsplansPanierRemoveLigneMutationOptions = Apollo.BaseMutationOptions<BonsplansPanierRemoveLigneMutation, BonsplansPanierRemoveLigneMutationVariables>;
export const BonsplansPanierUseWalletDocument = gql`
    mutation bonsplansPanierUseWallet($input: BonsplansPanierUseWalletInput!) {
  bonsplansPanierUseWallet(input: $input) {
    espace
    lignes {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
      params {
        carteCadeau {
          valeurFaciale
        }
        volatiles {
          name
          value
        }
      }
    }
    livraisons {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
    }
    wallets {
      id
      nom
      solde
      utiliser
      dateFin
      montantApplique
      params {
        montantsAppliques {
          ligne
          montantApplique
        }
      }
    }
    params {
      livraison {
        company
        firstname
        lastname
        address
        zipcode
        city
        country
      }
    }
    sousTotal
    total
    totalRemise
  }
}
    `;
export type BonsplansPanierUseWalletMutationFn = Apollo.MutationFunction<BonsplansPanierUseWalletMutation, BonsplansPanierUseWalletMutationVariables>;

/**
 * __useBonsplansPanierUseWalletMutation__
 *
 * To run a mutation, you first call `useBonsplansPanierUseWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansPanierUseWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansPanierUseWalletMutation, { data, loading, error }] = useBonsplansPanierUseWalletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansPanierUseWalletMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansPanierUseWalletMutation, BonsplansPanierUseWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansPanierUseWalletMutation, BonsplansPanierUseWalletMutationVariables>(BonsplansPanierUseWalletDocument, options);
      }
export type BonsplansPanierUseWalletMutationHookResult = ReturnType<typeof useBonsplansPanierUseWalletMutation>;
export type BonsplansPanierUseWalletMutationResult = Apollo.MutationResult<BonsplansPanierUseWalletMutation>;
export type BonsplansPanierUseWalletMutationOptions = Apollo.BaseMutationOptions<BonsplansPanierUseWalletMutation, BonsplansPanierUseWalletMutationVariables>;
export const BonsplansPanierClearDocument = gql`
    mutation bonsplansPanierClear($input: BonsplansPanierClearInput!) {
  bonsplansPanierClear(input: $input) {
    espace
    lignes {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
      params {
        carteCadeau {
          valeurFaciale
        }
        volatiles {
          name
          value
        }
      }
    }
    livraisons {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
    }
    wallets {
      id
      nom
      solde
      utiliser
      dateFin
      montantApplique
      params {
        montantsAppliques {
          ligne
          montantApplique
        }
      }
    }
    params {
      livraison {
        company
        firstname
        lastname
        address
        zipcode
        city
        country
      }
    }
    sousTotal
    total
    totalRemise
  }
}
    `;
export type BonsplansPanierClearMutationFn = Apollo.MutationFunction<BonsplansPanierClearMutation, BonsplansPanierClearMutationVariables>;

/**
 * __useBonsplansPanierClearMutation__
 *
 * To run a mutation, you first call `useBonsplansPanierClearMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBonsplansPanierClearMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bonsplansPanierClearMutation, { data, loading, error }] = useBonsplansPanierClearMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansPanierClearMutation(baseOptions?: Apollo.MutationHookOptions<BonsplansPanierClearMutation, BonsplansPanierClearMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BonsplansPanierClearMutation, BonsplansPanierClearMutationVariables>(BonsplansPanierClearDocument, options);
      }
export type BonsplansPanierClearMutationHookResult = ReturnType<typeof useBonsplansPanierClearMutation>;
export type BonsplansPanierClearMutationResult = Apollo.MutationResult<BonsplansPanierClearMutation>;
export type BonsplansPanierClearMutationOptions = Apollo.BaseMutationOptions<BonsplansPanierClearMutation, BonsplansPanierClearMutationVariables>;
export const CreateCashbackPaymentDocument = gql`
    mutation createCashbackPayment($input: CashbackPaymentInput) {
  createCashbackPayment(input: $input) {
    id
    amount
    iban
    ibic
    firstName
    lastName
    transacState {
      code
      status
      comment
    }
    date
  }
}
    `;
export type CreateCashbackPaymentMutationFn = Apollo.MutationFunction<CreateCashbackPaymentMutation, CreateCashbackPaymentMutationVariables>;

/**
 * __useCreateCashbackPaymentMutation__
 *
 * To run a mutation, you first call `useCreateCashbackPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCashbackPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCashbackPaymentMutation, { data, loading, error }] = useCreateCashbackPaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCashbackPaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCashbackPaymentMutation, CreateCashbackPaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCashbackPaymentMutation, CreateCashbackPaymentMutationVariables>(CreateCashbackPaymentDocument, options);
      }
export type CreateCashbackPaymentMutationHookResult = ReturnType<typeof useCreateCashbackPaymentMutation>;
export type CreateCashbackPaymentMutationResult = Apollo.MutationResult<CreateCashbackPaymentMutation>;
export type CreateCashbackPaymentMutationOptions = Apollo.BaseMutationOptions<CreateCashbackPaymentMutation, CreateCashbackPaymentMutationVariables>;
export const CarteVacancesAbonnementCommandeCreateDocument = gql`
    mutation carteVacancesAbonnementCommandeCreate($carteVacancesAbonnementCommandeCreate_abonnements_pagination: OffsetPaginationInput, $input: CarteVacancesAbonnementCommandeInput!) {
  carteVacancesAbonnementCommandeCreate(input: $input) {
    id
    reference
    statut
    montant
    montantHT
    montantTVA
    montantAbonnements
    montantAbonnementsHT
    montantAbonnementsTVA
    montantCartes
    montantCartesHT
    montantCartesTVA
    montantRemise
    montantRemiseHT
    montantRemiseTVA
    tauxTVA
    quantiteAbonnements
    duree
    physique
    dateCommande
    cheque {
      ORDRE
      ADRESSE
      CODE_POSTAL
      VILLE
    }
    virement {
      IBAN
      BIC
      BANQUE
    }
    abonnements(
      pagination: $carteVacancesAbonnementCommandeCreate_abonnements_pagination
    ) {
      data {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
      pagination {
        count
        offset
        firstItem
        lastItem
        limit
        total
      }
    }
    typePaiement
    factureUrl
  }
}
    `;
export type CarteVacancesAbonnementCommandeCreateMutationFn = Apollo.MutationFunction<CarteVacancesAbonnementCommandeCreateMutation, CarteVacancesAbonnementCommandeCreateMutationVariables>;

/**
 * __useCarteVacancesAbonnementCommandeCreateMutation__
 *
 * To run a mutation, you first call `useCarteVacancesAbonnementCommandeCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAbonnementCommandeCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [carteVacancesAbonnementCommandeCreateMutation, { data, loading, error }] = useCarteVacancesAbonnementCommandeCreateMutation({
 *   variables: {
 *      carteVacancesAbonnementCommandeCreate_abonnements_pagination: // value for 'carteVacancesAbonnementCommandeCreate_abonnements_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarteVacancesAbonnementCommandeCreateMutation(baseOptions?: Apollo.MutationHookOptions<CarteVacancesAbonnementCommandeCreateMutation, CarteVacancesAbonnementCommandeCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CarteVacancesAbonnementCommandeCreateMutation, CarteVacancesAbonnementCommandeCreateMutationVariables>(CarteVacancesAbonnementCommandeCreateDocument, options);
      }
export type CarteVacancesAbonnementCommandeCreateMutationHookResult = ReturnType<typeof useCarteVacancesAbonnementCommandeCreateMutation>;
export type CarteVacancesAbonnementCommandeCreateMutationResult = Apollo.MutationResult<CarteVacancesAbonnementCommandeCreateMutation>;
export type CarteVacancesAbonnementCommandeCreateMutationOptions = Apollo.BaseMutationOptions<CarteVacancesAbonnementCommandeCreateMutation, CarteVacancesAbonnementCommandeCreateMutationVariables>;
export const CarteVacancesAlimentationCreateDocument = gql`
    mutation carteVacancesAlimentationCreate($input: CarteVacancesAlimentationCreateInput!) {
  carteVacancesAlimentationCreate(input: $input) {
    url
    montant
  }
}
    `;
export type CarteVacancesAlimentationCreateMutationFn = Apollo.MutationFunction<CarteVacancesAlimentationCreateMutation, CarteVacancesAlimentationCreateMutationVariables>;

/**
 * __useCarteVacancesAlimentationCreateMutation__
 *
 * To run a mutation, you first call `useCarteVacancesAlimentationCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAlimentationCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [carteVacancesAlimentationCreateMutation, { data, loading, error }] = useCarteVacancesAlimentationCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarteVacancesAlimentationCreateMutation(baseOptions?: Apollo.MutationHookOptions<CarteVacancesAlimentationCreateMutation, CarteVacancesAlimentationCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CarteVacancesAlimentationCreateMutation, CarteVacancesAlimentationCreateMutationVariables>(CarteVacancesAlimentationCreateDocument, options);
      }
export type CarteVacancesAlimentationCreateMutationHookResult = ReturnType<typeof useCarteVacancesAlimentationCreateMutation>;
export type CarteVacancesAlimentationCreateMutationResult = Apollo.MutationResult<CarteVacancesAlimentationCreateMutation>;
export type CarteVacancesAlimentationCreateMutationOptions = Apollo.BaseMutationOptions<CarteVacancesAlimentationCreateMutation, CarteVacancesAlimentationCreateMutationVariables>;
export const CarteVacancesTransactionIssueCreateDocument = gql`
    mutation carteVacancesTransactionIssueCreate($input: CarteVacancesTransactionIssueInput!) {
  carteVacancesTransactionIssueCreate(input: $input) {
    id
    transaction {
      id
      type
      nom
      montant
      statut
      date
      capabilities {
        requestMerchantEligibility
      }
    }
    commercant
    description
    statut
    dateTraitement
    createdAt
  }
}
    `;
export type CarteVacancesTransactionIssueCreateMutationFn = Apollo.MutationFunction<CarteVacancesTransactionIssueCreateMutation, CarteVacancesTransactionIssueCreateMutationVariables>;

/**
 * __useCarteVacancesTransactionIssueCreateMutation__
 *
 * To run a mutation, you first call `useCarteVacancesTransactionIssueCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesTransactionIssueCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [carteVacancesTransactionIssueCreateMutation, { data, loading, error }] = useCarteVacancesTransactionIssueCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarteVacancesTransactionIssueCreateMutation(baseOptions?: Apollo.MutationHookOptions<CarteVacancesTransactionIssueCreateMutation, CarteVacancesTransactionIssueCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CarteVacancesTransactionIssueCreateMutation, CarteVacancesTransactionIssueCreateMutationVariables>(CarteVacancesTransactionIssueCreateDocument, options);
      }
export type CarteVacancesTransactionIssueCreateMutationHookResult = ReturnType<typeof useCarteVacancesTransactionIssueCreateMutation>;
export type CarteVacancesTransactionIssueCreateMutationResult = Apollo.MutationResult<CarteVacancesTransactionIssueCreateMutation>;
export type CarteVacancesTransactionIssueCreateMutationOptions = Apollo.BaseMutationOptions<CarteVacancesTransactionIssueCreateMutation, CarteVacancesTransactionIssueCreateMutationVariables>;
export const OnboardCarteVacancesDocument = gql`
    mutation onboardCarteVacances($input: OnboardCarteVacancesInput!) {
  onboardCarteVacances(input: $input) {
    uri
  }
}
    `;
export type OnboardCarteVacancesMutationFn = Apollo.MutationFunction<OnboardCarteVacancesMutation, OnboardCarteVacancesMutationVariables>;

/**
 * __useOnboardCarteVacancesMutation__
 *
 * To run a mutation, you first call `useOnboardCarteVacancesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnboardCarteVacancesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onboardCarteVacancesMutation, { data, loading, error }] = useOnboardCarteVacancesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOnboardCarteVacancesMutation(baseOptions?: Apollo.MutationHookOptions<OnboardCarteVacancesMutation, OnboardCarteVacancesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnboardCarteVacancesMutation, OnboardCarteVacancesMutationVariables>(OnboardCarteVacancesDocument, options);
      }
export type OnboardCarteVacancesMutationHookResult = ReturnType<typeof useOnboardCarteVacancesMutation>;
export type OnboardCarteVacancesMutationResult = Apollo.MutationResult<OnboardCarteVacancesMutation>;
export type OnboardCarteVacancesMutationOptions = Apollo.BaseMutationOptions<OnboardCarteVacancesMutation, OnboardCarteVacancesMutationVariables>;
export const OnboardCarteVacancesUserDocument = gql`
    mutation onboardCarteVacancesUser($input: OnboardCarteVacancesUserInput!) {
  onboardCarteVacancesUser(input: $input) {
    uri
  }
}
    `;
export type OnboardCarteVacancesUserMutationFn = Apollo.MutationFunction<OnboardCarteVacancesUserMutation, OnboardCarteVacancesUserMutationVariables>;

/**
 * __useOnboardCarteVacancesUserMutation__
 *
 * To run a mutation, you first call `useOnboardCarteVacancesUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnboardCarteVacancesUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onboardCarteVacancesUserMutation, { data, loading, error }] = useOnboardCarteVacancesUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOnboardCarteVacancesUserMutation(baseOptions?: Apollo.MutationHookOptions<OnboardCarteVacancesUserMutation, OnboardCarteVacancesUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnboardCarteVacancesUserMutation, OnboardCarteVacancesUserMutationVariables>(OnboardCarteVacancesUserDocument, options);
      }
export type OnboardCarteVacancesUserMutationHookResult = ReturnType<typeof useOnboardCarteVacancesUserMutation>;
export type OnboardCarteVacancesUserMutationResult = Apollo.MutationResult<OnboardCarteVacancesUserMutation>;
export type OnboardCarteVacancesUserMutationOptions = Apollo.BaseMutationOptions<OnboardCarteVacancesUserMutation, OnboardCarteVacancesUserMutationVariables>;
export const ActivatePhysicalCardDocument = gql`
    mutation activatePhysicalCard($input: ActivatePhysicalCardInput!) {
  activatePhysicalCard(input: $input) {
    uri
  }
}
    `;
export type ActivatePhysicalCardMutationFn = Apollo.MutationFunction<ActivatePhysicalCardMutation, ActivatePhysicalCardMutationVariables>;

/**
 * __useActivatePhysicalCardMutation__
 *
 * To run a mutation, you first call `useActivatePhysicalCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivatePhysicalCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activatePhysicalCardMutation, { data, loading, error }] = useActivatePhysicalCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActivatePhysicalCardMutation(baseOptions?: Apollo.MutationHookOptions<ActivatePhysicalCardMutation, ActivatePhysicalCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActivatePhysicalCardMutation, ActivatePhysicalCardMutationVariables>(ActivatePhysicalCardDocument, options);
      }
export type ActivatePhysicalCardMutationHookResult = ReturnType<typeof useActivatePhysicalCardMutation>;
export type ActivatePhysicalCardMutationResult = Apollo.MutationResult<ActivatePhysicalCardMutation>;
export type ActivatePhysicalCardMutationOptions = Apollo.BaseMutationOptions<ActivatePhysicalCardMutation, ActivatePhysicalCardMutationVariables>;
export const ShowCardDocument = gql`
    mutation showCard($input: ShowCardInput!) {
  showCard(input: $input) {
    uri
  }
}
    `;
export type ShowCardMutationFn = Apollo.MutationFunction<ShowCardMutation, ShowCardMutationVariables>;

/**
 * __useShowCardMutation__
 *
 * To run a mutation, you first call `useShowCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShowCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [showCardMutation, { data, loading, error }] = useShowCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useShowCardMutation(baseOptions?: Apollo.MutationHookOptions<ShowCardMutation, ShowCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShowCardMutation, ShowCardMutationVariables>(ShowCardDocument, options);
      }
export type ShowCardMutationHookResult = ReturnType<typeof useShowCardMutation>;
export type ShowCardMutationResult = Apollo.MutationResult<ShowCardMutation>;
export type ShowCardMutationOptions = Apollo.BaseMutationOptions<ShowCardMutation, ShowCardMutationVariables>;
export const ShowPinDocument = gql`
    mutation showPin($input: ShowPinInput!) {
  showPin(input: $input) {
    uri
  }
}
    `;
export type ShowPinMutationFn = Apollo.MutationFunction<ShowPinMutation, ShowPinMutationVariables>;

/**
 * __useShowPinMutation__
 *
 * To run a mutation, you first call `useShowPinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShowPinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [showPinMutation, { data, loading, error }] = useShowPinMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useShowPinMutation(baseOptions?: Apollo.MutationHookOptions<ShowPinMutation, ShowPinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShowPinMutation, ShowPinMutationVariables>(ShowPinDocument, options);
      }
export type ShowPinMutationHookResult = ReturnType<typeof useShowPinMutation>;
export type ShowPinMutationResult = Apollo.MutationResult<ShowPinMutation>;
export type ShowPinMutationOptions = Apollo.BaseMutationOptions<ShowPinMutation, ShowPinMutationVariables>;
export const LockPhysicalCardDocument = gql`
    mutation lockPhysicalCard($lockPhysicalCard_carte_transactions_pagination: OffsetPaginationInput, $input: LockPhysicalCardInput!) {
  lockPhysicalCard(input: $input) {
    statut
    abonnement {
      id
      statut
      dateDebut
      dateFin
      physique
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
    }
    carte {
      id
      imageBackgroundUrl
      cardMaskedNumber
      cardHolder
      expiryDate
      solde
      physique {
        blocked
        canceled
        deliveryUrl
        deliveryDate
      }
      transactions(pagination: $lockPhysicalCard_carte_transactions_pagination) {
        data {
          id
          type
          nom
          montant
          statut
          date
          capabilities {
            requestMerchantEligibility
          }
        }
        pagination {
          count
          offset
          firstItem
          lastItem
          limit
          total
        }
      }
      capabilities {
        showCard
        showPin
        activatePhysicalCard
        lockPhysicalCard
        unlockPhysicalCard
        orderPhysicalCard
      }
    }
    solde
    personalWallet {
      id
      solde
    }
  }
}
    `;
export type LockPhysicalCardMutationFn = Apollo.MutationFunction<LockPhysicalCardMutation, LockPhysicalCardMutationVariables>;

/**
 * __useLockPhysicalCardMutation__
 *
 * To run a mutation, you first call `useLockPhysicalCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLockPhysicalCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lockPhysicalCardMutation, { data, loading, error }] = useLockPhysicalCardMutation({
 *   variables: {
 *      lockPhysicalCard_carte_transactions_pagination: // value for 'lockPhysicalCard_carte_transactions_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLockPhysicalCardMutation(baseOptions?: Apollo.MutationHookOptions<LockPhysicalCardMutation, LockPhysicalCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LockPhysicalCardMutation, LockPhysicalCardMutationVariables>(LockPhysicalCardDocument, options);
      }
export type LockPhysicalCardMutationHookResult = ReturnType<typeof useLockPhysicalCardMutation>;
export type LockPhysicalCardMutationResult = Apollo.MutationResult<LockPhysicalCardMutation>;
export type LockPhysicalCardMutationOptions = Apollo.BaseMutationOptions<LockPhysicalCardMutation, LockPhysicalCardMutationVariables>;
export const UnlockPhysicalCardDocument = gql`
    mutation unlockPhysicalCard($input: UnlockPhysicalCardInput!) {
  unlockPhysicalCard(input: $input) {
    uri
  }
}
    `;
export type UnlockPhysicalCardMutationFn = Apollo.MutationFunction<UnlockPhysicalCardMutation, UnlockPhysicalCardMutationVariables>;

/**
 * __useUnlockPhysicalCardMutation__
 *
 * To run a mutation, you first call `useUnlockPhysicalCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlockPhysicalCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlockPhysicalCardMutation, { data, loading, error }] = useUnlockPhysicalCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUnlockPhysicalCardMutation(baseOptions?: Apollo.MutationHookOptions<UnlockPhysicalCardMutation, UnlockPhysicalCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnlockPhysicalCardMutation, UnlockPhysicalCardMutationVariables>(UnlockPhysicalCardDocument, options);
      }
export type UnlockPhysicalCardMutationHookResult = ReturnType<typeof useUnlockPhysicalCardMutation>;
export type UnlockPhysicalCardMutationResult = Apollo.MutationResult<UnlockPhysicalCardMutation>;
export type UnlockPhysicalCardMutationOptions = Apollo.BaseMutationOptions<UnlockPhysicalCardMutation, UnlockPhysicalCardMutationVariables>;
export const CreateWalletsDistributionDocument = gql`
    mutation createWalletsDistribution($input: WalletsDistributionInput!) {
  createWalletsDistribution(input: $input) {
    id
    nom
    reference
    typeDistribution
    statut
    motifId
    motif {
      id
      typeDistribuable
      nom
      fontColor
      cover {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      duree
      dureeMax
      conditionsUtilisation
      produitPapierId
    }
    distribuables {
      ... on WalletsDistributionReductionRule {
        typeDistribuable
        subventionRule {
          ... on WalletsDistributionSubventionRulePourcentage {
            typeSubventionRule
            value
          }
          ... on WalletsDistributionSubventionRuleFixe {
            typeSubventionRule
            value
          }
          ... on WalletsDistributionSubventionRuleCagnotte {
            typeSubventionRule
          }
        }
        quotaRule {
          quotaType
          quota
          quotaRenouvelable
        }
        subventionnables {
          subventionnableType
          subventionnableId
          subventionnableNom
        }
        catalogue {
          id
          nom
          univers
          accroche
          visuel {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          categories {
            id
            catalogueId
            parentId
            level
            nom
          }
        }
      }
      ... on WalletsDistributionRemboursementRule {
        typeDistribuable
        subventionRule {
          ... on WalletsDistributionSubventionRulePourcentage {
            typeSubventionRule
            value
          }
          ... on WalletsDistributionSubventionRuleFixe {
            typeSubventionRule
            value
          }
          ... on WalletsDistributionSubventionRuleCagnotte {
            typeSubventionRule
          }
        }
      }
      ... on WalletsDistributionMotif {
        id
        typeDistribuable
        nom
        fontColor
        cover {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        duree
        dureeMax
        conditionsUtilisation
        produitPapierId
      }
      ... on WalletsDistributionCarteConfig {
        typeDistribuable
      }
    }
    dateDebut
    dateFin
    dateCloture
    conditionsUtilisation
    montant
    montantRemise
    solde
    pourcentageConsomme
    montantRembourse
    cnt
    secured
    factureUrl
    createdAt
    updatedAt
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateWalletsDistributionMutationFn = Apollo.MutationFunction<CreateWalletsDistributionMutation, CreateWalletsDistributionMutationVariables>;

/**
 * __useCreateWalletsDistributionMutation__
 *
 * To run a mutation, you first call `useCreateWalletsDistributionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWalletsDistributionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWalletsDistributionMutation, { data, loading, error }] = useCreateWalletsDistributionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWalletsDistributionMutation(baseOptions?: Apollo.MutationHookOptions<CreateWalletsDistributionMutation, CreateWalletsDistributionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWalletsDistributionMutation, CreateWalletsDistributionMutationVariables>(CreateWalletsDistributionDocument, options);
      }
export type CreateWalletsDistributionMutationHookResult = ReturnType<typeof useCreateWalletsDistributionMutation>;
export type CreateWalletsDistributionMutationResult = Apollo.MutationResult<CreateWalletsDistributionMutation>;
export type CreateWalletsDistributionMutationOptions = Apollo.BaseMutationOptions<CreateWalletsDistributionMutation, CreateWalletsDistributionMutationVariables>;
export const CreateWalletsProvisionningDocument = gql`
    mutation createWalletsProvisionning($createWalletsProvisionning_organismeWallet_mouvements_pagination: OffsetPaginationInput, $input: WalletsProvisionningInput) {
  createWalletsProvisionning(input: $input) {
    id
    nom
    montant
    montantAttente
    montantRemise
    typeProvisionning
    typePaiement
    statut
    dateReception
    factureUrl
    createdAt
    updatedAt
    organismeWallet {
      id
      nom
      solde
      montantAttente
      iban
      bic
      culture {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      ecc {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      sub {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
      mouvements(
        pagination: $createWalletsProvisionning_organismeWallet_mouvements_pagination
      ) {
        data {
          id
          nom
          montant
          solde
          dateMvt
        }
        pagination {
          count
          offset
          firstItem
          lastItem
          limit
          total
        }
      }
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateWalletsProvisionningMutationFn = Apollo.MutationFunction<CreateWalletsProvisionningMutation, CreateWalletsProvisionningMutationVariables>;

/**
 * __useCreateWalletsProvisionningMutation__
 *
 * To run a mutation, you first call `useCreateWalletsProvisionningMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWalletsProvisionningMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWalletsProvisionningMutation, { data, loading, error }] = useCreateWalletsProvisionningMutation({
 *   variables: {
 *      createWalletsProvisionning_organismeWallet_mouvements_pagination: // value for 'createWalletsProvisionning_organismeWallet_mouvements_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWalletsProvisionningMutation(baseOptions?: Apollo.MutationHookOptions<CreateWalletsProvisionningMutation, CreateWalletsProvisionningMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWalletsProvisionningMutation, CreateWalletsProvisionningMutationVariables>(CreateWalletsProvisionningDocument, options);
      }
export type CreateWalletsProvisionningMutationHookResult = ReturnType<typeof useCreateWalletsProvisionningMutation>;
export type CreateWalletsProvisionningMutationResult = Apollo.MutationResult<CreateWalletsProvisionningMutation>;
export type CreateWalletsProvisionningMutationOptions = Apollo.BaseMutationOptions<CreateWalletsProvisionningMutation, CreateWalletsProvisionningMutationVariables>;
export const CreateWalletsProvisionningCultureDocument = gql`
    mutation createWalletsProvisionningCulture($createWalletsProvisionningCulture_organismeWallet_mouvements_pagination: OffsetPaginationInput, $input: WalletsProvisionningCultureInput) {
  createWalletsProvisionningCulture(input: $input) {
    id
    nom
    montant
    montantAttente
    montantRemise
    typeProvisionning
    typePaiement
    statut
    dateReception
    factureUrl
    createdAt
    updatedAt
    organismeWallet {
      id
      nom
      solde
      montantAttente
      iban
      bic
      culture {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      ecc {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      sub {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
      mouvements(
        pagination: $createWalletsProvisionningCulture_organismeWallet_mouvements_pagination
      ) {
        data {
          id
          nom
          montant
          solde
          dateMvt
        }
        pagination {
          count
          offset
          firstItem
          lastItem
          limit
          total
        }
      }
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateWalletsProvisionningCultureMutationFn = Apollo.MutationFunction<CreateWalletsProvisionningCultureMutation, CreateWalletsProvisionningCultureMutationVariables>;

/**
 * __useCreateWalletsProvisionningCultureMutation__
 *
 * To run a mutation, you first call `useCreateWalletsProvisionningCultureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWalletsProvisionningCultureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWalletsProvisionningCultureMutation, { data, loading, error }] = useCreateWalletsProvisionningCultureMutation({
 *   variables: {
 *      createWalletsProvisionningCulture_organismeWallet_mouvements_pagination: // value for 'createWalletsProvisionningCulture_organismeWallet_mouvements_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWalletsProvisionningCultureMutation(baseOptions?: Apollo.MutationHookOptions<CreateWalletsProvisionningCultureMutation, CreateWalletsProvisionningCultureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWalletsProvisionningCultureMutation, CreateWalletsProvisionningCultureMutationVariables>(CreateWalletsProvisionningCultureDocument, options);
      }
export type CreateWalletsProvisionningCultureMutationHookResult = ReturnType<typeof useCreateWalletsProvisionningCultureMutation>;
export type CreateWalletsProvisionningCultureMutationResult = Apollo.MutationResult<CreateWalletsProvisionningCultureMutation>;
export type CreateWalletsProvisionningCultureMutationOptions = Apollo.BaseMutationOptions<CreateWalletsProvisionningCultureMutation, CreateWalletsProvisionningCultureMutationVariables>;
export const CreateWalletsProvisionningEccDocument = gql`
    mutation createWalletsProvisionningEcc($createWalletsProvisionningEcc_organismeWallet_mouvements_pagination: OffsetPaginationInput, $input: WalletsProvisionningEccInput) {
  createWalletsProvisionningEcc(input: $input) {
    id
    nom
    montant
    montantAttente
    montantRemise
    typeProvisionning
    typePaiement
    statut
    dateReception
    factureUrl
    createdAt
    updatedAt
    organismeWallet {
      id
      nom
      solde
      montantAttente
      iban
      bic
      culture {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      ecc {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      sub {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
      mouvements(
        pagination: $createWalletsProvisionningEcc_organismeWallet_mouvements_pagination
      ) {
        data {
          id
          nom
          montant
          solde
          dateMvt
        }
        pagination {
          count
          offset
          firstItem
          lastItem
          limit
          total
        }
      }
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateWalletsProvisionningEccMutationFn = Apollo.MutationFunction<CreateWalletsProvisionningEccMutation, CreateWalletsProvisionningEccMutationVariables>;

/**
 * __useCreateWalletsProvisionningEccMutation__
 *
 * To run a mutation, you first call `useCreateWalletsProvisionningEccMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWalletsProvisionningEccMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWalletsProvisionningEccMutation, { data, loading, error }] = useCreateWalletsProvisionningEccMutation({
 *   variables: {
 *      createWalletsProvisionningEcc_organismeWallet_mouvements_pagination: // value for 'createWalletsProvisionningEcc_organismeWallet_mouvements_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWalletsProvisionningEccMutation(baseOptions?: Apollo.MutationHookOptions<CreateWalletsProvisionningEccMutation, CreateWalletsProvisionningEccMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWalletsProvisionningEccMutation, CreateWalletsProvisionningEccMutationVariables>(CreateWalletsProvisionningEccDocument, options);
      }
export type CreateWalletsProvisionningEccMutationHookResult = ReturnType<typeof useCreateWalletsProvisionningEccMutation>;
export type CreateWalletsProvisionningEccMutationResult = Apollo.MutationResult<CreateWalletsProvisionningEccMutation>;
export type CreateWalletsProvisionningEccMutationOptions = Apollo.BaseMutationOptions<CreateWalletsProvisionningEccMutation, CreateWalletsProvisionningEccMutationVariables>;
export const CreateWalletsProvisionningSubDocument = gql`
    mutation createWalletsProvisionningSub($createWalletsProvisionningSub_organismeWallet_mouvements_pagination: OffsetPaginationInput, $input: WalletsProvisionningSubInput) {
  createWalletsProvisionningSub(input: $input) {
    id
    nom
    montant
    montantAttente
    montantRemise
    typeProvisionning
    typePaiement
    statut
    dateReception
    factureUrl
    createdAt
    updatedAt
    organismeWallet {
      id
      nom
      solde
      montantAttente
      iban
      bic
      culture {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      ecc {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      sub {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
      mouvements(
        pagination: $createWalletsProvisionningSub_organismeWallet_mouvements_pagination
      ) {
        data {
          id
          nom
          montant
          solde
          dateMvt
        }
        pagination {
          count
          offset
          firstItem
          lastItem
          limit
          total
        }
      }
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;
export type CreateWalletsProvisionningSubMutationFn = Apollo.MutationFunction<CreateWalletsProvisionningSubMutation, CreateWalletsProvisionningSubMutationVariables>;

/**
 * __useCreateWalletsProvisionningSubMutation__
 *
 * To run a mutation, you first call `useCreateWalletsProvisionningSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWalletsProvisionningSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWalletsProvisionningSubMutation, { data, loading, error }] = useCreateWalletsProvisionningSubMutation({
 *   variables: {
 *      createWalletsProvisionningSub_organismeWallet_mouvements_pagination: // value for 'createWalletsProvisionningSub_organismeWallet_mouvements_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWalletsProvisionningSubMutation(baseOptions?: Apollo.MutationHookOptions<CreateWalletsProvisionningSubMutation, CreateWalletsProvisionningSubMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWalletsProvisionningSubMutation, CreateWalletsProvisionningSubMutationVariables>(CreateWalletsProvisionningSubDocument, options);
      }
export type CreateWalletsProvisionningSubMutationHookResult = ReturnType<typeof useCreateWalletsProvisionningSubMutation>;
export type CreateWalletsProvisionningSubMutationResult = Apollo.MutationResult<CreateWalletsProvisionningSubMutation>;
export type CreateWalletsProvisionningSubMutationOptions = Apollo.BaseMutationOptions<CreateWalletsProvisionningSubMutation, CreateWalletsProvisionningSubMutationVariables>;
export const WalletsUserActivateWalletDocument = gql`
    mutation walletsUserActivateWallet($input: WalletsUserActivateWalletInput!) {
  walletsUserActivateWallet(input: $input) {
    id
    nom
    user {
      id
      displayName
      nom
      email
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    distributionId
    montantInitial
    solde
    used
    usedAt
    nbrRelances
    actif
    statut
    pourcentageConsomme
    distribution {
      id
      nom
      typeDistribution
      motifId
      motif {
        id
        typeDistribuable
        nom
        fontColor
        cover {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        duree
        dureeMax
        conditionsUtilisation
        produitPapierId
      }
      distribuables {
        ... on WalletsDistributionReductionRule {
          typeDistribuable
          subventionRule {
            ... on WalletsDistributionSubventionRulePourcentage {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleFixe {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleCagnotte {
              typeSubventionRule
            }
          }
          quotaRule {
            quotaType
            quota
            quotaRenouvelable
          }
          subventionnables {
            subventionnableType
            subventionnableId
            subventionnableNom
          }
          catalogue {
            id
            nom
            univers
            accroche
          }
        }
        ... on WalletsDistributionRemboursementRule {
          typeDistribuable
          subventionRule {
            ... on WalletsDistributionSubventionRulePourcentage {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleFixe {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleCagnotte {
              typeSubventionRule
            }
          }
        }
        ... on WalletsDistributionMotif {
          id
          typeDistribuable
          nom
          fontColor
          cover {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          duree
          dureeMax
          conditionsUtilisation
          produitPapierId
        }
        ... on WalletsDistributionCarteConfig {
          typeDistribuable
        }
      }
      dateDebut
      dateFin
      conditionsUtilisation
    }
    capabilities {
      share
      use
    }
    vedetteEmplacement {
      emplacementType
      emplacementId
    }
    espace
    quota {
      id
      quotaRule {
        quotaType
        quota
        quotaRenouvelable
      }
      quotaConsomme
      dateDebut
      dateFin
    }
  }
}
    `;
export type WalletsUserActivateWalletMutationFn = Apollo.MutationFunction<WalletsUserActivateWalletMutation, WalletsUserActivateWalletMutationVariables>;

/**
 * __useWalletsUserActivateWalletMutation__
 *
 * To run a mutation, you first call `useWalletsUserActivateWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWalletsUserActivateWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [walletsUserActivateWalletMutation, { data, loading, error }] = useWalletsUserActivateWalletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWalletsUserActivateWalletMutation(baseOptions?: Apollo.MutationHookOptions<WalletsUserActivateWalletMutation, WalletsUserActivateWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WalletsUserActivateWalletMutation, WalletsUserActivateWalletMutationVariables>(WalletsUserActivateWalletDocument, options);
      }
export type WalletsUserActivateWalletMutationHookResult = ReturnType<typeof useWalletsUserActivateWalletMutation>;
export type WalletsUserActivateWalletMutationResult = Apollo.MutationResult<WalletsUserActivateWalletMutation>;
export type WalletsUserActivateWalletMutationOptions = Apollo.BaseMutationOptions<WalletsUserActivateWalletMutation, WalletsUserActivateWalletMutationVariables>;
export const WalletsUserSendActivationCodeDocument = gql`
    mutation walletsUserSendActivationCode($input: WalletsUserSendActivationCodeInput!) {
  walletsUserSendActivationCode(input: $input)
}
    `;
export type WalletsUserSendActivationCodeMutationFn = Apollo.MutationFunction<WalletsUserSendActivationCodeMutation, WalletsUserSendActivationCodeMutationVariables>;

/**
 * __useWalletsUserSendActivationCodeMutation__
 *
 * To run a mutation, you first call `useWalletsUserSendActivationCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWalletsUserSendActivationCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [walletsUserSendActivationCodeMutation, { data, loading, error }] = useWalletsUserSendActivationCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWalletsUserSendActivationCodeMutation(baseOptions?: Apollo.MutationHookOptions<WalletsUserSendActivationCodeMutation, WalletsUserSendActivationCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WalletsUserSendActivationCodeMutation, WalletsUserSendActivationCodeMutationVariables>(WalletsUserSendActivationCodeDocument, options);
      }
export type WalletsUserSendActivationCodeMutationHookResult = ReturnType<typeof useWalletsUserSendActivationCodeMutation>;
export type WalletsUserSendActivationCodeMutationResult = Apollo.MutationResult<WalletsUserSendActivationCodeMutation>;
export type WalletsUserSendActivationCodeMutationOptions = Apollo.BaseMutationOptions<WalletsUserSendActivationCodeMutation, WalletsUserSendActivationCodeMutationVariables>;
export const WalletsUserPartageWalletDocument = gql`
    mutation walletsUserPartageWallet($input: WalletsUserPartageWalletInput!) {
  walletsUserPartageWallet(input: $input) {
    id
    nom
    montant
    datePartage
  }
}
    `;
export type WalletsUserPartageWalletMutationFn = Apollo.MutationFunction<WalletsUserPartageWalletMutation, WalletsUserPartageWalletMutationVariables>;

/**
 * __useWalletsUserPartageWalletMutation__
 *
 * To run a mutation, you first call `useWalletsUserPartageWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWalletsUserPartageWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [walletsUserPartageWalletMutation, { data, loading, error }] = useWalletsUserPartageWalletMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWalletsUserPartageWalletMutation(baseOptions?: Apollo.MutationHookOptions<WalletsUserPartageWalletMutation, WalletsUserPartageWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WalletsUserPartageWalletMutation, WalletsUserPartageWalletMutationVariables>(WalletsUserPartageWalletDocument, options);
      }
export type WalletsUserPartageWalletMutationHookResult = ReturnType<typeof useWalletsUserPartageWalletMutation>;
export type WalletsUserPartageWalletMutationResult = Apollo.MutationResult<WalletsUserPartageWalletMutation>;
export type WalletsUserPartageWalletMutationOptions = Apollo.BaseMutationOptions<WalletsUserPartageWalletMutation, WalletsUserPartageWalletMutationVariables>;
export const InterruptDocument = gql`
    query interrupt {
  interrupt {
    action
    workflow
  }
}
    `;

/**
 * __useInterruptQuery__
 *
 * To run a query within a React component, call `useInterruptQuery` and pass it any options that fit your needs.
 * When your component renders, `useInterruptQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInterruptQuery({
 *   variables: {
 *   },
 * });
 */
export function useInterruptQuery(baseOptions?: Apollo.QueryHookOptions<InterruptQuery, InterruptQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InterruptQuery, InterruptQueryVariables>(InterruptDocument, options);
      }
export function useInterruptLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InterruptQuery, InterruptQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InterruptQuery, InterruptQueryVariables>(InterruptDocument, options);
        }
export type InterruptQueryHookResult = ReturnType<typeof useInterruptQuery>;
export type InterruptLazyQueryHookResult = ReturnType<typeof useInterruptLazyQuery>;
export type InterruptQueryResult = Apollo.QueryResult<InterruptQuery, InterruptQueryVariables>;
export const SignupInvitationDocument = gql`
    query signupInvitation($input: SignupInvitationInput) {
  signupInvitation(input: $input) {
    id
    organisme {
      id
      name
      address
      zipcode
      city
      country
      indicatif
      capabilities {
        Organisme {
          update
          createChild
        }
        ClubAvantages {
          read
          use
        }
        Bonsplans {
          stats
        }
        Contact {
          read
          create
          update
          delete
        }
        ContactCategory {
          read
          create
          update
          delete
        }
        ContactProperty {
          read
          create
          update
          delete
        }
        DistributionCulture {
          read
          create
          update
          delete
        }
        DistributionEcc {
          read
          create
          update
          delete
        }
        DistributionSub {
          read
          create
          update
          delete
        }
        DistributionVacances {
          read
          create
          update
          delete
        }
        CarteVacancesAbonnement {
          read
          create
          useOptionsPaiement
        }
        Ecc {
          preview
          use
        }
        OrganismeWallet {
          read
          create
          update
          delete
        }
        Post {
          read
          create
          update
          delete
          commentV2 {
            read
            create
            update
            delete
            report
          }
          comment
          reaction {
            read
            create
            update
            delete
          }
        }
        PostCategory {
          read
          create
          update
          delete
        }
        Provisionning {
          read
          create
          update
          delete
        }
        Report {
          read
        }
        User {
          read
          create
          createBatch
          update
          suspend
          resume
          delete
          resendInvitation
          sendInvitation
          changeRole
          changeGroups
        }
        UserGroup {
          read
          create
          update
          delete
        }
        Abonnement {
          read
          create
          update
          delete
        }
      }
      config {
        organisme {
          hasMultiOrganisme
          timezone
        }
        wallet {
          hasOrganismeWallet
          hasCarteVacances
          rembourserEccPerime
        }
      }
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    invitedBy {
      id
      displayName
      nom
      email
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
    }
    user {
      id
      displayName
      nom
      email
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
    }
    userActivatedAt
    token
  }
}
    `;

/**
 * __useSignupInvitationQuery__
 *
 * To run a query within a React component, call `useSignupInvitationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignupInvitationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignupInvitationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupInvitationQuery(baseOptions?: Apollo.QueryHookOptions<SignupInvitationQuery, SignupInvitationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SignupInvitationQuery, SignupInvitationQueryVariables>(SignupInvitationDocument, options);
      }
export function useSignupInvitationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SignupInvitationQuery, SignupInvitationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SignupInvitationQuery, SignupInvitationQueryVariables>(SignupInvitationDocument, options);
        }
export type SignupInvitationQueryHookResult = ReturnType<typeof useSignupInvitationQuery>;
export type SignupInvitationLazyQueryHookResult = ReturnType<typeof useSignupInvitationLazyQuery>;
export type SignupInvitationQueryResult = Apollo.QueryResult<SignupInvitationQuery, SignupInvitationQueryVariables>;
export const SsoAuthTokenDocument = gql`
    query ssoAuthToken {
  ssoAuthToken
}
    `;

/**
 * __useSsoAuthTokenQuery__
 *
 * To run a query within a React component, call `useSsoAuthTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useSsoAuthTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSsoAuthTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useSsoAuthTokenQuery(baseOptions?: Apollo.QueryHookOptions<SsoAuthTokenQuery, SsoAuthTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SsoAuthTokenQuery, SsoAuthTokenQueryVariables>(SsoAuthTokenDocument, options);
      }
export function useSsoAuthTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SsoAuthTokenQuery, SsoAuthTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SsoAuthTokenQuery, SsoAuthTokenQueryVariables>(SsoAuthTokenDocument, options);
        }
export type SsoAuthTokenQueryHookResult = ReturnType<typeof useSsoAuthTokenQuery>;
export type SsoAuthTokenLazyQueryHookResult = ReturnType<typeof useSsoAuthTokenLazyQuery>;
export type SsoAuthTokenQueryResult = Apollo.QueryResult<SsoAuthTokenQuery, SsoAuthTokenQueryVariables>;
export const ClubAvantagesCataloguesDocument = gql`
    query clubAvantagesCatalogues {
  clubAvantagesCatalogues {
    ... on BonsplansCatalogue {
      id
      nom
      univers
      accroche
      visuel {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      categories {
        id
        catalogueId
        parentId
        level
        nom
      }
    }
    ... on ReductionCodeCatalogue {
      nom
      accroche
    }
  }
}
    `;

/**
 * __useClubAvantagesCataloguesQuery__
 *
 * To run a query within a React component, call `useClubAvantagesCataloguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useClubAvantagesCataloguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClubAvantagesCataloguesQuery({
 *   variables: {
 *   },
 * });
 */
export function useClubAvantagesCataloguesQuery(baseOptions?: Apollo.QueryHookOptions<ClubAvantagesCataloguesQuery, ClubAvantagesCataloguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClubAvantagesCataloguesQuery, ClubAvantagesCataloguesQueryVariables>(ClubAvantagesCataloguesDocument, options);
      }
export function useClubAvantagesCataloguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClubAvantagesCataloguesQuery, ClubAvantagesCataloguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClubAvantagesCataloguesQuery, ClubAvantagesCataloguesQueryVariables>(ClubAvantagesCataloguesDocument, options);
        }
export type ClubAvantagesCataloguesQueryHookResult = ReturnType<typeof useClubAvantagesCataloguesQuery>;
export type ClubAvantagesCataloguesLazyQueryHookResult = ReturnType<typeof useClubAvantagesCataloguesLazyQuery>;
export type ClubAvantagesCataloguesQueryResult = Apollo.QueryResult<ClubAvantagesCataloguesQuery, ClubAvantagesCataloguesQueryVariables>;
export const OrganismeDocument = gql`
    query organisme($id: ID!) {
  organisme(id: $id) {
    id
    name
    address
    zipcode
    city
    country
    indicatif
    capabilities {
      Organisme {
        update
        createChild
      }
      ClubAvantages {
        read
        use
      }
      Bonsplans {
        stats
      }
      Contact {
        read
        create
        update
        delete
      }
      ContactCategory {
        read
        create
        update
        delete
      }
      ContactProperty {
        read
        create
        update
        delete
      }
      DistributionCulture {
        read
        create
        update
        delete
      }
      DistributionEcc {
        read
        create
        update
        delete
      }
      DistributionSub {
        read
        create
        update
        delete
      }
      DistributionVacances {
        read
        create
        update
        delete
      }
      CarteVacancesAbonnement {
        read
        create
        useOptionsPaiement
      }
      Ecc {
        preview
        use
      }
      OrganismeWallet {
        read
        create
        update
        delete
      }
      Post {
        read
        create
        update
        delete
        commentV2 {
          read
          create
          update
          delete
          report
        }
        comment
        reaction {
          read
          create
          update
          delete
        }
        content {
          actualite {
            create
          }
          album {
            create
          }
          event {
            create
          }
          sondage {
            create
            respond
          }
          pvReunion {
            create
          }
        }
      }
      PostCategory {
        read
        create
        update
        delete
      }
      Provisionning {
        read
        create
        update
        delete
      }
      Report {
        read
      }
      User {
        read
        create
        createBatch
        update
        suspend
        resume
        delete
        resendInvitation
        sendInvitation
        changeRole
        changeGroups
      }
      UserGroup {
        read
        create
        update
        delete
      }
      Abonnement {
        read
        create
        update
        delete
      }
    }
    config {
      organisme {
        hasMultiOrganisme
        timezone
      }
      wallet {
        hasOrganismeWallet
        hasCarteVacances
        rembourserEccPerime
      }
    }
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
  }
}
    `;

/**
 * __useOrganismeQuery__
 *
 * To run a query within a React component, call `useOrganismeQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganismeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganismeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrganismeQuery(baseOptions: Apollo.QueryHookOptions<OrganismeQuery, OrganismeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganismeQuery, OrganismeQueryVariables>(OrganismeDocument, options);
      }
export function useOrganismeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganismeQuery, OrganismeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganismeQuery, OrganismeQueryVariables>(OrganismeDocument, options);
        }
export type OrganismeQueryHookResult = ReturnType<typeof useOrganismeQuery>;
export type OrganismeLazyQueryHookResult = ReturnType<typeof useOrganismeLazyQuery>;
export type OrganismeQueryResult = Apollo.QueryResult<OrganismeQuery, OrganismeQueryVariables>;
export const UsersDocument = gql`
    query users($input: UsersInput, $pagination: OffsetPaginationInput) {
  users(input: $input, pagination: $pagination) {
    data {
      id
      firstname
      lastname
      status
      email
      phone {
        indicatif
        number
      }
      displayName
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      dateAnniversaire
      fonction
      role
      groups {
        id
        nom
        code
        capabilities {
          read
          create
          update
          delete
        }
      }
      capabilities {
        read
        create
        createBatch
        update
        suspend
        resume
        delete
        resendInvitation
        sendInvitation
        changeRole
        changeGroups
      }
      created_at
      updated_at
      carteVacances {
        abonnement {
          id
          statut
          dateDebut
          dateFin
          physique
          user {
            id
            displayName
            nom
            email
          }
        }
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UsersExportDocument = gql`
    query usersExport($input: UsersInput) {
  usersExport(input: $input) {
    id
    name
    mimetype
    size
    url
    resolution
    resized {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
    `;

/**
 * __useUsersExportQuery__
 *
 * To run a query within a React component, call `useUsersExportQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersExportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersExportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUsersExportQuery(baseOptions?: Apollo.QueryHookOptions<UsersExportQuery, UsersExportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersExportQuery, UsersExportQueryVariables>(UsersExportDocument, options);
      }
export function useUsersExportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersExportQuery, UsersExportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersExportQuery, UsersExportQueryVariables>(UsersExportDocument, options);
        }
export type UsersExportQueryHookResult = ReturnType<typeof useUsersExportQuery>;
export type UsersExportLazyQueryHookResult = ReturnType<typeof useUsersExportLazyQuery>;
export type UsersExportQueryResult = Apollo.QueryResult<UsersExportQuery, UsersExportQueryVariables>;
export const UserDocument = gql`
    query user($id: ID) {
  user(id: $id) {
    id
    firstname
    lastname
    status
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    dateAnniversaire
    fonction
    role
    groups {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    capabilities {
      read
      create
      createBatch
      update
      suspend
      resume
      delete
      resendInvitation
      sendInvitation
      changeRole
      changeGroups
    }
    created_at
    updated_at
    carteVacances {
      abonnement {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
        }
      }
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserGroupsDocument = gql`
    query userGroups {
  userGroups {
    id
    nom
    code
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __useUserGroupsQuery__
 *
 * To run a query within a React component, call `useUserGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGroupsQuery(baseOptions?: Apollo.QueryHookOptions<UserGroupsQuery, UserGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserGroupsQuery, UserGroupsQueryVariables>(UserGroupsDocument, options);
      }
export function useUserGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserGroupsQuery, UserGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserGroupsQuery, UserGroupsQueryVariables>(UserGroupsDocument, options);
        }
export type UserGroupsQueryHookResult = ReturnType<typeof useUserGroupsQuery>;
export type UserGroupsLazyQueryHookResult = ReturnType<typeof useUserGroupsLazyQuery>;
export type UserGroupsQueryResult = Apollo.QueryResult<UserGroupsQuery, UserGroupsQueryVariables>;
export const UserGroupDocument = gql`
    query userGroup($id: ID!) {
  userGroup(id: $id) {
    id
    nom
    code
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __useUserGroupQuery__
 *
 * To run a query within a React component, call `useUserGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserGroupQuery(baseOptions: Apollo.QueryHookOptions<UserGroupQuery, UserGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserGroupQuery, UserGroupQueryVariables>(UserGroupDocument, options);
      }
export function useUserGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserGroupQuery, UserGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserGroupQuery, UserGroupQueryVariables>(UserGroupDocument, options);
        }
export type UserGroupQueryHookResult = ReturnType<typeof useUserGroupQuery>;
export type UserGroupLazyQueryHookResult = ReturnType<typeof useUserGroupLazyQuery>;
export type UserGroupQueryResult = Apollo.QueryResult<UserGroupQuery, UserGroupQueryVariables>;
export const UserStatsDocument = gql`
    query userStats {
  userStats {
    count
    toInvite
  }
}
    `;

/**
 * __useUserStatsQuery__
 *
 * To run a query within a React component, call `useUserStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserStatsQuery(baseOptions?: Apollo.QueryHookOptions<UserStatsQuery, UserStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserStatsQuery, UserStatsQueryVariables>(UserStatsDocument, options);
      }
export function useUserStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserStatsQuery, UserStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserStatsQuery, UserStatsQueryVariables>(UserStatsDocument, options);
        }
export type UserStatsQueryHookResult = ReturnType<typeof useUserStatsQuery>;
export type UserStatsLazyQueryHookResult = ReturnType<typeof useUserStatsLazyQuery>;
export type UserStatsQueryResult = Apollo.QueryResult<UserStatsQuery, UserStatsQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    firstname
    lastname
    email
    phone {
      indicatif
      number
    }
    displayName
    avatar {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    isDefaultAvatar
    incognito
    dateAnniversaire
    fonction
    about
    activatedAt
    created_at
    updated_at
    role
    permissions {
      subject
      action
    }
    currentOrganisme {
      id
      name
      address
      zipcode
      city
      country
      indicatif
      capabilities {
        Organisme {
          update
          createChild
        }
        ClubAvantages {
          read
          use
        }
        Bonsplans {
          stats
        }
        Contact {
          read
          create
          update
          delete
        }
        ContactCategory {
          read
          create
          update
          delete
        }
        ContactProperty {
          read
          create
          update
          delete
        }
        DistributionCulture {
          read
          create
          update
          delete
        }
        DistributionEcc {
          read
          create
          update
          delete
        }
        DistributionSub {
          read
          create
          update
          delete
        }
        DistributionVacances {
          read
          create
          update
          delete
        }
        CarteVacancesAbonnement {
          read
          create
          useOptionsPaiement
        }
        Ecc {
          preview
          use
        }
        OrganismeWallet {
          read
          create
          update
          delete
        }
        Post {
          read
          create
          update
          delete
          commentV2 {
            read
            create
            update
            delete
            report
          }
          comment
          reaction {
            read
            create
            update
            delete
          }
        }
        PostCategory {
          read
          create
          update
          delete
        }
        Provisionning {
          read
          create
          update
          delete
        }
        Report {
          read
        }
        User {
          read
          create
          createBatch
          update
          suspend
          resume
          delete
          resendInvitation
          sendInvitation
          changeRole
          changeGroups
        }
        UserGroup {
          read
          create
          update
          delete
        }
        Abonnement {
          read
          create
          update
          delete
        }
      }
      config {
        organisme {
          hasMultiOrganisme
          timezone
        }
        wallet {
          hasOrganismeWallet
          hasCarteVacances
          rembourserEccPerime
        }
      }
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
    }
    organismes {
      id
      name
      address
      zipcode
      city
      country
      indicatif
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
    }
    chatToken {
      token
      email
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ImportSampleDocument = gql`
    query importSample($type: ImportType!) {
  importSample(type: $type) {
    id
    name
    mimetype
    size
    url
    resolution
    resized {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
    `;

/**
 * __useImportSampleQuery__
 *
 * To run a query within a React component, call `useImportSampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useImportSampleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImportSampleQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useImportSampleQuery(baseOptions: Apollo.QueryHookOptions<ImportSampleQuery, ImportSampleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImportSampleQuery, ImportSampleQueryVariables>(ImportSampleDocument, options);
      }
export function useImportSampleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImportSampleQuery, ImportSampleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImportSampleQuery, ImportSampleQueryVariables>(ImportSampleDocument, options);
        }
export type ImportSampleQueryHookResult = ReturnType<typeof useImportSampleQuery>;
export type ImportSampleLazyQueryHookResult = ReturnType<typeof useImportSampleLazyQuery>;
export type ImportSampleQueryResult = Apollo.QueryResult<ImportSampleQuery, ImportSampleQueryVariables>;
export const WorkflowDocument = gql`
    query workflow($id: ID!) {
  workflow(id: $id) {
    id
    type
    steps {
      action
      done
    }
  }
}
    `;

/**
 * __useWorkflowQuery__
 *
 * To run a query within a React component, call `useWorkflowQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkflowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkflowQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWorkflowQuery(baseOptions: Apollo.QueryHookOptions<WorkflowQuery, WorkflowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkflowQuery, WorkflowQueryVariables>(WorkflowDocument, options);
      }
export function useWorkflowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkflowQuery, WorkflowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkflowQuery, WorkflowQueryVariables>(WorkflowDocument, options);
        }
export type WorkflowQueryHookResult = ReturnType<typeof useWorkflowQuery>;
export type WorkflowLazyQueryHookResult = ReturnType<typeof useWorkflowLazyQuery>;
export type WorkflowQueryResult = Apollo.QueryResult<WorkflowQuery, WorkflowQueryVariables>;
export const ReportsDocument = gql`
    query reports($order: Order, $pagination: OffsetPaginationInput) {
  reports(order: $order, pagination: $pagination) {
    data {
      id
      reportable {
        ... on Comment {
          id
          content
          user {
            id
            displayName
            nom
            email
          }
          createdAt
          capabilities {
            read
            create
            update
            delete
            report
          }
        }
      }
      reportedAt
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useReportsQuery__
 *
 * To run a query within a React component, call `useReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReportsQuery({
 *   variables: {
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useReportsQuery(baseOptions?: Apollo.QueryHookOptions<ReportsQuery, ReportsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReportsQuery, ReportsQueryVariables>(ReportsDocument, options);
      }
export function useReportsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReportsQuery, ReportsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReportsQuery, ReportsQueryVariables>(ReportsDocument, options);
        }
export type ReportsQueryHookResult = ReturnType<typeof useReportsQuery>;
export type ReportsLazyQueryHookResult = ReturnType<typeof useReportsLazyQuery>;
export type ReportsQueryResult = Apollo.QueryResult<ReportsQuery, ReportsQueryVariables>;
export const ReportDocument = gql`
    query report($input: IdentifiedInput!) {
  report(input: $input) {
    id
    reportable {
      ... on Comment {
        id
        content
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
        createdAt
        capabilities {
          read
          create
          update
          delete
          report
        }
      }
    }
    reportedAt
  }
}
    `;

/**
 * __useReportQuery__
 *
 * To run a query within a React component, call `useReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReportQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReportQuery(baseOptions: Apollo.QueryHookOptions<ReportQuery, ReportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReportQuery, ReportQueryVariables>(ReportDocument, options);
      }
export function useReportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReportQuery, ReportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReportQuery, ReportQueryVariables>(ReportDocument, options);
        }
export type ReportQueryHookResult = ReturnType<typeof useReportQuery>;
export type ReportLazyQueryHookResult = ReturnType<typeof useReportLazyQuery>;
export type ReportQueryResult = Apollo.QueryResult<ReportQuery, ReportQueryVariables>;
export const ContactsDocument = gql`
    query contacts($categoryId: ID, $order: Order, $pagination: OffsetPaginationInput) {
  contacts(categoryId: $categoryId, order: $order, pagination: $pagination) {
    data {
      id
      userId
      firstname
      lastname
      dateAnniversaire
      fonction
      category {
        id
        name
        position
        capabilities {
          read
          create
          update
          delete
        }
      }
      lines {
        id
        label
        type
        propertyId
        value
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useContactsQuery__
 *
 * To run a query within a React component, call `useContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useContactsQuery(baseOptions?: Apollo.QueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
      }
export function useContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
        }
export type ContactsQueryHookResult = ReturnType<typeof useContactsQuery>;
export type ContactsLazyQueryHookResult = ReturnType<typeof useContactsLazyQuery>;
export type ContactsQueryResult = Apollo.QueryResult<ContactsQuery, ContactsQueryVariables>;
export const ContactDocument = gql`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    userId
    firstname
    lastname
    dateAnniversaire
    fonction
    category {
      id
      name
      position
      capabilities {
        read
        create
        update
        delete
      }
    }
    lines {
      id
      label
      type
      propertyId
      value
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __useContactQuery__
 *
 * To run a query within a React component, call `useContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContactQuery(baseOptions: Apollo.QueryHookOptions<ContactQuery, ContactQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactQuery, ContactQueryVariables>(ContactDocument, options);
      }
export function useContactLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactQuery, ContactQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactQuery, ContactQueryVariables>(ContactDocument, options);
        }
export type ContactQueryHookResult = ReturnType<typeof useContactQuery>;
export type ContactLazyQueryHookResult = ReturnType<typeof useContactLazyQuery>;
export type ContactQueryResult = Apollo.QueryResult<ContactQuery, ContactQueryVariables>;
export const ContactCategoriesDocument = gql`
    query contactCategories {
  contactCategories {
    id
    name
    position
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __useContactCategoriesQuery__
 *
 * To run a query within a React component, call `useContactCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ContactCategoriesQuery, ContactCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactCategoriesQuery, ContactCategoriesQueryVariables>(ContactCategoriesDocument, options);
      }
export function useContactCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactCategoriesQuery, ContactCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactCategoriesQuery, ContactCategoriesQueryVariables>(ContactCategoriesDocument, options);
        }
export type ContactCategoriesQueryHookResult = ReturnType<typeof useContactCategoriesQuery>;
export type ContactCategoriesLazyQueryHookResult = ReturnType<typeof useContactCategoriesLazyQuery>;
export type ContactCategoriesQueryResult = Apollo.QueryResult<ContactCategoriesQuery, ContactCategoriesQueryVariables>;
export const ContactPropertiesDocument = gql`
    query contactProperties {
  contactProperties {
    id
    label
    position
    type
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __useContactPropertiesQuery__
 *
 * To run a query within a React component, call `useContactPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<ContactPropertiesQuery, ContactPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactPropertiesQuery, ContactPropertiesQueryVariables>(ContactPropertiesDocument, options);
      }
export function useContactPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactPropertiesQuery, ContactPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactPropertiesQuery, ContactPropertiesQueryVariables>(ContactPropertiesDocument, options);
        }
export type ContactPropertiesQueryHookResult = ReturnType<typeof useContactPropertiesQuery>;
export type ContactPropertiesLazyQueryHookResult = ReturnType<typeof useContactPropertiesLazyQuery>;
export type ContactPropertiesQueryResult = Apollo.QueryResult<ContactPropertiesQuery, ContactPropertiesQueryVariables>;
export const PostsDocument = gql`
    query posts($categoryId: ID, $status: PostStatus, $order: Order, $pagination: OffsetPaginationInput) {
  posts(
    categoryId: $categoryId
    status: $status
    order: $order
    pagination: $pagination
  ) {
    data {
      id
      author {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
      authorV2 {
        ... on MinimalistOrganisme {
          id
          displayName
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
        ... on MinimalistUser {
          id
          displayName
          nom
          email
        }
      }
      categoryId
      category {
        id
        label
        capabilities {
          read
          create
          update
          delete
        }
      }
      group {
        id
        nom
        code
        capabilities {
          read
          create
          update
          delete
        }
      }
      title
      textContent
      content {
        id
        type
      }
      interactions {
        comment
        like
        love
        praise
        surprised
        thinking
      }
      reactions {
        id
        type
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
        capabilities {
          read
          create
          update
          delete
        }
      }
      comments {
        id
        content
        user {
          id
          displayName
          nom
          email
        }
        createdAt
        capabilities {
          read
          create
          update
          delete
          report
        }
      }
      userReaction {
        id
        type
        user {
          id
          displayName
          nom
          email
        }
        capabilities {
          read
          create
          update
          delete
        }
      }
      images {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      image {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      publish
      status
      publishedAt
      capabilities {
        read
        create
        update
        delete
        commentV2 {
          read
          create
          update
          delete
          report
        }
        comment
        reaction {
          read
          create
          update
          delete
        }
        content {
          actualite {
            create
          }
          album {
            create
          }
          event {
            create
          }
          sondage {
            create
            respond
          }
          pvReunion {
            create
          }
        }
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      status: // value for 'status'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const PostDocument = gql`
    query post($input: IdentifiedInput!) {
  post(input: $input) {
    id
    author {
      id
      displayName
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    authorV2 {
      ... on MinimalistOrganisme {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      ... on MinimalistUser {
        id
        displayName
        nom
        email
      }
    }
    categoryId
    category {
      id
      label
      capabilities {
        read
        create
        update
        delete
      }
    }
    group {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    title
    textContent
    content {
      id
      type
    }
    interactions {
      comment
      like
      love
      praise
      surprised
      thinking
    }
    reactions {
      id
      type
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    comments {
      id
      content
      user {
        id
        displayName
        nom
        email
      }
      createdAt
      capabilities {
        read
        create
        update
        delete
        report
      }
    }
    userReaction {
      id
      type
      user {
        id
        displayName
        nom
        email
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    images {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    image {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    publish
    status
    publishedAt
    capabilities {
      read
      create
      update
      delete
      commentV2 {
        read
        create
        update
        delete
        report
      }
      comment
      reaction {
        read
        create
        update
        delete
      }
      content {
        actualite {
          create
        }
        album {
          create
        }
        event {
          create
        }
        sondage {
          create
          respond
        }
        pvReunion {
          create
        }
      }
    }
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const AlbumDocument = gql`
    query album($album_items_pagination: OffsetPaginationInput, $input: IdentifiedInput!) {
  album(input: $input) {
    id
    items(pagination: $album_items_pagination) {
      data {
        id
        media {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
      pagination {
        count
        offset
        firstItem
        lastItem
        limit
        total
      }
    }
  }
}
    `;

/**
 * __useAlbumQuery__
 *
 * To run a query within a React component, call `useAlbumQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumQuery({
 *   variables: {
 *      album_items_pagination: // value for 'album_items_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAlbumQuery(baseOptions: Apollo.QueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, options);
      }
export function useAlbumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, options);
        }
export type AlbumQueryHookResult = ReturnType<typeof useAlbumQuery>;
export type AlbumLazyQueryHookResult = ReturnType<typeof useAlbumLazyQuery>;
export type AlbumQueryResult = Apollo.QueryResult<AlbumQuery, AlbumQueryVariables>;
export const MisesEnAvantsDocument = gql`
    query misesEnAvants($pagination: OffsetPaginationInput) {
  misesEnAvants(pagination: $pagination) {
    data {
      id
      author {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
      authorV2 {
        ... on MinimalistOrganisme {
          id
          displayName
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
        ... on MinimalistUser {
          id
          displayName
          nom
          email
        }
      }
      categoryId
      category {
        id
        label
        capabilities {
          read
          create
          update
          delete
        }
      }
      group {
        id
        nom
        code
        capabilities {
          read
          create
          update
          delete
        }
      }
      title
      textContent
      content {
        id
        type
      }
      interactions {
        comment
        like
        love
        praise
        surprised
        thinking
      }
      reactions {
        id
        type
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
        capabilities {
          read
          create
          update
          delete
        }
      }
      comments {
        id
        content
        user {
          id
          displayName
          nom
          email
        }
        createdAt
        capabilities {
          read
          create
          update
          delete
          report
        }
      }
      userReaction {
        id
        type
        user {
          id
          displayName
          nom
          email
        }
        capabilities {
          read
          create
          update
          delete
        }
      }
      images {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      image {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      publish
      status
      publishedAt
      capabilities {
        read
        create
        update
        delete
        commentV2 {
          read
          create
          update
          delete
          report
        }
        comment
        reaction {
          read
          create
          update
          delete
        }
        content {
          actualite {
            create
          }
          album {
            create
          }
          event {
            create
          }
          sondage {
            create
            respond
          }
          pvReunion {
            create
          }
        }
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useMisesEnAvantsQuery__
 *
 * To run a query within a React component, call `useMisesEnAvantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMisesEnAvantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMisesEnAvantsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useMisesEnAvantsQuery(baseOptions?: Apollo.QueryHookOptions<MisesEnAvantsQuery, MisesEnAvantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MisesEnAvantsQuery, MisesEnAvantsQueryVariables>(MisesEnAvantsDocument, options);
      }
export function useMisesEnAvantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MisesEnAvantsQuery, MisesEnAvantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MisesEnAvantsQuery, MisesEnAvantsQueryVariables>(MisesEnAvantsDocument, options);
        }
export type MisesEnAvantsQueryHookResult = ReturnType<typeof useMisesEnAvantsQuery>;
export type MisesEnAvantsLazyQueryHookResult = ReturnType<typeof useMisesEnAvantsLazyQuery>;
export type MisesEnAvantsQueryResult = Apollo.QueryResult<MisesEnAvantsQuery, MisesEnAvantsQueryVariables>;
export const PostCategoriesDocument = gql`
    query postCategories {
  postCategories {
    id
    label
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __usePostCategoriesQuery__
 *
 * To run a query within a React component, call `usePostCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<PostCategoriesQuery, PostCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostCategoriesQuery, PostCategoriesQueryVariables>(PostCategoriesDocument, options);
      }
export function usePostCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostCategoriesQuery, PostCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostCategoriesQuery, PostCategoriesQueryVariables>(PostCategoriesDocument, options);
        }
export type PostCategoriesQueryHookResult = ReturnType<typeof usePostCategoriesQuery>;
export type PostCategoriesLazyQueryHookResult = ReturnType<typeof usePostCategoriesLazyQuery>;
export type PostCategoriesQueryResult = Apollo.QueryResult<PostCategoriesQuery, PostCategoriesQueryVariables>;
export const PostCategoryDocument = gql`
    query postCategory($input: IdentifiedInput!) {
  postCategory(input: $input) {
    id
    label
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __usePostCategoryQuery__
 *
 * To run a query within a React component, call `usePostCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostCategoryQuery(baseOptions: Apollo.QueryHookOptions<PostCategoryQuery, PostCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostCategoryQuery, PostCategoryQueryVariables>(PostCategoryDocument, options);
      }
export function usePostCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostCategoryQuery, PostCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostCategoryQuery, PostCategoryQueryVariables>(PostCategoryDocument, options);
        }
export type PostCategoryQueryHookResult = ReturnType<typeof usePostCategoryQuery>;
export type PostCategoryLazyQueryHookResult = ReturnType<typeof usePostCategoryLazyQuery>;
export type PostCategoryQueryResult = Apollo.QueryResult<PostCategoryQuery, PostCategoryQueryVariables>;
export const CommentsDocument = gql`
    query comments($postId: ID!, $pagination: OffsetPaginationInput) {
  comments(postId: $postId, pagination: $pagination) {
    data {
      id
      content
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
      createdAt
      capabilities {
        read
        create
        update
        delete
        report
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const BonsplansCataloguesDocument = gql`
    query bonsplansCatalogues($input: BonsplansCataloguesInput!) {
  bonsplansCatalogues(input: $input) {
    id
    nom
    univers
    accroche
    visuel {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    categories {
      id
      catalogueId
      parentId
      level
      nom
    }
  }
}
    `;

/**
 * __useBonsplansCataloguesQuery__
 *
 * To run a query within a React component, call `useBonsplansCataloguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCataloguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCataloguesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCataloguesQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCataloguesQuery, BonsplansCataloguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCataloguesQuery, BonsplansCataloguesQueryVariables>(BonsplansCataloguesDocument, options);
      }
export function useBonsplansCataloguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCataloguesQuery, BonsplansCataloguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCataloguesQuery, BonsplansCataloguesQueryVariables>(BonsplansCataloguesDocument, options);
        }
export type BonsplansCataloguesQueryHookResult = ReturnType<typeof useBonsplansCataloguesQuery>;
export type BonsplansCataloguesLazyQueryHookResult = ReturnType<typeof useBonsplansCataloguesLazyQuery>;
export type BonsplansCataloguesQueryResult = Apollo.QueryResult<BonsplansCataloguesQuery, BonsplansCataloguesQueryVariables>;
export const BonsplansCatalogueDocument = gql`
    query bonsplansCatalogue($input: BonsplansCatalogueInput!) {
  bonsplansCatalogue(input: $input) {
    id
    nom
    univers
    accroche
    visuel {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    categories {
      id
      catalogueId
      parentId
      level
      nom
    }
  }
}
    `;

/**
 * __useBonsplansCatalogueQuery__
 *
 * To run a query within a React component, call `useBonsplansCatalogueQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCatalogueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCatalogueQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCatalogueQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCatalogueQuery, BonsplansCatalogueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCatalogueQuery, BonsplansCatalogueQueryVariables>(BonsplansCatalogueDocument, options);
      }
export function useBonsplansCatalogueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCatalogueQuery, BonsplansCatalogueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCatalogueQuery, BonsplansCatalogueQueryVariables>(BonsplansCatalogueDocument, options);
        }
export type BonsplansCatalogueQueryHookResult = ReturnType<typeof useBonsplansCatalogueQuery>;
export type BonsplansCatalogueLazyQueryHookResult = ReturnType<typeof useBonsplansCatalogueLazyQuery>;
export type BonsplansCatalogueQueryResult = Apollo.QueryResult<BonsplansCatalogueQuery, BonsplansCatalogueQueryVariables>;
export const BonsplansCategoriesDocument = gql`
    query bonsplansCategories($input: BonsplansCategoriesInput!) {
  bonsplansCategories(input: $input) {
    id
    catalogueId
    parentId
    level
    nom
  }
}
    `;

/**
 * __useBonsplansCategoriesQuery__
 *
 * To run a query within a React component, call `useBonsplansCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCategoriesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCategoriesQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCategoriesQuery, BonsplansCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCategoriesQuery, BonsplansCategoriesQueryVariables>(BonsplansCategoriesDocument, options);
      }
export function useBonsplansCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCategoriesQuery, BonsplansCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCategoriesQuery, BonsplansCategoriesQueryVariables>(BonsplansCategoriesDocument, options);
        }
export type BonsplansCategoriesQueryHookResult = ReturnType<typeof useBonsplansCategoriesQuery>;
export type BonsplansCategoriesLazyQueryHookResult = ReturnType<typeof useBonsplansCategoriesLazyQuery>;
export type BonsplansCategoriesQueryResult = Apollo.QueryResult<BonsplansCategoriesQuery, BonsplansCategoriesQueryVariables>;
export const BonsplansCategorieDocument = gql`
    query bonsplansCategorie($input: BonsplansCategorieInput!) {
  bonsplansCategorie(input: $input) {
    id
    catalogueId
    parentId
    level
    nom
  }
}
    `;

/**
 * __useBonsplansCategorieQuery__
 *
 * To run a query within a React component, call `useBonsplansCategorieQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCategorieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCategorieQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCategorieQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCategorieQuery, BonsplansCategorieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCategorieQuery, BonsplansCategorieQueryVariables>(BonsplansCategorieDocument, options);
      }
export function useBonsplansCategorieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCategorieQuery, BonsplansCategorieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCategorieQuery, BonsplansCategorieQueryVariables>(BonsplansCategorieDocument, options);
        }
export type BonsplansCategorieQueryHookResult = ReturnType<typeof useBonsplansCategorieQuery>;
export type BonsplansCategorieLazyQueryHookResult = ReturnType<typeof useBonsplansCategorieLazyQuery>;
export type BonsplansCategorieQueryResult = Apollo.QueryResult<BonsplansCategorieQuery, BonsplansCategorieQueryVariables>;
export const BonsplansSearchProduitsDocument = gql`
    query bonsplansSearchProduits($input: BonsplansSearchProduitsInput!, $pagination: OffsetPaginationInput) {
  bonsplansSearchProduits(input: $input, pagination: $pagination) {
    data {
      id
      nom
      type
      coordonnees {
        nom
        adresse1
        adresse2
        zipcode
        city
        area
        country
        lat
        lng
        website
      }
      offre
      marketingTags {
        id
        name
        type
      }
      logo {
        resolution
        url
        resized {
          resolution
          url
          resized {
            resolution
            url
          }
        }
      }
      cover {
        resolution
        url
        resized {
          resolution
          url
        }
      }
      highlights {
        start
        end
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useBonsplansSearchProduitsQuery__
 *
 * To run a query within a React component, call `useBonsplansSearchProduitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansSearchProduitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansSearchProduitsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useBonsplansSearchProduitsQuery(baseOptions: Apollo.QueryHookOptions<BonsplansSearchProduitsQuery, BonsplansSearchProduitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansSearchProduitsQuery, BonsplansSearchProduitsQueryVariables>(BonsplansSearchProduitsDocument, options);
      }
export function useBonsplansSearchProduitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansSearchProduitsQuery, BonsplansSearchProduitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansSearchProduitsQuery, BonsplansSearchProduitsQueryVariables>(BonsplansSearchProduitsDocument, options);
        }
export type BonsplansSearchProduitsQueryHookResult = ReturnType<typeof useBonsplansSearchProduitsQuery>;
export type BonsplansSearchProduitsLazyQueryHookResult = ReturnType<typeof useBonsplansSearchProduitsLazyQuery>;
export type BonsplansSearchProduitsQueryResult = Apollo.QueryResult<BonsplansSearchProduitsQuery, BonsplansSearchProduitsQueryVariables>;
export const BonsplansSuggestProduitsDocument = gql`
    query bonsplansSuggestProduits($input: BonsplansSuggestProduitsInput!) {
  bonsplansSuggestProduits(input: $input) {
    id
    nom
    type
    coordonnees {
      nom
      adresse1
      adresse2
      zipcode
      city
      area
      country
      lat
      lng
      website
    }
    offre
    marketingTags {
      id
      name
      type
    }
    logo {
      resolution
      url
      resized {
        resolution
        url
        resized {
          resolution
          url
        }
      }
    }
    cover {
      resolution
      url
      resized {
        resolution
        url
      }
    }
    highlights {
      start
      end
    }
  }
}
    `;

/**
 * __useBonsplansSuggestProduitsQuery__
 *
 * To run a query within a React component, call `useBonsplansSuggestProduitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansSuggestProduitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansSuggestProduitsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansSuggestProduitsQuery(baseOptions: Apollo.QueryHookOptions<BonsplansSuggestProduitsQuery, BonsplansSuggestProduitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansSuggestProduitsQuery, BonsplansSuggestProduitsQueryVariables>(BonsplansSuggestProduitsDocument, options);
      }
export function useBonsplansSuggestProduitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansSuggestProduitsQuery, BonsplansSuggestProduitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansSuggestProduitsQuery, BonsplansSuggestProduitsQueryVariables>(BonsplansSuggestProduitsDocument, options);
        }
export type BonsplansSuggestProduitsQueryHookResult = ReturnType<typeof useBonsplansSuggestProduitsQuery>;
export type BonsplansSuggestProduitsLazyQueryHookResult = ReturnType<typeof useBonsplansSuggestProduitsLazyQuery>;
export type BonsplansSuggestProduitsQueryResult = Apollo.QueryResult<BonsplansSuggestProduitsQuery, BonsplansSuggestProduitsQueryVariables>;
export const BonsplansProduitDocument = gql`
    query bonsplansProduit($bonsplansProduit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $bonsplansProduit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: BonsplansProduitInput!) {
  bonsplansProduit(input: $input) {
    id
    nom
    type
    description
    aide
    coordonnees {
      nom
      adresse1
      adresse2
      zipcode
      city
      area
      country
      lat
      lng
      website
    }
    offre
    marketingTags {
      id
      name
      type
    }
    logo {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    cover {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    articles {
      id
      sku {
        source
        productId
        articleId
      }
      nom
      detail
      hasDescription
      description
      quantiteMin
      quantiteMax
      prixPublic
      prixTTC
      carteCadeau {
        valeurFacialeMin
        valeurFacialeMax
      }
      volatiles {
        name
        value
      }
    }
    searchArticlesFiltres(input: $bonsplansProduit_searchArticlesFiltres_input) {
      type
      name
      label
    }
    searchArticles(input: $bonsplansProduit_searchArticles_input) {
      id
      sku {
        source
        productId
        articleId
      }
      nom
      detail
      hasDescription
      description
      quantiteMin
      quantiteMax
      prixPublic
      prixTTC
      carteCadeau {
        valeurFacialeMin
        valeurFacialeMax
      }
      volatiles {
        name
        value
      }
    }
    offrePartenaire {
      redirectUrl
    }
  }
}
    `;

/**
 * __useBonsplansProduitQuery__
 *
 * To run a query within a React component, call `useBonsplansProduitQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansProduitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansProduitQuery({
 *   variables: {
 *      bonsplansProduit_searchArticlesFiltres_input: // value for 'bonsplansProduit_searchArticlesFiltres_input'
 *      bonsplansProduit_searchArticles_input: // value for 'bonsplansProduit_searchArticles_input'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansProduitQuery(baseOptions: Apollo.QueryHookOptions<BonsplansProduitQuery, BonsplansProduitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansProduitQuery, BonsplansProduitQueryVariables>(BonsplansProduitDocument, options);
      }
export function useBonsplansProduitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansProduitQuery, BonsplansProduitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansProduitQuery, BonsplansProduitQueryVariables>(BonsplansProduitDocument, options);
        }
export type BonsplansProduitQueryHookResult = ReturnType<typeof useBonsplansProduitQuery>;
export type BonsplansProduitLazyQueryHookResult = ReturnType<typeof useBonsplansProduitLazyQuery>;
export type BonsplansProduitQueryResult = Apollo.QueryResult<BonsplansProduitQuery, BonsplansProduitQueryVariables>;
export const BonsplansArticleDocument = gql`
    query bonsplansArticle($input: BonsplansArticleInput!) {
  bonsplansArticle(input: $input) {
    id
    sku {
      source
      productId
      articleId
    }
    nom
    detail
    hasDescription
    description
    quantiteMin
    quantiteMax
    prixPublic
    prixTTC
    carteCadeau {
      valeurFacialeMin
      valeurFacialeMax
    }
    volatiles {
      name
      value
    }
  }
}
    `;

/**
 * __useBonsplansArticleQuery__
 *
 * To run a query within a React component, call `useBonsplansArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansArticleQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansArticleQuery(baseOptions: Apollo.QueryHookOptions<BonsplansArticleQuery, BonsplansArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansArticleQuery, BonsplansArticleQueryVariables>(BonsplansArticleDocument, options);
      }
export function useBonsplansArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansArticleQuery, BonsplansArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansArticleQuery, BonsplansArticleQueryVariables>(BonsplansArticleDocument, options);
        }
export type BonsplansArticleQueryHookResult = ReturnType<typeof useBonsplansArticleQuery>;
export type BonsplansArticleLazyQueryHookResult = ReturnType<typeof useBonsplansArticleLazyQuery>;
export type BonsplansArticleQueryResult = Apollo.QueryResult<BonsplansArticleQuery, BonsplansArticleQueryVariables>;
export const BonsplansCommandesDocument = gql`
    query bonsplansCommandes($bonsplansCommandes_data_billets_produit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $bonsplansCommandes_data_billets_produit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: BonsplansCommandesInput, $pagination: OffsetPaginationInput) {
  bonsplansCommandes(input: $input, pagination: $pagination) {
    data {
      id
      numeroCommande
      libelle
      espace
      statut
      total
      totalRemise
      lignes {
        id
        statut
        type
        quantite
        prixUnitaire
        libelle
      }
      billets {
        id
        commandeId
        nom
        utilise
        codeBarres
        codeActivation
        dateExpiration
        montant
        url
        info
        produit {
          id
          nom
          type
          description
          aide
          coordonnees {
            nom
            adresse1
            adresse2
            zipcode
            city
            area
            country
            lat
            lng
            website
          }
          offre
          marketingTags {
            id
            name
            type
          }
          logo {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          cover {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          articles {
            id
            nom
            detail
            hasDescription
            description
            quantiteMin
            quantiteMax
            prixPublic
            prixTTC
          }
          searchArticlesFiltres(
            input: $bonsplansCommandes_data_billets_produit_searchArticlesFiltres_input
          ) {
            type
            name
            label
          }
          searchArticles(
            input: $bonsplansCommandes_data_billets_produit_searchArticles_input
          ) {
            id
            nom
            detail
            hasDescription
            description
            quantiteMin
            quantiteMax
            prixPublic
            prixTTC
          }
          offrePartenaire {
            redirectUrl
          }
        }
      }
      livraison {
        company
        firstname
        lastname
        address
        zipcode
        city
        country
      }
      createdAt
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useBonsplansCommandesQuery__
 *
 * To run a query within a React component, call `useBonsplansCommandesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCommandesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCommandesQuery({
 *   variables: {
 *      bonsplansCommandes_data_billets_produit_searchArticlesFiltres_input: // value for 'bonsplansCommandes_data_billets_produit_searchArticlesFiltres_input'
 *      bonsplansCommandes_data_billets_produit_searchArticles_input: // value for 'bonsplansCommandes_data_billets_produit_searchArticles_input'
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useBonsplansCommandesQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCommandesQuery, BonsplansCommandesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCommandesQuery, BonsplansCommandesQueryVariables>(BonsplansCommandesDocument, options);
      }
export function useBonsplansCommandesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCommandesQuery, BonsplansCommandesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCommandesQuery, BonsplansCommandesQueryVariables>(BonsplansCommandesDocument, options);
        }
export type BonsplansCommandesQueryHookResult = ReturnType<typeof useBonsplansCommandesQuery>;
export type BonsplansCommandesLazyQueryHookResult = ReturnType<typeof useBonsplansCommandesLazyQuery>;
export type BonsplansCommandesQueryResult = Apollo.QueryResult<BonsplansCommandesQuery, BonsplansCommandesQueryVariables>;
export const BonsplansCommandeDocument = gql`
    query bonsplansCommande($bonsplansCommande_billets_produit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $bonsplansCommande_billets_produit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: IdentifiedInput!) {
  bonsplansCommande(input: $input) {
    id
    numeroCommande
    libelle
    espace
    statut
    total
    totalRemise
    lignes {
      id
      statut
      type
      quantite
      prixUnitaire
      libelle
    }
    billets {
      id
      commandeId
      nom
      utilise
      codeBarres
      codeActivation
      dateExpiration
      montant
      url
      info
      produit {
        id
        nom
        type
        description
        aide
        coordonnees {
          nom
          adresse1
          adresse2
          zipcode
          city
          area
          country
          lat
          lng
          website
        }
        offre
        marketingTags {
          id
          name
          type
        }
        logo {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        cover {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        articles {
          id
          sku {
            source
            productId
            articleId
          }
          nom
          detail
          hasDescription
          description
          quantiteMin
          quantiteMax
          prixPublic
          prixTTC
          carteCadeau {
            valeurFacialeMin
            valeurFacialeMax
          }
          volatiles {
            name
            value
          }
        }
        searchArticlesFiltres(
          input: $bonsplansCommande_billets_produit_searchArticlesFiltres_input
        ) {
          type
          name
          label
        }
        searchArticles(input: $bonsplansCommande_billets_produit_searchArticles_input) {
          id
          sku {
            source
            productId
            articleId
          }
          nom
          detail
          hasDescription
          description
          quantiteMin
          quantiteMax
          prixPublic
          prixTTC
          carteCadeau {
            valeurFacialeMin
            valeurFacialeMax
          }
          volatiles {
            name
            value
          }
        }
        offrePartenaire {
          redirectUrl
        }
      }
    }
    livraison {
      company
      firstname
      lastname
      address
      zipcode
      city
      country
    }
    createdAt
  }
}
    `;

/**
 * __useBonsplansCommandeQuery__
 *
 * To run a query within a React component, call `useBonsplansCommandeQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCommandeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCommandeQuery({
 *   variables: {
 *      bonsplansCommande_billets_produit_searchArticlesFiltres_input: // value for 'bonsplansCommande_billets_produit_searchArticlesFiltres_input'
 *      bonsplansCommande_billets_produit_searchArticles_input: // value for 'bonsplansCommande_billets_produit_searchArticles_input'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCommandeQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCommandeQuery, BonsplansCommandeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCommandeQuery, BonsplansCommandeQueryVariables>(BonsplansCommandeDocument, options);
      }
export function useBonsplansCommandeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCommandeQuery, BonsplansCommandeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCommandeQuery, BonsplansCommandeQueryVariables>(BonsplansCommandeDocument, options);
        }
export type BonsplansCommandeQueryHookResult = ReturnType<typeof useBonsplansCommandeQuery>;
export type BonsplansCommandeLazyQueryHookResult = ReturnType<typeof useBonsplansCommandeLazyQuery>;
export type BonsplansCommandeQueryResult = Apollo.QueryResult<BonsplansCommandeQuery, BonsplansCommandeQueryVariables>;
export const BonsplansCommandeBilletsDocument = gql`
    query bonsplansCommandeBillets($bonsplansCommandeBillets_data_produit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $bonsplansCommandeBillets_data_produit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: BonsplansCommandeBilletsInput, $pagination: OffsetPaginationInput) {
  bonsplansCommandeBillets(input: $input, pagination: $pagination) {
    data {
      id
      commandeId
      nom
      utilise
      codeBarres
      codeActivation
      dateExpiration
      montant
      url
      info
      produit {
        id
        nom
        type
        description
        aide
        coordonnees {
          nom
          adresse1
          adresse2
          zipcode
          city
          area
          country
          lat
          lng
          website
        }
        offre
        marketingTags {
          id
          name
          type
        }
        logo {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        cover {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        articles {
          id
          sku {
            source
            productId
            articleId
          }
          nom
          detail
          hasDescription
          description
          quantiteMin
          quantiteMax
          prixPublic
          prixTTC
          carteCadeau {
            valeurFacialeMin
            valeurFacialeMax
          }
          volatiles {
            name
            value
          }
        }
        searchArticlesFiltres(
          input: $bonsplansCommandeBillets_data_produit_searchArticlesFiltres_input
        ) {
          type
          name
          label
        }
        searchArticles(
          input: $bonsplansCommandeBillets_data_produit_searchArticles_input
        ) {
          id
          sku {
            source
            productId
            articleId
          }
          nom
          detail
          hasDescription
          description
          quantiteMin
          quantiteMax
          prixPublic
          prixTTC
          carteCadeau {
            valeurFacialeMin
            valeurFacialeMax
          }
          volatiles {
            name
            value
          }
        }
        offrePartenaire {
          redirectUrl
        }
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useBonsplansCommandeBilletsQuery__
 *
 * To run a query within a React component, call `useBonsplansCommandeBilletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCommandeBilletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCommandeBilletsQuery({
 *   variables: {
 *      bonsplansCommandeBillets_data_produit_searchArticlesFiltres_input: // value for 'bonsplansCommandeBillets_data_produit_searchArticlesFiltres_input'
 *      bonsplansCommandeBillets_data_produit_searchArticles_input: // value for 'bonsplansCommandeBillets_data_produit_searchArticles_input'
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useBonsplansCommandeBilletsQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCommandeBilletsQuery, BonsplansCommandeBilletsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCommandeBilletsQuery, BonsplansCommandeBilletsQueryVariables>(BonsplansCommandeBilletsDocument, options);
      }
export function useBonsplansCommandeBilletsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCommandeBilletsQuery, BonsplansCommandeBilletsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCommandeBilletsQuery, BonsplansCommandeBilletsQueryVariables>(BonsplansCommandeBilletsDocument, options);
        }
export type BonsplansCommandeBilletsQueryHookResult = ReturnType<typeof useBonsplansCommandeBilletsQuery>;
export type BonsplansCommandeBilletsLazyQueryHookResult = ReturnType<typeof useBonsplansCommandeBilletsLazyQuery>;
export type BonsplansCommandeBilletsQueryResult = Apollo.QueryResult<BonsplansCommandeBilletsQuery, BonsplansCommandeBilletsQueryVariables>;
export const BonsplansCommandeBilletDocument = gql`
    query bonsplansCommandeBillet($bonsplansCommandeBillet_produit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $bonsplansCommandeBillet_produit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: BonsplansCommandeBilletInput!) {
  bonsplansCommandeBillet(input: $input) {
    id
    commandeId
    nom
    utilise
    codeBarres
    codeActivation
    dateExpiration
    montant
    url
    info
    produit {
      id
      nom
      type
      description
      aide
      coordonnees {
        nom
        adresse1
        adresse2
        zipcode
        city
        area
        country
        lat
        lng
        website
      }
      offre
      marketingTags {
        id
        name
        type
      }
      logo {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      cover {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      articles {
        id
        sku {
          source
          productId
          articleId
        }
        nom
        detail
        hasDescription
        description
        quantiteMin
        quantiteMax
        prixPublic
        prixTTC
        carteCadeau {
          valeurFacialeMin
          valeurFacialeMax
        }
        volatiles {
          name
          value
        }
      }
      searchArticlesFiltres(
        input: $bonsplansCommandeBillet_produit_searchArticlesFiltres_input
      ) {
        type
        name
        label
      }
      searchArticles(input: $bonsplansCommandeBillet_produit_searchArticles_input) {
        id
        sku {
          source
          productId
          articleId
        }
        nom
        detail
        hasDescription
        description
        quantiteMin
        quantiteMax
        prixPublic
        prixTTC
        carteCadeau {
          valeurFacialeMin
          valeurFacialeMax
        }
        volatiles {
          name
          value
        }
      }
      offrePartenaire {
        redirectUrl
      }
    }
  }
}
    `;

/**
 * __useBonsplansCommandeBilletQuery__
 *
 * To run a query within a React component, call `useBonsplansCommandeBilletQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCommandeBilletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCommandeBilletQuery({
 *   variables: {
 *      bonsplansCommandeBillet_produit_searchArticlesFiltres_input: // value for 'bonsplansCommandeBillet_produit_searchArticlesFiltres_input'
 *      bonsplansCommandeBillet_produit_searchArticles_input: // value for 'bonsplansCommandeBillet_produit_searchArticles_input'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCommandeBilletQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCommandeBilletQuery, BonsplansCommandeBilletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCommandeBilletQuery, BonsplansCommandeBilletQueryVariables>(BonsplansCommandeBilletDocument, options);
      }
export function useBonsplansCommandeBilletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCommandeBilletQuery, BonsplansCommandeBilletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCommandeBilletQuery, BonsplansCommandeBilletQueryVariables>(BonsplansCommandeBilletDocument, options);
        }
export type BonsplansCommandeBilletQueryHookResult = ReturnType<typeof useBonsplansCommandeBilletQuery>;
export type BonsplansCommandeBilletLazyQueryHookResult = ReturnType<typeof useBonsplansCommandeBilletLazyQuery>;
export type BonsplansCommandeBilletQueryResult = Apollo.QueryResult<BonsplansCommandeBilletQuery, BonsplansCommandeBilletQueryVariables>;
export const BonsplansCommandeStatsDocument = gql`
    query bonsplansCommandeStats($input: BonsplansCommandeStatsInput!) {
  bonsplansCommandeStats(input: $input) {
    since
    count
    total
    totalRemise
  }
}
    `;

/**
 * __useBonsplansCommandeStatsQuery__
 *
 * To run a query within a React component, call `useBonsplansCommandeStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCommandeStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCommandeStatsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCommandeStatsQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCommandeStatsQuery, BonsplansCommandeStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCommandeStatsQuery, BonsplansCommandeStatsQueryVariables>(BonsplansCommandeStatsDocument, options);
      }
export function useBonsplansCommandeStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCommandeStatsQuery, BonsplansCommandeStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCommandeStatsQuery, BonsplansCommandeStatsQueryVariables>(BonsplansCommandeStatsDocument, options);
        }
export type BonsplansCommandeStatsQueryHookResult = ReturnType<typeof useBonsplansCommandeStatsQuery>;
export type BonsplansCommandeStatsLazyQueryHookResult = ReturnType<typeof useBonsplansCommandeStatsLazyQuery>;
export type BonsplansCommandeStatsQueryResult = Apollo.QueryResult<BonsplansCommandeStatsQuery, BonsplansCommandeStatsQueryVariables>;
export const BonsplansCommandeAdminStatsDocument = gql`
    query bonsplansCommandeAdminStats($input: BonsplansCommandeStatsInput!) {
  bonsplansCommandeAdminStats(input: $input) {
    since
    count
    total
    totalRemise
  }
}
    `;

/**
 * __useBonsplansCommandeAdminStatsQuery__
 *
 * To run a query within a React component, call `useBonsplansCommandeAdminStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansCommandeAdminStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansCommandeAdminStatsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBonsplansCommandeAdminStatsQuery(baseOptions: Apollo.QueryHookOptions<BonsplansCommandeAdminStatsQuery, BonsplansCommandeAdminStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansCommandeAdminStatsQuery, BonsplansCommandeAdminStatsQueryVariables>(BonsplansCommandeAdminStatsDocument, options);
      }
export function useBonsplansCommandeAdminStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansCommandeAdminStatsQuery, BonsplansCommandeAdminStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansCommandeAdminStatsQuery, BonsplansCommandeAdminStatsQueryVariables>(BonsplansCommandeAdminStatsDocument, options);
        }
export type BonsplansCommandeAdminStatsQueryHookResult = ReturnType<typeof useBonsplansCommandeAdminStatsQuery>;
export type BonsplansCommandeAdminStatsLazyQueryHookResult = ReturnType<typeof useBonsplansCommandeAdminStatsLazyQuery>;
export type BonsplansCommandeAdminStatsQueryResult = Apollo.QueryResult<BonsplansCommandeAdminStatsQuery, BonsplansCommandeAdminStatsQueryVariables>;
export const BonsplansPanierDocument = gql`
    query bonsplansPanier($espace: BonsplansEspace!) {
  bonsplansPanier(espace: $espace) {
    espace
    lignes {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
      params {
        carteCadeau {
          valeurFaciale
        }
        volatiles {
          name
          value
        }
      }
    }
    livraisons {
      uuid
      type
      sku {
        source
        productId
        articleId
      }
      quantite
      libelle
      prixUnitaire
      total
      totalRemise
    }
    wallets {
      id
      nom
      solde
      utiliser
      dateFin
      montantApplique
      params {
        montantsAppliques {
          ligne
          montantApplique
        }
      }
    }
    params {
      livraison {
        company
        firstname
        lastname
        address
        zipcode
        city
        country
      }
    }
    sousTotal
    total
    totalRemise
  }
}
    `;

/**
 * __useBonsplansPanierQuery__
 *
 * To run a query within a React component, call `useBonsplansPanierQuery` and pass it any options that fit your needs.
 * When your component renders, `useBonsplansPanierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBonsplansPanierQuery({
 *   variables: {
 *      espace: // value for 'espace'
 *   },
 * });
 */
export function useBonsplansPanierQuery(baseOptions: Apollo.QueryHookOptions<BonsplansPanierQuery, BonsplansPanierQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BonsplansPanierQuery, BonsplansPanierQueryVariables>(BonsplansPanierDocument, options);
      }
export function useBonsplansPanierLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BonsplansPanierQuery, BonsplansPanierQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BonsplansPanierQuery, BonsplansPanierQueryVariables>(BonsplansPanierDocument, options);
        }
export type BonsplansPanierQueryHookResult = ReturnType<typeof useBonsplansPanierQuery>;
export type BonsplansPanierLazyQueryHookResult = ReturnType<typeof useBonsplansPanierLazyQuery>;
export type BonsplansPanierQueryResult = Apollo.QueryResult<BonsplansPanierQuery, BonsplansPanierQueryVariables>;
export const CashbackCategoriesDocument = gql`
    query cashbackCategories {
  cashbackCategories {
    id
    name
    subCategories {
      id
      idCat
      name
    }
  }
}
    `;

/**
 * __useCashbackCategoriesQuery__
 *
 * To run a query within a React component, call `useCashbackCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCashbackCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CashbackCategoriesQuery, CashbackCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackCategoriesQuery, CashbackCategoriesQueryVariables>(CashbackCategoriesDocument, options);
      }
export function useCashbackCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackCategoriesQuery, CashbackCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackCategoriesQuery, CashbackCategoriesQueryVariables>(CashbackCategoriesDocument, options);
        }
export type CashbackCategoriesQueryHookResult = ReturnType<typeof useCashbackCategoriesQuery>;
export type CashbackCategoriesLazyQueryHookResult = ReturnType<typeof useCashbackCategoriesLazyQuery>;
export type CashbackCategoriesQueryResult = Apollo.QueryResult<CashbackCategoriesQuery, CashbackCategoriesQueryVariables>;
export const CashbackSubCategoriesDocument = gql`
    query cashbackSubCategories {
  cashbackSubCategories {
    id
    idCat
    name
  }
}
    `;

/**
 * __useCashbackSubCategoriesQuery__
 *
 * To run a query within a React component, call `useCashbackSubCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackSubCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackSubCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCashbackSubCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CashbackSubCategoriesQuery, CashbackSubCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackSubCategoriesQuery, CashbackSubCategoriesQueryVariables>(CashbackSubCategoriesDocument, options);
      }
export function useCashbackSubCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackSubCategoriesQuery, CashbackSubCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackSubCategoriesQuery, CashbackSubCategoriesQueryVariables>(CashbackSubCategoriesDocument, options);
        }
export type CashbackSubCategoriesQueryHookResult = ReturnType<typeof useCashbackSubCategoriesQuery>;
export type CashbackSubCategoriesLazyQueryHookResult = ReturnType<typeof useCashbackSubCategoriesLazyQuery>;
export type CashbackSubCategoriesQueryResult = Apollo.QueryResult<CashbackSubCategoriesQuery, CashbackSubCategoriesQueryVariables>;
export const CashbackOffersDocument = gql`
    query cashbackOffers($categoryId: ID, $subCategoryId: ID, $pagination: OffsetPaginationInput) {
  cashbackOffers(
    categoryId: $categoryId
    subCategoryId: $subCategoryId
    pagination: $pagination
  ) {
    data {
      id
      brandId
      brandLogo
      brandName
      brandDescription
      companyId
      companyName
      shops {
        id
        name
        name2
        logo
        description
        url
        type
        siret
      }
      urlRedirectWeb
      urlRedirectMobile
      description
      shortDescription
      condition
      startDate
      endDate
      reduction
      unit
      categories {
        id
        name
        subCategories {
          id
          idCat
          name
        }
      }
      subCategories {
        id
        idCat
        name
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useCashbackOffersQuery__
 *
 * To run a query within a React component, call `useCashbackOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackOffersQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      subCategoryId: // value for 'subCategoryId'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useCashbackOffersQuery(baseOptions?: Apollo.QueryHookOptions<CashbackOffersQuery, CashbackOffersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackOffersQuery, CashbackOffersQueryVariables>(CashbackOffersDocument, options);
      }
export function useCashbackOffersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackOffersQuery, CashbackOffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackOffersQuery, CashbackOffersQueryVariables>(CashbackOffersDocument, options);
        }
export type CashbackOffersQueryHookResult = ReturnType<typeof useCashbackOffersQuery>;
export type CashbackOffersLazyQueryHookResult = ReturnType<typeof useCashbackOffersLazyQuery>;
export type CashbackOffersQueryResult = Apollo.QueryResult<CashbackOffersQuery, CashbackOffersQueryVariables>;
export const CashbackOfferDocument = gql`
    query cashbackOffer($input: IdentifiedInput!) {
  cashbackOffer(input: $input) {
    id
    brandId
    brandLogo
    brandName
    brandDescription
    companyId
    companyName
    shops {
      id
      name
      name2
      logo
      description
      url
      type
      siret
    }
    urlRedirectWeb
    urlRedirectMobile
    description
    shortDescription
    condition
    startDate
    endDate
    reduction
    unit
    categories {
      id
      name
      subCategories {
        id
        idCat
        name
      }
    }
    subCategories {
      id
      idCat
      name
    }
  }
}
    `;

/**
 * __useCashbackOfferQuery__
 *
 * To run a query within a React component, call `useCashbackOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackOfferQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCashbackOfferQuery(baseOptions: Apollo.QueryHookOptions<CashbackOfferQuery, CashbackOfferQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackOfferQuery, CashbackOfferQueryVariables>(CashbackOfferDocument, options);
      }
export function useCashbackOfferLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackOfferQuery, CashbackOfferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackOfferQuery, CashbackOfferQueryVariables>(CashbackOfferDocument, options);
        }
export type CashbackOfferQueryHookResult = ReturnType<typeof useCashbackOfferQuery>;
export type CashbackOfferLazyQueryHookResult = ReturnType<typeof useCashbackOfferLazyQuery>;
export type CashbackOfferQueryResult = Apollo.QueryResult<CashbackOfferQuery, CashbackOfferQueryVariables>;
export const CashbackPaymentsDocument = gql`
    query cashbackPayments {
  cashbackPayments {
    data {
      id
      amount
      iban
      ibic
      firstName
      lastName
      transacState {
        code
        status
        comment
      }
      date
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useCashbackPaymentsQuery__
 *
 * To run a query within a React component, call `useCashbackPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackPaymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCashbackPaymentsQuery(baseOptions?: Apollo.QueryHookOptions<CashbackPaymentsQuery, CashbackPaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackPaymentsQuery, CashbackPaymentsQueryVariables>(CashbackPaymentsDocument, options);
      }
export function useCashbackPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackPaymentsQuery, CashbackPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackPaymentsQuery, CashbackPaymentsQueryVariables>(CashbackPaymentsDocument, options);
        }
export type CashbackPaymentsQueryHookResult = ReturnType<typeof useCashbackPaymentsQuery>;
export type CashbackPaymentsLazyQueryHookResult = ReturnType<typeof useCashbackPaymentsLazyQuery>;
export type CashbackPaymentsQueryResult = Apollo.QueryResult<CashbackPaymentsQuery, CashbackPaymentsQueryVariables>;
export const CashbackPaymentDocument = gql`
    query cashbackPayment($input: IdentifiedInput!) {
  cashbackPayment(input: $input) {
    id
    amount
    iban
    ibic
    firstName
    lastName
    transacState {
      code
      status
      comment
    }
    date
  }
}
    `;

/**
 * __useCashbackPaymentQuery__
 *
 * To run a query within a React component, call `useCashbackPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackPaymentQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCashbackPaymentQuery(baseOptions: Apollo.QueryHookOptions<CashbackPaymentQuery, CashbackPaymentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackPaymentQuery, CashbackPaymentQueryVariables>(CashbackPaymentDocument, options);
      }
export function useCashbackPaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackPaymentQuery, CashbackPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackPaymentQuery, CashbackPaymentQueryVariables>(CashbackPaymentDocument, options);
        }
export type CashbackPaymentQueryHookResult = ReturnType<typeof useCashbackPaymentQuery>;
export type CashbackPaymentLazyQueryHookResult = ReturnType<typeof useCashbackPaymentLazyQuery>;
export type CashbackPaymentQueryResult = Apollo.QueryResult<CashbackPaymentQuery, CashbackPaymentQueryVariables>;
export const CashbackTransactionsDocument = gql`
    query cashbackTransactions {
  cashbackTransactions {
    data {
      id
      amount
      percentCashback
      unitCashback
      offerId
      shopId
      shopName
      gain
      transacState {
        code
        status
        comment
      }
      date
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useCashbackTransactionsQuery__
 *
 * To run a query within a React component, call `useCashbackTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCashbackTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<CashbackTransactionsQuery, CashbackTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackTransactionsQuery, CashbackTransactionsQueryVariables>(CashbackTransactionsDocument, options);
      }
export function useCashbackTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackTransactionsQuery, CashbackTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackTransactionsQuery, CashbackTransactionsQueryVariables>(CashbackTransactionsDocument, options);
        }
export type CashbackTransactionsQueryHookResult = ReturnType<typeof useCashbackTransactionsQuery>;
export type CashbackTransactionsLazyQueryHookResult = ReturnType<typeof useCashbackTransactionsLazyQuery>;
export type CashbackTransactionsQueryResult = Apollo.QueryResult<CashbackTransactionsQuery, CashbackTransactionsQueryVariables>;
export const CashbackTransactionDocument = gql`
    query cashbackTransaction($input: IdentifiedInput!) {
  cashbackTransaction(input: $input) {
    id
    amount
    percentCashback
    unitCashback
    offerId
    shopId
    shopName
    gain
    transacState {
      code
      status
      comment
    }
    date
  }
}
    `;

/**
 * __useCashbackTransactionQuery__
 *
 * To run a query within a React component, call `useCashbackTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackTransactionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCashbackTransactionQuery(baseOptions: Apollo.QueryHookOptions<CashbackTransactionQuery, CashbackTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackTransactionQuery, CashbackTransactionQueryVariables>(CashbackTransactionDocument, options);
      }
export function useCashbackTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackTransactionQuery, CashbackTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackTransactionQuery, CashbackTransactionQueryVariables>(CashbackTransactionDocument, options);
        }
export type CashbackTransactionQueryHookResult = ReturnType<typeof useCashbackTransactionQuery>;
export type CashbackTransactionLazyQueryHookResult = ReturnType<typeof useCashbackTransactionLazyQuery>;
export type CashbackTransactionQueryResult = Apollo.QueryResult<CashbackTransactionQuery, CashbackTransactionQueryVariables>;
export const CashbackBalanceDocument = gql`
    query cashbackBalance {
  cashbackBalance {
    creditAmount
    debitAmount
    balanceAmount
    waitAmount
    gainAmount
    payAmount
    capAmount
    thresholdAmount
  }
}
    `;

/**
 * __useCashbackBalanceQuery__
 *
 * To run a query within a React component, call `useCashbackBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashbackBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashbackBalanceQuery({
 *   variables: {
 *   },
 * });
 */
export function useCashbackBalanceQuery(baseOptions?: Apollo.QueryHookOptions<CashbackBalanceQuery, CashbackBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CashbackBalanceQuery, CashbackBalanceQueryVariables>(CashbackBalanceDocument, options);
      }
export function useCashbackBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashbackBalanceQuery, CashbackBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CashbackBalanceQuery, CashbackBalanceQueryVariables>(CashbackBalanceDocument, options);
        }
export type CashbackBalanceQueryHookResult = ReturnType<typeof useCashbackBalanceQuery>;
export type CashbackBalanceLazyQueryHookResult = ReturnType<typeof useCashbackBalanceLazyQuery>;
export type CashbackBalanceQueryResult = Apollo.QueryResult<CashbackBalanceQuery, CashbackBalanceQueryVariables>;
export const ReductionCodeCatalogueDocument = gql`
    query reductionCodeCatalogue {
  reductionCodeCatalogue {
    nom
    accroche
    visuel {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
  }
}
    `;

/**
 * __useReductionCodeCatalogueQuery__
 *
 * To run a query within a React component, call `useReductionCodeCatalogueQuery` and pass it any options that fit your needs.
 * When your component renders, `useReductionCodeCatalogueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReductionCodeCatalogueQuery({
 *   variables: {
 *   },
 * });
 */
export function useReductionCodeCatalogueQuery(baseOptions?: Apollo.QueryHookOptions<ReductionCodeCatalogueQuery, ReductionCodeCatalogueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReductionCodeCatalogueQuery, ReductionCodeCatalogueQueryVariables>(ReductionCodeCatalogueDocument, options);
      }
export function useReductionCodeCatalogueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReductionCodeCatalogueQuery, ReductionCodeCatalogueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReductionCodeCatalogueQuery, ReductionCodeCatalogueQueryVariables>(ReductionCodeCatalogueDocument, options);
        }
export type ReductionCodeCatalogueQueryHookResult = ReturnType<typeof useReductionCodeCatalogueQuery>;
export type ReductionCodeCatalogueLazyQueryHookResult = ReturnType<typeof useReductionCodeCatalogueLazyQuery>;
export type ReductionCodeCatalogueQueryResult = Apollo.QueryResult<ReductionCodeCatalogueQuery, ReductionCodeCatalogueQueryVariables>;
export const ReductionCodeCategoriesDocument = gql`
    query reductionCodeCategories {
  reductionCodeCategories {
    id
    name
    subCategories {
      id
      name
    }
  }
}
    `;

/**
 * __useReductionCodeCategoriesQuery__
 *
 * To run a query within a React component, call `useReductionCodeCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReductionCodeCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReductionCodeCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useReductionCodeCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ReductionCodeCategoriesQuery, ReductionCodeCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReductionCodeCategoriesQuery, ReductionCodeCategoriesQueryVariables>(ReductionCodeCategoriesDocument, options);
      }
export function useReductionCodeCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReductionCodeCategoriesQuery, ReductionCodeCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReductionCodeCategoriesQuery, ReductionCodeCategoriesQueryVariables>(ReductionCodeCategoriesDocument, options);
        }
export type ReductionCodeCategoriesQueryHookResult = ReturnType<typeof useReductionCodeCategoriesQuery>;
export type ReductionCodeCategoriesLazyQueryHookResult = ReturnType<typeof useReductionCodeCategoriesLazyQuery>;
export type ReductionCodeCategoriesQueryResult = Apollo.QueryResult<ReductionCodeCategoriesQuery, ReductionCodeCategoriesQueryVariables>;
export const ReductionCodeSubCategoriesDocument = gql`
    query reductionCodeSubCategories {
  reductionCodeSubCategories {
    id
    name
  }
}
    `;

/**
 * __useReductionCodeSubCategoriesQuery__
 *
 * To run a query within a React component, call `useReductionCodeSubCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReductionCodeSubCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReductionCodeSubCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useReductionCodeSubCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ReductionCodeSubCategoriesQuery, ReductionCodeSubCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReductionCodeSubCategoriesQuery, ReductionCodeSubCategoriesQueryVariables>(ReductionCodeSubCategoriesDocument, options);
      }
export function useReductionCodeSubCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReductionCodeSubCategoriesQuery, ReductionCodeSubCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReductionCodeSubCategoriesQuery, ReductionCodeSubCategoriesQueryVariables>(ReductionCodeSubCategoriesDocument, options);
        }
export type ReductionCodeSubCategoriesQueryHookResult = ReturnType<typeof useReductionCodeSubCategoriesQuery>;
export type ReductionCodeSubCategoriesLazyQueryHookResult = ReturnType<typeof useReductionCodeSubCategoriesLazyQuery>;
export type ReductionCodeSubCategoriesQueryResult = Apollo.QueryResult<ReductionCodeSubCategoriesQuery, ReductionCodeSubCategoriesQueryVariables>;
export const ReductionCodesDocument = gql`
    query reductionCodes($input: ReductionCodesInput, $pagination: OffsetPaginationInput) {
  reductionCodes(input: $input, pagination: $pagination) {
    data {
      id
      brand
      brandLogoUrl
      urlRedirectWeb
      urlRedirectMobile
      description
      shortDescription
      conditions
      startDate
      endDate
      reduction
      unit
      offre
      codeReduction
      shop {
        id
        name
        logoUrl
        description
        reductions {
          id
          brand
          brandLogoUrl
          urlRedirectWeb
          urlRedirectMobile
          description
          shortDescription
          conditions
          startDate
          endDate
          reduction
          unit
          offre
          codeReduction
          shop {
            id
            name
            logoUrl
            description
          }
        }
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useReductionCodesQuery__
 *
 * To run a query within a React component, call `useReductionCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReductionCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReductionCodesQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useReductionCodesQuery(baseOptions?: Apollo.QueryHookOptions<ReductionCodesQuery, ReductionCodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReductionCodesQuery, ReductionCodesQueryVariables>(ReductionCodesDocument, options);
      }
export function useReductionCodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReductionCodesQuery, ReductionCodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReductionCodesQuery, ReductionCodesQueryVariables>(ReductionCodesDocument, options);
        }
export type ReductionCodesQueryHookResult = ReturnType<typeof useReductionCodesQuery>;
export type ReductionCodesLazyQueryHookResult = ReturnType<typeof useReductionCodesLazyQuery>;
export type ReductionCodesQueryResult = Apollo.QueryResult<ReductionCodesQuery, ReductionCodesQueryVariables>;
export const ReductionCodeDocument = gql`
    query reductionCode($input: IdentifiedInput!) {
  reductionCode(input: $input) {
    id
    brand
    brandLogoUrl
    urlRedirectWeb
    urlRedirectMobile
    description
    shortDescription
    conditions
    startDate
    endDate
    reduction
    unit
    offre
    codeReduction
    shop {
      id
      name
      logoUrl
      description
      reductions {
        id
        brand
        brandLogoUrl
        urlRedirectWeb
        urlRedirectMobile
        description
        shortDescription
        conditions
        startDate
        endDate
        reduction
        unit
        offre
        codeReduction
        shop {
          id
          name
          logoUrl
          description
        }
      }
    }
  }
}
    `;

/**
 * __useReductionCodeQuery__
 *
 * To run a query within a React component, call `useReductionCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useReductionCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReductionCodeQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReductionCodeQuery(baseOptions: Apollo.QueryHookOptions<ReductionCodeQuery, ReductionCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReductionCodeQuery, ReductionCodeQueryVariables>(ReductionCodeDocument, options);
      }
export function useReductionCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReductionCodeQuery, ReductionCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReductionCodeQuery, ReductionCodeQueryVariables>(ReductionCodeDocument, options);
        }
export type ReductionCodeQueryHookResult = ReturnType<typeof useReductionCodeQuery>;
export type ReductionCodeLazyQueryHookResult = ReturnType<typeof useReductionCodeLazyQuery>;
export type ReductionCodeQueryResult = Apollo.QueryResult<ReductionCodeQuery, ReductionCodeQueryVariables>;
export const ReductionCodeShopsDocument = gql`
    query reductionCodeShops($input: ReductionCodeShopsInput, $pagination: OffsetPaginationInput) {
  reductionCodeShops(input: $input, pagination: $pagination) {
    data {
      id
      name
      logoUrl
      description
      reductions {
        id
        brand
        brandLogoUrl
        urlRedirectWeb
        urlRedirectMobile
        description
        shortDescription
        conditions
        startDate
        endDate
        reduction
        unit
        offre
        codeReduction
        shop {
          id
          name
          logoUrl
          description
          reductions {
            id
            brand
            brandLogoUrl
            urlRedirectWeb
            urlRedirectMobile
            description
            shortDescription
            conditions
            startDate
            endDate
            reduction
            unit
            offre
            codeReduction
          }
        }
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useReductionCodeShopsQuery__
 *
 * To run a query within a React component, call `useReductionCodeShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReductionCodeShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReductionCodeShopsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useReductionCodeShopsQuery(baseOptions?: Apollo.QueryHookOptions<ReductionCodeShopsQuery, ReductionCodeShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReductionCodeShopsQuery, ReductionCodeShopsQueryVariables>(ReductionCodeShopsDocument, options);
      }
export function useReductionCodeShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReductionCodeShopsQuery, ReductionCodeShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReductionCodeShopsQuery, ReductionCodeShopsQueryVariables>(ReductionCodeShopsDocument, options);
        }
export type ReductionCodeShopsQueryHookResult = ReturnType<typeof useReductionCodeShopsQuery>;
export type ReductionCodeShopsLazyQueryHookResult = ReturnType<typeof useReductionCodeShopsLazyQuery>;
export type ReductionCodeShopsQueryResult = Apollo.QueryResult<ReductionCodeShopsQuery, ReductionCodeShopsQueryVariables>;
export const ReductionCodeShopDocument = gql`
    query reductionCodeShop($input: IdentifiedInput!) {
  reductionCodeShop(input: $input) {
    id
    name
    logoUrl
    description
    reductions {
      id
      brand
      brandLogoUrl
      urlRedirectWeb
      urlRedirectMobile
      description
      shortDescription
      conditions
      startDate
      endDate
      reduction
      unit
      offre
      codeReduction
      shop {
        id
        name
        logoUrl
        description
        reductions {
          id
          brand
          brandLogoUrl
          urlRedirectWeb
          urlRedirectMobile
          description
          shortDescription
          conditions
          startDate
          endDate
          reduction
          unit
          offre
          codeReduction
        }
      }
    }
  }
}
    `;

/**
 * __useReductionCodeShopQuery__
 *
 * To run a query within a React component, call `useReductionCodeShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useReductionCodeShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReductionCodeShopQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReductionCodeShopQuery(baseOptions: Apollo.QueryHookOptions<ReductionCodeShopQuery, ReductionCodeShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReductionCodeShopQuery, ReductionCodeShopQueryVariables>(ReductionCodeShopDocument, options);
      }
export function useReductionCodeShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReductionCodeShopQuery, ReductionCodeShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReductionCodeShopQuery, ReductionCodeShopQueryVariables>(ReductionCodeShopDocument, options);
        }
export type ReductionCodeShopQueryHookResult = ReturnType<typeof useReductionCodeShopQuery>;
export type ReductionCodeShopLazyQueryHookResult = ReturnType<typeof useReductionCodeShopLazyQuery>;
export type ReductionCodeShopQueryResult = Apollo.QueryResult<ReductionCodeShopQuery, ReductionCodeShopQueryVariables>;
export const WalletsAdvantagesDocument = gql`
    query walletsAdvantages {
  walletsAdvantages {
    id
    name
    typeDistribution
    shortDescription
    description
    image {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
  }
}
    `;

/**
 * __useWalletsAdvantagesQuery__
 *
 * To run a query within a React component, call `useWalletsAdvantagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsAdvantagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsAdvantagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWalletsAdvantagesQuery(baseOptions?: Apollo.QueryHookOptions<WalletsAdvantagesQuery, WalletsAdvantagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsAdvantagesQuery, WalletsAdvantagesQueryVariables>(WalletsAdvantagesDocument, options);
      }
export function useWalletsAdvantagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsAdvantagesQuery, WalletsAdvantagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsAdvantagesQuery, WalletsAdvantagesQueryVariables>(WalletsAdvantagesDocument, options);
        }
export type WalletsAdvantagesQueryHookResult = ReturnType<typeof useWalletsAdvantagesQuery>;
export type WalletsAdvantagesLazyQueryHookResult = ReturnType<typeof useWalletsAdvantagesLazyQuery>;
export type WalletsAdvantagesQueryResult = Apollo.QueryResult<WalletsAdvantagesQuery, WalletsAdvantagesQueryVariables>;
export const CarteVacancesDocument = gql`
    query carteVacances($carteVacances_carte_transactions_pagination: OffsetPaginationInput) {
  carteVacances {
    statut
    abonnement {
      id
      statut
      dateDebut
      dateFin
      physique
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
    }
    carte {
      id
      imageBackgroundUrl
      cardMaskedNumber
      cardHolder
      expiryDate
      solde
      physique {
        blocked
        canceled
        deliveryUrl
        deliveryDate
      }
      transactions(pagination: $carteVacances_carte_transactions_pagination) {
        data {
          id
          type
          nom
          montant
          statut
          date
          capabilities {
            requestMerchantEligibility
          }
        }
        pagination {
          count
          offset
          firstItem
          lastItem
          limit
          total
        }
      }
      capabilities {
        showCard
        showPin
        activatePhysicalCard
        lockPhysicalCard
        unlockPhysicalCard
        orderPhysicalCard
      }
    }
    solde
    personalWallet {
      id
      solde
    }
  }
}
    `;

/**
 * __useCarteVacancesQuery__
 *
 * To run a query within a React component, call `useCarteVacancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesQuery({
 *   variables: {
 *      carteVacances_carte_transactions_pagination: // value for 'carteVacances_carte_transactions_pagination'
 *   },
 * });
 */
export function useCarteVacancesQuery(baseOptions?: Apollo.QueryHookOptions<CarteVacancesQuery, CarteVacancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesQuery, CarteVacancesQueryVariables>(CarteVacancesDocument, options);
      }
export function useCarteVacancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesQuery, CarteVacancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesQuery, CarteVacancesQueryVariables>(CarteVacancesDocument, options);
        }
export type CarteVacancesQueryHookResult = ReturnType<typeof useCarteVacancesQuery>;
export type CarteVacancesLazyQueryHookResult = ReturnType<typeof useCarteVacancesLazyQuery>;
export type CarteVacancesQueryResult = Apollo.QueryResult<CarteVacancesQuery, CarteVacancesQueryVariables>;
export const CarteVacancesTransactionDocument = gql`
    query carteVacancesTransaction($input: IdentifiedInput!) {
  carteVacancesTransaction(input: $input) {
    id
    type
    nom
    montant
    statut
    date
    capabilities {
      requestMerchantEligibility
    }
  }
}
    `;

/**
 * __useCarteVacancesTransactionQuery__
 *
 * To run a query within a React component, call `useCarteVacancesTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesTransactionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarteVacancesTransactionQuery(baseOptions: Apollo.QueryHookOptions<CarteVacancesTransactionQuery, CarteVacancesTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesTransactionQuery, CarteVacancesTransactionQueryVariables>(CarteVacancesTransactionDocument, options);
      }
export function useCarteVacancesTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesTransactionQuery, CarteVacancesTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesTransactionQuery, CarteVacancesTransactionQueryVariables>(CarteVacancesTransactionDocument, options);
        }
export type CarteVacancesTransactionQueryHookResult = ReturnType<typeof useCarteVacancesTransactionQuery>;
export type CarteVacancesTransactionLazyQueryHookResult = ReturnType<typeof useCarteVacancesTransactionLazyQuery>;
export type CarteVacancesTransactionQueryResult = Apollo.QueryResult<CarteVacancesTransactionQuery, CarteVacancesTransactionQueryVariables>;
export const CarteVacancesAbonnementCommandeDocument = gql`
    query carteVacancesAbonnementCommande($carteVacancesAbonnementCommande_abonnements_pagination: OffsetPaginationInput, $input: IdentifiedInput!) {
  carteVacancesAbonnementCommande(input: $input) {
    id
    reference
    statut
    montant
    montantHT
    montantTVA
    montantAbonnements
    montantAbonnementsHT
    montantAbonnementsTVA
    montantCartes
    montantCartesHT
    montantCartesTVA
    montantRemise
    montantRemiseHT
    montantRemiseTVA
    tauxTVA
    quantiteAbonnements
    duree
    physique
    dateCommande
    cheque {
      ORDRE
      ADRESSE
      CODE_POSTAL
      VILLE
    }
    virement {
      IBAN
      BIC
      BANQUE
    }
    abonnements(pagination: $carteVacancesAbonnementCommande_abonnements_pagination) {
      data {
        id
        statut
        dateDebut
        dateFin
        physique
        user {
          id
          displayName
          nom
          email
          avatar {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
        }
      }
      pagination {
        count
        offset
        firstItem
        lastItem
        limit
        total
      }
    }
    typePaiement
    factureUrl
  }
}
    `;

/**
 * __useCarteVacancesAbonnementCommandeQuery__
 *
 * To run a query within a React component, call `useCarteVacancesAbonnementCommandeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAbonnementCommandeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesAbonnementCommandeQuery({
 *   variables: {
 *      carteVacancesAbonnementCommande_abonnements_pagination: // value for 'carteVacancesAbonnementCommande_abonnements_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarteVacancesAbonnementCommandeQuery(baseOptions: Apollo.QueryHookOptions<CarteVacancesAbonnementCommandeQuery, CarteVacancesAbonnementCommandeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesAbonnementCommandeQuery, CarteVacancesAbonnementCommandeQueryVariables>(CarteVacancesAbonnementCommandeDocument, options);
      }
export function useCarteVacancesAbonnementCommandeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesAbonnementCommandeQuery, CarteVacancesAbonnementCommandeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesAbonnementCommandeQuery, CarteVacancesAbonnementCommandeQueryVariables>(CarteVacancesAbonnementCommandeDocument, options);
        }
export type CarteVacancesAbonnementCommandeQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementCommandeQuery>;
export type CarteVacancesAbonnementCommandeLazyQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementCommandeLazyQuery>;
export type CarteVacancesAbonnementCommandeQueryResult = Apollo.QueryResult<CarteVacancesAbonnementCommandeQuery, CarteVacancesAbonnementCommandeQueryVariables>;
export const CarteVacancesAbonnementCommandesDocument = gql`
    query carteVacancesAbonnementCommandes($carteVacancesAbonnementCommandes_data_abonnements_pagination: OffsetPaginationInput, $input: CarteVacancesAbonnementCommandesInput, $pagination: OffsetPaginationInput) {
  carteVacancesAbonnementCommandes(input: $input, pagination: $pagination) {
    data {
      id
      reference
      statut
      montant
      montantHT
      montantTVA
      montantAbonnements
      montantAbonnementsHT
      montantAbonnementsTVA
      montantCartes
      montantCartesHT
      montantCartesTVA
      montantRemise
      montantRemiseHT
      montantRemiseTVA
      tauxTVA
      quantiteAbonnements
      duree
      physique
      dateCommande
      cheque {
        ORDRE
        ADRESSE
        CODE_POSTAL
        VILLE
      }
      virement {
        IBAN
        BIC
        BANQUE
      }
      abonnements(
        pagination: $carteVacancesAbonnementCommandes_data_abonnements_pagination
      ) {
        data {
          id
          statut
          dateDebut
          dateFin
          physique
          user {
            id
            displayName
            nom
            email
          }
        }
        pagination {
          count
          offset
          firstItem
          lastItem
          limit
          total
        }
      }
      typePaiement
      factureUrl
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useCarteVacancesAbonnementCommandesQuery__
 *
 * To run a query within a React component, call `useCarteVacancesAbonnementCommandesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAbonnementCommandesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesAbonnementCommandesQuery({
 *   variables: {
 *      carteVacancesAbonnementCommandes_data_abonnements_pagination: // value for 'carteVacancesAbonnementCommandes_data_abonnements_pagination'
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useCarteVacancesAbonnementCommandesQuery(baseOptions?: Apollo.QueryHookOptions<CarteVacancesAbonnementCommandesQuery, CarteVacancesAbonnementCommandesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesAbonnementCommandesQuery, CarteVacancesAbonnementCommandesQueryVariables>(CarteVacancesAbonnementCommandesDocument, options);
      }
export function useCarteVacancesAbonnementCommandesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesAbonnementCommandesQuery, CarteVacancesAbonnementCommandesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesAbonnementCommandesQuery, CarteVacancesAbonnementCommandesQueryVariables>(CarteVacancesAbonnementCommandesDocument, options);
        }
export type CarteVacancesAbonnementCommandesQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementCommandesQuery>;
export type CarteVacancesAbonnementCommandesLazyQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementCommandesLazyQuery>;
export type CarteVacancesAbonnementCommandesQueryResult = Apollo.QueryResult<CarteVacancesAbonnementCommandesQuery, CarteVacancesAbonnementCommandesQueryVariables>;
export const CarteVacancesAbonnementsDocument = gql`
    query carteVacancesAbonnements($input: CarteVacancesAbonnementsInput, $pagination: OffsetPaginationInput) {
  carteVacancesAbonnements(input: $input, pagination: $pagination) {
    data {
      id
      statut
      dateDebut
      dateFin
      physique
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useCarteVacancesAbonnementsQuery__
 *
 * To run a query within a React component, call `useCarteVacancesAbonnementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAbonnementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesAbonnementsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useCarteVacancesAbonnementsQuery(baseOptions?: Apollo.QueryHookOptions<CarteVacancesAbonnementsQuery, CarteVacancesAbonnementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesAbonnementsQuery, CarteVacancesAbonnementsQueryVariables>(CarteVacancesAbonnementsDocument, options);
      }
export function useCarteVacancesAbonnementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesAbonnementsQuery, CarteVacancesAbonnementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesAbonnementsQuery, CarteVacancesAbonnementsQueryVariables>(CarteVacancesAbonnementsDocument, options);
        }
export type CarteVacancesAbonnementsQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementsQuery>;
export type CarteVacancesAbonnementsLazyQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementsLazyQuery>;
export type CarteVacancesAbonnementsQueryResult = Apollo.QueryResult<CarteVacancesAbonnementsQuery, CarteVacancesAbonnementsQueryVariables>;
export const CarteVacancesAbonnementStatsDocument = gql`
    query carteVacancesAbonnementStats {
  carteVacancesAbonnementStats {
    statut
    count
  }
}
    `;

/**
 * __useCarteVacancesAbonnementStatsQuery__
 *
 * To run a query within a React component, call `useCarteVacancesAbonnementStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAbonnementStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesAbonnementStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCarteVacancesAbonnementStatsQuery(baseOptions?: Apollo.QueryHookOptions<CarteVacancesAbonnementStatsQuery, CarteVacancesAbonnementStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesAbonnementStatsQuery, CarteVacancesAbonnementStatsQueryVariables>(CarteVacancesAbonnementStatsDocument, options);
      }
export function useCarteVacancesAbonnementStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesAbonnementStatsQuery, CarteVacancesAbonnementStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesAbonnementStatsQuery, CarteVacancesAbonnementStatsQueryVariables>(CarteVacancesAbonnementStatsDocument, options);
        }
export type CarteVacancesAbonnementStatsQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementStatsQuery>;
export type CarteVacancesAbonnementStatsLazyQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementStatsLazyQuery>;
export type CarteVacancesAbonnementStatsQueryResult = Apollo.QueryResult<CarteVacancesAbonnementStatsQuery, CarteVacancesAbonnementStatsQueryVariables>;
export const CarteVacancesAbonnementOptionsDocument = gql`
    query carteVacancesAbonnementOptions($input: CarteVacancesAbonnementOptionsInput) {
  carteVacancesAbonnementOptions(input: $input) {
    id
    libelle
    duree
    moisOfferts
    pourcentageRemise
  }
}
    `;

/**
 * __useCarteVacancesAbonnementOptionsQuery__
 *
 * To run a query within a React component, call `useCarteVacancesAbonnementOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAbonnementOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesAbonnementOptionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarteVacancesAbonnementOptionsQuery(baseOptions?: Apollo.QueryHookOptions<CarteVacancesAbonnementOptionsQuery, CarteVacancesAbonnementOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesAbonnementOptionsQuery, CarteVacancesAbonnementOptionsQueryVariables>(CarteVacancesAbonnementOptionsDocument, options);
      }
export function useCarteVacancesAbonnementOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesAbonnementOptionsQuery, CarteVacancesAbonnementOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesAbonnementOptionsQuery, CarteVacancesAbonnementOptionsQueryVariables>(CarteVacancesAbonnementOptionsDocument, options);
        }
export type CarteVacancesAbonnementOptionsQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementOptionsQuery>;
export type CarteVacancesAbonnementOptionsLazyQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementOptionsLazyQuery>;
export type CarteVacancesAbonnementOptionsQueryResult = Apollo.QueryResult<CarteVacancesAbonnementOptionsQuery, CarteVacancesAbonnementOptionsQueryVariables>;
export const CarteVacancesAbonnementSimulationDocument = gql`
    query carteVacancesAbonnementSimulation($input: CarteVacancesAbonnementSimulationInput!) {
  carteVacancesAbonnementSimulation(input: $input) {
    coutAbonnementUnitaire
    coutCartePhysiqueUnitaire
    montant
    montantHT
    montantTVA
    montantAbonnements
    montantAbonnementsHT
    montantAbonnementsTVA
    montantCartes
    montantCartesHT
    montantCartesTVA
    montantRemise
    montantRemiseHT
    montantRemiseTVA
    tauxTVA
    quantiteAbonnements
    quantiteAbonnementsIgnores
    duree
    physique
    dateCommande
    typePaiement
    solde
  }
}
    `;

/**
 * __useCarteVacancesAbonnementSimulationQuery__
 *
 * To run a query within a React component, call `useCarteVacancesAbonnementSimulationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAbonnementSimulationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesAbonnementSimulationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarteVacancesAbonnementSimulationQuery(baseOptions: Apollo.QueryHookOptions<CarteVacancesAbonnementSimulationQuery, CarteVacancesAbonnementSimulationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesAbonnementSimulationQuery, CarteVacancesAbonnementSimulationQueryVariables>(CarteVacancesAbonnementSimulationDocument, options);
      }
export function useCarteVacancesAbonnementSimulationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesAbonnementSimulationQuery, CarteVacancesAbonnementSimulationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesAbonnementSimulationQuery, CarteVacancesAbonnementSimulationQueryVariables>(CarteVacancesAbonnementSimulationDocument, options);
        }
export type CarteVacancesAbonnementSimulationQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementSimulationQuery>;
export type CarteVacancesAbonnementSimulationLazyQueryHookResult = ReturnType<typeof useCarteVacancesAbonnementSimulationLazyQuery>;
export type CarteVacancesAbonnementSimulationQueryResult = Apollo.QueryResult<CarteVacancesAbonnementSimulationQuery, CarteVacancesAbonnementSimulationQueryVariables>;
export const CarteVacancesAlimentationSimulationDocument = gql`
    query carteVacancesAlimentationSimulation($input: CarteVacancesAlimentationSimulationInput!) {
  carteVacancesAlimentationSimulation(input: $input) {
    frais
    soldeUserPersonnalWallet
    soldeCarte
    montant
  }
}
    `;

/**
 * __useCarteVacancesAlimentationSimulationQuery__
 *
 * To run a query within a React component, call `useCarteVacancesAlimentationSimulationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarteVacancesAlimentationSimulationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarteVacancesAlimentationSimulationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCarteVacancesAlimentationSimulationQuery(baseOptions: Apollo.QueryHookOptions<CarteVacancesAlimentationSimulationQuery, CarteVacancesAlimentationSimulationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarteVacancesAlimentationSimulationQuery, CarteVacancesAlimentationSimulationQueryVariables>(CarteVacancesAlimentationSimulationDocument, options);
      }
export function useCarteVacancesAlimentationSimulationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarteVacancesAlimentationSimulationQuery, CarteVacancesAlimentationSimulationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarteVacancesAlimentationSimulationQuery, CarteVacancesAlimentationSimulationQueryVariables>(CarteVacancesAlimentationSimulationDocument, options);
        }
export type CarteVacancesAlimentationSimulationQueryHookResult = ReturnType<typeof useCarteVacancesAlimentationSimulationQuery>;
export type CarteVacancesAlimentationSimulationLazyQueryHookResult = ReturnType<typeof useCarteVacancesAlimentationSimulationLazyQuery>;
export type CarteVacancesAlimentationSimulationQueryResult = Apollo.QueryResult<CarteVacancesAlimentationSimulationQuery, CarteVacancesAlimentationSimulationQueryVariables>;
export const WalletsDistributionsDocument = gql`
    query walletsDistributions($input: WalletsDistributionsInput, $pagination: OffsetPaginationInput) {
  walletsDistributions(input: $input, pagination: $pagination) {
    data {
      id
      nom
      reference
      typeDistribution
      statut
      motifId
      motif {
        id
        typeDistribuable
        nom
        fontColor
        cover {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        duree
        dureeMax
        conditionsUtilisation
        produitPapierId
      }
      distribuables {
        ... on WalletsDistributionReductionRule {
          typeDistribuable
          subventionRule {
            ... on WalletsDistributionSubventionRulePourcentage {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleFixe {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleCagnotte {
              typeSubventionRule
            }
          }
          quotaRule {
            quotaType
            quota
            quotaRenouvelable
          }
          subventionnables {
            subventionnableType
            subventionnableId
            subventionnableNom
          }
          catalogue {
            id
            nom
            univers
            accroche
          }
        }
        ... on WalletsDistributionRemboursementRule {
          typeDistribuable
          subventionRule {
            ... on WalletsDistributionSubventionRulePourcentage {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleFixe {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleCagnotte {
              typeSubventionRule
            }
          }
        }
        ... on WalletsDistributionMotif {
          id
          typeDistribuable
          nom
          fontColor
          cover {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          duree
          dureeMax
          conditionsUtilisation
          produitPapierId
        }
        ... on WalletsDistributionCarteConfig {
          typeDistribuable
        }
      }
      dateDebut
      dateFin
      dateCloture
      conditionsUtilisation
      montant
      montantRemise
      solde
      pourcentageConsomme
      montantRembourse
      cnt
      secured
      factureUrl
      createdAt
      updatedAt
      capabilities {
        read
        create
        update
        delete
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useWalletsDistributionsQuery__
 *
 * To run a query within a React component, call `useWalletsDistributionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsDistributionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsDistributionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useWalletsDistributionsQuery(baseOptions?: Apollo.QueryHookOptions<WalletsDistributionsQuery, WalletsDistributionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsDistributionsQuery, WalletsDistributionsQueryVariables>(WalletsDistributionsDocument, options);
      }
export function useWalletsDistributionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsDistributionsQuery, WalletsDistributionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsDistributionsQuery, WalletsDistributionsQueryVariables>(WalletsDistributionsDocument, options);
        }
export type WalletsDistributionsQueryHookResult = ReturnType<typeof useWalletsDistributionsQuery>;
export type WalletsDistributionsLazyQueryHookResult = ReturnType<typeof useWalletsDistributionsLazyQuery>;
export type WalletsDistributionsQueryResult = Apollo.QueryResult<WalletsDistributionsQuery, WalletsDistributionsQueryVariables>;
export const WalletsDistributionMotifsDocument = gql`
    query walletsDistributionMotifs($pagination: OffsetPaginationInput) {
  walletsDistributionMotifs(pagination: $pagination) {
    data {
      id
      typeDistribuable
      nom
      fontColor
      cover {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      duree
      dureeMax
      conditionsUtilisation
      produitPapierId
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useWalletsDistributionMotifsQuery__
 *
 * To run a query within a React component, call `useWalletsDistributionMotifsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsDistributionMotifsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsDistributionMotifsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useWalletsDistributionMotifsQuery(baseOptions?: Apollo.QueryHookOptions<WalletsDistributionMotifsQuery, WalletsDistributionMotifsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsDistributionMotifsQuery, WalletsDistributionMotifsQueryVariables>(WalletsDistributionMotifsDocument, options);
      }
export function useWalletsDistributionMotifsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsDistributionMotifsQuery, WalletsDistributionMotifsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsDistributionMotifsQuery, WalletsDistributionMotifsQueryVariables>(WalletsDistributionMotifsDocument, options);
        }
export type WalletsDistributionMotifsQueryHookResult = ReturnType<typeof useWalletsDistributionMotifsQuery>;
export type WalletsDistributionMotifsLazyQueryHookResult = ReturnType<typeof useWalletsDistributionMotifsLazyQuery>;
export type WalletsDistributionMotifsQueryResult = Apollo.QueryResult<WalletsDistributionMotifsQuery, WalletsDistributionMotifsQueryVariables>;
export const WalletsDistributionEccMotifsDocument = gql`
    query walletsDistributionECCMotifs($pagination: OffsetPaginationInput) {
  walletsDistributionECCMotifs(pagination: $pagination) {
    data {
      id
      typeDistribuable
      nom
      fontColor
      cover {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      duree
      dureeMax
      conditionsUtilisation
      produitPapierId
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useWalletsDistributionEccMotifsQuery__
 *
 * To run a query within a React component, call `useWalletsDistributionEccMotifsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsDistributionEccMotifsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsDistributionEccMotifsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useWalletsDistributionEccMotifsQuery(baseOptions?: Apollo.QueryHookOptions<WalletsDistributionEccMotifsQuery, WalletsDistributionEccMotifsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsDistributionEccMotifsQuery, WalletsDistributionEccMotifsQueryVariables>(WalletsDistributionEccMotifsDocument, options);
      }
export function useWalletsDistributionEccMotifsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsDistributionEccMotifsQuery, WalletsDistributionEccMotifsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsDistributionEccMotifsQuery, WalletsDistributionEccMotifsQueryVariables>(WalletsDistributionEccMotifsDocument, options);
        }
export type WalletsDistributionEccMotifsQueryHookResult = ReturnType<typeof useWalletsDistributionEccMotifsQuery>;
export type WalletsDistributionEccMotifsLazyQueryHookResult = ReturnType<typeof useWalletsDistributionEccMotifsLazyQuery>;
export type WalletsDistributionEccMotifsQueryResult = Apollo.QueryResult<WalletsDistributionEccMotifsQuery, WalletsDistributionEccMotifsQueryVariables>;
export const WalletsDistributionCultureMotifDocument = gql`
    query walletsDistributionCultureMotif {
  walletsDistributionCultureMotif {
    id
    typeDistribuable
    nom
    fontColor
    cover {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    duree
    dureeMax
    conditionsUtilisation
    produitPapierId
  }
}
    `;

/**
 * __useWalletsDistributionCultureMotifQuery__
 *
 * To run a query within a React component, call `useWalletsDistributionCultureMotifQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsDistributionCultureMotifQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsDistributionCultureMotifQuery({
 *   variables: {
 *   },
 * });
 */
export function useWalletsDistributionCultureMotifQuery(baseOptions?: Apollo.QueryHookOptions<WalletsDistributionCultureMotifQuery, WalletsDistributionCultureMotifQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsDistributionCultureMotifQuery, WalletsDistributionCultureMotifQueryVariables>(WalletsDistributionCultureMotifDocument, options);
      }
export function useWalletsDistributionCultureMotifLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsDistributionCultureMotifQuery, WalletsDistributionCultureMotifQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsDistributionCultureMotifQuery, WalletsDistributionCultureMotifQueryVariables>(WalletsDistributionCultureMotifDocument, options);
        }
export type WalletsDistributionCultureMotifQueryHookResult = ReturnType<typeof useWalletsDistributionCultureMotifQuery>;
export type WalletsDistributionCultureMotifLazyQueryHookResult = ReturnType<typeof useWalletsDistributionCultureMotifLazyQuery>;
export type WalletsDistributionCultureMotifQueryResult = Apollo.QueryResult<WalletsDistributionCultureMotifQuery, WalletsDistributionCultureMotifQueryVariables>;
export const WalletsDistributionDocument = gql`
    query walletsDistribution($input: IdentifiedInput!) {
  walletsDistribution(input: $input) {
    id
    nom
    reference
    typeDistribution
    statut
    motifId
    motif {
      id
      typeDistribuable
      nom
      fontColor
      cover {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
      duree
      dureeMax
      conditionsUtilisation
      produitPapierId
    }
    distribuables {
      ... on WalletsDistributionReductionRule {
        typeDistribuable
        subventionRule {
          ... on WalletsDistributionSubventionRulePourcentage {
            typeSubventionRule
            value
          }
          ... on WalletsDistributionSubventionRuleFixe {
            typeSubventionRule
            value
          }
          ... on WalletsDistributionSubventionRuleCagnotte {
            typeSubventionRule
          }
        }
        quotaRule {
          quotaType
          quota
          quotaRenouvelable
        }
        subventionnables {
          subventionnableType
          subventionnableId
          subventionnableNom
        }
        catalogue {
          id
          nom
          univers
          accroche
          visuel {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          categories {
            id
            catalogueId
            parentId
            level
            nom
          }
        }
      }
      ... on WalletsDistributionRemboursementRule {
        typeDistribuable
        subventionRule {
          ... on WalletsDistributionSubventionRulePourcentage {
            typeSubventionRule
            value
          }
          ... on WalletsDistributionSubventionRuleFixe {
            typeSubventionRule
            value
          }
          ... on WalletsDistributionSubventionRuleCagnotte {
            typeSubventionRule
          }
        }
      }
      ... on WalletsDistributionMotif {
        id
        typeDistribuable
        nom
        fontColor
        cover {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        duree
        dureeMax
        conditionsUtilisation
        produitPapierId
      }
      ... on WalletsDistributionCarteConfig {
        typeDistribuable
      }
    }
    dateDebut
    dateFin
    dateCloture
    conditionsUtilisation
    montant
    montantRemise
    solde
    pourcentageConsomme
    montantRembourse
    cnt
    secured
    factureUrl
    createdAt
    updatedAt
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __useWalletsDistributionQuery__
 *
 * To run a query within a React component, call `useWalletsDistributionQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsDistributionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsDistributionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWalletsDistributionQuery(baseOptions: Apollo.QueryHookOptions<WalletsDistributionQuery, WalletsDistributionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsDistributionQuery, WalletsDistributionQueryVariables>(WalletsDistributionDocument, options);
      }
export function useWalletsDistributionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsDistributionQuery, WalletsDistributionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsDistributionQuery, WalletsDistributionQueryVariables>(WalletsDistributionDocument, options);
        }
export type WalletsDistributionQueryHookResult = ReturnType<typeof useWalletsDistributionQuery>;
export type WalletsDistributionLazyQueryHookResult = ReturnType<typeof useWalletsDistributionLazyQuery>;
export type WalletsDistributionQueryResult = Apollo.QueryResult<WalletsDistributionQuery, WalletsDistributionQueryVariables>;
export const WalletsDistributionMotifDocument = gql`
    query walletsDistributionMotif($input: IdentifiedInput!) {
  walletsDistributionMotif(input: $input) {
    id
    typeDistribuable
    nom
    fontColor
    cover {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    duree
    dureeMax
    conditionsUtilisation
    produitPapierId
  }
}
    `;

/**
 * __useWalletsDistributionMotifQuery__
 *
 * To run a query within a React component, call `useWalletsDistributionMotifQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsDistributionMotifQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsDistributionMotifQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWalletsDistributionMotifQuery(baseOptions: Apollo.QueryHookOptions<WalletsDistributionMotifQuery, WalletsDistributionMotifQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsDistributionMotifQuery, WalletsDistributionMotifQueryVariables>(WalletsDistributionMotifDocument, options);
      }
export function useWalletsDistributionMotifLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsDistributionMotifQuery, WalletsDistributionMotifQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsDistributionMotifQuery, WalletsDistributionMotifQueryVariables>(WalletsDistributionMotifDocument, options);
        }
export type WalletsDistributionMotifQueryHookResult = ReturnType<typeof useWalletsDistributionMotifQuery>;
export type WalletsDistributionMotifLazyQueryHookResult = ReturnType<typeof useWalletsDistributionMotifLazyQuery>;
export type WalletsDistributionMotifQueryResult = Apollo.QueryResult<WalletsDistributionMotifQuery, WalletsDistributionMotifQueryVariables>;
export const SimulateWalletsDistributionDocument = gql`
    query simulateWalletsDistribution($input: WalletsDistributionInput!) {
  simulateWalletsDistribution(input: $input) {
    solde
    montantDistribution
    montantRemise
    nbrUsers
  }
}
    `;

/**
 * __useSimulateWalletsDistributionQuery__
 *
 * To run a query within a React component, call `useSimulateWalletsDistributionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSimulateWalletsDistributionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSimulateWalletsDistributionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSimulateWalletsDistributionQuery(baseOptions: Apollo.QueryHookOptions<SimulateWalletsDistributionQuery, SimulateWalletsDistributionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SimulateWalletsDistributionQuery, SimulateWalletsDistributionQueryVariables>(SimulateWalletsDistributionDocument, options);
      }
export function useSimulateWalletsDistributionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SimulateWalletsDistributionQuery, SimulateWalletsDistributionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SimulateWalletsDistributionQuery, SimulateWalletsDistributionQueryVariables>(SimulateWalletsDistributionDocument, options);
        }
export type SimulateWalletsDistributionQueryHookResult = ReturnType<typeof useSimulateWalletsDistributionQuery>;
export type SimulateWalletsDistributionLazyQueryHookResult = ReturnType<typeof useSimulateWalletsDistributionLazyQuery>;
export type SimulateWalletsDistributionQueryResult = Apollo.QueryResult<SimulateWalletsDistributionQuery, SimulateWalletsDistributionQueryVariables>;
export const WalletsDistributionSimulationDocument = gql`
    query walletsDistributionSimulation($input: WalletsDistributionSimulationInput!) {
  walletsDistributionSimulation(input: $input) {
    solde
    montantDistribution
    montantRemise
    nbrUsers
  }
}
    `;

/**
 * __useWalletsDistributionSimulationQuery__
 *
 * To run a query within a React component, call `useWalletsDistributionSimulationQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsDistributionSimulationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsDistributionSimulationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWalletsDistributionSimulationQuery(baseOptions: Apollo.QueryHookOptions<WalletsDistributionSimulationQuery, WalletsDistributionSimulationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsDistributionSimulationQuery, WalletsDistributionSimulationQueryVariables>(WalletsDistributionSimulationDocument, options);
      }
export function useWalletsDistributionSimulationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsDistributionSimulationQuery, WalletsDistributionSimulationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsDistributionSimulationQuery, WalletsDistributionSimulationQueryVariables>(WalletsDistributionSimulationDocument, options);
        }
export type WalletsDistributionSimulationQueryHookResult = ReturnType<typeof useWalletsDistributionSimulationQuery>;
export type WalletsDistributionSimulationLazyQueryHookResult = ReturnType<typeof useWalletsDistributionSimulationLazyQuery>;
export type WalletsDistributionSimulationQueryResult = Apollo.QueryResult<WalletsDistributionSimulationQuery, WalletsDistributionSimulationQueryVariables>;
export const WalletsOrganismeWalletDocument = gql`
    query walletsOrganismeWallet($walletsOrganismeWallet_mouvements_pagination: OffsetPaginationInput) {
  walletsOrganismeWallet {
    id
    nom
    solde
    montantAttente
    iban
    bic
    culture {
      solde
      montantAttente
      provisionningStats {
        since
        count
        montant
        montantRemise
      }
      distributionStats {
        since
        count
        solde
        montant
        montantRembourse
        walletCount
      }
    }
    ecc {
      solde
      montantAttente
      provisionningStats {
        since
        count
        montant
        montantRemise
      }
      distributionStats {
        since
        count
        solde
        montant
        montantRembourse
        walletCount
      }
    }
    sub {
      solde
      montantAttente
      provisionningStats {
        since
        count
        montant
        montantRemise
      }
      distributionStats {
        since
        count
        solde
        montant
        montantRembourse
        walletCount
      }
    }
    capabilities {
      read
      create
      update
      delete
    }
    mouvements(pagination: $walletsOrganismeWallet_mouvements_pagination) {
      data {
        id
        nom
        montant
        solde
        dateMvt
      }
      pagination {
        count
        offset
        firstItem
        lastItem
        limit
        total
      }
    }
  }
}
    `;

/**
 * __useWalletsOrganismeWalletQuery__
 *
 * To run a query within a React component, call `useWalletsOrganismeWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsOrganismeWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsOrganismeWalletQuery({
 *   variables: {
 *      walletsOrganismeWallet_mouvements_pagination: // value for 'walletsOrganismeWallet_mouvements_pagination'
 *   },
 * });
 */
export function useWalletsOrganismeWalletQuery(baseOptions?: Apollo.QueryHookOptions<WalletsOrganismeWalletQuery, WalletsOrganismeWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsOrganismeWalletQuery, WalletsOrganismeWalletQueryVariables>(WalletsOrganismeWalletDocument, options);
      }
export function useWalletsOrganismeWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsOrganismeWalletQuery, WalletsOrganismeWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsOrganismeWalletQuery, WalletsOrganismeWalletQueryVariables>(WalletsOrganismeWalletDocument, options);
        }
export type WalletsOrganismeWalletQueryHookResult = ReturnType<typeof useWalletsOrganismeWalletQuery>;
export type WalletsOrganismeWalletLazyQueryHookResult = ReturnType<typeof useWalletsOrganismeWalletLazyQuery>;
export type WalletsOrganismeWalletQueryResult = Apollo.QueryResult<WalletsOrganismeWalletQuery, WalletsOrganismeWalletQueryVariables>;
export const WalletsProvisionningsDocument = gql`
    query walletsProvisionnings($walletsProvisionnings_data_organismeWallet_mouvements_pagination: OffsetPaginationInput, $input: WalletsProvisionningsInput, $pagination: OffsetPaginationInput) {
  walletsProvisionnings(input: $input, pagination: $pagination) {
    data {
      id
      nom
      montant
      montantAttente
      montantRemise
      typeProvisionning
      typePaiement
      statut
      dateReception
      factureUrl
      createdAt
      updatedAt
      organismeWallet {
        id
        nom
        solde
        montantAttente
        iban
        bic
        culture {
          solde
          montantAttente
          provisionningStats {
            since
            count
            montant
            montantRemise
          }
          distributionStats {
            since
            count
            solde
            montant
            montantRembourse
            walletCount
          }
        }
        ecc {
          solde
          montantAttente
          provisionningStats {
            since
            count
            montant
            montantRemise
          }
          distributionStats {
            since
            count
            solde
            montant
            montantRembourse
            walletCount
          }
        }
        sub {
          solde
          montantAttente
          provisionningStats {
            since
            count
            montant
            montantRemise
          }
          distributionStats {
            since
            count
            solde
            montant
            montantRembourse
            walletCount
          }
        }
        capabilities {
          read
          create
          update
          delete
        }
        mouvements(
          pagination: $walletsProvisionnings_data_organismeWallet_mouvements_pagination
        ) {
          data {
            id
            nom
            montant
            solde
            dateMvt
          }
          pagination {
            count
            offset
            firstItem
            lastItem
            limit
            total
          }
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useWalletsProvisionningsQuery__
 *
 * To run a query within a React component, call `useWalletsProvisionningsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsProvisionningsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsProvisionningsQuery({
 *   variables: {
 *      walletsProvisionnings_data_organismeWallet_mouvements_pagination: // value for 'walletsProvisionnings_data_organismeWallet_mouvements_pagination'
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useWalletsProvisionningsQuery(baseOptions?: Apollo.QueryHookOptions<WalletsProvisionningsQuery, WalletsProvisionningsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsProvisionningsQuery, WalletsProvisionningsQueryVariables>(WalletsProvisionningsDocument, options);
      }
export function useWalletsProvisionningsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsProvisionningsQuery, WalletsProvisionningsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsProvisionningsQuery, WalletsProvisionningsQueryVariables>(WalletsProvisionningsDocument, options);
        }
export type WalletsProvisionningsQueryHookResult = ReturnType<typeof useWalletsProvisionningsQuery>;
export type WalletsProvisionningsLazyQueryHookResult = ReturnType<typeof useWalletsProvisionningsLazyQuery>;
export type WalletsProvisionningsQueryResult = Apollo.QueryResult<WalletsProvisionningsQuery, WalletsProvisionningsQueryVariables>;
export const WalletsProvisionningDocument = gql`
    query walletsProvisionning($walletsProvisionning_organismeWallet_mouvements_pagination: OffsetPaginationInput, $input: IdentifiedInput!) {
  walletsProvisionning(input: $input) {
    id
    nom
    montant
    montantAttente
    montantRemise
    typeProvisionning
    typePaiement
    statut
    dateReception
    factureUrl
    createdAt
    updatedAt
    organismeWallet {
      id
      nom
      solde
      montantAttente
      iban
      bic
      culture {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      ecc {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      sub {
        solde
        montantAttente
        provisionningStats {
          since
          count
          montant
          montantRemise
        }
        distributionStats {
          since
          count
          solde
          montant
          montantRembourse
          walletCount
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
      mouvements(
        pagination: $walletsProvisionning_organismeWallet_mouvements_pagination
      ) {
        data {
          id
          nom
          montant
          solde
          dateMvt
        }
        pagination {
          count
          offset
          firstItem
          lastItem
          limit
          total
        }
      }
    }
    capabilities {
      read
      create
      update
      delete
    }
  }
}
    `;

/**
 * __useWalletsProvisionningQuery__
 *
 * To run a query within a React component, call `useWalletsProvisionningQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsProvisionningQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsProvisionningQuery({
 *   variables: {
 *      walletsProvisionning_organismeWallet_mouvements_pagination: // value for 'walletsProvisionning_organismeWallet_mouvements_pagination'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWalletsProvisionningQuery(baseOptions: Apollo.QueryHookOptions<WalletsProvisionningQuery, WalletsProvisionningQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsProvisionningQuery, WalletsProvisionningQueryVariables>(WalletsProvisionningDocument, options);
      }
export function useWalletsProvisionningLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsProvisionningQuery, WalletsProvisionningQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsProvisionningQuery, WalletsProvisionningQueryVariables>(WalletsProvisionningDocument, options);
        }
export type WalletsProvisionningQueryHookResult = ReturnType<typeof useWalletsProvisionningQuery>;
export type WalletsProvisionningLazyQueryHookResult = ReturnType<typeof useWalletsProvisionningLazyQuery>;
export type WalletsProvisionningQueryResult = Apollo.QueryResult<WalletsProvisionningQuery, WalletsProvisionningQueryVariables>;
export const WalletsDistributionUserWalletsDocument = gql`
    query walletsDistributionUserWallets($input: IdentifiedInput!, $pagination: OffsetPaginationInput) {
  walletsDistributionUserWallets(input: $input, pagination: $pagination) {
    data {
      id
      nom
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
      distributionId
      montantInitial
      solde
      used
      usedAt
      nbrRelances
      actif
      statut
      pourcentageConsomme
      distribution {
        id
        nom
        typeDistribution
        motifId
        motif {
          id
          typeDistribuable
          nom
          fontColor
          cover {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          duree
          dureeMax
          conditionsUtilisation
          produitPapierId
        }
        distribuables {
          ... on WalletsDistributionReductionRule {
            typeDistribuable
            subventionRule {
              ... on WalletsDistributionSubventionRulePourcentage {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleFixe {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleCagnotte {
                typeSubventionRule
              }
            }
          }
          ... on WalletsDistributionRemboursementRule {
            typeDistribuable
            subventionRule {
              ... on WalletsDistributionSubventionRulePourcentage {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleFixe {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleCagnotte {
                typeSubventionRule
              }
            }
          }
          ... on WalletsDistributionMotif {
            id
            typeDistribuable
            nom
            fontColor
            duree
            dureeMax
            conditionsUtilisation
            produitPapierId
          }
          ... on WalletsDistributionCarteConfig {
            typeDistribuable
          }
        }
        dateDebut
        dateFin
        conditionsUtilisation
      }
      capabilities {
        share
        use
      }
      vedetteEmplacement {
        emplacementType
        emplacementId
      }
      espace
      quota {
        id
        quotaRule {
          quotaType
          quota
          quotaRenouvelable
        }
        quotaConsomme
        dateDebut
        dateFin
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useWalletsDistributionUserWalletsQuery__
 *
 * To run a query within a React component, call `useWalletsDistributionUserWalletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsDistributionUserWalletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsDistributionUserWalletsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useWalletsDistributionUserWalletsQuery(baseOptions: Apollo.QueryHookOptions<WalletsDistributionUserWalletsQuery, WalletsDistributionUserWalletsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsDistributionUserWalletsQuery, WalletsDistributionUserWalletsQueryVariables>(WalletsDistributionUserWalletsDocument, options);
      }
export function useWalletsDistributionUserWalletsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsDistributionUserWalletsQuery, WalletsDistributionUserWalletsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsDistributionUserWalletsQuery, WalletsDistributionUserWalletsQueryVariables>(WalletsDistributionUserWalletsDocument, options);
        }
export type WalletsDistributionUserWalletsQueryHookResult = ReturnType<typeof useWalletsDistributionUserWalletsQuery>;
export type WalletsDistributionUserWalletsLazyQueryHookResult = ReturnType<typeof useWalletsDistributionUserWalletsLazyQuery>;
export type WalletsDistributionUserWalletsQueryResult = Apollo.QueryResult<WalletsDistributionUserWalletsQuery, WalletsDistributionUserWalletsQueryVariables>;
export const WalletsUserWalletsDocument = gql`
    query walletsUserWallets($input: WalletsUserWalletsInput, $pagination: OffsetPaginationInput) {
  walletsUserWallets(input: $input, pagination: $pagination) {
    data {
      id
      nom
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
      distributionId
      montantInitial
      solde
      used
      usedAt
      nbrRelances
      actif
      statut
      pourcentageConsomme
      distribution {
        id
        nom
        typeDistribution
        motifId
        motif {
          id
          typeDistribuable
          nom
          fontColor
          cover {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          duree
          dureeMax
          conditionsUtilisation
          produitPapierId
        }
        distribuables {
          ... on WalletsDistributionReductionRule {
            typeDistribuable
            subventionRule {
              ... on WalletsDistributionSubventionRulePourcentage {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleFixe {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleCagnotte {
                typeSubventionRule
              }
            }
          }
          ... on WalletsDistributionRemboursementRule {
            typeDistribuable
            subventionRule {
              ... on WalletsDistributionSubventionRulePourcentage {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleFixe {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleCagnotte {
                typeSubventionRule
              }
            }
          }
          ... on WalletsDistributionMotif {
            id
            typeDistribuable
            nom
            fontColor
            duree
            dureeMax
            conditionsUtilisation
            produitPapierId
          }
          ... on WalletsDistributionCarteConfig {
            typeDistribuable
          }
        }
        dateDebut
        dateFin
        conditionsUtilisation
      }
      capabilities {
        share
        use
      }
      vedetteEmplacement {
        emplacementType
        emplacementId
      }
      espace
      quota {
        id
        quotaRule {
          quotaType
          quota
          quotaRenouvelable
        }
        quotaConsomme
        dateDebut
        dateFin
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useWalletsUserWalletsQuery__
 *
 * To run a query within a React component, call `useWalletsUserWalletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsUserWalletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsUserWalletsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useWalletsUserWalletsQuery(baseOptions?: Apollo.QueryHookOptions<WalletsUserWalletsQuery, WalletsUserWalletsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsUserWalletsQuery, WalletsUserWalletsQueryVariables>(WalletsUserWalletsDocument, options);
      }
export function useWalletsUserWalletsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsUserWalletsQuery, WalletsUserWalletsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsUserWalletsQuery, WalletsUserWalletsQueryVariables>(WalletsUserWalletsDocument, options);
        }
export type WalletsUserWalletsQueryHookResult = ReturnType<typeof useWalletsUserWalletsQuery>;
export type WalletsUserWalletsLazyQueryHookResult = ReturnType<typeof useWalletsUserWalletsLazyQuery>;
export type WalletsUserWalletsQueryResult = Apollo.QueryResult<WalletsUserWalletsQuery, WalletsUserWalletsQueryVariables>;
export const WalletsAllUserWalletsDocument = gql`
    query walletsAllUserWallets($input: WalletsAllUserWalletsInput, $pagination: OffsetPaginationInput) {
  walletsAllUserWallets(input: $input, pagination: $pagination) {
    data {
      id
      nom
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
      }
      distributionId
      montantInitial
      solde
      used
      usedAt
      nbrRelances
      actif
      statut
      pourcentageConsomme
      distribution {
        id
        nom
        typeDistribution
        motifId
        motif {
          id
          typeDistribuable
          nom
          fontColor
          cover {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          duree
          dureeMax
          conditionsUtilisation
          produitPapierId
        }
        distribuables {
          ... on WalletsDistributionReductionRule {
            typeDistribuable
            subventionRule {
              ... on WalletsDistributionSubventionRulePourcentage {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleFixe {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleCagnotte {
                typeSubventionRule
              }
            }
          }
          ... on WalletsDistributionRemboursementRule {
            typeDistribuable
            subventionRule {
              ... on WalletsDistributionSubventionRulePourcentage {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleFixe {
                typeSubventionRule
                value
              }
              ... on WalletsDistributionSubventionRuleCagnotte {
                typeSubventionRule
              }
            }
          }
          ... on WalletsDistributionMotif {
            id
            typeDistribuable
            nom
            fontColor
            duree
            dureeMax
            conditionsUtilisation
            produitPapierId
          }
          ... on WalletsDistributionCarteConfig {
            typeDistribuable
          }
        }
        dateDebut
        dateFin
        conditionsUtilisation
      }
      capabilities {
        share
        use
      }
      vedetteEmplacement {
        emplacementType
        emplacementId
      }
      espace
      quota {
        id
        quotaRule {
          quotaType
          quota
          quotaRenouvelable
        }
        quotaConsomme
        dateDebut
        dateFin
      }
    }
    pagination {
      count
      offset
      firstItem
      lastItem
      limit
      total
    }
  }
}
    `;

/**
 * __useWalletsAllUserWalletsQuery__
 *
 * To run a query within a React component, call `useWalletsAllUserWalletsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsAllUserWalletsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsAllUserWalletsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useWalletsAllUserWalletsQuery(baseOptions?: Apollo.QueryHookOptions<WalletsAllUserWalletsQuery, WalletsAllUserWalletsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsAllUserWalletsQuery, WalletsAllUserWalletsQueryVariables>(WalletsAllUserWalletsDocument, options);
      }
export function useWalletsAllUserWalletsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsAllUserWalletsQuery, WalletsAllUserWalletsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsAllUserWalletsQuery, WalletsAllUserWalletsQueryVariables>(WalletsAllUserWalletsDocument, options);
        }
export type WalletsAllUserWalletsQueryHookResult = ReturnType<typeof useWalletsAllUserWalletsQuery>;
export type WalletsAllUserWalletsLazyQueryHookResult = ReturnType<typeof useWalletsAllUserWalletsLazyQuery>;
export type WalletsAllUserWalletsQueryResult = Apollo.QueryResult<WalletsAllUserWalletsQuery, WalletsAllUserWalletsQueryVariables>;
export const WalletsUserWalletDocument = gql`
    query walletsUserWallet($input: IdentifiedInput!) {
  walletsUserWallet(input: $input) {
    id
    nom
    user {
      id
      displayName
      nom
      email
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    distributionId
    montantInitial
    solde
    used
    usedAt
    nbrRelances
    actif
    statut
    pourcentageConsomme
    distribution {
      id
      nom
      typeDistribution
      motifId
      motif {
        id
        typeDistribuable
        nom
        fontColor
        cover {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        duree
        dureeMax
        conditionsUtilisation
        produitPapierId
      }
      distribuables {
        ... on WalletsDistributionReductionRule {
          typeDistribuable
          subventionRule {
            ... on WalletsDistributionSubventionRulePourcentage {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleFixe {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleCagnotte {
              typeSubventionRule
            }
          }
          quotaRule {
            quotaType
            quota
            quotaRenouvelable
          }
          subventionnables {
            subventionnableType
            subventionnableId
            subventionnableNom
          }
          catalogue {
            id
            nom
            univers
            accroche
          }
        }
        ... on WalletsDistributionRemboursementRule {
          typeDistribuable
          subventionRule {
            ... on WalletsDistributionSubventionRulePourcentage {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleFixe {
              typeSubventionRule
              value
            }
            ... on WalletsDistributionSubventionRuleCagnotte {
              typeSubventionRule
            }
          }
        }
        ... on WalletsDistributionMotif {
          id
          typeDistribuable
          nom
          fontColor
          cover {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          duree
          dureeMax
          conditionsUtilisation
          produitPapierId
        }
        ... on WalletsDistributionCarteConfig {
          typeDistribuable
        }
      }
      dateDebut
      dateFin
      conditionsUtilisation
    }
    capabilities {
      share
      use
    }
    vedetteEmplacement {
      emplacementType
      emplacementId
    }
    espace
    quota {
      id
      quotaRule {
        quotaType
        quota
        quotaRenouvelable
      }
      quotaConsomme
      dateDebut
      dateFin
    }
  }
}
    `;

/**
 * __useWalletsUserWalletQuery__
 *
 * To run a query within a React component, call `useWalletsUserWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletsUserWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsUserWalletQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWalletsUserWalletQuery(baseOptions: Apollo.QueryHookOptions<WalletsUserWalletQuery, WalletsUserWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletsUserWalletQuery, WalletsUserWalletQueryVariables>(WalletsUserWalletDocument, options);
      }
export function useWalletsUserWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletsUserWalletQuery, WalletsUserWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletsUserWalletQuery, WalletsUserWalletQueryVariables>(WalletsUserWalletDocument, options);
        }
export type WalletsUserWalletQueryHookResult = ReturnType<typeof useWalletsUserWalletQuery>;
export type WalletsUserWalletLazyQueryHookResult = ReturnType<typeof useWalletsUserWalletLazyQuery>;
export type WalletsUserWalletQueryResult = Apollo.QueryResult<WalletsUserWalletQuery, WalletsUserWalletQueryVariables>;
export const MisesEnAvantVedettesDocument = gql`
    query misesEnAvantVedettes($misesEnAvantVedettes_produit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $misesEnAvantVedettes_produit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: MisesEnAvantVedettesInput!) {
  misesEnAvantVedettes(input: $input) {
    id
    cta
    targetType
    targetId
    targetUrl
    target {
      type
      id
      url
    }
    dateDebut
    dateFin
    visuel {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    catalogue {
      id
      nom
      univers
      accroche
      visuel {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      categories {
        id
        catalogueId
        parentId
        level
        nom
      }
    }
    categorie {
      id
      catalogueId
      parentId
      level
      nom
    }
    produit {
      id
      nom
      type
      description
      aide
      coordonnees {
        nom
        adresse1
        adresse2
        zipcode
        city
        area
        country
        lat
        lng
        website
      }
      offre
      marketingTags {
        id
        name
        type
      }
      logo {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      cover {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      articles {
        id
        sku {
          source
          productId
          articleId
        }
        nom
        detail
        hasDescription
        description
        quantiteMin
        quantiteMax
        prixPublic
        prixTTC
        carteCadeau {
          valeurFacialeMin
          valeurFacialeMax
        }
        volatiles {
          name
          value
        }
      }
      searchArticlesFiltres(
        input: $misesEnAvantVedettes_produit_searchArticlesFiltres_input
      ) {
        type
        name
        label
      }
      searchArticles(input: $misesEnAvantVedettes_produit_searchArticles_input) {
        id
        sku {
          source
          productId
          articleId
        }
        nom
        detail
        hasDescription
        description
        quantiteMin
        quantiteMax
        prixPublic
        prixTTC
        carteCadeau {
          valeurFacialeMin
          valeurFacialeMax
        }
        volatiles {
          name
          value
        }
      }
      offrePartenaire {
        redirectUrl
      }
    }
  }
}
    `;

/**
 * __useMisesEnAvantVedettesQuery__
 *
 * To run a query within a React component, call `useMisesEnAvantVedettesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMisesEnAvantVedettesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMisesEnAvantVedettesQuery({
 *   variables: {
 *      misesEnAvantVedettes_produit_searchArticlesFiltres_input: // value for 'misesEnAvantVedettes_produit_searchArticlesFiltres_input'
 *      misesEnAvantVedettes_produit_searchArticles_input: // value for 'misesEnAvantVedettes_produit_searchArticles_input'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMisesEnAvantVedettesQuery(baseOptions: Apollo.QueryHookOptions<MisesEnAvantVedettesQuery, MisesEnAvantVedettesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MisesEnAvantVedettesQuery, MisesEnAvantVedettesQueryVariables>(MisesEnAvantVedettesDocument, options);
      }
export function useMisesEnAvantVedettesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MisesEnAvantVedettesQuery, MisesEnAvantVedettesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MisesEnAvantVedettesQuery, MisesEnAvantVedettesQueryVariables>(MisesEnAvantVedettesDocument, options);
        }
export type MisesEnAvantVedettesQueryHookResult = ReturnType<typeof useMisesEnAvantVedettesQuery>;
export type MisesEnAvantVedettesLazyQueryHookResult = ReturnType<typeof useMisesEnAvantVedettesLazyQuery>;
export type MisesEnAvantVedettesQueryResult = Apollo.QueryResult<MisesEnAvantVedettesQuery, MisesEnAvantVedettesQueryVariables>;
export const MisesEnAvantVedetteDocument = gql`
    query misesEnAvantVedette($misesEnAvantVedette_produit_searchArticlesFiltres_input: BonsplansProduitSearchArticlesInput, $misesEnAvantVedette_produit_searchArticles_input: BonsplansProduitSearchArticlesInput!, $input: IdentifiedInput!) {
  misesEnAvantVedette(input: $input) {
    id
    cta
    targetType
    targetId
    targetUrl
    target {
      type
      id
      url
    }
    dateDebut
    dateFin
    visuel {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      createdAt
    }
    catalogue {
      id
      nom
      univers
      accroche
      visuel {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      categories {
        id
        catalogueId
        parentId
        level
        nom
      }
    }
    categorie {
      id
      catalogueId
      parentId
      level
      nom
    }
    produit {
      id
      nom
      type
      description
      aide
      coordonnees {
        nom
        adresse1
        adresse2
        zipcode
        city
        area
        country
        lat
        lng
        website
      }
      offre
      marketingTags {
        id
        name
        type
      }
      logo {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      cover {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
        createdAt
      }
      articles {
        id
        sku {
          source
          productId
          articleId
        }
        nom
        detail
        hasDescription
        description
        quantiteMin
        quantiteMax
        prixPublic
        prixTTC
        carteCadeau {
          valeurFacialeMin
          valeurFacialeMax
        }
        volatiles {
          name
          value
        }
      }
      searchArticlesFiltres(
        input: $misesEnAvantVedette_produit_searchArticlesFiltres_input
      ) {
        type
        name
        label
      }
      searchArticles(input: $misesEnAvantVedette_produit_searchArticles_input) {
        id
        sku {
          source
          productId
          articleId
        }
        nom
        detail
        hasDescription
        description
        quantiteMin
        quantiteMax
        prixPublic
        prixTTC
        carteCadeau {
          valeurFacialeMin
          valeurFacialeMax
        }
        volatiles {
          name
          value
        }
      }
      offrePartenaire {
        redirectUrl
      }
    }
  }
}
    `;

/**
 * __useMisesEnAvantVedetteQuery__
 *
 * To run a query within a React component, call `useMisesEnAvantVedetteQuery` and pass it any options that fit your needs.
 * When your component renders, `useMisesEnAvantVedetteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMisesEnAvantVedetteQuery({
 *   variables: {
 *      misesEnAvantVedette_produit_searchArticlesFiltres_input: // value for 'misesEnAvantVedette_produit_searchArticlesFiltres_input'
 *      misesEnAvantVedette_produit_searchArticles_input: // value for 'misesEnAvantVedette_produit_searchArticles_input'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMisesEnAvantVedetteQuery(baseOptions: Apollo.QueryHookOptions<MisesEnAvantVedetteQuery, MisesEnAvantVedetteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MisesEnAvantVedetteQuery, MisesEnAvantVedetteQueryVariables>(MisesEnAvantVedetteDocument, options);
      }
export function useMisesEnAvantVedetteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MisesEnAvantVedetteQuery, MisesEnAvantVedetteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MisesEnAvantVedetteQuery, MisesEnAvantVedetteQueryVariables>(MisesEnAvantVedetteDocument, options);
        }
export type MisesEnAvantVedetteQueryHookResult = ReturnType<typeof useMisesEnAvantVedetteQuery>;
export type MisesEnAvantVedetteLazyQueryHookResult = ReturnType<typeof useMisesEnAvantVedetteLazyQuery>;
export type MisesEnAvantVedetteQueryResult = Apollo.QueryResult<MisesEnAvantVedetteQuery, MisesEnAvantVedetteQueryVariables>;
export const WorkflowChangedDocument = gql`
    subscription workflowChanged($id: ID!) {
  workflowChanged(id: $id) {
    id
    type
    steps {
      action
      done
    }
  }
}
    `;

/**
 * __useWorkflowChangedSubscription__
 *
 * To run a query within a React component, call `useWorkflowChangedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWorkflowChangedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkflowChangedSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWorkflowChangedSubscription(baseOptions: Apollo.SubscriptionHookOptions<WorkflowChangedSubscription, WorkflowChangedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WorkflowChangedSubscription, WorkflowChangedSubscriptionVariables>(WorkflowChangedDocument, options);
      }
export type WorkflowChangedSubscriptionHookResult = ReturnType<typeof useWorkflowChangedSubscription>;
export type WorkflowChangedSubscriptionResult = Apollo.SubscriptionResult<WorkflowChangedSubscription>;
export const PostPublishedDocument = gql`
    subscription postPublished($categoryId: ID) {
  postPublished(categoryId: $categoryId) {
    id
    author {
      id
      displayName
      avatar {
        id
        name
        mimetype
        size
        url
        resolution
        resized {
          id
          name
          mimetype
          size
          url
          resolution
          resized {
            id
            name
            mimetype
            size
            url
            resolution
            createdAt
          }
          createdAt
        }
        createdAt
      }
    }
    authorV2 {
      ... on MinimalistOrganisme {
        id
        displayName
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      ... on MinimalistUser {
        id
        displayName
        nom
        email
      }
    }
    categoryId
    category {
      id
      label
      capabilities {
        read
        create
        update
        delete
      }
    }
    group {
      id
      nom
      code
      capabilities {
        read
        create
        update
        delete
      }
    }
    title
    textContent
    content {
      id
      type
    }
    interactions {
      comment
      like
      love
      praise
      surprised
      thinking
    }
    reactions {
      id
      type
      user {
        id
        displayName
        nom
        email
        avatar {
          id
          name
          mimetype
          size
          url
          resolution
          createdAt
        }
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    comments {
      id
      content
      user {
        id
        displayName
        nom
        email
      }
      createdAt
      capabilities {
        read
        create
        update
        delete
        report
      }
    }
    userReaction {
      id
      type
      user {
        id
        displayName
        nom
        email
      }
      capabilities {
        read
        create
        update
        delete
      }
    }
    images {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    image {
      id
      name
      mimetype
      size
      url
      resolution
      resized {
        id
        name
        mimetype
        size
        url
        resolution
        createdAt
      }
      createdAt
    }
    publish
    status
    publishedAt
    capabilities {
      read
      create
      update
      delete
      commentV2 {
        read
        create
        update
        delete
        report
      }
      comment
      reaction {
        read
        create
        update
        delete
      }
      content {
        actualite {
          create
        }
        album {
          create
        }
        event {
          create
        }
        sondage {
          create
          respond
        }
        pvReunion {
          create
        }
      }
    }
  }
}
    `;

/**
 * __usePostPublishedSubscription__
 *
 * To run a query within a React component, call `usePostPublishedSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostPublishedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostPublishedSubscription({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function usePostPublishedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<PostPublishedSubscription, PostPublishedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<PostPublishedSubscription, PostPublishedSubscriptionVariables>(PostPublishedDocument, options);
      }
export type PostPublishedSubscriptionHookResult = ReturnType<typeof usePostPublishedSubscription>;
export type PostPublishedSubscriptionResult = Apollo.SubscriptionResult<PostPublishedSubscription>;
export const PostInteractionsDocument = gql`
    subscription postInteractions {
  postInteractions {
    postId
    interactions {
      comment
      like
      love
      praise
      surprised
      thinking
    }
  }
}
    `;

/**
 * __usePostInteractionsSubscription__
 *
 * To run a query within a React component, call `usePostInteractionsSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostInteractionsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostInteractionsSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePostInteractionsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<PostInteractionsSubscription, PostInteractionsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<PostInteractionsSubscription, PostInteractionsSubscriptionVariables>(PostInteractionsDocument, options);
      }
export type PostInteractionsSubscriptionHookResult = ReturnType<typeof usePostInteractionsSubscription>;
export type PostInteractionsSubscriptionResult = Apollo.SubscriptionResult<PostInteractionsSubscription>;
export const WalletsOrganismeWalletMvtDocument = gql`
    subscription walletsOrganismeWalletMvt {
  walletsOrganismeWalletMvt {
    id
    nom
    montant
    solde
    dateMvt
  }
}
    `;

/**
 * __useWalletsOrganismeWalletMvtSubscription__
 *
 * To run a query within a React component, call `useWalletsOrganismeWalletMvtSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWalletsOrganismeWalletMvtSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsOrganismeWalletMvtSubscription({
 *   variables: {
 *   },
 * });
 */
export function useWalletsOrganismeWalletMvtSubscription(baseOptions?: Apollo.SubscriptionHookOptions<WalletsOrganismeWalletMvtSubscription, WalletsOrganismeWalletMvtSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WalletsOrganismeWalletMvtSubscription, WalletsOrganismeWalletMvtSubscriptionVariables>(WalletsOrganismeWalletMvtDocument, options);
      }
export type WalletsOrganismeWalletMvtSubscriptionHookResult = ReturnType<typeof useWalletsOrganismeWalletMvtSubscription>;
export type WalletsOrganismeWalletMvtSubscriptionResult = Apollo.SubscriptionResult<WalletsOrganismeWalletMvtSubscription>;
export const WalletsUserWalletMvtDocument = gql`
    subscription walletsUserWalletMvt {
  walletsUserWalletMvt {
    id
    nom
    montant
    solde
    walletId
    dateMvt
  }
}
    `;

/**
 * __useWalletsUserWalletMvtSubscription__
 *
 * To run a query within a React component, call `useWalletsUserWalletMvtSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWalletsUserWalletMvtSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletsUserWalletMvtSubscription({
 *   variables: {
 *   },
 * });
 */
export function useWalletsUserWalletMvtSubscription(baseOptions?: Apollo.SubscriptionHookOptions<WalletsUserWalletMvtSubscription, WalletsUserWalletMvtSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WalletsUserWalletMvtSubscription, WalletsUserWalletMvtSubscriptionVariables>(WalletsUserWalletMvtDocument, options);
      }
export type WalletsUserWalletMvtSubscriptionHookResult = ReturnType<typeof useWalletsUserWalletMvtSubscription>;
export type WalletsUserWalletMvtSubscriptionResult = Apollo.SubscriptionResult<WalletsUserWalletMvtSubscription>;