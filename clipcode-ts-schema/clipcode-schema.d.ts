/** Used at the top-level node to indicate the context for the JSON-LD objects used. The context provided in this type is compatible with the keys and URLs in the rest of this generated file. */
export type WithContext<T extends Thing> = T & {
    "@context": {
        "schema": "https://schema.org";
        "coremo": "https://clipcode.org/base/schema/coremo";
        "catmo": "https://clipcode.org/base/schema/catmo";
        "dstoremo": "https://clipcode.org/base/schema/dstoremo";
        "dirmo": "https://clipcode.org/base/schema/dirmo";
        "polmo": "https://clipcode.org/base/schema/polmo";
        "usermo": "https://clipcode.org/base/schema/usermo";
        "fomo": "https://clipcode.org/base/schema/fomo";
        "como": "https://clipcode.org/base/schema/como";
        "appmo": "https://clipcode.org/base/schema/appmo";
        "stylemo": "https://clipcode.org/base/schema/stylemo";
        "renmo": "https://clipcode.org/base/schema/renmo";
        "pagemo": "https://clipcode.org/base/schema/pagemo";
        "docmo": "https://clipcode.org/base/schema/docmo";
        "repmo": "https://clipcode.org/base/schema/repmo";
        "camo": "https://clipcode.org/base/schema/camo";
    };
};
export interface Graph {
    "@context": {
        "schema": "https://schema.org";
        "coremo": "https://clipcode.org/base/schema/coremo";
        "catmo": "https://clipcode.org/base/schema/catmo";
        "dstoremo": "https://clipcode.org/base/schema/dstoremo";
        "dirmo": "https://clipcode.org/base/schema/dirmo";
        "polmo": "https://clipcode.org/base/schema/polmo";
        "usermo": "https://clipcode.org/base/schema/usermo";
        "fomo": "https://clipcode.org/base/schema/fomo";
        "como": "https://clipcode.org/base/schema/como";
        "appmo": "https://clipcode.org/base/schema/appmo";
        "stylemo": "https://clipcode.org/base/schema/stylemo";
        "renmo": "https://clipcode.org/base/schema/renmo";
        "pagemo": "https://clipcode.org/base/schema/pagemo";
        "docmo": "https://clipcode.org/base/schema/docmo";
        "repmo": "https://clipcode.org/base/schema/repmo";
        "camo": "https://clipcode.org/base/schema/camo";
    };
    "@graph": readonly Thing[];
}
type SchemaValue<T> = T | readonly T[];
type IdReference = {
    /** IRI identifying the canonical address of this object. */
    "@id": string;
};

/** Boolean: True or False. */
export type Boolean = "https://schema.org/False" | "schema:False" | "https://schema.org/True" | "schema:True" | boolean;

/** A date value in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
export type Date = string;

/** A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601). */
export type DateTime = string;

/**
 * Data type: Number.
 *
 * Usage guidelines:
 * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
 * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 */
export type Number = Float | Integer | number | `${number}`;

/** Data type: Text. */
export type Text = CssSelectorType | PronounceableText | URL | XPathType | string;

/** A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see {@link http://www.w3.org/TR/xmlschema-2/#time XML schema for details}). */
export type Time = string;

/** The basic data types such as Integers, Strings, etc. */
export type DataType = Boolean | Date | DateTime | Number | Text | Time;

interface _3DModelBase extends MediaObjectBase {
    /** Whether the 3DModel allows resizing. For example, room layout applications often do not allow 3DModel elements to be resized to reflect reality. */
    "schema:isResizable"?: SchemaValue<Boolean>;
}
interface _3DModelLeaf extends _3DModelBase {
    "@type": "schema:3DModel";
}
/** A 3D model represents some kind of 3D content, which may have {@link https://schema.org/encoding encoding}s in one or more {@link https://schema.org/MediaObject MediaObject}s. Many 3D formats are available (e.g. see {@link https://en.wikipedia.org/wiki/Category:3D_graphics_file_formats Wikipedia}); specific encoding formats can be represented using the {@link https://schema.org/encodingFormat encodingFormat} property applied to the relevant {@link https://schema.org/MediaObject MediaObject}. For the case of a single file published after Zip compression, the convention of appending '+zip' to the {@link https://schema.org/encodingFormat encodingFormat} can be used. Geospatial, AR/VR, artistic/animation, gaming, engineering and scientific content can all be represented using {@link https://schema.org/3DModel 3DModel}. */
export type _3DModel = _3DModelLeaf;

interface AboutPageLeaf extends WebPageBase {
    "@type": "schema:AboutPage";
}
/** Web page type: About page. */
export type AboutPage = AboutPageLeaf;

interface AbstractableBase extends ThingBase {
    /** Whether this Abstractable is abstract (if not specified, default to False). */
    "coremo:isAbstract"?: SchemaValue<Boolean>;
}
interface AbstractableLeaf extends AbstractableBase {
    "@type": "coremo:Abstractable";
}
/** A resource capable of being marked as abstract (so cannot be used directly; may be used as part of hierarhcy). */
export type Abstractable = AbstractableLeaf;

interface AcceptActionLeaf extends ActionBase {
    "@type": "schema:AcceptAction";
}
/**
 * The act of committing to/adopting an object.
 *
 * Related actions:
 * - {@link https://schema.org/RejectAction RejectAction}: The antonym of AcceptAction.
 */
export type AcceptAction = AcceptActionLeaf;

interface AccommodationBase extends PlaceBase {
    /** Category of an {@link https://schema.org/Accommodation Accommodation}, following real estate conventions e.g. RESO (see {@link https://ddwiki.reso.org/display/DDW17/PropertySubType+Field PropertySubType}, and {@link https://ddwiki.reso.org/display/DDW17/PropertyType+Field PropertyType} fields for suggested values). */
    "schema:accommodationCategory"?: SchemaValue<Text>;
    /** A floorplan of some {@link https://schema.org/Accommodation Accommodation}. */
    "schema:accommodationFloorPlan"?: SchemaValue<FloorPlan | IdReference>;
    /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
    "schema:amenityFeature"?: SchemaValue<LocationFeatureSpecification | IdReference>;
    /** The floor level for an {@link https://schema.org/Accommodation Accommodation} in a multi-storey building. Since counting systems {@link https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations vary internationally}, the local system should be used where possible. */
    "schema:floorLevel"?: SchemaValue<Text>;
    /** The size of the accommodation, e.g. in square meter or squarefoot. Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard */
    "schema:floorSize"?: SchemaValue<QuantitativeValue | IdReference>;
    /** Length of the lease for some {@link https://schema.org/Accommodation Accommodation}, either particular to some {@link https://schema.org/Offer Offer} or in some cases intrinsic to the property. */
    "schema:leaseLength"?: SchemaValue<Duration | QuantitativeValue | IdReference>;
    /** The total integer number of bathrooms in a some {@link https://schema.org/Accommodation Accommodation}, following real estate conventions as {@link https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field documented in RESO}: "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also {@link https://schema.org/numberOfRooms numberOfRooms}. */
    "schema:numberOfBathroomsTotal"?: SchemaValue<Integer>;
    /** The total integer number of bedrooms in a some {@link https://schema.org/Accommodation Accommodation}, {@link https://schema.org/ApartmentComplex ApartmentComplex} or {@link https://schema.org/FloorPlan FloorPlan}. */
    "schema:numberOfBedrooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** Number of full bathrooms - The total number of full and \u00BE bathrooms in an {@link https://schema.org/Accommodation Accommodation}. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field BathroomsFull field in RESO}. */
    "schema:numberOfFullBathrooms"?: SchemaValue<Number>;
    /** Number of partial bathrooms - The total number of half and \u00BC bathrooms in an {@link https://schema.org/Accommodation Accommodation}. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field BathroomsPartial field in RESO}. */
    "schema:numberOfPartialBathrooms"?: SchemaValue<Number>;
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "schema:numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** Indications regarding the permitted usage of the accommodation. */
    "schema:permittedUsage"?: SchemaValue<Text>;
    /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
    "schema:petsAllowed"?: SchemaValue<Boolean | Text>;
    /** A page providing information on how to book a tour of some {@link https://schema.org/Place Place}, such as an {@link https://schema.org/Accommodation Accommodation} or {@link https://schema.org/ApartmentComplex ApartmentComplex} in a real estate setting, as well as other kinds of tours as appropriate. */
    "schema:tourBookingPage"?: SchemaValue<URL | IdReference>;
    /** The year an {@link https://schema.org/Accommodation Accommodation} was constructed. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/YearBuilt+Field YearBuilt field in RESO}. */
    "schema:yearBuilt"?: SchemaValue<Number>;
}
interface AccommodationLeaf extends AccommodationBase {
    "@type": "schema:Accommodation";
}
/**
 * An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement. For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type Accommodation = AccommodationLeaf | Apartment | CampingPitch | House | Room | Suite | string;

interface AccountingServiceLeaf extends FinancialServiceBase {
    "@type": "schema:AccountingService";
}
/**
 * Accountancy business.
 *
 * As a {@link https://schema.org/LocalBusiness LocalBusiness} it can be described as a {@link https://schema.org/provider provider} of one or more {@link https://schema.org/Service Service}\(s).
 */
export type AccountingService = AccountingServiceLeaf | string;

interface AchieveActionLeaf extends ActionBase {
    "@type": "schema:AchieveAction";
}
/** The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process. */
export type AchieveAction = AchieveActionLeaf | LoseAction | TieAction | WinAction;

interface ActionBase extends ThingBase {
    /** Indicates the current disposition of the Action. */
    "schema:actionStatus"?: SchemaValue<ActionStatusType | IdReference>;
    /** The direct performer or driver of the action (animate or inanimate). e.g. _John_ wrote a book. */
    "schema:agent"?: SchemaValue<Organization | Person | IdReference>;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:endTime"?: SchemaValue<DateTime | Time>;
    /** For failed actions, more information on the cause of the failure. */
    "schema:error"?: SchemaValue<Thing | IdReference>;
    /** The object that helped the agent perform the action. e.g. John wrote a book with _a pen_. */
    "schema:instrument"?: SchemaValue<Thing | IdReference>;
    /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
    "schema:location"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference>;
    /** The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read _a book_. */
    "schema:object"?: SchemaValue<Thing | IdReference>;
    /** Other co-agents that participated in the action indirectly. e.g. John wrote a book with _Steve_. */
    "schema:participant"?: SchemaValue<Organization | Person | IdReference>;
    /** The result produced in the action. e.g. John wrote _a book_. */
    "schema:result"?: SchemaValue<Thing | IdReference>;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:startTime"?: SchemaValue<DateTime | Time>;
    /** Indicates a target EntryPoint for an Action. */
    "schema:target"?: SchemaValue<EntryPoint | IdReference>;
}
interface ActionLeaf extends ActionBase {
    "@type": "schema:Action";
}
/**
 * An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.
 *
 * See also {@link http://blog.schema.org/2014/04/announcing-schemaorg-actions.html blog post} and {@link https://schema.org/docs/actions.html Actions overview document}.
 */
export type Action = ActionLeaf | AchieveAction | AssessAction | ConsumeAction | ControlAction | CreateAction | FindAction | InteractAction | MoveAction | OrganizeAction | PlayAction | SearchAction | SeekToAction | SolveMathAction | TradeAction | TransferAction | UpdateAction;

interface ActionAccessSpecificationBase extends ThingBase {
    /** The end of the availability of the product or service included in the offer. */
    "schema:availabilityEnds"?: SchemaValue<Date | DateTime | Time>;
    /** The beginning of the availability of the product or service included in the offer. */
    "schema:availabilityStarts"?: SchemaValue<Date | DateTime | Time>;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "schema:category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
     *
     * See also {@link https://schema.org/ineligibleRegion ineligibleRegion}.
     */
    "schema:eligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
    /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
    "schema:expectsAcceptanceOf"?: SchemaValue<Offer | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "schema:ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
    /** Indicates if use of the media require a subscription (either paid or free). Allowed values are `true` or `false` (note that an earlier version had 'yes', 'no'). */
    "schema:requiresSubscription"?: SchemaValue<Boolean | MediaSubscription | IdReference>;
}
interface ActionAccessSpecificationLeaf extends ActionAccessSpecificationBase {
    "@type": "schema:ActionAccessSpecification";
}
/** A set of requirements that a must be fulfilled in order to perform an Action. */
export type ActionAccessSpecification = ActionAccessSpecificationLeaf;

interface ActionStatusTypeLeaf extends EnumerationBase {
    "@type": "schema:ActionStatusType";
}
/** The status of an Action. */
export type ActionStatusType = "https://schema.org/ActiveActionStatus" | "schema:ActiveActionStatus" | "https://schema.org/CompletedActionStatus" | "schema:CompletedActionStatus" | "https://schema.org/FailedActionStatus" | "schema:FailedActionStatus" | "https://schema.org/PotentialActionStatus" | "schema:PotentialActionStatus" | ActionStatusTypeLeaf;

interface ActivateActionLeaf extends ActionBase {
    "@type": "schema:ActivateAction";
}
/** The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight). */
export type ActivateAction = ActivateActionLeaf;

interface ActivityCorporateEntityLeaf extends ThingBase {
    "@type": "coremo:ActivityCorporateEntity";
}
/** A corporate activity entity. */
export type ActivityCorporateEntity = ActivityCorporateEntityLeaf | ContractEntity;

interface ActivityCorporateModelAreaLeaf extends ThingBase {
    "@type": "coremo:ActivityCorporateModelArea";
}
/** An activity model area. */
export type ActivityCorporateModelArea = ActivityCorporateModelAreaLeaf;

interface AddActionLeaf extends UpdateActionBase {
    "@type": "schema:AddAction";
}
/** The act of editing by adding an object to a collection. */
export type AddAction = AddActionLeaf | InsertAction;

interface AdditionContractPaymentDescriptionDueToBenefitSharingOfValueEngineeringLeaf extends AdditionContractPaymentDescriptionItemBase {
    "@type": "camo:AdditionContractPaymentDescriptionDueToBenefitSharingOfValueEngineering";
}
/** An addition to be added to a contract payment description. */
export type AdditionContractPaymentDescriptionDueToBenefitSharingOfValueEngineering = AdditionContractPaymentDescriptionDueToBenefitSharingOfValueEngineeringLeaf;

interface AdditionContractPaymentDescriptionDueToContractorPaidEmployerDAABFeeLeaf extends AdditionContractPaymentDescriptionItemBase {
    "@type": "camo:AdditionContractPaymentDescriptionDueToContractorPaidEmployerDAABFee";
}
/** An addition to be added to a contract payment description. */
export type AdditionContractPaymentDescriptionDueToContractorPaidEmployerDAABFee = AdditionContractPaymentDescriptionDueToContractorPaidEmployerDAABFeeLeaf;

interface AdditionContractPaymentDescriptionDueToEarlyCompletionLeaf extends AdditionContractPaymentDescriptionItemBase {
    "@type": "camo:AdditionContractPaymentDescriptionDueToEarlyCompletion";
}
/** An addition to be added to a contract payment description. */
export type AdditionContractPaymentDescriptionDueToEarlyCompletion = AdditionContractPaymentDescriptionDueToEarlyCompletionLeaf;

interface AdditionContractPaymentDescriptionItemBase extends ThingBase {
    /** The amount property for a GeneralPaymentDescription. */
    "camo:additionContractPaymentDescriptionAmount"?: SchemaValue<MonetaryAmount | IdReference>;
    /** Explanation for this Addition Payment. */
    "camo:contractPaymentDescriptionAdditionItemDetails"?: SchemaValue<Text>;
    /** Identifies what kind of AdditionPayment this is. */
    "camo:contractPaymentDescriptionAdditionKind"?: SchemaValue<URL | IdReference>;
}
interface AdditionContractPaymentDescriptionItemLeaf extends AdditionContractPaymentDescriptionItemBase {
    "@type": "camo:AdditionContractPaymentDescriptionItem";
}
/** An addition to be added to an AdditionsPaymentDescriptionTable. */
export type AdditionContractPaymentDescriptionItem = AdditionContractPaymentDescriptionItemLeaf | AdditionContractPaymentDescriptionDueToBenefitSharingOfValueEngineering | AdditionContractPaymentDescriptionDueToContractorPaidEmployerDAABFee | AdditionContractPaymentDescriptionDueToEarlyCompletion;

interface AdditionsPaymentDescriptionBase extends GeneralPaymentDescriptionBase {
    /** Attaches an AdditionsPaymentDescriptionTable to its AdditionsPaymentDescription. */
    "camo:hasAdditionContractPaymentDescriptionTable"?: SchemaValue<AdditionsPaymentDescriptionTable | IdReference>;
}
interface AdditionsPaymentDescriptionLeaf extends AdditionsPaymentDescriptionBase {
    "@type": "camo:AdditionsPaymentDescription";
}
/** A additions payment that is part of a contract payment description. */
export type AdditionsPaymentDescription = AdditionsPaymentDescriptionLeaf;

interface AdditionsPaymentDescriptionTableBase extends ThingBase {
    /** Attaches a AdditionContractPaymentDescriptionItem to a AdditionsPaymentDescriptionTable. */
    "camo:hasAdditionContractPaymentDescriptionItem"?: SchemaValue<AdditionContractPaymentDescriptionItem | IdReference>;
}
interface AdditionsPaymentDescriptionTableLeaf extends AdditionsPaymentDescriptionTableBase {
    "@type": "camo:AdditionsPaymentDescriptionTable";
}
/** An AdditionsPaymentDescriptionTable attached to an AdditionsPaymentDescription. */
export type AdditionsPaymentDescriptionTable = AdditionsPaymentDescriptionTableLeaf;

interface AddTransformLeaf extends TransformBase {
    "@type": "coremo:AddTransform";
}
/** An AddTransform for a Transformable. */
export type AddTransform = AddTransformLeaf;

interface AdministrativeAreaLeaf extends PlaceBase {
    "@type": "schema:AdministrativeArea";
}
/** A geographical region, typically under the jurisdiction of a particular government. */
export type AdministrativeArea = AdministrativeAreaLeaf | City | Country | SchoolDistrict | State | string;

interface AdultEntertainmentLeaf extends LocalBusinessBase {
    "@type": "schema:AdultEntertainment";
}
/** An adult entertainment establishment. */
export type AdultEntertainment = AdultEntertainmentLeaf | string;

interface AdvancePaymentLeaf extends PaymentBase {
    "@type": "camo:AdvancePayment";
}
/** An advance payment Explanation. */
export type AdvancePayment = AdvancePaymentLeaf;

interface AdvancePaymentCertificateLeaf extends PaymentCertificateBase {
    "@type": "camo:AdvancePaymentCertificate";
}
/** An advance payment certificate. */
export type AdvancePaymentCertificate = AdvancePaymentCertificateLeaf;

interface AdvancePaymentGuaranteeLeaf extends ThingBase {
    "@type": "camo:AdvancePaymentGuarantee";
}
/** An Advance Payment Guarantee. */
export type AdvancePaymentGuarantee = AdvancePaymentGuaranteeLeaf;

interface AdvancePaymentLayoutTableBase extends ThingBase {
    /** Defines the advance percentage to be used. */
    "camo:advancePaymentPercentage"?: SchemaValue<Number>;
}
interface AdvancePaymentLayoutTableLeaf extends AdvancePaymentLayoutTableBase {
    "@type": "camo:AdvancePaymentLayoutTable";
}
/** Advance payment layout table. */
export type AdvancePaymentLayoutTable = AdvancePaymentLayoutTableLeaf;

interface AdvanceSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:AdvanceSectionPaymentDescription";
}
/** An advance payment that is part of a contract payment description. */
export type AdvanceSectionPaymentDescription = AdvanceSectionPaymentDescriptionLeaf;

interface AdvanceStatementLeaf extends ContractStatementBase {
    "@type": "camo:AdvanceStatement";
}
/** An advance statement. */
export type AdvanceStatement = AdvanceStatementLeaf;

interface AdvertiserContentArticleLeaf extends ArticleBase {
    "@type": "schema:AdvertiserContentArticle";
}
/** An {@link https://schema.org/Article Article} that an external entity has paid to place or to produce to its specifications. Includes {@link https://en.wikipedia.org/wiki/Advertorial advertorials}, sponsored content, native advertising and other paid content. */
export type AdvertiserContentArticle = AdvertiserContentArticleLeaf;

interface AggregateOfferBase extends OfferBase {
    /**
     * The highest price of all offers available.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "schema:highPrice"?: SchemaValue<Number | Text>;
    /**
     * The lowest price of all offers available.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "schema:lowPrice"?: SchemaValue<Number | Text>;
    /** The number of offers for the product. */
    "schema:offerCount"?: SchemaValue<Integer>;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:offers"?: SchemaValue<Demand | Offer | IdReference>;
}
interface AggregateOfferLeaf extends AggregateOfferBase {
    "@type": "schema:AggregateOffer";
}
/**
 * When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.
 *
 * Note: AggregateOffers are normally expected to associate multiple offers that all share the same defined {@link https://schema.org/businessFunction businessFunction} value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.
 */
export type AggregateOffer = AggregateOfferLeaf;

interface AggregateRatingBase extends RatingBase {
    /** The item that is being reviewed/rated. */
    "schema:itemReviewed"?: SchemaValue<Thing | IdReference>;
    /** The count of total number of ratings. */
    "schema:ratingCount"?: SchemaValue<Integer>;
    /** The count of total number of reviews. */
    "schema:reviewCount"?: SchemaValue<Integer>;
}
interface AggregateRatingLeaf extends AggregateRatingBase {
    "@type": "schema:AggregateRating";
}
/** The average rating based on multiple ratings or reviews. */
export type AggregateRating = AggregateRatingLeaf | EmployerAggregateRating;

interface AgreeActionLeaf extends ActionBase {
    "@type": "schema:AgreeAction";
}
/** The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants. */
export type AgreeAction = AgreeActionLeaf;

interface AirlineBase extends OrganizationBase {
    /** The type of boarding policy used by the airline (e.g. zone-based or group-based). */
    "schema:boardingPolicy"?: SchemaValue<BoardingPolicyType | IdReference>;
    /** IATA identifier for an airline or airport. */
    "schema:iataCode"?: SchemaValue<Text>;
}
interface AirlineLeaf extends AirlineBase {
    "@type": "schema:Airline";
}
/** An organization that provides flights for passengers. */
export type Airline = AirlineLeaf | string;

interface AirportBase extends CivicStructureBase {
    /** IATA identifier for an airline or airport. */
    "schema:iataCode"?: SchemaValue<Text>;
    /** ICAO identifier for an airport. */
    "schema:icaoCode"?: SchemaValue<Text>;
}
interface AirportLeaf extends AirportBase {
    "@type": "schema:Airport";
}
/** An airport. */
export type Airport = AirportLeaf | string;

interface AlignmentObjectBase extends ThingBase {
    /** A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'. */
    "schema:alignmentType"?: SchemaValue<Text>;
    /** The framework to which the resource being described is aligned. */
    "schema:educationalFramework"?: SchemaValue<Text>;
    /** The description of a node in an established educational framework. */
    "schema:targetDescription"?: SchemaValue<Text>;
    /** The name of a node in an established educational framework. */
    "schema:targetName"?: SchemaValue<Text>;
    /** The URL of a node in an established educational framework. */
    "schema:targetUrl"?: SchemaValue<URL | IdReference>;
}
interface AlignmentObjectLeaf extends AlignmentObjectBase {
    "@type": "schema:AlignmentObject";
}
/**
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 *
 * Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link https://schema.org/teaches teaches} or {@link https://schema.org/assesses assesses} a competency.
 */
export type AlignmentObject = AlignmentObjectLeaf;

interface AllocateActionLeaf extends ActionBase {
    "@type": "schema:AllocateAction";
}
/** The act of organizing tasks/objects/events by associating resources to it. */
export type AllocateAction = AllocateActionLeaf | AcceptAction | AssignAction | AuthorizeAction | RejectAction;

interface AmpStoryLeaf extends CreativeWorkBase {
    "@type": "schema:AmpStory";
}
/** A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices. */
export type AmpStory = AmpStoryLeaf;

interface AMRadioChannelLeaf extends BroadcastChannelBase {
    "@type": "schema:AMRadioChannel";
}
/** A radio channel that uses AM. */
export type AMRadioChannel = AMRadioChannelLeaf;

interface AmusementParkLeaf extends LocalBusinessBase {
    "@type": "schema:AmusementPark";
}
/** An amusement park. */
export type AmusementPark = AmusementParkLeaf | string;

interface AnalysisNewsArticleLeaf extends NewsArticleBase {
    "@type": "schema:AnalysisNewsArticle";
}
/** An AnalysisNewsArticle is a {@link https://schema.org/NewsArticle NewsArticle} that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions. */
export type AnalysisNewsArticle = AnalysisNewsArticleLeaf;

interface AnatomicalStructureBase extends MedicalEntityBase {
    /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
    "schema:associatedPathophysiology"?: SchemaValue<Text>;
    /** Location in the body of the anatomical structure. */
    "schema:bodyLocation"?: SchemaValue<Text>;
    /** Other anatomical structures to which this structure is connected. */
    "schema:connectedTo"?: SchemaValue<AnatomicalStructure | IdReference>;
    /** An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures. */
    "schema:diagram"?: SchemaValue<ImageObject | IdReference>;
    /** The anatomical or organ system that this structure is part of. */
    "schema:partOfSystem"?: SchemaValue<AnatomicalSystem | IdReference>;
    /** A medical condition associated with this anatomy. */
    "schema:relatedCondition"?: SchemaValue<MedicalCondition | IdReference>;
    /** A medical therapy related to this anatomy. */
    "schema:relatedTherapy"?: SchemaValue<MedicalTherapy | IdReference>;
    /** Component (sub-)structure(s) that comprise this anatomical structure. */
    "schema:subStructure"?: SchemaValue<AnatomicalStructure | IdReference>;
}
interface AnatomicalStructureLeaf extends AnatomicalStructureBase {
    "@type": "schema:AnatomicalStructure";
}
/** Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures. */
export type AnatomicalStructure = AnatomicalStructureLeaf | Bone | BrainStructure | Joint | Ligament | Muscle | Nerve | Vessel;

interface AnatomicalSystemBase extends MedicalEntityBase {
    /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
    "schema:associatedPathophysiology"?: SchemaValue<Text>;
    /** Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system. */
    "schema:comprisedOf"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | IdReference>;
    /** A medical condition associated with this anatomy. */
    "schema:relatedCondition"?: SchemaValue<MedicalCondition | IdReference>;
    /** Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system. */
    "schema:relatedStructure"?: SchemaValue<AnatomicalStructure | IdReference>;
    /** A medical therapy related to this anatomy. */
    "schema:relatedTherapy"?: SchemaValue<MedicalTherapy | IdReference>;
}
interface AnatomicalSystemLeaf extends AnatomicalSystemBase {
    "@type": "schema:AnatomicalSystem";
}
/** An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems. */
export type AnatomicalSystem = AnatomicalSystemLeaf;

interface AnimalShelterLeaf extends LocalBusinessBase {
    "@type": "schema:AnimalShelter";
}
/** Animal shelter. */
export type AnimalShelter = AnimalShelterLeaf | string;

interface AnswerBase extends CommentBase {
    /** A step-by-step or full explanation about Answer. Can outline how this Answer was achieved or contain more broad clarification or statement about it. */
    "schema:answerExplanation"?: SchemaValue<Comment | WebContent | IdReference>;
}
interface AnswerLeaf extends AnswerBase {
    "@type": "schema:Answer";
}
/** An answer offered to a question; perhaps correct, perhaps opinionated or wrong. */
export type Answer = AnswerLeaf;

interface ApartmentBase extends AccommodationBase {
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "schema:numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person). Typical unit code(s): C62 for person */
    "schema:occupancy"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface ApartmentLeaf extends ApartmentBase {
    "@type": "schema:Apartment";
}
/** An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Apartment http://en.wikipedia.org/wiki/Apartment}). */
export type Apartment = ApartmentLeaf | string;

interface ApartmentComplexBase extends ResidenceBase {
    /** Indicates the total (available plus unavailable) number of accommodation units in an {@link https://schema.org/ApartmentComplex ApartmentComplex}, or the number of accommodation units for a specific {@link https://schema.org/FloorPlan FloorPlan} (within its specific {@link https://schema.org/ApartmentComplex ApartmentComplex}). See also {@link https://schema.org/numberOfAvailableAccommodationUnits numberOfAvailableAccommodationUnits}. */
    "schema:numberOfAccommodationUnits"?: SchemaValue<QuantitativeValue | IdReference>;
    /** Indicates the number of available accommodation units in an {@link https://schema.org/ApartmentComplex ApartmentComplex}, or the number of accommodation units for a specific {@link https://schema.org/FloorPlan FloorPlan} (within its specific {@link https://schema.org/ApartmentComplex ApartmentComplex}). See also {@link https://schema.org/numberOfAccommodationUnits numberOfAccommodationUnits}. */
    "schema:numberOfAvailableAccommodationUnits"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The total integer number of bedrooms in a some {@link https://schema.org/Accommodation Accommodation}, {@link https://schema.org/ApartmentComplex ApartmentComplex} or {@link https://schema.org/FloorPlan FloorPlan}. */
    "schema:numberOfBedrooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
    "schema:petsAllowed"?: SchemaValue<Boolean | Text>;
    /** A page providing information on how to book a tour of some {@link https://schema.org/Place Place}, such as an {@link https://schema.org/Accommodation Accommodation} or {@link https://schema.org/ApartmentComplex ApartmentComplex} in a real estate setting, as well as other kinds of tours as appropriate. */
    "schema:tourBookingPage"?: SchemaValue<URL | IdReference>;
}
interface ApartmentComplexLeaf extends ApartmentComplexBase {
    "@type": "schema:ApartmentComplex";
}
/** Residence type: Apartment complex. */
export type ApartmentComplex = ApartmentComplexLeaf | string;

interface APIReferenceBase extends TechArticleBase {
    /**
     * Library file name e.g., mscorlib.dll, system.web.dll.
     *
     * @deprecated Consider using https://schema.org/executableLibraryName instead.
     */
    "schema:assembly"?: SchemaValue<Text>;
    /** Associated product/technology version. e.g., .NET Framework 4.5. */
    "schema:assemblyVersion"?: SchemaValue<Text>;
    /** Library file name e.g., mscorlib.dll, system.web.dll. */
    "schema:executableLibraryName"?: SchemaValue<Text>;
    /** Indicates whether API is managed or unmanaged. */
    "schema:programmingModel"?: SchemaValue<Text>;
    /** Type of app development: phone, Metro style, desktop, XBox, etc. */
    "schema:targetPlatform"?: SchemaValue<Text>;
}
interface APIReferenceLeaf extends APIReferenceBase {
    "@type": "schema:APIReference";
}
/** Reference documentation for application programming interfaces (APIs). */
export type APIReference = APIReferenceLeaf;

interface AppendActionLeaf extends InsertActionBase {
    "@type": "schema:AppendAction";
}
/** The act of inserting at the end if an ordered collection. */
export type AppendAction = AppendActionLeaf;

interface AppliedMathematicalEntityLeaf extends ThingBase {
    "@type": "coremo:AppliedMathematicalEntity";
}
/** An applied mathematics entity. */
export type AppliedMathematicalEntity = AppliedMathematicalEntityLeaf;

interface AppliedMathematicalModelAreaLeaf extends ThingBase {
    "@type": "coremo:AppliedMathematicalModelArea";
}
/** An applied mathematical model area. */
export type AppliedMathematicalModelArea = AppliedMathematicalModelAreaLeaf;

interface ApplyActionLeaf extends ActionBase {
    "@type": "schema:ApplyAction";
}
/**
 * The act of registering to an organization/service without the guarantee to receive it.
 *
 * Related actions:
 * - {@link https://schema.org/RegisterAction RegisterAction}: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
 */
export type ApplyAction = ApplyActionLeaf;

interface ApplyAndCollectDamagesSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:ApplyAndCollectDamagesSectionPaymentDescription";
}
/** Apply and collect damages SectionPaymentDescription that is part of a contract payment description. */
export type ApplyAndCollectDamagesSectionPaymentDescription = ApplyAndCollectDamagesSectionPaymentDescriptionLeaf;

interface ApplyDamagesSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:ApplyDamagesSectionPaymentDescription";
}
/** Apply damages SectionPaymentDescription that is part of a contract payment description. */
export type ApplyDamagesSectionPaymentDescription = ApplyDamagesSectionPaymentDescriptionLeaf;

interface ApprovedIndicationLeaf extends MedicalEntityBase {
    "@type": "schema:ApprovedIndication";
}
/** An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use of the therapy; for example, the US FDA approves indications for most drugs in the US. */
export type ApprovedIndication = ApprovedIndicationLeaf;

interface AquariumLeaf extends CivicStructureBase {
    "@type": "schema:Aquarium";
}
/** Aquarium. */
export type Aquarium = AquariumLeaf | string;

interface ArchiveComponentBase extends CreativeWorkBase {
    /** {@link https://schema.org/ArchiveOrganization ArchiveOrganization} that holds, keeps or maintains the {@link https://schema.org/ArchiveComponent ArchiveComponent}. */
    "schema:holdingArchive"?: SchemaValue<ArchiveOrganization | IdReference>;
    /** Current location of the item. */
    "schema:itemLocation"?: SchemaValue<Place | PostalAddress | Text | IdReference>;
}
interface ArchiveComponentLeaf extends ArchiveComponentBase {
    "@type": "schema:ArchiveComponent";
}
/** An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections. */
export type ArchiveComponent = ArchiveComponentLeaf;

interface ArchiveOrganizationBase extends LocalBusinessBase {
    /** Collection, {@link https://en.wikipedia.org/wiki/Fonds fonds}, or item held, kept or maintained by an {@link https://schema.org/ArchiveOrganization ArchiveOrganization}. */
    "schema:archiveHeld"?: SchemaValue<ArchiveComponent | IdReference>;
}
interface ArchiveOrganizationLeaf extends ArchiveOrganizationBase {
    "@type": "schema:ArchiveOrganization";
}
/** An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public. */
export type ArchiveOrganization = ArchiveOrganizationLeaf | string;

interface ArriveActionLeaf extends MoveActionBase {
    "@type": "schema:ArriveAction";
}
/** The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants. */
export type ArriveAction = ArriveActionLeaf;

interface ArteryBase extends AnatomicalStructureBase {
    /** The branches that comprise the arterial structure. */
    "schema:arterialBranch"?: SchemaValue<AnatomicalStructure | IdReference>;
    /** The area to which the artery supplies blood. */
    "schema:supplyTo"?: SchemaValue<AnatomicalStructure | IdReference>;
}
interface ArteryLeaf extends ArteryBase {
    "@type": "schema:Artery";
}
/** A type of blood vessel that specifically carries blood away from the heart. */
export type Artery = ArteryLeaf;

interface ArtGalleryLeaf extends LocalBusinessBase {
    "@type": "schema:ArtGallery";
}
/** An art gallery. */
export type ArtGallery = ArtGalleryLeaf | string;

interface ArticleBase extends CreativeWorkBase {
    /** The actual body of the article. */
    "schema:articleBody"?: SchemaValue<Text>;
    /** Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc. */
    "schema:articleSection"?: SchemaValue<Text>;
    /** For an {@link https://schema.org/Article Article}, typically a {@link https://schema.org/NewsArticle NewsArticle}, the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc. */
    "schema:backstory"?: SchemaValue<CreativeWork | Text | IdReference>;
    /** The page on which the work ends; for example "138" or "xvi". */
    "schema:pageEnd"?: SchemaValue<Integer | Text>;
    /** The page on which the work starts; for example "135" or "xiii". */
    "schema:pageStart"?: SchemaValue<Integer | Text>;
    /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
    "schema:pagination"?: SchemaValue<Text>;
    /**
     * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
     *
     * The _speakable_ property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
     *
     * 1.) _id-value_ URL references - uses _id-value_ of an element in the page being annotated. The simplest use of _speakable_ has (potentially relative) URL values, referencing identified sections of the document concerned.
     *
     * 2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the {@link https://schema.org/cssSelector cssSelector} property.
     *
     * 3.) XPaths - addresses content via XPaths (assuming an XML view of the content). Use the {@link https://schema.org/xpath xpath} property.
     *
     * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this we define a supporting type, {@link https://schema.org/SpeakableSpecification SpeakableSpecification} which is defined to be a possible value of the _speakable_ property.
     */
    "schema:speakable"?: SchemaValue<SpeakableSpecification | URL | IdReference>;
    /** The number of words in the text of the Article. */
    "schema:wordCount"?: SchemaValue<Integer>;
}
interface ArticleLeaf extends ArticleBase {
    "@type": "schema:Article";
}
/**
 * An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 */
export type Article = ArticleLeaf | AdvertiserContentArticle | NewsArticle | Report | SatiricalArticle | ScholarlyArticle | SocialMediaPosting | TechArticle;

interface AskActionBase extends CommunicateActionBase {
    /** A sub property of object. A question. */
    "schema:question"?: SchemaValue<Question | IdReference>;
}
interface AskActionLeaf extends AskActionBase {
    "@type": "schema:AskAction";
}
/**
 * The act of posing a question / favor to someone.
 *
 * Related actions:
 * - {@link https://schema.org/ReplyAction ReplyAction}: Appears generally as a response to AskAction.
 */
export type AskAction = AskActionLeaf;

interface AskPublicNewsArticleLeaf extends NewsArticleBase {
    "@type": "schema:AskPublicNewsArticle";
}
/** A {@link https://schema.org/NewsArticle NewsArticle} expressing an open call by a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes. */
export type AskPublicNewsArticle = AskPublicNewsArticleLeaf;

interface AssessActionLeaf extends ActionBase {
    "@type": "schema:AssessAction";
}
/** The act of forming one's opinion, reaction or sentiment. */
export type AssessAction = AssessActionLeaf | ChooseAction | IgnoreAction | ReactAction | ReviewAction;

interface AssignActionLeaf extends ActionBase {
    "@type": "schema:AssignAction";
}
/** The act of allocating an action/event/task to some destination (someone or something). */
export type AssignAction = AssignActionLeaf;

interface AtlasLeaf extends CreativeWorkBase {
    "@type": "schema:Atlas";
}
/** A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject. */
export type Atlas = AtlasLeaf;

interface AttorneyLeaf extends LocalBusinessBase {
    "@type": "schema:Attorney";
}
/**
 * Professional service: Attorney.
 *
 * This type is deprecated - {@link https://schema.org/LegalService LegalService} is more inclusive and less ambiguous.
 */
export type Attorney = AttorneyLeaf | string;

interface AudienceBase extends ThingBase {
    /** The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.). */
    "schema:audienceType"?: SchemaValue<Text>;
    /** The geographic area associated with the audience. */
    "schema:geographicArea"?: SchemaValue<AdministrativeArea | IdReference>;
}
interface AudienceLeaf extends AudienceBase {
    "@type": "schema:Audience";
}
/** Intended audience for an item, i.e. the group for whom the item was created. */
export type Audience = AudienceLeaf | BusinessAudience | EducationalAudience | MedicalAudience | PeopleAudience | Researcher;

interface AudiobookBase extends BookBase, AudioObjectBase {
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** A person who reads (performs) the audiobook. */
    "schema:readBy"?: SchemaValue<Person | IdReference>;
}
interface AudiobookLeaf extends AudiobookBase {
    "@type": "schema:Audiobook";
}
/** An audiobook. */
export type Audiobook = AudiobookLeaf;

interface AudioObjectBase extends MediaObjectBase {
    /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link https://schema.org/encodingFormat encodingFormat}. */
    "schema:caption"?: SchemaValue<MediaObject | Text | IdReference>;
    /** Represents textual captioning from a {@link https://schema.org/MediaObject MediaObject}, e.g. text of a 'meme'. */
    "schema:embeddedTextCaption"?: SchemaValue<Text>;
    /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object. */
    "schema:transcript"?: SchemaValue<Text>;
}
interface AudioObjectLeaf extends AudioObjectBase {
    "@type": "schema:AudioObject";
}
/** An audio file. */
export type AudioObject = AudioObjectLeaf | Audiobook | AudioObjectSnapshot;

interface AudioObjectSnapshotLeaf extends AudioObjectBase {
    "@type": "schema:AudioObjectSnapshot";
}
/** A specific and exact (byte-for-byte) version of an {@link https://schema.org/AudioObject AudioObject}. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
export type AudioObjectSnapshot = AudioObjectSnapshotLeaf;

interface AuthorizeActionBase extends ActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface AuthorizeActionLeaf extends AuthorizeActionBase {
    "@type": "schema:AuthorizeAction";
}
/** The act of granting permission to an object. */
export type AuthorizeAction = AuthorizeActionLeaf;

interface AutoBodyShopLeaf extends LocalBusinessBase {
    "@type": "schema:AutoBodyShop";
}
/** Auto body shop. */
export type AutoBodyShop = AutoBodyShopLeaf | string;

interface AutoDealerLeaf extends LocalBusinessBase {
    "@type": "schema:AutoDealer";
}
/** An car dealership. */
export type AutoDealer = AutoDealerLeaf | string;

interface AutomatedTellerLeaf extends FinancialServiceBase {
    "@type": "schema:AutomatedTeller";
}
/** ATM/cash machine. */
export type AutomatedTeller = AutomatedTellerLeaf | string;

interface AutomotiveBusinessLeaf extends LocalBusinessBase {
    "@type": "schema:AutomotiveBusiness";
}
/** Car repair, sales, or parts. */
export type AutomotiveBusiness = AutomotiveBusinessLeaf | AutoBodyShop | AutoDealer | AutoPartsStore | AutoRental | AutoRepair | AutoWash | GasStation | MotorcycleDealer | MotorcycleRepair | string;

interface AutoPartsStoreBase extends LocalBusinessBase, LocalBusinessBase {
}
interface AutoPartsStoreLeaf extends AutoPartsStoreBase {
    "@type": "schema:AutoPartsStore";
}
/** An auto parts store. */
export type AutoPartsStore = AutoPartsStoreLeaf | string;

interface AutoRentalLeaf extends LocalBusinessBase {
    "@type": "schema:AutoRental";
}
/** A car rental business. */
export type AutoRental = AutoRentalLeaf | string;

interface AutoRepairLeaf extends LocalBusinessBase {
    "@type": "schema:AutoRepair";
}
/** Car repair business. */
export type AutoRepair = AutoRepairLeaf | string;

interface AutoWashLeaf extends LocalBusinessBase {
    "@type": "schema:AutoWash";
}
/** A car wash business. */
export type AutoWash = AutoWashLeaf | string;

interface BackgroundNewsArticleLeaf extends NewsArticleBase {
    "@type": "schema:BackgroundNewsArticle";
}
/** A {@link https://schema.org/NewsArticle NewsArticle} providing historical context, definition and detail on a specific topic (aka "explainer" or "backgrounder"). For example, an in-depth article or frequently-asked-questions ({@link https://en.wikipedia.org/wiki/FAQ FAQ}) document on topics such as Climate Change or the European Union. Other kinds of background material from a non-news setting are often described using {@link https://schema.org/Book Book} or {@link https://schema.org/Article Article}, in particular {@link https://schema.org/ScholarlyArticle ScholarlyArticle}. See also {@link https://schema.org/NewsArticle NewsArticle} for related vocabulary from a learning/education perspective. */
export type BackgroundNewsArticle = BackgroundNewsArticleLeaf;

interface BakeryLeaf extends FoodEstablishmentBase {
    "@type": "schema:Bakery";
}
/** A bakery. */
export type Bakery = BakeryLeaf | string;

interface BankAccountBase extends FinancialProductBase {
    /** A minimum amount that has to be paid in every month. */
    "schema:accountMinimumInflow"?: SchemaValue<MonetaryAmount | IdReference>;
    /** An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money. */
    "schema:accountOverdraftLimit"?: SchemaValue<MonetaryAmount | IdReference>;
    /** The type of a bank account. */
    "schema:bankAccountType"?: SchemaValue<Text | URL | IdReference>;
}
interface BankAccountLeaf extends BankAccountBase {
    "@type": "schema:BankAccount";
}
/** A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest. */
export type BankAccount = BankAccountLeaf | DepositAccount;

interface BankOrCreditUnionLeaf extends FinancialServiceBase {
    "@type": "schema:BankOrCreditUnion";
}
/** Bank or credit union. */
export type BankOrCreditUnion = BankOrCreditUnionLeaf | string;

interface BarcodeLeaf extends ImageObjectBase {
    "@type": "schema:Barcode";
}
/** An image of a visual machine-readable code such as a barcode or QR code. */
export type Barcode = BarcodeLeaf;

interface BarOrPubLeaf extends FoodEstablishmentBase {
    "@type": "schema:BarOrPub";
}
/** A bar or pub. */
export type BarOrPub = BarOrPubLeaf | string;

interface BeachLeaf extends CivicStructureBase {
    "@type": "schema:Beach";
}
/** Beach. */
export type Beach = BeachLeaf | string;

interface BeautySalonLeaf extends LocalBusinessBase {
    "@type": "schema:BeautySalon";
}
/** Beauty salon. */
export type BeautySalon = BeautySalonLeaf | string;

interface BedAndBreakfastLeaf extends LodgingBusinessBase {
    "@type": "schema:BedAndBreakfast";
}
/**
 * Bed and breakfast.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type BedAndBreakfast = BedAndBreakfastLeaf | string;

interface BedDetailsBase extends ThingBase {
    /** The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment. */
    "schema:numberOfBeds"?: SchemaValue<Number>;
    /** The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity. */
    "schema:typeOfBed"?: SchemaValue<BedType | Text | IdReference>;
}
interface BedDetailsLeaf extends BedDetailsBase {
    "@type": "schema:BedDetails";
}
/** An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also {@link https://schema.org/BedType BedType} (under development). */
export type BedDetails = BedDetailsLeaf;

interface BedTypeLeaf extends QualitativeValueBase {
    "@type": "schema:BedType";
}
/** A type of bed. This is used for indicating the bed or beds available in an accommodation. */
export type BedType = BedTypeLeaf;

interface BefriendActionLeaf extends ActionBase {
    "@type": "schema:BefriendAction";
}
/**
 * The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.
 *
 * Related actions:
 * - {@link https://schema.org/FollowAction FollowAction}: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
 */
export type BefriendAction = BefriendActionLeaf;

interface BikeStoreLeaf extends LocalBusinessBase {
    "@type": "schema:BikeStore";
}
/** A bike store. */
export type BikeStore = BikeStoreLeaf | string;

interface BillOfQuantitiesLeaf extends ThingBase {
    "@type": "camo:BillOfQuantities";
}
/** The Bill Of Quantities schedule. */
export type BillOfQuantities = BillOfQuantitiesLeaf;

interface BioChemEntityBase extends ThingBase {
    /** Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue. */
    "schema:associatedDisease"?: SchemaValue<MedicalCondition | PropertyValue | URL | IdReference>;
    /** A BioChemEntity that is known to interact with this item. */
    "schema:bioChemInteraction"?: SchemaValue<BioChemEntity | IdReference>;
    /** A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms. */
    "schema:bioChemSimilarity"?: SchemaValue<BioChemEntity | IdReference>;
    /** A role played by the BioChemEntity within a biological context. */
    "schema:biologicalRole"?: SchemaValue<DefinedTerm | IdReference>;
    /** Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part. */
    "schema:hasBioChemEntityPart"?: SchemaValue<BioChemEntity | IdReference>;
    /** Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence. */
    "schema:hasMolecularFunction"?: SchemaValue<DefinedTerm | PropertyValue | URL | IdReference>;
    /** A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image. */
    "schema:hasRepresentation"?: SchemaValue<PropertyValue | Text | URL | IdReference>;
    /** Another BioChemEntity encoding by this one. */
    "schema:isEncodedByBioChemEntity"?: SchemaValue<Gene | IdReference>;
    /** Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence. */
    "schema:isInvolvedInBiologicalProcess"?: SchemaValue<DefinedTerm | PropertyValue | URL | IdReference>;
    /** Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence. */
    "schema:isLocatedInSubcellularLocation"?: SchemaValue<DefinedTerm | PropertyValue | URL | IdReference>;
    /** Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity. */
    "schema:isPartOfBioChemEntity"?: SchemaValue<BioChemEntity | IdReference>;
    /** The taxonomic grouping of the organism that expresses, encodes, or in someway related to the BioChemEntity. */
    "schema:taxonomicRange"?: SchemaValue<DefinedTerm | Taxon | Text | URL | IdReference>;
}
interface BioChemEntityLeaf extends BioChemEntityBase {
    "@type": "schema:BioChemEntity";
}
/** Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical. */
export type BioChemEntity = BioChemEntityLeaf | ChemicalSubstance | Gene | MolecularEntity | Protein;

interface BlogBase extends CreativeWorkBase {
    /** A posting that is part of this blog. */
    "schema:blogPost"?: SchemaValue<BlogPosting | IdReference>;
    /**
     * Indicates a post that is part of a {@link https://schema.org/Blog Blog}. Note that historically, what we term a "Blog" was once known as a "weblog", and that what we term a "BlogPosting" is now often colloquially referred to as a "blog".
     *
     * @deprecated Consider using https://schema.org/blogPost instead.
     */
    "schema:blogPosts"?: SchemaValue<BlogPosting | IdReference>;
    /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
    "schema:issn"?: SchemaValue<Text>;
}
interface BlogLeaf extends BlogBase {
    "@type": "schema:Blog";
}
/** A {@link https://en.wikipedia.org/wiki/Blog blog}, sometimes known as a "weblog". Note that the individual posts ({@link https://schema.org/BlogPosting BlogPosting}s) in a {@link https://schema.org/Blog Blog} are often colloqually referred to by the same term. */
export type Blog = BlogLeaf;

interface BlogPostingLeaf extends SocialMediaPostingBase {
    "@type": "schema:BlogPosting";
}
/** A blog post. */
export type BlogPosting = BlogPostingLeaf | LiveBlogPosting;

interface BloodTestLeaf extends MedicalTestBase {
    "@type": "schema:BloodTest";
}
/** A medical test performed on a sample of a patient's blood. */
export type BloodTest = BloodTestLeaf;

interface BoardingPolicyTypeLeaf extends EnumerationBase {
    "@type": "schema:BoardingPolicyType";
}
/** A type of boarding policy used by an airline. */
export type BoardingPolicyType = "https://schema.org/GroupBoardingPolicy" | "schema:GroupBoardingPolicy" | "https://schema.org/ZoneBoardingPolicy" | "schema:ZoneBoardingPolicy" | BoardingPolicyTypeLeaf;

interface BoatReservationLeaf extends ReservationBase {
    "@type": "schema:BoatReservation";
}
/**
 * A reservation for boat travel.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export type BoatReservation = BoatReservationLeaf;

interface BoatTerminalLeaf extends CivicStructureBase {
    "@type": "schema:BoatTerminal";
}
/** A terminal for boats, ships, and other water vessels. */
export type BoatTerminal = BoatTerminalLeaf | string;

interface BoatTripBase extends TripBase {
    /** The terminal or port from which the boat arrives. */
    "schema:arrivalBoatTerminal"?: SchemaValue<BoatTerminal | IdReference>;
    /** The terminal or port from which the boat departs. */
    "schema:departureBoatTerminal"?: SchemaValue<BoatTerminal | IdReference>;
}
interface BoatTripLeaf extends BoatTripBase {
    "@type": "schema:BoatTrip";
}
/** A trip on a commercial ferry line. */
export type BoatTrip = BoatTripLeaf;

interface BodyMeasurementTypeEnumerationLeaf extends EnumerationBase {
    "@type": "schema:BodyMeasurementTypeEnumeration";
}
/** Enumerates types (or dimensions) of a person's body measurements, for example for fitting of clothes. */
export type BodyMeasurementTypeEnumeration = "https://schema.org/BodyMeasurementArm" | "schema:BodyMeasurementArm" | "https://schema.org/BodyMeasurementBust" | "schema:BodyMeasurementBust" | "https://schema.org/BodyMeasurementChest" | "schema:BodyMeasurementChest" | "https://schema.org/BodyMeasurementFoot" | "schema:BodyMeasurementFoot" | "https://schema.org/BodyMeasurementHand" | "schema:BodyMeasurementHand" | "https://schema.org/BodyMeasurementHead" | "schema:BodyMeasurementHead" | "https://schema.org/BodyMeasurementHeight" | "schema:BodyMeasurementHeight" | "https://schema.org/BodyMeasurementHips" | "schema:BodyMeasurementHips" | "https://schema.org/BodyMeasurementInsideLeg" | "schema:BodyMeasurementInsideLeg" | "https://schema.org/BodyMeasurementNeck" | "schema:BodyMeasurementNeck" | "https://schema.org/BodyMeasurementUnderbust" | "schema:BodyMeasurementUnderbust" | "https://schema.org/BodyMeasurementWaist" | "schema:BodyMeasurementWaist" | "https://schema.org/BodyMeasurementWeight" | "schema:BodyMeasurementWeight" | BodyMeasurementTypeEnumerationLeaf;

interface BodyOfWaterLeaf extends PlaceBase {
    "@type": "schema:BodyOfWater";
}
/** A body of water, such as a sea, ocean, or lake. */
export type BodyOfWater = BodyOfWaterLeaf | Canal | LakeBodyOfWater | OceanBodyOfWater | Pond | Reservoir | RiverBodyOfWater | SeaBodyOfWater | Waterfall | string;

interface BoneLeaf extends AnatomicalStructureBase {
    "@type": "schema:Bone";
}
/** Rigid connective tissue that comprises up the skeletal structure of the human body. */
export type Bone = BoneLeaf;

interface BookBase extends CreativeWorkBase {
    /** Indicates whether the book is an abridged edition. */
    "schema:abridged"?: SchemaValue<Boolean>;
    /** The edition of the book. */
    "schema:bookEdition"?: SchemaValue<Text>;
    /** The format of the book. */
    "schema:bookFormat"?: SchemaValue<BookFormatType | IdReference>;
    /** The illustrator of the book. */
    "schema:illustrator"?: SchemaValue<Person | IdReference>;
    /** The ISBN of the book. */
    "schema:isbn"?: SchemaValue<Text>;
    /** The number of pages in the book. */
    "schema:numberOfPages"?: SchemaValue<Integer>;
}
interface BookLeaf extends BookBase {
    "@type": "schema:Book";
}
/** A book. */
export type Book = BookLeaf | Audiobook;

interface BookFormatTypeLeaf extends EnumerationBase {
    "@type": "schema:BookFormatType";
}
/** The publication format of the book. */
export type BookFormatType = "https://schema.org/AudiobookFormat" | "schema:AudiobookFormat" | "https://schema.org/EBook" | "schema:EBook" | "https://schema.org/GraphicNovel" | "schema:GraphicNovel" | "https://schema.org/Hardcover" | "schema:Hardcover" | "https://schema.org/Paperback" | "schema:Paperback" | BookFormatTypeLeaf;

interface BookmarkActionLeaf extends ActionBase {
    "@type": "schema:BookmarkAction";
}
/** An agent bookmarks/flags/labels/tags/marks an object. */
export type BookmarkAction = BookmarkActionLeaf;

interface BookSeriesLeaf extends CreativeWorkSeriesBase {
    "@type": "schema:BookSeries";
}
/** A series of books. Included books can be indicated with the hasPart property. */
export type BookSeries = BookSeriesLeaf;

interface BookStoreLeaf extends LocalBusinessBase {
    "@type": "schema:BookStore";
}
/** A bookstore. */
export type BookStore = BookStoreLeaf | string;

interface BorrowActionBase extends TransferActionBase {
    /** A sub property of participant. The person that lends the object being borrowed. */
    "schema:lender"?: SchemaValue<Organization | Person | IdReference>;
}
interface BorrowActionLeaf extends BorrowActionBase {
    "@type": "schema:BorrowAction";
}
/**
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.
 *
 * Related actions:
 * - {@link https://schema.org/LendAction LendAction}: Reciprocal of BorrowAction.
 */
export type BorrowAction = BorrowActionLeaf;

interface BowlingAlleyLeaf extends LocalBusinessBase {
    "@type": "schema:BowlingAlley";
}
/** A bowling alley. */
export type BowlingAlley = BowlingAlleyLeaf | string;

interface BrainStructureLeaf extends AnatomicalStructureBase {
    "@type": "schema:BrainStructure";
}
/** Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity. */
export type BrainStructure = BrainStructureLeaf;

interface BrandBase extends ThingBase {
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "schema:aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
    /** An associated logo. */
    "schema:logo"?: SchemaValue<ImageObject | URL | IdReference>;
    /** A review of the item. */
    "schema:review"?: SchemaValue<Review | IdReference>;
    /** A slogan or motto associated with the item. */
    "schema:slogan"?: SchemaValue<Text>;
}
interface BrandLeaf extends BrandBase {
    "@type": "schema:Brand";
}
/** A brand is a name used by an organization or business person for labeling a product, product group, or similar. */
export type Brand = BrandLeaf;

interface BreadcrumbListLeaf extends ItemListBase {
    "@type": "schema:BreadcrumbList";
}
/**
 * A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.
 *
 * The {@link https://schema.org/position position} property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an {@link https://schema.org/itemListOrder itemListOrder} of {@link https://schema.org/ItemListOrderAscending ItemListOrderAscending} (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.
 */
export type BreadcrumbList = BreadcrumbListLeaf;

interface BreweryLeaf extends FoodEstablishmentBase {
    "@type": "schema:Brewery";
}
/** Brewery. */
export type Brewery = BreweryLeaf | string;

interface BridgeLeaf extends CivicStructureBase {
    "@type": "schema:Bridge";
}
/** A bridge. */
export type Bridge = BridgeLeaf | string;

interface BroadcastChannelBase extends ThingBase {
    /** The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number. */
    "schema:broadcastChannelId"?: SchemaValue<Text>;
    /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM". */
    "schema:broadcastFrequency"?: SchemaValue<BroadcastFrequencySpecification | Text | IdReference>;
    /** The type of service required to have access to the channel (e.g. Standard or Premium). */
    "schema:broadcastServiceTier"?: SchemaValue<Text>;
    /** Genre of the creative work, broadcast channel or group. */
    "schema:genre"?: SchemaValue<Text | URL | IdReference>;
    /** The CableOrSatelliteService offering the channel. */
    "schema:inBroadcastLineup"?: SchemaValue<CableOrSatelliteService | IdReference>;
    /** The BroadcastService offered on this channel. */
    "schema:providesBroadcastService"?: SchemaValue<BroadcastService | IdReference>;
}
interface BroadcastChannelLeaf extends BroadcastChannelBase {
    "@type": "schema:BroadcastChannel";
}
/** A unique instance of a BroadcastService on a CableOrSatelliteService lineup. */
export type BroadcastChannel = BroadcastChannelLeaf | RadioChannel | TelevisionChannel;

interface BroadcastEventBase extends PublicationEventBase {
    /** The event being broadcast such as a sporting event or awards ceremony. */
    "schema:broadcastOfEvent"?: SchemaValue<Event | IdReference>;
    /** True if the broadcast is of a live event. */
    "schema:isLiveBroadcast"?: SchemaValue<Boolean>;
    /** Languages in which subtitles/captions are available, in {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard format}. */
    "schema:subtitleLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
    "schema:videoFormat"?: SchemaValue<Text>;
}
interface BroadcastEventLeaf extends BroadcastEventBase {
    "@type": "schema:BroadcastEvent";
}
/** An over the air or online broadcast event. */
export type BroadcastEvent = BroadcastEventLeaf;

interface BroadcastFrequencySpecificationBase extends ThingBase {
    /** The frequency in MHz for a particular broadcast. */
    "schema:broadcastFrequencyValue"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** The modulation (e.g. FM, AM, etc) used by a particular broadcast service. */
    "schema:broadcastSignalModulation"?: SchemaValue<QualitativeValue | Text | IdReference>;
    /** The subchannel used for the broadcast. */
    "schema:broadcastSubChannel"?: SchemaValue<Text>;
}
interface BroadcastFrequencySpecificationLeaf extends BroadcastFrequencySpecificationBase {
    "@type": "schema:BroadcastFrequencySpecification";
}
/** The frequency in MHz and the modulation used for a particular BroadcastService. */
export type BroadcastFrequencySpecification = BroadcastFrequencySpecificationLeaf;

interface BroadcastServiceBase extends ServiceBase {
    /**
     * The area within which users can expect to reach the broadcast service.
     *
     * @deprecated Consider using https://schema.org/serviceArea instead.
     */
    "schema:area"?: SchemaValue<Place | IdReference>;
    /** The media network(s) whose content is broadcast on this station. */
    "schema:broadcastAffiliateOf"?: SchemaValue<Organization | IdReference>;
    /** The name displayed in the channel guide. For many US affiliates, it is the network name. */
    "schema:broadcastDisplayName"?: SchemaValue<Text>;
    /** The organization owning or operating the broadcast service. */
    "schema:broadcaster"?: SchemaValue<Organization | IdReference>;
    /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM". */
    "schema:broadcastFrequency"?: SchemaValue<BroadcastFrequencySpecification | Text | IdReference>;
    /** The timezone in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 format} for which the service bases its broadcasts */
    "schema:broadcastTimezone"?: SchemaValue<Text>;
    /** A {@link https://en.wikipedia.org/wiki/Call_sign callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
    "schema:callSign"?: SchemaValue<Text>;
    /** A broadcast channel of a broadcast service. */
    "schema:hasBroadcastChannel"?: SchemaValue<BroadcastChannel | IdReference>;
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "schema:inLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** A broadcast service to which the broadcast service may belong to such as regional variations of a national channel. */
    "schema:parentService"?: SchemaValue<BroadcastService | IdReference>;
    /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
    "schema:videoFormat"?: SchemaValue<Text>;
}
interface BroadcastServiceLeaf extends BroadcastServiceBase {
    "@type": "schema:BroadcastService";
}
/** A delivery service through which content is provided via broadcast over the air or online. */
export type BroadcastService = BroadcastServiceLeaf | RadioBroadcastService;

interface BrokerageAccountLeaf extends InvestmentOrDepositBase {
    "@type": "schema:BrokerageAccount";
}
/** An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm. */
export type BrokerageAccount = BrokerageAccountLeaf;

interface BuddhistTempleLeaf extends CivicStructureBase {
    "@type": "schema:BuddhistTemple";
}
/** A Buddhist temple. */
export type BuddhistTemple = BuddhistTempleLeaf | string;

interface BusinessAudienceBase extends AudienceBase {
    /** The number of employees in an organization e.g. business. */
    "schema:numberOfEmployees"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The size of the business in annual revenue. */
    "schema:yearlyRevenue"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The age of the business. */
    "schema:yearsInOperation"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface BusinessAudienceLeaf extends BusinessAudienceBase {
    "@type": "schema:BusinessAudience";
}
/** A set of characteristics belonging to businesses, e.g. who compose an item's target audience. */
export type BusinessAudience = BusinessAudienceLeaf;

interface BusinessEntityTypeLeaf extends EnumerationBase {
    "@type": "schema:BusinessEntityType";
}
/**
 * A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#Business
 * - http://purl.org/goodrelations/v1#Enduser
 * - http://purl.org/goodrelations/v1#PublicInstitution
 * - http://purl.org/goodrelations/v1#Reseller
 */
export type BusinessEntityType = BusinessEntityTypeLeaf;

interface BusinessEventLeaf extends EventBase {
    "@type": "schema:BusinessEvent";
}
/** Event type: Business event. */
export type BusinessEvent = BusinessEventLeaf;

interface BusinessFunctionLeaf extends EnumerationBase {
    "@type": "schema:BusinessFunction";
}
/**
 * The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#ConstructionInstallation
 * - http://purl.org/goodrelations/v1#Dispose
 * - http://purl.org/goodrelations/v1#LeaseOut
 * - http://purl.org/goodrelations/v1#Maintain
 * - http://purl.org/goodrelations/v1#ProvideService
 * - http://purl.org/goodrelations/v1#Repair
 * - http://purl.org/goodrelations/v1#Sell
 * - http://purl.org/goodrelations/v1#Buy
 */
export type BusinessFunction = BusinessFunctionLeaf;

interface BusOrCoachBase extends VehicleBase {
    /** The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards. */
    "schema:acrissCode"?: SchemaValue<Text>;
    /**
     * The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:roofLoad"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface BusOrCoachLeaf extends BusOrCoachBase {
    "@type": "schema:BusOrCoach";
}
/** A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury busses, usually in service for long distance travel. */
export type BusOrCoach = BusOrCoachLeaf;

interface BusReservationLeaf extends ReservationBase {
    "@type": "schema:BusReservation";
}
/**
 * A reservation for bus travel.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export type BusReservation = BusReservationLeaf;

interface BusStationLeaf extends CivicStructureBase {
    "@type": "schema:BusStation";
}
/** A bus station. */
export type BusStation = BusStationLeaf | string;

interface BusStopLeaf extends CivicStructureBase {
    "@type": "schema:BusStop";
}
/** A bus stop. */
export type BusStop = BusStopLeaf | string;

interface BusTripBase extends TripBase {
    /** The stop or station from which the bus arrives. */
    "schema:arrivalBusStop"?: SchemaValue<BusStation | BusStop | IdReference>;
    /** The name of the bus (e.g. Bolt Express). */
    "schema:busName"?: SchemaValue<Text>;
    /** The unique identifier for the bus. */
    "schema:busNumber"?: SchemaValue<Text>;
    /** The stop or station from which the bus departs. */
    "schema:departureBusStop"?: SchemaValue<BusStation | BusStop | IdReference>;
}
interface BusTripLeaf extends BusTripBase {
    "@type": "schema:BusTrip";
}
/** A trip on a commercial bus line. */
export type BusTrip = BusTripLeaf;

interface BuyActionBase extends TradeActionBase {
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "schema:seller"?: SchemaValue<Organization | Person | IdReference>;
    /**
     * 'vendor' is an earlier term for 'seller'.
     *
     * @deprecated Consider using https://schema.org/seller instead.
     */
    "schema:vendor"?: SchemaValue<Organization | Person | IdReference>;
    /**
     * The warranty promise(s) included in the offer.
     *
     * @deprecated Consider using https://schema.org/warranty instead.
     */
    "schema:warrantyPromise"?: SchemaValue<WarrantyPromise | IdReference>;
}
interface BuyActionLeaf extends BuyActionBase {
    "@type": "schema:BuyAction";
}
/** The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction. */
export type BuyAction = BuyActionLeaf;

interface CableOrSatelliteServiceLeaf extends ServiceBase {
    "@type": "schema:CableOrSatelliteService";
}
/** A service which provides access to media programming like TV or radio. Access may be via cable or satellite. */
export type CableOrSatelliteService = CableOrSatelliteServiceLeaf;

interface CafeOrCoffeeShopLeaf extends FoodEstablishmentBase {
    "@type": "schema:CafeOrCoffeeShop";
}
/** A cafe or coffee shop. */
export type CafeOrCoffeeShop = CafeOrCoffeeShopLeaf | string;

interface CampgroundBase extends CivicStructureBase, LodgingBusinessBase {
}
interface CampgroundLeaf extends CampgroundBase {
    "@type": "schema:Campground";
}
/**
 * A camping site, campsite, or {@link https://schema.org/Campground Campground} is a place used for overnight stay in the outdoors, typically containing individual {@link https://schema.org/CampingPitch CampingPitch} locations.
 *
 * In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see {@link https://en.wikipedia.org/wiki/Campsite https://en.wikipedia.org/wiki/Campsite}).
 *
 * See also the dedicated {@link /docs/hotels.html document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type Campground = CampgroundLeaf | string;

interface CampingPitchLeaf extends AccommodationBase {
    "@type": "schema:CampingPitch";
}
/**
 * A {@link https://schema.org/CampingPitch CampingPitch} is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or {@link https://schema.org/Campground Campground}.
 *
 * In British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites. (Source: Wikipedia see {@link https://en.wikipedia.org/wiki/Campsite https://en.wikipedia.org/wiki/Campsite}).
 *
 * See also the dedicated {@link /docs/hotels.html document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type CampingPitch = CampingPitchLeaf | string;

interface CanalLeaf extends PlaceBase {
    "@type": "schema:Canal";
}
/** A canal, like the Panama Canal. */
export type Canal = CanalLeaf | string;

interface CancelActionLeaf extends PlanActionBase {
    "@type": "schema:CancelAction";
}
/**
 * The act of asserting that a future event/action is no longer going to happen.
 *
 * Related actions:
 * - {@link https://schema.org/ConfirmAction ConfirmAction}: The antonym of CancelAction.
 */
export type CancelAction = CancelActionLeaf;

interface CarBase extends VehicleBase {
    /** The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards. */
    "schema:acrissCode"?: SchemaValue<Text>;
    /**
     * The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:roofLoad"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface CarLeaf extends CarBase {
    "@type": "schema:Car";
}
/** A car is a wheeled, self-powered motor vehicle used for transportation. */
export type Car = CarLeaf;

interface CarUsageTypeLeaf extends EnumerationBase {
    "@type": "schema:CarUsageType";
}
/** A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi. */
export type CarUsageType = "https://schema.org/DrivingSchoolVehicleUsage" | "schema:DrivingSchoolVehicleUsage" | "https://schema.org/RentalVehicleUsage" | "schema:RentalVehicleUsage" | "https://schema.org/TaxiVehicleUsage" | "schema:TaxiVehicleUsage" | CarUsageTypeLeaf;

interface CasinoLeaf extends LocalBusinessBase {
    "@type": "schema:Casino";
}
/** A casino. */
export type Casino = CasinoLeaf | string;

interface CategoryCodeBase extends DefinedTermBase {
    /** A short textual code that uniquely identifies the value. */
    "schema:codeValue"?: SchemaValue<Text>;
    /** A {@link https://schema.org/CategoryCodeSet CategoryCodeSet} that contains this category code. */
    "schema:inCodeSet"?: SchemaValue<CategoryCodeSet | URL | IdReference>;
}
interface CategoryCodeLeaf extends CategoryCodeBase {
    "@type": "schema:CategoryCode";
}
/** A Category Code. */
export type CategoryCode = CategoryCodeLeaf | MedicalCode;

interface CategoryCodeSetBase extends DefinedTermSetBase {
    /** A Category code contained in this code set. */
    "schema:hasCategoryCode"?: SchemaValue<CategoryCode | IdReference>;
}
interface CategoryCodeSetLeaf extends CategoryCodeSetBase {
    "@type": "schema:CategoryCodeSet";
}
/** A set of Category Code values. */
export type CategoryCodeSet = CategoryCodeSetLeaf;

interface CatholicChurchLeaf extends CivicStructureBase {
    "@type": "schema:CatholicChurch";
}
/** A Catholic church. */
export type CatholicChurch = CatholicChurchLeaf | string;

interface CDCPMDRecordBase extends ThingBase {
    /** collectiondate - Date for which patient counts are reported. */
    "schema:cvdCollectionDate"?: SchemaValue<DateTime | Text>;
    /** Name of the County of the NHSN facility that this data record applies to. Use {@link https://schema.org/cvdFacilityId cvdFacilityId} to identify the facility. To provide other details, {@link https://schema.org/healthcareReportingData healthcareReportingData} can be used on a {@link https://schema.org/Hospital Hospital} entry. */
    "schema:cvdFacilityCounty"?: SchemaValue<Text>;
    /** Identifier of the NHSN facility that this data record applies to. Use {@link https://schema.org/cvdFacilityCounty cvdFacilityCounty} to indicate the county. To provide other details, {@link https://schema.org/healthcareReportingData healthcareReportingData} can be used on a {@link https://schema.org/Hospital Hospital} entry. */
    "schema:cvdFacilityId"?: SchemaValue<Text>;
    /** numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients. */
    "schema:cvdNumBeds"?: SchemaValue<Number>;
    /** numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied. */
    "schema:cvdNumBedsOcc"?: SchemaValue<Number>;
    /** numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location. */
    "schema:cvdNumC19Died"?: SchemaValue<Number>;
    /** numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization. */
    "schema:cvdNumC19HOPats"?: SchemaValue<Number>;
    /** numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19. */
    "schema:cvdNumC19HospPats"?: SchemaValue<Number>;
    /** numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator. */
    "schema:cvdNumC19MechVentPats"?: SchemaValue<Number>;
    /** numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator. */
    "schema:cvdNumC19OFMechVentPats"?: SchemaValue<Number>;
    /** numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed. */
    "schema:cvdNumC19OverflowPats"?: SchemaValue<Number>;
    /** numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds. */
    "schema:cvdNumICUBeds"?: SchemaValue<Number>;
    /** numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied. */
    "schema:cvdNumICUBedsOcc"?: SchemaValue<Number>;
    /** numtotbeds - ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients. */
    "schema:cvdNumTotBeds"?: SchemaValue<Number>;
    /** numvent - MECHANICAL VENTILATORS: Total number of ventilators available. */
    "schema:cvdNumVent"?: SchemaValue<Number>;
    /** numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use. */
    "schema:cvdNumVentUse"?: SchemaValue<Number>;
    /** Publication date of an online listing. */
    "schema:datePosted"?: SchemaValue<Date | DateTime>;
}
interface CDCPMDRecordLeaf extends CDCPMDRecordBase {
    "@type": "schema:CDCPMDRecord";
}
/** A CDCPMDRecord is a data structure representing a record in a CDC tabular data format used for hospital data reporting. See {@link /docs/cdc-covid.html documentation} for details, and the linked CDC materials for authoritative definitions used as the source here. */
export type CDCPMDRecord = CDCPMDRecordLeaf;

interface CemeteryLeaf extends CivicStructureBase {
    "@type": "schema:Cemetery";
}
/** A graveyard. */
export type Cemetery = CemeteryLeaf | string;

interface CertificateBase extends ThingBase, NumberedBase {
    /** Identifies what kind of certificate this is. */
    "camo:contractCertificateKind"?: SchemaValue<URL | IdReference>;
}
interface CertificateLeaf extends CertificateBase {
    "@type": "camo:Certificate";
}
/** A certificate for a contract. */
export type Certificate = CertificateLeaf | MilestoneCertificate | PaymentCertificate | PerformanceCertificate | TakingOverCertificate;

interface CertificateLayoutTableBase extends ThingBase {
    /** Default preamble for advance payment certificates. */
    "camo:defaultPreambleForAdvancePaymentCertificate"?: SchemaValue<Text>;
    /** Default preamble for C&I Duties payment certificates. */
    "camo:defaultPreambleForCAndIDutiesPaymentCertificate"?: SchemaValue<Text>;
    /** Default preamble for final payment certificates. */
    "camo:defaultPreambleForFinalPaymentCertificate"?: SchemaValue<Text>;
    /** Default preamble for interim payment certificates. */
    "camo:defaultPreambleForInterimPaymentCertificate"?: SchemaValue<Text>;
    /** Default preamble for milestone certificates. */
    "camo:defaultPreambleForMilestoneCertificate"?: SchemaValue<Text>;
    /** Default preamble for perfromance certificates. */
    "camo:defaultPreambleForPerformanceCertificate"?: SchemaValue<Text>;
    /** Default preamble for taking over certificates. */
    "camo:defaultPreambleForTakingOverCertificate"?: SchemaValue<Text>;
    /** Default preamble for taking-over payment certificates. */
    "camo:defaultPreambleForTakingOverPaymentCertificate"?: SchemaValue<Text>;
    /** Enables usage of advance payment certificates. */
    "camo:enableAdvancePaymentCertificate"?: SchemaValue<Boolean>;
    /** Enables usage of C&I Duties payment certificates. */
    "camo:enableCAndIDutiesPaymentCertificate"?: SchemaValue<Boolean>;
    /** Enables usage of final payment certificates. */
    "camo:enableFinalPaymentCertificate"?: SchemaValue<Boolean>;
    /** Enables usage of interim payment certificates. */
    "camo:enableInterimPaymentCertificate"?: SchemaValue<Boolean>;
    /** Enables usage of milestone certificates. */
    "camo:enableMilestoneCertificate"?: SchemaValue<Boolean>;
    /** Enables usage of perfromance certificates. */
    "camo:enablePerformanceCertificate"?: SchemaValue<Boolean>;
    /** Enables usage of taking over certificates. */
    "camo:enableTakingOverCertificate"?: SchemaValue<Boolean>;
    /** Enables usage of taking-over payment certificates. */
    "camo:enableTakingOverPaymentCertificate"?: SchemaValue<Boolean>;
    /** Attaches a CustomCertificateLayout to a CertificateLayoutTable. */
    "camo:hasCustomCertificateLayout"?: SchemaValue<CustomCertificateLayout | IdReference>;
}
interface CertificateLayoutTableLeaf extends CertificateLayoutTableBase {
    "@type": "camo:CertificateLayoutTable";
}
/** A certificate layout table. */
export type CertificateLayoutTable = CertificateLayoutTableLeaf;

interface ChangeMathematicalEntityLeaf extends ThingBase {
    "@type": "coremo:ChangeMathematicalEntity";
}
/** A change mathematics entity. */
export type ChangeMathematicalEntity = ChangeMathematicalEntityLeaf;

interface ChangeMathematicalModelAreaLeaf extends ThingBase {
    "@type": "coremo:ChangeMathematicalModelArea";
}
/** A change mathematical model area. */
export type ChangeMathematicalModelArea = ChangeMathematicalModelAreaLeaf;

interface ChapterBase extends CreativeWorkBase {
    /** The page on which the work ends; for example "138" or "xvi". */
    "schema:pageEnd"?: SchemaValue<Integer | Text>;
    /** The page on which the work starts; for example "135" or "xiii". */
    "schema:pageStart"?: SchemaValue<Integer | Text>;
    /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
    "schema:pagination"?: SchemaValue<Text>;
}
interface ChapterLeaf extends ChapterBase {
    "@type": "schema:Chapter";
}
/** One of the sections into which a book is divided. A chapter usually has a section number or a name. */
export type Chapter = ChapterLeaf;

interface CheckActionLeaf extends ActionBase {
    "@type": "schema:CheckAction";
}
/** An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state. */
export type CheckAction = CheckActionLeaf;

interface CheckInActionLeaf extends CommunicateActionBase {
    "@type": "schema:CheckInAction";
}
/**
 * The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).
 *
 * Related actions:
 * - {@link https://schema.org/CheckOutAction CheckOutAction}: The antonym of CheckInAction.
 * - {@link https://schema.org/ArriveAction ArriveAction}: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.
 * - {@link https://schema.org/ConfirmAction ConfirmAction}: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the _start_ of a previously reserved service rather than its validity/existence.
 */
export type CheckInAction = CheckInActionLeaf;

interface CheckOutActionLeaf extends CommunicateActionBase {
    "@type": "schema:CheckOutAction";
}
/**
 * The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).
 *
 * Related actions:
 * - {@link https://schema.org/CheckInAction CheckInAction}: The antonym of CheckOutAction.
 * - {@link https://schema.org/DepartAction DepartAction}: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
 * - {@link https://schema.org/CancelAction CancelAction}: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
 */
export type CheckOutAction = CheckOutActionLeaf;

interface CheckoutPageLeaf extends WebPageBase {
    "@type": "schema:CheckoutPage";
}
/** Web page type: Checkout page. */
export type CheckoutPage = CheckoutPageLeaf;

interface ChemicalSubstanceBase extends BioChemEntityBase {
    /** The chemical composition describes the identity and relative ratio of the chemical elements that make up the substance. */
    "schema:chemicalComposition"?: SchemaValue<Text>;
    /** A role played by the BioChemEntity within a chemical context. */
    "schema:chemicalRole"?: SchemaValue<DefinedTerm | IdReference>;
    /** Intended use of the BioChemEntity by humans. */
    "schema:potentialUse"?: SchemaValue<DefinedTerm | IdReference>;
}
interface ChemicalSubstanceLeaf extends ChemicalSubstanceBase {
    "@type": "schema:ChemicalSubstance";
}
/** A chemical substance is 'a portion of matter of constant composition, composed of molecular entities of the same type or of different types' (source: {@link https://www.ebi.ac.uk/chebi/searchId.do?chebiId=59999 ChEBI:59999}). */
export type ChemicalSubstance = ChemicalSubstanceLeaf;

interface ChildCareLeaf extends LocalBusinessBase {
    "@type": "schema:ChildCare";
}
/** A Childcare center. */
export type ChildCare = ChildCareLeaf | string;

interface ChildrensEventLeaf extends EventBase {
    "@type": "schema:ChildrensEvent";
}
/** Event type: Children's event. */
export type ChildrensEvent = ChildrensEventLeaf;

interface ChooseActionBase extends ActionBase {
    /** A sub property of object. The options subject to this action. */
    "schema:actionOption"?: SchemaValue<Text | Thing | IdReference>;
    /**
     * A sub property of object. The options subject to this action.
     *
     * @deprecated Consider using https://schema.org/actionOption instead.
     */
    "schema:option"?: SchemaValue<Text | Thing | IdReference>;
}
interface ChooseActionLeaf extends ChooseActionBase {
    "@type": "schema:ChooseAction";
}
/** The act of expressing a preference from a set of options or a large or unbounded set of choices/options. */
export type ChooseAction = ChooseActionLeaf | VoteAction;

interface ChurchLeaf extends CivicStructureBase {
    "@type": "schema:Church";
}
/** A church. */
export type Church = ChurchLeaf | CatholicChurch | string;

interface CityLeaf extends PlaceBase {
    "@type": "schema:City";
}
/** A city or town. */
export type City = CityLeaf | string;

interface CityHallLeaf extends CivicStructureBase {
    "@type": "schema:CityHall";
}
/** A city hall. */
export type CityHall = CityHallLeaf | string;

interface CivicStructureBase extends PlaceBase {
    /**
     * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.
     * - Days are specified using the following two-letter combinations: `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`.
     * - Times are specified using 24:00 format. For example, 3pm is specified as `15:00`, 10am as `10:00`.
     * - Here is an example: `<time itemprop="openingHours" datetime="Tu,Th 16:00-20:00">Tuesdays and Thursdays 4-8pm</time>`.
     * - If a business is open 7 days a week, then it can be specified as `<time itemprop="openingHours" datetime="Mo-Su">Monday through Sunday, all day</time>`.
     */
    "schema:openingHours"?: SchemaValue<Text>;
}
interface CivicStructureLeaf extends CivicStructureBase {
    "@type": "schema:CivicStructure";
}
/** A public structure, such as a town hall or concert hall. */
export type CivicStructure = CivicStructureLeaf | Airport | Aquarium | Beach | BoatTerminal | Bridge | BusStation | BusStop | Campground | Cemetery | Crematorium | EducationalOrganization | EventVenue | FireStation | GovernmentBuilding | Hospital | MovieTheater | Museum | MusicVenue | Park | ParkingFacility | PerformingArtsTheater | PlaceOfWorship | Playground | PoliceStation | PublicToilet | RVPark | StadiumOrArena | SubwayStation | TaxiStand | TrainStation | Zoo | string;

interface ClaimBase extends CreativeWorkBase {
    /** Indicates an occurence of a {@link https://schema.org/Claim Claim} in some {@link https://schema.org/CreativeWork CreativeWork}. */
    "schema:appearance"?: SchemaValue<CreativeWork | IdReference>;
    /** For a {@link https://schema.org/Claim Claim} interpreted from {@link https://schema.org/MediaObject MediaObject} content sed to indicate a claim contained, implied or refined from the content of a {@link https://schema.org/MediaObject MediaObject}. */
    "schema:claimInterpreter"?: SchemaValue<Organization | Person | IdReference>;
    /** Indicates the first known occurence of a {@link https://schema.org/Claim Claim} in some {@link https://schema.org/CreativeWork CreativeWork}. */
    "schema:firstAppearance"?: SchemaValue<CreativeWork | IdReference>;
}
interface ClaimLeaf extends ClaimBase {
    "@type": "schema:Claim";
}
/**
 * A {@link https://schema.org/Claim Claim} in Schema.org represents a specific, factually-oriented claim that could be the {@link https://schema.org/itemReviewed itemReviewed} in a {@link https://schema.org/ClaimReview ClaimReview}. The content of a claim can be summarized with the {@link https://schema.org/text text} property. Variations on well known claims can have their common identity indicated via {@link https://schema.org/sameAs sameAs} links, and summarized with a {@link https://schema.org/name name}. Ideally, a {@link https://schema.org/Claim Claim} description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.
 *
 * Beyond {@link https://schema.org/ClaimReview ClaimReview}, the Claim type can be associated with related creative works - for example a {@link https://schema.org/ScholarlyArticle ScholarlyArticle} or {@link https://schema.org/Question Question} might be {@link https://schema.org/about about} some {@link https://schema.org/Claim Claim}.
 *
 * At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
 */
export type Claim = ClaimLeaf;

interface ClaimReviewBase extends ReviewBase {
    /** A short summary of the specific claims reviewed in a ClaimReview. */
    "schema:claimReviewed"?: SchemaValue<Text>;
}
interface ClaimReviewLeaf extends ClaimReviewBase {
    "@type": "schema:ClaimReview";
}
/** A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed). */
export type ClaimReview = ClaimReviewLeaf;

interface ClassBase extends ThingBase {
    /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
    "schema:supersededBy"?: SchemaValue<Class | Enumeration | Property | IdReference>;
}
interface ClassLeaf extends ClassBase {
    "@type": "schema:Class";
}
/** A class, also often called a 'Type'; equivalent to rdfs:Class. */
export type Class = ClassLeaf;

interface ClearTransformLeaf extends TransformBase {
    "@type": "coremo:ClearTransform";
}
/** A ClearTransform for a Transformable (clears child elements, but does not remove parent element). */
export type ClearTransform = ClearTransformLeaf;

interface ClipBase extends CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /** Position of the clip within an ordered group of clips. */
    "schema:clipNumber"?: SchemaValue<Integer | Text>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** The end time of the clip expressed as the number of seconds from the beginning of the work. */
    "schema:endOffset"?: SchemaValue<HyperTocEntry | Number | IdReference>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** The episode to which this clip belongs. */
    "schema:partOfEpisode"?: SchemaValue<Episode | IdReference>;
    /** The season to which this episode belongs. */
    "schema:partOfSeason"?: SchemaValue<CreativeWorkSeason | IdReference>;
    /** The series to which this episode or season belongs. */
    "schema:partOfSeries"?: SchemaValue<CreativeWorkSeries | IdReference>;
    /** The start time of the clip expressed as the number of seconds from the beginning of the work. */
    "schema:startOffset"?: SchemaValue<HyperTocEntry | Number | IdReference>;
}
interface ClipLeaf extends ClipBase {
    "@type": "schema:Clip";
}
/** A short TV or radio program or a segment/part of a program. */
export type Clip = ClipLeaf | MovieClip | RadioClip | TVClip | VideoGameClip;

interface ClothingStoreLeaf extends LocalBusinessBase {
    "@type": "schema:ClothingStore";
}
/** A clothing store. */
export type ClothingStore = ClothingStoreLeaf | string;

interface CloudOperationsModelAreaLeaf extends ThingBase {
    "@type": "coremo:CloudOperationsModelArea";
}
/** A cloud model area. */
export type CloudOperationsModelArea = CloudOperationsModelAreaLeaf;

interface CodeLeaf extends CreativeWorkBase {
    "@type": "schema:Code";
}
/**
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *
 * @deprecated Use SoftwareSourceCode instead.
 */
export type Code = CodeLeaf;

interface CodeModelsetModelAreaLeaf extends ThingBase {
    "@type": "coremo:CodeModelsetModelArea";
}
/** A code modelset model area. */
export type CodeModelsetModelArea = CodeModelsetModelAreaLeaf;

interface CodeTechnologyModelAreaLeaf extends ThingBase {
    "@type": "coremo:CodeTechnologyModelArea";
}
/** A code model area. */
export type CodeTechnologyModelArea = CodeTechnologyModelAreaLeaf;

interface CollectDamagesSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:CollectDamagesSectionPaymentDescription";
}
/** Collect damages SectionPaymentDescription that is part of a contract payment description. */
export type CollectDamagesSectionPaymentDescription = CollectDamagesSectionPaymentDescriptionLeaf;

interface CollectionBase extends CreativeWorkBase {
    /** The number of items in the {@link https://schema.org/Collection Collection}. */
    "schema:collectionSize"?: SchemaValue<Integer>;
}
interface CollectionLeaf extends CollectionBase {
    "@type": "schema:Collection";
}
/** A collection of items e.g. creative works or products. */
export type Collection = CollectionLeaf | ProductCollection;

interface CollectionPageLeaf extends WebPageBase {
    "@type": "schema:CollectionPage";
}
/** Web page type: Collection page. */
export type CollectionPage = CollectionPageLeaf | MediaGallery;

interface CollegeOrUniversityLeaf extends EducationalOrganizationBase {
    "@type": "schema:CollegeOrUniversity";
}
/** A college, university, or other third-level educational institution. */
export type CollegeOrUniversity = CollegeOrUniversityLeaf | string;

interface ComedyClubLeaf extends LocalBusinessBase {
    "@type": "schema:ComedyClub";
}
/** A comedy club. */
export type ComedyClub = ComedyClubLeaf | string;

interface ComedyEventLeaf extends EventBase {
    "@type": "schema:ComedyEvent";
}
/** Event type: Comedy event. */
export type ComedyEvent = ComedyEventLeaf;

interface ComicCoverArtBase extends VisualArtworkBase, ComicStoryBase {
}
interface ComicCoverArtLeaf extends ComicCoverArtBase {
    "@type": "schema:ComicCoverArt";
}
/** The artwork on the cover of a comic. */
export type ComicCoverArt = ComicCoverArtLeaf;

interface ComicIssueBase extends PublicationIssueBase {
    /** The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints. */
    "schema:artist"?: SchemaValue<Person | IdReference>;
    /** The individual who adds color to inked drawings. */
    "schema:colorist"?: SchemaValue<Person | IdReference>;
    /** The individual who traces over the pencil drawings in ink after pencils are complete. */
    "schema:inker"?: SchemaValue<Person | IdReference>;
    /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
    "schema:letterer"?: SchemaValue<Person | IdReference>;
    /** The individual who draws the primary narrative artwork. */
    "schema:penciler"?: SchemaValue<Person | IdReference>;
    /** A description of the variant cover for the issue, if the issue is a variant printing. For example, "Bryan Hitch Variant Cover" or "2nd Printing Variant". */
    "schema:variantCover"?: SchemaValue<Text>;
}
interface ComicIssueLeaf extends ComicIssueBase {
    "@type": "schema:ComicIssue";
}
/** Individual comic issues are serially published as part of a larger series. For the sake of consistency, even one-shot issues belong to a series comprised of a single issue. All comic issues can be uniquely identified by: the combination of the name and volume number of the series to which the issue belongs; the issue number; and the variant description of the issue (if any). */
export type ComicIssue = ComicIssueLeaf;

interface ComicSeriesLeaf extends CreativeWorkSeriesBase {
    "@type": "schema:ComicSeries";
}
/** A sequential publication of comic stories under a unifying title, for example "The Amazing Spider-Man" or "Groo the Wanderer". */
export type ComicSeries = ComicSeriesLeaf;

interface ComicStoryBase extends CreativeWorkBase {
    /** The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints. */
    "schema:artist"?: SchemaValue<Person | IdReference>;
    /** The individual who adds color to inked drawings. */
    "schema:colorist"?: SchemaValue<Person | IdReference>;
    /** The individual who traces over the pencil drawings in ink after pencils are complete. */
    "schema:inker"?: SchemaValue<Person | IdReference>;
    /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
    "schema:letterer"?: SchemaValue<Person | IdReference>;
    /** The individual who draws the primary narrative artwork. */
    "schema:penciler"?: SchemaValue<Person | IdReference>;
}
interface ComicStoryLeaf extends ComicStoryBase {
    "@type": "schema:ComicStory";
}
/** The term "story" is any indivisible, re-printable unit of a comic, including the interior stories, covers, and backmatter. Most comics have at least two stories: a cover (ComicCoverArt) and an interior story. */
export type ComicStory = ComicStoryLeaf | ComicCoverArt;

interface CommentBase extends CreativeWorkBase {
    /** The number of downvotes this question, answer or comment has received from the community. */
    "schema:downvoteCount"?: SchemaValue<Integer>;
    /** The parent of a question, answer or item in general. */
    "schema:parentItem"?: SchemaValue<Comment | IdReference>;
    /** The number of upvotes this question, answer or comment has received from the community. */
    "schema:upvoteCount"?: SchemaValue<Integer>;
}
interface CommentLeaf extends CommentBase {
    "@type": "schema:Comment";
}
/** A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the {@link https://schema.org/text text} property, and its topic via {@link https://schema.org/about about}, properties shared with all CreativeWorks. */
export type Comment = CommentLeaf | Answer | CorrectionComment | Question;

interface CommentActionBase extends CommunicateActionBase {
    /** A sub property of result. The Comment created or sent as a result of this action. */
    "schema:resultComment"?: SchemaValue<Comment | IdReference>;
}
interface CommentActionLeaf extends CommentActionBase {
    "@type": "schema:CommentAction";
}
/** The act of generating a comment about a subject. */
export type CommentAction = CommentActionLeaf;

interface CommittedSumLeaf extends ThingBase {
    "@type": "camo:CommittedSum";
}
/** A committed sum within a contract. */
export type CommittedSum = CommittedSumLeaf | Section;

interface CommonModelsetModelAreaLeaf extends ThingBase {
    "@type": "coremo:CommonModelsetModelArea";
}
/** A common modelset model area. */
export type CommonModelsetModelArea = CommonModelsetModelAreaLeaf;

interface CommunicateActionBase extends ActionBase {
    /** The subject matter of the content. */
    "schema:about"?: SchemaValue<Thing | IdReference>;
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "schema:inLanguage"?: SchemaValue<Language | Text | IdReference>;
    /**
     * A sub property of instrument. The language used on this action.
     *
     * @deprecated Consider using https://schema.org/inLanguage instead.
     */
    "schema:language"?: SchemaValue<Language | IdReference>;
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface CommunicateActionLeaf extends CommunicateActionBase {
    "@type": "schema:CommunicateAction";
}
/** The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation. */
export type CommunicateAction = CommunicateActionLeaf | AskAction | CheckInAction | CheckOutAction | CommentAction | InformAction | InviteAction | ReplyAction | ShareAction;

interface CommunicationEntityLeaf extends ThingBase {
    "@type": "coremo:CommunicationEntity";
}
/** A communication entity */
export type CommunicationEntity = CommunicationEntityLeaf | CommunityCommunicationEntity | EducationCommunicationEntity | PipelineCommunicationEntity | PublishingCommunicationEntity;

interface CommunicationModelAreaLeaf extends ThingBase {
    "@type": "coremo:CommunicationModelArea";
}
/** A communication model area. */
export type CommunicationModelArea = CommunicationModelAreaLeaf | CommunityCommunicationModelArea | EducationCommunicationModelArea | PipelineCommunicationModelArea | PublishingCommunicationModelArea;

interface CommunityCommunicationEntityLeaf extends ThingBase {
    "@type": "coremo:CommunityCommunicationEntity";
}
/** A community entity */
export type CommunityCommunicationEntity = CommunityCommunicationEntityLeaf;

interface CommunityCommunicationModelAreaLeaf extends ThingBase {
    "@type": "coremo:CommunityCommunicationModelArea";
}
/** A community model area. */
export type CommunityCommunicationModelArea = CommunityCommunicationModelAreaLeaf;

interface CompleteDataFeedLeaf extends DataFeedBase {
    "@type": "schema:CompleteDataFeed";
}
/**
 * A {@link https://schema.org/CompleteDataFeed CompleteDataFeed} is a {@link https://schema.org/DataFeed DataFeed} whose standard representation includes content for every item currently in the feed.
 *
 * This is the equivalent of Atom's element as defined in Feed Paging and Archiving {@link https://tools.ietf.org/html/rfc5005 RFC 5005}, For example (and as defined for Atom), when using data from a feed that represents a collection of items that varies over time (e.g. "Top Twenty Records") there is no need to have newer entries mixed in alongside older, obsolete entries. By marking this feed as a CompleteDataFeed, old entries can be safely discarded when the feed is refreshed, since we can assume the feed has provided descriptions for all current items.
 */
export type CompleteDataFeed = CompleteDataFeedLeaf;

interface ComplianceVerificationSystemLeaf extends ThingBase {
    "@type": "camo:ComplianceVerificationSystem";
}
/** The ComplianceVerificationSystem. */
export type ComplianceVerificationSystem = ComplianceVerificationSystemLeaf;

interface ComponentContractSemanticPoolLeaf extends ContractSemanticPoolBase {
    "@type": "camo:ComponentContractSemanticPool";
}
/** A contract component semantic pool. */
export type ComponentContractSemanticPool = ComponentContractSemanticPoolLeaf;

interface CompoundPriceSpecificationBase extends PriceSpecificationBase {
    /** This property links to all {@link https://schema.org/UnitPriceSpecification UnitPriceSpecification} nodes that apply in parallel for the {@link https://schema.org/CompoundPriceSpecification CompoundPriceSpecification} node. */
    "schema:priceComponent"?: SchemaValue<UnitPriceSpecification | IdReference>;
    /** Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the {@link https://schema.org/priceType priceType} property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration. */
    "schema:priceType"?: SchemaValue<PriceTypeEnumeration | Text | IdReference>;
}
interface CompoundPriceSpecificationLeaf extends CompoundPriceSpecificationBase {
    "@type": "schema:CompoundPriceSpecification";
}
/** A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning"). */
export type CompoundPriceSpecification = CompoundPriceSpecificationLeaf;

interface ComputerLanguageLeaf extends ThingBase {
    "@type": "schema:ComputerLanguage";
}
/** This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the {@link https://schema.org/Language Language} type. */
export type ComputerLanguage = ComputerLanguageLeaf;

interface ComputerStoreLeaf extends LocalBusinessBase {
    "@type": "schema:ComputerStore";
}
/** A computer store. */
export type ComputerStore = ComputerStoreLeaf | string;

interface ComputeTechnologyModelAreaLeaf extends ThingBase {
    "@type": "coremo:ComputeTechnologyModelArea";
}
/** A compute model area. */
export type ComputeTechnologyModelArea = ComputeTechnologyModelAreaLeaf;

interface ConceptLeaf extends ThingBase {
    "@type": "coremo:Concept";
}
/** A resource with a characteristic. */
export type Concept = ConceptLeaf | Abstractable | DateStampable | DateStampRange | Enableable | Inheritable | Ordered | Prioritizable | Responsible | Templatable | Transformable;

interface ConfirmActionLeaf extends InformActionBase {
    "@type": "schema:ConfirmAction";
}
/**
 * The act of notifying someone that a future event/action is going to happen as expected.
 *
 * Related actions:
 * - {@link https://schema.org/CancelAction CancelAction}: The antonym of ConfirmAction.
 */
export type ConfirmAction = ConfirmActionLeaf;

interface ConsortiumLeaf extends OrganizationBase {
    "@type": "schema:Consortium";
}
/** A Consortium is a membership {@link https://schema.org/Organization Organization} whose members are typically Organizations. */
export type Consortium = ConsortiumLeaf | string;

interface ConsumeActionBase extends ActionBase {
    /** A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed. */
    "schema:actionAccessibilityRequirement"?: SchemaValue<ActionAccessSpecification | IdReference>;
    /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
    "schema:expectsAcceptanceOf"?: SchemaValue<Offer | IdReference>;
}
interface ConsumeActionLeaf extends ConsumeActionBase {
    "@type": "schema:ConsumeAction";
}
/** The act of ingesting information/resources/food. */
export type ConsumeAction = ConsumeActionLeaf | DrinkAction | EatAction | InstallAction | ListenAction | ReadAction | UseAction | ViewAction | WatchAction;

interface ContactPageLeaf extends WebPageBase {
    "@type": "schema:ContactPage";
}
/** Web page type: Contact page. */
export type ContactPage = ContactPageLeaf;

interface ContactPointBase extends ThingBase {
    /** The geographic area where a service or offered item is provided. */
    "schema:areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference>;
    /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/inLanguage inLanguage} */
    "schema:availableLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers). */
    "schema:contactOption"?: SchemaValue<ContactPointOption | IdReference>;
    /** A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point. */
    "schema:contactType"?: SchemaValue<Text>;
    /** Email address. */
    "schema:email"?: SchemaValue<Text>;
    /** The fax number. */
    "schema:faxNumber"?: SchemaValue<Text>;
    /** The hours during which this service or contact is available. */
    "schema:hoursAvailable"?: SchemaValue<OpeningHoursSpecification | IdReference>;
    /** The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones"). */
    "schema:productSupported"?: SchemaValue<Product | Text | IdReference>;
    /**
     * The geographic area where the service is provided.
     *
     * @deprecated Consider using https://schema.org/areaServed instead.
     */
    "schema:serviceArea"?: SchemaValue<AdministrativeArea | GeoShape | Place | IdReference>;
    /** The telephone number. */
    "schema:telephone"?: SchemaValue<Text>;
}
interface ContactPointLeaf extends ContactPointBase {
    "@type": "schema:ContactPoint";
}
/** A contact point—for example, a Customer Complaints department. */
export type ContactPoint = ContactPointLeaf | PostalAddress;

interface ContactPointOptionLeaf extends EnumerationBase {
    "@type": "schema:ContactPointOption";
}
/** Enumerated options related to a ContactPoint. */
export type ContactPointOption = "https://schema.org/HearingImpairedSupported" | "schema:HearingImpairedSupported" | "https://schema.org/TollFree" | "schema:TollFree" | ContactPointOptionLeaf;

interface ContinentLeaf extends PlaceBase {
    "@type": "schema:Continent";
}
/** One of the continents (for example, Europe or Africa). */
export type Continent = ContinentLeaf | string;

interface ContractBase extends ThingBase, NumberedBase, TemplatableBase {
}
interface ContractLeaf extends ContractBase {
    "@type": "camo:Contract";
}
/** The contract. */
export type Contract = ContractLeaf;

interface ContractActorTableBase extends RootContractDataEntityBase {
    /** An actor associated with this contract data. */
    "camo:hasContractActor"?: SchemaValue<URL | IdReference>;
}
interface ContractActorTableLeaf extends ContractActorTableBase {
    "@type": "camo:ContractActorTable";
}
/** A contract actor table. */
export type ContractActorTable = ContractActorTableLeaf;

interface ContractAgreementLeaf extends ThingBase {
    "@type": "camo:ContractAgreement";
}
/** The contract aggreement. */
export type ContractAgreement = ContractAgreementLeaf;

interface ContractCertificateEntityLeaf extends ThingBase {
    "@type": "camo:ContractCertificateEntity";
}
/** A contract certificate entity. */
export type ContractCertificateEntity = ContractCertificateEntityLeaf | Certificate;

interface ContractCertificateSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a certificate to its semantic pool. */
    "camo:hasCertificate"?: SchemaValue<Certificate | IdReference>;
}
interface ContractCertificateSemanticPoolLeaf extends ContractCertificateSemanticPoolBase {
    "@type": "camo:ContractCertificateSemanticPool";
}
/** A contract certificate semantic pool. */
export type ContractCertificateSemanticPool = ContractCertificateSemanticPoolLeaf;

interface ContractClaimLeaf extends ThingBase {
    "@type": "camo:ContractClaim";
}
/** A ContractClaim. */
export type ContractClaim = ContractClaimLeaf;

interface ContractClaimEntityLeaf extends ThingBase {
    "@type": "camo:ContractClaimEntity";
}
/** A contract claim entity. */
export type ContractClaimEntity = ContractClaimEntityLeaf | ContractClaim;

interface ContractClaimSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a root entity to its semantic pool. */
    "camo:hasContractClaim"?: SchemaValue<ContractClaim | IdReference>;
}
interface ContractClaimSemanticPoolLeaf extends ContractClaimSemanticPoolBase {
    "@type": "camo:ContractClaimSemanticPool";
}
/** A contract claim semantic pool. */
export type ContractClaimSemanticPool = ContractClaimSemanticPoolLeaf;

interface ContractComponentLeaf extends ThingBase {
    "@type": "camo:ContractComponent";
}
/** A component of the contract (such as contract agreement or schedules). */
export type ContractComponent = ContractComponentLeaf;

interface ContractComponentEntityLeaf extends ThingBase {
    "@type": "camo:ContractComponentEntity";
}
/** A contract component entity */
export type ContractComponentEntity = ContractComponentEntityLeaf | BillOfQuantities | Contract | ContractAgreement | ContractComponent | ContractConditions | ContractParties | ContractParty | ContractSchedule | ContractSpecification | ContractTender | DAABAgreement | JVUndertaking | LetterOfAcceptance | LetterOfTender;

interface ContractConditionsLeaf extends ThingBase {
    "@type": "camo:ContractConditions";
}
/** The contract conditions. */
export type ContractConditions = ContractConditionsLeaf;

interface ContractConfigurationBase extends ThingBase, NumberedBase, TemplatableBase {
    /** Attaches a root entity to its semantic pool. */
    "camo:hasContractLayoutTable"?: SchemaValue<ContractLayoutTable | URL | IdReference>;
    /** The policy table associated with this ContractConfiguration. */
    "camo:hasPolicyTable"?: SchemaValue<URL | IdReference>;
    /** The regional table associated with this ContractConfiguration. */
    "camo:hasRegionalTable"?: SchemaValue<URL | IdReference>;
    /** The development to which this contract belongs. */
    "camo:memberOfDevelopment"?: SchemaValue<URL | IdReference>;
}
interface ContractConfigurationLeaf extends ContractConfigurationBase {
    "@type": "camo:ContractConfiguration";
}
/** Configuration of a contract. */
export type ContractConfiguration = ContractConfigurationLeaf;

interface ContractConfigurationEntityLeaf extends ThingBase {
    "@type": "camo:ContractConfigurationEntity";
}
/** A contract configuration entity */
export type ContractConfigurationEntity = ContractConfigurationEntityLeaf | ContractConfiguration;

interface ContractConfigurationSemanticPoolLeaf extends ContractSemanticPoolBase {
    "@type": "camo:ContractConfigurationSemanticPool";
}
/** A contract configuration semantic pool. */
export type ContractConfigurationSemanticPool = ContractConfigurationSemanticPoolLeaf;

interface ContractDAABLeaf extends ThingBase {
    "@type": "camo:ContractDAAB";
}
/** The Dispute Avoidance / Adjudication Board for a contract. */
export type ContractDAAB = ContractDAABLeaf;

interface ContractDataEntityLeaf extends ThingBase {
    "@type": "camo:ContractDataEntity";
}
/** A contract data entity */
export type ContractDataEntity = ContractDataEntityLeaf | CommittedSum | Milestone | PaymentStep | ProvisionalSum | RootContractDataEntity | SectionTable;

interface ContractDataSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a root entity to its semantic pool. */
    "camo:hasRootContractDataEntity"?: SchemaValue<RootContractDataEntity | IdReference>;
}
interface ContractDataSemanticPoolLeaf extends ContractDataSemanticPoolBase {
    "@type": "camo:ContractDataSemanticPool";
}
/** A contract data semantic pool. */
export type ContractDataSemanticPool = ContractDataSemanticPoolLeaf;

interface ContractDateTableBase extends RootContractDataEntityBase {
    /** The Base Date of this contract [See definition in FIDIC 1.1]. */
    "camo:contractBaseDate"?: SchemaValue<Date>;
    /** The Time For Completion of this contract, measured in days [See definition in FIDIC 1.1]. */
    "camo:contractTimeForCompletion"?: SchemaValue<Integer>;
    /** The Defects Notification Period (DNP) of this contract, measured in days [See definition in FIDIC 1.1]. */
    "camo:defectsNotificationPeriod"?: SchemaValue<Integer>;
}
interface ContractDateTableLeaf extends ContractDateTableBase {
    "@type": "camo:ContractDateTable";
}
/** Assortment of dates relate to a contract. */
export type ContractDateTable = ContractDateTableLeaf;

interface ContractDevelopmentEntityLeaf extends ThingBase {
    "@type": "camo:ContractDevelopmentEntity";
}
/** A contract development entity */
export type ContractDevelopmentEntity = ContractDevelopmentEntityLeaf;

interface ContractDevelopmentSemanticPoolLeaf extends ContractSemanticPoolBase {
    "@type": "camo:ContractDevelopmentSemanticPool";
}
/** A contract development semantic pool. */
export type ContractDevelopmentSemanticPool = ContractDevelopmentSemanticPoolLeaf;

interface ContractDisputeEntityLeaf extends ThingBase {
    "@type": "camo:ContractDisputeEntity";
}
/** A contract dispute entity. */
export type ContractDisputeEntity = ContractDisputeEntityLeaf | ContractDAAB | Dispute | DisputeNotification;

interface ContractDisputeSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a root entity to its semantic pool. */
    "camo:hasDispute"?: SchemaValue<Dispute | IdReference>;
}
interface ContractDisputeSemanticPoolLeaf extends ContractDisputeSemanticPoolBase {
    "@type": "camo:ContractDisputeSemanticPool";
}
/** A contract dispute semantic pool. */
export type ContractDisputeSemanticPool = ContractDisputeSemanticPoolLeaf;

interface ContractDocumentLeaf extends ThingBase {
    "@type": "camo:ContractDocument";
}
/** A document that forms part of the contract. */
export type ContractDocument = ContractDocumentLeaf | ContractDrawings | ContractTests;

interface ContractDrawingsLeaf extends ThingBase {
    "@type": "camo:ContractDrawings";
}
/** The contract drawings. */
export type ContractDrawings = ContractDrawingsLeaf;

interface ContractEntityLeaf extends ThingBase {
    "@type": "camo:ContractEntity";
}
/** A contract entity */
export type ContractEntity = ContractEntityLeaf | ContractCertificateEntity | ContractClaimEntity | ContractComponentEntity | ContractConfigurationEntity | ContractDataEntity | ContractDevelopmentEntity | ContractDisputeEntity | ContractInstructionEntity | ContractLayoutEntity | ContractModel | ContractNoticeEntity | ContractPaymentEntity | ContractRequestEntity | ContractSemanticPool | ContractSharedEntity | ContractStatementEntity | ContractTerminologyEntity | ContractVariationEntity;

interface ContractFinalStatementLeaf extends ContractStatementBase {
    "@type": "camo:ContractFinalStatement";
}
/** A Contract Final Statement. */
export type ContractFinalStatement = ContractFinalStatementLeaf;

interface ContractInstructionEntityLeaf extends ThingBase {
    "@type": "camo:ContractInstructionEntity";
}
/** A contract instruction entity. */
export type ContractInstructionEntity = ContractInstructionEntityLeaf;

interface ContractInstructionSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a root entity to its semantic pool. */
    "camo:hasContractInstruction"?: SchemaValue<never>;
}
interface ContractInstructionSemanticPoolLeaf extends ContractInstructionSemanticPoolBase {
    "@type": "camo:ContractInstructionSemanticPool";
}
/** A contract instruction semantic pool. */
export type ContractInstructionSemanticPool = ContractInstructionSemanticPoolLeaf;

interface ContractLayoutEntityLeaf extends ThingBase {
    "@type": "camo:ContractLayoutEntity";
}
/** A contract layout entity */
export type ContractLayoutEntity = ContractLayoutEntityLeaf | AdvancePaymentLayoutTable | CertificateLayoutTable | ContractLayoutTable | ContractTerminologyLayoutTable | CurrencyLayoutTable | CustomCertificateLayout | FileNamingLayoutTable | NoticeLayout | NoticeLayoutTable | NumberingLayoutTable | PlantAndMaterialsLayoutTable | RetentionMoneyTable | SyntheticCurrency;

interface ContractLayoutSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a root entity to its semantic pool. */
    "camo:hasContractLayoutTable"?: SchemaValue<ContractLayoutTable | URL | IdReference>;
}
interface ContractLayoutSemanticPoolLeaf extends ContractLayoutSemanticPoolBase {
    "@type": "camo:ContractLayoutSemanticPool";
}
/** A contract layout semantic pool. */
export type ContractLayoutSemanticPool = ContractLayoutSemanticPoolLeaf;

interface ContractLayoutTableBase extends ThingBase {
    /** Attaches a AdvancePaymentLayoutTable to a ContractLayoutTable. */
    "camo:hasAdvancePaymentLayoutTable"?: SchemaValue<AdvancePaymentLayoutTable | IdReference>;
    /** The segment name to use for a variaton attachment file. */
    "camo:hasContractTerminologyLayoutTable"?: SchemaValue<ContractTerminologyLayoutTable | IdReference>;
    /** Attaches a CurrencyLayoutTable to a ContractLayout. */
    "camo:hasCurrencyLayoutTable"?: SchemaValue<CurrencyLayoutTable | IdReference>;
    /** The segment name to use for a variaton attachment file. */
    "camo:hasFileNamingLayoutTable"?: SchemaValue<FileNamingLayoutTable | IdReference>;
    /** Attaches a NoticeLayoutTable to a ContractLayoutTable. */
    "camo:hasNoticeLayoutTable"?: SchemaValue<NoticeLayoutTable | IdReference>;
    /** Attaches a NumberingLayoutTable to a ContractLayoutTable. */
    "camo:hasNumberingLayoutTable"?: SchemaValue<NumberingLayoutTable | IdReference>;
    /** Attaches a PlantAndMaterialsLayoutTable to a ContractLayoutTable. */
    "camo:hasPlantAndMaterialsLayoutTable"?: SchemaValue<PlantAndMaterialsLayoutTable | IdReference>;
    /** Attaches a RetentionMoneyTable to a ContractLayoutTable. */
    "camo:hasRetentionMoneyTable"?: SchemaValue<RetentionMoneyTable | IdReference>;
}
interface ContractLayoutTableLeaf extends ContractLayoutTableBase {
    "@type": "camo:ContractLayoutTable";
}
/** A contract layout table. */
export type ContractLayoutTable = ContractLayoutTableLeaf;

interface ContractModelBase extends ThingBase, CreativeWorkBase {
    /** A semantic pool within a contract model. */
    "camo:hasContractSemanticPool"?: SchemaValue<ContractSemanticPool | IdReference>;
}
interface ContractModelLeaf extends ContractModelBase {
    "@type": "camo:ContractModel";
}
/** A contract model */
export type ContractModel = ContractModelLeaf;

interface ContractNoticeBase extends ThingBase, NumberedBase {
    /** The kind of this notice (see Contract Design). */
    "camo:contractNoticeKind"?: SchemaValue<URL | IdReference>;
    /** The body text of the notice. */
    "camo:noticeBodyContent"?: SchemaValue<Text | URL | IdReference>;
    /** The data behind the notice body. */
    "camo:noticeBodyData"?: SchemaValue<URL | IdReference>;
    /** The actor to which a copy of the notice is destined for. */
    "camo:noticeCopyToActor"?: SchemaValue<URL | IdReference>;
    /** The actor sending the notice. */
    "camo:noticeFromActor"?: SchemaValue<URL | IdReference>;
    /** The relevant date / date range. */
    "camo:noticeRefersToDate"?: SchemaValue<Date | DateStampRange | IdReference>;
    /** The location relevant to this notice. */
    "camo:noticeRefersToLocation"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference>;
    /** The actor to which the notice is destined for. */
    "camo:noticeToActor"?: SchemaValue<URL | IdReference>;
    /** The relevant clause/subclause from the contract. */
    "camo:refersToContractClauseSubclause"?: SchemaValue<Text>;
    /** The relevant part. */
    "camo:refersToPart"?: SchemaValue<Text>;
    /** The relevant section. */
    "camo:refersToSection"?: SchemaValue<Text>;
}
interface ContractNoticeLeaf extends ContractNoticeBase {
    "@type": "camo:ContractNotice";
}
/** A contract notice. */
export type ContractNotice = ContractNoticeLeaf | NoticeOfDissastification | NoticeOfNoObjection;

interface ContractNoticeEntityLeaf extends ThingBase {
    "@type": "camo:ContractNoticeEntity";
}
/** A contract notice entity. */
export type ContractNoticeEntity = ContractNoticeEntityLeaf | ContractNotice;

interface ContractNoticeSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a root entity to its semantic pool. */
    "camo:hasContractNotice"?: SchemaValue<ContractNotice | IdReference>;
}
interface ContractNoticeSemanticPoolLeaf extends ContractNoticeSemanticPoolBase {
    "@type": "camo:ContractNoticeSemanticPool";
}
/** A contract notice semantic pool. */
export type ContractNoticeSemanticPool = ContractNoticeSemanticPoolLeaf;

interface ContractPartLeaf extends RootContractDataEntityBase {
    "@type": "camo:ContractPart";
}
/** A part of a contract's Works or Section(s), as defined in FIDIC 1.1. */
export type ContractPart = ContractPartLeaf;

interface ContractPartiesLeaf extends ThingBase {
    "@type": "camo:ContractParties";
}
/** The Contract Parties. */
export type ContractParties = ContractPartiesLeaf;

interface ContractPartTableBase extends RootContractDataEntityBase {
    /** Attaches a contract part to its contract part table. */
    "camo:hasContractPart"?: SchemaValue<ContractPart | IdReference>;
}
interface ContractPartTableLeaf extends ContractPartTableBase {
    "@type": "camo:ContractPartTable";
}
/** Represents a contract part. */
export type ContractPartTable = ContractPartTableLeaf;

interface ContractPartyLeaf extends ThingBase {
    "@type": "camo:ContractParty";
}
/** A Contract Party. */
export type ContractParty = ContractPartyLeaf;

interface ContractPaymentDescriptionBase extends ThingBase {
    /** Attaches a section payment description to its contract payment description. */
    "camo:hasContractPaymentDescriptionPart"?: SchemaValue<ContractPaymentDescriptionPart | IdReference>;
}
interface ContractPaymentDescriptionLeaf extends ContractPaymentDescriptionBase {
    "@type": "camo:ContractPaymentDescription";
}
/** A contract payment description. */
export type ContractPaymentDescription = ContractPaymentDescriptionLeaf;

interface ContractPaymentDescriptionPartLeaf extends ThingBase {
    "@type": "camo:ContractPaymentDescriptionPart";
}
/** A contract payment description part. */
export type ContractPaymentDescriptionPart = ContractPaymentDescriptionPartLeaf | CrossCurrencyPairPaymentDescription | GeneralPaymentDescription | PlantAndMaterialsShippedDeliveredPaymentDescription | SectionPaymentDescription;

interface ContractPaymentEntityLeaf extends ThingBase {
    "@type": "camo:ContractPaymentEntity";
}
/** A contract payment entity */
export type ContractPaymentEntity = ContractPaymentEntityLeaf | Payment;

interface ContractPaymentSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a Payment to its semantic pool. */
    "camo:hasRootContractPaymentEntity"?: SchemaValue<Payment | IdReference>;
}
interface ContractPaymentSemanticPoolLeaf extends ContractPaymentSemanticPoolBase {
    "@type": "camo:ContractPaymentSemanticPool";
}
/** A contract payment semantic pool (to explain in detail what a payment represents). */
export type ContractPaymentSemanticPool = ContractPaymentSemanticPoolLeaf;

interface ContractProgrammeLeaf extends ThingBase {
    "@type": "camo:ContractProgramme";
}
/** A contract programme. */
export type ContractProgramme = ContractProgrammeLeaf;

interface ContractRequestBase extends ThingBase, NumberedBase {
}
interface ContractRequestLeaf extends ContractRequestBase {
    "@type": "camo:ContractRequest";
}
/** A request related to a contract. */
export type ContractRequest = ContractRequestLeaf;

interface ContractRequestEntityLeaf extends ThingBase {
    "@type": "camo:ContractRequestEntity";
}
/** A contract request entity */
export type ContractRequestEntity = ContractRequestEntityLeaf | ContractRequest;

interface ContractRequestSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a request to its semantic pool. */
    "camo:hasRequest"?: SchemaValue<ContractRequest | IdReference>;
}
interface ContractRequestSemanticPoolLeaf extends ContractRequestSemanticPoolBase {
    "@type": "camo:ContractRequestSemanticPool";
}
/** A contract request semantic pool. */
export type ContractRequestSemanticPool = ContractRequestSemanticPoolLeaf;

interface ContractReviewLeaf extends ThingBase {
    "@type": "camo:ContractReview";
}
/** A review. */
export type ContractReview = ContractReviewLeaf;

interface ContractScheduleLeaf extends ThingBase {
    "@type": "camo:ContractSchedule";
}
/** The Schedules. */
export type ContractSchedule = ContractScheduleLeaf;

interface ContractSemanticPoolBase extends ThingBase, CreativeWorkBase {
}
interface ContractSemanticPoolLeaf extends ContractSemanticPoolBase {
    "@type": "camo:ContractSemanticPool";
}
/** A contract semantic pool. */
export type ContractSemanticPool = ContractSemanticPoolLeaf | ComponentContractSemanticPool | ContractCertificateSemanticPool | ContractClaimSemanticPool | ContractConfigurationSemanticPool | ContractDataSemanticPool | ContractDevelopmentSemanticPool | ContractDisputeSemanticPool | ContractInstructionSemanticPool | ContractLayoutSemanticPool | ContractNoticeSemanticPool | ContractPaymentSemanticPool | ContractRequestSemanticPool | ContractStatementSemanticPool | ContractVariationSemanticPool;

interface ContractSharedEntityLeaf extends ThingBase {
    "@type": "camo:ContractSharedEntity";
}
/** A contract shared entity */
export type ContractSharedEntity = ContractSharedEntityLeaf | AdditionContractPaymentDescriptionItem | AdditionsPaymentDescriptionTable | ContractPaymentDescription | ContractPaymentDescriptionPart | CustomsAndImportDutiesEntry | CustomsAndImportDutiesTable | DeductionPaymentDescriptionItem | DeductionsPaymentDescriptionTable | SubsectionPaymentDescriptionDescription;

interface ContractSpecificationLeaf extends ThingBase {
    "@type": "camo:ContractSpecification";
}
/** The contract specification. */
export type ContractSpecification = ContractSpecificationLeaf;

interface ContractStatementBase extends ThingBase, NumberedBase {
    /** Contract payment to use. */
    "camo:contractPaymentToUse"?: SchemaValue<Integer | Integer>;
    /** Most recent core contract data revision. */
    "camo:contractstatementBasedOnCoreContractDataRevision"?: SchemaValue<Integer>;
    /** Most recent varying contract data (Variation). */
    "camo:contractstatementBasedOnVaryingContractData"?: SchemaValue<Text>;
    /** The revision of most recent varying contract data (Variation). */
    "camo:contractstatementBasedOnVaryingContractDataRevision"?: SchemaValue<Integer>;
    /** Identifies what kind of statement this is (useful for specialist statements with custom names, maps to statement layout in Contract Layout). */
    "camo:contractstatementKind"?: SchemaValue<URL | IdReference>;
}
interface ContractStatementLeaf extends ContractStatementBase {
    "@type": "camo:ContractStatement";
}
/** A Statement to be sent by the conteactor to the engineer (Red/Yellow Book) or employer's representative (Silver Book). */
export type ContractStatement = ContractStatementLeaf | AdvanceStatement | ContractFinalStatement | CustomsAndImportDutiesStatement | FinalStatement | InterimStatement | TakingOverStatement;

interface ContractStatementEntityLeaf extends ThingBase {
    "@type": "camo:ContractStatementEntity";
}
/** A contract statement entity. */
export type ContractStatementEntity = ContractStatementEntityLeaf | ContractStatement;

interface ContractStatementSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a Statement and contract payment to its semantic pool. */
    "camo:hasRootContractStatementEntity"?: SchemaValue<ContractStatement | IdReference>;
}
interface ContractStatementSemanticPoolLeaf extends ContractStatementSemanticPoolBase {
    "@type": "camo:ContractStatementSemanticPool";
}
/** A contract statement semantic pool. */
export type ContractStatementSemanticPool = ContractStatementSemanticPoolLeaf;

interface ContractTenderLeaf extends ThingBase {
    "@type": "camo:ContractTender";
}
/** The contract tender. */
export type ContractTender = ContractTenderLeaf;

interface ContractTerminologyEntityLeaf extends ThingBase {
    "@type": "camo:ContractTerminologyEntity";
}
/** A terminology contract entity */
export type ContractTerminologyEntity = ContractTerminologyEntityLeaf | AdvancePaymentGuarantee | ComplianceVerificationSystem | ContractDocument | ContractProgramme | ContractReview | ContractWorks | DelayDamages | ExceptionalEvent | ExtensionOfTime | PerformanceDamages | PerformanceSecurity | QualityManagementSystem;

interface ContractTerminologyLayoutTableBase extends ThingBase {
    /** The text to use in footer of a certificate attachment (section view). */
    "camo:certificateAttachmentSectionFooter"?: SchemaValue<Text>;
    /** The text to use in footer of a certificate attachment (subsection view). */
    "camo:certificateAttachmentSubsectionFooter"?: SchemaValue<Text>;
    /** The text to use in the top right corner for a certficate attachment. */
    "camo:certificateAttachmentTopRightCorner"?: SchemaValue<Text>;
    /** The text to use in the top right corner for a variation attachment. */
    "camo:variationAttachmentTopRightCorner"?: SchemaValue<Text>;
}
interface ContractTerminologyLayoutTableLeaf extends ContractTerminologyLayoutTableBase {
    "@type": "camo:ContractTerminologyLayoutTable";
}
/** Terminology for contract terms. */
export type ContractTerminologyLayoutTable = ContractTerminologyLayoutTableLeaf;

interface ContractTestsLeaf extends ThingBase {
    "@type": "camo:ContractTests";
}
/** The contract tests. */
export type ContractTests = ContractTestsLeaf | ContractTestsAfterCompletion | ContractTestsOnCompletion;

interface ContractTestsAfterCompletionLeaf extends ThingBase {
    "@type": "camo:ContractTestsAfterCompletion";
}
/** The contract tests after completion. */
export type ContractTestsAfterCompletion = ContractTestsAfterCompletionLeaf;

interface ContractTestsOnCompletionLeaf extends ThingBase {
    "@type": "camo:ContractTestsOnCompletion";
}
/** The contract tests on completion. */
export type ContractTestsOnCompletion = ContractTestsOnCompletionLeaf;

interface ContractVariationEntityLeaf extends ThingBase {
    "@type": "camo:ContractVariationEntity";
}
/** A contract variation entity. */
export type ContractVariationEntity = ContractVariationEntityLeaf | Variation;

interface ContractVariationSemanticPoolBase extends ContractSemanticPoolBase {
    /** Attaches a root entity to its semantic pool. */
    "camo:hasVariation"?: SchemaValue<Variation | IdReference>;
}
interface ContractVariationSemanticPoolLeaf extends ContractVariationSemanticPoolBase {
    "@type": "camo:ContractVariationSemanticPool";
}
/** A contract variation semantic pool. */
export type ContractVariationSemanticPool = ContractVariationSemanticPoolLeaf;

interface ContractWorksLeaf extends ThingBase {
    "@type": "camo:ContractWorks";
}
/** The Works. */
export type ContractWorks = ContractWorksLeaf | PermanentWorks | TemporaryWorks;

interface ControlActionLeaf extends ActionBase {
    "@type": "schema:ControlAction";
}
/** An agent controls a device or application. */
export type ControlAction = ControlActionLeaf | ActivateAction | DeactivateAction | ResumeAction | SuspendAction;

interface ConvenienceStoreLeaf extends LocalBusinessBase {
    "@type": "schema:ConvenienceStore";
}
/** A convenience store. */
export type ConvenienceStore = ConvenienceStoreLeaf | string;

interface ConversationLeaf extends CreativeWorkBase {
    "@type": "schema:Conversation";
}
/** One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties. */
export type Conversation = ConversationLeaf;

interface CookActionBase extends ActionBase {
    /** A sub property of location. The specific food establishment where the action occurred. */
    "schema:foodEstablishment"?: SchemaValue<FoodEstablishment | Place | IdReference>;
    /** A sub property of location. The specific food event where the action occurred. */
    "schema:foodEvent"?: SchemaValue<FoodEvent | IdReference>;
    /** A sub property of instrument. The recipe/instructions used to perform the action. */
    "schema:recipe"?: SchemaValue<Recipe | IdReference>;
}
interface CookActionLeaf extends CookActionBase {
    "@type": "schema:CookAction";
}
/** The act of producing/preparing food. */
export type CookAction = CookActionLeaf;

interface CoreMathematicalEntityLeaf extends ThingBase {
    "@type": "coremo:CoreMathematicalEntity";
}
/** A core entity. */
export type CoreMathematicalEntity = CoreMathematicalEntityLeaf | MathematicalExpression | MathematicalFormula | MathematicalObject | MathematicalOperation | MathematicalProperty | MathematicalVariable | SemanticModelArea | Transform;

interface CorporateEntityLeaf extends ThingBase {
    "@type": "coremo:CorporateEntity";
}
/** A corporate entity */
export type CorporateEntity = CorporateEntityLeaf | ActivityCorporateEntity;

interface CorporateModelAreaLeaf extends ThingBase {
    "@type": "coremo:CorporateModelArea";
}
/** A corporate model area. */
export type CorporateModelArea = CorporateModelAreaLeaf | ActivityCorporateModelArea;

interface CorporationBase extends OrganizationBase {
    /** The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022. */
    "schema:tickerSymbol"?: SchemaValue<Text>;
}
interface CorporationLeaf extends CorporationBase {
    "@type": "schema:Corporation";
}
/** Organization: A business corporation. */
export type Corporation = CorporationLeaf | string;

interface CorrectionCommentLeaf extends CommentBase {
    "@type": "schema:CorrectionComment";
}
/** A {@link https://schema.org/comment comment} that corrects {@link https://schema.org/CreativeWork CreativeWork}. */
export type CorrectionComment = CorrectionCommentLeaf;

interface CountryLeaf extends PlaceBase {
    "@type": "schema:Country";
}
/** A country. */
export type Country = CountryLeaf | string;

interface CourseBase extends CreativeWorkBase, LearningResourceBase {
    /** The identifier for the {@link https://schema.org/Course Course} used by the course {@link https://schema.org/provider provider} (e.g. CS101 or 6.001). */
    "schema:courseCode"?: SchemaValue<Text>;
    /** Requirements for taking the Course. May be completion of another {@link https://schema.org/Course Course} or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using {@link https://schema.org/AlignmentObject AlignmentObject}. */
    "schema:coursePrerequisites"?: SchemaValue<AlignmentObject | Course | Text | IdReference>;
    /** A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program. */
    "schema:educationalCredentialAwarded"?: SchemaValue<EducationalOccupationalCredential | Text | URL | IdReference>;
    /** An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students. */
    "schema:hasCourseInstance"?: SchemaValue<CourseInstance | IdReference>;
    /** The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram. */
    "schema:numberOfCredits"?: SchemaValue<Integer | StructuredValue | IdReference>;
    /** A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program. */
    "schema:occupationalCredentialAwarded"?: SchemaValue<EducationalOccupationalCredential | Text | URL | IdReference>;
}
interface CourseLeaf extends CourseBase {
    "@type": "schema:Course";
}
/** A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners. */
export type Course = CourseLeaf;

interface CourseInstanceBase extends EventBase {
    /** The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ). */
    "schema:courseMode"?: SchemaValue<Text | URL | IdReference>;
    /** The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, "2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week". */
    "schema:courseWorkload"?: SchemaValue<Text>;
    /** A person assigned to instruct or provide instructional assistance for the {@link https://schema.org/CourseInstance CourseInstance}. */
    "schema:instructor"?: SchemaValue<Person | IdReference>;
}
interface CourseInstanceLeaf extends CourseInstanceBase {
    "@type": "schema:CourseInstance";
}
/** An instance of a {@link https://schema.org/Course Course} which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students. */
export type CourseInstance = CourseInstanceLeaf;

interface CourthouseLeaf extends CivicStructureBase {
    "@type": "schema:Courthouse";
}
/** A courthouse. */
export type Courthouse = CourthouseLeaf | string;

interface CoverArtLeaf extends VisualArtworkBase {
    "@type": "schema:CoverArt";
}
/** The artwork on the outer surface of a CreativeWork. */
export type CoverArt = CoverArtLeaf | ComicCoverArt;

interface CovidTestingFacilityLeaf extends MedicalClinicBase {
    "@type": "schema:CovidTestingFacility";
}
/** A CovidTestingFacility is a {@link https://schema.org/MedicalClinic MedicalClinic} where testing for the COVID-19 Coronavirus disease is available. If the facility is being made available from an established {@link https://schema.org/Pharmacy Pharmacy}, {@link https://schema.org/Hotel Hotel}, or other non-medical organization, multiple types can be listed. This makes it easier to re-use existing schema.org information about that place e.g. contact info, address, opening hours. Note that in an emergency, such information may not always be reliable. */
export type CovidTestingFacility = CovidTestingFacilityLeaf | string;

interface CreateActionLeaf extends ActionBase {
    "@type": "schema:CreateAction";
}
/** The act of deliberately creating/producing/generating/building a result out of the agent. */
export type CreateAction = CreateActionLeaf | CookAction | DrawAction | FilmAction | PaintAction | PhotographAction | WriteAction;

interface CreativeWorkBase extends ThingBase {
    /** The subject matter of the content. */
    "schema:about"?: SchemaValue<Thing | IdReference>;
    /** An abstract is a short description that summarizes a {@link https://schema.org/CreativeWork CreativeWork}. */
    "schema:abstract"?: SchemaValue<Text>;
    /** Indicates that the resource is compatible with the referenced accessibility API ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
    "schema:accessibilityAPI"?: SchemaValue<Text>;
    /** Identifies input methods that are sufficient to fully control the described resource ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
    "schema:accessibilityControl"?: SchemaValue<Text>;
    /** Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
    "schema:accessibilityFeature"?: SchemaValue<Text>;
    /** A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ({@link http://www.w3.org/wiki/WebSchemas/Accessibility WebSchemas wiki lists possible values}). */
    "schema:accessibilityHazard"?: SchemaValue<Text>;
    /** A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed." */
    "schema:accessibilitySummary"?: SchemaValue<Text>;
    /** The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual. */
    "schema:accessMode"?: SchemaValue<Text>;
    /** A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include: auditory, tactile, textual, visual. */
    "schema:accessModeSufficient"?: SchemaValue<ItemList | IdReference>;
    /** Specifies the Person that is legally accountable for the CreativeWork. */
    "schema:accountablePerson"?: SchemaValue<Person | IdReference>;
    /** Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item. */
    "schema:acquireLicensePage"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "schema:aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
    /** A secondary title of the CreativeWork. */
    "schema:alternativeHeadline"?: SchemaValue<Text>;
    /** Indicates a page or other link involved in archival of a {@link https://schema.org/CreativeWork CreativeWork}. In the case of {@link https://schema.org/MediaReview MediaReview}, the items in a {@link https://schema.org/MediaReviewItem MediaReviewItem} may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content. */
    "schema:archivedAt"?: SchemaValue<URL | WebPage | IdReference>;
    /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
    "schema:assesses"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
    "schema:associatedMedia"?: SchemaValue<MediaObject | IdReference>;
    /** An intended audience, i.e. a group for whom something was created. */
    "schema:audience"?: SchemaValue<Audience | IdReference>;
    /** An embedded audio object. */
    "schema:audio"?: SchemaValue<AudioObject | Clip | MusicRecording | IdReference>;
    /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. */
    "schema:author"?: SchemaValue<Organization | Person | IdReference>;
    /** An award won by or for this item. */
    "schema:award"?: SchemaValue<Text>;
    /**
     * Awards won by or for this item.
     *
     * @deprecated Consider using https://schema.org/award instead.
     */
    "schema:awards"?: SchemaValue<Text>;
    /** Fictional person connected with a creative work. */
    "schema:character"?: SchemaValue<Person | IdReference>;
    /** A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. */
    "schema:citation"?: SchemaValue<CreativeWork | Text | IdReference>;
    /** Comments, typically from users. */
    "schema:comment"?: SchemaValue<Comment | IdReference>;
    /** The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere. */
    "schema:commentCount"?: SchemaValue<Integer>;
    /**
     * Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an {@link https://schema.org/ArchiveComponent ArchiveComponent} held by an {@link https://schema.org/ArchiveOrganization ArchiveOrganization}. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.
     *
     * For example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ".
     */
    "schema:conditionsOfAccess"?: SchemaValue<Text>;
    /** The location depicted or described in the content. For example, the location in a photograph or painting. */
    "schema:contentLocation"?: SchemaValue<Place | IdReference>;
    /** Official rating of a piece of content—for example,'MPAA PG-13'. */
    "schema:contentRating"?: SchemaValue<Rating | Text | IdReference>;
    /** The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event. */
    "schema:contentReferenceTime"?: SchemaValue<DateTime>;
    /** A secondary contributor to the CreativeWork or Event. */
    "schema:contributor"?: SchemaValue<Organization | Person | IdReference>;
    /** The party holding the legal copyright to the CreativeWork. */
    "schema:copyrightHolder"?: SchemaValue<Organization | Person | IdReference>;
    /** Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work. */
    "schema:copyrightNotice"?: SchemaValue<Text>;
    /** The year during which the claimed copyright for the CreativeWork was first asserted. */
    "schema:copyrightYear"?: SchemaValue<Number>;
    /** Indicates a correction to a {@link https://schema.org/CreativeWork CreativeWork}, either via a {@link https://schema.org/CorrectionComment CorrectionComment}, textually or in another document. */
    "schema:correction"?: SchemaValue<CorrectionComment | Text | URL | IdReference>;
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "schema:countryOfOrigin"?: SchemaValue<Country | IdReference>;
    /** The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle. */
    "schema:creativeWorkStatus"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork. */
    "schema:creator"?: SchemaValue<Organization | Person | IdReference>;
    /** Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work. */
    "schema:creditText"?: SchemaValue<Text>;
    /** The date on which the CreativeWork was created or the item was added to a DataFeed. */
    "schema:dateCreated"?: SchemaValue<Date | DateTime>;
    /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. */
    "schema:dateModified"?: SchemaValue<Date | DateTime>;
    /** Date of first broadcast/publication. */
    "schema:datePublished"?: SchemaValue<Date | DateTime>;
    /** A link to the page containing the comments of the CreativeWork. */
    "schema:discussionUrl"?: SchemaValue<URL | IdReference>;
    /**
     * An {@link https://eidr.org/ EIDR} (Entertainment Identifier Registry) {@link https://schema.org/identifier identifier} representing a specific edit / edition for a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" whose {@link https://schema.org/titleEIDR titleEIDR} is "10.5240/7EC7-228A-510A-053E-CBB8-J", has several edits e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".
     *
     * Since schema.org types like {@link https://schema.org/Movie Movie} and {@link https://schema.org/TVEpisode TVEpisode} can be used for both works and their multiple expressions, it is possible to use {@link https://schema.org/titleEIDR titleEIDR} alone (for a general description), or alongside {@link https://schema.org/editEIDR editEIDR} for a more edit-specific description.
     */
    "schema:editEIDR"?: SchemaValue<Text | URL | IdReference>;
    /** Specifies the Person who edited the CreativeWork. */
    "schema:editor"?: SchemaValue<Person | IdReference>;
    /**
     * An alignment to an established educational framework.
     *
     * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link https://schema.org/teaches teaches} or {@link https://schema.org/assesses assesses} a competency.
     */
    "schema:educationalAlignment"?: SchemaValue<AlignmentObject | IdReference>;
    /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
    "schema:educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** The purpose of a work in the context of education; for example, 'assignment', 'group work'. */
    "schema:educationalUse"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** A media object that encodes this CreativeWork. This property is a synonym for associatedMedia. */
    "schema:encoding"?: SchemaValue<MediaObject | IdReference>;
    /**
     * Media type typically expressed using a MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site} and {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types MDN reference}) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).
     *
     * In cases where a {@link https://schema.org/CreativeWork CreativeWork} has several media type representations, {@link https://schema.org/encoding encoding} can be used to indicate each {@link https://schema.org/MediaObject MediaObject} alongside particular {@link https://schema.org/encodingFormat encodingFormat} information.
     *
     * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
     */
    "schema:encodingFormat"?: SchemaValue<Text | URL | IdReference>;
    /**
     * A media object that encodes this CreativeWork.
     *
     * @deprecated Consider using https://schema.org/encoding instead.
     */
    "schema:encodings"?: SchemaValue<MediaObject | IdReference>;
    /** A creative work that this work is an example/instance/realization/derivation of. */
    "schema:exampleOfWork"?: SchemaValue<CreativeWork | IdReference>;
    /** Date the content expires and is no longer useful or available. For example a {@link https://schema.org/VideoObject VideoObject} or {@link https://schema.org/NewsArticle NewsArticle} whose availability or relevance is time-limited, or a {@link https://schema.org/ClaimReview ClaimReview} fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date. */
    "schema:expires"?: SchemaValue<Date>;
    /**
     * Media type, typically MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site}) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
     *
     * @deprecated Consider using https://schema.org/encodingFormat instead.
     */
    "schema:fileFormat"?: SchemaValue<Text | URL | IdReference>;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "schema:funder"?: SchemaValue<Organization | Person | IdReference>;
    /** Genre of the creative work, broadcast channel or group. */
    "schema:genre"?: SchemaValue<Text | URL | IdReference>;
    /** Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense). */
    "schema:hasPart"?: SchemaValue<CreativeWork | IdReference>;
    /** Headline of the article. */
    "schema:headline"?: SchemaValue<Text>;
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "schema:inLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
    "schema:interactionStatistic"?: SchemaValue<InteractionCounter | IdReference>;
    /** The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'. */
    "schema:interactivityType"?: SchemaValue<Text>;
    /** Used to indicate a specific claim contained, implied, translated or refined from the content of a {@link https://schema.org/MediaObject MediaObject} or other {@link https://schema.org/CreativeWork CreativeWork}. The interpreting party can be indicated using {@link https://schema.org/claimInterpreter claimInterpreter}. */
    "schema:interpretedAsClaim"?: SchemaValue<Claim | IdReference>;
    /** A flag to signal that the item, event, or place is accessible for free. */
    "schema:isAccessibleForFree"?: SchemaValue<Boolean>;
    /** A resource from which this work is derived or from which it is a modification or adaption. */
    "schema:isBasedOn"?: SchemaValue<CreativeWork | Product | URL | IdReference>;
    /**
     * A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
     *
     * @deprecated Consider using https://schema.org/isBasedOn instead.
     */
    "schema:isBasedOnUrl"?: SchemaValue<CreativeWork | Product | URL | IdReference>;
    /** Indicates whether this content is family friendly. */
    "schema:isFamilyFriendly"?: SchemaValue<Boolean>;
    /** Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of. */
    "schema:isPartOf"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas. */
    "schema:keywords"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. */
    "schema:learningResourceType"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** A license document that applies to this content, typically indicated by URL. */
    "schema:license"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork. */
    "schema:locationCreated"?: SchemaValue<Place | IdReference>;
    /** Indicates the primary entity described in some page or other CreativeWork. */
    "schema:mainEntity"?: SchemaValue<Thing | IdReference>;
    /** A maintainer of a {@link https://schema.org/Dataset Dataset}, software package ({@link https://schema.org/SoftwareApplication SoftwareApplication}), or other {@link https://schema.org/Project Project}. A maintainer is a {@link https://schema.org/Person Person} or {@link https://schema.org/Organization Organization} that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When {@link https://schema.org/maintainer maintainer} is applied to a specific version of something e.g. a particular version or packaging of a {@link https://schema.org/Dataset Dataset}, it is always possible that the upstream source has a different maintainer. The {@link https://schema.org/isBasedOn isBasedOn} property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work. */
    "schema:maintainer"?: SchemaValue<Organization | Person | IdReference>;
    /** A material that something is made from, e.g. leather, wool, cotton, paper. */
    "schema:material"?: SchemaValue<Product | Text | URL | IdReference>;
    /** The quantity of the materials being described or an expression of the physical space they occupy. */
    "schema:materialExtent"?: SchemaValue<QuantitativeValue | Text | IdReference>;
    /** Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept. */
    "schema:mentions"?: SchemaValue<Thing | IdReference>;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:offers"?: SchemaValue<Demand | Offer | IdReference>;
    /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported. */
    "schema:pattern"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The position of an item in a series or sequence of items. */
    "schema:position"?: SchemaValue<Integer | Text>;
    /** The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.). */
    "schema:producer"?: SchemaValue<Organization | Person | IdReference>;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "schema:provider"?: SchemaValue<Organization | Person | IdReference>;
    /** A publication event associated with the item. */
    "schema:publication"?: SchemaValue<PublicationEvent | IdReference>;
    /** The publisher of the creative work. */
    "schema:publisher"?: SchemaValue<Organization | Person | IdReference>;
    /** The publishing division which published the comic. */
    "schema:publisherImprint"?: SchemaValue<Organization | IdReference>;
    /**
     * The publishingPrinciples property indicates (typically via {@link https://schema.org/URL URL}) a document describing the editorial principles of an {@link https://schema.org/Organization Organization} (or individual e.g. a {@link https://schema.org/Person Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link https://schema.org/CreativeWork CreativeWork} (e.g. {@link https://schema.org/NewsArticle NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link https://schema.org/CreativeWork CreativeWork}.
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link https://schema.org/funder funder}) can be expressed using schema.org terminology.
     */
    "schema:publishingPrinciples"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event. */
    "schema:recordedAt"?: SchemaValue<Event | IdReference>;
    /** The place and time the release was issued, expressed as a PublicationEvent. */
    "schema:releasedEvent"?: SchemaValue<PublicationEvent | IdReference>;
    /** A review of the item. */
    "schema:review"?: SchemaValue<Review | IdReference>;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "schema:reviews"?: SchemaValue<Review | IdReference>;
    /** Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to indicate the use of a specific schema.org release, e.g. `10.0` as a simple string, or more explicitly via URL, `https://schema.org/docs/releases.html#v10.0`. There may be situations in which other schemas might usefully be referenced this way, e.g. `http://dublincore.org/specifications/dublin-core/dces/1999-07-02/` but this has not been carefully explored in the community. */
    "schema:schemaVersion"?: SchemaValue<Text | URL | IdReference>;
    /** Indicates the date on which the current structured data was generated / published. Typically used alongside {@link https://schema.org/sdPublisher sdPublisher} */
    "schema:sdDatePublished"?: SchemaValue<Date>;
    /** A license document that applies to this structured data, typically indicated by URL. */
    "schema:sdLicense"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The {@link https://schema.org/sdPublisher sdPublisher} property helps make such practices more explicit. */
    "schema:sdPublisher"?: SchemaValue<Organization | Person | IdReference>;
    /** A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a QuantitativeValue with a unitCode, or a comprehensive and structured {@link https://schema.org/SizeSpecification SizeSpecification}; in other cases, the {@link https://schema.org/width width}, {@link https://schema.org/height height}, {@link https://schema.org/depth depth} and {@link https://schema.org/weight weight} properties may be more applicable. */
    "schema:size"?: SchemaValue<DefinedTerm | QuantitativeValue | SizeSpecification | Text | IdReference>;
    /** The Organization on whose behalf the creator was working. */
    "schema:sourceOrganization"?: SchemaValue<Organization | IdReference>;
    /** The "spatial" property can be used in cases when more specific properties (e.g. {@link https://schema.org/locationCreated locationCreated}, {@link https://schema.org/spatialCoverage spatialCoverage}, {@link https://schema.org/contentLocation contentLocation}) are not known to be appropriate. */
    "schema:spatial"?: SchemaValue<Place | IdReference>;
    /** The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York. */
    "schema:spatialCoverage"?: SchemaValue<Place | IdReference>;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "schema:sponsor"?: SchemaValue<Organization | Person | IdReference>;
    /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
    "schema:teaches"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The "temporal" property can be used in cases where more specific properties (e.g. {@link https://schema.org/temporalCoverage temporalCoverage}, {@link https://schema.org/dateCreated dateCreated}, {@link https://schema.org/dateModified dateModified}, {@link https://schema.org/datePublished datePublished}) are not known to be appropriate. */
    "schema:temporal"?: SchemaValue<DateTime | Text>;
    /**
     * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in {@link https://en.wikipedia.org/wiki/ISO_8601#Time_intervals ISO 8601 time interval format}. In the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL. Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
     *
     * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
     */
    "schema:temporalCoverage"?: SchemaValue<DateTime | Text | URL | IdReference>;
    /** The textual content of this CreativeWork. */
    "schema:text"?: SchemaValue<Text>;
    /** A thumbnail image relevant to the Thing. */
    "schema:thumbnailUrl"?: SchemaValue<URL | IdReference>;
    /** Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'. */
    "schema:timeRequired"?: SchemaValue<Duration | IdReference>;
    /** The work that this work has been translated from. e.g. \u7269\u79CD\u8D77\u6E90 is a translationOf \u201COn the Origin of Species\u201D */
    "schema:translationOfWork"?: SchemaValue<CreativeWork | IdReference>;
    /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event. */
    "schema:translator"?: SchemaValue<Organization | Person | IdReference>;
    /** The typical expected age range, e.g. '7-9', '11-'. */
    "schema:typicalAgeRange"?: SchemaValue<Text>;
    /**
     * The schema.org {@link https://schema.org/usageInfo usageInfo} property indicates further information about a {@link https://schema.org/CreativeWork CreativeWork}. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
     *
     * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
     */
    "schema:usageInfo"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** The version of the CreativeWork embodied by a specified resource. */
    "schema:version"?: SchemaValue<Number | Text>;
    /** An embedded video object. */
    "schema:video"?: SchemaValue<Clip | VideoObject | IdReference>;
    /** Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook. */
    "schema:workExample"?: SchemaValue<CreativeWork | IdReference>;
    /** A work that is a translation of the content of this work. e.g. \u897F\u904A\u8A18 has an English workTranslation \u201CJourney to the West\u201D,a German workTranslation \u201CMonkeys Pilgerfahrt\u201D and a Vietnamese translation T\u00E2y du k\u00FD b\u00ECnh kh\u1EA3o. */
    "schema:workTranslation"?: SchemaValue<CreativeWork | IdReference>;
}
interface CreativeWorkLeaf extends CreativeWorkBase {
    "@type": "schema:CreativeWork";
}
/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
export type CreativeWork = CreativeWorkLeaf | AmpStory | ArchiveComponent | Article | Atlas | Blog | Book | Chapter | Claim | Clip | Code | Collection | ComicStory | Comment | Conversation | Course | CreativeWorkSeason | CreativeWorkSeries | DataCatalog | Dataset | DefinedTermSet | Diet | DigitalDocument | Drawing | EducationalOccupationalCredential | Episode | ExercisePlan | Game | Guide | HowTo | HowToDirection | HowToSection | HowToStep | HowToTip | HyperToc | HyperTocEntry | InformationContainer | LearningResource | Legislation | Manuscript | Map | MathSolver | MediaObject | MediaReviewItem | Menu | MenuSection | Message | Movie | MusicComposition | MusicPlaylist | MusicRecording | Painting | Photograph | Play | Poster | PublicationIssue | PublicationVolume | Quotation | Review | Sculpture | Season | SheetMusic | ShortStory | SoftwareApplication | SoftwareSourceCode | SpecialAnnouncement | Statement | Thesis | TVSeason | TVSeries | VisualArtwork | WebContent | WebPage | WebPageElement | WebSite;

interface CreativeWorkSeasonBase extends CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:endDate"?: SchemaValue<Date | DateTime>;
    /** An episode of a tv, radio or game media within a series or season. */
    "schema:episode"?: SchemaValue<Episode | IdReference>;
    /**
     * An episode of a TV/radio series or season.
     *
     * @deprecated Consider using https://schema.org/episode instead.
     */
    "schema:episodes"?: SchemaValue<Episode | IdReference>;
    /** The number of episodes in this season or series. */
    "schema:numberOfEpisodes"?: SchemaValue<Integer>;
    /** The series to which this episode or season belongs. */
    "schema:partOfSeries"?: SchemaValue<CreativeWorkSeries | IdReference>;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "schema:productionCompany"?: SchemaValue<Organization | IdReference>;
    /** Position of the season within an ordered group of seasons. */
    "schema:seasonNumber"?: SchemaValue<Integer | Text>;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:startDate"?: SchemaValue<Date | DateTime>;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "schema:trailer"?: SchemaValue<VideoObject | IdReference>;
}
interface CreativeWorkSeasonLeaf extends CreativeWorkSeasonBase {
    "@type": "schema:CreativeWorkSeason";
}
/** A media season e.g. tv, radio, video game etc. */
export type CreativeWorkSeason = CreativeWorkSeasonLeaf | PodcastSeason | TVSeason;

interface CreativeWorkSeriesBase extends CreativeWorkBase, ThingBase {
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:endDate"?: SchemaValue<Date | DateTime>;
    /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
    "schema:issn"?: SchemaValue<Text>;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:startDate"?: SchemaValue<Date | DateTime>;
}
interface CreativeWorkSeriesLeaf extends CreativeWorkSeriesBase {
    "@type": "schema:CreativeWorkSeries";
}
/**
 * A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike {@link https://schema.org/ItemList ItemList} which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).
 *
 * Specific subtypes are available for describing {@link https://schema.org/TVSeries TVSeries}, {@link https://schema.org/RadioSeries RadioSeries}, {@link https://schema.org/MovieSeries MovieSeries}, {@link https://schema.org/BookSeries BookSeries}, {@link https://schema.org/Periodical Periodical} and {@link https://schema.org/VideoGameSeries VideoGameSeries}. In each case, the {@link https://schema.org/hasPart hasPart} / {@link https://schema.org/isPartOf isPartOf} properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.
 *
 * It is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
 */
export type CreativeWorkSeries = CreativeWorkSeriesLeaf | BookSeries | MovieSeries | Periodical | PodcastSeries | RadioSeries | TVSeries | VideoGameSeries;

interface CreditCardBase extends LoanOrCreditBase, PaymentCardBase {
}
interface CreditCardLeaf extends CreditCardBase {
    "@type": "schema:CreditCard";
}
/**
 * A card payment method of a particular brand or name. Used to mark up a particular payment method and/or the financial product/service that supplies the card account.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#AmericanExpress
 * - http://purl.org/goodrelations/v1#DinersClub
 * - http://purl.org/goodrelations/v1#Discover
 * - http://purl.org/goodrelations/v1#JCB
 * - http://purl.org/goodrelations/v1#MasterCard
 * - http://purl.org/goodrelations/v1#VISA
 */
export type CreditCard = CreditCardLeaf;

interface CrematoriumLeaf extends CivicStructureBase {
    "@type": "schema:Crematorium";
}
/** A crematorium. */
export type Crematorium = CrematoriumLeaf | string;

interface CriticReviewLeaf extends ReviewBase {
    "@type": "schema:CriticReview";
}
/** A {@link https://schema.org/CriticReview CriticReview} is a more specialized form of Review written or published by a source that is recognized for its reviewing activities. These can include online columns, travel and food guides, TV and radio shows, blogs and other independent Web sites. {@link https://schema.org/CriticReview CriticReview}s are typically more in-depth and professionally written. For simpler, casually written user/visitor/viewer/customer reviews, it is more appropriate to use the {@link https://schema.org/UserReview UserReview} type. Review aggregator sites such as Metacritic already separate out the site's user reviews from selected critic reviews that originate from third-party sources. */
export type CriticReview = CriticReviewLeaf | ReviewNewsArticle;

interface CrossCurrencyPairPaymentDescriptionBase extends ThingBase {
    /** The exchangeRate for CrossCurrencyPairPaymentDescription. */
    "camo:exchangeRateForCrossCurrencyPairPaymentDescription"?: SchemaValue<Number>;
    /** The negative payment property for a CrossCurrencyPairPaymentDescription. */
    "camo:hasNegativePaymentAmount"?: SchemaValue<MonetaryAmount | IdReference>;
    /** The positive payment property for a CrossCurrencyPairPaymentDescription. */
    "camo:hasPositivePaymentAmount"?: SchemaValue<MonetaryAmount | IdReference>;
    /** The negativePaymentCurrency for a CrossCurrencyPairPaymentDescription. */
    "camo:negativePaymentCurrency"?: SchemaValue<Text>;
    /** The positivePaymentCurrencyy for a CrossCurrencyPairPaymentDescription. */
    "camo:positivePaymentCurrency"?: SchemaValue<Text>;
}
interface CrossCurrencyPairPaymentDescriptionLeaf extends CrossCurrencyPairPaymentDescriptionBase {
    "@type": "camo:CrossCurrencyPairPaymentDescription";
}
/** A payment in one currency in lieu of a payment in a different currency (represented as a positive payment in one currency and negative payment in the other) */
export type CrossCurrencyPairPaymentDescription = CrossCurrencyPairPaymentDescriptionLeaf;

/** Text representing a CSS selector. */
export type CssSelectorType = string;

interface CurrencyConversionServiceLeaf extends FinancialProductBase {
    "@type": "schema:CurrencyConversionService";
}
/** A service to convert funds from one currency to another currency. */
export type CurrencyConversionService = CurrencyConversionServiceLeaf;

interface CurrencyLayoutTableBase extends ThingBase {
    /** For a certificate that uses synthetic currencies, on payment summary, use regular currencies only and merge them with same currency. */
    "camo:certificatePaymentSummaryUsesMergedRegularCurrencies"?: SchemaValue<Boolean>;
    /** For a certificate that uses synthetic currencies, on payment summary, use regular currencies only, but do not merge them. */
    "camo:certificatePaymentSummaryUsesUnmergedRegularCurrencies"?: SchemaValue<Boolean>;
    /** Defines the foreign currency. */
    "camo:hasForeignCurrency"?: SchemaValue<SyntheticCurrency | Text | IdReference>;
    /** Defines a local currency. */
    "camo:hasLocalCurrency"?: SchemaValue<SyntheticCurrency | Text | IdReference>;
}
interface CurrencyLayoutTableLeaf extends CurrencyLayoutTableBase {
    "@type": "camo:CurrencyLayoutTable";
}
/** A currency layout table. */
export type CurrencyLayoutTable = CurrencyLayoutTableLeaf;

interface CustomCertificateLayoutBase extends ThingBase {
    /** Which certificate type This custom certificate is based upon. */
    "camo:customCertificateBasedOn"?: SchemaValue<URL | IdReference>;
    /** Default preamble for a custom certificate layout. */
    "camo:defaultPreambleForCustomCertificateLayout"?: SchemaValue<Text>;
}
interface CustomCertificateLayoutLeaf extends CustomCertificateLayoutBase {
    "@type": "camo:CustomCertificateLayout";
}
/** A custom certificate. */
export type CustomCertificateLayout = CustomCertificateLayoutLeaf;

interface CustomsAndImportDutiesEntryBase extends ThingBase {
    /** The hasCAndIAmountReimbursable property for a CustomsAndImportDutiesEntry. */
    "camo:hasCAndIAmountReimbursable"?: SchemaValue<MonetaryAmount | IdReference>;
    /** The hasCAndICashReceiptNumber property for a CustomsAndImportDutiesEntry. */
    "camo:hasCAndICashReceiptNumber"?: SchemaValue<Text>;
    /** An optional comment field which may be added to a CustomsAndImportDutiesEntry. */
    "camo:hasCAndIComments"?: SchemaValue<Text>;
    /** The hasCAndIDeclarationNumber property for a CustomsAndImportDutiesEntry. */
    "camo:hasCAndIDeclarationNumber"?: SchemaValue<Text>;
    /** The hasCAndIDeductions property for a CustomsAndImportDutiesEntry. */
    "camo:hasCAndIDeductions"?: SchemaValue<MonetaryAmount | IdReference>;
    /** The hasCAndIReceiptDate property for a CustomsAndImportDutiesEntry. */
    "camo:hasCAndIReceiptDate"?: SchemaValue<Date>;
    /** The hasCAndITotalAmount property for a CustomsAndImportDutiesEntry. */
    "camo:hasCAndITotalAmount"?: SchemaValue<MonetaryAmount | IdReference>;
}
interface CustomsAndImportDutiesEntryLeaf extends CustomsAndImportDutiesEntryBase {
    "@type": "camo:CustomsAndImportDutiesEntry";
}
/** A CustomsAndImportDutiesEntry attached to a CustomsAndImportDutiesTable */
export type CustomsAndImportDutiesEntry = CustomsAndImportDutiesEntryLeaf;

interface CustomsAndImportDutiesPaymentLeaf extends PaymentBase {
    "@type": "camo:CustomsAndImportDutiesPayment";
}
/** A customs and import duties payment Explanation. */
export type CustomsAndImportDutiesPayment = CustomsAndImportDutiesPaymentLeaf;

interface CustomsAndImportDutiesPaymentCertificateLeaf extends PaymentCertificateBase {
    "@type": "camo:CustomsAndImportDutiesPaymentCertificate";
}
/** A customs and import duties payment certificate. */
export type CustomsAndImportDutiesPaymentCertificate = CustomsAndImportDutiesPaymentCertificateLeaf;

interface CustomsandImportDutiesSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:CustomsandImportDutiesSectionPaymentDescription";
}
/** A C&I Duties payment that is part of a contract payment description. */
export type CustomsandImportDutiesSectionPaymentDescription = CustomsandImportDutiesSectionPaymentDescriptionLeaf;

interface CustomsAndImportDutiesStatementLeaf extends ContractStatementBase {
    "@type": "camo:CustomsAndImportDutiesStatement";
}
/** A customs and import duties statement. */
export type CustomsAndImportDutiesStatement = CustomsAndImportDutiesStatementLeaf;

interface CustomsAndImportDutiesTableBase extends ThingBase {
    /** Attaches a CustomsAndImportDutiesEntry to its CustomsAndImportDutiesTable. */
    "camo:hasCustomsAndImportDutiesEntry"?: SchemaValue<CustomsAndImportDutiesEntry | IdReference>;
}
interface CustomsAndImportDutiesTableLeaf extends CustomsAndImportDutiesTableBase {
    "@type": "camo:CustomsAndImportDutiesTable";
}
/** A CustomsAndImportDutiesTable attached to a SectionPaymentDescription */
export type CustomsAndImportDutiesTable = CustomsAndImportDutiesTableLeaf;

interface DAABAgreementLeaf extends ThingBase {
    "@type": "camo:DAABAgreement";
}
/** The DAAB agreement. */
export type DAABAgreement = DAABAgreementLeaf;

interface DanceEventLeaf extends EventBase {
    "@type": "schema:DanceEvent";
}
/** Event type: A social dance. */
export type DanceEvent = DanceEventLeaf;

interface DanceGroupLeaf extends OrganizationBase {
    "@type": "schema:DanceGroup";
}
/** A dance group—for example, the Alvin Ailey Dance Theater or Riverdance. */
export type DanceGroup = DanceGroupLeaf | string;

interface DataCatalogBase extends CreativeWorkBase {
    /** A dataset contained in this catalog. */
    "schema:dataset"?: SchemaValue<Dataset | IdReference>;
    /**
     * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
     */
    "schema:measurementTechnique"?: SchemaValue<Text | URL | IdReference>;
}
interface DataCatalogLeaf extends DataCatalogBase {
    "@type": "schema:DataCatalog";
}
/** A collection of datasets. */
export type DataCatalog = DataCatalogLeaf;

interface DataDownloadBase extends MediaObjectBase {
    /**
     * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
     */
    "schema:measurementTechnique"?: SchemaValue<Text | URL | IdReference>;
}
interface DataDownloadLeaf extends DataDownloadBase {
    "@type": "schema:DataDownload";
}
/** A dataset in downloadable form. */
export type DataDownload = DataDownloadLeaf;

interface DataFeedBase extends DatasetBase {
    /** An item within in a data feed. Data feeds may have many elements. */
    "schema:dataFeedElement"?: SchemaValue<DataFeedItem | Text | Thing | IdReference>;
}
interface DataFeedLeaf extends DataFeedBase {
    "@type": "schema:DataFeed";
}
/** A single feed providing structured information about one or more entities or topics. */
export type DataFeed = DataFeedLeaf | CompleteDataFeed;

interface DataFeedItemBase extends ThingBase {
    /** The date on which the CreativeWork was created or the item was added to a DataFeed. */
    "schema:dateCreated"?: SchemaValue<Date | DateTime>;
    /** The datetime the item was removed from the DataFeed. */
    "schema:dateDeleted"?: SchemaValue<Date | DateTime>;
    /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. */
    "schema:dateModified"?: SchemaValue<Date | DateTime>;
    /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’. */
    "schema:item"?: SchemaValue<Thing | IdReference>;
}
interface DataFeedItemLeaf extends DataFeedItemBase {
    "@type": "schema:DataFeedItem";
}
/** A single item within a larger data feed. */
export type DataFeedItem = DataFeedItemLeaf;

interface DatasetBase extends CreativeWorkBase {
    /**
     * A data catalog which contains this dataset.
     *
     * @deprecated Consider using https://schema.org/includedInDataCatalog instead.
     */
    "schema:catalog"?: SchemaValue<DataCatalog | IdReference>;
    /**
     * The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).
     *
     * @deprecated Consider using https://schema.org/temporalCoverage instead.
     */
    "schema:datasetTimeInterval"?: SchemaValue<DateTime>;
    /** A downloadable form of this dataset, at a specific location, in a specific format. */
    "schema:distribution"?: SchemaValue<DataDownload | IdReference>;
    /**
     * A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').
     *
     * @deprecated Consider using https://schema.org/includedInDataCatalog instead.
     */
    "schema:includedDataCatalog"?: SchemaValue<DataCatalog | IdReference>;
    /** A data catalog which contains this dataset. */
    "schema:includedInDataCatalog"?: SchemaValue<DataCatalog | IdReference>;
    /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
    "schema:issn"?: SchemaValue<Text>;
    /**
     * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
     */
    "schema:measurementTechnique"?: SchemaValue<Text | URL | IdReference>;
    /** The variableMeasured property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue. */
    "schema:variableMeasured"?: SchemaValue<PropertyValue | Text | IdReference>;
}
interface DatasetLeaf extends DatasetBase {
    "@type": "schema:Dataset";
}
/** A body of structured information describing some topic(s) of interest. */
export type Dataset = DatasetLeaf | DataFeed;

interface DatedMoneySpecificationBase extends ThingBase {
    /** The amount of money. */
    "schema:amount"?: SchemaValue<MonetaryAmount | Number | IdReference>;
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:currency"?: SchemaValue<Text>;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:endDate"?: SchemaValue<Date | DateTime>;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:startDate"?: SchemaValue<Date | DateTime>;
}
interface DatedMoneySpecificationLeaf extends DatedMoneySpecificationBase {
    "@type": "schema:DatedMoneySpecification";
}
/**
 * A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by {@link https://schema.org/MonetaryAmount MonetaryAmount} use of that type is recommended
 *
 * @deprecated Use MonetaryAmount instead.
 */
export type DatedMoneySpecification = DatedMoneySpecificationLeaf;

interface DateStampableBase extends ThingBase {
    /** The end date. */
    "coremo:endOfDateStamp"?: SchemaValue<Date>;
    /** A DateStampRange for a DateStampable. */
    "coremo:hasDateStampRange"?: SchemaValue<DateStampRange | IdReference>;
    /** The start date. */
    "coremo:startOfDateStamp"?: SchemaValue<Date>;
}
interface DateStampableLeaf extends DateStampableBase {
    "@type": "coremo:DateStampable";
}
/** A resource that has a date (and optionally Time) attached */
export type DateStampable = DateStampableLeaf;

interface DateStampRangeBase extends ThingBase {
    /** The end date. */
    "coremo:endOfDateStamp"?: SchemaValue<Date>;
    /** The start date. */
    "coremo:startOfDateStamp"?: SchemaValue<Date>;
}
interface DateStampRangeLeaf extends DateStampRangeBase {
    "@type": "coremo:DateStampRange";
}
/** A date stamp range with a startOfDateStamp and endOfDateStamp (multiple ranges may describe a DateStampable */
export type DateStampRange = DateStampRangeLeaf;

interface DayOfWeekLeaf extends EnumerationBase {
    "@type": "schema:DayOfWeek";
}
/**
 * The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
 *
 * Originally, URLs from {@link http://purl.org/goodrelations/v1 GoodRelations} were used (for {@link https://schema.org/Monday Monday}, {@link https://schema.org/Tuesday Tuesday}, {@link https://schema.org/Wednesday Wednesday}, {@link https://schema.org/Thursday Thursday}, {@link https://schema.org/Friday Friday}, {@link https://schema.org/Saturday Saturday}, {@link https://schema.org/Sunday Sunday} plus a special entry for {@link https://schema.org/PublicHolidays PublicHolidays}); these have now been integrated directly into schema.org.
 */
export type DayOfWeek = "https://schema.org/Friday" | "schema:Friday" | "https://schema.org/Monday" | "schema:Monday" | "https://schema.org/PublicHolidays" | "schema:PublicHolidays" | "https://schema.org/Saturday" | "schema:Saturday" | "https://schema.org/Sunday" | "schema:Sunday" | "https://schema.org/Thursday" | "schema:Thursday" | "https://schema.org/Tuesday" | "schema:Tuesday" | "https://schema.org/Wednesday" | "schema:Wednesday" | DayOfWeekLeaf;

interface DaySpaLeaf extends LocalBusinessBase {
    "@type": "schema:DaySpa";
}
/** A day spa. */
export type DaySpa = DaySpaLeaf | string;

interface DDxElementBase extends MedicalEntityBase {
    /** One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process. */
    "schema:diagnosis"?: SchemaValue<MedicalCondition | IdReference>;
    /** One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis. */
    "schema:distinguishingSign"?: SchemaValue<MedicalSignOrSymptom | IdReference>;
}
interface DDxElementLeaf extends DDxElementBase {
    "@type": "schema:DDxElement";
}
/** An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it. */
export type DDxElement = DDxElementLeaf;

interface DeactivateActionLeaf extends ActionBase {
    "@type": "schema:DeactivateAction";
}
/** The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight). */
export type DeactivateAction = DeactivateActionLeaf;

interface DeductionPaymentDescriptionDueEmployerDirectlyPayingNominatedSubcontractorLeaf extends DeductionPaymentDescriptionItemBase {
    "@type": "camo:DeductionPaymentDescriptionDueEmployerDirectlyPayingNominatedSubcontractor";
}
/** A deduction to be added to a contract payment description. */
export type DeductionPaymentDescriptionDueEmployerDirectlyPayingNominatedSubcontractor = DeductionPaymentDescriptionDueEmployerDirectlyPayingNominatedSubcontractorLeaf;

interface DeductionPaymentDescriptionDueToEmployerPaidContractorDAABFeeLeaf extends DeductionPaymentDescriptionItemBase {
    "@type": "camo:DeductionPaymentDescriptionDueToEmployerPaidContractorDAABFee";
}
/** A deduction to be added to a contract payment description. */
export type DeductionPaymentDescriptionDueToEmployerPaidContractorDAABFee = DeductionPaymentDescriptionDueToEmployerPaidContractorDAABFeeLeaf;

interface DeductionPaymentDescriptionItemBase extends ThingBase {
    /** The amount property for a DeductionPaymentDescriptionItem. */
    "camo:deductionPaymentDescriptionItemAmount"?: SchemaValue<MonetaryAmount | IdReference>;
    /** Explanation for this Deduction Payment. */
    "camo:deductionPaymentDescriptionItemDetails"?: SchemaValue<Text>;
    /** Identifies what kind of DeductionPaymentDescriptionItem this is. */
    "camo:deductionPaymentDescriptionItemKind"?: SchemaValue<URL | IdReference>;
}
interface DeductionPaymentDescriptionItemLeaf extends DeductionPaymentDescriptionItemBase {
    "@type": "camo:DeductionPaymentDescriptionItem";
}
/** A Deduction to be added to a DeductionsPaymentDescriptionTable. */
export type DeductionPaymentDescriptionItem = DeductionPaymentDescriptionItemLeaf | DeductionPaymentDescriptionDueEmployerDirectlyPayingNominatedSubcontractor | DeductionPaymentDescriptionDueToEmployerPaidContractorDAABFee;

interface DeductionsAppliedAndCollectedPaymentDescriptionBase extends GeneralPaymentDescriptionBase {
    /** Attaches a DeductionsPaymentDescriptionTable to one of the DeductionsPaymentDescription types. */
    "camo:hasDeductionsPaymentDescriptionTable"?: SchemaValue<DeductionsPaymentDescriptionTable | IdReference>;
}
interface DeductionsAppliedAndCollectedPaymentDescriptionLeaf extends DeductionsAppliedAndCollectedPaymentDescriptionBase {
    "@type": "camo:DeductionsAppliedAndCollectedPaymentDescription";
}
/** A payment that is both applied and collected as part of a contract payment description. */
export type DeductionsAppliedAndCollectedPaymentDescription = DeductionsAppliedAndCollectedPaymentDescriptionLeaf;

interface DeductionsAppliedPaymentDescriptionBase extends GeneralPaymentDescriptionBase {
    /** Attaches a DeductionsPaymentDescriptionTable to one of the DeductionsPaymentDescription types. */
    "camo:hasDeductionsPaymentDescriptionTable"?: SchemaValue<DeductionsPaymentDescriptionTable | IdReference>;
}
interface DeductionsAppliedPaymentDescriptionLeaf extends DeductionsAppliedPaymentDescriptionBase {
    "@type": "camo:DeductionsAppliedPaymentDescription";
}
/** A payment that is applied (but not collected here) as part of a contract payment description. */
export type DeductionsAppliedPaymentDescription = DeductionsAppliedPaymentDescriptionLeaf;

interface DeductionsCollectedPaymentDescriptionBase extends GeneralPaymentDescriptionBase {
    /** Attaches a DeductionsPaymentDescriptionTable to one of the DeductionsPaymentDescription types. */
    "camo:hasDeductionsPaymentDescriptionTable"?: SchemaValue<DeductionsPaymentDescriptionTable | IdReference>;
}
interface DeductionsCollectedPaymentDescriptionLeaf extends DeductionsCollectedPaymentDescriptionBase {
    "@type": "camo:DeductionsCollectedPaymentDescription";
}
/** A deduction payment that is collected as part of a contract payment description. */
export type DeductionsCollectedPaymentDescription = DeductionsCollectedPaymentDescriptionLeaf;

interface DeductionsPaymentDescriptionTableBase extends ThingBase {
    /** Attaches a DeductionPaymentDescriptionItem to a DeductionsPaymentDescriptionTable. */
    "camo:hasDeductionPaymentDescriptionItem"?: SchemaValue<DeductionPaymentDescriptionItem | IdReference>;
}
interface DeductionsPaymentDescriptionTableLeaf extends DeductionsPaymentDescriptionTableBase {
    "@type": "camo:DeductionsPaymentDescriptionTable";
}
/** A DeductionsPaymentDescriptionTable attached to one of the DeductionsPaymentDescription types. */
export type DeductionsPaymentDescriptionTable = DeductionsPaymentDescriptionTableLeaf;

interface DefenceEstablishmentLeaf extends CivicStructureBase {
    "@type": "schema:DefenceEstablishment";
}
/** A defence establishment, such as an army or navy base. */
export type DefenceEstablishment = DefenceEstablishmentLeaf | string;

interface DefinedRegionBase extends ThingBase {
    /** The country. For example, USA. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. */
    "schema:addressCountry"?: SchemaValue<Country | Text | IdReference>;
    /** The region in which the locality is, and which is in the country. For example, California or another appropriate first-level {@link https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country Administrative division} */
    "schema:addressRegion"?: SchemaValue<Text>;
    /** The postal code. For example, 94043. */
    "schema:postalCode"?: SchemaValue<Text>;
    /** A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK. */
    "schema:postalCodePrefix"?: SchemaValue<Text>;
    /** A defined range of postal codes. */
    "schema:postalCodeRange"?: SchemaValue<PostalCodeRangeSpecification | IdReference>;
}
interface DefinedRegionLeaf extends DefinedRegionBase {
    "@type": "schema:DefinedRegion";
}
/**
 * A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.
 *
 * Examples: a delivery destination when shopping. Region where regional pricing is configured.
 *
 * Requirement 1: Country: US States: "NY", "CA"
 *
 * Requirement 2: Country: US PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]} { [12345, 12345], [78945, 78945], } Region = state, canton, prefecture, autonomous community...
 */
export type DefinedRegion = DefinedRegionLeaf;

interface DefinedTermBase extends ThingBase {
    /** A {@link https://schema.org/DefinedTermSet DefinedTermSet} that contains this term. */
    "schema:inDefinedTermSet"?: SchemaValue<DefinedTermSet | URL | IdReference>;
    /** A code that identifies this {@link https://schema.org/DefinedTerm DefinedTerm} within a {@link https://schema.org/DefinedTermSet DefinedTermSet} */
    "schema:termCode"?: SchemaValue<Text>;
}
interface DefinedTermLeaf extends DefinedTermBase {
    "@type": "schema:DefinedTerm";
}
/** A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term. */
export type DefinedTerm = DefinedTermLeaf | CategoryCode;

interface DefinedTermSetBase extends CreativeWorkBase {
    /** A Defined Term contained in this term set. */
    "schema:hasDefinedTerm"?: SchemaValue<DefinedTerm | IdReference>;
}
interface DefinedTermSetLeaf extends DefinedTermSetBase {
    "@type": "schema:DefinedTermSet";
}
/** A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration. */
export type DefinedTermSet = DefinedTermSetLeaf | CategoryCodeSet;

interface DelayDamagesLeaf extends ThingBase {
    "@type": "camo:DelayDamages";
}
/** The Delay Damages. */
export type DelayDamages = DelayDamagesLeaf;

interface DeleteActionLeaf extends UpdateActionBase {
    "@type": "schema:DeleteAction";
}
/** The act of editing a recipient by removing one of its objects. */
export type DeleteAction = DeleteActionLeaf;

interface DeliveryChargeSpecificationBase extends PriceSpecificationBase {
    /** The delivery method(s) to which the delivery charge or payment charge specification applies. */
    "schema:appliesToDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
    /** The geographic area where a service or offered item is provided. */
    "schema:areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
     *
     * See also {@link https://schema.org/ineligibleRegion ineligibleRegion}.
     */
    "schema:eligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "schema:ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
}
interface DeliveryChargeSpecificationLeaf extends DeliveryChargeSpecificationBase {
    "@type": "schema:DeliveryChargeSpecification";
}
/** The price for the delivery of an offer using a particular delivery method. */
export type DeliveryChargeSpecification = DeliveryChargeSpecificationLeaf;

interface DeliveryEventBase extends EventBase {
    /** Password, PIN, or access code needed for delivery (e.g. from a locker). */
    "schema:accessCode"?: SchemaValue<Text>;
    /** When the item is available for pickup from the store, locker, etc. */
    "schema:availableFrom"?: SchemaValue<DateTime>;
    /** After this date, the item will no longer be available for pickup. */
    "schema:availableThrough"?: SchemaValue<DateTime>;
    /** Method used for delivery or shipping. */
    "schema:hasDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
}
interface DeliveryEventLeaf extends DeliveryEventBase {
    "@type": "schema:DeliveryEvent";
}
/** An event involving the delivery of an item. */
export type DeliveryEvent = DeliveryEventLeaf;

interface DeliveryMethodLeaf extends EnumerationBase {
    "@type": "schema:DeliveryMethod";
}
/**
 * A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#DeliveryModeDirectDownload
 * - http://purl.org/goodrelations/v1#DeliveryModeFreight
 * - http://purl.org/goodrelations/v1#DeliveryModeMail
 * - http://purl.org/goodrelations/v1#DeliveryModeOwnFleet
 * - http://purl.org/goodrelations/v1#DeliveryModePickUp
 * - http://purl.org/goodrelations/v1#DHL
 * - http://purl.org/goodrelations/v1#FederalExpress
 * - http://purl.org/goodrelations/v1#UPS
 */
export type DeliveryMethod = "https://schema.org/LockerDelivery" | "schema:LockerDelivery" | "https://schema.org/OnSitePickup" | "schema:OnSitePickup" | "https://schema.org/ParcelService" | "schema:ParcelService" | DeliveryMethodLeaf;

interface DeliveryTimeSettingsBase extends ThingBase {
    /** The total delay between the receipt of the order and the goods reaching the final customer. */
    "schema:deliveryTime"?: SchemaValue<ShippingDeliveryTime | IdReference>;
    /** This can be marked 'true' to indicate that some published {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} or {@link https://schema.org/ShippingRateSettings ShippingRateSettings} are intended to apply to all {@link https://schema.org/OfferShippingDetails OfferShippingDetails} published by the same merchant, when referenced by a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings}) or shippingLabel (for {@link https://schema.org/ShippingRateSettings ShippingRateSettings}), since this property is for use with unlabelled settings. */
    "schema:isUnlabelledFallback"?: SchemaValue<Boolean>;
    /** indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges. */
    "schema:shippingDestination"?: SchemaValue<DefinedRegion | IdReference>;
    /** Label to match an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with a {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} (within the context of a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} cross-reference). */
    "schema:transitTimeLabel"?: SchemaValue<Text>;
}
interface DeliveryTimeSettingsLeaf extends DeliveryTimeSettingsBase {
    "@type": "schema:DeliveryTimeSettings";
}
/** A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the {@link https://schema.org/shippingSettingsLink shippingSettingsLink} property of a {@link https://schema.org/OfferShippingDetails OfferShippingDetails}. Several occurrences can be published, distinguished (and identified/referenced) by their different values for {@link https://schema.org/transitTimeLabel transitTimeLabel}. */
export type DeliveryTimeSettings = DeliveryTimeSettingsLeaf;

interface DemandBase extends ThingBase {
    /** The payment method(s) accepted by seller for this offer. */
    "schema:acceptedPaymentMethod"?: SchemaValue<LoanOrCredit | PaymentMethod | IdReference>;
    /** The amount of time that is required between accepting the offer and the actual usage of the resource or service. */
    "schema:advanceBookingRequirement"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The geographic area where a service or offered item is provided. */
    "schema:areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference>;
    /** The availability of this item—for example In stock, Out of stock, Pre-order, etc. */
    "schema:availability"?: SchemaValue<ItemAvailability | IdReference>;
    /** The end of the availability of the product or service included in the offer. */
    "schema:availabilityEnds"?: SchemaValue<Date | DateTime | Time>;
    /** The beginning of the availability of the product or service included in the offer. */
    "schema:availabilityStarts"?: SchemaValue<Date | DateTime | Time>;
    /** The place(s) from which the offer can be obtained (e.g. store locations). */
    "schema:availableAtOrFrom"?: SchemaValue<Place | IdReference>;
    /** The delivery method(s) available for this offer. */
    "schema:availableDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
    /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
    "schema:businessFunction"?: SchemaValue<BusinessFunction | IdReference>;
    /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. */
    "schema:deliveryLeadTime"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The type(s) of customers for which the given offer is valid. */
    "schema:eligibleCustomerType"?: SchemaValue<BusinessEntityType | IdReference>;
    /** The duration for which the given offer is valid. */
    "schema:eligibleDuration"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. */
    "schema:eligibleQuantity"?: SchemaValue<QuantitativeValue | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
     *
     * See also {@link https://schema.org/ineligibleRegion ineligibleRegion}.
     */
    "schema:eligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
    /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. */
    "schema:eligibleTransactionVolume"?: SchemaValue<PriceSpecification | IdReference>;
    /** A Global Trade Item Number ({@link https://www.gs1.org/standards/id-keys/gtin GTIN}). GTINs identify trade items, including products and services, using numeric identification codes. The {@link https://schema.org/gtin gtin} property generalizes the earlier {@link https://schema.org/gtin8 gtin8}, {@link https://schema.org/gtin12 gtin12}, {@link https://schema.org/gtin13 gtin13}, and {@link https://schema.org/gtin14 gtin14} properties. The GS1 {@link https://www.gs1.org/standards/Digital-Link/ digital link specifications} express GTINs as URLs. A correct {@link https://schema.org/gtin gtin} value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a {@link https://www.gs1.org/services/check-digit-calculator valid GS1 check digit} and meet the other rules for valid GTINs. See also {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1's GTIN Summary} and {@link https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged. */
    "schema:gtin"?: SchemaValue<Text>;
    /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin12"?: SchemaValue<Text>;
    /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin13"?: SchemaValue<Text>;
    /** The GTIN-14 code of the product, or the product to which the offer refers. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin14"?: SchemaValue<Text>;
    /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin8"?: SchemaValue<Text>;
    /** This links to a node or nodes indicating the exact quantity of the products included in an {@link https://schema.org/Offer Offer} or {@link https://schema.org/ProductCollection ProductCollection}. */
    "schema:includesObject"?: SchemaValue<TypeAndQuantityNode | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "schema:ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
    /** The current approximate inventory level for the item or items. */
    "schema:inventoryLevel"?: SchemaValue<QuantitativeValue | IdReference>;
    /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
    "schema:itemCondition"?: SchemaValue<OfferItemCondition | IdReference>;
    /** An item being offered (or demanded). The transactional nature of the offer or demand is documented using {@link https://schema.org/businessFunction businessFunction}, e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:itemOffered"?: SchemaValue<AggregateOffer | CreativeWork | Event | MenuItem | Product | Service | Trip | IdReference>;
    /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
    "schema:mpn"?: SchemaValue<Text>;
    /** One or more detailed price specifications, indicating the unit price and delivery or payment charges. */
    "schema:priceSpecification"?: SchemaValue<PriceSpecification | IdReference>;
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "schema:seller"?: SchemaValue<Organization | Person | IdReference>;
    /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. */
    "schema:serialNumber"?: SchemaValue<Text>;
    /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
    "schema:sku"?: SchemaValue<Text>;
    /** The date when the item becomes valid. */
    "schema:validFrom"?: SchemaValue<Date | DateTime>;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "schema:validThrough"?: SchemaValue<Date | DateTime>;
    /** The warranty promise(s) included in the offer. */
    "schema:warranty"?: SchemaValue<WarrantyPromise | IdReference>;
}
interface DemandLeaf extends DemandBase {
    "@type": "schema:Demand";
}
/** A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply. */
export type Demand = DemandLeaf;

interface DentistBase extends MedicalOrganizationBase, LocalBusinessBase, LocalBusinessBase {
}
interface DentistLeaf extends DentistBase {
    "@type": "schema:Dentist";
}
/** A dentist. */
export type Dentist = DentistLeaf | string;

interface DepartActionLeaf extends MoveActionBase {
    "@type": "schema:DepartAction";
}
/** The act of departing from a place. An agent departs from an fromLocation for a destination, optionally with participants. */
export type DepartAction = DepartActionLeaf;

interface DepartmentStoreLeaf extends LocalBusinessBase {
    "@type": "schema:DepartmentStore";
}
/** A department store. */
export type DepartmentStore = DepartmentStoreLeaf | string;

interface DepositAccountBase extends BankAccountBase, InvestmentOrDepositBase {
}
interface DepositAccountLeaf extends DepositAccountBase {
    "@type": "schema:DepositAccount";
}
/** A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits. */
export type DepositAccount = DepositAccountLeaf;

interface DevOpsOperationsModelAreaLeaf extends ThingBase {
    "@type": "coremo:DevOpsOperationsModelArea";
}
/** A DevOps model area. */
export type DevOpsOperationsModelArea = DevOpsOperationsModelAreaLeaf;

interface DiagnosticLabBase extends MedicalOrganizationBase {
    /** A diagnostic test or procedure offered by this lab. */
    "schema:availableTest"?: SchemaValue<MedicalTest | IdReference>;
}
interface DiagnosticLabLeaf extends DiagnosticLabBase {
    "@type": "schema:DiagnosticLab";
}
/** A medical laboratory that offers on-site or off-site diagnostic services. */
export type DiagnosticLab = DiagnosticLabLeaf | string;

interface DiagnosticProcedureLeaf extends MedicalProcedureBase {
    "@type": "schema:DiagnosticProcedure";
}
/** A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes. */
export type DiagnosticProcedure = DiagnosticProcedureLeaf;

interface DietBase extends CreativeWorkBase, MedicalEntityBase {
    /** Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines. */
    "schema:dietFeatures"?: SchemaValue<Text>;
    /** People or organizations that endorse the plan. */
    "schema:endorsers"?: SchemaValue<Organization | Person | IdReference>;
    /** Medical expert advice related to the plan. */
    "schema:expertConsiderations"?: SchemaValue<Text>;
    /** Specific physiologic benefits associated to the plan. */
    "schema:physiologicalBenefits"?: SchemaValue<Text>;
    /** Specific physiologic risks associated to the diet plan. */
    "schema:risks"?: SchemaValue<Text>;
}
interface DietLeaf extends DietBase {
    "@type": "schema:Diet";
}
/** A strategy of regulating the intake of food to achieve or maintain a specific health-related goal. */
export type Diet = DietLeaf;

interface DietarySupplementBase extends SubstanceBase {
    /** An active ingredient, typically chemical compounds and/or biologic substances. */
    "schema:activeIngredient"?: SchemaValue<Text>;
    /** True if this item's name is a proprietary/brand name (vs. generic name). */
    "schema:isProprietary"?: SchemaValue<Boolean>;
    /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
    "schema:legalStatus"?: SchemaValue<DrugLegalStatus | MedicalEnumeration | Text | IdReference>;
    /** The manufacturer of the product. */
    "schema:manufacturer"?: SchemaValue<Organization | IdReference>;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "schema:maximumIntake"?: SchemaValue<MaximumDoseSchedule | IdReference>;
    /** The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. */
    "schema:mechanismOfAction"?: SchemaValue<Text>;
    /** The generic name of this drug or supplement. */
    "schema:nonProprietaryName"?: SchemaValue<Text>;
    /** Proprietary name given to the diet plan, typically by its originator or creator. */
    "schema:proprietaryName"?: SchemaValue<Text>;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "schema:recommendedIntake"?: SchemaValue<RecommendedDoseSchedule | IdReference>;
    /** Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement. */
    "schema:safetyConsideration"?: SchemaValue<Text>;
    /** Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. */
    "schema:targetPopulation"?: SchemaValue<Text>;
}
interface DietarySupplementLeaf extends DietarySupplementBase {
    "@type": "schema:DietarySupplement";
}
/** A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites. */
export type DietarySupplement = DietarySupplementLeaf;

interface DigitalDocumentBase extends CreativeWorkBase {
    /** A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public". */
    "schema:hasDigitalDocumentPermission"?: SchemaValue<DigitalDocumentPermission | IdReference>;
}
interface DigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "schema:DigitalDocument";
}
/** An electronic file or document. */
export type DigitalDocument = DigitalDocumentLeaf | NoteDigitalDocument | PresentationDigitalDocument | SpreadsheetDigitalDocument | TextDigitalDocument;

interface DigitalDocumentPermissionBase extends ThingBase {
    /** The person, organization, contact point, or audience that has been granted this permission. */
    "schema:grantee"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
    /** The type of permission granted the person, organization, or audience. */
    "schema:permissionType"?: SchemaValue<DigitalDocumentPermissionType | IdReference>;
}
interface DigitalDocumentPermissionLeaf extends DigitalDocumentPermissionBase {
    "@type": "schema:DigitalDocumentPermission";
}
/** A permission for a particular person or group to access a particular file. */
export type DigitalDocumentPermission = DigitalDocumentPermissionLeaf;

interface DigitalDocumentPermissionTypeLeaf extends EnumerationBase {
    "@type": "schema:DigitalDocumentPermissionType";
}
/** A type of permission which can be granted for accessing a digital document. */
export type DigitalDocumentPermissionType = "https://schema.org/CommentPermission" | "schema:CommentPermission" | "https://schema.org/ReadPermission" | "schema:ReadPermission" | "https://schema.org/WritePermission" | "schema:WritePermission" | DigitalDocumentPermissionTypeLeaf;

interface DisagreeActionLeaf extends ActionBase {
    "@type": "schema:DisagreeAction";
}
/** The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants. */
export type DisagreeAction = DisagreeActionLeaf;

interface DiscoverActionLeaf extends ActionBase {
    "@type": "schema:DiscoverAction";
}
/** The act of discovering/finding an object. */
export type DiscoverAction = DiscoverActionLeaf;

interface DiscussionForumPostingLeaf extends SocialMediaPostingBase {
    "@type": "schema:DiscussionForumPosting";
}
/** A posting to a discussion forum. */
export type DiscussionForumPosting = DiscussionForumPostingLeaf;

interface DislikeActionLeaf extends ActionBase {
    "@type": "schema:DislikeAction";
}
/** The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants. */
export type DislikeAction = DislikeActionLeaf;

interface DisputeLeaf extends ThingBase {
    "@type": "camo:Dispute";
}
/** A dispute between the parties. */
export type Dispute = DisputeLeaf;

interface DisputeDecisionLeaf extends ThingBase {
    "@type": "camo:DisputeDecision";
}
/** A decision of the DAAB or other dispute body. */
export type DisputeDecision = DisputeDecisionLeaf;

interface DisputeNotificationLeaf extends ThingBase {
    "@type": "camo:DisputeNotification";
}
/** A notification relates to the DAAB. */
export type DisputeNotification = DisputeNotificationLeaf | DisputeDecision | DisputeReferral;

interface DisputeReferralLeaf extends ThingBase {
    "@type": "camo:DisputeReferral";
}
/** A referral of a dispute to the DAAB or other dispute body. */
export type DisputeReferral = DisputeReferralLeaf;

interface DistanceLeaf extends ThingBase {
    "@type": "schema:Distance";
}
/** Properties that take Distances as values are of the form '<Number> <Length unit of measure>'. E.g., '7 ft'. */
export type Distance = DistanceLeaf | string;

interface DistilleryLeaf extends FoodEstablishmentBase {
    "@type": "schema:Distillery";
}
/** A distillery. */
export type Distillery = DistilleryLeaf | string;

interface DiversionSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:DiversionSectionPaymentDescription";
}
/** A diversion payment that is part of a contract payment description. */
export type DiversionSectionPaymentDescription = DiversionSectionPaymentDescriptionLeaf;

interface DonateActionBase extends TradeActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface DonateActionLeaf extends DonateActionBase {
    "@type": "schema:DonateAction";
}
/** The act of providing goods, services, or money without compensation, often for philanthropic reasons. */
export type DonateAction = DonateActionLeaf;

interface DoseScheduleBase extends MedicalEntityBase {
    /** The unit of the dose, e.g. 'mg'. */
    "schema:doseUnit"?: SchemaValue<Text>;
    /** The value of the dose, e.g. 500. */
    "schema:doseValue"?: SchemaValue<Number | QualitativeValue | IdReference>;
    /** How often the dose is taken, e.g. 'daily'. */
    "schema:frequency"?: SchemaValue<Text>;
    /** Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. */
    "schema:targetPopulation"?: SchemaValue<Text>;
}
interface DoseScheduleLeaf extends DoseScheduleBase {
    "@type": "schema:DoseSchedule";
}
/** A specific dosing schedule for a drug or supplement. */
export type DoseSchedule = DoseScheduleLeaf | MaximumDoseSchedule | RecommendedDoseSchedule | ReportedDoseSchedule;

interface DownloadActionLeaf extends TransferActionBase {
    "@type": "schema:DownloadAction";
}
/** The act of downloading an object. */
export type DownloadAction = DownloadActionLeaf;

interface DrawActionLeaf extends ActionBase {
    "@type": "schema:DrawAction";
}
/** The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments. */
export type DrawAction = DrawActionLeaf;

interface DrawingLeaf extends CreativeWorkBase {
    "@type": "schema:Drawing";
}
/** A picture or diagram made with a pencil, pen, or crayon rather than paint. */
export type Drawing = DrawingLeaf;

interface DrinkActionLeaf extends ConsumeActionBase {
    "@type": "schema:DrinkAction";
}
/** The act of swallowing liquids. */
export type DrinkAction = DrinkActionLeaf;

interface DriveWheelConfigurationValueLeaf extends QualitativeValueBase {
    "@type": "schema:DriveWheelConfigurationValue";
}
/** A value indicating which roadwheels will receive torque. */
export type DriveWheelConfigurationValue = "https://schema.org/AllWheelDriveConfiguration" | "schema:AllWheelDriveConfiguration" | "https://schema.org/FourWheelDriveConfiguration" | "schema:FourWheelDriveConfiguration" | "https://schema.org/FrontWheelDriveConfiguration" | "schema:FrontWheelDriveConfiguration" | "https://schema.org/RearWheelDriveConfiguration" | "schema:RearWheelDriveConfiguration" | DriveWheelConfigurationValueLeaf;

interface DrugBase extends SubstanceBase {
    /** An active ingredient, typically chemical compounds and/or biologic substances. */
    "schema:activeIngredient"?: SchemaValue<Text>;
    /** A route by which this drug may be administered, e.g. 'oral'. */
    "schema:administrationRoute"?: SchemaValue<Text>;
    /** Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug. */
    "schema:alcoholWarning"?: SchemaValue<Text>;
    /** An available dosage strength for the drug. */
    "schema:availableStrength"?: SchemaValue<DrugStrength | IdReference>;
    /** Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers. */
    "schema:breastfeedingWarning"?: SchemaValue<Text>;
    /**
     * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
     *
     * @deprecated Consider using https://schema.org/clinicalPharmacology instead.
     */
    "schema:clincalPharmacology"?: SchemaValue<Text>;
    /** Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). */
    "schema:clinicalPharmacology"?: SchemaValue<Text>;
    /** A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'. */
    "schema:dosageForm"?: SchemaValue<Text>;
    /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. */
    "schema:doseSchedule"?: SchemaValue<DoseSchedule | IdReference>;
    /** The class of drug this belongs to (e.g., statins). */
    "schema:drugClass"?: SchemaValue<DrugClass | IdReference>;
    /** The unit in which the drug is measured, e.g. '5 mg tablet'. */
    "schema:drugUnit"?: SchemaValue<Text>;
    /** Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug. */
    "schema:foodWarning"?: SchemaValue<Text>;
    /** The insurance plans that cover this drug. */
    "schema:includedInHealthInsurancePlan"?: SchemaValue<HealthInsurancePlan | IdReference>;
    /** Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications. */
    "schema:interactingDrug"?: SchemaValue<Drug | IdReference>;
    /** True if the drug is available in a generic form (regardless of name). */
    "schema:isAvailableGenerically"?: SchemaValue<Boolean>;
    /** True if this item's name is a proprietary/brand name (vs. generic name). */
    "schema:isProprietary"?: SchemaValue<Boolean>;
    /** Link to the drug's label details. */
    "schema:labelDetails"?: SchemaValue<URL | IdReference>;
    /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
    "schema:legalStatus"?: SchemaValue<DrugLegalStatus | MedicalEnumeration | Text | IdReference>;
    /** The manufacturer of the product. */
    "schema:manufacturer"?: SchemaValue<Organization | IdReference>;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "schema:maximumIntake"?: SchemaValue<MaximumDoseSchedule | IdReference>;
    /** The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. */
    "schema:mechanismOfAction"?: SchemaValue<Text>;
    /** The generic name of this drug or supplement. */
    "schema:nonProprietaryName"?: SchemaValue<Text>;
    /** Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response. */
    "schema:overdosage"?: SchemaValue<Text>;
    /** Pregnancy category of this drug. */
    "schema:pregnancyCategory"?: SchemaValue<DrugPregnancyCategory | IdReference>;
    /** Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy. */
    "schema:pregnancyWarning"?: SchemaValue<Text>;
    /** Link to prescribing information for the drug. */
    "schema:prescribingInfo"?: SchemaValue<URL | IdReference>;
    /** Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc. */
    "schema:prescriptionStatus"?: SchemaValue<DrugPrescriptionStatus | Text | IdReference>;
    /** Proprietary name given to the diet plan, typically by its originator or creator. */
    "schema:proprietaryName"?: SchemaValue<Text>;
    /** Any other drug related to this one, for example commonly-prescribed alternatives. */
    "schema:relatedDrug"?: SchemaValue<Drug | IdReference>;
    /** The RxCUI drug identifier from RXNORM. */
    "schema:rxcui"?: SchemaValue<Text>;
    /** Any FDA or other warnings about the drug (text or URL). */
    "schema:warning"?: SchemaValue<Text | URL | IdReference>;
}
interface DrugLeaf extends DrugBase {
    "@type": "schema:Drug";
}
/** A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them. */
export type Drug = DrugLeaf;

interface DrugClassBase extends MedicalEntityBase {
    /** Specifying a drug or medicine used in a medication procedure. */
    "schema:drug"?: SchemaValue<Drug | IdReference>;
}
interface DrugClassLeaf extends DrugClassBase {
    "@type": "schema:DrugClass";
}
/** A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc. */
export type DrugClass = DrugClassLeaf;

interface DrugCostBase extends MedicalEntityBase {
    /** The location in which the status applies. */
    "schema:applicableLocation"?: SchemaValue<AdministrativeArea | IdReference>;
    /** The category of cost, such as wholesale, retail, reimbursement cap, etc. */
    "schema:costCategory"?: SchemaValue<DrugCostCategory | IdReference>;
    /** The currency (in 3-letter of the drug cost. See: http://en.wikipedia.org/wiki/ISO_4217. */
    "schema:costCurrency"?: SchemaValue<Text>;
    /** Additional details to capture the origin of the cost data. For example, 'Medicare Part B'. */
    "schema:costOrigin"?: SchemaValue<Text>;
    /** The cost per unit of the drug. */
    "schema:costPerUnit"?: SchemaValue<Number | QualitativeValue | Text | IdReference>;
    /** The unit in which the drug is measured, e.g. '5 mg tablet'. */
    "schema:drugUnit"?: SchemaValue<Text>;
}
interface DrugCostLeaf extends DrugCostBase {
    "@type": "schema:DrugCost";
}
/** The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup. */
export type DrugCost = DrugCostLeaf;

interface DrugCostCategoryLeaf extends EnumerationBase {
    "@type": "schema:DrugCostCategory";
}
/** Enumerated categories of medical drug costs. */
export type DrugCostCategory = "https://schema.org/ReimbursementCap" | "schema:ReimbursementCap" | "https://schema.org/Retail" | "schema:Retail" | "https://schema.org/Wholesale" | "schema:Wholesale" | DrugCostCategoryLeaf;

interface DrugLegalStatusBase extends MedicalEntityBase {
    /** The location in which the status applies. */
    "schema:applicableLocation"?: SchemaValue<AdministrativeArea | IdReference>;
}
interface DrugLegalStatusLeaf extends DrugLegalStatusBase {
    "@type": "schema:DrugLegalStatus";
}
/** The legal availability status of a medical drug. */
export type DrugLegalStatus = DrugLegalStatusLeaf;

interface DrugPregnancyCategoryLeaf extends EnumerationBase {
    "@type": "schema:DrugPregnancyCategory";
}
/** Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy. */
export type DrugPregnancyCategory = "https://schema.org/FDAcategoryA" | "schema:FDAcategoryA" | "https://schema.org/FDAcategoryB" | "schema:FDAcategoryB" | "https://schema.org/FDAcategoryC" | "schema:FDAcategoryC" | "https://schema.org/FDAcategoryD" | "schema:FDAcategoryD" | "https://schema.org/FDAcategoryX" | "schema:FDAcategoryX" | "https://schema.org/FDAnotEvaluated" | "schema:FDAnotEvaluated" | DrugPregnancyCategoryLeaf;

interface DrugPrescriptionStatusLeaf extends EnumerationBase {
    "@type": "schema:DrugPrescriptionStatus";
}
/** Indicates whether this drug is available by prescription or over-the-counter. */
export type DrugPrescriptionStatus = "https://schema.org/OTC" | "schema:OTC" | "https://schema.org/PrescriptionOnly" | "schema:PrescriptionOnly" | DrugPrescriptionStatusLeaf;

interface DrugStrengthBase extends MedicalEntityBase {
    /** An active ingredient, typically chemical compounds and/or biologic substances. */
    "schema:activeIngredient"?: SchemaValue<Text>;
    /** The location in which the strength is available. */
    "schema:availableIn"?: SchemaValue<AdministrativeArea | IdReference>;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "schema:maximumIntake"?: SchemaValue<MaximumDoseSchedule | IdReference>;
    /** The units of an active ingredient's strength, e.g. mg. */
    "schema:strengthUnit"?: SchemaValue<Text>;
    /** The value of an active ingredient's strength, e.g. 325. */
    "schema:strengthValue"?: SchemaValue<Number>;
}
interface DrugStrengthLeaf extends DrugStrengthBase {
    "@type": "schema:DrugStrength";
}
/** A specific strength in which a medical drug is available in a specific country. */
export type DrugStrength = DrugStrengthLeaf;

interface DryCleaningOrLaundryLeaf extends LocalBusinessBase {
    "@type": "schema:DryCleaningOrLaundry";
}
/** A dry-cleaning business. */
export type DryCleaningOrLaundry = DryCleaningOrLaundryLeaf | string;

interface DurationLeaf extends ThingBase {
    "@type": "schema:Duration";
}
/** Quantity: Duration (use {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}). */
export type Duration = DurationLeaf | string;

interface EatActionLeaf extends ConsumeActionBase {
    "@type": "schema:EatAction";
}
/** The act of swallowing solid objects. */
export type EatAction = EatActionLeaf;

interface EducationalAudienceBase extends AudienceBase {
    /** An educationalRole of an EducationalAudience. */
    "schema:educationalRole"?: SchemaValue<Text>;
}
interface EducationalAudienceLeaf extends EducationalAudienceBase {
    "@type": "schema:EducationalAudience";
}
/** An EducationalAudience. */
export type EducationalAudience = EducationalAudienceLeaf;

interface EducationalOccupationalCredentialBase extends CreativeWorkBase {
    /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
    "schema:competencyRequired"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** The category or type of credential being described, for example "degree\u201D, \u201Ccertificate\u201D, \u201Cbadge\u201D, or more specific term. */
    "schema:credentialCategory"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
    "schema:educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation. */
    "schema:recognizedBy"?: SchemaValue<Organization | IdReference>;
    /** The duration of validity of a permit or similar thing. */
    "schema:validFor"?: SchemaValue<Duration | IdReference>;
    /** The geographic area where a permit or similar thing is valid. */
    "schema:validIn"?: SchemaValue<AdministrativeArea | IdReference>;
}
interface EducationalOccupationalCredentialLeaf extends EducationalOccupationalCredentialBase {
    "@type": "schema:EducationalOccupationalCredential";
}
/** An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer. */
export type EducationalOccupationalCredential = EducationalOccupationalCredentialLeaf;

interface EducationalOccupationalProgramBase extends ThingBase {
    /** The date at which the program stops collecting applications for the next enrollment cycle. */
    "schema:applicationDeadline"?: SchemaValue<Date>;
    /** The date at which the program begins collecting applications for the next enrollment cycle. */
    "schema:applicationStartDate"?: SchemaValue<Date>;
    /** The day of the week for which these opening hours are valid. */
    "schema:dayOfWeek"?: SchemaValue<DayOfWeek | IdReference>;
    /** A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program. */
    "schema:educationalCredentialAwarded"?: SchemaValue<EducationalOccupationalCredential | Text | URL | IdReference>;
    /** Similar to courseMode, The medium or means of delivery of the program as a whole. The value may either be a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ). */
    "schema:educationalProgramMode"?: SchemaValue<Text | URL | IdReference>;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:endDate"?: SchemaValue<Date | DateTime>;
    /** A financial aid type or program which students may use to pay for tuition or fees associated with the program. */
    "schema:financialAidEligible"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program. */
    "schema:hasCourse"?: SchemaValue<Course | IdReference>;
    /** The maximum number of students who may be enrolled in the program. */
    "schema:maximumEnrollment"?: SchemaValue<Integer>;
    /** The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram. */
    "schema:numberOfCredits"?: SchemaValue<Integer | StructuredValue | IdReference>;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as {@link http://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
     *
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    "schema:occupationalCategory"?: SchemaValue<CategoryCode | Text | IdReference>;
    /** A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program. */
    "schema:occupationalCredentialAwarded"?: SchemaValue<EducationalOccupationalCredential | Text | URL | IdReference>;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:offers"?: SchemaValue<Demand | Offer | IdReference>;
    /** Prerequisites for enrolling in the program. */
    "schema:programPrerequisites"?: SchemaValue<AlignmentObject | Course | EducationalOccupationalCredential | Text | IdReference>;
    /** The type of educational or occupational program. For example, classroom, internship, alternance, etc.. */
    "schema:programType"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "schema:provider"?: SchemaValue<Organization | Person | IdReference>;
    /** The expected salary upon completing the training. */
    "schema:salaryUponCompletion"?: SchemaValue<MonetaryAmountDistribution | IdReference>;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:startDate"?: SchemaValue<Date | DateTime>;
    /** The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term. */
    "schema:termDuration"?: SchemaValue<Duration | IdReference>;
    /** The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2. */
    "schema:termsPerYear"?: SchemaValue<Number>;
    /** The time of day the program normally runs. For example, "evenings". */
    "schema:timeOfDay"?: SchemaValue<Text>;
    /** The expected length of time to complete the program if attending full-time. */
    "schema:timeToComplete"?: SchemaValue<Duration | IdReference>;
    /** The estimated salary earned while in the program. */
    "schema:trainingSalary"?: SchemaValue<MonetaryAmountDistribution | IdReference>;
    /** The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution. */
    "schema:typicalCreditsPerTerm"?: SchemaValue<Integer | StructuredValue | IdReference>;
}
interface EducationalOccupationalProgramLeaf extends EducationalOccupationalProgramBase {
    "@type": "schema:EducationalOccupationalProgram";
}
/** A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree). */
export type EducationalOccupationalProgram = EducationalOccupationalProgramLeaf | WorkBasedProgram;

interface EducationalOrganizationBase extends OrganizationBase, CivicStructureBase {
    /** Alumni of an organization. */
    "schema:alumni"?: SchemaValue<Person | IdReference>;
}
interface EducationalOrganizationLeaf extends EducationalOrganizationBase {
    "@type": "schema:EducationalOrganization";
}
/** An educational organization. */
export type EducationalOrganization = EducationalOrganizationLeaf | CollegeOrUniversity | ElementarySchool | HighSchool | MiddleSchool | Preschool | School | string;

interface EducationCommunicationEntityLeaf extends ThingBase {
    "@type": "coremo:EducationCommunicationEntity";
}
/** An education entity. */
export type EducationCommunicationEntity = EducationCommunicationEntityLeaf;

interface EducationCommunicationModelAreaLeaf extends ThingBase {
    "@type": "coremo:EducationCommunicationModelArea";
}
/** An education model area. */
export type EducationCommunicationModelArea = EducationCommunicationModelAreaLeaf;

interface EducationEventBase extends EventBase {
    /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
    "schema:assesses"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
    "schema:educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
    "schema:teaches"?: SchemaValue<DefinedTerm | Text | IdReference>;
}
interface EducationEventLeaf extends EducationEventBase {
    "@type": "schema:EducationEvent";
}
/** Event type: Education event. */
export type EducationEvent = EducationEventLeaf;

interface ElectricianLeaf extends LocalBusinessBase {
    "@type": "schema:Electrician";
}
/** An electrician. */
export type Electrician = ElectricianLeaf | string;

interface ElectronicsStoreLeaf extends LocalBusinessBase {
    "@type": "schema:ElectronicsStore";
}
/** An electronics store. */
export type ElectronicsStore = ElectronicsStoreLeaf | string;

interface ElementarySchoolLeaf extends EducationalOrganizationBase {
    "@type": "schema:ElementarySchool";
}
/** An elementary school. */
export type ElementarySchool = ElementarySchoolLeaf | string;

interface EmailMessageLeaf extends MessageBase {
    "@type": "schema:EmailMessage";
}
/** An email message. */
export type EmailMessage = EmailMessageLeaf;

interface EmbassyLeaf extends CivicStructureBase {
    "@type": "schema:Embassy";
}
/** An embassy. */
export type Embassy = EmbassyLeaf | string;

interface EmergencyServiceLeaf extends LocalBusinessBase {
    "@type": "schema:EmergencyService";
}
/** An emergency service, such as a fire station or ER. */
export type EmergencyService = EmergencyServiceLeaf | FireStation | Hospital | PoliceStation | string;

interface EmployeeRoleBase extends OrganizationRoleBase {
    /** The base salary of the job or of an employee in an EmployeeRole. */
    "schema:baseSalary"?: SchemaValue<MonetaryAmount | Number | PriceSpecification | IdReference>;
    /** The currency (coded using {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217} ) used for the main salary information in this job posting or for this employee. */
    "schema:salaryCurrency"?: SchemaValue<Text>;
}
interface EmployeeRoleLeaf extends EmployeeRoleBase {
    "@type": "schema:EmployeeRole";
}
/** A subclass of OrganizationRole used to describe employee relationships. */
export type EmployeeRole = EmployeeRoleLeaf;

interface EmployerAggregateRatingLeaf extends AggregateRatingBase {
    "@type": "schema:EmployerAggregateRating";
}
/** An aggregate rating of an Organization related to its role as an employer. */
export type EmployerAggregateRating = EmployerAggregateRatingLeaf;

interface EmployerReviewLeaf extends ReviewBase {
    "@type": "schema:EmployerReview";
}
/** An {@link https://schema.org/EmployerReview EmployerReview} is a review of an {@link https://schema.org/Organization Organization} regarding its role as an employer, written by a current or former employee of that organization. */
export type EmployerReview = EmployerReviewLeaf;

interface EmploymentAgencyLeaf extends LocalBusinessBase {
    "@type": "schema:EmploymentAgency";
}
/** An employment agency. */
export type EmploymentAgency = EmploymentAgencyLeaf | string;

interface EnableableBase extends ThingBase {
    /** The enabled state of a Enableable entity. */
    "coremo:isEnabled"?: SchemaValue<Boolean>;
}
interface EnableableLeaf extends EnableableBase {
    "@type": "coremo:Enableable";
}
/** A resource that can be enabled. */
export type Enableable = EnableableLeaf;

interface EndorseActionBase extends ActionBase {
    /** A sub property of participant. The person/organization being supported. */
    "schema:endorsee"?: SchemaValue<Organization | Person | IdReference>;
}
interface EndorseActionLeaf extends EndorseActionBase {
    "@type": "schema:EndorseAction";
}
/** An agent approves/certifies/likes/supports/sanction an object. */
export type EndorseAction = EndorseActionLeaf;

interface EndorsementRatingLeaf extends RatingBase {
    "@type": "schema:EndorsementRating";
}
/**
 * An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" blog, a "Like" or "+1" on a social network. It can be considered the {@link https://schema.org/result result} of an {@link https://schema.org/EndorseAction EndorseAction} in which the {@link https://schema.org/object object} of the action is rated positively by some {@link https://schema.org/agent agent}. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the {@link https://schema.org/Action Action}.
 *
 * An {@link https://schema.org/EndorsementRating EndorsementRating} may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive, endorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.
 */
export type EndorsementRating = EndorsementRatingLeaf;

interface EnergyLeaf extends ThingBase {
    "@type": "schema:Energy";
}
/** Properties that take Energy as values are of the form '<Number> <Energy unit of measure>'. */
export type Energy = EnergyLeaf | string;

interface EnergyConsumptionDetailsBase extends ThingBase {
    /** Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++. */
    "schema:energyEfficiencyScaleMax"?: SchemaValue<EUEnergyEfficiencyEnumeration | IdReference>;
    /** Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++. */
    "schema:energyEfficiencyScaleMin"?: SchemaValue<EUEnergyEfficiencyEnumeration | IdReference>;
    /** Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard. */
    "schema:hasEnergyEfficiencyCategory"?: SchemaValue<EnergyEfficiencyEnumeration | IdReference>;
}
interface EnergyConsumptionDetailsLeaf extends EnergyConsumptionDetailsBase {
    "@type": "schema:EnergyConsumptionDetails";
}
/** EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example {@link https://eur-lex.europa.eu/eli/reg/2017/1369/oj EU directive 2017/1369} for energy labeling and the {@link https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/energy-water-use-labeling-consumer Energy labeling rule} under the Energy Policy and Conservation Act (EPCA) in the US. */
export type EnergyConsumptionDetails = EnergyConsumptionDetailsLeaf;

interface EnergyEfficiencyEnumerationLeaf extends EnumerationBase {
    "@type": "schema:EnergyEfficiencyEnumeration";
}
/** Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards. */
export type EnergyEfficiencyEnumeration = EnergyEfficiencyEnumerationLeaf | EnergyStarEnergyEfficiencyEnumeration | EUEnergyEfficiencyEnumeration;

interface EnergyStarEnergyEfficiencyEnumerationLeaf extends EnumerationBase {
    "@type": "schema:EnergyStarEnergyEfficiencyEnumeration";
}
/** Used to indicate whether a product is EnergyStar certified. */
export type EnergyStarEnergyEfficiencyEnumeration = "https://schema.org/EnergyStarCertified" | "schema:EnergyStarCertified" | EnergyStarEnergyEfficiencyEnumerationLeaf;

interface EngineeringModelsetModelAreaLeaf extends ThingBase {
    "@type": "coremo:EngineeringModelsetModelArea";
}
/** An engineering modelset model area. */
export type EngineeringModelsetModelArea = EngineeringModelsetModelAreaLeaf;

interface EngineSpecificationBase extends ThingBase {
    /**
     * The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement.
     *
     * Typical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches
     * - Note 1: You can link to information about how the given value has been determined using the {@link https://schema.org/valueReference valueReference} property.
     * - Note 2: You can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:engineDisplacement"?: SchemaValue<QuantitativeValue | IdReference>;
    /**
     * The power of the vehicle's engine. Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)
     * - Note 1: There are many different ways of measuring an engine's power. For an overview, see {@link http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes}.
     * - Note 2: You can link to information about how the given value has been determined using the {@link https://schema.org/valueReference valueReference} property.
     * - Note 3: You can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:enginePower"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The type of engine or engines powering the vehicle. */
    "schema:engineType"?: SchemaValue<QualitativeValue | Text | URL | IdReference>;
    /** The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle. */
    "schema:fuelType"?: SchemaValue<QualitativeValue | Text | URL | IdReference>;
    /**
     * The torque (turning force) of the vehicle's engine.
     *
     * Typical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch
     * - Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the {@link https://schema.org/valueReference valueReference} property.
     * - Note 2: You can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:torque"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface EngineSpecificationLeaf extends EngineSpecificationBase {
    "@type": "schema:EngineSpecification";
}
/** Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities. */
export type EngineSpecification = EngineSpecificationLeaf;

interface EntertainmentBusinessLeaf extends LocalBusinessBase {
    "@type": "schema:EntertainmentBusiness";
}
/** A business providing entertainment. */
export type EntertainmentBusiness = EntertainmentBusinessLeaf | AdultEntertainment | AmusementPark | ArtGallery | Casino | ComedyClub | MovieTheater | NightClub | string;

interface EntryPointBase extends ThingBase {
    /** An application that can complete the request. */
    "schema:actionApplication"?: SchemaValue<SoftwareApplication | IdReference>;
    /** The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication. */
    "schema:actionPlatform"?: SchemaValue<Text | URL | IdReference>;
    /**
     * An application that can complete the request.
     *
     * @deprecated Consider using https://schema.org/actionApplication instead.
     */
    "schema:application"?: SchemaValue<SoftwareApplication | IdReference>;
    /** The supported content type(s) for an EntryPoint response. */
    "schema:contentType"?: SchemaValue<Text>;
    /** The supported encoding type(s) for an EntryPoint request. */
    "schema:encodingType"?: SchemaValue<Text>;
    /** An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP. */
    "schema:httpMethod"?: SchemaValue<Text>;
    /** An url template (RFC6570) that will be used to construct the target of the execution of the action. */
    "schema:urlTemplate"?: SchemaValue<Text>;
}
interface EntryPointLeaf extends EntryPointBase {
    "@type": "schema:EntryPoint";
}
/** An entry point, within some Web-based protocol. */
export type EntryPoint = EntryPointLeaf | string;

interface EnumerationBase extends ThingBase {
    /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
    "schema:supersededBy"?: SchemaValue<Class | Enumeration | Property | IdReference>;
}
interface EnumerationLeaf extends EnumerationBase {
    "@type": "schema:Enumeration";
}
/** Lists or enumerations—for example, a list of cuisines or music genres, etc. */
export type Enumeration = EnumerationLeaf | BoardingPolicyType | BookFormatType | BusinessEntityType | BusinessFunction | CarUsageType | ContactPointOption | DayOfWeek | DeliveryMethod | DigitalDocumentPermissionType | EnergyEfficiencyEnumeration | EventAttendanceModeEnumeration | GamePlayMode | GenderType | GovernmentBenefitsType | HealthAspectEnumeration | ItemAvailability | ItemListOrderType | LegalValueLevel | MapCategoryType | MeasurementTypeEnumeration | MediaManipulationRatingEnumeration | MedicalEnumeration | MerchantReturnEnumeration | MusicAlbumProductionType | MusicAlbumReleaseType | MusicReleaseFormatType | NonprofitType | OfferItemCondition | PaymentMethod | PaymentStepKindEnumeration | PhysicalActivityCategory | PriceComponentTypeEnumeration | PriceTypeEnumeration | QualitativeValue | RefundTypeEnumeration | RestrictedDiet | ReturnFeesEnumeration | ReturnLabelSourceEnumeration | ReturnMethodEnumeration | RsvpResponseType | SizeGroupEnumeration | SizeSystemEnumeration | Specialty | StatusEnumeration | WarrantyScope;

interface EpisodeBase extends CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** Position of the episode within an ordered group of episodes. */
    "schema:episodeNumber"?: SchemaValue<Integer | Text>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** The season to which this episode belongs. */
    "schema:partOfSeason"?: SchemaValue<CreativeWorkSeason | IdReference>;
    /** The series to which this episode or season belongs. */
    "schema:partOfSeries"?: SchemaValue<CreativeWorkSeries | IdReference>;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "schema:productionCompany"?: SchemaValue<Organization | IdReference>;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "schema:trailer"?: SchemaValue<VideoObject | IdReference>;
}
interface EpisodeLeaf extends EpisodeBase {
    "@type": "schema:Episode";
}
/** A media episode (e.g. TV, radio, video game) which can be part of a series or season. */
export type Episode = EpisodeLeaf | PodcastEpisode | RadioEpisode | TVEpisode;

interface EUEnergyEfficiencyEnumerationLeaf extends EnumerationBase {
    "@type": "schema:EUEnergyEfficiencyEnumeration";
}
/** Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369. */
export type EUEnergyEfficiencyEnumeration = "https://schema.org/EUEnergyEfficiencyCategoryA" | "schema:EUEnergyEfficiencyCategoryA" | "https://schema.org/EUEnergyEfficiencyCategoryA1Plus" | "schema:EUEnergyEfficiencyCategoryA1Plus" | "https://schema.org/EUEnergyEfficiencyCategoryA2Plus" | "schema:EUEnergyEfficiencyCategoryA2Plus" | "https://schema.org/EUEnergyEfficiencyCategoryA3Plus" | "schema:EUEnergyEfficiencyCategoryA3Plus" | "https://schema.org/EUEnergyEfficiencyCategoryB" | "schema:EUEnergyEfficiencyCategoryB" | "https://schema.org/EUEnergyEfficiencyCategoryC" | "schema:EUEnergyEfficiencyCategoryC" | "https://schema.org/EUEnergyEfficiencyCategoryD" | "schema:EUEnergyEfficiencyCategoryD" | "https://schema.org/EUEnergyEfficiencyCategoryE" | "schema:EUEnergyEfficiencyCategoryE" | "https://schema.org/EUEnergyEfficiencyCategoryF" | "schema:EUEnergyEfficiencyCategoryF" | "https://schema.org/EUEnergyEfficiencyCategoryG" | "schema:EUEnergyEfficiencyCategoryG" | EUEnergyEfficiencyEnumerationLeaf;

interface EventBase extends ThingBase {
    /** The subject matter of the content. */
    "schema:about"?: SchemaValue<Thing | IdReference>;
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "schema:aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
    /** A person or organization attending the event. */
    "schema:attendee"?: SchemaValue<Organization | Person | IdReference>;
    /**
     * A person attending the event.
     *
     * @deprecated Consider using https://schema.org/attendee instead.
     */
    "schema:attendees"?: SchemaValue<Organization | Person | IdReference>;
    /** An intended audience, i.e. a group for whom something was created. */
    "schema:audience"?: SchemaValue<Audience | IdReference>;
    /** The person or organization who wrote a composition, or who is the composer of a work performed at some event. */
    "schema:composer"?: SchemaValue<Organization | Person | IdReference>;
    /** A secondary contributor to the CreativeWork or Event. */
    "schema:contributor"?: SchemaValue<Organization | Person | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /** The time admission will commence. */
    "schema:doorTime"?: SchemaValue<DateTime | Time>;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:endDate"?: SchemaValue<Date | DateTime>;
    /** The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix. */
    "schema:eventAttendanceMode"?: SchemaValue<EventAttendanceModeEnumeration | IdReference>;
    /** Associates an {@link https://schema.org/Event Event} with a {@link https://schema.org/Schedule Schedule}. There are circumstances where it is preferable to share a schedule for a series of repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An {@link https://schema.org/Event Event} that is associated with a {@link https://schema.org/Schedule Schedule} using this property should not have {@link https://schema.org/startDate startDate} or {@link https://schema.org/endDate endDate} properties. These are instead defined within the associated {@link https://schema.org/Schedule Schedule}, this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months or seasons. */
    "schema:eventSchedule"?: SchemaValue<Schedule | IdReference>;
    /** An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled. */
    "schema:eventStatus"?: SchemaValue<EventStatusType | IdReference>;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "schema:funder"?: SchemaValue<Organization | Person | IdReference>;
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "schema:inLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** A flag to signal that the item, event, or place is accessible for free. */
    "schema:isAccessibleForFree"?: SchemaValue<Boolean>;
    /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
    "schema:location"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference>;
    /** The total number of individuals that may attend an event or venue. */
    "schema:maximumAttendeeCapacity"?: SchemaValue<Integer>;
    /** The maximum physical attendee capacity of an {@link https://schema.org/Event Event} whose {@link https://schema.org/eventAttendanceMode eventAttendanceMode} is {@link https://schema.org/OfflineEventAttendanceMode OfflineEventAttendanceMode} (or the offline aspects, in the case of a {@link https://schema.org/MixedEventAttendanceMode MixedEventAttendanceMode}). */
    "schema:maximumPhysicalAttendeeCapacity"?: SchemaValue<Integer>;
    /** The maximum physical attendee capacity of an {@link https://schema.org/Event Event} whose {@link https://schema.org/eventAttendanceMode eventAttendanceMode} is {@link https://schema.org/OnlineEventAttendanceMode OnlineEventAttendanceMode} (or the online aspects, in the case of a {@link https://schema.org/MixedEventAttendanceMode MixedEventAttendanceMode}). */
    "schema:maximumVirtualAttendeeCapacity"?: SchemaValue<Integer>;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:offers"?: SchemaValue<Demand | Offer | IdReference>;
    /** An organizer of an Event. */
    "schema:organizer"?: SchemaValue<Organization | Person | IdReference>;
    /** A performer at the event—for example, a presenter, musician, musical group or actor. */
    "schema:performer"?: SchemaValue<Organization | Person | IdReference>;
    /**
     * The main performer or performers of the event—for example, a presenter, musician, or actor.
     *
     * @deprecated Consider using https://schema.org/performer instead.
     */
    "schema:performers"?: SchemaValue<Organization | Person | IdReference>;
    /** Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated. */
    "schema:previousStartDate"?: SchemaValue<Date>;
    /** The CreativeWork that captured all or part of this Event. */
    "schema:recordedIn"?: SchemaValue<CreativeWork | IdReference>;
    /** The number of attendee places for an event that remain unallocated. */
    "schema:remainingAttendeeCapacity"?: SchemaValue<Integer>;
    /** A review of the item. */
    "schema:review"?: SchemaValue<Review | IdReference>;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "schema:sponsor"?: SchemaValue<Organization | Person | IdReference>;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:startDate"?: SchemaValue<Date | DateTime>;
    /** An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference. */
    "schema:subEvent"?: SchemaValue<Event | IdReference>;
    /**
     * Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
     *
     * @deprecated Consider using https://schema.org/subEvent instead.
     */
    "schema:subEvents"?: SchemaValue<Event | IdReference>;
    /** An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent. */
    "schema:superEvent"?: SchemaValue<Event | IdReference>;
    /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event. */
    "schema:translator"?: SchemaValue<Organization | Person | IdReference>;
    /** The typical expected age range, e.g. '7-9', '11-'. */
    "schema:typicalAgeRange"?: SchemaValue<Text>;
    /** A work featured in some event, e.g. exhibited in an ExhibitionEvent. Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent). */
    "schema:workFeatured"?: SchemaValue<CreativeWork | IdReference>;
    /** A work performed in some event, for example a play performed in a TheaterEvent. */
    "schema:workPerformed"?: SchemaValue<CreativeWork | IdReference>;
}
interface EventLeaf extends EventBase {
    "@type": "schema:Event";
}
/** An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the {@link https://schema.org/offers offers} property. Repeated events may be structured as separate Event objects. */
export type Event = EventLeaf | BusinessEvent | ChildrensEvent | ComedyEvent | CourseInstance | DanceEvent | DeliveryEvent | EducationEvent | EventSeries | ExhibitionEvent | Festival | FoodEvent | Hackathon | LiteraryEvent | MusicEvent | PublicationEvent | SaleEvent | ScreeningEvent | SocialEvent | SportsEvent | TheaterEvent | UserInteraction | VisualArtsEvent;

interface EventAttendanceModeEnumerationLeaf extends EnumerationBase {
    "@type": "schema:EventAttendanceModeEnumeration";
}
/** An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline. */
export type EventAttendanceModeEnumeration = "https://schema.org/MixedEventAttendanceMode" | "schema:MixedEventAttendanceMode" | "https://schema.org/OfflineEventAttendanceMode" | "schema:OfflineEventAttendanceMode" | "https://schema.org/OnlineEventAttendanceMode" | "schema:OnlineEventAttendanceMode" | EventAttendanceModeEnumerationLeaf;

interface EventReservationLeaf extends ReservationBase {
    "@type": "schema:EventReservation";
}
/**
 * A reservation for an event like a concert, sporting event, or lecture.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export type EventReservation = EventReservationLeaf;

interface EventSeriesBase extends ThingBase, EventBase {
}
interface EventSeriesLeaf extends EventSeriesBase {
    "@type": "schema:EventSeries";
}
/**
 * A series of {@link https://schema.org/Event Event}s. Included events can relate with the series using the {@link https://schema.org/superEvent superEvent} property.
 *
 * An EventSeries is a collection of events that share some unifying characteristic. For example, "The Olympic Games" is a series, which is repeated regularly. The "2012 London Olympics" can be presented both as an {@link https://schema.org/Event Event} in the series "Olympic Games", and as an {@link https://schema.org/EventSeries EventSeries} that included a number of sporting competitions as Events.
 *
 * The nature of the association between the events in an {@link https://schema.org/EventSeries EventSeries} can vary, but typical examples could include a thematic event series (e.g. topical meetups or classes), or a series of regular events that share a location, attendee group and/or organizers.
 *
 * EventSeries has been defined as a kind of Event to make it easy for publishers to use it in an Event context without worrying about which kinds of series are really event-like enough to call an Event. In general an EventSeries may seem more Event-like when the period of time is compact and when aspects such as location are fixed, but it may also sometimes prove useful to describe a longer-term series as an Event.
 */
export type EventSeries = EventSeriesLeaf;

interface EventStatusTypeLeaf extends EnumerationBase {
    "@type": "schema:EventStatusType";
}
/** EventStatusType is an enumeration type whose instances represent several states that an Event may be in. */
export type EventStatusType = "https://schema.org/EventCancelled" | "schema:EventCancelled" | "https://schema.org/EventMovedOnline" | "schema:EventMovedOnline" | "https://schema.org/EventPostponed" | "schema:EventPostponed" | "https://schema.org/EventRescheduled" | "schema:EventRescheduled" | "https://schema.org/EventScheduled" | "schema:EventScheduled" | EventStatusTypeLeaf;

interface EventVenueLeaf extends CivicStructureBase {
    "@type": "schema:EventVenue";
}
/** An event venue. */
export type EventVenue = EventVenueLeaf | string;

interface ExceptionalEventLeaf extends ThingBase {
    "@type": "camo:ExceptionalEvent";
}
/** An Exceptional Event. */
export type ExceptionalEvent = ExceptionalEventLeaf;

interface ExchangeRateSpecificationBase extends ThingBase {
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:currency"?: SchemaValue<Text>;
    /** The current price of a currency. */
    "schema:currentExchangeRate"?: SchemaValue<UnitPriceSpecification | IdReference>;
    /** The difference between the price at which a broker or other intermediary buys and sells foreign currency. */
    "schema:exchangeRateSpread"?: SchemaValue<MonetaryAmount | Number | IdReference>;
}
interface ExchangeRateSpecificationLeaf extends ExchangeRateSpecificationBase {
    "@type": "schema:ExchangeRateSpecification";
}
/** A structured value representing exchange rate. */
export type ExchangeRateSpecification = ExchangeRateSpecificationLeaf;

interface ExerciseActionBase extends PlayActionBase {
    /**
     * A sub property of location. The course where this action was taken.
     *
     * @deprecated Consider using https://schema.org/exerciseCourse instead.
     */
    "schema:course"?: SchemaValue<Place | IdReference>;
    /** A sub property of instrument. The diet used in this action. */
    "schema:diet"?: SchemaValue<Diet | IdReference>;
    /** The distance travelled, e.g. exercising or travelling. */
    "schema:distance"?: SchemaValue<Distance | IdReference>;
    /** A sub property of location. The course where this action was taken. */
    "schema:exerciseCourse"?: SchemaValue<Place | IdReference>;
    /** A sub property of instrument. The exercise plan used on this action. */
    "schema:exercisePlan"?: SchemaValue<ExercisePlan | IdReference>;
    /** A sub property of instrument. The diet used in this action. */
    "schema:exerciseRelatedDiet"?: SchemaValue<Diet | IdReference>;
    /** Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc. */
    "schema:exerciseType"?: SchemaValue<Text>;
    /** A sub property of location. The original location of the object or the agent before the action. */
    "schema:fromLocation"?: SchemaValue<Place | IdReference>;
    /** A sub property of participant. The opponent on this action. */
    "schema:opponent"?: SchemaValue<Person | IdReference>;
    /** A sub property of location. The sports activity location where this action occurred. */
    "schema:sportsActivityLocation"?: SchemaValue<SportsActivityLocation | IdReference>;
    /** A sub property of location. The sports event where this action occurred. */
    "schema:sportsEvent"?: SchemaValue<SportsEvent | IdReference>;
    /** A sub property of participant. The sports team that participated on this action. */
    "schema:sportsTeam"?: SchemaValue<SportsTeam | IdReference>;
    /** A sub property of location. The final location of the object or the agent after the action. */
    "schema:toLocation"?: SchemaValue<Place | IdReference>;
}
interface ExerciseActionLeaf extends ExerciseActionBase {
    "@type": "schema:ExerciseAction";
}
/** The act of participating in exertive activity for the purposes of improving health and fitness. */
export type ExerciseAction = ExerciseActionLeaf;

interface ExerciseGymLeaf extends LocalBusinessBase {
    "@type": "schema:ExerciseGym";
}
/** A gym. */
export type ExerciseGym = ExerciseGymLeaf | string;

interface ExercisePlanBase extends CreativeWorkBase, PhysicalActivityBase {
    /** Length of time to engage in the activity. */
    "schema:activityDuration"?: SchemaValue<Duration | QuantitativeValue | IdReference>;
    /** How often one should engage in the activity. */
    "schema:activityFrequency"?: SchemaValue<QuantitativeValue | Text | IdReference>;
    /** Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc. */
    "schema:additionalVariable"?: SchemaValue<Text>;
    /** Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc. */
    "schema:exerciseType"?: SchemaValue<Text>;
    /** Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement. */
    "schema:intensity"?: SchemaValue<QuantitativeValue | Text | IdReference>;
    /** Number of times one should repeat the activity. */
    "schema:repetitions"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** How often one should break from the activity. */
    "schema:restPeriods"?: SchemaValue<QuantitativeValue | Text | IdReference>;
    /** Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure. */
    "schema:workload"?: SchemaValue<Energy | QuantitativeValue | IdReference>;
}
interface ExercisePlanLeaf extends ExercisePlanBase {
    "@type": "schema:ExercisePlan";
}
/** Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician. */
export type ExercisePlan = ExercisePlanLeaf;

interface ExhibitionEventLeaf extends EventBase {
    "@type": "schema:ExhibitionEvent";
}
/** Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ... */
export type ExhibitionEvent = ExhibitionEventLeaf;

interface ExtensionOfTimeLeaf extends ThingBase {
    "@type": "camo:ExtensionOfTime";
}
/** An Extension Of Time (EOT). */
export type ExtensionOfTime = ExtensionOfTimeLeaf;

interface FAQPageLeaf extends WebPageBase {
    "@type": "schema:FAQPage";
}
/** A {@link https://schema.org/FAQPage FAQPage} is a {@link https://schema.org/WebPage WebPage} presenting one or more "{@link https://en.wikipedia.org/wiki/FAQ Frequently asked questions}" (see also {@link https://schema.org/QAPage QAPage}). */
export type FAQPage = FAQPageLeaf;

interface FastFoodRestaurantLeaf extends FoodEstablishmentBase {
    "@type": "schema:FastFoodRestaurant";
}
/** A fast-food restaurant. */
export type FastFoodRestaurant = FastFoodRestaurantLeaf | string;

interface FestivalLeaf extends EventBase {
    "@type": "schema:Festival";
}
/** Event type: Festival. */
export type Festival = FestivalLeaf;

interface FileNamingLayoutTableBase extends ThingBase {
    /** The segment name to use for the APG attachment file. */
    "camo:certificateAPGAttachmentFileSegment"?: SchemaValue<Text>;
    /** The segment name to use for a certificate attachment file. */
    "camo:certificateAttachmentFileSegment"?: SchemaValue<Text>;
    /** The segment name to use for a C&I Duties attachment file. */
    "camo:certificateCAndIAttachmentFileSegment"?: SchemaValue<Text>;
    /** The segment name to use for a certificate damages attachment file. */
    "camo:certificateDamagesAttachmentFileSegment"?: SchemaValue<Text>;
    /** The segment name to use for a certificate file. */
    "camo:certificateFileSegment"?: SchemaValue<Text>;
    /** The segment name to use for the monthly certificate progress report file. */
    "camo:monthlyCertificateProgressReportFileSegment"?: SchemaValue<Text>;
    /** The segment name to use for the monthly variation progress report file. */
    "camo:monthlyVariationProgressReportFileSegment"?: SchemaValue<Text>;
    /** The segment name to use for a variaton attachment file. */
    "camo:variationAttachmentFileSegment"?: SchemaValue<Text>;
}
interface FileNamingLayoutTableLeaf extends FileNamingLayoutTableBase {
    "@type": "camo:FileNamingLayoutTable";
}
/** A file naming layout table. */
export type FileNamingLayoutTable = FileNamingLayoutTableLeaf;

interface FilmActionLeaf extends ActionBase {
    "@type": "schema:FilmAction";
}
/** The act of capturing sound and moving images on film, video, or digitally. */
export type FilmAction = FilmActionLeaf;

interface FinalPaymentLeaf extends PaymentBase {
    "@type": "camo:FinalPayment";
}
/** A final payment Explanation. */
export type FinalPayment = FinalPaymentLeaf;

interface FinalPaymentCertificateLeaf extends PaymentCertificateBase {
    "@type": "camo:FinalPaymentCertificate";
}
/** A final payment certificate. */
export type FinalPaymentCertificate = FinalPaymentCertificateLeaf;

interface FinalSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:FinalSectionPaymentDescription";
}
/** A final payment that is part of a contract payment description. */
export type FinalSectionPaymentDescription = FinalSectionPaymentDescriptionLeaf;

interface FinalStatementLeaf extends ContractStatementBase {
    "@type": "camo:FinalStatement";
}
/** A final statement. */
export type FinalStatement = FinalStatementLeaf;

interface FinancialProductBase extends ServiceBase {
    /** The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction. */
    "schema:annualPercentageRate"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization. */
    "schema:feesAndCommissionsSpecification"?: SchemaValue<Text | URL | IdReference>;
    /** The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate. */
    "schema:interestRate"?: SchemaValue<Number | QuantitativeValue | IdReference>;
}
interface FinancialProductLeaf extends FinancialProductBase {
    "@type": "schema:FinancialProduct";
}
/** A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry. */
export type FinancialProduct = FinancialProductLeaf | BankAccount | CurrencyConversionService | InvestmentOrDeposit | LoanOrCredit | PaymentCard | PaymentService;

interface FinancialServiceBase extends LocalBusinessBase {
    /** Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization. */
    "schema:feesAndCommissionsSpecification"?: SchemaValue<Text | URL | IdReference>;
}
interface FinancialServiceLeaf extends FinancialServiceBase {
    "@type": "schema:FinancialService";
}
/** Financial services business. */
export type FinancialService = FinancialServiceLeaf | AccountingService | AutomatedTeller | BankOrCreditUnion | InsuranceAgency | string;

interface FindActionLeaf extends ActionBase {
    "@type": "schema:FindAction";
}
/**
 * The act of finding an object.
 *
 * Related actions:
 * - {@link https://schema.org/SearchAction SearchAction}: FindAction is generally lead by a SearchAction, but not necessarily.
 */
export type FindAction = FindActionLeaf | CheckAction | DiscoverAction | TrackAction;

interface FireStationBase extends LocalBusinessBase, CivicStructureBase {
}
interface FireStationLeaf extends FireStationBase {
    "@type": "schema:FireStation";
}
/** A fire station. With firemen. */
export type FireStation = FireStationLeaf | string;

interface FlightBase extends TripBase {
    /** The kind of aircraft (e.g., "Boeing 747"). */
    "schema:aircraft"?: SchemaValue<Text | Vehicle | IdReference>;
    /** The airport where the flight terminates. */
    "schema:arrivalAirport"?: SchemaValue<Airport | IdReference>;
    /** Identifier of the flight's arrival gate. */
    "schema:arrivalGate"?: SchemaValue<Text>;
    /** Identifier of the flight's arrival terminal. */
    "schema:arrivalTerminal"?: SchemaValue<Text>;
    /** The type of boarding policy used by the airline (e.g. zone-based or group-based). */
    "schema:boardingPolicy"?: SchemaValue<BoardingPolicyType | IdReference>;
    /**
     * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     *
     * @deprecated Consider using https://schema.org/provider instead.
     */
    "schema:carrier"?: SchemaValue<Organization | IdReference>;
    /** The airport where the flight originates. */
    "schema:departureAirport"?: SchemaValue<Airport | IdReference>;
    /** Identifier of the flight's departure gate. */
    "schema:departureGate"?: SchemaValue<Text>;
    /** Identifier of the flight's departure terminal. */
    "schema:departureTerminal"?: SchemaValue<Text>;
    /** The estimated time the flight will take. */
    "schema:estimatedFlightDuration"?: SchemaValue<Duration | Text | IdReference>;
    /** The distance of the flight. */
    "schema:flightDistance"?: SchemaValue<Distance | Text | IdReference>;
    /** The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'. */
    "schema:flightNumber"?: SchemaValue<Text>;
    /** Description of the meals that will be provided or available for purchase. */
    "schema:mealService"?: SchemaValue<Text>;
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "schema:seller"?: SchemaValue<Organization | Person | IdReference>;
    /** The time when a passenger can check into the flight online. */
    "schema:webCheckinTime"?: SchemaValue<DateTime>;
}
interface FlightLeaf extends FlightBase {
    "@type": "schema:Flight";
}
/** An airline flight. */
export type Flight = FlightLeaf;

interface FlightReservationBase extends ReservationBase {
    /** The airline-specific indicator of boarding order / preference. */
    "schema:boardingGroup"?: SchemaValue<Text>;
    /** The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority). */
    "schema:passengerPriorityStatus"?: SchemaValue<QualitativeValue | Text | IdReference>;
    /** The passenger's sequence number as assigned by the airline. */
    "schema:passengerSequenceNumber"?: SchemaValue<Text>;
    /** The type of security screening the passenger is subject to. */
    "schema:securityScreening"?: SchemaValue<Text>;
}
interface FlightReservationLeaf extends FlightReservationBase {
    "@type": "schema:FlightReservation";
}
/**
 * A reservation for air travel.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export type FlightReservation = FlightReservationLeaf;

/** Data type: Floating number. */
export type Float = number | `${number}`;

interface FloorPlanBase extends ThingBase {
    /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
    "schema:amenityFeature"?: SchemaValue<LocationFeatureSpecification | IdReference>;
    /** The size of the accommodation, e.g. in square meter or squarefoot. Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard */
    "schema:floorSize"?: SchemaValue<QuantitativeValue | IdReference>;
    /** Indicates some accommodation that this floor plan describes. */
    "schema:isPlanForApartment"?: SchemaValue<Accommodation | IdReference>;
    /** A schematic image showing the floorplan layout. */
    "schema:layoutImage"?: SchemaValue<ImageObject | URL | IdReference>;
    /** Indicates the total (available plus unavailable) number of accommodation units in an {@link https://schema.org/ApartmentComplex ApartmentComplex}, or the number of accommodation units for a specific {@link https://schema.org/FloorPlan FloorPlan} (within its specific {@link https://schema.org/ApartmentComplex ApartmentComplex}). See also {@link https://schema.org/numberOfAvailableAccommodationUnits numberOfAvailableAccommodationUnits}. */
    "schema:numberOfAccommodationUnits"?: SchemaValue<QuantitativeValue | IdReference>;
    /** Indicates the number of available accommodation units in an {@link https://schema.org/ApartmentComplex ApartmentComplex}, or the number of accommodation units for a specific {@link https://schema.org/FloorPlan FloorPlan} (within its specific {@link https://schema.org/ApartmentComplex ApartmentComplex}). See also {@link https://schema.org/numberOfAccommodationUnits numberOfAccommodationUnits}. */
    "schema:numberOfAvailableAccommodationUnits"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The total integer number of bathrooms in a some {@link https://schema.org/Accommodation Accommodation}, following real estate conventions as {@link https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field documented in RESO}: "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also {@link https://schema.org/numberOfRooms numberOfRooms}. */
    "schema:numberOfBathroomsTotal"?: SchemaValue<Integer>;
    /** The total integer number of bedrooms in a some {@link https://schema.org/Accommodation Accommodation}, {@link https://schema.org/ApartmentComplex ApartmentComplex} or {@link https://schema.org/FloorPlan FloorPlan}. */
    "schema:numberOfBedrooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** Number of full bathrooms - The total number of full and \u00BE bathrooms in an {@link https://schema.org/Accommodation Accommodation}. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field BathroomsFull field in RESO}. */
    "schema:numberOfFullBathrooms"?: SchemaValue<Number>;
    /** Number of partial bathrooms - The total number of half and \u00BC bathrooms in an {@link https://schema.org/Accommodation Accommodation}. This corresponds to the {@link https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field BathroomsPartial field in RESO}. */
    "schema:numberOfPartialBathrooms"?: SchemaValue<Number>;
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "schema:numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
    "schema:petsAllowed"?: SchemaValue<Boolean | Text>;
}
interface FloorPlanLeaf extends FloorPlanBase {
    "@type": "schema:FloorPlan";
}
/** A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some {@link https://schema.org/ApartmentComplex ApartmentComplex} has an {@link https://schema.org/accommodationFloorPlan accommodationFloorPlan} which is a {@link https://schema.org/FloorPlan FloorPlan}. A FloorPlan is always in the context of a particular place, either a larger {@link https://schema.org/ApartmentComplex ApartmentComplex} or a single {@link https://schema.org/Apartment Apartment}. The visual/spatial aspects of a floor plan (i.e. room layout, {@link https://en.wikipedia.org/wiki/Floor_plan see wikipedia}) can be indicated using {@link https://schema.org/image image}. */
export type FloorPlan = FloorPlanLeaf;

interface FloristLeaf extends LocalBusinessBase {
    "@type": "schema:Florist";
}
/** A florist. */
export type Florist = FloristLeaf | string;

interface FMRadioChannelLeaf extends BroadcastChannelBase {
    "@type": "schema:FMRadioChannel";
}
/** A radio channel that uses FM. */
export type FMRadioChannel = FMRadioChannelLeaf;

interface FollowActionBase extends ActionBase {
    /** A sub property of object. The person or organization being followed. */
    "schema:followee"?: SchemaValue<Organization | Person | IdReference>;
}
interface FollowActionLeaf extends FollowActionBase {
    "@type": "schema:FollowAction";
}
/**
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.
 *
 * Related actions:
 * - {@link https://schema.org/BefriendAction BefriendAction}: Unlike BefriendAction, FollowAction implies that the connection is _not_ necessarily reciprocal.
 * - {@link https://schema.org/SubscribeAction SubscribeAction}: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.
 * - {@link https://schema.org/RegisterAction RegisterAction}: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.
 * - {@link https://schema.org/JoinAction JoinAction}: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.
 * - {@link https://schema.org/TrackAction TrackAction}: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).
 */
export type FollowAction = FollowActionLeaf;

interface FoodEstablishmentBase extends LocalBusinessBase {
    /** Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings `Yes` or `No`. */
    "schema:acceptsReservations"?: SchemaValue<Boolean | Text | URL | IdReference>;
    /** Either the actual menu as a structured representation, as text, or a URL of the menu. */
    "schema:hasMenu"?: SchemaValue<Menu | Text | URL | IdReference>;
    /**
     * Either the actual menu as a structured representation, as text, or a URL of the menu.
     *
     * @deprecated Consider using https://schema.org/hasMenu instead.
     */
    "schema:menu"?: SchemaValue<Menu | Text | URL | IdReference>;
    /** The cuisine of the restaurant. */
    "schema:servesCuisine"?: SchemaValue<Text>;
    /** An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars). */
    "schema:starRating"?: SchemaValue<Rating | IdReference>;
}
interface FoodEstablishmentLeaf extends FoodEstablishmentBase {
    "@type": "schema:FoodEstablishment";
}
/** A food-related business. */
export type FoodEstablishment = FoodEstablishmentLeaf | Bakery | BarOrPub | Brewery | CafeOrCoffeeShop | Distillery | FastFoodRestaurant | IceCreamShop | Restaurant | Winery | string;

interface FoodEstablishmentReservationBase extends ReservationBase {
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:endTime"?: SchemaValue<DateTime | Time>;
    /** Number of people the reservation should accommodate. */
    "schema:partySize"?: SchemaValue<Integer | QuantitativeValue | IdReference>;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:startTime"?: SchemaValue<DateTime | Time>;
}
interface FoodEstablishmentReservationLeaf extends FoodEstablishmentReservationBase {
    "@type": "schema:FoodEstablishmentReservation";
}
/**
 * A reservation to dine at a food-related business.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export type FoodEstablishmentReservation = FoodEstablishmentReservationLeaf;

interface FoodEventLeaf extends EventBase {
    "@type": "schema:FoodEvent";
}
/** Event type: Food event. */
export type FoodEvent = FoodEventLeaf;

interface FoodServiceLeaf extends ServiceBase {
    "@type": "schema:FoodService";
}
/** A food service, like breakfast, lunch, or dinner. */
export type FoodService = FoodServiceLeaf;

interface FoundationsMathematicalEntityLeaf extends ThingBase {
    "@type": "coremo:FoundationsMathematicalEntity";
}
/** A foundational mathematics entity. */
export type FoundationsMathematicalEntity = FoundationsMathematicalEntityLeaf | CoreMathematicalEntity;

interface FoundationsMathematicalModelAreaLeaf extends ThingBase {
    "@type": "coremo:FoundationsMathematicalModelArea";
}
/** A foundational mathematical model area. */
export type FoundationsMathematicalModelArea = FoundationsMathematicalModelAreaLeaf | ModelsetModelArea;

interface FundingAgencyLeaf extends OrganizationBase {
    "@type": "schema:FundingAgency";
}
/**
 * A FundingAgency is an organization that implements one or more {@link https://schema.org/FundingScheme FundingScheme}s and manages the granting process (via {@link https://schema.org/Grant Grant}s, typically {@link https://schema.org/MonetaryGrant MonetaryGrant}s). A funding agency is not always required for grant funding, e.g. philanthropic giving, corporate sponsorship etc.
 *
 * Examples of funding agencies include ERC, REA, NIH, Bill and Melinda Gates Foundation...
 */
export type FundingAgency = FundingAgencyLeaf | string;

interface FundingSchemeLeaf extends OrganizationBase {
    "@type": "schema:FundingScheme";
}
/** A FundingScheme combines organizational, project and policy aspects of grant-based funding that sets guidelines, principles and mechanisms to support other kinds of projects and activities. Funding is typically organized via {@link https://schema.org/Grant Grant} funding. Examples of funding schemes: Swiss Priority Programmes (SPPs); EU Framework 7 (FP7); Horizon 2020; the NIH-R01 Grant Program; Wellcome institutional strategic support fund. For large scale public sector funding, the management and administration of grant awards is often handled by other, dedicated, organizations - {@link https://schema.org/FundingAgency FundingAgency}s such as ERC, REA, ... */
export type FundingScheme = FundingSchemeLeaf | string;

interface FurnitureStoreLeaf extends LocalBusinessBase {
    "@type": "schema:FurnitureStore";
}
/** A furniture store. */
export type FurnitureStore = FurnitureStoreLeaf | string;

interface GameBase extends CreativeWorkBase {
    /** A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage). */
    "schema:characterAttribute"?: SchemaValue<Thing | IdReference>;
    /** An item is an object within the game world that can be collected by a player or, occasionally, a non-player character. */
    "schema:gameItem"?: SchemaValue<Thing | IdReference>;
    /** Real or fictional location of the game (or part of game). */
    "schema:gameLocation"?: SchemaValue<Place | PostalAddress | URL | IdReference>;
    /** Indicate how many people can play this game (minimum, maximum, or range). */
    "schema:numberOfPlayers"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The task that a player-controlled character, or group of characters may complete in order to gain a reward. */
    "schema:quest"?: SchemaValue<Thing | IdReference>;
}
interface GameLeaf extends GameBase {
    "@type": "schema:Game";
}
/** The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting. */
export type Game = GameLeaf | VideoGame;

interface GamePlayModeLeaf extends EnumerationBase {
    "@type": "schema:GamePlayMode";
}
/** Indicates whether this game is multi-player, co-op or single-player. */
export type GamePlayMode = "https://schema.org/CoOp" | "schema:CoOp" | "https://schema.org/MultiPlayer" | "schema:MultiPlayer" | "https://schema.org/SinglePlayer" | "schema:SinglePlayer" | GamePlayModeLeaf;

interface GameServerBase extends ThingBase {
    /** Video game which is played on this server. */
    "schema:game"?: SchemaValue<VideoGame | IdReference>;
    /** Number of players on the server. */
    "schema:playersOnline"?: SchemaValue<Integer>;
    /** Status of a game server. */
    "schema:serverStatus"?: SchemaValue<GameServerStatus | IdReference>;
}
interface GameServerLeaf extends GameServerBase {
    "@type": "schema:GameServer";
}
/** Server that provides game interaction in a multiplayer game. */
export type GameServer = GameServerLeaf;

interface GameServerStatusLeaf extends EnumerationBase {
    "@type": "schema:GameServerStatus";
}
/** Status of a game server. */
export type GameServerStatus = "https://schema.org/OfflinePermanently" | "schema:OfflinePermanently" | "https://schema.org/OfflineTemporarily" | "schema:OfflineTemporarily" | "https://schema.org/Online" | "schema:Online" | "https://schema.org/OnlineFull" | "schema:OnlineFull" | GameServerStatusLeaf;

interface GardenStoreLeaf extends LocalBusinessBase {
    "@type": "schema:GardenStore";
}
/** A garden store. */
export type GardenStore = GardenStoreLeaf | string;

interface GasStationLeaf extends LocalBusinessBase {
    "@type": "schema:GasStation";
}
/** A gas station. */
export type GasStation = GasStationLeaf | string;

interface GatedResidenceCommunityLeaf extends ResidenceBase {
    "@type": "schema:GatedResidenceCommunity";
}
/** Residence type: Gated community. */
export type GatedResidenceCommunity = GatedResidenceCommunityLeaf | string;

interface GenderTypeLeaf extends EnumerationBase {
    "@type": "schema:GenderType";
}
/** An enumeration of genders. */
export type GenderType = "https://schema.org/Female" | "schema:Female" | "https://schema.org/Male" | "schema:Male" | GenderTypeLeaf;

interface GeneBase extends BioChemEntityBase {
    /** Another gene which is a variation of this one. */
    "schema:alternativeOf"?: SchemaValue<Gene | IdReference>;
    /** Another BioChemEntity encoded by this one. */
    "schema:encodesBioChemEntity"?: SchemaValue<BioChemEntity | IdReference>;
    /** Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system. */
    "schema:expressedIn"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | BioChemEntity | DefinedTerm | IdReference>;
    /** A symbolic representation of a BioChemEnity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein. */
    "schema:hasBioPolymerSequence"?: SchemaValue<Text>;
}
interface GeneLeaf extends GeneBase {
    "@type": "schema:Gene";
}
/** A discrete unit of inheritance which affects one or more biological traits (Source: {@link https://en.wikipedia.org/wiki/Gene https://en.wikipedia.org/wiki/Gene}). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype). */
export type Gene = GeneLeaf;

interface GeneralContractorLeaf extends LocalBusinessBase {
    "@type": "schema:GeneralContractor";
}
/** A general contractor. */
export type GeneralContractor = GeneralContractorLeaf | string;

interface GeneralPaymentDescriptionBase extends ThingBase {
    /** The amount property for a GeneralPaymentDescription. */
    "camo:hasGeneralPaymentDescriptionAmount"?: SchemaValue<MonetaryAmount | IdReference>;
}
interface GeneralPaymentDescriptionLeaf extends GeneralPaymentDescriptionBase {
    "@type": "camo:GeneralPaymentDescription";
}
/** A general payment description that is part of a contract payment description. */
export type GeneralPaymentDescription = GeneralPaymentDescriptionLeaf | AdditionsPaymentDescription | DeductionsAppliedAndCollectedPaymentDescription | DeductionsAppliedPaymentDescription | DeductionsCollectedPaymentDescription | PlantMaterialShippedDeliveredPrePaymentDescription;

interface GeoCircleBase extends GeoShapeBase {
    /** Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle. */
    "schema:geoMidpoint"?: SchemaValue<GeoCoordinates | IdReference>;
    /** Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation). */
    "schema:geoRadius"?: SchemaValue<Distance | Number | Text | IdReference>;
}
interface GeoCircleLeaf extends GeoCircleBase {
    "@type": "schema:GeoCircle";
}
/** A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius. The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'. */
export type GeoCircle = GeoCircleLeaf;

interface GeoCoordinatesBase extends ThingBase {
    /** Physical address of the item. */
    "schema:address"?: SchemaValue<PostalAddress | Text | IdReference>;
    /** The country. For example, USA. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. */
    "schema:addressCountry"?: SchemaValue<Country | Text | IdReference>;
    /** The elevation of a location ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters. */
    "schema:elevation"?: SchemaValue<Number | Text>;
    /** The latitude of a location. For example `37.42242` ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). */
    "schema:latitude"?: SchemaValue<Number | Text>;
    /** The longitude of a location. For example `-122.08585` ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). */
    "schema:longitude"?: SchemaValue<Number | Text>;
    /** The postal code. For example, 94043. */
    "schema:postalCode"?: SchemaValue<Text>;
}
interface GeoCoordinatesLeaf extends GeoCoordinatesBase {
    "@type": "schema:GeoCoordinates";
}
/** The geographic coordinates of a place or event. */
export type GeoCoordinates = GeoCoordinatesLeaf;

interface GeoShapeBase extends ThingBase {
    /** Physical address of the item. */
    "schema:address"?: SchemaValue<PostalAddress | Text | IdReference>;
    /** The country. For example, USA. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. */
    "schema:addressCountry"?: SchemaValue<Country | Text | IdReference>;
    /** A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character. */
    "schema:box"?: SchemaValue<Text>;
    /** A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters. */
    "schema:circle"?: SchemaValue<Text>;
    /** The elevation of a location ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters. */
    "schema:elevation"?: SchemaValue<Number | Text>;
    /** A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space. */
    "schema:line"?: SchemaValue<Text>;
    /** A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical. */
    "schema:polygon"?: SchemaValue<Text>;
    /** The postal code. For example, 94043. */
    "schema:postalCode"?: SchemaValue<Text>;
}
interface GeoShapeLeaf extends GeoShapeBase {
    "@type": "schema:GeoShape";
}
/** The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points. */
export type GeoShape = GeoShapeLeaf | GeoCircle;

interface GeospatialGeometryBase extends ThingBase {
    /** Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoContains"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoCoveredBy"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoCovers"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoCrosses"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}) */
    "schema:geoDisjoint"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship) */
    "schema:geoEquals"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoIntersects"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoOverlaps"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM} ) */
    "schema:geoTouches"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoWithin"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
}
interface GeospatialGeometryLeaf extends GeospatialGeometryBase {
    "@type": "schema:GeospatialGeometry";
}
/** (Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices. */
export type GeospatialGeometry = GeospatialGeometryLeaf;

interface GiveActionBase extends TransferActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface GiveActionLeaf extends GiveActionBase {
    "@type": "schema:GiveAction";
}
/**
 * The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.
 *
 * Related actions:
 * - {@link https://schema.org/TakeAction TakeAction}: Reciprocal of GiveAction.
 * - {@link https://schema.org/SendAction SendAction}: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).
 */
export type GiveAction = GiveActionLeaf;

interface GolfCourseLeaf extends LocalBusinessBase {
    "@type": "schema:GolfCourse";
}
/** A golf course. */
export type GolfCourse = GolfCourseLeaf | string;

interface GovernmentBenefitsTypeLeaf extends EnumerationBase {
    "@type": "schema:GovernmentBenefitsType";
}
/** GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered. */
export type GovernmentBenefitsType = "https://schema.org/BasicIncome" | "schema:BasicIncome" | "https://schema.org/BusinessSupport" | "schema:BusinessSupport" | "https://schema.org/DisabilitySupport" | "schema:DisabilitySupport" | "https://schema.org/HealthCare" | "schema:HealthCare" | "https://schema.org/OneTimePayments" | "schema:OneTimePayments" | "https://schema.org/PaidLeave" | "schema:PaidLeave" | "https://schema.org/ParentalSupport" | "schema:ParentalSupport" | "https://schema.org/UnemploymentSupport" | "schema:UnemploymentSupport" | GovernmentBenefitsTypeLeaf;

interface GovernmentBuildingLeaf extends CivicStructureBase {
    "@type": "schema:GovernmentBuilding";
}
/** A government building. */
export type GovernmentBuilding = GovernmentBuildingLeaf | CityHall | Courthouse | DefenceEstablishment | Embassy | LegislativeBuilding | string;

interface GovernmentOfficeLeaf extends LocalBusinessBase {
    "@type": "schema:GovernmentOffice";
}
/** A government office—for example, an IRS or DMV office. */
export type GovernmentOffice = GovernmentOfficeLeaf | PostOffice | string;

interface GovernmentOrganizationLeaf extends OrganizationBase {
    "@type": "schema:GovernmentOrganization";
}
/** A governmental organization or agency. */
export type GovernmentOrganization = GovernmentOrganizationLeaf | string;

interface GovernmentPermitLeaf extends PermitBase {
    "@type": "schema:GovernmentPermit";
}
/** A permit issued by a government agency. */
export type GovernmentPermit = GovernmentPermitLeaf;

interface GovernmentServiceBase extends ServiceBase {
    /** Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based. */
    "schema:jurisdiction"?: SchemaValue<AdministrativeArea | Text | IdReference>;
    /** The operating organization, if different from the provider. This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor. */
    "schema:serviceOperator"?: SchemaValue<Organization | IdReference>;
}
interface GovernmentServiceLeaf extends GovernmentServiceBase {
    "@type": "schema:GovernmentService";
}
/** A service provided by a government organization, e.g. food stamps, veterans benefits, etc. */
export type GovernmentService = GovernmentServiceLeaf;

interface GrantBase extends ThingBase {
    /** Indicates an item funded or sponsored through a {@link https://schema.org/Grant Grant}. */
    "schema:fundedItem"?: SchemaValue<Thing | IdReference>;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "schema:sponsor"?: SchemaValue<Organization | Person | IdReference>;
}
interface GrantLeaf extends GrantBase {
    "@type": "schema:Grant";
}
/**
 * A grant, typically financial or otherwise quantifiable, of resources. Typically a {@link https://schema.org/funder funder} sponsors some {@link https://schema.org/MonetaryAmount MonetaryAmount} to an {@link https://schema.org/Organization Organization} or {@link https://schema.org/Person Person}, sometimes not necessarily via a dedicated or long-lived {@link https://schema.org/Project Project}, resulting in one or more outputs, or {@link https://schema.org/fundedItem fundedItem}s. For financial sponsorship, indicate the {@link https://schema.org/funder funder} of a {@link https://schema.org/MonetaryGrant MonetaryGrant}. For non-financial support, indicate {@link https://schema.org/sponsor sponsor} of {@link https://schema.org/Grant Grant}s of resources (e.g. office space).
 *
 * Grants support activities directed towards some agreed collective goals, often but not always organized as {@link https://schema.org/Project Project}s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.
 *
 * The amount of a {@link https://schema.org/Grant Grant} is represented using {@link https://schema.org/amount amount} as a {@link https://schema.org/MonetaryAmount MonetaryAmount}.
 */
export type Grant = GrantLeaf | MonetaryGrant;

interface GroceryStoreLeaf extends LocalBusinessBase {
    "@type": "schema:GroceryStore";
}
/** A grocery store. */
export type GroceryStore = GroceryStoreLeaf | string;

interface GuideBase extends CreativeWorkBase {
    /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
    "schema:reviewAspect"?: SchemaValue<Text>;
}
interface GuideLeaf extends GuideBase {
    "@type": "schema:Guide";
}
/** {@link https://schema.org/Guide Guide} is a page or article that recommend specific products or services, or aspects of a thing for a user to consider. A {@link https://schema.org/Guide Guide} may represent a Buying Guide and detail aspects of products or services for a user to consider. A {@link https://schema.org/Guide Guide} may represent a Product Guide and recommend specific products or services. A {@link https://schema.org/Guide Guide} may represent a Ranked List and recommend specific products or services with ranking. */
export type Guide = GuideLeaf;

interface HackathonLeaf extends EventBase {
    "@type": "schema:Hackathon";
}
/** A {@link https://en.wikipedia.org/wiki/Hackathon hackathon} event. */
export type Hackathon = HackathonLeaf;

interface HairSalonLeaf extends LocalBusinessBase {
    "@type": "schema:HairSalon";
}
/** A hair salon. */
export type HairSalon = HairSalonLeaf | string;

interface HardwareStoreLeaf extends LocalBusinessBase {
    "@type": "schema:HardwareStore";
}
/** A hardware store. */
export type HardwareStore = HardwareStoreLeaf | string;

interface HealthAndBeautyBusinessLeaf extends LocalBusinessBase {
    "@type": "schema:HealthAndBeautyBusiness";
}
/** Health and beauty. */
export type HealthAndBeautyBusiness = HealthAndBeautyBusinessLeaf | BeautySalon | DaySpa | HairSalon | HealthClub | NailSalon | TattooParlor | string;

interface HealthAspectEnumerationLeaf extends EnumerationBase {
    "@type": "schema:HealthAspectEnumeration";
}
/** HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using {@link https://schema.org/hasHealthAspect hasHealthAspect} and {@link https://schema.org/HealthTopicContent HealthTopicContent}. */
export type HealthAspectEnumeration = "https://schema.org/AllergiesHealthAspect" | "schema:AllergiesHealthAspect" | "https://schema.org/BenefitsHealthAspect" | "schema:BenefitsHealthAspect" | "https://schema.org/CausesHealthAspect" | "schema:CausesHealthAspect" | "https://schema.org/ContagiousnessHealthAspect" | "schema:ContagiousnessHealthAspect" | "https://schema.org/EffectivenessHealthAspect" | "schema:EffectivenessHealthAspect" | "https://schema.org/GettingAccessHealthAspect" | "schema:GettingAccessHealthAspect" | "https://schema.org/HowItWorksHealthAspect" | "schema:HowItWorksHealthAspect" | "https://schema.org/HowOrWhereHealthAspect" | "schema:HowOrWhereHealthAspect" | "https://schema.org/IngredientsHealthAspect" | "schema:IngredientsHealthAspect" | "https://schema.org/LivingWithHealthAspect" | "schema:LivingWithHealthAspect" | "https://schema.org/MayTreatHealthAspect" | "schema:MayTreatHealthAspect" | "https://schema.org/MisconceptionsHealthAspect" | "schema:MisconceptionsHealthAspect" | "https://schema.org/OverviewHealthAspect" | "schema:OverviewHealthAspect" | "https://schema.org/PatientExperienceHealthAspect" | "schema:PatientExperienceHealthAspect" | "https://schema.org/PregnancyHealthAspect" | "schema:PregnancyHealthAspect" | "https://schema.org/PreventionHealthAspect" | "schema:PreventionHealthAspect" | "https://schema.org/PrognosisHealthAspect" | "schema:PrognosisHealthAspect" | "https://schema.org/RelatedTopicsHealthAspect" | "schema:RelatedTopicsHealthAspect" | "https://schema.org/RisksOrComplicationsHealthAspect" | "schema:RisksOrComplicationsHealthAspect" | "https://schema.org/SafetyHealthAspect" | "schema:SafetyHealthAspect" | "https://schema.org/ScreeningHealthAspect" | "schema:ScreeningHealthAspect" | "https://schema.org/SeeDoctorHealthAspect" | "schema:SeeDoctorHealthAspect" | "https://schema.org/SelfCareHealthAspect" | "schema:SelfCareHealthAspect" | "https://schema.org/SideEffectsHealthAspect" | "schema:SideEffectsHealthAspect" | "https://schema.org/StagesHealthAspect" | "schema:StagesHealthAspect" | "https://schema.org/SymptomsHealthAspect" | "schema:SymptomsHealthAspect" | "https://schema.org/TreatmentsHealthAspect" | "schema:TreatmentsHealthAspect" | "https://schema.org/TypesHealthAspect" | "schema:TypesHealthAspect" | "https://schema.org/UsageOrScheduleHealthAspect" | "schema:UsageOrScheduleHealthAspect" | HealthAspectEnumerationLeaf;

interface HealthClubBase extends LocalBusinessBase, LocalBusinessBase {
}
interface HealthClubLeaf extends HealthClubBase {
    "@type": "schema:HealthClub";
}
/** A health club. */
export type HealthClub = HealthClubLeaf | string;

interface HealthInsurancePlanBase extends ThingBase {
    /** The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation. */
    "schema:benefitsSummaryUrl"?: SchemaValue<URL | IdReference>;
    /** A contact point for a person or organization. */
    "schema:contactPoint"?: SchemaValue<ContactPoint | IdReference>;
    /** TODO. */
    "schema:healthPlanDrugOption"?: SchemaValue<Text>;
    /** The tier(s) of drugs offered by this formulary or insurance plan. */
    "schema:healthPlanDrugTier"?: SchemaValue<Text>;
    /** The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.) */
    "schema:healthPlanId"?: SchemaValue<Text>;
    /** The URL that goes directly to the plan brochure for the specific standard plan or plan variation. */
    "schema:healthPlanMarketingUrl"?: SchemaValue<URL | IdReference>;
    /** Formularies covered by this plan. */
    "schema:includesHealthPlanFormulary"?: SchemaValue<HealthPlanFormulary | IdReference>;
    /** Networks covered by this plan. */
    "schema:includesHealthPlanNetwork"?: SchemaValue<HealthPlanNetwork | IdReference>;
    /** The standard for interpreting thePlan ID. The preferred is "HIOS". See the Centers for Medicare & Medicaid Services for more details. */
    "schema:usesHealthPlanIdStandard"?: SchemaValue<Text | URL | IdReference>;
}
interface HealthInsurancePlanLeaf extends HealthInsurancePlanBase {
    "@type": "schema:HealthInsurancePlan";
}
/** A US-style health insurance plan, including PPOs, EPOs, and HMOs. */
export type HealthInsurancePlan = HealthInsurancePlanLeaf;

interface HealthPlanCostSharingSpecificationBase extends ThingBase {
    /** Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set? */
    "schema:healthPlanCoinsuranceOption"?: SchemaValue<Text>;
    /** Whether The rate of coinsurance expressed as a number between 0.0 and 1.0. */
    "schema:healthPlanCoinsuranceRate"?: SchemaValue<Number>;
    /** Whether The copay amount. */
    "schema:healthPlanCopay"?: SchemaValue<PriceSpecification | IdReference>;
    /** Whether the copay is before or after deductible, etc. TODO: Is this a closed set? */
    "schema:healthPlanCopayOption"?: SchemaValue<Text>;
    /** The category or type of pharmacy associated with this cost sharing. */
    "schema:healthPlanPharmacyCategory"?: SchemaValue<Text>;
}
interface HealthPlanCostSharingSpecificationLeaf extends HealthPlanCostSharingSpecificationBase {
    "@type": "schema:HealthPlanCostSharingSpecification";
}
/** A description of costs to the patient under a given network or formulary. */
export type HealthPlanCostSharingSpecification = HealthPlanCostSharingSpecificationLeaf;

interface HealthPlanFormularyBase extends ThingBase {
    /** Whether The costs to the patient for services under this network or formulary. */
    "schema:healthPlanCostSharing"?: SchemaValue<Boolean>;
    /** The tier(s) of drugs offered by this formulary or insurance plan. */
    "schema:healthPlanDrugTier"?: SchemaValue<Text>;
    /** Whether prescriptions can be delivered by mail. */
    "schema:offersPrescriptionByMail"?: SchemaValue<Boolean>;
}
interface HealthPlanFormularyLeaf extends HealthPlanFormularyBase {
    "@type": "schema:HealthPlanFormulary";
}
/** For a given health insurance plan, the specification for costs and coverage of prescription drugs. */
export type HealthPlanFormulary = HealthPlanFormularyLeaf;

interface HealthPlanNetworkBase extends ThingBase {
    /** Whether The costs to the patient for services under this network or formulary. */
    "schema:healthPlanCostSharing"?: SchemaValue<Boolean>;
    /** Name or unique ID of network. (Networks are often reused across different insurance plans). */
    "schema:healthPlanNetworkId"?: SchemaValue<Text>;
    /** The tier(s) for this network. */
    "schema:healthPlanNetworkTier"?: SchemaValue<Text>;
}
interface HealthPlanNetworkLeaf extends HealthPlanNetworkBase {
    "@type": "schema:HealthPlanNetwork";
}
/** A US-style health insurance plan network. */
export type HealthPlanNetwork = HealthPlanNetworkLeaf;

interface HealthTopicContentBase extends CreativeWorkBase {
    /** Indicates the aspect or aspects specifically addressed in some {@link https://schema.org/HealthTopicContent HealthTopicContent}. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects. */
    "schema:hasHealthAspect"?: SchemaValue<HealthAspectEnumeration | IdReference>;
}
interface HealthTopicContentLeaf extends HealthTopicContentBase {
    "@type": "schema:HealthTopicContent";
}
/** {@link https://schema.org/HealthTopicContent HealthTopicContent} is {@link https://schema.org/WebContent WebContent} that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of {@link https://schema.org/WebContent WebContent} (and hence {@link https://schema.org/HealthTopicContent HealthTopicContent}) can be related using {@link https://schema.org/hasPart hasPart} / {@link https://schema.org/isPartOf isPartOf} where there is some kind of content hierarchy, and their content described with {@link https://schema.org/about about} and {@link https://schema.org/mentions mentions} e.g. building upon the existing {@link https://schema.org/MedicalCondition MedicalCondition} vocabulary. */
export type HealthTopicContent = HealthTopicContentLeaf;

interface HighSchoolLeaf extends EducationalOrganizationBase {
    "@type": "schema:HighSchool";
}
/** A high school. */
export type HighSchool = HighSchoolLeaf | string;

interface HinduTempleLeaf extends CivicStructureBase {
    "@type": "schema:HinduTemple";
}
/** A Hindu temple. */
export type HinduTemple = HinduTempleLeaf | string;

interface HobbyShopLeaf extends LocalBusinessBase {
    "@type": "schema:HobbyShop";
}
/** A store that sells materials useful or necessary for various hobbies. */
export type HobbyShop = HobbyShopLeaf | string;

interface HomeAndConstructionBusinessLeaf extends LocalBusinessBase {
    "@type": "schema:HomeAndConstructionBusiness";
}
/**
 * A construction business.
 *
 * A HomeAndConstructionBusiness is a {@link https://schema.org/LocalBusiness LocalBusiness} that provides services around homes and buildings.
 *
 * As a {@link https://schema.org/LocalBusiness LocalBusiness} it can be described as a {@link https://schema.org/provider provider} of one or more {@link https://schema.org/Service Service}\(s).
 */
export type HomeAndConstructionBusiness = HomeAndConstructionBusinessLeaf | Electrician | GeneralContractor | HousePainter | HVACBusiness | Locksmith | MovingCompany | Plumber | RoofingContractor | string;

interface HomeGoodsStoreLeaf extends LocalBusinessBase {
    "@type": "schema:HomeGoodsStore";
}
/** A home goods store. */
export type HomeGoodsStore = HomeGoodsStoreLeaf | string;

interface HospitalBase extends CivicStructureBase, MedicalOrganizationBase, LocalBusinessBase {
    /** A medical service available from this provider. */
    "schema:availableService"?: SchemaValue<MedicalProcedure | MedicalTest | MedicalTherapy | IdReference>;
    /** Indicates data describing a hospital, e.g. a CDC {@link https://schema.org/CDCPMDRecord CDCPMDRecord} or as some kind of {@link https://schema.org/Dataset Dataset}. */
    "schema:healthcareReportingData"?: SchemaValue<CDCPMDRecord | Dataset | IdReference>;
    /** A medical specialty of the provider. */
    "schema:medicalSpecialty"?: SchemaValue<MedicalSpecialty | IdReference>;
}
interface HospitalLeaf extends HospitalBase {
    "@type": "schema:Hospital";
}
/** A hospital. */
export type Hospital = HospitalLeaf | string;

interface HostelLeaf extends LodgingBusinessBase {
    "@type": "schema:Hostel";
}
/**
 * A hostel - cheap accommodation, often in shared dormitories.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type Hostel = HostelLeaf | string;

interface HotelLeaf extends LodgingBusinessBase {
    "@type": "schema:Hotel";
}
/**
 * A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type Hotel = HotelLeaf | string;

interface HotelRoomBase extends AccommodationBase {
    /** The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text. If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property. */
    "schema:bed"?: SchemaValue<BedDetails | BedType | Text | IdReference>;
    /** The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person). Typical unit code(s): C62 for person */
    "schema:occupancy"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface HotelRoomLeaf extends HotelRoomBase {
    "@type": "schema:HotelRoom";
}
/**
 * A hotel room is a single room in a hotel.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type HotelRoom = HotelRoomLeaf | string;

interface HouseBase extends AccommodationBase {
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "schema:numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
}
interface HouseLeaf extends HouseBase {
    "@type": "schema:House";
}
/** A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/House http://en.wikipedia.org/wiki/House}). */
export type House = HouseLeaf | SingleFamilyResidence | string;

interface HousePainterLeaf extends LocalBusinessBase {
    "@type": "schema:HousePainter";
}
/** A house painting service. */
export type HousePainter = HousePainterLeaf | string;

interface HowToBase extends CreativeWorkBase {
    /** The estimated cost of the supply or supplies consumed when performing instructions. */
    "schema:estimatedCost"?: SchemaValue<MonetaryAmount | Text | IdReference>;
    /** The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "schema:performTime"?: SchemaValue<Duration | IdReference>;
    /** The length of time it takes to prepare the items to be used in instructions or a direction, in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "schema:prepTime"?: SchemaValue<Duration | IdReference>;
    /** A single step item (as HowToStep, text, document, video, etc.) or a HowToSection. */
    "schema:step"?: SchemaValue<CreativeWork | HowToSection | HowToStep | Text | IdReference>;
    /**
     * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
     *
     * @deprecated Consider using https://schema.org/step instead.
     */
    "schema:steps"?: SchemaValue<CreativeWork | ItemList | Text | IdReference>;
    /** A sub-property of instrument. A supply consumed when performing instructions or a direction. */
    "schema:supply"?: SchemaValue<HowToSupply | Text | IdReference>;
    /** A sub property of instrument. An object used (but not consumed) when performing instructions or a direction. */
    "schema:tool"?: SchemaValue<HowToTool | Text | IdReference>;
    /** The total time required to perform instructions or a direction (including time to prepare the supplies), in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "schema:totalTime"?: SchemaValue<Duration | IdReference>;
    /** The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles. */
    "schema:yield"?: SchemaValue<QuantitativeValue | Text | IdReference>;
}
interface HowToLeaf extends HowToBase {
    "@type": "schema:HowTo";
}
/** Instructions that explain how to achieve a result by performing a sequence of steps. */
export type HowTo = HowToLeaf | Recipe;

interface HowToDirectionBase extends CreativeWorkBase, ListItemBase {
    /** A media object representing the circumstances after performing this direction. */
    "schema:afterMedia"?: SchemaValue<MediaObject | URL | IdReference>;
    /** A media object representing the circumstances before performing this direction. */
    "schema:beforeMedia"?: SchemaValue<MediaObject | URL | IdReference>;
    /** A media object representing the circumstances while performing this direction. */
    "schema:duringMedia"?: SchemaValue<MediaObject | URL | IdReference>;
    /** The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "schema:performTime"?: SchemaValue<Duration | IdReference>;
    /** The length of time it takes to prepare the items to be used in instructions or a direction, in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "schema:prepTime"?: SchemaValue<Duration | IdReference>;
    /** A sub-property of instrument. A supply consumed when performing instructions or a direction. */
    "schema:supply"?: SchemaValue<HowToSupply | Text | IdReference>;
    /** A sub property of instrument. An object used (but not consumed) when performing instructions or a direction. */
    "schema:tool"?: SchemaValue<HowToTool | Text | IdReference>;
    /** The total time required to perform instructions or a direction (including time to prepare the supplies), in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "schema:totalTime"?: SchemaValue<Duration | IdReference>;
}
interface HowToDirectionLeaf extends HowToDirectionBase {
    "@type": "schema:HowToDirection";
}
/** A direction indicating a single action to do in the instructions for how to achieve a result. */
export type HowToDirection = HowToDirectionLeaf;

interface HowToItemBase extends ListItemBase {
    /** The required quantity of the item(s). */
    "schema:requiredQuantity"?: SchemaValue<Number | QuantitativeValue | Text | IdReference>;
}
interface HowToItemLeaf extends HowToItemBase {
    "@type": "schema:HowToItem";
}
/** An item used as either a tool or supply when performing the instructions for how to to achieve a result. */
export type HowToItem = HowToItemLeaf | HowToSupply | HowToTool;

interface HowToSectionBase extends ListItemBase, CreativeWorkBase, ItemListBase {
    /**
     * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
     *
     * @deprecated Consider using https://schema.org/step instead.
     */
    "schema:steps"?: SchemaValue<CreativeWork | ItemList | Text | IdReference>;
}
interface HowToSectionLeaf extends HowToSectionBase {
    "@type": "schema:HowToSection";
}
/** A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe). */
export type HowToSection = HowToSectionLeaf;

interface HowToStepBase extends CreativeWorkBase, ListItemBase, ItemListBase {
}
interface HowToStepLeaf extends HowToStepBase {
    "@type": "schema:HowToStep";
}
/** A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items. */
export type HowToStep = HowToStepLeaf;

interface HowToSupplyBase extends HowToItemBase {
    /** The estimated cost of the supply or supplies consumed when performing instructions. */
    "schema:estimatedCost"?: SchemaValue<MonetaryAmount | Text | IdReference>;
}
interface HowToSupplyLeaf extends HowToSupplyBase {
    "@type": "schema:HowToSupply";
}
/** A supply consumed when performing the instructions for how to achieve a result. */
export type HowToSupply = HowToSupplyLeaf;

interface HowToTipBase extends ListItemBase, CreativeWorkBase {
}
interface HowToTipLeaf extends HowToTipBase {
    "@type": "schema:HowToTip";
}
/** An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection). */
export type HowToTip = HowToTipLeaf;

interface HowToToolLeaf extends HowToItemBase {
    "@type": "schema:HowToTool";
}
/** A tool used (but not consumed) when performing instructions for how to achieve a result. */
export type HowToTool = HowToToolLeaf;

interface HVACBusinessLeaf extends LocalBusinessBase {
    "@type": "schema:HVACBusiness";
}
/** A business that provide Heating, Ventilation and Air Conditioning services. */
export type HVACBusiness = HVACBusinessLeaf | string;

interface HyperTocBase extends CreativeWorkBase {
    /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
    "schema:associatedMedia"?: SchemaValue<MediaObject | IdReference>;
    /** Indicates a {@link https://schema.org/HyperTocEntry HyperTocEntry} in a {@link https://schema.org/HyperToc HyperToc}. */
    "schema:tocEntry"?: SchemaValue<HyperTocEntry | IdReference>;
}
interface HyperTocLeaf extends HyperTocBase {
    "@type": "schema:HyperToc";
}
/** A HyperToc represents a hypertext table of contents for complex media objects, such as {@link https://schema.org/VideoObject VideoObject}, {@link https://schema.org/AudioObject AudioObject}. Items in the table of contents are indicated using the {@link https://schema.org/tocEntry tocEntry} property, and typed {@link https://schema.org/HyperTocEntry HyperTocEntry}. For cases where the same larger work is split into multiple files, {@link https://schema.org/associatedMedia associatedMedia} can be used on individual {@link https://schema.org/HyperTocEntry HyperTocEntry} items. */
export type HyperToc = HyperTocLeaf;

interface HyperTocEntryBase extends CreativeWorkBase {
    /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
    "schema:associatedMedia"?: SchemaValue<MediaObject | IdReference>;
    /** A {@link https://schema.org/HyperTocEntry HyperTocEntry} can have a {@link https://schema.org/tocContinuation tocContinuation} indicated, which is another {@link https://schema.org/HyperTocEntry HyperTocEntry} that would be the default next item to play or render. */
    "schema:tocContinuation"?: SchemaValue<HyperTocEntry | IdReference>;
    /** Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a {@link https://schema.org/HyperTocEntry HyperTocEntry}. */
    "schema:utterances"?: SchemaValue<Text>;
}
interface HyperTocEntryLeaf extends HyperTocEntryBase {
    "@type": "schema:HyperTocEntry";
}
/** A HyperToEntry is an item within a {@link https://schema.org/HyperToc HyperToc}, which represents a hypertext table of contents for complex media objects, such as {@link https://schema.org/VideoObject VideoObject}, {@link https://schema.org/AudioObject AudioObject}. The media object itself is indicated using {@link https://schema.org/associatedMedia associatedMedia}. Each section of interest within that content can be described with a {@link https://schema.org/HyperTocEntry HyperTocEntry}, with associated {@link https://schema.org/startOffset startOffset} and {@link https://schema.org/endOffset endOffset}. When several entries are all from the same file, {@link https://schema.org/associatedMedia associatedMedia} is used on the overarching {@link https://schema.org/HyperTocEntry HyperTocEntry}; if the content has been split into multiple files, they can be referenced using {@link https://schema.org/associatedMedia associatedMedia} on each {@link https://schema.org/HyperTocEntry HyperTocEntry}. */
export type HyperTocEntry = HyperTocEntryLeaf;

interface IceCreamShopLeaf extends FoodEstablishmentBase {
    "@type": "schema:IceCreamShop";
}
/** An ice cream shop. */
export type IceCreamShop = IceCreamShopLeaf | string;

interface IdentityOperationsEntityLeaf extends ThingBase {
    "@type": "coremo:IdentityOperationsEntity";
}
/** An identity entity. */
export type IdentityOperationsEntity = IdentityOperationsEntityLeaf;

interface IdentityOperationsModelAreaLeaf extends ThingBase {
    "@type": "coremo:IdentityOperationsModelArea";
}
/** An identity model area. */
export type IdentityOperationsModelArea = IdentityOperationsModelAreaLeaf;

interface IgnoreActionLeaf extends ActionBase {
    "@type": "schema:IgnoreAction";
}
/** The act of intentionally disregarding the object. An agent ignores an object. */
export type IgnoreAction = IgnoreActionLeaf;

interface ImageGalleryLeaf extends WebPageBase {
    "@type": "schema:ImageGallery";
}
/** Web page type: Image gallery page. */
export type ImageGallery = ImageGalleryLeaf;

interface ImageObjectBase extends MediaObjectBase {
    /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link https://schema.org/encodingFormat encodingFormat}. */
    "schema:caption"?: SchemaValue<MediaObject | Text | IdReference>;
    /** Represents textual captioning from a {@link https://schema.org/MediaObject MediaObject}, e.g. text of a 'meme'. */
    "schema:embeddedTextCaption"?: SchemaValue<Text>;
    /** exif data for this object. */
    "schema:exifData"?: SchemaValue<PropertyValue | Text | IdReference>;
    /** Indicates whether this image is representative of the content of the page. */
    "schema:representativeOfPage"?: SchemaValue<Boolean>;
    /** Thumbnail image for an image or video. */
    "schema:thumbnail"?: SchemaValue<ImageObject | IdReference>;
}
interface ImageObjectLeaf extends ImageObjectBase {
    "@type": "schema:ImageObject";
}
/** An image file. */
export type ImageObject = ImageObjectLeaf | Barcode | ImageObjectSnapshot;

interface ImageObjectSnapshotLeaf extends ImageObjectBase {
    "@type": "schema:ImageObjectSnapshot";
}
/** A specific and exact (byte-for-byte) version of an {@link https://schema.org/ImageObject ImageObject}. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata (e.g. XMP, EXIF) the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
export type ImageObjectSnapshot = ImageObjectSnapshotLeaf;

interface ImagingTestBase extends MedicalTestBase {
    /** Imaging technique used. */
    "schema:imagingTechnique"?: SchemaValue<MedicalImagingTechnique | IdReference>;
}
interface ImagingTestLeaf extends ImagingTestBase {
    "@type": "schema:ImagingTest";
}
/** Any medical imaging modality typically used for diagnostic purposes. */
export type ImagingTest = ImagingTestLeaf;

interface IndividualProductBase extends ProductBase {
    /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. */
    "schema:serialNumber"?: SchemaValue<Text>;
}
interface IndividualProductLeaf extends IndividualProductBase {
    "@type": "schema:IndividualProduct";
}
/** A single, identifiable product instance (e.g. a laptop with a particular serial number). */
export type IndividualProduct = IndividualProductLeaf;

interface InfectiousAgentClassLeaf extends EnumerationBase {
    "@type": "schema:InfectiousAgentClass";
}
/** Classes of agents or pathogens that transmit infectious diseases. Enumerated type. */
export type InfectiousAgentClass = "https://schema.org/Bacteria" | "schema:Bacteria" | "https://schema.org/Fungus" | "schema:Fungus" | "https://schema.org/MulticellularParasite" | "schema:MulticellularParasite" | "https://schema.org/Prion" | "schema:Prion" | "https://schema.org/Protozoa" | "schema:Protozoa" | "https://schema.org/Virus" | "schema:Virus" | InfectiousAgentClassLeaf;

interface InfectiousDiseaseBase extends MedicalConditionBase {
    /** The actual infectious agent, such as a specific bacterium. */
    "schema:infectiousAgent"?: SchemaValue<Text>;
    /** The class of infectious agent (bacteria, prion, etc.) that causes the disease. */
    "schema:infectiousAgentClass"?: SchemaValue<InfectiousAgentClass | IdReference>;
    /** How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc. */
    "schema:transmissionMethod"?: SchemaValue<Text>;
}
interface InfectiousDiseaseLeaf extends InfectiousDiseaseBase {
    "@type": "schema:InfectiousDisease";
}
/** An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease. */
export type InfectiousDisease = InfectiousDiseaseLeaf;

interface InformActionBase extends CommunicateActionBase {
    /** Upcoming or past event associated with this place, organization, or action. */
    "schema:event"?: SchemaValue<Event | IdReference>;
}
interface InformActionLeaf extends InformActionBase {
    "@type": "schema:InformAction";
}
/** The act of notifying someone of information pertinent to them, with no expectation of a response. */
export type InformAction = InformActionLeaf | ConfirmAction | RsvpAction;

interface InformationContainerLeaf extends CreativeWorkBase {
    "@type": "coremo:InformationContainer";
}
/** A container of information. */
export type InformationContainer = InformationContainerLeaf | KnowledgeGraph | SemanticModel | SemanticPool | SemanticRoot;

interface InheritableBase extends ThingBase {
    /** The parent of a derived resource. */
    "coremo:inheritFrom"?: SchemaValue<Thing | IdReference>;
}
interface InheritableLeaf extends InheritableBase {
    "@type": "coremo:Inheritable";
}
/** A resource which can be derived from another resource of the same type (with any property values not specified in child inherited from parent) */
export type Inheritable = InheritableLeaf;

interface InsertActionBase extends UpdateActionBase {
    /** A sub property of location. The final location of the object or the agent after the action. */
    "schema:toLocation"?: SchemaValue<Place | IdReference>;
}
interface InsertActionLeaf extends InsertActionBase {
    "@type": "schema:InsertAction";
}
/** The act of adding at a specific location in an ordered collection. */
export type InsertAction = InsertActionLeaf | AppendAction | PrependAction;

interface InstallActionLeaf extends ConsumeActionBase {
    "@type": "schema:InstallAction";
}
/** The act of installing an application. */
export type InstallAction = InstallActionLeaf;

interface InsuranceAgencyLeaf extends FinancialServiceBase {
    "@type": "schema:InsuranceAgency";
}
/** An Insurance agency. */
export type InsuranceAgency = InsuranceAgencyLeaf | string;

interface IntangibleLeaf extends ThingBase {
    "@type": "schema:Intangible";
}
/** A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc. */
export type Intangible = IntangibleLeaf | ActionAccessSpecification | AlignmentObject | Audience | BedDetails | Brand | BroadcastChannel | BroadcastFrequencySpecification | Class | ComputerLanguage | DataFeedItem | DefinedTerm | Demand | DigitalDocumentPermission | EducationalOccupationalProgram | EnergyConsumptionDetails | EntryPoint | Enumeration | FloorPlan | GameServer | GeospatialGeometry | Grant | HealthInsurancePlan | HealthPlanCostSharingSpecification | HealthPlanFormulary | HealthPlanNetwork | Invoice | ItemList | JobPosting | Language | ListItem | MediaSubscription | MenuItem | MerchantReturnPolicy | MerchantReturnPolicySeasonalOverride | Observation | Occupation | OccupationalExperienceRequirements | Offer | Order | OrderItem | ParcelDelivery | Permit | ProgramMembership | Property | PropertyValueSpecification | Quantity | Rating | Reservation | Role | Schedule | Seat | Series | Service | ServiceChannel | SpeakableSpecification | StatisticalPopulation | StructuredValue | Ticket | Trip | VirtualLocation;

/** Data type: Integer. */
export type Integer = number | `${number}`;

interface IntegrationOperationsModelAreaLeaf extends ThingBase {
    "@type": "coremo:IntegrationOperationsModelArea";
}
/** An integration model area. */
export type IntegrationOperationsModelArea = IntegrationOperationsModelAreaLeaf;

interface IntelligenceTechnologyModelAreaLeaf extends ThingBase {
    "@type": "coremo:IntelligenceTechnologyModelArea";
}
/** An intelligence model area. */
export type IntelligenceTechnologyModelArea = IntelligenceTechnologyModelAreaLeaf;

interface InteractActionLeaf extends ActionBase {
    "@type": "schema:InteractAction";
}
/** The act of interacting with another person or organization. */
export type InteractAction = InteractActionLeaf | BefriendAction | CommunicateAction | FollowAction | JoinAction | LeaveAction | MarryAction | RegisterAction | SubscribeAction | UnRegisterAction;

interface InteractionCounterBase extends ThingBase {
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:endTime"?: SchemaValue<DateTime | Time>;
    /** The WebSite or SoftwareApplication where the interactions took place. */
    "schema:interactionService"?: SchemaValue<SoftwareApplication | WebSite | IdReference>;
    /** The Action representing the type of interaction. For up votes, +1s, etc. use {@link https://schema.org/LikeAction LikeAction}. For down votes use {@link https://schema.org/DislikeAction DislikeAction}. Otherwise, use the most specific Action. */
    "schema:interactionType"?: SchemaValue<Action | IdReference>;
    /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
    "schema:location"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference>;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:startTime"?: SchemaValue<DateTime | Time>;
    /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. */
    "schema:userInteractionCount"?: SchemaValue<Integer>;
}
interface InteractionCounterLeaf extends InteractionCounterBase {
    "@type": "schema:InteractionCounter";
}
/** A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction. */
export type InteractionCounter = InteractionCounterLeaf;

interface InterimPaymentLeaf extends PaymentBase {
    "@type": "camo:InterimPayment";
}
/** An interim payment Explanation. */
export type InterimPayment = InterimPaymentLeaf;

interface InterimPaymentCertificateLeaf extends PaymentCertificateBase {
    "@type": "camo:InterimPaymentCertificate";
}
/** An interim payment certificate. */
export type InterimPaymentCertificate = InterimPaymentCertificateLeaf;

interface InterimSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:InterimSectionPaymentDescription";
}
/** An interim payment that is part of a contract payment description. */
export type InterimSectionPaymentDescription = InterimSectionPaymentDescriptionLeaf;

interface InterimStatementLeaf extends ContractStatementBase {
    "@type": "camo:InterimStatement";
}
/** An interim statement. */
export type InterimStatement = InterimStatementLeaf;

interface InternetCafeLeaf extends LocalBusinessBase {
    "@type": "schema:InternetCafe";
}
/** An internet cafe. */
export type InternetCafe = InternetCafeLeaf | string;

interface InvestmentFundLeaf extends InvestmentOrDepositBase {
    "@type": "schema:InvestmentFund";
}
/** A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested into stocks, bonds and other assets. */
export type InvestmentFund = InvestmentFundLeaf;

interface InvestmentOrDepositBase extends FinancialProductBase {
    /** The amount of money. */
    "schema:amount"?: SchemaValue<MonetaryAmount | Number | IdReference>;
}
interface InvestmentOrDepositLeaf extends InvestmentOrDepositBase {
    "@type": "schema:InvestmentOrDeposit";
}
/** A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return. */
export type InvestmentOrDeposit = InvestmentOrDepositLeaf | BrokerageAccount | DepositAccount | InvestmentFund;

interface InviteActionBase extends CommunicateActionBase {
    /** Upcoming or past event associated with this place, organization, or action. */
    "schema:event"?: SchemaValue<Event | IdReference>;
}
interface InviteActionLeaf extends InviteActionBase {
    "@type": "schema:InviteAction";
}
/** The act of asking someone to attend an event. Reciprocal of RsvpAction. */
export type InviteAction = InviteActionLeaf;

interface InvoiceBase extends ThingBase {
    /** The identifier for the account the payment will be applied to. */
    "schema:accountId"?: SchemaValue<Text>;
    /** The time interval used to compute the invoice. */
    "schema:billingPeriod"?: SchemaValue<Duration | IdReference>;
    /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
    "schema:broker"?: SchemaValue<Organization | Person | IdReference>;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "schema:category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference>;
    /** A number that confirms the given order or payment has been received. */
    "schema:confirmationNumber"?: SchemaValue<Text>;
    /** Party placing the order or paying the invoice. */
    "schema:customer"?: SchemaValue<Organization | Person | IdReference>;
    /** The minimum payment required at this time. */
    "schema:minimumPaymentDue"?: SchemaValue<MonetaryAmount | PriceSpecification | IdReference>;
    /**
     * The date that payment is due.
     *
     * @deprecated Consider using https://schema.org/paymentDueDate instead.
     */
    "schema:paymentDue"?: SchemaValue<DateTime>;
    /** The date that payment is due. */
    "schema:paymentDueDate"?: SchemaValue<Date | DateTime>;
    /** The name of the credit card or other method of payment for the order. */
    "schema:paymentMethod"?: SchemaValue<PaymentMethod | IdReference>;
    /** An identifier for the method of payment used (e.g. the last 4 digits of the credit card). */
    "schema:paymentMethodId"?: SchemaValue<Text>;
    /** The status of payment; whether the invoice has been paid or not. */
    "schema:paymentStatus"?: SchemaValue<PaymentStatusType | Text | IdReference>;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "schema:provider"?: SchemaValue<Organization | Person | IdReference>;
    /** The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice. */
    "schema:referencesOrder"?: SchemaValue<Order | IdReference>;
    /** The date the invoice is scheduled to be paid. */
    "schema:scheduledPaymentDate"?: SchemaValue<Date>;
    /** The total amount due. */
    "schema:totalPaymentDue"?: SchemaValue<MonetaryAmount | PriceSpecification | IdReference>;
}
interface InvoiceLeaf extends InvoiceBase {
    "@type": "schema:Invoice";
}
/** A statement of the money due for goods or services; a bill. */
export type Invoice = InvoiceLeaf;

interface ItemAvailabilityLeaf extends EnumerationBase {
    "@type": "schema:ItemAvailability";
}
/** A list of possible product availability options. */
export type ItemAvailability = "https://schema.org/BackOrder" | "schema:BackOrder" | "https://schema.org/Discontinued" | "schema:Discontinued" | "https://schema.org/InStock" | "schema:InStock" | "https://schema.org/InStoreOnly" | "schema:InStoreOnly" | "https://schema.org/LimitedAvailability" | "schema:LimitedAvailability" | "https://schema.org/OnlineOnly" | "schema:OnlineOnly" | "https://schema.org/OutOfStock" | "schema:OutOfStock" | "https://schema.org/PreOrder" | "schema:PreOrder" | "https://schema.org/PreSale" | "schema:PreSale" | "https://schema.org/SoldOut" | "schema:SoldOut" | ItemAvailabilityLeaf;

interface ItemListBase extends ThingBase {
    /**
     * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.
     *
     * Text values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.
     *
     * Note: The order of elements in your mark-up is not sufficient for indicating the order or elements. Use ListItem with a 'position' property in such cases.
     */
    "schema:itemListElement"?: SchemaValue<ListItem | Text | Thing | IdReference>;
    /** Type of ordering (e.g. Ascending, Descending, Unordered). */
    "schema:itemListOrder"?: SchemaValue<ItemListOrderType | Text | IdReference>;
    /** The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list. */
    "schema:numberOfItems"?: SchemaValue<Integer>;
}
interface ItemListLeaf extends ItemListBase {
    "@type": "schema:ItemList";
}
/** A list of items of any sort—for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting. */
export type ItemList = ItemListLeaf | BreadcrumbList | HowToSection | HowToStep | OfferCatalog;

interface ItemListOrderTypeLeaf extends EnumerationBase {
    "@type": "schema:ItemListOrderType";
}
/** Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized. */
export type ItemListOrderType = "https://schema.org/ItemListOrderAscending" | "schema:ItemListOrderAscending" | "https://schema.org/ItemListOrderDescending" | "schema:ItemListOrderDescending" | "https://schema.org/ItemListUnordered" | "schema:ItemListUnordered" | ItemListOrderTypeLeaf;

interface ItemPageLeaf extends WebPageBase {
    "@type": "schema:ItemPage";
}
/** A page devoted to a single item, such as a particular product or hotel. */
export type ItemPage = ItemPageLeaf;

interface JewelryStoreLeaf extends LocalBusinessBase {
    "@type": "schema:JewelryStore";
}
/** A jewelry store. */
export type JewelryStore = JewelryStoreLeaf | string;

interface JobPostingBase extends ThingBase {
    /** The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements. */
    "schema:applicantLocationRequirements"?: SchemaValue<AdministrativeArea | IdReference>;
    /** Contact details for further information relevant to this job posting. */
    "schema:applicationContact"?: SchemaValue<ContactPoint | IdReference>;
    /** The base salary of the job or of an employee in an EmployeeRole. */
    "schema:baseSalary"?: SchemaValue<MonetaryAmount | Number | PriceSpecification | IdReference>;
    /**
     * Description of benefits associated with the job.
     *
     * @deprecated Consider using https://schema.org/jobBenefits instead.
     */
    "schema:benefits"?: SchemaValue<Text>;
    /** Publication date of an online listing. */
    "schema:datePosted"?: SchemaValue<Date | DateTime>;
    /** Indicates whether an {@link https://schema.org/url url} that is associated with a {@link https://schema.org/JobPosting JobPosting} enables direct application for the job, via the posting website. A job posting is considered to have directApply of {@link https://schema.org/True True} if an application process for the specified job can be directly initiated via the url(s) given (noting that e.g. multiple internet domains might nevertheless be involved at an implementation level). A value of {@link https://schema.org/False False} is appropriate if there is no clear path to applying directly online for the specified job, navigating directly from the JobPosting url(s) supplied. */
    "schema:directApply"?: SchemaValue<Boolean>;
    /** Educational background needed for the position or Occupation. */
    "schema:educationRequirements"?: SchemaValue<EducationalOccupationalCredential | Text | IdReference>;
    /** The legal requirements such as citizenship, visa and other documentation required for an applicant to this job. */
    "schema:eligibilityToWorkRequirement"?: SchemaValue<Text>;
    /** A description of the employer, career opportunities and work environment for this position. */
    "schema:employerOverview"?: SchemaValue<Text>;
    /** Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship). */
    "schema:employmentType"?: SchemaValue<Text>;
    /** Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed. */
    "schema:employmentUnit"?: SchemaValue<Organization | IdReference>;
    /** An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value. */
    "schema:estimatedSalary"?: SchemaValue<MonetaryAmount | MonetaryAmountDistribution | Number | IdReference>;
    /** Indicates whether a {@link https://schema.org/JobPosting JobPosting} will accept experience (as indicated by {@link https://schema.org/OccupationalExperienceRequirements OccupationalExperienceRequirements}) in place of its formal educational qualifications (as indicated by {@link https://schema.org/educationRequirements educationRequirements}). If true, indicates that satisfying one of these requirements is sufficient. */
    "schema:experienceInPlaceOfEducation"?: SchemaValue<Boolean>;
    /** Description of skills and experience needed for the position or Occupation. */
    "schema:experienceRequirements"?: SchemaValue<OccupationalExperienceRequirements | Text | IdReference>;
    /** Organization offering the job position. */
    "schema:hiringOrganization"?: SchemaValue<Organization | IdReference>;
    /** Description of bonus and commission compensation aspects of the job. */
    "schema:incentiveCompensation"?: SchemaValue<Text>;
    /**
     * Description of bonus and commission compensation aspects of the job.
     *
     * @deprecated Consider using https://schema.org/incentiveCompensation instead.
     */
    "schema:incentives"?: SchemaValue<Text>;
    /** The industry associated with the job position. */
    "schema:industry"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** Description of benefits associated with the job. */
    "schema:jobBenefits"?: SchemaValue<Text>;
    /** An indicator as to whether a position is available for an immediate start. */
    "schema:jobImmediateStart"?: SchemaValue<Boolean>;
    /** A (typically single) geographic location associated with the job position. */
    "schema:jobLocation"?: SchemaValue<Place | IdReference>;
    /** A description of the job location (e.g TELECOMMUTE for telecommute jobs). */
    "schema:jobLocationType"?: SchemaValue<Text>;
    /** The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible. */
    "schema:jobStartDate"?: SchemaValue<Date | Text>;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as {@link http://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
     *
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    "schema:occupationalCategory"?: SchemaValue<CategoryCode | Text | IdReference>;
    /** A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term. */
    "schema:physicalRequirement"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** Specific qualifications required for this role or Occupation. */
    "schema:qualifications"?: SchemaValue<EducationalOccupationalCredential | Text | IdReference>;
    /** The Occupation for the JobPosting. */
    "schema:relevantOccupation"?: SchemaValue<Occupation | IdReference>;
    /** Responsibilities associated with this role or Occupation. */
    "schema:responsibilities"?: SchemaValue<Text>;
    /** The currency (coded using {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217} ) used for the main salary information in this job posting or for this employee. */
    "schema:salaryCurrency"?: SchemaValue<Text>;
    /** A description of any security clearance requirements of the job. */
    "schema:securityClearanceRequirement"?: SchemaValue<Text | URL | IdReference>;
    /** A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term. */
    "schema:sensoryRequirement"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation. */
    "schema:skills"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc. */
    "schema:specialCommitments"?: SchemaValue<Text>;
    /** The title of the job. */
    "schema:title"?: SchemaValue<Text>;
    /** The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known. */
    "schema:totalJobOpenings"?: SchemaValue<Integer>;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "schema:validThrough"?: SchemaValue<Date | DateTime>;
    /** The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm). */
    "schema:workHours"?: SchemaValue<Text>;
}
interface JobPostingLeaf extends JobPostingBase {
    "@type": "schema:JobPosting";
}
/** A listing that describes a job opening in a certain organization. */
export type JobPosting = JobPostingLeaf;

interface JoinActionBase extends ActionBase {
    /** Upcoming or past event associated with this place, organization, or action. */
    "schema:event"?: SchemaValue<Event | IdReference>;
}
interface JoinActionLeaf extends JoinActionBase {
    "@type": "schema:JoinAction";
}
/**
 * An agent joins an event/group with participants/friends at a location.
 *
 * Related actions:
 * - {@link https://schema.org/RegisterAction RegisterAction}: Unlike RegisterAction, JoinAction refers to joining a group/team of people.
 * - {@link https://schema.org/SubscribeAction SubscribeAction}: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.
 * - {@link https://schema.org/FollowAction FollowAction}: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 */
export type JoinAction = JoinActionLeaf;

interface JointBase extends AnatomicalStructureBase {
    /** The biomechanical properties of the bone. */
    "schema:biomechnicalClass"?: SchemaValue<Text>;
    /** The degree of mobility the joint allows. */
    "schema:functionalClass"?: SchemaValue<MedicalEntity | Text | IdReference>;
    /** The name given to how bone physically connects to each other. */
    "schema:structuralClass"?: SchemaValue<Text>;
}
interface JointLeaf extends JointBase {
    "@type": "schema:Joint";
}
/** The anatomical location at which two or more bones make contact. */
export type Joint = JointLeaf;

interface JVUndertakingLeaf extends ThingBase {
    "@type": "camo:JVUndertaking";
}
/** The joint venture undertaking. */
export type JVUndertaking = JVUndertakingLeaf;

interface KnowledgeGraphBase extends CreativeWorkBase {
    /** A semantic model that is contained within a knowledge graph. */
    "coremo:hasSemanticModel"?: SchemaValue<SemanticModel | IdReference>;
}
interface KnowledgeGraphLeaf extends KnowledgeGraphBase {
    "@type": "coremo:KnowledgeGraph";
}
/** A knowledge graph (which acts as a data container for one or more related semantic models). */
export type KnowledgeGraph = KnowledgeGraphLeaf;

interface LakeBodyOfWaterLeaf extends PlaceBase {
    "@type": "schema:LakeBodyOfWater";
}
/** A lake (for example, Lake Pontrachain). */
export type LakeBodyOfWater = LakeBodyOfWaterLeaf | string;

interface LandformLeaf extends PlaceBase {
    "@type": "schema:Landform";
}
/** A landform or physical feature. Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins. */
export type Landform = LandformLeaf | BodyOfWater | Continent | Mountain | Volcano | string;

interface LandmarksOrHistoricalBuildingsLeaf extends PlaceBase {
    "@type": "schema:LandmarksOrHistoricalBuildings";
}
/** An historical landmark or building. */
export type LandmarksOrHistoricalBuildings = LandmarksOrHistoricalBuildingsLeaf | string;

interface LanguageLeaf extends ThingBase {
    "@type": "schema:Language";
}
/** Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in {@link https://en.wikipedia.org/wiki/IETF_language_tag BCP 47} can be used via the {@link https://schema.org/alternateName alternateName} property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using {@link https://schema.org/ComputerLanguage ComputerLanguage}. */
export type Language = LanguageLeaf;

interface LearningResourceBase extends CreativeWorkBase {
    /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
    "schema:assesses"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
    "schema:competencyRequired"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /**
     * An alignment to an established educational framework.
     *
     * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link https://schema.org/teaches teaches} or {@link https://schema.org/assesses assesses} a competency.
     */
    "schema:educationalAlignment"?: SchemaValue<AlignmentObject | IdReference>;
    /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
    "schema:educationalLevel"?: SchemaValue<DefinedTerm | Text | URL | IdReference>;
    /** The purpose of a work in the context of education; for example, 'assignment', 'group work'. */
    "schema:educationalUse"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. */
    "schema:learningResourceType"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
    "schema:teaches"?: SchemaValue<DefinedTerm | Text | IdReference>;
}
interface LearningResourceLeaf extends LearningResourceBase {
    "@type": "schema:LearningResource";
}
/**
 * The LearningResource type can be used to indicate {@link https://schema.org/CreativeWork CreativeWork}s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.
 *
 * {@link https://schema.org/LearningResource LearningResource} is expected to be used as an addition to a primary type such as {@link https://schema.org/Book Book}, {@link https://schema.org/VideoObject VideoObject}, {@link https://schema.org/Product Product} etc.
 *
 * {@link https://schema.org/EducationEvent EducationEvent} serves a similar purpose for event-like things (e.g. a {@link https://schema.org/Trip Trip}). A {@link https://schema.org/LearningResource LearningResource} may be created as a result of an {@link https://schema.org/EducationEvent EducationEvent}, for example by recording one.
 */
export type LearningResource = LearningResourceLeaf | Course | Quiz;

interface LeaveActionBase extends ActionBase {
    /** Upcoming or past event associated with this place, organization, or action. */
    "schema:event"?: SchemaValue<Event | IdReference>;
}
interface LeaveActionLeaf extends LeaveActionBase {
    "@type": "schema:LeaveAction";
}
/**
 * An agent leaves an event / group with participants/friends at a location.
 *
 * Related actions:
 * - {@link https://schema.org/JoinAction JoinAction}: The antonym of LeaveAction.
 * - {@link https://schema.org/UnRegisterAction UnRegisterAction}: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 */
export type LeaveAction = LeaveActionLeaf;

interface LegalForceStatusLeaf extends EnumerationBase {
    "@type": "schema:LegalForceStatus";
}
/** A list of possible statuses for the legal force of a legislation. */
export type LegalForceStatus = "https://schema.org/InForce" | "schema:InForce" | "https://schema.org/NotInForce" | "schema:NotInForce" | "https://schema.org/PartiallyInForce" | "schema:PartiallyInForce" | LegalForceStatusLeaf;

interface LegalServiceLeaf extends LocalBusinessBase {
    "@type": "schema:LegalService";
}
/**
 * A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.
 *
 * As a {@link https://schema.org/LocalBusiness LocalBusiness} it can be described as a {@link https://schema.org/provider provider} of one or more {@link https://schema.org/Service Service}\(s).
 */
export type LegalService = LegalServiceLeaf | Attorney | Notary | string;

interface LegalValueLevelLeaf extends EnumerationBase {
    "@type": "schema:LegalValueLevel";
}
/** A list of possible levels for the legal validity of a legislation. */
export type LegalValueLevel = "https://schema.org/AuthoritativeLegalValue" | "schema:AuthoritativeLegalValue" | "https://schema.org/DefinitiveLegalValue" | "schema:DefinitiveLegalValue" | "https://schema.org/OfficialLegalValue" | "schema:OfficialLegalValue" | "https://schema.org/UnofficialLegalValue" | "schema:UnofficialLegalValue" | LegalValueLevelLeaf;

interface LegislationBase extends CreativeWorkBase {
    /** Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based. */
    "schema:jurisdiction"?: SchemaValue<AdministrativeArea | Text | IdReference>;
    /** Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the {@link /legislationTransposes legislationTransposes} property. For example an informative consolidated law of a European Union's member state "applies" the consolidated version of the European Directive implemented in it. */
    "schema:legislationApplies"?: SchemaValue<Legislation | IdReference>;
    /** Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the {@link /legislationConsolidates legislationConsolidates} property. */
    "schema:legislationChanges"?: SchemaValue<Legislation | IdReference>;
    /** Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change. */
    "schema:legislationConsolidates"?: SchemaValue<Legislation | IdReference>;
    /** The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force. */
    "schema:legislationDate"?: SchemaValue<Date>;
    /** The point-in-time at which the provided description of the legislation is valid (e.g. : when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the "National Insurance Contributions Act 2015") */
    "schema:legislationDateVersion"?: SchemaValue<Date>;
    /** An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex. */
    "schema:legislationIdentifier"?: SchemaValue<Text | URL | IdReference>;
    /** The jurisdiction from which the legislation originates. */
    "schema:legislationJurisdiction"?: SchemaValue<AdministrativeArea | Text | IdReference>;
    /** Whether the legislation is currently in force, not in force, or partially in force. */
    "schema:legislationLegalForce"?: SchemaValue<LegalForceStatus | IdReference>;
    /** The person or organization that originally passed or made the law : typically parliament (for primary legislation) or government (for secondary legislation). This indicates the "legal author" of the law, as opposed to its physical author. */
    "schema:legislationPassedBy"?: SchemaValue<Organization | Person | IdReference>;
    /** An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published. */
    "schema:legislationResponsible"?: SchemaValue<Organization | Person | IdReference>;
    /** Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations. */
    "schema:legislationTransposes"?: SchemaValue<Legislation | IdReference>;
    /** The type of the legislation. Examples of values are "law", "act", "directive", "decree", "regulation", "statutory instrument", "loi organique", "r\u00E8glement grand-ducal", etc., depending on the country. */
    "schema:legislationType"?: SchemaValue<CategoryCode | Text | IdReference>;
}
interface LegislationLeaf extends LegislationBase {
    "@type": "schema:Legislation";
}
/** A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article). */
export type Legislation = LegislationLeaf | LegislationObject;

interface LegislationObjectBase extends MediaObjectBase, LegislationBase {
    /** The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a "stronger" legal value than the HTML file of the same act. */
    "schema:legislationLegalValue"?: SchemaValue<LegalValueLevel | IdReference>;
}
interface LegislationObjectLeaf extends LegislationObjectBase {
    "@type": "schema:LegislationObject";
}
/** A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version. */
export type LegislationObject = LegislationObjectLeaf;

interface LegislativeBuildingLeaf extends CivicStructureBase {
    "@type": "schema:LegislativeBuilding";
}
/** A legislative building—for example, the state capitol. */
export type LegislativeBuilding = LegislativeBuildingLeaf | string;

interface LendActionBase extends TransferActionBase {
    /** A sub property of participant. The person that borrows the object being lent. */
    "schema:borrower"?: SchemaValue<Person | IdReference>;
}
interface LendActionLeaf extends LendActionBase {
    "@type": "schema:LendAction";
}
/**
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.
 *
 * Related actions:
 * - {@link https://schema.org/BorrowAction BorrowAction}: Reciprocal of LendAction.
 */
export type LendAction = LendActionLeaf;

interface LetterOfAcceptanceBase extends ThingBase {
    /** The Accepted Contract Amount of this contract. */
    "camo:acceptedContractAmount"?: SchemaValue<PriceSpecification | IdReference>;
}
interface LetterOfAcceptanceLeaf extends LetterOfAcceptanceBase {
    "@type": "camo:LetterOfAcceptance";
}
/** The Letter Of Acceptance. */
export type LetterOfAcceptance = LetterOfAcceptanceLeaf;

interface LetterOfTenderLeaf extends ThingBase {
    "@type": "camo:LetterOfTender";
}
/** The Letter Of Tender. */
export type LetterOfTender = LetterOfTenderLeaf;

interface LibraryLeaf extends LocalBusinessBase {
    "@type": "schema:Library";
}
/** A library. */
export type Library = LibraryLeaf | string;

interface LibrarySystemLeaf extends OrganizationBase {
    "@type": "schema:LibrarySystem";
}
/** A {@link https://schema.org/LibrarySystem LibrarySystem} is a collaborative system amongst several libraries. */
export type LibrarySystem = LibrarySystemLeaf | string;

interface LifestyleModificationLeaf extends MedicalEntityBase {
    "@type": "schema:LifestyleModification";
}
/** A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition. */
export type LifestyleModification = LifestyleModificationLeaf | Diet | PhysicalActivity;

interface LigamentLeaf extends AnatomicalStructureBase {
    "@type": "schema:Ligament";
}
/** A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and structurally support joints. */
export type Ligament = LigamentLeaf;

interface LikeActionLeaf extends ActionBase {
    "@type": "schema:LikeAction";
}
/** The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants. */
export type LikeAction = LikeActionLeaf;

interface LinkRoleBase extends RoleBase {
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "schema:inLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** Indicates the relationship type of a Web link. */
    "schema:linkRelationship"?: SchemaValue<Text>;
}
interface LinkRoleLeaf extends LinkRoleBase {
    "@type": "schema:LinkRole";
}
/** A Role that represents a Web link e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds. */
export type LinkRole = LinkRoleLeaf;

interface LiquorStoreLeaf extends LocalBusinessBase {
    "@type": "schema:LiquorStore";
}
/** A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits. */
export type LiquorStore = LiquorStoreLeaf | string;

interface ListenActionLeaf extends ConsumeActionBase {
    "@type": "schema:ListenAction";
}
/** The act of consuming audio content. */
export type ListenAction = ListenActionLeaf;

interface ListItemBase extends ThingBase {
    /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’. */
    "schema:item"?: SchemaValue<Thing | IdReference>;
    /** A link to the ListItem that follows the current one. */
    "schema:nextItem"?: SchemaValue<ListItem | IdReference>;
    /** The position of an item in a series or sequence of items. */
    "schema:position"?: SchemaValue<Integer | Text>;
    /** A link to the ListItem that preceeds the current one. */
    "schema:previousItem"?: SchemaValue<ListItem | IdReference>;
}
interface ListItemLeaf extends ListItemBase {
    "@type": "schema:ListItem";
}
/** An list item, e.g. a step in a checklist or how-to description. */
export type ListItem = ListItemLeaf | HowToDirection | HowToItem | HowToSection | HowToStep | HowToTip;

interface LiteraryEventLeaf extends EventBase {
    "@type": "schema:LiteraryEvent";
}
/** Event type: Literary event. */
export type LiteraryEvent = LiteraryEventLeaf;

interface LiveBlogPostingBase extends SocialMediaPostingBase {
    /** The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes. */
    "schema:coverageEndTime"?: SchemaValue<DateTime>;
    /** The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins. */
    "schema:coverageStartTime"?: SchemaValue<DateTime>;
    /** An update to the LiveBlog. */
    "schema:liveBlogUpdate"?: SchemaValue<BlogPosting | IdReference>;
}
interface LiveBlogPostingLeaf extends LiveBlogPostingBase {
    "@type": "schema:LiveBlogPosting";
}
/** A {@link https://schema.org/LiveBlogPosting LiveBlogPosting} is a {@link https://schema.org/BlogPosting BlogPosting} intended to provide a rolling textual coverage of an ongoing event through continuous updates. */
export type LiveBlogPosting = LiveBlogPostingLeaf;

interface LoanOrCreditBase extends FinancialProductBase {
    /** The amount of money. */
    "schema:amount"?: SchemaValue<MonetaryAmount | Number | IdReference>;
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:currency"?: SchemaValue<Text>;
    /** The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred. */
    "schema:gracePeriod"?: SchemaValue<Duration | IdReference>;
    /** A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment. */
    "schema:loanRepaymentForm"?: SchemaValue<RepaymentSpecification | IdReference>;
    /** The duration of the loan or credit agreement. */
    "schema:loanTerm"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The type of a loan or credit. */
    "schema:loanType"?: SchemaValue<Text | URL | IdReference>;
    /** The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money. */
    "schema:recourseLoan"?: SchemaValue<Boolean>;
    /** Whether the terms for payment of interest can be renegotiated during the life of the loan. */
    "schema:renegotiableLoan"?: SchemaValue<Boolean>;
    /** Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.) */
    "schema:requiredCollateral"?: SchemaValue<Text | Thing | IdReference>;
}
interface LoanOrCreditLeaf extends LoanOrCreditBase {
    "@type": "schema:LoanOrCredit";
}
/** A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges. */
export type LoanOrCredit = LoanOrCreditLeaf | CreditCard | MortgageLoan;

interface LocalBusinessBase extends OrganizationBase, PlaceBase {
    /**
     * The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical){@link https://schema.org/branch branch}.
     *
     * @deprecated Consider using https://schema.org/parentOrganization instead.
     */
    "schema:branchOf"?: SchemaValue<Organization | IdReference>;
    /**
     * The currency accepted.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:currenciesAccepted"?: SchemaValue<Text>;
    /**
     * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.
     * - Days are specified using the following two-letter combinations: `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`.
     * - Times are specified using 24:00 format. For example, 3pm is specified as `15:00`, 10am as `10:00`.
     * - Here is an example: `<time itemprop="openingHours" datetime="Tu,Th 16:00-20:00">Tuesdays and Thursdays 4-8pm</time>`.
     * - If a business is open 7 days a week, then it can be specified as `<time itemprop="openingHours" datetime="Mo-Su">Monday through Sunday, all day</time>`.
     */
    "schema:openingHours"?: SchemaValue<Text>;
    /** Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc. */
    "schema:paymentAccepted"?: SchemaValue<Text>;
    /** The price range of the business, for example `$$$`. */
    "schema:priceRange"?: SchemaValue<Text>;
}
interface LocalBusinessLeaf extends LocalBusinessBase {
    "@type": "schema:LocalBusiness";
}
/** A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc. */
export type LocalBusiness = LocalBusinessLeaf | AnimalShelter | ArchiveOrganization | AutomotiveBusiness | ChildCare | Dentist | DryCleaningOrLaundry | EmergencyService | EmploymentAgency | EntertainmentBusiness | FinancialService | FoodEstablishment | GovernmentOffice | HealthAndBeautyBusiness | HomeAndConstructionBusiness | InternetCafe | LegalService | Library | LodgingBusiness | MedicalBusiness | ProfessionalService | RadioStation | RealEstateAgent | RecyclingCenter | SelfStorage | ShoppingCenter | SportsActivityLocation | Store | TelevisionStation | TouristInformationCenter | TravelAgency | string;

interface LocationFeatureSpecificationBase extends PropertyValueBase {
    /** The hours during which this service or contact is available. */
    "schema:hoursAvailable"?: SchemaValue<OpeningHoursSpecification | IdReference>;
    /** The date when the item becomes valid. */
    "schema:validFrom"?: SchemaValue<Date | DateTime>;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "schema:validThrough"?: SchemaValue<Date | DateTime>;
}
interface LocationFeatureSpecificationLeaf extends LocationFeatureSpecificationBase {
    "@type": "schema:LocationFeatureSpecification";
}
/** Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality. */
export type LocationFeatureSpecification = LocationFeatureSpecificationLeaf;

interface LocksmithLeaf extends LocalBusinessBase {
    "@type": "schema:Locksmith";
}
/** A locksmith. */
export type Locksmith = LocksmithLeaf | string;

interface LodgingBusinessBase extends LocalBusinessBase {
    /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
    "schema:amenityFeature"?: SchemaValue<LocationFeatureSpecification | IdReference>;
    /** An intended audience, i.e. a group for whom something was created. */
    "schema:audience"?: SchemaValue<Audience | IdReference>;
    /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/inLanguage inLanguage} */
    "schema:availableLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** The earliest someone may check into a lodging establishment. */
    "schema:checkinTime"?: SchemaValue<DateTime | Time>;
    /** The latest someone may check out of a lodging establishment. */
    "schema:checkoutTime"?: SchemaValue<DateTime | Time>;
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "schema:numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
    "schema:petsAllowed"?: SchemaValue<Boolean | Text>;
    /** An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars). */
    "schema:starRating"?: SchemaValue<Rating | IdReference>;
}
interface LodgingBusinessLeaf extends LodgingBusinessBase {
    "@type": "schema:LodgingBusiness";
}
/** A lodging business, such as a motel, hotel, or inn. */
export type LodgingBusiness = LodgingBusinessLeaf | BedAndBreakfast | Campground | Hostel | Hotel | Motel | Resort | string;

interface LodgingReservationBase extends ReservationBase {
    /** The earliest someone may check into a lodging establishment. */
    "schema:checkinTime"?: SchemaValue<DateTime | Time>;
    /** The latest someone may check out of a lodging establishment. */
    "schema:checkoutTime"?: SchemaValue<DateTime | Time>;
    /** A full description of the lodging unit. */
    "schema:lodgingUnitDescription"?: SchemaValue<Text>;
    /** Textual description of the unit type (including suite vs. room, size of bed, etc.). */
    "schema:lodgingUnitType"?: SchemaValue<QualitativeValue | Text | IdReference>;
    /** The number of adults staying in the unit. */
    "schema:numAdults"?: SchemaValue<Integer | QuantitativeValue | IdReference>;
    /** The number of children staying in the unit. */
    "schema:numChildren"?: SchemaValue<Integer | QuantitativeValue | IdReference>;
}
interface LodgingReservationLeaf extends LodgingReservationBase {
    "@type": "schema:LodgingReservation";
}
/**
 * A reservation for lodging at a hotel, motel, inn, etc.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export type LodgingReservation = LodgingReservationLeaf;

interface LoseActionBase extends ActionBase {
    /** A sub property of participant. The winner of the action. */
    "schema:winner"?: SchemaValue<Person | IdReference>;
}
interface LoseActionLeaf extends LoseActionBase {
    "@type": "schema:LoseAction";
}
/** The act of being defeated in a competitive activity. */
export type LoseAction = LoseActionLeaf;

interface LymphaticVesselBase extends AnatomicalStructureBase {
    /** The vasculature the lymphatic structure originates, or afferents, from. */
    "schema:originatesFrom"?: SchemaValue<Vessel | IdReference>;
    /** The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ. */
    "schema:regionDrained"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | IdReference>;
}
interface LymphaticVesselLeaf extends LymphaticVesselBase {
    "@type": "schema:LymphaticVessel";
}
/** A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart. */
export type LymphaticVessel = LymphaticVesselLeaf;

interface ManuscriptLeaf extends CreativeWorkBase {
    "@type": "schema:Manuscript";
}
/** A book, document, or piece of music written by hand rather than typed or printed. */
export type Manuscript = ManuscriptLeaf;

interface MapBase extends CreativeWorkBase {
    /** Indicates the kind of Map, from the MapCategoryType Enumeration. */
    "schema:mapType"?: SchemaValue<MapCategoryType | IdReference>;
}
interface MapLeaf extends MapBase {
    "@type": "schema:Map";
}
/** A map. */
export type Map = MapLeaf;

interface MapCategoryTypeLeaf extends EnumerationBase {
    "@type": "schema:MapCategoryType";
}
/** An enumeration of several kinds of Map. */
export type MapCategoryType = "https://schema.org/ParkingMap" | "schema:ParkingMap" | "https://schema.org/SeatingMap" | "schema:SeatingMap" | "https://schema.org/TransitMap" | "schema:TransitMap" | "https://schema.org/VenueMap" | "schema:VenueMap" | MapCategoryTypeLeaf;

interface MarryActionLeaf extends ActionBase {
    "@type": "schema:MarryAction";
}
/** The act of marrying a person. */
export type MarryAction = MarryActionLeaf;

interface MassLeaf extends ThingBase {
    "@type": "schema:Mass";
}
/** Properties that take Mass as values are of the form '<Number> <Mass unit of measure>'. E.g., '7 kg'. */
export type Mass = MassLeaf | string;

interface MathematicalEntityLeaf extends ThingBase {
    "@type": "coremo:MathematicalEntity";
}
/** A mathematical entity. */
export type MathematicalEntity = MathematicalEntityLeaf | AppliedMathematicalEntity | ChangeMathematicalEntity | FoundationsMathematicalEntity | SpaceMathematicalEntity | StructureMathematicalEntity;

interface MathematicalExpressionLeaf extends ThingBase {
    "@type": "coremo:MathematicalExpression";
}
/** A mathematical expression */
export type MathematicalExpression = MathematicalExpressionLeaf;

interface MathematicalFormulaLeaf extends ThingBase {
    "@type": "coremo:MathematicalFormula";
}
/** A mathematical formula */
export type MathematicalFormula = MathematicalFormulaLeaf;

interface MathematicalFunctionLeaf extends ThingBase {
    "@type": "coremo:MathematicalFunction";
}
/** A mathematical function */
export type MathematicalFunction = MathematicalFunctionLeaf;

interface MathematicalModelAreaLeaf extends ThingBase {
    "@type": "coremo:MathematicalModelArea";
}
/** A mathematical model area. */
export type MathematicalModelArea = MathematicalModelAreaLeaf | AppliedMathematicalModelArea | ChangeMathematicalModelArea | FoundationsMathematicalModelArea | SpaceMathematicalModelArea | StructureMathematicalModelArea;

interface MathematicalObjectLeaf extends ThingBase {
    "@type": "coremo:MathematicalObject";
}
/** A mathematical object */
export type MathematicalObject = MathematicalObjectLeaf | MathematicalFunction | MathematicalProof | MathematicalRelation | MathematicalStructure | MathematicalTheorem | MathematicalTheory;

interface MathematicalOperationLeaf extends ThingBase {
    "@type": "coremo:MathematicalOperation";
}
/** A mathematical operation */
export type MathematicalOperation = MathematicalOperationLeaf;

interface MathematicalProofLeaf extends ThingBase {
    "@type": "coremo:MathematicalProof";
}
/** A mathematical proof */
export type MathematicalProof = MathematicalProofLeaf;

interface MathematicalPropertyLeaf extends ThingBase {
    "@type": "coremo:MathematicalProperty";
}
/** A mathematical property */
export type MathematicalProperty = MathematicalPropertyLeaf;

interface MathematicalRelationLeaf extends ThingBase {
    "@type": "coremo:MathematicalRelation";
}
/** A mathematical relation */
export type MathematicalRelation = MathematicalRelationLeaf;

interface MathematicalSequenceBase extends ThingBase {
    /** A mathematical element within an assortment of such elements. */
    "coremo:hasMathematicalElement"?: SchemaValue<MathematicalObject | IdReference>;
}
interface MathematicalSequenceLeaf extends MathematicalSequenceBase {
    "@type": "coremo:MathematicalSequence";
}
/** A mathematical sequence */
export type MathematicalSequence = MathematicalSequenceLeaf;

interface MathematicalSetBase extends ThingBase {
    /** A mathematical element within an assortment of such elements. */
    "coremo:hasMathematicalElement"?: SchemaValue<MathematicalObject | IdReference>;
}
interface MathematicalSetLeaf extends MathematicalSetBase {
    "@type": "coremo:MathematicalSet";
}
/** A mathematical set */
export type MathematicalSet = MathematicalSetLeaf;

interface MathematicalStructureLeaf extends ThingBase {
    "@type": "coremo:MathematicalStructure";
}
/** A mathematical structure */
export type MathematicalStructure = MathematicalStructureLeaf | MathematicalSequence | MathematicalSet;

interface MathematicalTheoremLeaf extends ThingBase {
    "@type": "coremo:MathematicalTheorem";
}
/** A mathematical theorem */
export type MathematicalTheorem = MathematicalTheoremLeaf;

interface MathematicalTheoryLeaf extends ThingBase {
    "@type": "coremo:MathematicalTheory";
}
/** A mathematical theory */
export type MathematicalTheory = MathematicalTheoryLeaf;

interface MathematicalVariableLeaf extends ThingBase {
    "@type": "coremo:MathematicalVariable";
}
/** A mathematical variable */
export type MathematicalVariable = MathematicalVariableLeaf;

interface MathSolverBase extends CreativeWorkBase {
    /** A mathematical expression (e.g. 'x^2-3x=0') that may be solved for a specific variable, simplified, or transformed. This can take many formats, e.g. LaTeX, Ascii-Math, or math as you would write with a keyboard. */
    "schema:mathExpression"?: SchemaValue<SolveMathAction | Text | IdReference>;
}
interface MathSolverLeaf extends MathSolverBase {
    "@type": "schema:MathSolver";
}
/** A math solver which is capable of solving a subset of mathematical problems. */
export type MathSolver = MathSolverLeaf;

interface MaximumDoseScheduleLeaf extends DoseScheduleBase {
    "@type": "schema:MaximumDoseSchedule";
}
/** The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity. */
export type MaximumDoseSchedule = MaximumDoseScheduleLeaf;

interface MeasurementTypeEnumerationLeaf extends EnumerationBase {
    "@type": "schema:MeasurementTypeEnumeration";
}
/** Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles. */
export type MeasurementTypeEnumeration = MeasurementTypeEnumerationLeaf | BodyMeasurementTypeEnumeration | WearableMeasurementTypeEnumeration;

interface MediaGalleryLeaf extends WebPageBase {
    "@type": "schema:MediaGallery";
}
/** Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia. */
export type MediaGallery = MediaGalleryLeaf | ImageGallery | VideoGallery;

interface MediaManipulationRatingEnumerationLeaf extends EnumerationBase {
    "@type": "schema:MediaManipulationRatingEnumeration";
}
/** Codes for use with the {@link https://schema.org/mediaAuthenticityCategory mediaAuthenticityCategory} property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same {@link https://schema.org/MediaReview MediaReview}. Note that the application of these codes is with regard to a piece of media shared or published in a particular context. */
export type MediaManipulationRatingEnumeration = "https://schema.org/DecontextualizedContent" | "schema:DecontextualizedContent" | "https://schema.org/EditedOrCroppedContent" | "schema:EditedOrCroppedContent" | "https://schema.org/OriginalMediaContent" | "schema:OriginalMediaContent" | "https://schema.org/SatireOrParodyContent" | "schema:SatireOrParodyContent" | "https://schema.org/StagedContent" | "schema:StagedContent" | "https://schema.org/TransformedContent" | "schema:TransformedContent" | MediaManipulationRatingEnumerationLeaf;

interface MediaObjectBase extends CreativeWorkBase {
    /** A NewsArticle associated with the Media Object. */
    "schema:associatedArticle"?: SchemaValue<NewsArticle | IdReference>;
    /** The bitrate of the media object. */
    "schema:bitrate"?: SchemaValue<Text>;
    /** File size in (mega/kilo) bytes. */
    "schema:contentSize"?: SchemaValue<Text>;
    /** Actual bytes of the media object, for example the image file or video file. */
    "schema:contentUrl"?: SchemaValue<URL | IdReference>;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** A URL pointing to a player for a specific video. In general, this is the information in the `src` element of an `embed` tag and should not be the same as the content of the `loc` tag. */
    "schema:embedUrl"?: SchemaValue<URL | IdReference>;
    /** The CreativeWork encoded by this media object. */
    "schema:encodesCreativeWork"?: SchemaValue<CreativeWork | IdReference>;
    /**
     * Media type typically expressed using a MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site} and {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types MDN reference}) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).
     *
     * In cases where a {@link https://schema.org/CreativeWork CreativeWork} has several media type representations, {@link https://schema.org/encoding encoding} can be used to indicate each {@link https://schema.org/MediaObject MediaObject} alongside particular {@link https://schema.org/encodingFormat encodingFormat} information.
     *
     * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
     */
    "schema:encodingFormat"?: SchemaValue<Text | URL | IdReference>;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:endTime"?: SchemaValue<DateTime | Time>;
    /** The height of the item. */
    "schema:height"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "schema:ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
    /** Used to indicate a specific claim contained, implied, translated or refined from the content of a {@link https://schema.org/MediaObject MediaObject} or other {@link https://schema.org/CreativeWork CreativeWork}. The interpreting party can be indicated using {@link https://schema.org/claimInterpreter claimInterpreter}. */
    "schema:interpretedAsClaim"?: SchemaValue<Claim | IdReference>;
    /** Player type required—for example, Flash or Silverlight. */
    "schema:playerType"?: SchemaValue<Text>;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "schema:productionCompany"?: SchemaValue<Organization | IdReference>;
    /** The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in {@link http://en.wikipedia.org/wiki/ISO_3166 ISO 3166 format}. */
    "schema:regionsAllowed"?: SchemaValue<Place | IdReference>;
    /** Indicates if use of the media require a subscription (either paid or free). Allowed values are `true` or `false` (note that an earlier version had 'yes', 'no'). */
    "schema:requiresSubscription"?: SchemaValue<Boolean | MediaSubscription | IdReference>;
    /** The {@link https://en.wikipedia.org/wiki/SHA-2 SHA-2} SHA256 hash of the content of the item. For example, a zero-length input has value 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' */
    "schema:sha256"?: SchemaValue<Text>;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:startTime"?: SchemaValue<DateTime | Time>;
    /** Date when this media object was uploaded to this site. */
    "schema:uploadDate"?: SchemaValue<Date>;
    /** The width of the item. */
    "schema:width"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
}
interface MediaObjectLeaf extends MediaObjectBase {
    "@type": "schema:MediaObject";
}
/** A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's). */
export type MediaObject = MediaObjectLeaf | _3DModel | AudioObject | DataDownload | ImageObject | LegislationObject | MusicVideoObject | VideoObject;

interface MediaReviewBase extends ReviewBase {
    /** Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared). */
    "schema:mediaAuthenticityCategory"?: SchemaValue<MediaManipulationRatingEnumeration | IdReference>;
    /** Describes, in a {@link https://schema.org/MediaReview MediaReview} when dealing with {@link https://schema.org/DecontextualizedContent DecontextualizedContent}, background information that can contribute to better interpretation of the {@link https://schema.org/MediaObject MediaObject}. */
    "schema:originalMediaContextDescription"?: SchemaValue<Text>;
    /** Link to the page containing an original version of the content, or directly to an online copy of the original {@link https://schema.org/MediaObject MediaObject} content, e.g. video file. */
    "schema:originalMediaLink"?: SchemaValue<MediaObject | URL | WebPage | IdReference>;
}
interface MediaReviewLeaf extends MediaReviewBase {
    "@type": "schema:MediaReview";
}
/** A {@link https://schema.org/MediaReview MediaReview} is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation. For more general reviews of media in the broader sense, use {@link https://schema.org/UserReview UserReview}, {@link https://schema.org/CriticReview CriticReview} or other {@link https://schema.org/Review Review} types. This definition is a work in progress. While the {@link https://schema.org/MediaManipulationRatingEnumeration MediaManipulationRatingEnumeration} list reflects significant community review amongst fact-checkers and others working to combat misinformation, the specific structures for representing media objects, their versions and publication context, is still evolving. Similarly, best practices for the relationship between {@link https://schema.org/MediaReview MediaReview} and {@link https://schema.org/ClaimReview ClaimReview} markup has not yet been finalized. */
export type MediaReview = MediaReviewLeaf;

interface MediaReviewItemBase extends CreativeWorkBase {
    /** In the context of a {@link https://schema.org/MediaReview MediaReview}, indicates specific media item(s) that are grouped using a {@link https://schema.org/MediaReviewItem MediaReviewItem}. */
    "schema:mediaItemAppearance"?: SchemaValue<MediaObject | IdReference>;
}
interface MediaReviewItemLeaf extends MediaReviewItemBase {
    "@type": "schema:MediaReviewItem";
}
/** Represents an item or group of closely related items treated as a unit for the sake of evaluation in a {@link https://schema.org/MediaReview MediaReview}. Authorship etc. apply to the items rather than to the curation/grouping or reviewing party. */
export type MediaReviewItem = MediaReviewItemLeaf;

interface MediaSubscriptionBase extends ThingBase {
    /** The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media. */
    "schema:authenticator"?: SchemaValue<Organization | IdReference>;
    /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
    "schema:expectsAcceptanceOf"?: SchemaValue<Offer | IdReference>;
}
interface MediaSubscriptionLeaf extends MediaSubscriptionBase {
    "@type": "schema:MediaSubscription";
}
/** A subscription which allows a user to access media including audio, video, books, etc. */
export type MediaSubscription = MediaSubscriptionLeaf;

interface MedicalAudienceBase extends AudienceBase, PeopleAudienceBase {
}
interface MedicalAudienceLeaf extends MedicalAudienceBase {
    "@type": "schema:MedicalAudience";
}
/** Target audiences for medical web pages. */
export type MedicalAudience = MedicalAudienceLeaf | Patient;

interface MedicalAudienceTypeLeaf extends EnumerationBase {
    "@type": "schema:MedicalAudienceType";
}
/** Target audiences types for medical web pages. Enumerated type. */
export type MedicalAudienceType = "https://schema.org/Clinician" | "schema:Clinician" | "https://schema.org/MedicalResearcher" | "schema:MedicalResearcher" | MedicalAudienceTypeLeaf;

interface MedicalBusinessLeaf extends LocalBusinessBase {
    "@type": "schema:MedicalBusiness";
}
/** A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include differents business run by health professionals. */
export type MedicalBusiness = MedicalBusinessLeaf | Dentist | MedicalClinic | Optician | Pharmacy | Physician | string;

interface MedicalCauseBase extends MedicalEntityBase {
    /** The condition, complication, symptom, sign, etc. caused. */
    "schema:causeOf"?: SchemaValue<MedicalEntity | IdReference>;
}
interface MedicalCauseLeaf extends MedicalCauseBase {
    "@type": "schema:MedicalCause";
}
/** The causative agent(s) that are responsible for the pathophysiologic process that eventually results in a medical condition, symptom or sign. In this schema, unless otherwise specified this is meant to be the proximate cause of the medical condition, symptom or sign. The proximate cause is defined as the causative agent that most directly results in the medical condition, symptom or sign. For example, the HIV virus could be considered a cause of AIDS. Or in a diagnostic context, if a patient fell and sustained a hip fracture and two days later sustained a pulmonary embolism which eventuated in a cardiac arrest, the cause of the cardiac arrest (the proximate cause) would be the pulmonary embolism and not the fall. Medical causes can include cardiovascular, chemical, dermatologic, endocrine, environmental, gastroenterologic, genetic, hematologic, gynecologic, iatrogenic, infectious, musculoskeletal, neurologic, nutritional, obstetric, oncologic, otolaryngologic, pharmacologic, psychiatric, pulmonary, renal, rheumatologic, toxic, traumatic, or urologic causes; medical conditions can be causes as well. */
export type MedicalCause = MedicalCauseLeaf;

interface MedicalClinicBase extends MedicalOrganizationBase, LocalBusinessBase {
    /** A medical service available from this provider. */
    "schema:availableService"?: SchemaValue<MedicalProcedure | MedicalTest | MedicalTherapy | IdReference>;
    /** A medical specialty of the provider. */
    "schema:medicalSpecialty"?: SchemaValue<MedicalSpecialty | IdReference>;
}
interface MedicalClinicLeaf extends MedicalClinicBase {
    "@type": "schema:MedicalClinic";
}
/** A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well. */
export type MedicalClinic = MedicalClinicLeaf | CovidTestingFacility | string;

interface MedicalCodeBase extends CategoryCodeBase, MedicalEntityBase {
    /** A short textual code that uniquely identifies the value. */
    "schema:codeValue"?: SchemaValue<Text>;
    /** The coding system, e.g. 'ICD-10'. */
    "schema:codingSystem"?: SchemaValue<Text>;
}
interface MedicalCodeLeaf extends MedicalCodeBase {
    "@type": "schema:MedicalCode";
}
/** A code for a medical entity. */
export type MedicalCode = MedicalCodeLeaf;

interface MedicalConditionBase extends MedicalEntityBase {
    /** The anatomy of the underlying organ system or structures associated with this entity. */
    "schema:associatedAnatomy"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | SuperficialAnatomy | IdReference>;
    /** One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient. */
    "schema:differentialDiagnosis"?: SchemaValue<DDxElement | IdReference>;
    /** Specifying a drug or medicine used in a medication procedure. */
    "schema:drug"?: SchemaValue<Drug | IdReference>;
    /** The characteristics of associated patients, such as age, gender, race etc. */
    "schema:epidemiology"?: SchemaValue<Text>;
    /** The likely outcome in either the short term or long term of the medical condition. */
    "schema:expectedPrognosis"?: SchemaValue<Text>;
    /** The expected progression of the condition if it is not treated and allowed to progress naturally. */
    "schema:naturalProgression"?: SchemaValue<Text>;
    /** Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition. */
    "schema:pathophysiology"?: SchemaValue<Text>;
    /** A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc. */
    "schema:possibleComplication"?: SchemaValue<Text>;
    /** A possible treatment to address this condition, sign or symptom. */
    "schema:possibleTreatment"?: SchemaValue<MedicalTherapy | IdReference>;
    /** A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination. */
    "schema:primaryPrevention"?: SchemaValue<MedicalTherapy | IdReference>;
    /** A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age, coexisting condition. */
    "schema:riskFactor"?: SchemaValue<MedicalRiskFactor | IdReference>;
    /** A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition. */
    "schema:secondaryPrevention"?: SchemaValue<MedicalTherapy | IdReference>;
    /** A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition. */
    "schema:signOrSymptom"?: SchemaValue<MedicalSignOrSymptom | IdReference>;
    /** The stage of the condition, if applicable. */
    "schema:stage"?: SchemaValue<MedicalConditionStage | IdReference>;
    /** The status of the study (enumerated). */
    "schema:status"?: SchemaValue<EventStatusType | MedicalStudyStatus | Text | IdReference>;
    /** A medical test typically performed given this condition. */
    "schema:typicalTest"?: SchemaValue<MedicalTest | IdReference>;
}
interface MedicalConditionLeaf extends MedicalConditionBase {
    "@type": "schema:MedicalCondition";
}
/** Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc. */
export type MedicalCondition = MedicalConditionLeaf | InfectiousDisease | MedicalSignOrSymptom;

interface MedicalConditionStageBase extends MedicalEntityBase {
    /** The stage represented as a number, e.g. 3. */
    "schema:stageAsNumber"?: SchemaValue<Number>;
    /** The substage, e.g. 'a' for Stage IIIa. */
    "schema:subStageSuffix"?: SchemaValue<Text>;
}
interface MedicalConditionStageLeaf extends MedicalConditionStageBase {
    "@type": "schema:MedicalConditionStage";
}
/** A stage of a medical condition, such as 'Stage IIIa'. */
export type MedicalConditionStage = MedicalConditionStageLeaf;

interface MedicalContraindicationLeaf extends MedicalEntityBase {
    "@type": "schema:MedicalContraindication";
}
/** A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute (there are no reasonable circumstances for undertaking a course of action) or relative (the patient is at higher risk of complications, but that these risks may be outweighed by other considerations or mitigated by other measures). */
export type MedicalContraindication = MedicalContraindicationLeaf;

interface MedicalDeviceBase extends MedicalEntityBase {
    /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead. */
    "schema:adverseOutcome"?: SchemaValue<MedicalEntity | IdReference>;
    /** A contraindication for this therapy. */
    "schema:contraindication"?: SchemaValue<MedicalContraindication | Text | IdReference>;
    /** A description of the postoperative procedures, care, and/or followups for this device. */
    "schema:postOp"?: SchemaValue<Text>;
    /** A description of the workup, testing, and other preparations required before implanting this device. */
    "schema:preOp"?: SchemaValue<Text>;
    /** A description of the procedure involved in setting up, using, and/or installing the device. */
    "schema:procedure"?: SchemaValue<Text>;
    /** A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition. */
    "schema:seriousAdverseOutcome"?: SchemaValue<MedicalEntity | IdReference>;
}
interface MedicalDeviceLeaf extends MedicalDeviceBase {
    "@type": "schema:MedicalDevice";
}
/** Any object used in a medical capacity, such as to diagnose or treat a patient. */
export type MedicalDevice = MedicalDeviceLeaf;

interface MedicalDevicePurposeLeaf extends EnumerationBase {
    "@type": "schema:MedicalDevicePurpose";
}
/** Categories of medical devices, organized by the purpose or intended use of the device. */
export type MedicalDevicePurpose = "https://schema.org/Diagnostic" | "schema:Diagnostic" | "https://schema.org/Therapeutic" | "schema:Therapeutic" | MedicalDevicePurposeLeaf;

interface MedicalEntityBase extends ThingBase {
    /** A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc. */
    "schema:code"?: SchemaValue<MedicalCode | IdReference>;
    /** A medical guideline related to this entity. */
    "schema:guideline"?: SchemaValue<MedicalGuideline | IdReference>;
    /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
    "schema:legalStatus"?: SchemaValue<DrugLegalStatus | MedicalEnumeration | Text | IdReference>;
    /** The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc. */
    "schema:medicineSystem"?: SchemaValue<MedicineSystem | IdReference>;
    /** If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine. */
    "schema:recognizingAuthority"?: SchemaValue<Organization | IdReference>;
    /** If applicable, a medical specialty in which this entity is relevant. */
    "schema:relevantSpecialty"?: SchemaValue<MedicalSpecialty | IdReference>;
    /** A medical study or trial related to this entity. */
    "schema:study"?: SchemaValue<MedicalStudy | IdReference>;
}
interface MedicalEntityLeaf extends MedicalEntityBase {
    "@type": "schema:MedicalEntity";
}
/** The most generic type of entity related to health and the practice of medicine. */
export type MedicalEntity = MedicalEntityLeaf | AnatomicalStructure | AnatomicalSystem | DrugClass | DrugCost | LifestyleModification | MedicalCause | MedicalCondition | MedicalContraindication | MedicalDevice | MedicalGuideline | MedicalIndication | MedicalIntangible | MedicalProcedure | MedicalRiskEstimator | MedicalRiskFactor | MedicalStudy | MedicalTest | Substance | SuperficialAnatomy;

interface MedicalEnumerationLeaf extends EnumerationBase {
    "@type": "schema:MedicalEnumeration";
}
/** Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice. */
export type MedicalEnumeration = MedicalEnumerationLeaf | DrugCostCategory | DrugPregnancyCategory | DrugPrescriptionStatus | InfectiousAgentClass | MedicalAudienceType | MedicalDevicePurpose | MedicalEvidenceLevel | MedicalImagingTechnique | MedicalObservationalStudyDesign | MedicalProcedureType | MedicalSpecialty | MedicalStudyStatus | MedicalTrialDesign | MedicineSystem | PhysicalExam;

interface MedicalEvidenceLevelLeaf extends EnumerationBase {
    "@type": "schema:MedicalEvidenceLevel";
}
/** Level of evidence for a medical guideline. Enumerated type. */
export type MedicalEvidenceLevel = "https://schema.org/EvidenceLevelA" | "schema:EvidenceLevelA" | "https://schema.org/EvidenceLevelB" | "schema:EvidenceLevelB" | "https://schema.org/EvidenceLevelC" | "schema:EvidenceLevelC" | MedicalEvidenceLevelLeaf;

interface MedicalGuidelineBase extends MedicalEntityBase {
    /** Strength of evidence of the data used to formulate the guideline (enumerated). */
    "schema:evidenceLevel"?: SchemaValue<MedicalEvidenceLevel | IdReference>;
    /** Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc. */
    "schema:evidenceOrigin"?: SchemaValue<Text>;
    /** Date on which this guideline's recommendation was made. */
    "schema:guidelineDate"?: SchemaValue<Date>;
    /** The medical conditions, treatments, etc. that are the subject of the guideline. */
    "schema:guidelineSubject"?: SchemaValue<MedicalEntity | IdReference>;
}
interface MedicalGuidelineLeaf extends MedicalGuidelineBase {
    "@type": "schema:MedicalGuideline";
}
/** Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity. */
export type MedicalGuideline = MedicalGuidelineLeaf | MedicalGuidelineContraindication | MedicalGuidelineRecommendation;

interface MedicalGuidelineContraindicationLeaf extends MedicalGuidelineBase {
    "@type": "schema:MedicalGuidelineContraindication";
}
/** A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound. */
export type MedicalGuidelineContraindication = MedicalGuidelineContraindicationLeaf;

interface MedicalGuidelineRecommendationBase extends MedicalGuidelineBase {
    /** Strength of the guideline's recommendation (e.g. 'class I'). */
    "schema:recommendationStrength"?: SchemaValue<Text>;
}
interface MedicalGuidelineRecommendationLeaf extends MedicalGuidelineRecommendationBase {
    "@type": "schema:MedicalGuidelineRecommendation";
}
/** A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound. */
export type MedicalGuidelineRecommendation = MedicalGuidelineRecommendationLeaf;

interface MedicalImagingTechniqueLeaf extends EnumerationBase {
    "@type": "schema:MedicalImagingTechnique";
}
/** Any medical imaging modality typically used for diagnostic purposes. Enumerated type. */
export type MedicalImagingTechnique = "https://schema.org/CT" | "schema:CT" | "https://schema.org/MRI" | "schema:MRI" | "https://schema.org/PET" | "schema:PET" | "https://schema.org/Radiography" | "schema:Radiography" | "https://schema.org/Ultrasound" | "schema:Ultrasound" | "https://schema.org/XRay" | "schema:XRay" | MedicalImagingTechniqueLeaf;

interface MedicalIndicationLeaf extends MedicalEntityBase {
    "@type": "schema:MedicalIndication";
}
/** A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical states, etc. */
export type MedicalIndication = MedicalIndicationLeaf | ApprovedIndication | PreventionIndication | TreatmentIndication;

interface MedicalIntangibleLeaf extends MedicalEntityBase {
    "@type": "schema:MedicalIntangible";
}
/** A utility class that serves as the umbrella for a number of 'intangible' things in the medical space. */
export type MedicalIntangible = MedicalIntangibleLeaf | DDxElement | DoseSchedule | DrugLegalStatus | DrugStrength | MedicalCode | MedicalConditionStage;

interface MedicalObservationalStudyBase extends MedicalStudyBase {
    /** Specifics about the observational study design (enumerated). */
    "schema:studyDesign"?: SchemaValue<MedicalObservationalStudyDesign | IdReference>;
}
interface MedicalObservationalStudyLeaf extends MedicalObservationalStudyBase {
    "@type": "schema:MedicalObservationalStudy";
}
/** An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment. */
export type MedicalObservationalStudy = MedicalObservationalStudyLeaf;

interface MedicalObservationalStudyDesignLeaf extends EnumerationBase {
    "@type": "schema:MedicalObservationalStudyDesign";
}
/** Design models for observational medical studies. Enumerated type. */
export type MedicalObservationalStudyDesign = "https://schema.org/CaseSeries" | "schema:CaseSeries" | "https://schema.org/CohortStudy" | "schema:CohortStudy" | "https://schema.org/CrossSectional" | "schema:CrossSectional" | "https://schema.org/Longitudinal" | "schema:Longitudinal" | "https://schema.org/Observational" | "schema:Observational" | "https://schema.org/Registry" | "schema:Registry" | MedicalObservationalStudyDesignLeaf;

interface MedicalOrganizationBase extends OrganizationBase {
    /** Name or unique ID of network. (Networks are often reused across different insurance plans). */
    "schema:healthPlanNetworkId"?: SchemaValue<Text>;
    /** Whether the provider is accepting new patients. */
    "schema:isAcceptingNewPatients"?: SchemaValue<Boolean>;
    /** A medical specialty of the provider. */
    "schema:medicalSpecialty"?: SchemaValue<MedicalSpecialty | IdReference>;
}
interface MedicalOrganizationLeaf extends MedicalOrganizationBase {
    "@type": "schema:MedicalOrganization";
}
/** A medical organization (physical or not), such as hospital, institution or clinic. */
export type MedicalOrganization = MedicalOrganizationLeaf | Dentist | DiagnosticLab | Hospital | MedicalClinic | Pharmacy | Physician | VeterinaryCare | string;

interface MedicalProcedureBase extends MedicalEntityBase {
    /** Location in the body of the anatomical structure. */
    "schema:bodyLocation"?: SchemaValue<Text>;
    /** Typical or recommended followup care after the procedure is performed. */
    "schema:followup"?: SchemaValue<Text>;
    /** How the procedure is performed. */
    "schema:howPerformed"?: SchemaValue<Text>;
    /** Typical preparation that a patient must undergo before having the procedure performed. */
    "schema:preparation"?: SchemaValue<MedicalEntity | Text | IdReference>;
    /** The type of procedure, for example Surgical, Noninvasive, or Percutaneous. */
    "schema:procedureType"?: SchemaValue<MedicalProcedureType | IdReference>;
    /** The status of the study (enumerated). */
    "schema:status"?: SchemaValue<EventStatusType | MedicalStudyStatus | Text | IdReference>;
}
interface MedicalProcedureLeaf extends MedicalProcedureBase {
    "@type": "schema:MedicalProcedure";
}
/** A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques. */
export type MedicalProcedure = MedicalProcedureLeaf | DiagnosticProcedure | PalliativeProcedure | PhysicalExam | SurgicalProcedure | TherapeuticProcedure;

interface MedicalProcedureTypeLeaf extends EnumerationBase {
    "@type": "schema:MedicalProcedureType";
}
/** An enumeration that describes different types of medical procedures. */
export type MedicalProcedureType = "https://schema.org/NoninvasiveProcedure" | "schema:NoninvasiveProcedure" | "https://schema.org/PercutaneousProcedure" | "schema:PercutaneousProcedure" | MedicalProcedureTypeLeaf;

interface MedicalRiskCalculatorLeaf extends MedicalRiskEstimatorBase {
    "@type": "schema:MedicalRiskCalculator";
}
/** A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators. */
export type MedicalRiskCalculator = MedicalRiskCalculatorLeaf;

interface MedicalRiskEstimatorBase extends MedicalEntityBase {
    /** The condition, complication, or symptom whose risk is being estimated. */
    "schema:estimatesRiskOf"?: SchemaValue<MedicalEntity | IdReference>;
    /** A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition. */
    "schema:includedRiskFactor"?: SchemaValue<MedicalRiskFactor | IdReference>;
}
interface MedicalRiskEstimatorLeaf extends MedicalRiskEstimatorBase {
    "@type": "schema:MedicalRiskEstimator";
}
/** Any rule set or interactive tool for estimating the risk of developing a complication or condition. */
export type MedicalRiskEstimator = MedicalRiskEstimatorLeaf | MedicalRiskCalculator | MedicalRiskScore;

interface MedicalRiskFactorBase extends MedicalEntityBase {
    /** The condition, complication, etc. influenced by this factor. */
    "schema:increasesRiskOf"?: SchemaValue<MedicalEntity | IdReference>;
}
interface MedicalRiskFactorLeaf extends MedicalRiskFactorBase {
    "@type": "schema:MedicalRiskFactor";
}
/** A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication. */
export type MedicalRiskFactor = MedicalRiskFactorLeaf;

interface MedicalRiskScoreBase extends MedicalRiskEstimatorBase {
    /** The algorithm or rules to follow to compute the score. */
    "schema:algorithm"?: SchemaValue<Text>;
}
interface MedicalRiskScoreLeaf extends MedicalRiskScoreBase {
    "@type": "schema:MedicalRiskScore";
}
/** A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score. */
export type MedicalRiskScore = MedicalRiskScoreLeaf;

interface MedicalScholarlyArticleBase extends ArticleBase {
    /** The type of the medical article, taken from the US NLM MeSH publication type catalog. See also {@link http://www.nlm.nih.gov/mesh/pubtypes.html MeSH documentation}. */
    "schema:publicationType"?: SchemaValue<Text>;
}
interface MedicalScholarlyArticleLeaf extends MedicalScholarlyArticleBase {
    "@type": "schema:MedicalScholarlyArticle";
}
/** A scholarly article in the medical domain. */
export type MedicalScholarlyArticle = MedicalScholarlyArticleLeaf;

interface MedicalSignBase extends MedicalSignOrSymptomBase {
    /** A physical examination that can identify this sign. */
    "schema:identifyingExam"?: SchemaValue<PhysicalExam | IdReference>;
    /** A diagnostic test that can identify this sign. */
    "schema:identifyingTest"?: SchemaValue<MedicalTest | IdReference>;
}
interface MedicalSignLeaf extends MedicalSignBase {
    "@type": "schema:MedicalSign";
}
/** Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination. */
export type MedicalSign = MedicalSignLeaf | VitalSign;

interface MedicalSignOrSymptomBase extends MedicalConditionBase {
    /** A possible treatment to address this condition, sign or symptom. */
    "schema:possibleTreatment"?: SchemaValue<MedicalTherapy | IdReference>;
}
interface MedicalSignOrSymptomLeaf extends MedicalSignOrSymptomBase {
    "@type": "schema:MedicalSignOrSymptom";
}
/** Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective. */
export type MedicalSignOrSymptom = MedicalSignOrSymptomLeaf | MedicalSign | MedicalSymptom;

interface MedicalSpecialtyBase extends EnumerationBase, EnumerationBase {
}
interface MedicalSpecialtyLeaf extends MedicalSpecialtyBase {
    "@type": "schema:MedicalSpecialty";
}
/** Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type. */
export type MedicalSpecialty = "https://schema.org/Anesthesia" | "schema:Anesthesia" | "https://schema.org/Cardiovascular" | "schema:Cardiovascular" | "https://schema.org/CommunityHealth" | "schema:CommunityHealth" | "https://schema.org/Dentistry" | "schema:Dentistry" | "https://schema.org/Dermatologic" | "schema:Dermatologic" | "https://schema.org/Dermatology" | "schema:Dermatology" | "https://schema.org/DietNutrition" | "schema:DietNutrition" | "https://schema.org/Emergency" | "schema:Emergency" | "https://schema.org/Endocrine" | "schema:Endocrine" | "https://schema.org/Gastroenterologic" | "schema:Gastroenterologic" | "https://schema.org/Genetic" | "schema:Genetic" | "https://schema.org/Geriatric" | "schema:Geriatric" | "https://schema.org/Gynecologic" | "schema:Gynecologic" | "https://schema.org/Hematologic" | "schema:Hematologic" | "https://schema.org/Infectious" | "schema:Infectious" | "https://schema.org/LaboratoryScience" | "schema:LaboratoryScience" | "https://schema.org/Midwifery" | "schema:Midwifery" | "https://schema.org/Musculoskeletal" | "schema:Musculoskeletal" | "https://schema.org/Neurologic" | "schema:Neurologic" | "https://schema.org/Nursing" | "schema:Nursing" | "https://schema.org/Obstetric" | "schema:Obstetric" | "https://schema.org/Oncologic" | "schema:Oncologic" | "https://schema.org/Optometric" | "schema:Optometric" | "https://schema.org/Otolaryngologic" | "schema:Otolaryngologic" | "https://schema.org/Pathology" | "schema:Pathology" | "https://schema.org/Pediatric" | "schema:Pediatric" | "https://schema.org/PharmacySpecialty" | "schema:PharmacySpecialty" | "https://schema.org/Physiotherapy" | "schema:Physiotherapy" | "https://schema.org/PlasticSurgery" | "schema:PlasticSurgery" | "https://schema.org/Podiatric" | "schema:Podiatric" | "https://schema.org/PrimaryCare" | "schema:PrimaryCare" | "https://schema.org/Psychiatric" | "schema:Psychiatric" | "https://schema.org/PublicHealth" | "schema:PublicHealth" | "https://schema.org/Pulmonary" | "schema:Pulmonary" | "https://schema.org/Radiography" | "schema:Radiography" | "https://schema.org/Renal" | "schema:Renal" | "https://schema.org/RespiratoryTherapy" | "schema:RespiratoryTherapy" | "https://schema.org/Rheumatologic" | "schema:Rheumatologic" | "https://schema.org/SpeechPathology" | "schema:SpeechPathology" | "https://schema.org/Surgical" | "schema:Surgical" | "https://schema.org/Toxicologic" | "schema:Toxicologic" | "https://schema.org/Urologic" | "schema:Urologic" | MedicalSpecialtyLeaf;

interface MedicalStudyBase extends MedicalEntityBase {
    /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
    "schema:healthCondition"?: SchemaValue<MedicalCondition | IdReference>;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "schema:sponsor"?: SchemaValue<Organization | Person | IdReference>;
    /** The status of the study (enumerated). */
    "schema:status"?: SchemaValue<EventStatusType | MedicalStudyStatus | Text | IdReference>;
    /** The location in which the study is taking/took place. */
    "schema:studyLocation"?: SchemaValue<AdministrativeArea | IdReference>;
    /** A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study. */
    "schema:studySubject"?: SchemaValue<MedicalEntity | IdReference>;
}
interface MedicalStudyLeaf extends MedicalStudyBase {
    "@type": "schema:MedicalStudy";
}
/** A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID. */
export type MedicalStudy = MedicalStudyLeaf | MedicalObservationalStudy | MedicalTrial;

interface MedicalStudyStatusLeaf extends EnumerationBase {
    "@type": "schema:MedicalStudyStatus";
}
/** The status of a medical study. Enumerated type. */
export type MedicalStudyStatus = "https://schema.org/ActiveNotRecruiting" | "schema:ActiveNotRecruiting" | "https://schema.org/Completed" | "schema:Completed" | "https://schema.org/EnrollingByInvitation" | "schema:EnrollingByInvitation" | "https://schema.org/NotYetRecruiting" | "schema:NotYetRecruiting" | "https://schema.org/Recruiting" | "schema:Recruiting" | "https://schema.org/ResultsAvailable" | "schema:ResultsAvailable" | "https://schema.org/ResultsNotAvailable" | "schema:ResultsNotAvailable" | "https://schema.org/Suspended" | "schema:Suspended" | "https://schema.org/Terminated" | "schema:Terminated" | "https://schema.org/Withdrawn" | "schema:Withdrawn" | MedicalStudyStatusLeaf;

interface MedicalSymptomLeaf extends MedicalSignOrSymptomBase {
    "@type": "schema:MedicalSymptom";
}
/** Any complaint sensed and expressed by the patient (therefore defined as subjective) like stomachache, lower-back pain, or fatigue. */
export type MedicalSymptom = MedicalSymptomLeaf;

interface MedicalTestBase extends MedicalEntityBase {
    /** Drugs that affect the test's results. */
    "schema:affectedBy"?: SchemaValue<Drug | IdReference>;
    /** Range of acceptable values for a typical patient, when applicable. */
    "schema:normalRange"?: SchemaValue<MedicalEnumeration | Text | IdReference>;
    /** A sign detected by the test. */
    "schema:signDetected"?: SchemaValue<MedicalSign | IdReference>;
    /** A condition the test is used to diagnose. */
    "schema:usedToDiagnose"?: SchemaValue<MedicalCondition | IdReference>;
    /** Device used to perform the test. */
    "schema:usesDevice"?: SchemaValue<MedicalDevice | IdReference>;
}
interface MedicalTestLeaf extends MedicalTestBase {
    "@type": "schema:MedicalTest";
}
/** Any medical test, typically performed for diagnostic purposes. */
export type MedicalTest = MedicalTestLeaf | BloodTest | ImagingTest | MedicalTestPanel | PathologyTest;

interface MedicalTestPanelBase extends MedicalTestBase {
    /** A component test of the panel. */
    "schema:subTest"?: SchemaValue<MedicalTest | IdReference>;
}
interface MedicalTestPanelLeaf extends MedicalTestPanelBase {
    "@type": "schema:MedicalTestPanel";
}
/** Any collection of tests commonly ordered together. */
export type MedicalTestPanel = MedicalTestPanelLeaf;

interface MedicalTherapyBase extends TherapeuticProcedureBase {
    /** A contraindication for this therapy. */
    "schema:contraindication"?: SchemaValue<MedicalContraindication | Text | IdReference>;
    /** A therapy that duplicates or overlaps this one. */
    "schema:duplicateTherapy"?: SchemaValue<MedicalTherapy | IdReference>;
    /** A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition. */
    "schema:seriousAdverseOutcome"?: SchemaValue<MedicalEntity | IdReference>;
}
interface MedicalTherapyLeaf extends MedicalTherapyBase {
    "@type": "schema:MedicalTherapy";
}
/** Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition. */
export type MedicalTherapy = MedicalTherapyLeaf | OccupationalTherapy | PalliativeProcedure | PhysicalTherapy | RadiationTherapy;

interface MedicalTrialBase extends MedicalStudyBase {
    /** Specifics about the trial design (enumerated). */
    "schema:trialDesign"?: SchemaValue<MedicalTrialDesign | IdReference>;
}
interface MedicalTrialLeaf extends MedicalTrialBase {
    "@type": "schema:MedicalTrial";
}
/** A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups. */
export type MedicalTrial = MedicalTrialLeaf;

interface MedicalTrialDesignLeaf extends EnumerationBase {
    "@type": "schema:MedicalTrialDesign";
}
/** Design models for medical trials. Enumerated type. */
export type MedicalTrialDesign = "https://schema.org/DoubleBlindedTrial" | "schema:DoubleBlindedTrial" | "https://schema.org/InternationalTrial" | "schema:InternationalTrial" | "https://schema.org/MultiCenterTrial" | "schema:MultiCenterTrial" | "https://schema.org/OpenTrial" | "schema:OpenTrial" | "https://schema.org/PlaceboControlledTrial" | "schema:PlaceboControlledTrial" | "https://schema.org/RandomizedTrial" | "schema:RandomizedTrial" | "https://schema.org/SingleBlindedTrial" | "schema:SingleBlindedTrial" | "https://schema.org/SingleCenterTrial" | "schema:SingleCenterTrial" | "https://schema.org/TripleBlindedTrial" | "schema:TripleBlindedTrial" | MedicalTrialDesignLeaf;

interface MedicalWebPageBase extends WebPageBase {
    /**
     * An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.
     *
     * @deprecated Consider using https://schema.org/mainContentOfPage instead.
     */
    "schema:aspect"?: SchemaValue<Text>;
    /** Medical audience for page. */
    "schema:medicalAudience"?: SchemaValue<MedicalAudience | MedicalAudienceType | IdReference>;
}
interface MedicalWebPageLeaf extends MedicalWebPageBase {
    "@type": "schema:MedicalWebPage";
}
/** A web page that provides medical information. */
export type MedicalWebPage = MedicalWebPageLeaf;

interface MedicineSystemLeaf extends EnumerationBase {
    "@type": "schema:MedicineSystem";
}
/** Systems of medical practice. */
export type MedicineSystem = "https://schema.org/Ayurvedic" | "schema:Ayurvedic" | "https://schema.org/Chiropractic" | "schema:Chiropractic" | "https://schema.org/Homeopathic" | "schema:Homeopathic" | "https://schema.org/Osteopathic" | "schema:Osteopathic" | "https://schema.org/TraditionalChinese" | "schema:TraditionalChinese" | "https://schema.org/WesternConventional" | "schema:WesternConventional" | MedicineSystemLeaf;

interface MeetingRoomLeaf extends AccommodationBase {
    "@type": "schema:MeetingRoom";
}
/**
 * A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Conference_hall http://en.wikipedia.org/wiki/Conference_hall}).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type MeetingRoom = MeetingRoomLeaf | string;

interface MensClothingStoreLeaf extends LocalBusinessBase {
    "@type": "schema:MensClothingStore";
}
/** A men's clothing store. */
export type MensClothingStore = MensClothingStoreLeaf | string;

interface MenuBase extends CreativeWorkBase {
    /** A food or drink item contained in a menu or menu section. */
    "schema:hasMenuItem"?: SchemaValue<MenuItem | IdReference>;
    /** A subgrouping of the menu (by dishes, course, serving time period, etc.). */
    "schema:hasMenuSection"?: SchemaValue<MenuSection | IdReference>;
}
interface MenuLeaf extends MenuBase {
    "@type": "schema:Menu";
}
/** A structured representation of food or drink items available from a FoodEstablishment. */
export type Menu = MenuLeaf;

interface MenuItemBase extends ThingBase {
    /** Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item. */
    "schema:menuAddOn"?: SchemaValue<MenuItem | MenuSection | IdReference>;
    /** Nutrition information about the recipe or menu item. */
    "schema:nutrition"?: SchemaValue<NutritionInformation | IdReference>;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:offers"?: SchemaValue<Demand | Offer | IdReference>;
    /** Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc. */
    "schema:suitableForDiet"?: SchemaValue<RestrictedDiet | IdReference>;
}
interface MenuItemLeaf extends MenuItemBase {
    "@type": "schema:MenuItem";
}
/** A food or drink item listed in a menu or menu section. */
export type MenuItem = MenuItemLeaf;

interface MenuSectionBase extends CreativeWorkBase {
    /** A food or drink item contained in a menu or menu section. */
    "schema:hasMenuItem"?: SchemaValue<MenuItem | IdReference>;
    /** A subgrouping of the menu (by dishes, course, serving time period, etc.). */
    "schema:hasMenuSection"?: SchemaValue<MenuSection | IdReference>;
}
interface MenuSectionLeaf extends MenuSectionBase {
    "@type": "schema:MenuSection";
}
/** A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider. */
export type MenuSection = MenuSectionLeaf;

interface MerchantReturnEnumerationLeaf extends EnumerationBase {
    "@type": "schema:MerchantReturnEnumeration";
}
/** Enumerates several kinds of product return policies. */
export type MerchantReturnEnumeration = "https://schema.org/MerchantReturnFiniteReturnWindow" | "schema:MerchantReturnFiniteReturnWindow" | "https://schema.org/MerchantReturnNotPermitted" | "schema:MerchantReturnNotPermitted" | "https://schema.org/MerchantReturnUnlimitedWindow" | "schema:MerchantReturnUnlimitedWindow" | "https://schema.org/MerchantReturnUnspecified" | "schema:MerchantReturnUnspecified" | MerchantReturnEnumerationLeaf;

interface MerchantReturnPolicyBase extends ThingBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "schema:additionalProperty"?: SchemaValue<PropertyValue | IdReference>;
    /** The type of return fees if the product is returned due to customer remorse. */
    "schema:customerRemorseReturnFees"?: SchemaValue<ReturnFeesEnumeration | IdReference>;
    /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse. */
    "schema:customerRemorseReturnLabelSource"?: SchemaValue<ReturnLabelSourceEnumeration | IdReference>;
    /** The amount of shipping costs if a product is returned due to customer remorse. Applicable when property {@link https://schema.org/customerRemorseReturnFees customerRemorseReturnFees} equals {@link https://schema.org/ReturnShippingFees ReturnShippingFees}. */
    "schema:customerRemorseReturnShippingFeesAmount"?: SchemaValue<MonetaryAmount | IdReference>;
    /** Are in-store returns offered? (for more advanced return methods use the {@link https://schema.org/returnMethod returnMethod} property) */
    "schema:inStoreReturnsOffered"?: SchemaValue<Boolean>;
    /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
    "schema:itemCondition"?: SchemaValue<OfferItemCondition | IdReference>;
    /** The type of return fees for returns of defect products. */
    "schema:itemDefectReturnFees"?: SchemaValue<ReturnFeesEnumeration | IdReference>;
    /** The method (from an enumeration) by which the customer obtains a return shipping label for a defect product. */
    "schema:itemDefectReturnLabelSource"?: SchemaValue<ReturnLabelSourceEnumeration | IdReference>;
    /** Amount of shipping costs for defect product returns. Applicable when property {@link https://schema.org/itemDefectReturnFees itemDefectReturnFees} equals {@link https://schema.org/ReturnShippingFees ReturnShippingFees}. */
    "schema:itemDefectReturnShippingFeesAmount"?: SchemaValue<MonetaryAmount | IdReference>;
    /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the {@link https://schema.org/returnPolicyCategory returnPolicyCategory} property is specified as {@link https://schema.org/MerchantReturnFiniteReturnWindow MerchantReturnFiniteReturnWindow}. */
    "schema:merchantReturnDays"?: SchemaValue<Date | DateTime | Integer>;
    /** Specifies a Web page or service by URL, for product returns. */
    "schema:merchantReturnLink"?: SchemaValue<URL | IdReference>;
    /** A refund type, from an enumerated list. */
    "schema:refundType"?: SchemaValue<RefundTypeEnumeration | IdReference>;
    /** Use {@link https://schema.org/MonetaryAmount MonetaryAmount} to specify a fixed restocking fee for product returns, or use {@link https://schema.org/Number Number} to specify a percentage of the product price paid by the customer. */
    "schema:restockingFee"?: SchemaValue<MonetaryAmount | Number | IdReference>;
    /** The type of return fees for purchased products (for any return reason) */
    "schema:returnFees"?: SchemaValue<ReturnFeesEnumeration | IdReference>;
    /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason. */
    "schema:returnLabelSource"?: SchemaValue<ReturnLabelSourceEnumeration | IdReference>;
    /** The type of return method offered, specified from an enumeration. */
    "schema:returnMethod"?: SchemaValue<ReturnMethodEnumeration | IdReference>;
    /** Specifies an applicable return policy (from an enumeration). */
    "schema:returnPolicyCategory"?: SchemaValue<MerchantReturnEnumeration | IdReference>;
    /** The country where the product has to be sent to for returns, for example "Ireland" using the {@link https://schema.org/name name} property of {@link https://schema.org/Country Country}. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. Note that this can be different from the country where the product was originally shipped from or sent too. */
    "schema:returnPolicyCountry"?: SchemaValue<Country | Text | IdReference>;
    /** Seasonal override of a return policy. */
    "schema:returnPolicySeasonalOverride"?: SchemaValue<MerchantReturnPolicySeasonalOverride | IdReference>;
    /** Amount of shipping costs for product returns (for any reason). Applicable when property {@link https://schema.org/returnFees returnFees} equals {@link https://schema.org/ReturnShippingFees ReturnShippingFees}. */
    "schema:returnShippingFeesAmount"?: SchemaValue<MonetaryAmount | IdReference>;
}
interface MerchantReturnPolicyLeaf extends MerchantReturnPolicyBase {
    "@type": "schema:MerchantReturnPolicy";
}
/** A MerchantReturnPolicy provides information about product return policies associated with an {@link https://schema.org/Organization Organization}, {@link https://schema.org/Product Product}, or {@link https://schema.org/Offer Offer}. */
export type MerchantReturnPolicy = MerchantReturnPolicyLeaf;

interface MerchantReturnPolicySeasonalOverrideBase extends ThingBase {
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:endDate"?: SchemaValue<Date | DateTime>;
    /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the {@link https://schema.org/returnPolicyCategory returnPolicyCategory} property is specified as {@link https://schema.org/MerchantReturnFiniteReturnWindow MerchantReturnFiniteReturnWindow}. */
    "schema:merchantReturnDays"?: SchemaValue<Date | DateTime | Integer>;
    /** Specifies an applicable return policy (from an enumeration). */
    "schema:returnPolicyCategory"?: SchemaValue<MerchantReturnEnumeration | IdReference>;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:startDate"?: SchemaValue<Date | DateTime>;
}
interface MerchantReturnPolicySeasonalOverrideLeaf extends MerchantReturnPolicySeasonalOverrideBase {
    "@type": "schema:MerchantReturnPolicySeasonalOverride";
}
/** A seasonal override of a return policy, for example used for holidays. */
export type MerchantReturnPolicySeasonalOverride = MerchantReturnPolicySeasonalOverrideLeaf;

interface MessageBase extends CreativeWorkBase {
    /** A sub property of recipient. The recipient blind copied on a message. */
    "schema:bccRecipient"?: SchemaValue<ContactPoint | Organization | Person | IdReference>;
    /** A sub property of recipient. The recipient copied on a message. */
    "schema:ccRecipient"?: SchemaValue<ContactPoint | Organization | Person | IdReference>;
    /** The date/time at which the message has been read by the recipient if a single recipient exists. */
    "schema:dateRead"?: SchemaValue<Date | DateTime>;
    /** The date/time the message was received if a single recipient exists. */
    "schema:dateReceived"?: SchemaValue<DateTime>;
    /** The date/time at which the message was sent. */
    "schema:dateSent"?: SchemaValue<DateTime>;
    /** A CreativeWork attached to the message. */
    "schema:messageAttachment"?: SchemaValue<CreativeWork | IdReference>;
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
    /** A sub property of participant. The participant who is at the sending end of the action. */
    "schema:sender"?: SchemaValue<Audience | Organization | Person | IdReference>;
    /** A sub property of recipient. The recipient who was directly sent the message. */
    "schema:toRecipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface MessageLeaf extends MessageBase {
    "@type": "schema:Message";
}
/** A single message from a sender to one or more organizations or people. */
export type Message = MessageLeaf | EmailMessage;

interface MiddleSchoolLeaf extends EducationalOrganizationBase {
    "@type": "schema:MiddleSchool";
}
/** A middle school (typically for children aged around 11-14, although this varies somewhat). */
export type MiddleSchool = MiddleSchoolLeaf | string;

interface MilestoneBase extends ThingBase {
    /** Delay damages (percentage) for this milestone . */
    "camo:hasMilestoneDelayDamages"?: SchemaValue<Number>;
    /** Time for compeltion for a milestone. */
    "camo:hasMilestoneTimeForCompletion"?: SchemaValue<Number>;
}
interface MilestoneLeaf extends MilestoneBase {
    "@type": "camo:Milestone";
}
/** A milestone. */
export type Milestone = MilestoneLeaf;

interface MilestoneCertificateLeaf extends CertificateBase {
    "@type": "camo:MilestoneCertificate";
}
/** A milestone certificate for a contract. */
export type MilestoneCertificate = MilestoneCertificateLeaf;

interface MilestoneTableBase extends RootContractDataEntityBase {
    /** The maximum delay damages (percentage of final contract price) for milestones. */
    "camo:hasMaximumDelayDamagesForMilestones"?: SchemaValue<Number>;
    /** A milestone within a MilestoneTable. */
    "camo:hasMilestone"?: SchemaValue<Milestone | IdReference>;
    /** Should time for completition and delay damages be tracked. */
    "camo:trackTimeForCompletionAndDelayDamages"?: SchemaValue<Boolean>;
}
interface MilestoneTableLeaf extends MilestoneTableBase {
    "@type": "camo:MilestoneTable";
}
/** A milestone table. */
export type MilestoneTable = MilestoneTableLeaf;

interface MobileApplicationBase extends SoftwareApplicationBase {
    /** Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network). */
    "schema:carrierRequirements"?: SchemaValue<Text>;
}
interface MobileApplicationLeaf extends MobileApplicationBase {
    "@type": "schema:MobileApplication";
}
/** A software application designed specifically to work well on a mobile device such as a telephone. */
export type MobileApplication = MobileApplicationLeaf;

interface MobilePhoneStoreLeaf extends LocalBusinessBase {
    "@type": "schema:MobilePhoneStore";
}
/** A store that sells mobile phones and related accessories. */
export type MobilePhoneStore = MobilePhoneStoreLeaf | string;

interface ModelsetModelAreaLeaf extends ThingBase {
    "@type": "coremo:ModelsetModelArea";
}
/** A modelset model area. */
export type ModelsetModelArea = ModelsetModelAreaLeaf | CodeModelsetModelArea | CommonModelsetModelArea | EngineeringModelsetModelArea;

interface MolecularEntityBase extends BioChemEntityBase {
    /** A role played by the BioChemEntity within a chemical context. */
    "schema:chemicalRole"?: SchemaValue<DefinedTerm | IdReference>;
    /** Non-proprietary identifier for molecular entity that can be used in printed and electronic data sources thus enabling easier linking of diverse data compilations. */
    "schema:inChI"?: SchemaValue<Text>;
    /** InChIKey is a hashed version of the full InChI (using the SHA-256 algorithm). */
    "schema:inChIKey"?: SchemaValue<Text>;
    /** Systematic method of naming chemical compounds as recommended by the International Union of Pure and Applied Chemistry (IUPAC). */
    "schema:iupacName"?: SchemaValue<Text>;
    /** The empirical formula is the simplest whole number ratio of all the atoms in a molecule. */
    "schema:molecularFormula"?: SchemaValue<Text>;
    /** This is the molecular weight of the entity being described, not of the parent. Units should be included in the form '<Number> <unit>', for example '12 amu' or as '<QuantitativeValue>. */
    "schema:molecularWeight"?: SchemaValue<QuantitativeValue | Text | IdReference>;
    /** The monoisotopic mass is the sum of the masses of the atoms in a molecule using the unbound, ground-state, rest mass of the principal (most abundant) isotope for each element instead of the isotopic average mass. Please include the units the form '<Number> <unit>', for example '770.230488 g/mol' or as '<QuantitativeValue>. */
    "schema:monoisotopicMolecularWeight"?: SchemaValue<QuantitativeValue | Text | IdReference>;
    /** Intended use of the BioChemEntity by humans. */
    "schema:potentialUse"?: SchemaValue<DefinedTerm | IdReference>;
    /** A specification in form of a line notation for describing the structure of chemical species using short ASCII strings. Double bond stereochemistry \ indicators may need to be escaped in the string in formats where the backslash is an escape character. */
    "schema:smiles"?: SchemaValue<Text>;
}
interface MolecularEntityLeaf extends MolecularEntityBase {
    "@type": "schema:MolecularEntity";
}
/** Any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer etc., identifiable as a separately distinguishable entity. */
export type MolecularEntity = MolecularEntityLeaf;

interface MonetaryAmountBase extends ThingBase {
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:currency"?: SchemaValue<Text>;
    /** The upper value of some characteristic or property. */
    "schema:maxValue"?: SchemaValue<Number>;
    /** The lower value of some characteristic or property. */
    "schema:minValue"?: SchemaValue<Number>;
    /** The date when the item becomes valid. */
    "schema:validFrom"?: SchemaValue<Date | DateTime>;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "schema:validThrough"?: SchemaValue<Date | DateTime>;
    /**
     * The value of the quantitative value or property value node.
     * - For {@link https://schema.org/QuantitativeValue QuantitativeValue} and {@link https://schema.org/MonetaryAmount MonetaryAmount}, the recommended type for values is 'Number'.
     * - For {@link https://schema.org/PropertyValue PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "schema:value"?: SchemaValue<Boolean | Number | StructuredValue | Text | IdReference>;
}
interface MonetaryAmountLeaf extends MonetaryAmountBase {
    "@type": "schema:MonetaryAmount";
}
/** A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use {@link https://schema.org/PriceSpecification PriceSpecification} Types to describe the price of an Offer, Invoice, etc. */
export type MonetaryAmount = MonetaryAmountLeaf;

interface MonetaryAmountDistributionBase extends QuantitativeValueDistributionBase {
    /**
     * The currency in which the monetary amount is expressed.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:currency"?: SchemaValue<Text>;
}
interface MonetaryAmountDistributionLeaf extends MonetaryAmountDistributionBase {
    "@type": "schema:MonetaryAmountDistribution";
}
/** A statistical distribution of monetary amounts. */
export type MonetaryAmountDistribution = MonetaryAmountDistributionLeaf;

interface MonetaryGrantBase extends GrantBase {
    /** The amount of money. */
    "schema:amount"?: SchemaValue<MonetaryAmount | Number | IdReference>;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "schema:funder"?: SchemaValue<Organization | Person | IdReference>;
}
interface MonetaryGrantLeaf extends MonetaryGrantBase {
    "@type": "schema:MonetaryGrant";
}
/** A monetary grant. */
export type MonetaryGrant = MonetaryGrantLeaf;

interface MoneyTransferBase extends TransferActionBase {
    /** The amount of money. */
    "schema:amount"?: SchemaValue<MonetaryAmount | Number | IdReference>;
    /** A bank or bank’s branch, financial institution or international financial institution operating the beneficiary’s bank account or releasing funds for the beneficiary. */
    "schema:beneficiaryBank"?: SchemaValue<BankOrCreditUnion | Text | IdReference>;
}
interface MoneyTransferLeaf extends MoneyTransferBase {
    "@type": "schema:MoneyTransfer";
}
/** The act of transferring money from one place to another place. This may occur electronically or physically. */
export type MoneyTransfer = MoneyTransferLeaf;

interface MortgageLoanBase extends LoanOrCreditBase {
    /** Whether borrower is a resident of the jurisdiction where the property is located. */
    "schema:domiciledMortgage"?: SchemaValue<Boolean>;
    /** Amount of mortgage mandate that can be converted into a proper mortgage at a later stage. */
    "schema:loanMortgageMandateAmount"?: SchemaValue<MonetaryAmount | IdReference>;
}
interface MortgageLoanLeaf extends MortgageLoanBase {
    "@type": "schema:MortgageLoan";
}
/** A loan in which property or real estate is used as collateral. (A loan securitized against some real estate). */
export type MortgageLoan = MortgageLoanLeaf;

interface MosqueLeaf extends CivicStructureBase {
    "@type": "schema:Mosque";
}
/** A mosque. */
export type Mosque = MosqueLeaf | string;

interface MotelLeaf extends LodgingBusinessBase {
    "@type": "schema:Motel";
}
/**
 * A motel.
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type Motel = MotelLeaf | string;

interface MotorcycleLeaf extends VehicleBase {
    "@type": "schema:Motorcycle";
}
/** A motorcycle or motorbike is a single-track, two-wheeled motor vehicle. */
export type Motorcycle = MotorcycleLeaf;

interface MotorcycleDealerLeaf extends LocalBusinessBase {
    "@type": "schema:MotorcycleDealer";
}
/** A motorcycle dealer. */
export type MotorcycleDealer = MotorcycleDealerLeaf | string;

interface MotorcycleRepairLeaf extends LocalBusinessBase {
    "@type": "schema:MotorcycleRepair";
}
/** A motorcycle repair shop. */
export type MotorcycleRepair = MotorcycleRepairLeaf | string;

interface MotorizedBicycleLeaf extends VehicleBase {
    "@type": "schema:MotorizedBicycle";
}
/** A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling. */
export type MotorizedBicycle = MotorizedBicycleLeaf;

interface MountainLeaf extends PlaceBase {
    "@type": "schema:Mountain";
}
/** A mountain, like Mount Whitney or Mount Everest. */
export type Mountain = MountainLeaf | string;

interface MoveActionBase extends ActionBase {
    /** A sub property of location. The original location of the object or the agent before the action. */
    "schema:fromLocation"?: SchemaValue<Place | IdReference>;
    /** A sub property of location. The final location of the object or the agent after the action. */
    "schema:toLocation"?: SchemaValue<Place | IdReference>;
}
interface MoveActionLeaf extends MoveActionBase {
    "@type": "schema:MoveAction";
}
/**
 * The act of an agent relocating to a place.
 *
 * Related actions:
 * - {@link https://schema.org/TransferAction TransferAction}: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 */
export type MoveAction = MoveActionLeaf | ArriveAction | DepartAction | TravelAction;

interface MovieBase extends CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "schema:countryOfOrigin"?: SchemaValue<Country | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "schema:productionCompany"?: SchemaValue<Organization | IdReference>;
    /** Languages in which subtitles/captions are available, in {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard format}. */
    "schema:subtitleLanguage"?: SchemaValue<Language | Text | IdReference>;
    /**
     * An {@link https://eidr.org/ EIDR} (Entertainment Identifier Registry) {@link https://schema.org/identifier identifier} representing at the most general/abstract level, a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" has a titleEIDR of "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See {@link https://schema.org/editEIDR editEIDR}.
     *
     * Since schema.org types like {@link https://schema.org/Movie Movie} and {@link https://schema.org/TVEpisode TVEpisode} can be used for both works and their multiple expressions, it is possible to use {@link https://schema.org/titleEIDR titleEIDR} alone (for a general description), or alongside {@link https://schema.org/editEIDR editEIDR} for a more edit-specific description.
     */
    "schema:titleEIDR"?: SchemaValue<Text | URL | IdReference>;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "schema:trailer"?: SchemaValue<VideoObject | IdReference>;
}
interface MovieLeaf extends MovieBase {
    "@type": "schema:Movie";
}
/** A movie. */
export type Movie = MovieLeaf;

interface MovieClipLeaf extends ClipBase {
    "@type": "schema:MovieClip";
}
/** A short segment/part of a movie. */
export type MovieClip = MovieClipLeaf;

interface MovieRentalStoreLeaf extends LocalBusinessBase {
    "@type": "schema:MovieRentalStore";
}
/** A movie rental store. */
export type MovieRentalStore = MovieRentalStoreLeaf | string;

interface MovieSeriesBase extends CreativeWorkSeriesBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "schema:productionCompany"?: SchemaValue<Organization | IdReference>;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "schema:trailer"?: SchemaValue<VideoObject | IdReference>;
}
interface MovieSeriesLeaf extends MovieSeriesBase {
    "@type": "schema:MovieSeries";
}
/** A series of movies. Included movies can be indicated with the hasPart property. */
export type MovieSeries = MovieSeriesLeaf;

interface MovieTheaterBase extends LocalBusinessBase, CivicStructureBase {
    /** The number of screens in the movie theater. */
    "schema:screenCount"?: SchemaValue<Number>;
}
interface MovieTheaterLeaf extends MovieTheaterBase {
    "@type": "schema:MovieTheater";
}
/** A movie theater. */
export type MovieTheater = MovieTheaterLeaf | string;

interface MovingCompanyLeaf extends LocalBusinessBase {
    "@type": "schema:MovingCompany";
}
/** A moving company. */
export type MovingCompany = MovingCompanyLeaf | string;

interface MuscleBase extends AnatomicalStructureBase {
    /** The muscle whose action counteracts the specified muscle. */
    "schema:antagonist"?: SchemaValue<Muscle | IdReference>;
    /** The blood vessel that carries blood from the heart to the muscle. */
    "schema:bloodSupply"?: SchemaValue<Vessel | IdReference>;
    /** The place of attachment of a muscle, or what the muscle moves. */
    "schema:insertion"?: SchemaValue<AnatomicalStructure | IdReference>;
    /** The movement the muscle generates. */
    "schema:muscleAction"?: SchemaValue<Text>;
    /** The underlying innervation associated with the muscle. */
    "schema:nerve"?: SchemaValue<Nerve | IdReference>;
}
interface MuscleLeaf extends MuscleBase {
    "@type": "schema:Muscle";
}
/** A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement. */
export type Muscle = MuscleLeaf;

interface MuseumLeaf extends CivicStructureBase {
    "@type": "schema:Museum";
}
/** A museum. */
export type Museum = MuseumLeaf | string;

interface MusicAlbumBase extends MusicPlaylistBase {
    /** Classification of the album by it's type of content: soundtrack, live album, studio album, etc. */
    "schema:albumProductionType"?: SchemaValue<MusicAlbumProductionType | IdReference>;
    /** A release of this album. */
    "schema:albumRelease"?: SchemaValue<MusicRelease | IdReference>;
    /** The kind of release which this album is: single, EP or album. */
    "schema:albumReleaseType"?: SchemaValue<MusicAlbumReleaseType | IdReference>;
    /** The artist that performed this album or recording. */
    "schema:byArtist"?: SchemaValue<MusicGroup | Person | IdReference>;
}
interface MusicAlbumLeaf extends MusicAlbumBase {
    "@type": "schema:MusicAlbum";
}
/** A collection of music tracks. */
export type MusicAlbum = MusicAlbumLeaf;

interface MusicAlbumProductionTypeLeaf extends EnumerationBase {
    "@type": "schema:MusicAlbumProductionType";
}
/** Classification of the album by it's type of content: soundtrack, live album, studio album, etc. */
export type MusicAlbumProductionType = "https://schema.org/CompilationAlbum" | "schema:CompilationAlbum" | "https://schema.org/DemoAlbum" | "schema:DemoAlbum" | "https://schema.org/DJMixAlbum" | "schema:DJMixAlbum" | "https://schema.org/LiveAlbum" | "schema:LiveAlbum" | "https://schema.org/MixtapeAlbum" | "schema:MixtapeAlbum" | "https://schema.org/RemixAlbum" | "schema:RemixAlbum" | "https://schema.org/SoundtrackAlbum" | "schema:SoundtrackAlbum" | "https://schema.org/SpokenWordAlbum" | "schema:SpokenWordAlbum" | "https://schema.org/StudioAlbum" | "schema:StudioAlbum" | MusicAlbumProductionTypeLeaf;

interface MusicAlbumReleaseTypeLeaf extends EnumerationBase {
    "@type": "schema:MusicAlbumReleaseType";
}
/** The kind of release which this album is: single, EP or album. */
export type MusicAlbumReleaseType = "https://schema.org/AlbumRelease" | "schema:AlbumRelease" | "https://schema.org/BroadcastRelease" | "schema:BroadcastRelease" | "https://schema.org/EPRelease" | "schema:EPRelease" | "https://schema.org/SingleRelease" | "schema:SingleRelease" | MusicAlbumReleaseTypeLeaf;

interface MusicCompositionBase extends CreativeWorkBase {
    /** The person or organization who wrote a composition, or who is the composer of a work performed at some event. */
    "schema:composer"?: SchemaValue<Organization | Person | IdReference>;
    /** The date and place the work was first performed. */
    "schema:firstPerformance"?: SchemaValue<Event | IdReference>;
    /** Smaller compositions included in this work (e.g. a movement in a symphony). */
    "schema:includedComposition"?: SchemaValue<MusicComposition | IdReference>;
    /** The International Standard Musical Work Code for the composition. */
    "schema:iswcCode"?: SchemaValue<Text>;
    /** The person who wrote the words. */
    "schema:lyricist"?: SchemaValue<Person | IdReference>;
    /** The words in the song. */
    "schema:lyrics"?: SchemaValue<CreativeWork | IdReference>;
    /** The key, mode, or scale this composition uses. */
    "schema:musicalKey"?: SchemaValue<Text>;
    /** An arrangement derived from the composition. */
    "schema:musicArrangement"?: SchemaValue<MusicComposition | IdReference>;
    /** The type of composition (e.g. overture, sonata, symphony, etc.). */
    "schema:musicCompositionForm"?: SchemaValue<Text>;
    /** An audio recording of the work. */
    "schema:recordedAs"?: SchemaValue<MusicRecording | IdReference>;
}
interface MusicCompositionLeaf extends MusicCompositionBase {
    "@type": "schema:MusicComposition";
}
/** A musical composition. */
export type MusicComposition = MusicCompositionLeaf;

interface MusicEventLeaf extends EventBase {
    "@type": "schema:MusicEvent";
}
/** Event type: Music event. */
export type MusicEvent = MusicEventLeaf;

interface MusicGroupBase extends OrganizationBase {
    /** A music album. */
    "schema:album"?: SchemaValue<MusicAlbum | IdReference>;
    /**
     * A collection of music albums.
     *
     * @deprecated Consider using https://schema.org/album instead.
     */
    "schema:albums"?: SchemaValue<MusicAlbum | IdReference>;
    /** Genre of the creative work, broadcast channel or group. */
    "schema:genre"?: SchemaValue<Text | URL | IdReference>;
    /**
     * A member of a music group—for example, John, Paul, George, or Ringo.
     *
     * @deprecated Consider using https://schema.org/member instead.
     */
    "schema:musicGroupMember"?: SchemaValue<Person | IdReference>;
    /** A music recording (track)—usually a single song. If an ItemList is given, the list should contain items of type MusicRecording. */
    "schema:track"?: SchemaValue<ItemList | MusicRecording | IdReference>;
    /**
     * A music recording (track)—usually a single song.
     *
     * @deprecated Consider using https://schema.org/track instead.
     */
    "schema:tracks"?: SchemaValue<MusicRecording | IdReference>;
}
interface MusicGroupLeaf extends MusicGroupBase {
    "@type": "schema:MusicGroup";
}
/** A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician. */
export type MusicGroup = MusicGroupLeaf | string;

interface MusicPlaylistBase extends CreativeWorkBase {
    /** The number of tracks in this album or playlist. */
    "schema:numTracks"?: SchemaValue<Integer>;
    /** A music recording (track)—usually a single song. If an ItemList is given, the list should contain items of type MusicRecording. */
    "schema:track"?: SchemaValue<ItemList | MusicRecording | IdReference>;
    /**
     * A music recording (track)—usually a single song.
     *
     * @deprecated Consider using https://schema.org/track instead.
     */
    "schema:tracks"?: SchemaValue<MusicRecording | IdReference>;
}
interface MusicPlaylistLeaf extends MusicPlaylistBase {
    "@type": "schema:MusicPlaylist";
}
/** A collection of music tracks in playlist form. */
export type MusicPlaylist = MusicPlaylistLeaf | MusicAlbum | MusicRelease;

interface MusicRecordingBase extends CreativeWorkBase {
    /** The artist that performed this album or recording. */
    "schema:byArtist"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** The album to which this recording belongs. */
    "schema:inAlbum"?: SchemaValue<MusicAlbum | IdReference>;
    /** The playlist to which this recording belongs. */
    "schema:inPlaylist"?: SchemaValue<MusicPlaylist | IdReference>;
    /** The International Standard Recording Code for the recording. */
    "schema:isrcCode"?: SchemaValue<Text>;
    /** The composition this track is a recording of. */
    "schema:recordingOf"?: SchemaValue<MusicComposition | IdReference>;
}
interface MusicRecordingLeaf extends MusicRecordingBase {
    "@type": "schema:MusicRecording";
}
/** A music recording (track), usually a single song. */
export type MusicRecording = MusicRecordingLeaf;

interface MusicReleaseBase extends MusicPlaylistBase {
    /** The catalog number for the release. */
    "schema:catalogNumber"?: SchemaValue<Text>;
    /** The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga. */
    "schema:creditedTo"?: SchemaValue<Organization | Person | IdReference>;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.). */
    "schema:musicReleaseFormat"?: SchemaValue<MusicReleaseFormatType | IdReference>;
    /** The label that issued the release. */
    "schema:recordLabel"?: SchemaValue<Organization | IdReference>;
    /** The album this is a release of. */
    "schema:releaseOf"?: SchemaValue<MusicAlbum | IdReference>;
}
interface MusicReleaseLeaf extends MusicReleaseBase {
    "@type": "schema:MusicRelease";
}
/** A MusicRelease is a specific release of a music album. */
export type MusicRelease = MusicReleaseLeaf;

interface MusicReleaseFormatTypeLeaf extends EnumerationBase {
    "@type": "schema:MusicReleaseFormatType";
}
/** Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.). */
export type MusicReleaseFormatType = "https://schema.org/CassetteFormat" | "schema:CassetteFormat" | "https://schema.org/CDFormat" | "schema:CDFormat" | "https://schema.org/DigitalAudioTapeFormat" | "schema:DigitalAudioTapeFormat" | "https://schema.org/DigitalFormat" | "schema:DigitalFormat" | "https://schema.org/DVDFormat" | "schema:DVDFormat" | "https://schema.org/LaserDiscFormat" | "schema:LaserDiscFormat" | "https://schema.org/VinylFormat" | "schema:VinylFormat" | MusicReleaseFormatTypeLeaf;

interface MusicStoreLeaf extends LocalBusinessBase {
    "@type": "schema:MusicStore";
}
/** A music store. */
export type MusicStore = MusicStoreLeaf | string;

interface MusicVenueLeaf extends CivicStructureBase {
    "@type": "schema:MusicVenue";
}
/** A music venue. */
export type MusicVenue = MusicVenueLeaf | string;

interface MusicVideoObjectLeaf extends MediaObjectBase {
    "@type": "schema:MusicVideoObject";
}
/** A music video file. */
export type MusicVideoObject = MusicVideoObjectLeaf;

interface NailSalonLeaf extends LocalBusinessBase {
    "@type": "schema:NailSalon";
}
/** A nail salon. */
export type NailSalon = NailSalonLeaf | string;

interface NerveBase extends AnatomicalStructureBase {
    /**
     * The branches that delineate from the nerve bundle. Not to be confused with {@link https://schema.org/branchOf branchOf}.
     *
     * @deprecated Consider using https://schema.org/arterialBranch instead.
     */
    "schema:branch"?: SchemaValue<AnatomicalStructure | IdReference>;
    /** The neurological pathway extension that involves muscle control. */
    "schema:nerveMotor"?: SchemaValue<Muscle | IdReference>;
    /** The neurological pathway extension that inputs and sends information to the brain or spinal cord. */
    "schema:sensoryUnit"?: SchemaValue<AnatomicalStructure | SuperficialAnatomy | IdReference>;
    /** The neurological pathway that originates the neurons. */
    "schema:sourcedFrom"?: SchemaValue<BrainStructure | IdReference>;
}
interface NerveLeaf extends NerveBase {
    "@type": "schema:Nerve";
}
/** A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons. */
export type Nerve = NerveLeaf;

interface NetworkingTechnologyModelAreaLeaf extends ThingBase {
    "@type": "coremo:NetworkingTechnologyModelArea";
}
/** A networking model area. */
export type NetworkingTechnologyModelArea = NetworkingTechnologyModelAreaLeaf;

interface NewsArticleBase extends ArticleBase {
    /**
     * A {@link https://en.wikipedia.org/wiki/Dateline dateline} is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.
     *
     * Structured representations of dateline-related information can also be expressed more explicitly using {@link https://schema.org/locationCreated locationCreated} (which represents where a work was created e.g. where a news report was written). For location depicted or described in the content, use {@link https://schema.org/contentLocation contentLocation}.
     *
     * Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines".
     */
    "schema:dateline"?: SchemaValue<Text>;
    /** The number of the column in which the NewsArticle appears in the print edition. */
    "schema:printColumn"?: SchemaValue<Text>;
    /** The edition of the print product in which the NewsArticle appears. */
    "schema:printEdition"?: SchemaValue<Text>;
    /** If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18). */
    "schema:printPage"?: SchemaValue<Text>;
    /** If this NewsArticle appears in print, this field indicates the print section in which the article appeared. */
    "schema:printSection"?: SchemaValue<Text>;
}
interface NewsArticleLeaf extends NewsArticleBase {
    "@type": "schema:NewsArticle";
}
/**
 * A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.
 *
 * A more detailed overview of {@link /docs/news.html schema.org News markup} is also available.
 */
export type NewsArticle = NewsArticleLeaf | AnalysisNewsArticle | AskPublicNewsArticle | BackgroundNewsArticle | OpinionNewsArticle | ReportageNewsArticle | ReviewNewsArticle;

interface NewsMediaOrganizationBase extends OrganizationBase {
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} or other news-related {@link https://schema.org/Organization Organization}, a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication. */
    "schema:actionableFeedbackPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** For an {@link https://schema.org/Organization Organization} (e.g. {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors. */
    "schema:correctionsPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** Statement on diversity policy by an {@link https://schema.org/Organization Organization} e.g. a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}. For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data. */
    "schema:diversityPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** For an {@link https://schema.org/Organization Organization} (often but not necessarily a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported. */
    "schema:diversityStaffingReport"?: SchemaValue<Article | URL | IdReference>;
    /** Statement about ethics policy, e.g. of a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} regarding journalistic and publishing practices, or of a {@link https://schema.org/Restaurant Restaurant}, a page describing food source policies. In the case of a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization. */
    "schema:ethicsPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, a link to the masthead page or a page listing top editorial management. */
    "schema:masthead"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, a statement on coverage priorities, including any public agenda or stance on issues. */
    "schema:missionCoveragePrioritiesPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} or other news-related {@link https://schema.org/Organization Organization}, a statement explaining when authors of articles are not named in bylines. */
    "schema:noBylinesPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** For an {@link https://schema.org/Organization Organization} (often but not necessarily a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence. Note that the {@link https://schema.org/funder funder} is also available and can be used to make basic funder information machine-readable. */
    "schema:ownershipFundingInfo"?: SchemaValue<AboutPage | CreativeWork | Text | URL | IdReference>;
    /** For an {@link https://schema.org/Organization Organization} (typically a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a statement about policy on use of unnamed sources and the decision process required. */
    "schema:unnamedSourcesPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** Disclosure about verification and fact-checking processes for a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} or other fact-checking {@link https://schema.org/Organization Organization}. */
    "schema:verificationFactCheckingPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
}
interface NewsMediaOrganizationLeaf extends NewsMediaOrganizationBase {
    "@type": "schema:NewsMediaOrganization";
}
/** A News/Media organization such as a newspaper or TV station. */
export type NewsMediaOrganization = NewsMediaOrganizationLeaf | string;

interface NewspaperLeaf extends CreativeWorkSeriesBase {
    "@type": "schema:Newspaper";
}
/** A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i.e. business, culture, education). Often published daily. */
export type Newspaper = NewspaperLeaf;

interface NGOLeaf extends OrganizationBase {
    "@type": "schema:NGO";
}
/** Organization: Non-governmental Organization. */
export type NGO = NGOLeaf | string;

interface NightClubLeaf extends LocalBusinessBase {
    "@type": "schema:NightClub";
}
/** A nightclub or discotheque. */
export type NightClub = NightClubLeaf | string;

interface NLNonprofitTypeLeaf extends EnumerationBase {
    "@type": "schema:NLNonprofitType";
}
/** NLNonprofitType: Non-profit organization type originating from the Netherlands. */
export type NLNonprofitType = "https://schema.org/NonprofitANBI" | "schema:NonprofitANBI" | "https://schema.org/NonprofitSBBI" | "schema:NonprofitSBBI" | NLNonprofitTypeLeaf;

interface NonprofitTypeLeaf extends EnumerationBase {
    "@type": "schema:NonprofitType";
}
/** NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be. */
export type NonprofitType = NonprofitTypeLeaf | NLNonprofitType | UKNonprofitType | USNonprofitType;

interface NotaryLeaf extends LocalBusinessBase {
    "@type": "schema:Notary";
}
/** A notary. */
export type Notary = NotaryLeaf | string;

interface NoteDigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "schema:NoteDigitalDocument";
}
/** A file containing a note, primarily for the author. */
export type NoteDigitalDocument = NoteDigitalDocumentLeaf;

interface NoticeLayoutBase extends ThingBase {
    /** A Notice is to be constructed from thisform layout. */
    "camo:noticeBasedOnFormLayout"?: SchemaValue<URL | IdReference>;
}
interface NoticeLayoutLeaf extends NoticeLayoutBase {
    "@type": "camo:NoticeLayout";
}
/** A NoticeLayout, on which an actual notice will be based. */
export type NoticeLayout = NoticeLayoutLeaf;

interface NoticeLayoutTableBase extends ThingBase {
    /** A NoticeLayout within a NoticeLayoutTable. */
    "camo:hasNoticeLayout"?: SchemaValue<NoticeLayout | IdReference>;
}
interface NoticeLayoutTableLeaf extends NoticeLayoutTableBase {
    "@type": "camo:NoticeLayoutTable";
}
/** A Notice layout table. */
export type NoticeLayoutTable = NoticeLayoutTableLeaf;

interface NoticeOfDissastificationLeaf extends ContractNoticeBase {
    "@type": "camo:NoticeOfDissastification";
}
/** A notice of dissastification. */
export type NoticeOfDissastification = NoticeOfDissastificationLeaf;

interface NoticeOfNoObjectionLeaf extends ContractNoticeBase {
    "@type": "camo:NoticeOfNoObjection";
}
/** A notice of no objection. */
export type NoticeOfNoObjection = NoticeOfNoObjectionLeaf;

interface NumberedBase extends OrderedBase {
    /** The alphanumeric value of this resource. */
    "coremo:alphanumericValue"?: SchemaValue<Text>;
}
interface NumberedLeaf extends NumberedBase {
    "@type": "coremo:Numbered";
}
/** An ordered alphanumeric value attached to a resource */
export type Numbered = NumberedLeaf | Certificate | Contract | ContractConfiguration | ContractNotice | ContractRequest | ContractStatement | Payment | PlantMaterialsItem | Section | Subsection | Variation;

interface NumberingLayoutTableBase extends ThingBase {
    /** Defines the regex that a contract number structure must match. */
    "camo:hasCertificateNumberLayout"?: SchemaValue<Text>;
    /** Defines the regex that a contract number lot must match. */
    "camo:hasContractLotNumberLayout"?: SchemaValue<Text>;
    /** Defines the regex that a contract number must match. */
    "camo:hasContractNumberLayout"?: SchemaValue<Text>;
    /** Defines the regex that a contract number structure must match. */
    "camo:hasContractNumberLotTerm"?: SchemaValue<Text>;
    /** Defines the regex that a contract number structure must match. */
    "camo:hasSectionNumberLayout"?: SchemaValue<Text>;
    /** Defines the regex that a contract number structure must match. */
    "camo:hasVariationNumberLayout"?: SchemaValue<Text>;
}
interface NumberingLayoutTableLeaf extends NumberingLayoutTableBase {
    "@type": "camo:NumberingLayoutTable";
}
/** A numbering layout table. */
export type NumberingLayoutTable = NumberingLayoutTableLeaf;

interface NutritionInformationBase extends ThingBase {
    /** The number of calories. */
    "schema:calories"?: SchemaValue<Energy | IdReference>;
    /** The number of grams of carbohydrates. */
    "schema:carbohydrateContent"?: SchemaValue<Mass | IdReference>;
    /** The number of milligrams of cholesterol. */
    "schema:cholesterolContent"?: SchemaValue<Mass | IdReference>;
    /** The number of grams of fat. */
    "schema:fatContent"?: SchemaValue<Mass | IdReference>;
    /** The number of grams of fiber. */
    "schema:fiberContent"?: SchemaValue<Mass | IdReference>;
    /** The number of grams of protein. */
    "schema:proteinContent"?: SchemaValue<Mass | IdReference>;
    /** The number of grams of saturated fat. */
    "schema:saturatedFatContent"?: SchemaValue<Mass | IdReference>;
    /** The serving size, in terms of the number of volume or mass. */
    "schema:servingSize"?: SchemaValue<Text>;
    /** The number of milligrams of sodium. */
    "schema:sodiumContent"?: SchemaValue<Mass | IdReference>;
    /** The number of grams of sugar. */
    "schema:sugarContent"?: SchemaValue<Mass | IdReference>;
    /** The number of grams of trans fat. */
    "schema:transFatContent"?: SchemaValue<Mass | IdReference>;
    /** The number of grams of unsaturated fat. */
    "schema:unsaturatedFatContent"?: SchemaValue<Mass | IdReference>;
}
interface NutritionInformationLeaf extends NutritionInformationBase {
    "@type": "schema:NutritionInformation";
}
/** Nutritional information about the recipe. */
export type NutritionInformation = NutritionInformationLeaf;

interface ObservationBase extends ThingBase {
    /** A marginOfError for an {@link https://schema.org/Observation Observation}. */
    "schema:marginOfError"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The measuredProperty of an {@link https://schema.org/Observation Observation}, either a schema.org property, a property from other RDF-compatible systems e.g. W3C RDF Data Cube, or schema.org extensions such as {@link https://www.gs1.org/voc/?show=properties GS1's}. */
    "schema:measuredProperty"?: SchemaValue<Property | IdReference>;
    /** The measuredValue of an {@link https://schema.org/Observation Observation}. */
    "schema:measuredValue"?: SchemaValue<DataType>;
    /** The observationDate of an {@link https://schema.org/Observation Observation}. */
    "schema:observationDate"?: SchemaValue<DateTime>;
    /** The observedNode of an {@link https://schema.org/Observation Observation}, often a {@link https://schema.org/StatisticalPopulation StatisticalPopulation}. */
    "schema:observedNode"?: SchemaValue<StatisticalPopulation | IdReference>;
}
interface ObservationLeaf extends ObservationBase {
    "@type": "schema:Observation";
}
/** Instances of the class {@link https://schema.org/Observation Observation} are used to specify observations about an entity (which may or may not be an instance of a {@link https://schema.org/StatisticalPopulation StatisticalPopulation}), at a particular time. The principal properties of an {@link https://schema.org/Observation Observation} are {@link https://schema.org/observedNode observedNode}, {@link https://schema.org/measuredProperty measuredProperty}, {@link https://schema.org/measuredValue measuredValue} (or {@link https://schema.org/median median}, etc.) and {@link https://schema.org/observationDate observationDate} ({@link https://schema.org/measuredProperty measuredProperty} properties can, but need not always, be W3C RDF Data Cube "measure properties", as in the {@link https://www.w3.org/TR/vocab-data-cube/#dsd-example lifeExpectancy example}). See also {@link https://schema.org/StatisticalPopulation StatisticalPopulation}, and the {@link /docs/data-and-datasets.html data and datasets} overview for more details. */
export type Observation = ObservationLeaf;

interface OccupationBase extends ThingBase {
    /** Educational background needed for the position or Occupation. */
    "schema:educationRequirements"?: SchemaValue<EducationalOccupationalCredential | Text | IdReference>;
    /** An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value. */
    "schema:estimatedSalary"?: SchemaValue<MonetaryAmount | MonetaryAmountDistribution | Number | IdReference>;
    /** Description of skills and experience needed for the position or Occupation. */
    "schema:experienceRequirements"?: SchemaValue<OccupationalExperienceRequirements | Text | IdReference>;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as {@link http://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
     *
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    "schema:occupationalCategory"?: SchemaValue<CategoryCode | Text | IdReference>;
    /** The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions. */
    "schema:occupationLocation"?: SchemaValue<AdministrativeArea | IdReference>;
    /** Specific qualifications required for this role or Occupation. */
    "schema:qualifications"?: SchemaValue<EducationalOccupationalCredential | Text | IdReference>;
    /** Responsibilities associated with this role or Occupation. */
    "schema:responsibilities"?: SchemaValue<Text>;
    /** A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation. */
    "schema:skills"?: SchemaValue<DefinedTerm | Text | IdReference>;
}
interface OccupationLeaf extends OccupationBase {
    "@type": "schema:Occupation";
}
/** A profession, may involve prolonged training and/or a formal qualification. */
export type Occupation = OccupationLeaf;

interface OccupationalExperienceRequirementsBase extends ThingBase {
    /** Indicates the minimal number of months of experience required for a position. */
    "schema:monthsOfExperience"?: SchemaValue<Number>;
}
interface OccupationalExperienceRequirementsLeaf extends OccupationalExperienceRequirementsBase {
    "@type": "schema:OccupationalExperienceRequirements";
}
/** Indicates employment-related experience requirements, e.g. {@link https://schema.org/monthsOfExperience monthsOfExperience}. */
export type OccupationalExperienceRequirements = OccupationalExperienceRequirementsLeaf;

interface OccupationalTherapyLeaf extends MedicalTherapyBase {
    "@type": "schema:OccupationalTherapy";
}
/** A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or learn to deal with their problems. */
export type OccupationalTherapy = OccupationalTherapyLeaf;

interface OceanBodyOfWaterLeaf extends PlaceBase {
    "@type": "schema:OceanBodyOfWater";
}
/** An ocean (for example, the Pacific). */
export type OceanBodyOfWater = OceanBodyOfWaterLeaf | string;

interface OfferBase extends ThingBase {
    /** The payment method(s) accepted by seller for this offer. */
    "schema:acceptedPaymentMethod"?: SchemaValue<LoanOrCredit | PaymentMethod | IdReference>;
    /** An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge). */
    "schema:addOn"?: SchemaValue<Offer | IdReference>;
    /** The amount of time that is required between accepting the offer and the actual usage of the resource or service. */
    "schema:advanceBookingRequirement"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "schema:aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
    /** The geographic area where a service or offered item is provided. */
    "schema:areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference>;
    /** The availability of this item—for example In stock, Out of stock, Pre-order, etc. */
    "schema:availability"?: SchemaValue<ItemAvailability | IdReference>;
    /** The end of the availability of the product or service included in the offer. */
    "schema:availabilityEnds"?: SchemaValue<Date | DateTime | Time>;
    /** The beginning of the availability of the product or service included in the offer. */
    "schema:availabilityStarts"?: SchemaValue<Date | DateTime | Time>;
    /** The place(s) from which the offer can be obtained (e.g. store locations). */
    "schema:availableAtOrFrom"?: SchemaValue<Place | IdReference>;
    /** The delivery method(s) available for this offer. */
    "schema:availableDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
    /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
    "schema:businessFunction"?: SchemaValue<BusinessFunction | IdReference>;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "schema:category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference>;
    /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. */
    "schema:deliveryLeadTime"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The type(s) of customers for which the given offer is valid. */
    "schema:eligibleCustomerType"?: SchemaValue<BusinessEntityType | IdReference>;
    /** The duration for which the given offer is valid. */
    "schema:eligibleDuration"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. */
    "schema:eligibleQuantity"?: SchemaValue<QuantitativeValue | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
     *
     * See also {@link https://schema.org/ineligibleRegion ineligibleRegion}.
     */
    "schema:eligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
    /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. */
    "schema:eligibleTransactionVolume"?: SchemaValue<PriceSpecification | IdReference>;
    /** A Global Trade Item Number ({@link https://www.gs1.org/standards/id-keys/gtin GTIN}). GTINs identify trade items, including products and services, using numeric identification codes. The {@link https://schema.org/gtin gtin} property generalizes the earlier {@link https://schema.org/gtin8 gtin8}, {@link https://schema.org/gtin12 gtin12}, {@link https://schema.org/gtin13 gtin13}, and {@link https://schema.org/gtin14 gtin14} properties. The GS1 {@link https://www.gs1.org/standards/Digital-Link/ digital link specifications} express GTINs as URLs. A correct {@link https://schema.org/gtin gtin} value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a {@link https://www.gs1.org/services/check-digit-calculator valid GS1 check digit} and meet the other rules for valid GTINs. See also {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1's GTIN Summary} and {@link https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged. */
    "schema:gtin"?: SchemaValue<Text>;
    /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin12"?: SchemaValue<Text>;
    /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin13"?: SchemaValue<Text>;
    /** The GTIN-14 code of the product, or the product to which the offer refers. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin14"?: SchemaValue<Text>;
    /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin8"?: SchemaValue<Text>;
    /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
    "schema:hasMeasurement"?: SchemaValue<QuantitativeValue | IdReference>;
    /** Specifies a MerchantReturnPolicy that may be applicable. */
    "schema:hasMerchantReturnPolicy"?: SchemaValue<MerchantReturnPolicy | IdReference>;
    /** This links to a node or nodes indicating the exact quantity of the products included in an {@link https://schema.org/Offer Offer} or {@link https://schema.org/ProductCollection ProductCollection}. */
    "schema:includesObject"?: SchemaValue<TypeAndQuantityNode | IdReference>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
     *
     * See also {@link https://schema.org/eligibleRegion eligibleRegion}.
     */
    "schema:ineligibleRegion"?: SchemaValue<GeoShape | Place | Text | IdReference>;
    /** The current approximate inventory level for the item or items. */
    "schema:inventoryLevel"?: SchemaValue<QuantitativeValue | IdReference>;
    /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
    "schema:itemCondition"?: SchemaValue<OfferItemCondition | IdReference>;
    /** An item being offered (or demanded). The transactional nature of the offer or demand is documented using {@link https://schema.org/businessFunction businessFunction}, e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:itemOffered"?: SchemaValue<AggregateOffer | CreativeWork | Event | MenuItem | Product | Service | Trip | IdReference>;
    /** Length of the lease for some {@link https://schema.org/Accommodation Accommodation}, either particular to some {@link https://schema.org/Offer Offer} or in some cases intrinsic to the property. */
    "schema:leaseLength"?: SchemaValue<Duration | QuantitativeValue | IdReference>;
    /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
    "schema:mpn"?: SchemaValue<Text>;
    /** A pointer to the organization or person making the offer. */
    "schema:offeredBy"?: SchemaValue<Organization | Person | IdReference>;
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     *
     * Usage guidelines:
     * - Use the {@link https://schema.org/priceCurrency priceCurrency} property (with standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR") instead of including {@link http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign ambiguous symbols} such as '$' in the value.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * - Note that both {@link http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     */
    "schema:price"?: SchemaValue<Number | Text>;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:priceCurrency"?: SchemaValue<Text>;
    /** One or more detailed price specifications, indicating the unit price and delivery or payment charges. */
    "schema:priceSpecification"?: SchemaValue<PriceSpecification | IdReference>;
    /** The date after which the price is no longer available. */
    "schema:priceValidUntil"?: SchemaValue<Date>;
    /** A review of the item. */
    "schema:review"?: SchemaValue<Review | IdReference>;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "schema:reviews"?: SchemaValue<Review | IdReference>;
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "schema:seller"?: SchemaValue<Organization | Person | IdReference>;
    /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. */
    "schema:serialNumber"?: SchemaValue<Text>;
    /** Indicates information about the shipping policies and options associated with an {@link https://schema.org/Offer Offer}. */
    "schema:shippingDetails"?: SchemaValue<OfferShippingDetails | IdReference>;
    /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
    "schema:sku"?: SchemaValue<Text>;
    /** The date when the item becomes valid. */
    "schema:validFrom"?: SchemaValue<Date | DateTime>;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "schema:validThrough"?: SchemaValue<Date | DateTime>;
    /** The warranty promise(s) included in the offer. */
    "schema:warranty"?: SchemaValue<WarrantyPromise | IdReference>;
}
interface OfferLeaf extends OfferBase {
    "@type": "schema:Offer";
}
/**
 * An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 *
 * Note: As the {@link https://schema.org/businessFunction businessFunction} property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.
 *
 * For {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GTIN}-related fields, see {@link http://www.gs1.org/barcodes/support/check_digit_calculator Check Digit calculator} and {@link http://www.gs1us.org/resources/standards/gtin-validation-guide validation guide} from {@link http://www.gs1.org/ GS1}.
 */
export type Offer = OfferLeaf | AggregateOffer | OfferForLease | OfferForPurchase;

interface OfferCatalogLeaf extends ItemListBase {
    "@type": "schema:OfferCatalog";
}
/** An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider. */
export type OfferCatalog = OfferCatalogLeaf;

interface OfferForLeaseLeaf extends OfferBase {
    "@type": "schema:OfferForLease";
}
/** An {@link https://schema.org/OfferForLease OfferForLease} in Schema.org represents an {@link https://schema.org/Offer Offer} to lease out something, i.e. an {@link https://schema.org/Offer Offer} whose {@link https://schema.org/businessFunction businessFunction} is {@link http://purl.org/goodrelations/v1#LeaseOut. lease out}. See {@link https://en.wikipedia.org/wiki/GoodRelations Good Relations} for background on the underlying concepts. */
export type OfferForLease = OfferForLeaseLeaf;

interface OfferForPurchaseLeaf extends OfferBase {
    "@type": "schema:OfferForPurchase";
}
/** An {@link https://schema.org/OfferForPurchase OfferForPurchase} in Schema.org represents an {@link https://schema.org/Offer Offer} to sell something, i.e. an {@link https://schema.org/Offer Offer} whose {@link https://schema.org/businessFunction businessFunction} is {@link http://purl.org/goodrelations/v1#Sell. sell}. See {@link https://en.wikipedia.org/wiki/GoodRelations Good Relations} for background on the underlying concepts. */
export type OfferForPurchase = OfferForPurchaseLeaf;

interface OfferItemConditionLeaf extends EnumerationBase {
    "@type": "schema:OfferItemCondition";
}
/** A list of possible conditions for the item. */
export type OfferItemCondition = "https://schema.org/DamagedCondition" | "schema:DamagedCondition" | "https://schema.org/NewCondition" | "schema:NewCondition" | "https://schema.org/RefurbishedCondition" | "schema:RefurbishedCondition" | "https://schema.org/UsedCondition" | "schema:UsedCondition" | OfferItemConditionLeaf;

interface OfferShippingDetailsBase extends ThingBase {
    /** The total delay between the receipt of the order and the goods reaching the final customer. */
    "schema:deliveryTime"?: SchemaValue<ShippingDeliveryTime | IdReference>;
    /** Indicates when shipping to a particular {@link https://schema.org/shippingDestination shippingDestination} is not available. */
    "schema:doesNotShip"?: SchemaValue<Boolean>;
    /** indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges. */
    "schema:shippingDestination"?: SchemaValue<DefinedRegion | IdReference>;
    /** Label to match an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with a {@link https://schema.org/ShippingRateSettings ShippingRateSettings} (within the context of a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} cross-reference). */
    "schema:shippingLabel"?: SchemaValue<Text>;
    /** The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the {@link https://schema.org/MonetaryAmount MonetaryAmount}) are most appropriate. */
    "schema:shippingRate"?: SchemaValue<MonetaryAmount | IdReference>;
    /** Link to a page containing {@link https://schema.org/ShippingRateSettings ShippingRateSettings} and {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} details. */
    "schema:shippingSettingsLink"?: SchemaValue<URL | IdReference>;
    /** Label to match an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with a {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} (within the context of a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} cross-reference). */
    "schema:transitTimeLabel"?: SchemaValue<Text>;
}
interface OfferShippingDetailsLeaf extends OfferShippingDetailsBase {
    "@type": "schema:OfferShippingDetails";
}
/**
 * OfferShippingDetails represents information about shipping destinations.
 *
 * Multiple of these entities can be used to represent different shipping rates for different destinations:
 *
 * One entity for Alaska/Hawaii. A different one for continental US.A different one for all France.
 *
 * Multiple of these entities can be used to represent different shipping costs and delivery times.
 *
 * Two entities that are identical but differ in rate and time:
 *
 * e.g. Cheaper and slower: $5 in 5-7days or Fast and expensive: $15 in 1-2 days.
 */
export type OfferShippingDetails = OfferShippingDetailsLeaf;

interface OfficeEquipmentStoreLeaf extends LocalBusinessBase {
    "@type": "schema:OfficeEquipmentStore";
}
/** An office equipment store. */
export type OfficeEquipmentStore = OfficeEquipmentStoreLeaf | string;

interface OnDemandEventLeaf extends PublicationEventBase {
    "@type": "schema:OnDemandEvent";
}
/** A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand. */
export type OnDemandEvent = OnDemandEventLeaf;

interface OpeningHoursSpecificationBase extends ThingBase {
    /** The closing hour of the place or service on the given day(s) of the week. */
    "schema:closes"?: SchemaValue<Time>;
    /** The day of the week for which these opening hours are valid. */
    "schema:dayOfWeek"?: SchemaValue<DayOfWeek | IdReference>;
    /** The opening hour of the place or service on the given day(s) of the week. */
    "schema:opens"?: SchemaValue<Time>;
    /** The date when the item becomes valid. */
    "schema:validFrom"?: SchemaValue<Date | DateTime>;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "schema:validThrough"?: SchemaValue<Date | DateTime>;
}
interface OpeningHoursSpecificationLeaf extends OpeningHoursSpecificationBase {
    "@type": "schema:OpeningHoursSpecification";
}
/**
 * A structured value providing information about the opening hours of a place or a certain service inside a place.
 *
 * The place is __open__ if the {@link https://schema.org/opens opens} property is specified, and __closed__ otherwise.
 *
 * If the value for the {@link https://schema.org/closes closes} property is less than the value for the {@link https://schema.org/opens opens} property then the hour range is assumed to span over the next day.
 */
export type OpeningHoursSpecification = OpeningHoursSpecificationLeaf;

interface OperationsEntityLeaf extends ThingBase {
    "@type": "coremo:OperationsEntity";
}
/** An operations entity. */
export type OperationsEntity = OperationsEntityLeaf | IdentityOperationsEntity;

interface OperationsModelAreaLeaf extends ThingBase {
    "@type": "coremo:OperationsModelArea";
}
/** An operations model area. */
export type OperationsModelArea = OperationsModelAreaLeaf | CloudOperationsModelArea | DevOpsOperationsModelArea | IdentityOperationsModelArea | IntegrationOperationsModelArea;

interface OpinionNewsArticleLeaf extends NewsArticleBase {
    "@type": "schema:OpinionNewsArticle";
}
/** An {@link https://schema.org/OpinionNewsArticle OpinionNewsArticle} is a {@link https://schema.org/NewsArticle NewsArticle} that primarily expresses opinions rather than journalistic reporting of news and events. For example, a {@link https://schema.org/NewsArticle NewsArticle} consisting of a column or {@link https://schema.org/Blog Blog}/{@link https://schema.org/BlogPosting BlogPosting} entry in the Opinions section of a news publication. */
export type OpinionNewsArticle = OpinionNewsArticleLeaf;

interface OpticianLeaf extends LocalBusinessBase {
    "@type": "schema:Optician";
}
/** A store that sells reading glasses and similar devices for improving vision. */
export type Optician = OpticianLeaf | string;

interface OrderBase extends ThingBase {
    /** The offer(s) -- e.g., product, quantity and price combinations -- included in the order. */
    "schema:acceptedOffer"?: SchemaValue<Offer | IdReference>;
    /** The billing address for the order. */
    "schema:billingAddress"?: SchemaValue<PostalAddress | IdReference>;
    /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
    "schema:broker"?: SchemaValue<Organization | Person | IdReference>;
    /** A number that confirms the given order or payment has been received. */
    "schema:confirmationNumber"?: SchemaValue<Text>;
    /** Party placing the order or paying the invoice. */
    "schema:customer"?: SchemaValue<Organization | Person | IdReference>;
    /** Any discount applied (to an Order). */
    "schema:discount"?: SchemaValue<Number | Text>;
    /** Code used to redeem a discount. */
    "schema:discountCode"?: SchemaValue<Text>;
    /**
     * The currency of the discount.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:discountCurrency"?: SchemaValue<Text>;
    /** Was the offer accepted as a gift for someone other than the buyer. */
    "schema:isGift"?: SchemaValue<Boolean>;
    /**
     * 'merchant' is an out-dated term for 'seller'.
     *
     * @deprecated Consider using https://schema.org/seller instead.
     */
    "schema:merchant"?: SchemaValue<Organization | Person | IdReference>;
    /** Date order was placed. */
    "schema:orderDate"?: SchemaValue<Date | DateTime>;
    /** The delivery of the parcel related to this order or order item. */
    "schema:orderDelivery"?: SchemaValue<ParcelDelivery | IdReference>;
    /** The item ordered. */
    "schema:orderedItem"?: SchemaValue<OrderItem | Product | Service | IdReference>;
    /** The identifier of the transaction. */
    "schema:orderNumber"?: SchemaValue<Text>;
    /** The current status of the order. */
    "schema:orderStatus"?: SchemaValue<OrderStatus | IdReference>;
    /** The order is being paid as part of the referenced Invoice. */
    "schema:partOfInvoice"?: SchemaValue<Invoice | IdReference>;
    /**
     * The date that payment is due.
     *
     * @deprecated Consider using https://schema.org/paymentDueDate instead.
     */
    "schema:paymentDue"?: SchemaValue<DateTime>;
    /** The date that payment is due. */
    "schema:paymentDueDate"?: SchemaValue<Date | DateTime>;
    /** The name of the credit card or other method of payment for the order. */
    "schema:paymentMethod"?: SchemaValue<PaymentMethod | IdReference>;
    /** An identifier for the method of payment used (e.g. the last 4 digits of the credit card). */
    "schema:paymentMethodId"?: SchemaValue<Text>;
    /** The URL for sending a payment. */
    "schema:paymentUrl"?: SchemaValue<URL | IdReference>;
    /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. */
    "schema:seller"?: SchemaValue<Organization | Person | IdReference>;
}
interface OrderLeaf extends OrderBase {
    "@type": "schema:Order";
}
/** An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer. */
export type Order = OrderLeaf;

interface OrderActionBase extends TradeActionBase {
    /** A sub property of instrument. The method of delivery. */
    "schema:deliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
}
interface OrderActionLeaf extends OrderActionBase {
    "@type": "schema:OrderAction";
}
/** An agent orders an object/product/service to be delivered/sent. */
export type OrderAction = OrderActionLeaf;

interface OrderedBase extends ThingBase {
    /** The ordered index of this orderable. */
    "coremo:orderedIndex"?: SchemaValue<Integer>;
}
interface OrderedLeaf extends OrderedBase {
    "@type": "coremo:Ordered";
}
/** A resource that can be ordered among an assortment of similar resources based on an ordered index (and matching order indicies are alphabetically sorted) */
export type Ordered = OrderedLeaf | Numbered;

interface OrderItemBase extends ThingBase {
    /** The delivery of the parcel related to this order or order item. */
    "schema:orderDelivery"?: SchemaValue<ParcelDelivery | IdReference>;
    /** The item ordered. */
    "schema:orderedItem"?: SchemaValue<OrderItem | Product | Service | IdReference>;
    /** The identifier of the order item. */
    "schema:orderItemNumber"?: SchemaValue<Text>;
    /** The current status of the order item. */
    "schema:orderItemStatus"?: SchemaValue<OrderStatus | IdReference>;
    /** The number of the item ordered. If the property is not set, assume the quantity is one. */
    "schema:orderQuantity"?: SchemaValue<Number>;
}
interface OrderItemLeaf extends OrderItemBase {
    "@type": "schema:OrderItem";
}
/** An order item is a line of an order. It includes the quantity and shipping details of a bought offer. */
export type OrderItem = OrderItemLeaf;

interface OrderStatusLeaf extends EnumerationBase {
    "@type": "schema:OrderStatus";
}
/** Enumerated status values for Order. */
export type OrderStatus = "https://schema.org/OrderCancelled" | "schema:OrderCancelled" | "https://schema.org/OrderDelivered" | "schema:OrderDelivered" | "https://schema.org/OrderInTransit" | "schema:OrderInTransit" | "https://schema.org/OrderPaymentDue" | "schema:OrderPaymentDue" | "https://schema.org/OrderPickupAvailable" | "schema:OrderPickupAvailable" | "https://schema.org/OrderProblem" | "schema:OrderProblem" | "https://schema.org/OrderProcessing" | "schema:OrderProcessing" | "https://schema.org/OrderReturned" | "schema:OrderReturned" | OrderStatusLeaf;

interface OrganizationBase extends ThingBase {
    /** For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} or other news-related {@link https://schema.org/Organization Organization}, a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication. */
    "schema:actionableFeedbackPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** Physical address of the item. */
    "schema:address"?: SchemaValue<PostalAddress | Text | IdReference>;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "schema:aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
    /** Alumni of an organization. */
    "schema:alumni"?: SchemaValue<Person | IdReference>;
    /** The geographic area where a service or offered item is provided. */
    "schema:areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference>;
    /** An award won by or for this item. */
    "schema:award"?: SchemaValue<Text>;
    /**
     * Awards won by or for this item.
     *
     * @deprecated Consider using https://schema.org/award instead.
     */
    "schema:awards"?: SchemaValue<Text>;
    /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
    "schema:brand"?: SchemaValue<Brand | Organization | IdReference>;
    /** A contact point for a person or organization. */
    "schema:contactPoint"?: SchemaValue<ContactPoint | IdReference>;
    /**
     * A contact point for a person or organization.
     *
     * @deprecated Consider using https://schema.org/contactPoint instead.
     */
    "schema:contactPoints"?: SchemaValue<ContactPoint | IdReference>;
    /** For an {@link https://schema.org/Organization Organization} (e.g. {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors. */
    "schema:correctionsPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe. */
    "schema:department"?: SchemaValue<Organization | IdReference>;
    /** The date that this organization was dissolved. */
    "schema:dissolutionDate"?: SchemaValue<Date>;
    /** Statement on diversity policy by an {@link https://schema.org/Organization Organization} e.g. a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}. For a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data. */
    "schema:diversityPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** For an {@link https://schema.org/Organization Organization} (often but not necessarily a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported. */
    "schema:diversityStaffingReport"?: SchemaValue<Article | URL | IdReference>;
    /** The Dun & Bradstreet DUNS number for identifying an organization or business person. */
    "schema:duns"?: SchemaValue<Text>;
    /** Email address. */
    "schema:email"?: SchemaValue<Text>;
    /** Someone working for this organization. */
    "schema:employee"?: SchemaValue<Person | IdReference>;
    /**
     * People working for this organization.
     *
     * @deprecated Consider using https://schema.org/employee instead.
     */
    "schema:employees"?: SchemaValue<Person | IdReference>;
    /** Statement about ethics policy, e.g. of a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization} regarding journalistic and publishing practices, or of a {@link https://schema.org/Restaurant Restaurant}, a page describing food source policies. In the case of a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}, an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization. */
    "schema:ethicsPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** Upcoming or past event associated with this place, organization, or action. */
    "schema:event"?: SchemaValue<Event | IdReference>;
    /**
     * Upcoming or past events associated with this place or organization.
     *
     * @deprecated Consider using https://schema.org/event instead.
     */
    "schema:events"?: SchemaValue<Event | IdReference>;
    /** The fax number. */
    "schema:faxNumber"?: SchemaValue<Text>;
    /** A person who founded this organization. */
    "schema:founder"?: SchemaValue<Person | IdReference>;
    /**
     * A person who founded this organization.
     *
     * @deprecated Consider using https://schema.org/founder instead.
     */
    "schema:founders"?: SchemaValue<Person | IdReference>;
    /** The date that this organization was founded. */
    "schema:foundingDate"?: SchemaValue<Date>;
    /** The place where the Organization was founded. */
    "schema:foundingLocation"?: SchemaValue<Place | IdReference>;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "schema:funder"?: SchemaValue<Organization | Person | IdReference>;
    /** The {@link http://www.gs1.org/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
    "schema:globalLocationNumber"?: SchemaValue<Text>;
    /** A credential awarded to the Person or Organization. */
    "schema:hasCredential"?: SchemaValue<EducationalOccupationalCredential | IdReference>;
    /** Specifies a MerchantReturnPolicy that may be applicable. */
    "schema:hasMerchantReturnPolicy"?: SchemaValue<MerchantReturnPolicy | IdReference>;
    /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
    "schema:hasOfferCatalog"?: SchemaValue<OfferCatalog | IdReference>;
    /** Points-of-Sales operated by the organization or person. */
    "schema:hasPOS"?: SchemaValue<Place | IdReference>;
    /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
    "schema:interactionStatistic"?: SchemaValue<InteractionCounter | IdReference>;
    /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
    "schema:isicV4"?: SchemaValue<Text>;
    /** Of a {@link https://schema.org/Person Person}, and less typically of an {@link https://schema.org/Organization Organization}, to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or {@link https://schema.org/JobPosting JobPosting} descriptions. */
    "schema:knowsAbout"?: SchemaValue<Text | Thing | URL | IdReference>;
    /** Of a {@link https://schema.org/Person Person}, and less typically of an {@link https://schema.org/Organization Organization}, to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. */
    "schema:knowsLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** The official name of the organization, e.g. the registered company name. */
    "schema:legalName"?: SchemaValue<Text>;
    /** An organization identifier that uniquely identifies a legal entity as defined in ISO 17442. */
    "schema:leiCode"?: SchemaValue<Text>;
    /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
    "schema:location"?: SchemaValue<Place | PostalAddress | Text | VirtualLocation | IdReference>;
    /** An associated logo. */
    "schema:logo"?: SchemaValue<ImageObject | URL | IdReference>;
    /** A pointer to products or services offered by the organization or person. */
    "schema:makesOffer"?: SchemaValue<Offer | IdReference>;
    /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. */
    "schema:member"?: SchemaValue<Organization | Person | IdReference>;
    /** An Organization (or ProgramMembership) to which this Person or Organization belongs. */
    "schema:memberOf"?: SchemaValue<Organization | ProgramMembership | IdReference>;
    /**
     * A member of this organization.
     *
     * @deprecated Consider using https://schema.org/member instead.
     */
    "schema:members"?: SchemaValue<Organization | Person | IdReference>;
    /** The North American Industry Classification System (NAICS) code for a particular organization or business person. */
    "schema:naics"?: SchemaValue<Text>;
    /** nonprofit Status indicates the legal status of a non-profit organization in its primary place of business. */
    "schema:nonprofitStatus"?: SchemaValue<NonprofitType | IdReference>;
    /** The number of employees in an organization e.g. business. */
    "schema:numberOfEmployees"?: SchemaValue<QuantitativeValue | IdReference>;
    /** For an {@link https://schema.org/Organization Organization} (often but not necessarily a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence. Note that the {@link https://schema.org/funder funder} is also available and can be used to make basic funder information machine-readable. */
    "schema:ownershipFundingInfo"?: SchemaValue<AboutPage | CreativeWork | Text | URL | IdReference>;
    /** Products owned by the organization or person. */
    "schema:owns"?: SchemaValue<OwnershipInfo | Product | IdReference>;
    /** The larger organization that this organization is a {@link https://schema.org/subOrganization subOrganization} of, if any. */
    "schema:parentOrganization"?: SchemaValue<Organization | IdReference>;
    /**
     * The publishingPrinciples property indicates (typically via {@link https://schema.org/URL URL}) a document describing the editorial principles of an {@link https://schema.org/Organization Organization} (or individual e.g. a {@link https://schema.org/Person Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link https://schema.org/CreativeWork CreativeWork} (e.g. {@link https://schema.org/NewsArticle NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link https://schema.org/CreativeWork CreativeWork}.
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link https://schema.org/funder funder}) can be expressed using schema.org terminology.
     */
    "schema:publishingPrinciples"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** A review of the item. */
    "schema:review"?: SchemaValue<Review | IdReference>;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "schema:reviews"?: SchemaValue<Review | IdReference>;
    /** A pointer to products or services sought by the organization or person (demand). */
    "schema:seeks"?: SchemaValue<Demand | IdReference>;
    /**
     * The geographic area where the service is provided.
     *
     * @deprecated Consider using https://schema.org/areaServed instead.
     */
    "schema:serviceArea"?: SchemaValue<AdministrativeArea | GeoShape | Place | IdReference>;
    /** A slogan or motto associated with the item. */
    "schema:slogan"?: SchemaValue<Text>;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "schema:sponsor"?: SchemaValue<Organization | Person | IdReference>;
    /** A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property. */
    "schema:subOrganization"?: SchemaValue<Organization | IdReference>;
    /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. */
    "schema:taxID"?: SchemaValue<Text>;
    /** The telephone number. */
    "schema:telephone"?: SchemaValue<Text>;
    /** For an {@link https://schema.org/Organization Organization} (typically a {@link https://schema.org/NewsMediaOrganization NewsMediaOrganization}), a statement about policy on use of unnamed sources and the decision process required. */
    "schema:unnamedSourcesPolicy"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** The Value-added Tax ID of the organization or person. */
    "schema:vatID"?: SchemaValue<Text>;
}
interface OrganizationLeaf extends OrganizationBase {
    "@type": "schema:Organization";
}
/** An organization such as a school, NGO, corporation, club, etc. */
export type Organization = OrganizationLeaf | Airline | Consortium | Corporation | EducationalOrganization | FundingScheme | GovernmentOrganization | LibrarySystem | LocalBusiness | MedicalOrganization | NewsMediaOrganization | NGO | PerformingGroup | Project | ResearchOrganization | SportsOrganization | WorkersUnion | string;

interface OrganizationRoleBase extends RoleBase {
    /** A number associated with a role in an organization, for example, the number on an athlete's jersey. */
    "schema:numberedPosition"?: SchemaValue<Number>;
}
interface OrganizationRoleLeaf extends OrganizationRoleBase {
    "@type": "schema:OrganizationRole";
}
/** A subclass of Role used to describe roles within organizations. */
export type OrganizationRole = OrganizationRoleLeaf | EmployeeRole;

interface OrganizeActionLeaf extends ActionBase {
    "@type": "schema:OrganizeAction";
}
/** The act of manipulating/administering/supervising/controlling one or more objects. */
export type OrganizeAction = OrganizeActionLeaf | AllocateAction | ApplyAction | BookmarkAction | PlanAction;

interface OutletStoreLeaf extends LocalBusinessBase {
    "@type": "schema:OutletStore";
}
/** An outlet store. */
export type OutletStore = OutletStoreLeaf | string;

interface OwnershipInfoBase extends ThingBase {
    /** The organization or person from which the product was acquired. */
    "schema:acquiredFrom"?: SchemaValue<Organization | Person | IdReference>;
    /** The date and time of obtaining the product. */
    "schema:ownedFrom"?: SchemaValue<DateTime>;
    /** The date and time of giving up ownership on the product. */
    "schema:ownedThrough"?: SchemaValue<DateTime>;
    /** The product that this structured value is referring to. */
    "schema:typeOfGood"?: SchemaValue<Product | Service | IdReference>;
}
interface OwnershipInfoLeaf extends OwnershipInfoBase {
    "@type": "schema:OwnershipInfo";
}
/** A structured value providing information about when a certain organization or person owned a certain product. */
export type OwnershipInfo = OwnershipInfoLeaf;

interface PaintActionLeaf extends ActionBase {
    "@type": "schema:PaintAction";
}
/** The act of producing a painting, typically with paint and canvas as instruments. */
export type PaintAction = PaintActionLeaf;

interface PaintingLeaf extends CreativeWorkBase {
    "@type": "schema:Painting";
}
/** A painting. */
export type Painting = PaintingLeaf;

interface PalliativeProcedureBase extends MedicalTherapyBase, MedicalProcedureBase {
}
interface PalliativeProcedureLeaf extends PalliativeProcedureBase {
    "@type": "schema:PalliativeProcedure";
}
/** A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition. */
export type PalliativeProcedure = PalliativeProcedureLeaf;

interface ParcelDeliveryBase extends ThingBase {
    /**
     * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     *
     * @deprecated Consider using https://schema.org/provider instead.
     */
    "schema:carrier"?: SchemaValue<Organization | IdReference>;
    /** Destination address. */
    "schema:deliveryAddress"?: SchemaValue<PostalAddress | IdReference>;
    /** New entry added as the package passes through each leg of its journey (from shipment to final delivery). */
    "schema:deliveryStatus"?: SchemaValue<DeliveryEvent | IdReference>;
    /** The earliest date the package may arrive. */
    "schema:expectedArrivalFrom"?: SchemaValue<Date | DateTime>;
    /** The latest date the package may arrive. */
    "schema:expectedArrivalUntil"?: SchemaValue<Date | DateTime>;
    /** Method used for delivery or shipping. */
    "schema:hasDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
    /** Item(s) being shipped. */
    "schema:itemShipped"?: SchemaValue<Product | IdReference>;
    /** Shipper's address. */
    "schema:originAddress"?: SchemaValue<PostalAddress | IdReference>;
    /** The overall order the items in this delivery were included in. */
    "schema:partOfOrder"?: SchemaValue<Order | IdReference>;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "schema:provider"?: SchemaValue<Organization | Person | IdReference>;
    /** Shipper tracking number. */
    "schema:trackingNumber"?: SchemaValue<Text>;
    /** Tracking url for the parcel delivery. */
    "schema:trackingUrl"?: SchemaValue<URL | IdReference>;
}
interface ParcelDeliveryLeaf extends ParcelDeliveryBase {
    "@type": "schema:ParcelDelivery";
}
/** The delivery of a parcel either via the postal service or a commercial service. */
export type ParcelDelivery = ParcelDeliveryLeaf;

interface ParentAudienceBase extends PeopleAudienceBase {
    /** Maximal age of the child. */
    "schema:childMaxAge"?: SchemaValue<Number>;
    /** Minimal age of the child. */
    "schema:childMinAge"?: SchemaValue<Number>;
}
interface ParentAudienceLeaf extends ParentAudienceBase {
    "@type": "schema:ParentAudience";
}
/** A set of characteristics describing parents, who can be interested in viewing some content. */
export type ParentAudience = ParentAudienceLeaf;

interface ParkLeaf extends CivicStructureBase {
    "@type": "schema:Park";
}
/** A park. */
export type Park = ParkLeaf | string;

interface ParkingFacilityLeaf extends CivicStructureBase {
    "@type": "schema:ParkingFacility";
}
/** A parking lot or other parking facility. */
export type ParkingFacility = ParkingFacilityLeaf | string;

interface PathologyTestBase extends MedicalTestBase {
    /** The type of tissue sample required for the test. */
    "schema:tissueSample"?: SchemaValue<Text>;
}
interface PathologyTestLeaf extends PathologyTestBase {
    "@type": "schema:PathologyTest";
}
/** A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist. */
export type PathologyTest = PathologyTestLeaf;

interface PatientBase extends MedicalAudienceBase, PersonBase {
    /** One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process. */
    "schema:diagnosis"?: SchemaValue<MedicalCondition | IdReference>;
    /** Specifying a drug or medicine used in a medication procedure. */
    "schema:drug"?: SchemaValue<Drug | IdReference>;
    /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
    "schema:healthCondition"?: SchemaValue<MedicalCondition | IdReference>;
}
interface PatientLeaf extends PatientBase {
    "@type": "schema:Patient";
}
/** A patient is any person recipient of health care services. */
export type Patient = PatientLeaf | string;

interface PayActionBase extends TradeActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface PayActionLeaf extends PayActionBase {
    "@type": "schema:PayAction";
}
/** An agent pays a price to a participant. */
export type PayAction = PayActionLeaf;

interface PaymentBase extends ThingBase, NumberedBase {
    /** Contract payment to use. */
    "camo:contractPaymentToUse"?: SchemaValue<Integer | Integer>;
    /** Most recent core contract data revision. */
    "camo:PaymentBasedOnContractDataRevision"?: SchemaValue<Integer>;
    /** The revision of most recent varying contract data (Variation). */
    "camo:PaymentBasedOnSectionContractDataRevision"?: SchemaValue<Integer>;
    /** Identifies what kind of payment Explanation this is (useful for specialist payment Explanations with custom names, maps to payment Explanation layout in Contract Layout). */
    "camo:PaymentKind"?: SchemaValue<URL | IdReference>;
}
interface PaymentLeaf extends PaymentBase {
    "@type": "camo:Payment";
}
/** A payment explanation providing details of what a payment represents. */
export type Payment = PaymentLeaf | AdvancePayment | CustomsAndImportDutiesPayment | FinalPayment | InterimPayment | TakingOverPayment;

interface PaymentCardBase extends FinancialProductBase, EnumerationBase {
    /** A cardholder benefit that pays the cardholder a small percentage of their net expenditures. */
    "schema:cashBack"?: SchemaValue<Boolean | Number>;
    /** A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology. */
    "schema:contactlessPayment"?: SchemaValue<Boolean>;
    /** A floor limit is the amount of money above which credit card transactions must be authorized. */
    "schema:floorLimit"?: SchemaValue<MonetaryAmount | IdReference>;
    /** The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month. */
    "schema:monthlyMinimumRepaymentAmount"?: SchemaValue<MonetaryAmount | Number | IdReference>;
}
interface PaymentCardLeaf extends PaymentCardBase {
    "@type": "schema:PaymentCard";
}
/** A payment method using a credit, debit, store or other card to associate the payment with an account. */
export type PaymentCard = PaymentCardLeaf | CreditCard;

interface PaymentCertificateBase extends CertificateBase {
    /** Contract payment description to use. */
    "camo:contractPaymentDescriptionToUse"?: SchemaValue<ContractPaymentDescription | IdReference>;
    /** Most recent core contract data revision. */
    "camo:paymentCertificateBasedOnContractDataRevision"?: SchemaValue<Integer>;
    /** Identifies what kind of payment certificate this is). */
    "camo:paymentCertificateKind"?: SchemaValue<URL | IdReference>;
}
interface PaymentCertificateLeaf extends PaymentCertificateBase {
    "@type": "camo:PaymentCertificate";
}
/** A payment certificate for a contract. */
export type PaymentCertificate = PaymentCertificateLeaf | AdvancePaymentCertificate | CustomsAndImportDutiesPaymentCertificate | FinalPaymentCertificate | InterimPaymentCertificate | TakingOverPaymentCertificate;

interface PaymentChargeSpecificationBase extends PriceSpecificationBase {
    /** The delivery method(s) to which the delivery charge or payment charge specification applies. */
    "schema:appliesToDeliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
    /** The payment method(s) to which the payment charge specification applies. */
    "schema:appliesToPaymentMethod"?: SchemaValue<PaymentMethod | IdReference>;
}
interface PaymentChargeSpecificationLeaf extends PaymentChargeSpecificationBase {
    "@type": "schema:PaymentChargeSpecification";
}
/** The costs of settling the payment using a particular payment method. */
export type PaymentChargeSpecification = PaymentChargeSpecificationLeaf;

interface PaymentMethodLeaf extends EnumerationBase {
    "@type": "schema:PaymentMethod";
}
/**
 * A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#ByBankTransferInAdvance
 * - http://purl.org/goodrelations/v1#ByInvoice
 * - http://purl.org/goodrelations/v1#Cash
 * - http://purl.org/goodrelations/v1#CheckInAdvance
 * - http://purl.org/goodrelations/v1#COD
 * - http://purl.org/goodrelations/v1#DirectDebit
 * - http://purl.org/goodrelations/v1#GoogleCheckout
 * - http://purl.org/goodrelations/v1#PayPal
 * - http://purl.org/goodrelations/v1#PaySwarm
 */
export type PaymentMethod = PaymentMethodLeaf | PaymentCard;

interface PaymentServiceLeaf extends FinancialProductBase {
    "@type": "schema:PaymentService";
}
/** A Service to transfer funds from a person or organization to a beneficiary person or organization. */
export type PaymentService = PaymentServiceLeaf;

interface PaymentStatusTypeLeaf extends EnumerationBase {
    "@type": "schema:PaymentStatusType";
}
/** A specific payment status. For example, PaymentDue, PaymentComplete, etc. */
export type PaymentStatusType = "https://schema.org/PaymentAutomaticallyApplied" | "schema:PaymentAutomaticallyApplied" | "https://schema.org/PaymentComplete" | "schema:PaymentComplete" | "https://schema.org/PaymentDeclined" | "schema:PaymentDeclined" | "https://schema.org/PaymentDue" | "schema:PaymentDue" | "https://schema.org/PaymentPastDue" | "schema:PaymentPastDue" | PaymentStatusTypeLeaf;

interface PaymentStepBase extends ThingBase {
    /** A PaymentStep percentage. */
    "camo:hasPaymentStepPercentage"?: SchemaValue<Number>;
}
interface PaymentStepLeaf extends PaymentStepBase {
    "@type": "camo:PaymentStep";
}
/** A PaymentStep. */
export type PaymentStep = PaymentStepLeaf;

interface PaymentStepKindEnumerationLeaf extends EnumerationBase {
    "@type": "camo:PaymentStepKindEnumeration";
}
/** An enumeration representing the kind of PaymentStep). */
export type PaymentStepKindEnumeration = "https://clipcode.org/base/schema/camo/ParallelPercentagePaymentStepKind" | "camo:ParallelPercentagePaymentStepKind" | "https://clipcode.org/base/schema/camo/PartBasedPaymentStepKind" | "camo:PartBasedPaymentStepKind" | "https://clipcode.org/base/schema/camo/SequentialPercentagePaymentStepKind" | "camo:SequentialPercentagePaymentStepKind" | PaymentStepKindEnumerationLeaf;

interface PaymentStepTableBase extends RootContractDataEntityBase {
    /** A PaymentStep within a PaymentStepTable. */
    "camo:hasPaymentStep"?: SchemaValue<PaymentStep | IdReference>;
    /** The kind of payment step to use. */
    "camo:hasPaymentStepKind"?: SchemaValue<PaymentStepKindEnumeration | IdReference>;
}
interface PaymentStepTableLeaf extends PaymentStepTableBase {
    "@type": "camo:PaymentStepTable";
}
/** A payment step table. */
export type PaymentStepTable = PaymentStepTableLeaf;

interface PeopleAudienceBase extends AudienceBase {
    /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
    "schema:healthCondition"?: SchemaValue<MedicalCondition | IdReference>;
    /** Audiences defined by a person's gender. */
    "schema:requiredGender"?: SchemaValue<Text>;
    /** Audiences defined by a person's maximum age. */
    "schema:requiredMaxAge"?: SchemaValue<Integer>;
    /** Audiences defined by a person's minimum age. */
    "schema:requiredMinAge"?: SchemaValue<Integer>;
    /** The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers. */
    "schema:suggestedAge"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The suggested gender of the intended person or audience, for example "male", "female", or "unisex". */
    "schema:suggestedGender"?: SchemaValue<GenderType | Text | IdReference>;
    /** Maximum recommended age in years for the audience or user. */
    "schema:suggestedMaxAge"?: SchemaValue<Number>;
    /** A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products. */
    "schema:suggestedMeasurement"?: SchemaValue<QuantitativeValue | IdReference>;
    /** Minimum recommended age in years for the audience or user. */
    "schema:suggestedMinAge"?: SchemaValue<Number>;
}
interface PeopleAudienceLeaf extends PeopleAudienceBase {
    "@type": "schema:PeopleAudience";
}
/** A set of characteristics belonging to people, e.g. who compose an item's target audience. */
export type PeopleAudience = PeopleAudienceLeaf | MedicalAudience | ParentAudience;

interface PercentagePriceSpecificationBase extends RootContractDataEntityBase {
    /** A percentage price. */
    "camo:percentagePrice"?: SchemaValue<Number>;
    /** A percentage price currency. */
    "camo:percentagePriceCurrency"?: SchemaValue<Text>;
}
interface PercentagePriceSpecificationLeaf extends PercentagePriceSpecificationBase {
    "@type": "camo:PercentagePriceSpecification";
}
/** A percentage price specification. */
export type PercentagePriceSpecification = PercentagePriceSpecificationLeaf;

interface PerformActionBase extends PlayActionBase {
    /** A sub property of location. The entertainment business where the action occurred. */
    "schema:entertainmentBusiness"?: SchemaValue<EntertainmentBusiness | IdReference>;
}
interface PerformActionLeaf extends PerformActionBase {
    "@type": "schema:PerformAction";
}
/** The act of participating in performance arts. */
export type PerformAction = PerformActionLeaf;

interface PerformanceCertificateLeaf extends CertificateBase {
    "@type": "camo:PerformanceCertificate";
}
/** A performance certificate for a contract. */
export type PerformanceCertificate = PerformanceCertificateLeaf;

interface PerformanceDamagesLeaf extends ThingBase {
    "@type": "camo:PerformanceDamages";
}
/** The Performance Damages. */
export type PerformanceDamages = PerformanceDamagesLeaf;

interface PerformanceRoleBase extends RoleBase {
    /** The name of a character played in some acting or performing role, i.e. in a PerformanceRole. */
    "schema:characterName"?: SchemaValue<Text>;
}
interface PerformanceRoleLeaf extends PerformanceRoleBase {
    "@type": "schema:PerformanceRole";
}
/** A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc. */
export type PerformanceRole = PerformanceRoleLeaf;

interface PerformanceSecurityLeaf extends ThingBase {
    "@type": "camo:PerformanceSecurity";
}
/** A Performance Security. */
export type PerformanceSecurity = PerformanceSecurityLeaf;

interface PerformingArtsTheaterLeaf extends CivicStructureBase {
    "@type": "schema:PerformingArtsTheater";
}
/** A theater or other performing art center. */
export type PerformingArtsTheater = PerformingArtsTheaterLeaf | string;

interface PerformingGroupLeaf extends OrganizationBase {
    "@type": "schema:PerformingGroup";
}
/** A performance group, such as a band, an orchestra, or a circus. */
export type PerformingGroup = PerformingGroupLeaf | DanceGroup | MusicGroup | TheaterGroup | string;

interface PeriodicalLeaf extends CreativeWorkSeriesBase {
    "@type": "schema:Periodical";
}
/**
 * A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 */
export type Periodical = PeriodicalLeaf | ComicSeries | Newspaper;

interface PermanentWorksLeaf extends ThingBase {
    "@type": "camo:PermanentWorks";
}
/** The PermanentWorks. */
export type PermanentWorks = PermanentWorksLeaf;

interface PermitBase extends ThingBase {
    /** The organization issuing the ticket or permit. */
    "schema:issuedBy"?: SchemaValue<Organization | IdReference>;
    /** The service through with the permit was granted. */
    "schema:issuedThrough"?: SchemaValue<Service | IdReference>;
    /** The target audience for this permit. */
    "schema:permitAudience"?: SchemaValue<Audience | IdReference>;
    /** The duration of validity of a permit or similar thing. */
    "schema:validFor"?: SchemaValue<Duration | IdReference>;
    /** The date when the item becomes valid. */
    "schema:validFrom"?: SchemaValue<Date | DateTime>;
    /** The geographic area where a permit or similar thing is valid. */
    "schema:validIn"?: SchemaValue<AdministrativeArea | IdReference>;
    /** The date when the item is no longer valid. */
    "schema:validUntil"?: SchemaValue<Date>;
}
interface PermitLeaf extends PermitBase {
    "@type": "schema:Permit";
}
/** A permit issued by an organization, e.g. a parking pass. */
export type Permit = PermitLeaf | GovernmentPermit;

interface PersonBase extends ThingBase {
    /** An additional name for a Person, can be used for a middle name. */
    "schema:additionalName"?: SchemaValue<Text>;
    /** Physical address of the item. */
    "schema:address"?: SchemaValue<PostalAddress | Text | IdReference>;
    /** An organization that this person is affiliated with. For example, a school/university, a club, or a team. */
    "schema:affiliation"?: SchemaValue<Organization | IdReference>;
    /** An organization that the person is an alumni of. */
    "schema:alumniOf"?: SchemaValue<EducationalOrganization | Organization | IdReference>;
    /** An award won by or for this item. */
    "schema:award"?: SchemaValue<Text>;
    /**
     * Awards won by or for this item.
     *
     * @deprecated Consider using https://schema.org/award instead.
     */
    "schema:awards"?: SchemaValue<Text>;
    /** Date of birth. */
    "schema:birthDate"?: SchemaValue<Date>;
    /** The place where the person was born. */
    "schema:birthPlace"?: SchemaValue<Place | IdReference>;
    /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
    "schema:brand"?: SchemaValue<Brand | Organization | IdReference>;
    /** A {@link https://en.wikipedia.org/wiki/Call_sign callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
    "schema:callSign"?: SchemaValue<Text>;
    /** A child of the person. */
    "schema:children"?: SchemaValue<Person | IdReference>;
    /** A colleague of the person. */
    "schema:colleague"?: SchemaValue<Person | URL | IdReference>;
    /**
     * A colleague of the person.
     *
     * @deprecated Consider using https://schema.org/colleague instead.
     */
    "schema:colleagues"?: SchemaValue<Person | IdReference>;
    /** A contact point for a person or organization. */
    "schema:contactPoint"?: SchemaValue<ContactPoint | IdReference>;
    /**
     * A contact point for a person or organization.
     *
     * @deprecated Consider using https://schema.org/contactPoint instead.
     */
    "schema:contactPoints"?: SchemaValue<ContactPoint | IdReference>;
    /** Date of death. */
    "schema:deathDate"?: SchemaValue<Date>;
    /** The place where the person died. */
    "schema:deathPlace"?: SchemaValue<Place | IdReference>;
    /** The Dun & Bradstreet DUNS number for identifying an organization or business person. */
    "schema:duns"?: SchemaValue<Text>;
    /** Email address. */
    "schema:email"?: SchemaValue<Text>;
    /** Family name. In the U.S., the last name of a Person. */
    "schema:familyName"?: SchemaValue<Text>;
    /** The fax number. */
    "schema:faxNumber"?: SchemaValue<Text>;
    /** The most generic uni-directional social relation. */
    "schema:follows"?: SchemaValue<Person | IdReference>;
    /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
    "schema:funder"?: SchemaValue<Organization | Person | IdReference>;
    /** Gender of something, typically a {@link https://schema.org/Person Person}, but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The {@link https://schema.org/gender gender} property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender {@link https://schema.org/SportsTeam SportsTeam} can be indicated with a text value of "Mixed". */
    "schema:gender"?: SchemaValue<GenderType | Text | IdReference>;
    /** Given name. In the U.S., the first name of a Person. */
    "schema:givenName"?: SchemaValue<Text>;
    /** The {@link http://www.gs1.org/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
    "schema:globalLocationNumber"?: SchemaValue<Text>;
    /** A credential awarded to the Person or Organization. */
    "schema:hasCredential"?: SchemaValue<EducationalOccupationalCredential | IdReference>;
    /** The Person's occupation. For past professions, use Role for expressing dates. */
    "schema:hasOccupation"?: SchemaValue<Occupation | IdReference>;
    /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
    "schema:hasOfferCatalog"?: SchemaValue<OfferCatalog | IdReference>;
    /** Points-of-Sales operated by the organization or person. */
    "schema:hasPOS"?: SchemaValue<Place | IdReference>;
    /** The height of the item. */
    "schema:height"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
    /** A contact location for a person's residence. */
    "schema:homeLocation"?: SchemaValue<ContactPoint | Place | IdReference>;
    /** An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. */
    "schema:honorificPrefix"?: SchemaValue<Text>;
    /** An honorific suffix following a Person's name such as M.D. /PhD/MSCSW. */
    "schema:honorificSuffix"?: SchemaValue<Text>;
    /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used. */
    "schema:interactionStatistic"?: SchemaValue<InteractionCounter | IdReference>;
    /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
    "schema:isicV4"?: SchemaValue<Text>;
    /** The job title of the person (for example, Financial Manager). */
    "schema:jobTitle"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The most generic bi-directional social/work relation. */
    "schema:knows"?: SchemaValue<Person | IdReference>;
    /** Of a {@link https://schema.org/Person Person}, and less typically of an {@link https://schema.org/Organization Organization}, to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or {@link https://schema.org/JobPosting JobPosting} descriptions. */
    "schema:knowsAbout"?: SchemaValue<Text | Thing | URL | IdReference>;
    /** Of a {@link https://schema.org/Person Person}, and less typically of an {@link https://schema.org/Organization Organization}, to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. */
    "schema:knowsLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** A pointer to products or services offered by the organization or person. */
    "schema:makesOffer"?: SchemaValue<Offer | IdReference>;
    /** An Organization (or ProgramMembership) to which this Person or Organization belongs. */
    "schema:memberOf"?: SchemaValue<Organization | ProgramMembership | IdReference>;
    /** The North American Industry Classification System (NAICS) code for a particular organization or business person. */
    "schema:naics"?: SchemaValue<Text>;
    /** Nationality of the person. */
    "schema:nationality"?: SchemaValue<Country | IdReference>;
    /** The total financial value of the person as calculated by subtracting assets from liabilities. */
    "schema:netWorth"?: SchemaValue<MonetaryAmount | PriceSpecification | IdReference>;
    /** Products owned by the organization or person. */
    "schema:owns"?: SchemaValue<OwnershipInfo | Product | IdReference>;
    /** A parent of this person. */
    "schema:parent"?: SchemaValue<Person | IdReference>;
    /**
     * A parents of the person.
     *
     * @deprecated Consider using https://schema.org/parent instead.
     */
    "schema:parents"?: SchemaValue<Person | IdReference>;
    /** Event that this person is a performer or participant in. */
    "schema:performerIn"?: SchemaValue<Event | IdReference>;
    /**
     * The publishingPrinciples property indicates (typically via {@link https://schema.org/URL URL}) a document describing the editorial principles of an {@link https://schema.org/Organization Organization} (or individual e.g. a {@link https://schema.org/Person Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link https://schema.org/CreativeWork CreativeWork} (e.g. {@link https://schema.org/NewsArticle NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link https://schema.org/CreativeWork CreativeWork}.
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link https://schema.org/funder funder}) can be expressed using schema.org terminology.
     */
    "schema:publishingPrinciples"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** The most generic familial relation. */
    "schema:relatedTo"?: SchemaValue<Person | IdReference>;
    /** A pointer to products or services sought by the organization or person (demand). */
    "schema:seeks"?: SchemaValue<Demand | IdReference>;
    /** A sibling of the person. */
    "schema:sibling"?: SchemaValue<Person | IdReference>;
    /**
     * A sibling of the person.
     *
     * @deprecated Consider using https://schema.org/sibling instead.
     */
    "schema:siblings"?: SchemaValue<Person | IdReference>;
    /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
    "schema:sponsor"?: SchemaValue<Organization | Person | IdReference>;
    /** The person's spouse. */
    "schema:spouse"?: SchemaValue<Person | IdReference>;
    /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain. */
    "schema:taxID"?: SchemaValue<Text>;
    /** The telephone number. */
    "schema:telephone"?: SchemaValue<Text>;
    /** The Value-added Tax ID of the organization or person. */
    "schema:vatID"?: SchemaValue<Text>;
    /** The weight of the product or person. */
    "schema:weight"?: SchemaValue<QuantitativeValue | IdReference>;
    /** A contact location for a person's place of work. */
    "schema:workLocation"?: SchemaValue<ContactPoint | Place | IdReference>;
    /** Organizations that the person works for. */
    "schema:worksFor"?: SchemaValue<Organization | IdReference>;
}
interface PersonLeaf extends PersonBase {
    "@type": "schema:Person";
}
/** A person (alive, dead, undead, or fictional). */
export type Person = PersonLeaf | Patient | string;

interface PetStoreLeaf extends LocalBusinessBase {
    "@type": "schema:PetStore";
}
/** A pet store. */
export type PetStore = PetStoreLeaf | string;

interface PharmacyBase extends MedicalOrganizationBase, LocalBusinessBase {
}
interface PharmacyLeaf extends PharmacyBase {
    "@type": "schema:Pharmacy";
}
/** A pharmacy or drugstore. */
export type Pharmacy = PharmacyLeaf | string;

interface PhotographLeaf extends CreativeWorkBase {
    "@type": "schema:Photograph";
}
/** A photograph. */
export type Photograph = PhotographLeaf;

interface PhotographActionLeaf extends ActionBase {
    "@type": "schema:PhotographAction";
}
/** The act of capturing still images of objects using a camera. */
export type PhotographAction = PhotographActionLeaf;

interface PhysicalActivityBase extends MedicalEntityBase {
    /** The anatomy of the underlying organ system or structures associated with this entity. */
    "schema:associatedAnatomy"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | SuperficialAnatomy | IdReference>;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "schema:category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference>;
    /** The characteristics of associated patients, such as age, gender, race etc. */
    "schema:epidemiology"?: SchemaValue<Text>;
    /** Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition. */
    "schema:pathophysiology"?: SchemaValue<Text>;
}
interface PhysicalActivityLeaf extends PhysicalActivityBase {
    "@type": "schema:PhysicalActivity";
}
/** Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan. */
export type PhysicalActivity = PhysicalActivityLeaf | ExercisePlan;

interface PhysicalActivityCategoryLeaf extends EnumerationBase {
    "@type": "schema:PhysicalActivityCategory";
}
/** Categories of physical activity, organized by physiologic classification. */
export type PhysicalActivityCategory = "https://schema.org/AerobicActivity" | "schema:AerobicActivity" | "https://schema.org/AnaerobicActivity" | "schema:AnaerobicActivity" | "https://schema.org/Balance" | "schema:Balance" | "https://schema.org/Flexibility" | "schema:Flexibility" | "https://schema.org/LeisureTimeActivity" | "schema:LeisureTimeActivity" | "https://schema.org/OccupationalActivity" | "schema:OccupationalActivity" | "https://schema.org/StrengthTraining" | "schema:StrengthTraining" | PhysicalActivityCategoryLeaf;

interface PhysicalExamBase extends EnumerationBase, MedicalProcedureBase {
}
interface PhysicalExamLeaf extends PhysicalExamBase {
    "@type": "schema:PhysicalExam";
}
/** A type of physical examination of a patient performed by a physician. */
export type PhysicalExam = "https://schema.org/Abdomen" | "schema:Abdomen" | "https://schema.org/Appearance" | "schema:Appearance" | "https://schema.org/CardiovascularExam" | "schema:CardiovascularExam" | "https://schema.org/Ear" | "schema:Ear" | "https://schema.org/Eye" | "schema:Eye" | "https://schema.org/Genitourinary" | "schema:Genitourinary" | "https://schema.org/Head" | "schema:Head" | "https://schema.org/Lung" | "schema:Lung" | "https://schema.org/MusculoskeletalExam" | "schema:MusculoskeletalExam" | "https://schema.org/Neck" | "schema:Neck" | "https://schema.org/Neuro" | "schema:Neuro" | "https://schema.org/Nose" | "schema:Nose" | "https://schema.org/Skin" | "schema:Skin" | "https://schema.org/Throat" | "schema:Throat" | PhysicalExamLeaf;

interface PhysicalTherapyLeaf extends MedicalTherapyBase {
    "@type": "schema:PhysicalTherapy";
}
/** A process of progressive physical care and rehabilitation aimed at improving a health condition. */
export type PhysicalTherapy = PhysicalTherapyLeaf;

interface PhysicianBase extends MedicalOrganizationBase, LocalBusinessBase {
    /** A medical service available from this provider. */
    "schema:availableService"?: SchemaValue<MedicalProcedure | MedicalTest | MedicalTherapy | IdReference>;
    /** A hospital with which the physician or office is affiliated. */
    "schema:hospitalAffiliation"?: SchemaValue<Hospital | IdReference>;
    /** A medical specialty of the provider. */
    "schema:medicalSpecialty"?: SchemaValue<MedicalSpecialty | IdReference>;
}
interface PhysicianLeaf extends PhysicianBase {
    "@type": "schema:Physician";
}
/** A doctor's office. */
export type Physician = PhysicianLeaf | string;

interface PipelineCommunicationEntityLeaf extends ThingBase {
    "@type": "coremo:PipelineCommunicationEntity";
}
/** A pipeline entity */
export type PipelineCommunicationEntity = PipelineCommunicationEntityLeaf;

interface PipelineCommunicationModelAreaLeaf extends ThingBase {
    "@type": "coremo:PipelineCommunicationModelArea";
}
/** A pipeline model area. */
export type PipelineCommunicationModelArea = PipelineCommunicationModelAreaLeaf;

interface PlaceBase extends ThingBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "schema:additionalProperty"?: SchemaValue<PropertyValue | IdReference>;
    /** Physical address of the item. */
    "schema:address"?: SchemaValue<PostalAddress | Text | IdReference>;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "schema:aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
    /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
    "schema:amenityFeature"?: SchemaValue<LocationFeatureSpecification | IdReference>;
    /**
     * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.
     *
     * For example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
     */
    "schema:branchCode"?: SchemaValue<Text>;
    /**
     * The basic containment relation between a place and one that contains it.
     *
     * @deprecated Consider using https://schema.org/containedInPlace instead.
     */
    "schema:containedIn"?: SchemaValue<Place | IdReference>;
    /** The basic containment relation between a place and one that contains it. */
    "schema:containedInPlace"?: SchemaValue<Place | IdReference>;
    /** The basic containment relation between a place and another that it contains. */
    "schema:containsPlace"?: SchemaValue<Place | IdReference>;
    /** Upcoming or past event associated with this place, organization, or action. */
    "schema:event"?: SchemaValue<Event | IdReference>;
    /**
     * Upcoming or past events associated with this place or organization.
     *
     * @deprecated Consider using https://schema.org/event instead.
     */
    "schema:events"?: SchemaValue<Event | IdReference>;
    /** The fax number. */
    "schema:faxNumber"?: SchemaValue<Text>;
    /** The geo coordinates of the place. */
    "schema:geo"?: SchemaValue<GeoCoordinates | GeoShape | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoContains"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoCoveredBy"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoCovers"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoCrosses"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}) */
    "schema:geoDisjoint"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship) */
    "schema:geoEquals"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoIntersects"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoOverlaps"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM} ) */
    "schema:geoTouches"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. */
    "schema:geoWithin"?: SchemaValue<GeospatialGeometry | Place | IdReference>;
    /** The {@link http://www.gs1.org/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations. */
    "schema:globalLocationNumber"?: SchemaValue<Text>;
    /** Indicates whether some facility (e.g. {@link https://schema.org/FoodEstablishment FoodEstablishment}, {@link https://schema.org/CovidTestingFacility CovidTestingFacility}) offers a service that can be used by driving through in a car. In the case of {@link https://schema.org/CovidTestingFacility CovidTestingFacility} such facilities could potentially help with social distancing from other potentially-infected users. */
    "schema:hasDriveThroughService"?: SchemaValue<Boolean>;
    /** A URL to a map of the place. */
    "schema:hasMap"?: SchemaValue<Map | URL | IdReference>;
    /** A flag to signal that the item, event, or place is accessible for free. */
    "schema:isAccessibleForFree"?: SchemaValue<Boolean>;
    /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place. */
    "schema:isicV4"?: SchemaValue<Text>;
    /** The latitude of a location. For example `37.42242` ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). */
    "schema:latitude"?: SchemaValue<Number | Text>;
    /** An associated logo. */
    "schema:logo"?: SchemaValue<ImageObject | URL | IdReference>;
    /** The longitude of a location. For example `-122.08585` ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). */
    "schema:longitude"?: SchemaValue<Number | Text>;
    /**
     * A URL to a map of the place.
     *
     * @deprecated Consider using https://schema.org/hasMap instead.
     */
    "schema:map"?: SchemaValue<URL | IdReference>;
    /**
     * A URL to a map of the place.
     *
     * @deprecated Consider using https://schema.org/hasMap instead.
     */
    "schema:maps"?: SchemaValue<URL | IdReference>;
    /** The total number of individuals that may attend an event or venue. */
    "schema:maximumAttendeeCapacity"?: SchemaValue<Integer>;
    /** The opening hours of a certain place. */
    "schema:openingHoursSpecification"?: SchemaValue<OpeningHoursSpecification | IdReference>;
    /** A photograph of this place. */
    "schema:photo"?: SchemaValue<ImageObject | Photograph | IdReference>;
    /**
     * Photographs of this place.
     *
     * @deprecated Consider using https://schema.org/photo instead.
     */
    "schema:photos"?: SchemaValue<ImageObject | Photograph | IdReference>;
    /** A flag to signal that the {@link https://schema.org/Place Place} is open to public visitors. If this property is omitted there is no assumed default boolean value */
    "schema:publicAccess"?: SchemaValue<Boolean>;
    /** A review of the item. */
    "schema:review"?: SchemaValue<Review | IdReference>;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "schema:reviews"?: SchemaValue<Review | IdReference>;
    /** A slogan or motto associated with the item. */
    "schema:slogan"?: SchemaValue<Text>;
    /** Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room. */
    "schema:smokingAllowed"?: SchemaValue<Boolean>;
    /**
     * The special opening hours of a certain place.
     *
     * Use this to explicitly override general opening hours brought in scope by {@link https://schema.org/openingHoursSpecification openingHoursSpecification} or {@link https://schema.org/openingHours openingHours}.
     */
    "schema:specialOpeningHoursSpecification"?: SchemaValue<OpeningHoursSpecification | IdReference>;
    /** The telephone number. */
    "schema:telephone"?: SchemaValue<Text>;
    /** A page providing information on how to book a tour of some {@link https://schema.org/Place Place}, such as an {@link https://schema.org/Accommodation Accommodation} or {@link https://schema.org/ApartmentComplex ApartmentComplex} in a real estate setting, as well as other kinds of tours as appropriate. */
    "schema:tourBookingPage"?: SchemaValue<URL | IdReference>;
}
interface PlaceLeaf extends PlaceBase {
    "@type": "schema:Place";
}
/** Entities that have a somewhat fixed, physical extension. */
export type Place = PlaceLeaf | Accommodation | AdministrativeArea | CivicStructure | Landform | LandmarksOrHistoricalBuildings | LocalBusiness | Residence | TouristAttraction | TouristDestination | string;

interface PlaceOfWorshipLeaf extends CivicStructureBase {
    "@type": "schema:PlaceOfWorship";
}
/** Place of worship, such as a church, synagogue, or mosque. */
export type PlaceOfWorship = PlaceOfWorshipLeaf | BuddhistTemple | Church | HinduTemple | Mosque | Synagogue | string;

interface PlanActionBase extends ActionBase {
    /** The time the object is scheduled to. */
    "schema:scheduledTime"?: SchemaValue<DateTime>;
}
interface PlanActionLeaf extends PlanActionBase {
    "@type": "schema:PlanAction";
}
/** The act of planning the execution of an event/task/action/reservation/plan to a future date. */
export type PlanAction = PlanActionLeaf | CancelAction | ReserveAction | ScheduleAction;

interface PlantAndMaterialsDeliveredSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:PlantAndMaterialsDeliveredSectionPaymentDescription";
}
/** PlantAndMaterialsDeliveredSectionPaymentDescription. */
export type PlantAndMaterialsDeliveredSectionPaymentDescription = PlantAndMaterialsDeliveredSectionPaymentDescriptionLeaf;

interface PlantAndMaterialsLayoutTableBase extends ThingBase {
    /** Allow the specifying in a section of whether payment can be made when a Plant and Materials item is delivered on site. */
    "camo:allowPlantAndMaterialsDeliveredInSections"?: SchemaValue<Boolean>;
    /** Allow the specifying in a separate list of whether payment can be made when a Plant and Materials item is delivered on site. */
    "camo:allowPlantAndMaterialsDeliveredInSeparateList"?: SchemaValue<Boolean>;
    /** Allow the specifying in a subsection of whether payment can be made when a Plant and Materials item is delivered on site. */
    "camo:allowPlantAndMaterialsDeliveredInSubsections"?: SchemaValue<Boolean>;
    /** Allow the specifying in a section of whether payment can be made when a Plant and Materials item is shipped. */
    "camo:allowPlantAndMaterialsShippedInSections"?: SchemaValue<Boolean>;
    /** Allow the specifying in a separate list of whether payment can be made when a Plant and Materials item is shipped. */
    "camo:allowPlantAndMaterialsShippedInSeparateList"?: SchemaValue<Boolean>;
    /** Allow the specifying in a subsection of whether payment can be made when a Plant and Materials item is shipped. */
    "camo:allowPlantAndMaterialsShippedInSubsections"?: SchemaValue<Boolean>;
}
interface PlantAndMaterialsLayoutTableLeaf extends PlantAndMaterialsLayoutTableBase {
    "@type": "camo:PlantAndMaterialsLayoutTable";
}
/** PlantAndMaterialsLayoutTable. */
export type PlantAndMaterialsLayoutTable = PlantAndMaterialsLayoutTableLeaf;

interface PlantAndMaterialsShippedDeliveredPaymentDescriptionBase extends ThingBase {
    /** hasPlantAndMaterialsShippedDeliveredAmount. */
    "camo:hasPlantAndMaterialsShippedDeliveredAmount"?: SchemaValue<MonetaryAmount | IdReference>;
    /** hasPlantAndMaterialsShippedDeliveredItem. */
    "camo:hasPlantAndMaterialsShippedDeliveredItem"?: SchemaValue<Text>;
}
interface PlantAndMaterialsShippedDeliveredPaymentDescriptionLeaf extends PlantAndMaterialsShippedDeliveredPaymentDescriptionBase {
    "@type": "camo:PlantAndMaterialsShippedDeliveredPaymentDescription";
}
/** A payment related to Plant and Materials Shipped and/or Delivered. */
export type PlantAndMaterialsShippedDeliveredPaymentDescription = PlantAndMaterialsShippedDeliveredPaymentDescriptionLeaf;

interface PlantAndMaterialsShippedSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:PlantAndMaterialsShippedSectionPaymentDescription";
}
/** PlantAndMaterialsShippedSectionPaymentDescription. */
export type PlantAndMaterialsShippedSectionPaymentDescription = PlantAndMaterialsShippedSectionPaymentDescriptionLeaf;

interface PlantAndMaterialsTableBase extends RootContractDataEntityBase {
    /** A plant and materials item that is part of a PlantAndMaterialsTable. */
    "camo:hasPlantMaterialsItem"?: SchemaValue<PlantMaterialsItem | IdReference>;
}
interface PlantAndMaterialsTableLeaf extends PlantAndMaterialsTableBase {
    "@type": "camo:PlantAndMaterialsTable";
}
/** Represents a PlantAndMaterialsTable. */
export type PlantAndMaterialsTable = PlantAndMaterialsTableLeaf;

interface PlantMaterialShippedDeliveredPrePaymentDescriptionLeaf extends GeneralPaymentDescriptionBase {
    "@type": "camo:PlantMaterialShippedDeliveredPrePaymentDescription";
}
/** A prepayment description that is part of a contract payment description. */
export type PlantMaterialShippedDeliveredPrePaymentDescription = PlantMaterialShippedDeliveredPrePaymentDescriptionLeaf;

interface PlantMaterialsItemBase extends RootContractDataEntityBase, NumberedBase {
    /** Whether to allow plant and materials payment when delivered. */
    "camo:plantAndMaterialsPaymentWhenDelivered"?: SchemaValue<Boolean>;
    /** Whether to allow plant and materials payment when shipped. */
    "camo:plantAndMaterialsPaymentWhenShipped"?: SchemaValue<Boolean>;
}
interface PlantMaterialsItemLeaf extends PlantMaterialsItemBase {
    "@type": "camo:PlantMaterialsItem";
}
/** A PlantMaterialsItem. */
export type PlantMaterialsItem = PlantMaterialsItemLeaf;

interface PlayLeaf extends CreativeWorkBase {
    "@type": "schema:Play";
}
/** A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance rather than just reading. Note: A performance of a Play would be a {@link https://schema.org/TheaterEvent TheaterEvent} or {@link https://schema.org/BroadcastEvent BroadcastEvent} - the _Play_ being the {@link https://schema.org/workPerformed workPerformed}. */
export type Play = PlayLeaf;

interface PlayActionBase extends ActionBase {
    /** An intended audience, i.e. a group for whom something was created. */
    "schema:audience"?: SchemaValue<Audience | IdReference>;
    /** Upcoming or past event associated with this place, organization, or action. */
    "schema:event"?: SchemaValue<Event | IdReference>;
}
interface PlayActionLeaf extends PlayActionBase {
    "@type": "schema:PlayAction";
}
/**
 * The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.
 *
 * Related actions:
 * - {@link https://schema.org/ListenAction ListenAction}: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.
 * - {@link https://schema.org/WatchAction WatchAction}: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 */
export type PlayAction = PlayActionLeaf | ExerciseAction | PerformAction;

interface PlaygroundLeaf extends CivicStructureBase {
    "@type": "schema:Playground";
}
/** A playground. */
export type Playground = PlaygroundLeaf | string;

interface PlumberLeaf extends LocalBusinessBase {
    "@type": "schema:Plumber";
}
/** A plumbing service. */
export type Plumber = PlumberLeaf | string;

interface PodcastEpisodeLeaf extends EpisodeBase {
    "@type": "schema:PodcastEpisode";
}
/** A single episode of a podcast series. */
export type PodcastEpisode = PodcastEpisodeLeaf;

interface PodcastSeasonLeaf extends CreativeWorkSeasonBase {
    "@type": "schema:PodcastSeason";
}
/** A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used. */
export type PodcastSeason = PodcastSeasonLeaf;

interface PodcastSeriesBase extends CreativeWorkSeriesBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /** The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom. */
    "schema:webFeed"?: SchemaValue<DataFeed | URL | IdReference>;
}
interface PodcastSeriesLeaf extends PodcastSeriesBase {
    "@type": "schema:PodcastSeries";
}
/** A podcast is an episodic series of digital audio or video files which a user can download and listen to. */
export type PodcastSeries = PodcastSeriesLeaf;

interface PoliceStationBase extends CivicStructureBase, LocalBusinessBase {
}
interface PoliceStationLeaf extends PoliceStationBase {
    "@type": "schema:PoliceStation";
}
/** A police station. */
export type PoliceStation = PoliceStationLeaf | string;

interface PondLeaf extends PlaceBase {
    "@type": "schema:Pond";
}
/** A pond. */
export type Pond = PondLeaf | string;

interface PostalAddressBase extends ContactPointBase {
    /** The country. For example, USA. You can also provide the two-letter {@link http://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. */
    "schema:addressCountry"?: SchemaValue<Country | Text | IdReference>;
    /** The locality in which the street address is, and which is in the region. For example, Mountain View. */
    "schema:addressLocality"?: SchemaValue<Text>;
    /** The region in which the locality is, and which is in the country. For example, California or another appropriate first-level {@link https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country Administrative division} */
    "schema:addressRegion"?: SchemaValue<Text>;
    /** The postal code. For example, 94043. */
    "schema:postalCode"?: SchemaValue<Text>;
    /** The post office box number for PO box addresses. */
    "schema:postOfficeBoxNumber"?: SchemaValue<Text>;
    /** The street address. For example, 1600 Amphitheatre Pkwy. */
    "schema:streetAddress"?: SchemaValue<Text>;
}
interface PostalAddressLeaf extends PostalAddressBase {
    "@type": "schema:PostalAddress";
}
/** The mailing address. */
export type PostalAddress = PostalAddressLeaf;

interface PostalCodeRangeSpecificationBase extends ThingBase {
    /** First postal code in a range (included). */
    "schema:postalCodeBegin"?: SchemaValue<Text>;
    /** Last postal code in the range (included). Needs to be after {@link https://schema.org/postalCodeBegin postalCodeBegin}. */
    "schema:postalCodeEnd"?: SchemaValue<Text>;
}
interface PostalCodeRangeSpecificationLeaf extends PostalCodeRangeSpecificationBase {
    "@type": "schema:PostalCodeRangeSpecification";
}
/** Indicates a range of postalcodes, usually defined as the set of valid codes between {@link https://schema.org/postalCodeBegin postalCodeBegin} and {@link https://schema.org/postalCodeEnd postalCodeEnd}, inclusively. */
export type PostalCodeRangeSpecification = PostalCodeRangeSpecificationLeaf;

interface PosterLeaf extends CreativeWorkBase {
    "@type": "schema:Poster";
}
/** A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something. */
export type Poster = PosterLeaf;

interface PostOfficeLeaf extends LocalBusinessBase {
    "@type": "schema:PostOffice";
}
/** A post office. */
export type PostOffice = PostOfficeLeaf | string;

interface PreOrderActionLeaf extends TradeActionBase {
    "@type": "schema:PreOrderAction";
}
/** An agent orders a (not yet released) object/product/service to be delivered/sent. */
export type PreOrderAction = PreOrderActionLeaf;

interface PrependActionLeaf extends InsertActionBase {
    "@type": "schema:PrependAction";
}
/** The act of inserting at the beginning if an ordered collection. */
export type PrependAction = PrependActionLeaf;

interface PreschoolLeaf extends EducationalOrganizationBase {
    "@type": "schema:Preschool";
}
/** A preschool. */
export type Preschool = PreschoolLeaf | string;

interface PresentationDigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "schema:PresentationDigitalDocument";
}
/** A file containing slides or used for a presentation. */
export type PresentationDigitalDocument = PresentationDigitalDocumentLeaf;

interface PreventionIndicationLeaf extends MedicalEntityBase {
    "@type": "schema:PreventionIndication";
}
/** An indication for preventing an underlying condition, symptom, etc. */
export type PreventionIndication = PreventionIndicationLeaf;

interface PriceComponentTypeEnumerationLeaf extends EnumerationBase {
    "@type": "schema:PriceComponentTypeEnumeration";
}
/** Enumerates different price components that together make up the total price for an offered product. */
export type PriceComponentTypeEnumeration = "https://schema.org/ActivationFee" | "schema:ActivationFee" | "https://schema.org/CleaningFee" | "schema:CleaningFee" | "https://schema.org/DistanceFee" | "schema:DistanceFee" | "https://schema.org/Downpayment" | "schema:Downpayment" | "https://schema.org/Installment" | "schema:Installment" | "https://schema.org/Subscription" | "schema:Subscription" | PriceComponentTypeEnumerationLeaf;

interface PriceSpecificationBase extends ThingBase {
    /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. */
    "schema:eligibleQuantity"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. */
    "schema:eligibleTransactionVolume"?: SchemaValue<PriceSpecification | IdReference>;
    /** The highest price if the price is a range. */
    "schema:maxPrice"?: SchemaValue<Number>;
    /** The lowest price if the price is a range. */
    "schema:minPrice"?: SchemaValue<Number>;
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     *
     * Usage guidelines:
     * - Use the {@link https://schema.org/priceCurrency priceCurrency} property (with standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR") instead of including {@link http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign ambiguous symbols} such as '$' in the value.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * - Note that both {@link http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     */
    "schema:price"?: SchemaValue<Number | Text>;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:priceCurrency"?: SchemaValue<Text>;
    /** The date when the item becomes valid. */
    "schema:validFrom"?: SchemaValue<Date | DateTime>;
    /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
    "schema:validThrough"?: SchemaValue<Date | DateTime>;
    /** Specifies whether the applicable value-added tax (VAT) is included in the price specification or not. */
    "schema:valueAddedTaxIncluded"?: SchemaValue<Boolean>;
}
interface PriceSpecificationLeaf extends PriceSpecificationBase {
    "@type": "schema:PriceSpecification";
}
/** A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use {@link https://schema.org/MonetaryAmount MonetaryAmount} to describe independent amounts of money such as a salary, credit card limits, etc. */
export type PriceSpecification = PriceSpecificationLeaf | CompoundPriceSpecification | DeliveryChargeSpecification | PaymentChargeSpecification | UnitPriceSpecification;

interface PriceTypeEnumerationLeaf extends EnumerationBase {
    "@type": "schema:PriceTypeEnumeration";
}
/** Enumerates different price types, for example list price, invoice price, and sale price. */
export type PriceTypeEnumeration = "https://schema.org/InvoicePrice" | "schema:InvoicePrice" | "https://schema.org/ListPrice" | "schema:ListPrice" | "https://schema.org/MinimumAdvertisedPrice" | "schema:MinimumAdvertisedPrice" | "https://schema.org/MSRP" | "schema:MSRP" | "https://schema.org/SalePrice" | "schema:SalePrice" | "https://schema.org/SRP" | "schema:SRP" | PriceTypeEnumerationLeaf;

interface PrioritizableBase extends ThingBase {
    /** The priority number of this resource. */
    "coremo:priority"?: SchemaValue<Number>;
}
interface PrioritizableLeaf extends PrioritizableBase {
    "@type": "coremo:Prioritizable";
}
/** A resource which can have a description associated with it */
export type Prioritizable = PrioritizableLeaf;

interface ProductBase extends ThingBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "schema:additionalProperty"?: SchemaValue<PropertyValue | IdReference>;
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "schema:aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
    /** An intended audience, i.e. a group for whom something was created. */
    "schema:audience"?: SchemaValue<Audience | IdReference>;
    /** An award won by or for this item. */
    "schema:award"?: SchemaValue<Text>;
    /**
     * Awards won by or for this item.
     *
     * @deprecated Consider using https://schema.org/award instead.
     */
    "schema:awards"?: SchemaValue<Text>;
    /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
    "schema:brand"?: SchemaValue<Brand | Organization | IdReference>;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "schema:category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference>;
    /** The color of the product. */
    "schema:color"?: SchemaValue<Text>;
    /** The place where the product was assembled. */
    "schema:countryOfAssembly"?: SchemaValue<Text>;
    /** The place where the item (typically {@link https://schema.org/Product Product}) was last processed and tested before importation. */
    "schema:countryOfLastProcessing"?: SchemaValue<Text>;
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "schema:countryOfOrigin"?: SchemaValue<Country | IdReference>;
    /** The depth of the item. */
    "schema:depth"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
    /** A Global Trade Item Number ({@link https://www.gs1.org/standards/id-keys/gtin GTIN}). GTINs identify trade items, including products and services, using numeric identification codes. The {@link https://schema.org/gtin gtin} property generalizes the earlier {@link https://schema.org/gtin8 gtin8}, {@link https://schema.org/gtin12 gtin12}, {@link https://schema.org/gtin13 gtin13}, and {@link https://schema.org/gtin14 gtin14} properties. The GS1 {@link https://www.gs1.org/standards/Digital-Link/ digital link specifications} express GTINs as URLs. A correct {@link https://schema.org/gtin gtin} value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a {@link https://www.gs1.org/services/check-digit-calculator valid GS1 check digit} and meet the other rules for valid GTINs. See also {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1's GTIN Summary} and {@link https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged. */
    "schema:gtin"?: SchemaValue<Text>;
    /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin12"?: SchemaValue<Text>;
    /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin13"?: SchemaValue<Text>;
    /** The GTIN-14 code of the product, or the product to which the offer refers. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin14"?: SchemaValue<Text>;
    /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1 GTIN Summary} for more details. */
    "schema:gtin8"?: SchemaValue<Text>;
    /** Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard. */
    "schema:hasEnergyConsumptionDetails"?: SchemaValue<EnergyConsumptionDetails | IdReference>;
    /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
    "schema:hasMeasurement"?: SchemaValue<QuantitativeValue | IdReference>;
    /** Specifies a MerchantReturnPolicy that may be applicable. */
    "schema:hasMerchantReturnPolicy"?: SchemaValue<MerchantReturnPolicy | IdReference>;
    /** The height of the item. */
    "schema:height"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
    /** Indicates the {@link https://schema.org/productGroupID productGroupID} for a {@link https://schema.org/ProductGroup ProductGroup} that this product {@link https://schema.org/isVariantOf isVariantOf}. */
    "schema:inProductGroupWithID"?: SchemaValue<Text>;
    /** A pointer to another product (or multiple products) for which this product is an accessory or spare part. */
    "schema:isAccessoryOrSparePartFor"?: SchemaValue<Product | IdReference>;
    /** A pointer to another product (or multiple products) for which this product is a consumable. */
    "schema:isConsumableFor"?: SchemaValue<Product | IdReference>;
    /** A pointer to another, somehow related product (or multiple products). */
    "schema:isRelatedTo"?: SchemaValue<Product | Service | IdReference>;
    /** A pointer to another, functionally similar product (or multiple products). */
    "schema:isSimilarTo"?: SchemaValue<Product | Service | IdReference>;
    /** Indicates the kind of product that this is a variant of. In the case of {@link https://schema.org/ProductModel ProductModel}, this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a {@link https://schema.org/ProductGroup ProductGroup}, the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with {@link https://schema.org/ProductGroup ProductGroup}, this property can apply to any {@link https://schema.org/Product Product} included in the group. */
    "schema:isVariantOf"?: SchemaValue<ProductGroup | ProductModel | IdReference>;
    /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
    "schema:itemCondition"?: SchemaValue<OfferItemCondition | IdReference>;
    /** An associated logo. */
    "schema:logo"?: SchemaValue<ImageObject | URL | IdReference>;
    /** The manufacturer of the product. */
    "schema:manufacturer"?: SchemaValue<Organization | IdReference>;
    /** A material that something is made from, e.g. leather, wool, cotton, paper. */
    "schema:material"?: SchemaValue<Product | Text | URL | IdReference>;
    /** The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties. */
    "schema:model"?: SchemaValue<ProductModel | Text | IdReference>;
    /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
    "schema:mpn"?: SchemaValue<Text>;
    /** Indicates the {@link https://en.wikipedia.org/wiki/NATO_Stock_Number NATO stock number} (nsn) of a {@link https://schema.org/Product Product}. */
    "schema:nsn"?: SchemaValue<Text>;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:offers"?: SchemaValue<Demand | Offer | IdReference>;
    /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported. */
    "schema:pattern"?: SchemaValue<DefinedTerm | Text | IdReference>;
    /** The product identifier, such as ISBN. For example: `meta itemprop="productID" content="isbn:123-456-789"`. */
    "schema:productID"?: SchemaValue<Text>;
    /** The date of production of the item, e.g. vehicle. */
    "schema:productionDate"?: SchemaValue<Date>;
    /** The date the item e.g. vehicle was purchased by the current owner. */
    "schema:purchaseDate"?: SchemaValue<Date>;
    /** The release date of a product or product model. This can be used to distinguish the exact variant of a product. */
    "schema:releaseDate"?: SchemaValue<Date>;
    /** A review of the item. */
    "schema:review"?: SchemaValue<Review | IdReference>;
    /**
     * Review of the item.
     *
     * @deprecated Consider using https://schema.org/review instead.
     */
    "schema:reviews"?: SchemaValue<Review | IdReference>;
    /** A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a QuantitativeValue with a unitCode, or a comprehensive and structured {@link https://schema.org/SizeSpecification SizeSpecification}; in other cases, the {@link https://schema.org/width width}, {@link https://schema.org/height height}, {@link https://schema.org/depth depth} and {@link https://schema.org/weight weight} properties may be more applicable. */
    "schema:size"?: SchemaValue<DefinedTerm | QuantitativeValue | SizeSpecification | Text | IdReference>;
    /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
    "schema:sku"?: SchemaValue<Text>;
    /** A slogan or motto associated with the item. */
    "schema:slogan"?: SchemaValue<Text>;
    /** The weight of the product or person. */
    "schema:weight"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The width of the item. */
    "schema:width"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
}
interface ProductLeaf extends ProductBase {
    "@type": "schema:Product";
}
/** Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online. */
export type Product = ProductLeaf | IndividualProduct | ProductCollection | ProductGroup | ProductModel | SomeProducts | Vehicle;

interface ProductCollectionBase extends CollectionBase, ProductBase {
    /** This links to a node or nodes indicating the exact quantity of the products included in an {@link https://schema.org/Offer Offer} or {@link https://schema.org/ProductCollection ProductCollection}. */
    "schema:includesObject"?: SchemaValue<TypeAndQuantityNode | IdReference>;
}
interface ProductCollectionLeaf extends ProductCollectionBase {
    "@type": "schema:ProductCollection";
}
/** A set of products (either {@link https://schema.org/ProductGroup ProductGroup}s or specific variants) that are listed together e.g. in an {@link https://schema.org/Offer Offer}. */
export type ProductCollection = ProductCollectionLeaf;

interface ProductGroupBase extends ProductBase {
    /** Indicates a {@link https://schema.org/Product Product} that is a member of this {@link https://schema.org/ProductGroup ProductGroup} (or {@link https://schema.org/ProductModel ProductModel}). */
    "schema:hasVariant"?: SchemaValue<Product | IdReference>;
    /** Indicates a textual identifier for a ProductGroup. */
    "schema:productGroupID"?: SchemaValue<Text>;
    /** Indicates the property or properties by which the variants in a {@link https://schema.org/ProductGroup ProductGroup} vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs. */
    "schema:variesBy"?: SchemaValue<DefinedTerm | Text | IdReference>;
}
interface ProductGroupLeaf extends ProductGroupBase {
    "@type": "schema:ProductGroup";
}
/**
 * A ProductGroup represents a group of {@link https://schema.org/Product Product}s that vary only in certain well-described ways, such as by {@link https://schema.org/size size}, {@link https://schema.org/color color}, {@link https://schema.org/material material} etc.
 *
 * While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an {@link https://schema.org/isVariantOf isVariantOf} relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties {@link https://schema.org/variesBy variesBy}, {@link https://schema.org/hasVariant hasVariant}, {@link https://schema.org/url url}.
 */
export type ProductGroup = ProductGroupLeaf;

interface ProductModelBase extends ProductBase {
    /** Indicates the kind of product that this is a variant of. In the case of {@link https://schema.org/ProductModel ProductModel}, this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a {@link https://schema.org/ProductGroup ProductGroup}, the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with {@link https://schema.org/ProductGroup ProductGroup}, this property can apply to any {@link https://schema.org/Product Product} included in the group. */
    "schema:isVariantOf"?: SchemaValue<ProductGroup | ProductModel | IdReference>;
    /** A pointer from a previous, often discontinued variant of the product to its newer variant. */
    "schema:predecessorOf"?: SchemaValue<ProductModel | IdReference>;
    /** A pointer from a newer variant of a product to its previous, often discontinued predecessor. */
    "schema:successorOf"?: SchemaValue<ProductModel | IdReference>;
}
interface ProductModelLeaf extends ProductModelBase {
    "@type": "schema:ProductModel";
}
/** A datasheet or vendor specification of a product (in the sense of a prototypical description). */
export type ProductModel = ProductModelLeaf;

interface ProfessionalServiceLeaf extends LocalBusinessBase {
    "@type": "schema:ProfessionalService";
}
/**
 * Original definition: "provider of professional services."
 *
 * The general {@link https://schema.org/ProfessionalService ProfessionalService} type for local businesses was deprecated due to confusion with {@link https://schema.org/Service Service}. For reference, the types that it included were: {@link https://schema.org/Dentist Dentist}, {@link https://schema.org/AccountingService AccountingService}, {@link https://schema.org/Attorney Attorney}, {@link https://schema.org/Notary Notary}, as well as types for several kinds of {@link https://schema.org/HomeAndConstructionBusiness HomeAndConstructionBusiness}: {@link https://schema.org/Electrician Electrician}, {@link https://schema.org/GeneralContractor GeneralContractor}, {@link https://schema.org/HousePainter HousePainter}, {@link https://schema.org/Locksmith Locksmith}, {@link https://schema.org/Plumber Plumber}, {@link https://schema.org/RoofingContractor RoofingContractor}. {@link https://schema.org/LegalService LegalService} was introduced as a more inclusive supertype of {@link https://schema.org/Attorney Attorney}.
 */
export type ProfessionalService = ProfessionalServiceLeaf | string;

interface ProfilePageLeaf extends WebPageBase {
    "@type": "schema:ProfilePage";
}
/** Web page type: Profile page. */
export type ProfilePage = ProfilePageLeaf;

interface ProgramMembershipBase extends ThingBase {
    /** The organization (airline, travelers' club, etc.) the membership is made with. */
    "schema:hostingOrganization"?: SchemaValue<Organization | IdReference>;
    /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. */
    "schema:member"?: SchemaValue<Organization | Person | IdReference>;
    /**
     * A member of this organization.
     *
     * @deprecated Consider using https://schema.org/member instead.
     */
    "schema:members"?: SchemaValue<Organization | Person | IdReference>;
    /** A unique identifier for the membership. */
    "schema:membershipNumber"?: SchemaValue<Text>;
    /** The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.) */
    "schema:membershipPointsEarned"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** The program providing the membership. */
    "schema:programName"?: SchemaValue<Text>;
}
interface ProgramMembershipLeaf extends ProgramMembershipBase {
    "@type": "schema:ProgramMembership";
}
/** Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc. */
export type ProgramMembership = ProgramMembershipLeaf;

interface ProjectLeaf extends OrganizationBase {
    "@type": "schema:Project";
}
/** An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim. Use properties from {@link https://schema.org/Organization Organization}, {@link https://schema.org/subOrganization subOrganization}/{@link https://schema.org/parentOrganization parentOrganization} to indicate project sub-structures. */
export type Project = ProjectLeaf | FundingAgency | ResearchProject | string;

interface PronounceableTextBase extends Partial<IdReference> {
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "schema:inLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** Representation of a text {@link https://schema.org/textValue textValue} using the specified {@link https://schema.org/speechToTextMarkup speechToTextMarkup}. For example the city name of Houston in IPA: /\u02C8hju\u02D0st\u0259n/. */
    "schema:phoneticText"?: SchemaValue<Text>;
    /** Form of markup used. eg. {@link https://www.w3.org/TR/speech-synthesis11 SSML} or {@link https://www.wikidata.org/wiki/Property:P898 IPA}. */
    "schema:speechToTextMarkup"?: SchemaValue<Text>;
    /** Text value being annotated. */
    "schema:textValue"?: SchemaValue<Text>;
}
interface PronounceableTextLeaf extends PronounceableTextBase {
    "@type": "schema:PronounceableText";
}
/** Data type: PronounceableText. */
export type PronounceableText = PronounceableTextLeaf | string;

interface PropertyBase extends ThingBase {
    /** Relates a property to a class that is (one of) the type(s) the property is expected to be used on. */
    "schema:domainIncludes"?: SchemaValue<Class | IdReference>;
    /** Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used. */
    "schema:inverseOf"?: SchemaValue<Property | IdReference>;
    /** Relates a property to a class that constitutes (one of) the expected type(s) for values of the property. */
    "schema:rangeIncludes"?: SchemaValue<Class | IdReference>;
    /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
    "schema:supersededBy"?: SchemaValue<Class | Enumeration | Property | IdReference>;
}
interface PropertyLeaf extends PropertyBase {
    "@type": "schema:Property";
}
/** A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property. */
export type Property = PropertyLeaf;

interface PropertyValueBase extends ThingBase {
    /** The upper value of some characteristic or property. */
    "schema:maxValue"?: SchemaValue<Number>;
    /**
     * A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link https://schema.org/measurementTechnique measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link https://schema.org/measurementTechnique measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link https://schema.org/measurementTechnique measurementTechnique}.
     */
    "schema:measurementTechnique"?: SchemaValue<Text | URL | IdReference>;
    /** The lower value of some characteristic or property. */
    "schema:minValue"?: SchemaValue<Number>;
    /** A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3) a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry). Standards bodies should promote a standard prefix for the identifiers of properties from their standards. */
    "schema:propertyID"?: SchemaValue<Text | URL | IdReference>;
    /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    "schema:unitCode"?: SchemaValue<Text | URL | IdReference>;
    /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
    "schema:unitText"?: SchemaValue<Text>;
    /**
     * The value of the quantitative value or property value node.
     * - For {@link https://schema.org/QuantitativeValue QuantitativeValue} and {@link https://schema.org/MonetaryAmount MonetaryAmount}, the recommended type for values is 'Number'.
     * - For {@link https://schema.org/PropertyValue PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "schema:value"?: SchemaValue<Boolean | Number | StructuredValue | Text | IdReference>;
    /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement. */
    "schema:valueReference"?: SchemaValue<DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue | Text | IdReference>;
}
interface PropertyValueLeaf extends PropertyValueBase {
    "@type": "schema:PropertyValue";
}
/**
 * A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.
 *
 * Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
 */
export type PropertyValue = PropertyValueLeaf | LocationFeatureSpecification;

interface PropertyValueSpecificationBase extends ThingBase {
    /** The default value of the input. For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values. */
    "schema:defaultValue"?: SchemaValue<Text | Thing | IdReference>;
    /** The upper value of some characteristic or property. */
    "schema:maxValue"?: SchemaValue<Number>;
    /** The lower value of some characteristic or property. */
    "schema:minValue"?: SchemaValue<Number>;
    /** Whether multiple values are allowed for the property. Default is false. */
    "schema:multipleValues"?: SchemaValue<Boolean>;
    /** Whether or not a property is mutable. Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form. */
    "schema:readonlyValue"?: SchemaValue<Boolean>;
    /** The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification. */
    "schema:stepValue"?: SchemaValue<Number>;
    /** Specifies the allowed range for number of characters in a literal value. */
    "schema:valueMaxLength"?: SchemaValue<Number>;
    /** Specifies the minimum allowed range for number of characters in a literal value. */
    "schema:valueMinLength"?: SchemaValue<Number>;
    /** Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name. */
    "schema:valueName"?: SchemaValue<Text>;
    /** Specifies a regular expression for testing literal values according to the HTML spec. */
    "schema:valuePattern"?: SchemaValue<Text>;
    /** Whether the property must be filled in to complete the action. Default is false. */
    "schema:valueRequired"?: SchemaValue<Boolean>;
}
interface PropertyValueSpecificationLeaf extends PropertyValueSpecificationBase {
    "@type": "schema:PropertyValueSpecification";
}
/** A Property value specification. */
export type PropertyValueSpecification = PropertyValueSpecificationLeaf;

interface ProteinBase extends BioChemEntityBase {
    /** A symbolic representation of a BioChemEnity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein. */
    "schema:hasBioPolymerSequence"?: SchemaValue<Text>;
}
interface ProteinLeaf extends ProteinBase {
    "@type": "schema:Protein";
}
/** Protein is here used in its widest possible definition, as classes of amino acid based molecules. Amyloid-beta Protein in human (UniProt P05067), eukaryota (e.g. an OrthoDB group) or even a single molecule that one can point to are all of type schema:Protein. A protein can thus be a subclass of another protein, e.g. schema:Protein as a UniProt record can have multiple isoforms inside it which would also be schema:Protein. They can be imagined, synthetic, hypothetical or naturally occurring. */
export type Protein = ProteinLeaf;

interface ProvisionalSumLeaf extends ThingBase {
    "@type": "camo:ProvisionalSum";
}
/** A provisional sum within a contract. */
export type ProvisionalSum = ProvisionalSumLeaf;

interface PsychologicalTreatmentLeaf extends TherapeuticProcedureBase {
    "@type": "schema:PsychologicalTreatment";
}
/** A process of care relying upon counseling, dialogue and communication aimed at improving a mental health condition without use of drugs. */
export type PsychologicalTreatment = PsychologicalTreatmentLeaf;

interface PublicationEventBase extends EventBase {
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     *
     * @deprecated Consider using https://schema.org/isAccessibleForFree instead.
     */
    "schema:free"?: SchemaValue<Boolean>;
    /** An agent associated with the publication event. */
    "schema:publishedBy"?: SchemaValue<Organization | Person | IdReference>;
    /** A broadcast service associated with the publication event. */
    "schema:publishedOn"?: SchemaValue<BroadcastService | IdReference>;
}
interface PublicationEventLeaf extends PublicationEventBase {
    "@type": "schema:PublicationEvent";
}
/** A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media. */
export type PublicationEvent = PublicationEventLeaf | BroadcastEvent | OnDemandEvent;

interface PublicationIssueBase extends CreativeWorkBase {
    /** Identifies the issue of publication; for example, "iii" or "2". */
    "schema:issueNumber"?: SchemaValue<Integer | Text>;
    /** The page on which the work ends; for example "138" or "xvi". */
    "schema:pageEnd"?: SchemaValue<Integer | Text>;
    /** The page on which the work starts; for example "135" or "xiii". */
    "schema:pageStart"?: SchemaValue<Integer | Text>;
    /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
    "schema:pagination"?: SchemaValue<Text>;
}
interface PublicationIssueLeaf extends PublicationIssueBase {
    "@type": "schema:PublicationIssue";
}
/**
 * A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 */
export type PublicationIssue = PublicationIssueLeaf | ComicIssue;

interface PublicationVolumeBase extends CreativeWorkBase {
    /** The page on which the work ends; for example "138" or "xvi". */
    "schema:pageEnd"?: SchemaValue<Integer | Text>;
    /** The page on which the work starts; for example "135" or "xiii". */
    "schema:pageStart"?: SchemaValue<Integer | Text>;
    /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
    "schema:pagination"?: SchemaValue<Text>;
    /** Identifies the volume of publication or multi-part work; for example, "iii" or "2". */
    "schema:volumeNumber"?: SchemaValue<Integer | Text>;
}
interface PublicationVolumeLeaf extends PublicationVolumeBase {
    "@type": "schema:PublicationVolume";
}
/**
 * A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.
 *
 * See also {@link http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html blog post}.
 */
export type PublicationVolume = PublicationVolumeLeaf;

interface PublicSwimmingPoolLeaf extends LocalBusinessBase {
    "@type": "schema:PublicSwimmingPool";
}
/** A public swimming pool. */
export type PublicSwimmingPool = PublicSwimmingPoolLeaf | string;

interface PublicToiletLeaf extends CivicStructureBase {
    "@type": "schema:PublicToilet";
}
/** A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is available for use by the general public, or by customers or employees of certain businesses. */
export type PublicToilet = PublicToiletLeaf | string;

interface PublishingCommunicationEntityLeaf extends ThingBase {
    "@type": "coremo:PublishingCommunicationEntity";
}
/** A publishing entity. */
export type PublishingCommunicationEntity = PublishingCommunicationEntityLeaf;

interface PublishingCommunicationModelAreaLeaf extends ThingBase {
    "@type": "coremo:PublishingCommunicationModelArea";
}
/** A publishing model area. */
export type PublishingCommunicationModelArea = PublishingCommunicationModelAreaLeaf;

interface QAPageLeaf extends WebPageBase {
    "@type": "schema:QAPage";
}
/** A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs). */
export type QAPage = QAPageLeaf;

interface QualitativeValueBase extends EnumerationBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "schema:additionalProperty"?: SchemaValue<PropertyValue | IdReference>;
    /** This ordering relation for qualitative values indicates that the subject is equal to the object. */
    "schema:equal"?: SchemaValue<QualitativeValue | IdReference>;
    /** This ordering relation for qualitative values indicates that the subject is greater than the object. */
    "schema:greater"?: SchemaValue<QualitativeValue | IdReference>;
    /** This ordering relation for qualitative values indicates that the subject is greater than or equal to the object. */
    "schema:greaterOrEqual"?: SchemaValue<QualitativeValue | IdReference>;
    /** This ordering relation for qualitative values indicates that the subject is lesser than the object. */
    "schema:lesser"?: SchemaValue<QualitativeValue | IdReference>;
    /** This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object. */
    "schema:lesserOrEqual"?: SchemaValue<QualitativeValue | IdReference>;
    /** This ordering relation for qualitative values indicates that the subject is not equal to the object. */
    "schema:nonEqual"?: SchemaValue<QualitativeValue | IdReference>;
    /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement. */
    "schema:valueReference"?: SchemaValue<DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue | Text | IdReference>;
}
interface QualitativeValueLeaf extends QualitativeValueBase {
    "@type": "schema:QualitativeValue";
}
/** A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'. */
export type QualitativeValue = QualitativeValueLeaf | BedType | DriveWheelConfigurationValue | SizeSpecification | SteeringPositionValue;

interface QualityManagementSystemLeaf extends ThingBase {
    "@type": "camo:QualityManagementSystem";
}
/** The QualityManagementSystem. */
export type QualityManagementSystem = QualityManagementSystemLeaf;

interface QuantitativeValueBase extends ThingBase {
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     *
     * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     */
    "schema:additionalProperty"?: SchemaValue<PropertyValue | IdReference>;
    /** The upper value of some characteristic or property. */
    "schema:maxValue"?: SchemaValue<Number>;
    /** The lower value of some characteristic or property. */
    "schema:minValue"?: SchemaValue<Number>;
    /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    "schema:unitCode"?: SchemaValue<Text | URL | IdReference>;
    /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
    "schema:unitText"?: SchemaValue<Text>;
    /**
     * The value of the quantitative value or property value node.
     * - For {@link https://schema.org/QuantitativeValue QuantitativeValue} and {@link https://schema.org/MonetaryAmount MonetaryAmount}, the recommended type for values is 'Number'.
     * - For {@link https://schema.org/PropertyValue PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "schema:value"?: SchemaValue<Boolean | Number | StructuredValue | Text | IdReference>;
    /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement. */
    "schema:valueReference"?: SchemaValue<DefinedTerm | Enumeration | MeasurementTypeEnumeration | PropertyValue | QualitativeValue | QuantitativeValue | StructuredValue | Text | IdReference>;
}
interface QuantitativeValueLeaf extends QuantitativeValueBase {
    "@type": "schema:QuantitativeValue";
}
/** A point value or interval for product characteristics and other purposes. */
export type QuantitativeValue = QuantitativeValueLeaf;

interface QuantitativeValueDistributionBase extends ThingBase {
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** The median value. */
    "schema:median"?: SchemaValue<Number>;
    /** The 10th percentile value. */
    "schema:percentile10"?: SchemaValue<Number>;
    /** The 25th percentile value. */
    "schema:percentile25"?: SchemaValue<Number>;
    /** The 75th percentile value. */
    "schema:percentile75"?: SchemaValue<Number>;
    /** The 90th percentile value. */
    "schema:percentile90"?: SchemaValue<Number>;
}
interface QuantitativeValueDistributionLeaf extends QuantitativeValueDistributionBase {
    "@type": "schema:QuantitativeValueDistribution";
}
/** A statistical distribution of values. */
export type QuantitativeValueDistribution = QuantitativeValueDistributionLeaf | MonetaryAmountDistribution;

interface QuantityLeaf extends ThingBase {
    "@type": "schema:Quantity";
}
/** Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'. */
export type Quantity = QuantityLeaf | Distance | Duration | Energy | Mass | string;

interface QuestionBase extends CommentBase {
    /** The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author. */
    "schema:acceptedAnswer"?: SchemaValue<Answer | ItemList | IdReference>;
    /** The number of answers this question has received. */
    "schema:answerCount"?: SchemaValue<Integer>;
    /** For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard". */
    "schema:eduQuestionType"?: SchemaValue<Text>;
    /** An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site. */
    "schema:suggestedAnswer"?: SchemaValue<Answer | ItemList | IdReference>;
}
interface QuestionLeaf extends QuestionBase {
    "@type": "schema:Question";
}
/** A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. */
export type Question = QuestionLeaf;

interface QuizLeaf extends LearningResourceBase {
    "@type": "schema:Quiz";
}
/** Quiz: A test of knowledge, skills and abilities. */
export type Quiz = QuizLeaf;

interface QuotationBase extends CreativeWorkBase {
    /** The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork. */
    "schema:spokenByCharacter"?: SchemaValue<Organization | Person | IdReference>;
}
interface QuotationLeaf extends QuotationBase {
    "@type": "schema:Quotation";
}
/** A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use {@link https://schema.org/isBasedOn isBasedOn} to link to source/origin. The {@link https://schema.org/recordedIn recordedIn} property can be used to reference a Quotation from an {@link https://schema.org/Event Event}. */
export type Quotation = QuotationLeaf;

interface QuoteActionLeaf extends TradeActionBase {
    "@type": "schema:QuoteAction";
}
/** An agent quotes/estimates/appraises an object/product/service with a price at a location/store. */
export type QuoteAction = QuoteActionLeaf;

interface RadiationTherapyLeaf extends MedicalTherapyBase {
    "@type": "schema:RadiationTherapy";
}
/** A process of care using radiation aimed at improving a health condition. */
export type RadiationTherapy = RadiationTherapyLeaf;

interface RadioBroadcastServiceLeaf extends BroadcastServiceBase {
    "@type": "schema:RadioBroadcastService";
}
/** A delivery service through which radio content is provided via broadcast over the air or online. */
export type RadioBroadcastService = RadioBroadcastServiceLeaf;

interface RadioChannelLeaf extends BroadcastChannelBase {
    "@type": "schema:RadioChannel";
}
/** A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup. */
export type RadioChannel = RadioChannelLeaf | AMRadioChannel | FMRadioChannel;

interface RadioClipLeaf extends ClipBase {
    "@type": "schema:RadioClip";
}
/** A short radio program or a segment/part of a radio program. */
export type RadioClip = RadioClipLeaf;

interface RadioEpisodeLeaf extends EpisodeBase {
    "@type": "schema:RadioEpisode";
}
/** A radio episode which can be part of a series or season. */
export type RadioEpisode = RadioEpisodeLeaf;

interface RadioSeasonBase extends Partial<IdReference> {
}
interface RadioSeasonLeaf extends RadioSeasonBase {
    "@type": "schema:RadioSeason";
}
/** Season dedicated to radio broadcast and associated online delivery. */
export type RadioSeason = RadioSeasonLeaf;

interface RadioSeriesBase extends CreativeWorkSeriesBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /** A season that is part of the media series. */
    "schema:containsSeason"?: SchemaValue<CreativeWorkSeason | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** An episode of a tv, radio or game media within a series or season. */
    "schema:episode"?: SchemaValue<Episode | IdReference>;
    /**
     * An episode of a TV/radio series or season.
     *
     * @deprecated Consider using https://schema.org/episode instead.
     */
    "schema:episodes"?: SchemaValue<Episode | IdReference>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** The number of episodes in this season or series. */
    "schema:numberOfEpisodes"?: SchemaValue<Integer>;
    /** The number of seasons in this series. */
    "schema:numberOfSeasons"?: SchemaValue<Integer>;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "schema:productionCompany"?: SchemaValue<Organization | IdReference>;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/containsSeason instead.
     */
    "schema:season"?: SchemaValue<CreativeWorkSeason | URL | IdReference>;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/season instead.
     */
    "schema:seasons"?: SchemaValue<CreativeWorkSeason | IdReference>;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "schema:trailer"?: SchemaValue<VideoObject | IdReference>;
}
interface RadioSeriesLeaf extends RadioSeriesBase {
    "@type": "schema:RadioSeries";
}
/** CreativeWorkSeries dedicated to radio broadcast and associated online delivery. */
export type RadioSeries = RadioSeriesLeaf;

interface RadioStationLeaf extends LocalBusinessBase {
    "@type": "schema:RadioStation";
}
/** A radio station. */
export type RadioStation = RadioStationLeaf | string;

interface RatingBase extends ThingBase {
    /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. */
    "schema:author"?: SchemaValue<Organization | Person | IdReference>;
    /** The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed. */
    "schema:bestRating"?: SchemaValue<Number | Text>;
    /** A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using {@link https://schema.org/ClaimReview ClaimReview}. */
    "schema:ratingExplanation"?: SchemaValue<Text>;
    /**
     * The rating for the content.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "schema:ratingValue"?: SchemaValue<Number | Text>;
    /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
    "schema:reviewAspect"?: SchemaValue<Text>;
    /** The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed. */
    "schema:worstRating"?: SchemaValue<Number | Text>;
}
interface RatingLeaf extends RatingBase {
    "@type": "schema:Rating";
}
/** A rating is an evaluation on a numeric scale, such as 1 to 5 stars. */
export type Rating = RatingLeaf | AggregateRating | EndorsementRating;

interface ReactActionLeaf extends ActionBase {
    "@type": "schema:ReactAction";
}
/** The act of responding instinctively and emotionally to an object, expressing a sentiment. */
export type ReactAction = ReactActionLeaf | AgreeAction | DisagreeAction | DislikeAction | EndorseAction | LikeAction | WantAction;

interface ReadActionLeaf extends ConsumeActionBase {
    "@type": "schema:ReadAction";
}
/** The act of consuming written content. */
export type ReadAction = ReadActionLeaf;

interface RealEstateAgentLeaf extends LocalBusinessBase {
    "@type": "schema:RealEstateAgent";
}
/** A real-estate agent. */
export type RealEstateAgent = RealEstateAgentLeaf | string;

interface RealEstateListingBase extends WebPageBase {
    /** Publication date of an online listing. */
    "schema:datePosted"?: SchemaValue<Date | DateTime>;
    /** Length of the lease for some {@link https://schema.org/Accommodation Accommodation}, either particular to some {@link https://schema.org/Offer Offer} or in some cases intrinsic to the property. */
    "schema:leaseLength"?: SchemaValue<Duration | QuantitativeValue | IdReference>;
}
interface RealEstateListingLeaf extends RealEstateListingBase {
    "@type": "schema:RealEstateListing";
}
/** A {@link https://schema.org/RealEstateListing RealEstateListing} is a listing that describes one or more real-estate {@link https://schema.org/Offer Offer}s (whose {@link https://schema.org/businessFunction businessFunction} is typically to lease out, or to sell). The {@link https://schema.org/RealEstateListing RealEstateListing} type itself represents the overall listing, as manifested in some {@link https://schema.org/WebPage WebPage}. */
export type RealEstateListing = RealEstateListingLeaf;

interface ReceiveActionBase extends TransferActionBase {
    /** A sub property of instrument. The method of delivery. */
    "schema:deliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
    /** A sub property of participant. The participant who is at the sending end of the action. */
    "schema:sender"?: SchemaValue<Audience | Organization | Person | IdReference>;
}
interface ReceiveActionLeaf extends ReceiveActionBase {
    "@type": "schema:ReceiveAction";
}
/**
 * The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.
 *
 * Related actions:
 * - {@link https://schema.org/SendAction SendAction}: The reciprocal of ReceiveAction.
 * - {@link https://schema.org/TakeAction TakeAction}: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).
 */
export type ReceiveAction = ReceiveActionLeaf;

interface RecipeBase extends HowToBase {
    /** The method of cooking, such as Frying, Steaming, ... */
    "schema:cookingMethod"?: SchemaValue<Text>;
    /** The time it takes to actually cook the dish, in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}. */
    "schema:cookTime"?: SchemaValue<Duration | IdReference>;
    /**
     * A single ingredient used in the recipe, e.g. sugar, flour or garlic.
     *
     * @deprecated Consider using https://schema.org/recipeIngredient instead.
     */
    "schema:ingredients"?: SchemaValue<Text>;
    /** Nutrition information about the recipe or menu item. */
    "schema:nutrition"?: SchemaValue<NutritionInformation | IdReference>;
    /** The category of the recipe—for example, appetizer, entree, etc. */
    "schema:recipeCategory"?: SchemaValue<Text>;
    /** The cuisine of the recipe (for example, French or Ethiopian). */
    "schema:recipeCuisine"?: SchemaValue<Text>;
    /** A single ingredient used in the recipe, e.g. sugar, flour or garlic. */
    "schema:recipeIngredient"?: SchemaValue<Text>;
    /** A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items. */
    "schema:recipeInstructions"?: SchemaValue<CreativeWork | ItemList | Text | IdReference>;
    /** The quantity produced by the recipe (for example, number of people served, number of servings, etc). */
    "schema:recipeYield"?: SchemaValue<QuantitativeValue | Text | IdReference>;
    /** Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc. */
    "schema:suitableForDiet"?: SchemaValue<RestrictedDiet | IdReference>;
}
interface RecipeLeaf extends RecipeBase {
    "@type": "schema:Recipe";
}
/** A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via {@link https://schema.org/suitableForDiet suitableForDiet}. The {@link https://schema.org/keywords keywords} property can also be used to add more detail. */
export type Recipe = RecipeLeaf;

interface RecommendationBase extends ReviewBase {
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "schema:category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference>;
}
interface RecommendationLeaf extends RecommendationBase {
    "@type": "schema:Recommendation";
}
/** {@link https://schema.org/Recommendation Recommendation} is a type of {@link https://schema.org/Review Review} that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A {@link https://schema.org/Guide Guide} may list multiple recommendations for different categories. For example, in a {@link https://schema.org/Guide Guide} about which TVs to buy, the author may have several {@link https://schema.org/Recommendation Recommendation}s. */
export type Recommendation = RecommendationLeaf;

interface RecommendedDoseScheduleLeaf extends DoseScheduleBase {
    "@type": "schema:RecommendedDoseSchedule";
}
/** A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity. */
export type RecommendedDoseSchedule = RecommendedDoseScheduleLeaf;

interface RecoveryOfExcessAdvancePaymentSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:RecoveryOfExcessAdvancePaymentSectionPaymentDescription";
}
/** A recovery of advance payment that is part of a contract payment description. */
export type RecoveryOfExcessAdvancePaymentSectionPaymentDescription = RecoveryOfExcessAdvancePaymentSectionPaymentDescriptionLeaf;

interface RecoveryOfExcessRegularPaymentSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:RecoveryOfExcessRegularPaymentSectionPaymentDescription";
}
/** A (non-advance) recovery payment that is part of a contract payment description. */
export type RecoveryOfExcessRegularPaymentSectionPaymentDescription = RecoveryOfExcessRegularPaymentSectionPaymentDescriptionLeaf;

interface RecyclingCenterLeaf extends LocalBusinessBase {
    "@type": "schema:RecyclingCenter";
}
/** A recycling center. */
export type RecyclingCenter = RecyclingCenterLeaf | string;

interface RefundTypeEnumerationLeaf extends EnumerationBase {
    "@type": "schema:RefundTypeEnumeration";
}
/** Enumerates several kinds of product return refund types. */
export type RefundTypeEnumeration = "https://schema.org/ExchangeRefund" | "schema:ExchangeRefund" | "https://schema.org/FullRefund" | "schema:FullRefund" | "https://schema.org/StoreCreditRefund" | "schema:StoreCreditRefund" | RefundTypeEnumerationLeaf;

interface RegisterActionLeaf extends ActionBase {
    "@type": "schema:RegisterAction";
}
/**
 * The act of registering to be a user of a service, product or web page.
 *
 * Related actions:
 * - {@link https://schema.org/JoinAction JoinAction}: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, _not_ a group/team of people.
 * - [FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.
 * - {@link https://schema.org/SubscribeAction SubscribeAction}: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
 */
export type RegisterAction = RegisterActionLeaf;

interface RejectActionLeaf extends ActionBase {
    "@type": "schema:RejectAction";
}
/**
 * The act of rejecting to/adopting an object.
 *
 * Related actions:
 * - {@link https://schema.org/AcceptAction AcceptAction}: The antonym of RejectAction.
 */
export type RejectAction = RejectActionLeaf;

interface RemoveTransformLeaf extends TransformBase {
    "@type": "coremo:RemoveTransform";
}
/** A RemoveTransform for a Transformable. */
export type RemoveTransform = RemoveTransformLeaf;

interface RentActionBase extends TradeActionBase {
    /** A sub property of participant. The owner of the real estate property. */
    "schema:landlord"?: SchemaValue<Organization | Person | IdReference>;
    /** A sub property of participant. The real estate agent involved in the action. */
    "schema:realEstateAgent"?: SchemaValue<RealEstateAgent | IdReference>;
}
interface RentActionLeaf extends RentActionBase {
    "@type": "schema:RentAction";
}
/** The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment. */
export type RentAction = RentActionLeaf;

interface RentalCarReservationBase extends ReservationBase {
    /** Where a rental car can be dropped off. */
    "schema:dropoffLocation"?: SchemaValue<Place | IdReference>;
    /** When a rental car can be dropped off. */
    "schema:dropoffTime"?: SchemaValue<DateTime>;
    /** Where a taxi will pick up a passenger or a rental car can be picked up. */
    "schema:pickupLocation"?: SchemaValue<Place | IdReference>;
    /** When a taxi will pickup a passenger or a rental car can be picked up. */
    "schema:pickupTime"?: SchemaValue<DateTime>;
}
interface RentalCarReservationLeaf extends RentalCarReservationBase {
    "@type": "schema:RentalCarReservation";
}
/**
 * A reservation for a rental car.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 */
export type RentalCarReservation = RentalCarReservationLeaf;

interface RepaymentSpecificationBase extends ThingBase {
    /** a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price. */
    "schema:downPayment"?: SchemaValue<MonetaryAmount | Number | IdReference>;
    /** The amount to be paid as a penalty in the event of early payment of the loan. */
    "schema:earlyPrepaymentPenalty"?: SchemaValue<MonetaryAmount | IdReference>;
    /** The amount of money to pay in a single payment. */
    "schema:loanPaymentAmount"?: SchemaValue<MonetaryAmount | IdReference>;
    /** Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time. */
    "schema:loanPaymentFrequency"?: SchemaValue<Number>;
    /** The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date. */
    "schema:numberOfLoanPayments"?: SchemaValue<Number>;
}
interface RepaymentSpecificationLeaf extends RepaymentSpecificationBase {
    "@type": "schema:RepaymentSpecification";
}
/** A structured value representing repayment. */
export type RepaymentSpecification = RepaymentSpecificationLeaf;

interface ReplaceActionBase extends UpdateActionBase {
    /** A sub property of object. The object that is being replaced. */
    "schema:replacee"?: SchemaValue<Thing | IdReference>;
    /** A sub property of object. The object that replaces. */
    "schema:replacer"?: SchemaValue<Thing | IdReference>;
}
interface ReplaceActionLeaf extends ReplaceActionBase {
    "@type": "schema:ReplaceAction";
}
/** The act of editing a recipient by replacing an old object with a new object. */
export type ReplaceAction = ReplaceActionLeaf;

interface ReplyActionBase extends CommunicateActionBase {
    /** A sub property of result. The Comment created or sent as a result of this action. */
    "schema:resultComment"?: SchemaValue<Comment | IdReference>;
}
interface ReplyActionLeaf extends ReplyActionBase {
    "@type": "schema:ReplyAction";
}
/**
 * The act of responding to a question/message asked/sent by the object. Related to {@link https://schema.org/AskAction AskAction}
 *
 * Related actions:
 * - {@link https://schema.org/AskAction AskAction}: Appears generally as an origin of a ReplyAction.
 */
export type ReplyAction = ReplyActionLeaf;

interface ReportBase extends ArticleBase {
    /** The number or other unique designator assigned to a Report by the publishing organization. */
    "schema:reportNumber"?: SchemaValue<Text>;
}
interface ReportLeaf extends ReportBase {
    "@type": "schema:Report";
}
/** A Report generated by governmental or non-governmental organization. */
export type Report = ReportLeaf;

interface ReportageNewsArticleLeaf extends NewsArticleBase {
    "@type": "schema:ReportageNewsArticle";
}
/**
 * The {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle} type is a subtype of {@link https://schema.org/NewsArticle NewsArticle} representing news articles which are the result of journalistic news reporting conventions.
 *
 * In practice many news publishers produce a wide variety of article types, many of which might be considered a {@link https://schema.org/NewsArticle NewsArticle} but not a {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle}. For example, opinion pieces, reviews, analysis, sponsored or satirical articles, or articles that combine several of these elements.
 *
 * The {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle} type is based on a stricter ideal for "news" as a work of journalism, with articles based on factual information either observed or verified by the author, or reported and verified from knowledgeable sources. This often includes perspectives from multiple viewpoints on a particular issue (distinguishing news reports from public relations or propaganda). News reports in the {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle} sense de-emphasize the opinion of the author, with commentary and value judgements typically expressed elsewhere.
 *
 * A {@link https://schema.org/ReportageNewsArticle ReportageNewsArticle} which goes deeper into analysis can also be marked with an additional type of {@link https://schema.org/AnalysisNewsArticle AnalysisNewsArticle}.
 */
export type ReportageNewsArticle = ReportageNewsArticleLeaf;

interface ReportedDoseScheduleLeaf extends DoseScheduleBase {
    "@type": "schema:ReportedDoseSchedule";
}
/** A patient-reported or observed dosing schedule for a drug or supplement. */
export type ReportedDoseSchedule = ReportedDoseScheduleLeaf;

interface ResearcherLeaf extends AudienceBase {
    "@type": "schema:Researcher";
}
/** Researchers. */
export type Researcher = ResearcherLeaf;

interface ResearchOrganizationLeaf extends OrganizationBase {
    "@type": "schema:ResearchOrganization";
}
/** A Research Organization (e.g. scientific institute, research company). */
export type ResearchOrganization = ResearchOrganizationLeaf | string;

interface ResearchProjectLeaf extends OrganizationBase {
    "@type": "schema:ResearchProject";
}
/** A Research project. */
export type ResearchProject = ResearchProjectLeaf | string;

interface ReservationBase extends ThingBase {
    /**
     * 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.
     *
     * @deprecated Consider using https://schema.org/broker instead.
     */
    "schema:bookingAgent"?: SchemaValue<Organization | Person | IdReference>;
    /** The date and time the reservation was booked. */
    "schema:bookingTime"?: SchemaValue<DateTime>;
    /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
    "schema:broker"?: SchemaValue<Organization | Person | IdReference>;
    /** The date and time the reservation was modified. */
    "schema:modifiedTime"?: SchemaValue<DateTime>;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:priceCurrency"?: SchemaValue<Text>;
    /** Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. */
    "schema:programMembershipUsed"?: SchemaValue<ProgramMembership | IdReference>;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "schema:provider"?: SchemaValue<Organization | Person | IdReference>;
    /** The thing -- flight, event, restaurant,etc. being reserved. */
    "schema:reservationFor"?: SchemaValue<Thing | IdReference>;
    /** A unique identifier for the reservation. */
    "schema:reservationId"?: SchemaValue<Text>;
    /** The current status of the reservation. */
    "schema:reservationStatus"?: SchemaValue<ReservationStatusType | IdReference>;
    /** A ticket associated with the reservation. */
    "schema:reservedTicket"?: SchemaValue<Ticket | IdReference>;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "schema:totalPrice"?: SchemaValue<Number | PriceSpecification | Text | IdReference>;
    /** The person or organization the reservation or ticket is for. */
    "schema:underName"?: SchemaValue<Organization | Person | IdReference>;
}
interface ReservationLeaf extends ReservationBase {
    "@type": "schema:Reservation";
}
/**
 * Describes a reservation for travel, dining or an event. Some reservations require tickets.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use {@link https://schema.org/Offer Offer}.
 */
export type Reservation = ReservationLeaf | BoatReservation | BusReservation | EventReservation | FlightReservation | FoodEstablishmentReservation | LodgingReservation | RentalCarReservation | ReservationPackage | TaxiReservation | TrainReservation;

interface ReservationPackageBase extends ReservationBase {
    /** The individual reservations included in the package. Typically a repeated property. */
    "schema:subReservation"?: SchemaValue<Reservation | IdReference>;
}
interface ReservationPackageLeaf extends ReservationPackageBase {
    "@type": "schema:ReservationPackage";
}
/** A group of multiple reservations with common values for all sub-reservations. */
export type ReservationPackage = ReservationPackageLeaf;

interface ReservationStatusTypeLeaf extends EnumerationBase {
    "@type": "schema:ReservationStatusType";
}
/** Enumerated status values for Reservation. */
export type ReservationStatusType = "https://schema.org/ReservationCancelled" | "schema:ReservationCancelled" | "https://schema.org/ReservationConfirmed" | "schema:ReservationConfirmed" | "https://schema.org/ReservationHold" | "schema:ReservationHold" | "https://schema.org/ReservationPending" | "schema:ReservationPending" | ReservationStatusTypeLeaf;

interface ReserveActionLeaf extends PlanActionBase {
    "@type": "schema:ReserveAction";
}
/**
 * Reserving a concrete object.
 *
 * Related actions:
 * - {@link https://schema.org/ScheduleAction ScheduleAction}: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
 */
export type ReserveAction = ReserveActionLeaf;

interface ReservoirLeaf extends PlaceBase {
    "@type": "schema:Reservoir";
}
/** A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir. */
export type Reservoir = ReservoirLeaf | string;

interface ResidenceBase extends PlaceBase {
    /** A floorplan of some {@link https://schema.org/Accommodation Accommodation}. */
    "schema:accommodationFloorPlan"?: SchemaValue<FloorPlan | IdReference>;
}
interface ResidenceLeaf extends ResidenceBase {
    "@type": "schema:Residence";
}
/** The place where a person lives. */
export type Residence = ResidenceLeaf | ApartmentComplex | GatedResidenceCommunity | string;

interface ResortLeaf extends LodgingBusinessBase {
    "@type": "schema:Resort";
}
/**
 * A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Resort http://en.wikipedia.org/wiki/Resort}).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type Resort = ResortLeaf | SkiResort | string;

interface ResponsibleBase extends ThingBase {
    /** A responsibility for a Responsible resource. */
    "coremo:responsibility"?: SchemaValue<Text>;
}
interface ResponsibleLeaf extends ResponsibleBase {
    "@type": "coremo:Responsible";
}
/** A responsibility of this resource */
export type Responsible = ResponsibleLeaf;

interface RestaurantLeaf extends FoodEstablishmentBase {
    "@type": "schema:Restaurant";
}
/** A restaurant. */
export type Restaurant = RestaurantLeaf | string;

interface RestrictedDietLeaf extends EnumerationBase {
    "@type": "schema:RestrictedDiet";
}
/** A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. */
export type RestrictedDiet = "https://schema.org/DiabeticDiet" | "schema:DiabeticDiet" | "https://schema.org/GlutenFreeDiet" | "schema:GlutenFreeDiet" | "https://schema.org/HalalDiet" | "schema:HalalDiet" | "https://schema.org/HinduDiet" | "schema:HinduDiet" | "https://schema.org/KosherDiet" | "schema:KosherDiet" | "https://schema.org/LowCalorieDiet" | "schema:LowCalorieDiet" | "https://schema.org/LowFatDiet" | "schema:LowFatDiet" | "https://schema.org/LowLactoseDiet" | "schema:LowLactoseDiet" | "https://schema.org/LowSaltDiet" | "schema:LowSaltDiet" | "https://schema.org/VeganDiet" | "schema:VeganDiet" | "https://schema.org/VegetarianDiet" | "schema:VegetarianDiet" | RestrictedDietLeaf;

interface ResumeActionLeaf extends ActionBase {
    "@type": "schema:ResumeAction";
}
/** The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer). */
export type ResumeAction = ResumeActionLeaf;

interface RetentionMoneyTableBase extends ThingBase {
    /** Allow release of retention money after receiving RetentionMoneyGuarantee. */
    "camo:allowReleaseOfRetentionMoney"?: SchemaValue<Boolean>;
    /** The percentage of the limit of retention money. */
    "camo:limitOfRetentionMoney"?: SchemaValue<Number>;
    /** After this retention limit is reached, allow release of retention money. */
    "camo:percentageofLimitNeededBeforeReleaseOfRetentionMoney"?: SchemaValue<Number>;
    /** What percentage of the retention money to release. */
    "camo:portionOfRetentionAmountToRelease"?: SchemaValue<Number>;
    /** The retention money percentage required after taking-over. */
    "camo:retentionMoneyAfterTakingOverPercentage"?: SchemaValue<Number>;
    /** The full retention money percentage (required prior to taking-over). */
    "camo:retentionMoneyPercentage"?: SchemaValue<Number>;
}
interface RetentionMoneyTableLeaf extends RetentionMoneyTableBase {
    "@type": "camo:RetentionMoneyTable";
}
/** A table representing retention money settings. */
export type RetentionMoneyTable = RetentionMoneyTableLeaf;

interface ReturnActionBase extends TransferActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface ReturnActionLeaf extends ReturnActionBase {
    "@type": "schema:ReturnAction";
}
/** The act of returning to the origin that which was previously received (concrete objects) or taken (ownership). */
export type ReturnAction = ReturnActionLeaf;

interface ReturnFeesEnumerationLeaf extends EnumerationBase {
    "@type": "schema:ReturnFeesEnumeration";
}
/** Enumerates several kinds of policies for product return fees. */
export type ReturnFeesEnumeration = "https://schema.org/FreeReturn" | "schema:FreeReturn" | "https://schema.org/OriginalShippingFees" | "schema:OriginalShippingFees" | "https://schema.org/RestockingFees" | "schema:RestockingFees" | "https://schema.org/ReturnFeesCustomerResponsibility" | "schema:ReturnFeesCustomerResponsibility" | "https://schema.org/ReturnShippingFees" | "schema:ReturnShippingFees" | ReturnFeesEnumerationLeaf;

interface ReturnLabelSourceEnumerationLeaf extends EnumerationBase {
    "@type": "schema:ReturnLabelSourceEnumeration";
}
/** Enumerates several types of return labels for product returns. */
export type ReturnLabelSourceEnumeration = "https://schema.org/ReturnLabelCustomerResponsibility" | "schema:ReturnLabelCustomerResponsibility" | "https://schema.org/ReturnLabelDownloadAndPrint" | "schema:ReturnLabelDownloadAndPrint" | "https://schema.org/ReturnLabelInBox" | "schema:ReturnLabelInBox" | ReturnLabelSourceEnumerationLeaf;

interface ReturnMethodEnumerationLeaf extends EnumerationBase {
    "@type": "schema:ReturnMethodEnumeration";
}
/** Enumerates several types of product return methods. */
export type ReturnMethodEnumeration = "https://schema.org/ReturnAtKiosk" | "schema:ReturnAtKiosk" | "https://schema.org/ReturnByMail" | "schema:ReturnByMail" | "https://schema.org/ReturnInStore" | "schema:ReturnInStore" | ReturnMethodEnumerationLeaf;

interface ReviewBase extends CreativeWorkBase {
    /** An associated {@link https://schema.org/ClaimReview ClaimReview}, related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case {@link https://schema.org/relatedMediaReview relatedMediaReview} would commonly be used on a {@link https://schema.org/ClaimReview ClaimReview}, while {@link https://schema.org/relatedClaimReview relatedClaimReview} would be used on {@link https://schema.org/MediaReview MediaReview}. */
    "schema:associatedClaimReview"?: SchemaValue<Review | IdReference>;
    /** An associated {@link https://schema.org/MediaReview MediaReview}, related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case {@link https://schema.org/relatedMediaReview relatedMediaReview} would commonly be used on a {@link https://schema.org/ClaimReview ClaimReview}, while {@link https://schema.org/relatedClaimReview relatedClaimReview} would be used on {@link https://schema.org/MediaReview MediaReview}. */
    "schema:associatedMediaReview"?: SchemaValue<Review | IdReference>;
    /** An associated {@link https://schema.org/Review Review}. */
    "schema:associatedReview"?: SchemaValue<Review | IdReference>;
    /** The item that is being reviewed/rated. */
    "schema:itemReviewed"?: SchemaValue<Thing | IdReference>;
    /** Indicates, in the context of a {@link https://schema.org/Review Review} (e.g. framed as 'pro' vs 'con' considerations), negative considerations - either as unstructured text, or a list. */
    "schema:negativeNotes"?: SchemaValue<ItemList | ListItem | Text | WebContent | IdReference>;
    /** Indicates, in the context of a {@link https://schema.org/Review Review} (e.g. framed as 'pro' vs 'con' considerations), positive considerations - either as unstructured text, or a list. */
    "schema:positiveNotes"?: SchemaValue<ItemList | ListItem | Text | WebContent | IdReference>;
    /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
    "schema:reviewAspect"?: SchemaValue<Text>;
    /** The actual body of the review. */
    "schema:reviewBody"?: SchemaValue<Text>;
    /** The rating given in this review. Note that reviews can themselves be rated. The `reviewRating` applies to rating given by the review. The {@link https://schema.org/aggregateRating aggregateRating} property applies to the review itself, as a creative work. */
    "schema:reviewRating"?: SchemaValue<Rating | IdReference>;
}
interface ReviewLeaf extends ReviewBase {
    "@type": "schema:Review";
}
/** A review of an item - for example, of a restaurant, movie, or store. */
export type Review = ReviewLeaf | ClaimReview | CriticReview | EmployerReview | MediaReview | Recommendation | UserReview;

interface ReviewActionBase extends ActionBase {
    /** A sub property of result. The review that resulted in the performing of the action. */
    "schema:resultReview"?: SchemaValue<Review | IdReference>;
}
interface ReviewActionLeaf extends ReviewActionBase {
    "@type": "schema:ReviewAction";
}
/** The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review. */
export type ReviewAction = ReviewActionLeaf;

interface ReviewNewsArticleBase extends ReviewBase, NewsArticleBase {
}
interface ReviewNewsArticleLeaf extends ReviewNewsArticleBase {
    "@type": "schema:ReviewNewsArticle";
}
/** A {@link https://schema.org/NewsArticle NewsArticle} and {@link https://schema.org/CriticReview CriticReview} providing a professional critic's assessment of a service, product, performance, or artistic or literary work. */
export type ReviewNewsArticle = ReviewNewsArticleLeaf;

interface RiverBodyOfWaterLeaf extends PlaceBase {
    "@type": "schema:RiverBodyOfWater";
}
/** A river (for example, the broad majestic Shannon). */
export type RiverBodyOfWater = RiverBodyOfWaterLeaf | string;

interface RoleBase extends ThingBase {
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:endDate"?: SchemaValue<Date | DateTime>;
    /**
     * A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'.
     *
     * @deprecated Consider using https://schema.org/roleName instead.
     */
    "schema:namedPosition"?: SchemaValue<Text | URL | IdReference>;
    /** A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'. */
    "schema:roleName"?: SchemaValue<Text | URL | IdReference>;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:startDate"?: SchemaValue<Date | DateTime>;
}
interface RoleLeaf extends RoleBase {
    "@type": "schema:Role";
}
/**
 * Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.
 *
 * See also {@link http://blog.schema.org/2014/06/introducing-role.html blog post}.
 */
export type Role = RoleLeaf | LinkRole | OrganizationRole | PerformanceRole;

interface RoofingContractorLeaf extends LocalBusinessBase {
    "@type": "schema:RoofingContractor";
}
/** A roofing contractor. */
export type RoofingContractor = RoofingContractorLeaf | string;

interface RoomLeaf extends AccommodationBase {
    "@type": "schema:Room";
}
/**
 * A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Room http://en.wikipedia.org/wiki/Room}).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type Room = RoomLeaf | HotelRoom | MeetingRoom | string;

interface RootContractDataEntityBase extends ThingBase, CreativeWorkBase {
}
interface RootContractDataEntityLeaf extends RootContractDataEntityBase {
    "@type": "camo:RootContractDataEntity";
}
/** A root entity within a contract data semantic pool */
export type RootContractDataEntity = RootContractDataEntityLeaf | ContractActorTable | ContractDateTable | ContractPart | ContractPartTable | MilestoneTable | PaymentStepTable | PercentagePriceSpecification | PlantAndMaterialsTable | PlantMaterialsItem | Subsection;

interface RsvpActionBase extends InformActionBase {
    /** If responding yes, the number of guests who will attend in addition to the invitee. */
    "schema:additionalNumberOfGuests"?: SchemaValue<Number>;
    /** Comments, typically from users. */
    "schema:comment"?: SchemaValue<Comment | IdReference>;
    /** The response (yes, no, maybe) to the RSVP. */
    "schema:rsvpResponse"?: SchemaValue<RsvpResponseType | IdReference>;
}
interface RsvpActionLeaf extends RsvpActionBase {
    "@type": "schema:RsvpAction";
}
/** The act of notifying an event organizer as to whether you expect to attend the event. */
export type RsvpAction = RsvpActionLeaf;

interface RsvpResponseTypeLeaf extends EnumerationBase {
    "@type": "schema:RsvpResponseType";
}
/** RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request. */
export type RsvpResponseType = "https://schema.org/RsvpResponseMaybe" | "schema:RsvpResponseMaybe" | "https://schema.org/RsvpResponseNo" | "schema:RsvpResponseNo" | "https://schema.org/RsvpResponseYes" | "schema:RsvpResponseYes" | RsvpResponseTypeLeaf;

interface RVParkLeaf extends CivicStructureBase {
    "@type": "schema:RVPark";
}
/** A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like. */
export type RVPark = RVParkLeaf | string;

interface SaleEventLeaf extends EventBase {
    "@type": "schema:SaleEvent";
}
/** Event type: Sales event. */
export type SaleEvent = SaleEventLeaf;

interface SalesEntityLeaf extends ThingBase {
    "@type": "coremo:SalesEntity";
}
/** A sales entity. */
export type SalesEntity = SalesEntityLeaf;

interface SalesModelAreaLeaf extends ThingBase {
    "@type": "coremo:SalesModelArea";
}
/** A sales model area. */
export type SalesModelArea = SalesModelAreaLeaf;

interface SatiricalArticleLeaf extends ArticleBase {
    "@type": "schema:SatiricalArticle";
}
/** An {@link https://schema.org/Article Article} whose content is primarily {@link https://schema.org/satirical satirical}(https://en.wikipedia.org/wiki/Satire) in nature, i.e. unlikely to be literally true. A satirical article is sometimes but not necessarily also a {@link https://schema.org/NewsArticle NewsArticle}. {@link https://schema.org/ScholarlyArticle ScholarlyArticle}s are also sometimes satirized. */
export type SatiricalArticle = SatiricalArticleLeaf;

interface ScheduleBase extends ThingBase {
    /** Defines the day(s) of the week on which a recurring {@link https://schema.org/Event Event} takes place. May be specified using either {@link https://schema.org/DayOfWeek DayOfWeek}, or alternatively {@link https://schema.org/Text Text} conforming to iCal's syntax for byDay recurrence rules. */
    "schema:byDay"?: SchemaValue<DayOfWeek | Text | IdReference>;
    /** Defines the month(s) of the year on which a recurring {@link https://schema.org/Event Event} takes place. Specified as an {@link https://schema.org/Integer Integer} between 1-12. January is 1. */
    "schema:byMonth"?: SchemaValue<Integer>;
    /** Defines the day(s) of the month on which a recurring {@link https://schema.org/Event Event} takes place. Specified as an {@link https://schema.org/Integer Integer} between 1-31. */
    "schema:byMonthDay"?: SchemaValue<Integer>;
    /** Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month. */
    "schema:byMonthWeek"?: SchemaValue<Integer>;
    /** The duration of the item (movie, audio recording, event, etc.) in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}. */
    "schema:duration"?: SchemaValue<Duration | IdReference>;
    /** The end date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:endDate"?: SchemaValue<Date | DateTime>;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to _December_. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:endTime"?: SchemaValue<DateTime | Time>;
    /** Defines a {@link https://schema.org/Date Date} or {@link https://schema.org/DateTime DateTime} during which a scheduled {@link https://schema.org/Event Event} will not take place. The property allows exceptions to a {@link https://schema.org/Schedule Schedule} to be specified. If an exception is specified as a {@link https://schema.org/DateTime DateTime} then only the event that would have started at that specific date and time should be excluded from the schedule. If an exception is specified as a {@link https://schema.org/Date Date} then any event that is scheduled for that 24 hour period should be excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event. */
    "schema:exceptDate"?: SchemaValue<Date | DateTime>;
    /** Defines the number of times a recurring {@link https://schema.org/Event Event} will take place */
    "schema:repeatCount"?: SchemaValue<Integer>;
    /** Defines the frequency at which {@link https://schema.org/Event Event}s will occur according to a schedule {@link https://schema.org/Schedule Schedule}. The intervals between events should be defined as a {@link https://schema.org/Duration Duration} of time. */
    "schema:repeatFrequency"?: SchemaValue<Duration | Text | IdReference>;
    /** Indicates the timezone for which the time(s) indicated in the {@link https://schema.org/Schedule Schedule} are given. The value provided should be among those listed in the IANA Time Zone Database. */
    "schema:scheduleTimezone"?: SchemaValue<Text>;
    /** The start date and time of the item (in {@link http://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}). */
    "schema:startDate"?: SchemaValue<Date | DateTime>;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from _January_ to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
     *
     * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    "schema:startTime"?: SchemaValue<DateTime | Time>;
}
interface ScheduleLeaf extends ScheduleBase {
    "@type": "schema:Schedule";
}
/** A schedule defines a repeating time period used to describe a regularly occurring {@link https://schema.org/Event Event}. At a minimum a schedule will specify {@link https://schema.org/repeatFrequency repeatFrequency} which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely. This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also have start and end dates to indicate when they are active, e.g. to define a limited calendar of events. */
export type Schedule = ScheduleLeaf;

interface ScheduleActionLeaf extends PlanActionBase {
    "@type": "schema:ScheduleAction";
}
/**
 * Scheduling future actions, events, or tasks.
 *
 * Related actions:
 * - {@link https://schema.org/ReserveAction ReserveAction}: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
 */
export type ScheduleAction = ScheduleActionLeaf;

interface ScholarlyArticleLeaf extends ArticleBase {
    "@type": "schema:ScholarlyArticle";
}
/** A scholarly article. */
export type ScholarlyArticle = ScholarlyArticleLeaf | MedicalScholarlyArticle;

interface SchoolLeaf extends EducationalOrganizationBase {
    "@type": "schema:School";
}
/** A school. */
export type School = SchoolLeaf | string;

interface SchoolDistrictLeaf extends PlaceBase {
    "@type": "schema:SchoolDistrict";
}
/** A School District is an administrative area for the administration of schools. */
export type SchoolDistrict = SchoolDistrictLeaf | string;

interface ScreeningEventBase extends EventBase {
    /** Languages in which subtitles/captions are available, in {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard format}. */
    "schema:subtitleLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
    "schema:videoFormat"?: SchemaValue<Text>;
    /** The movie presented during this event. */
    "schema:workPresented"?: SchemaValue<Movie | IdReference>;
}
interface ScreeningEventLeaf extends ScreeningEventBase {
    "@type": "schema:ScreeningEvent";
}
/** A screening of a movie or other video. */
export type ScreeningEvent = ScreeningEventLeaf;

interface SculptureLeaf extends CreativeWorkBase {
    "@type": "schema:Sculpture";
}
/** A piece of sculpture. */
export type Sculpture = SculptureLeaf;

interface SeaBodyOfWaterLeaf extends PlaceBase {
    "@type": "schema:SeaBodyOfWater";
}
/** A sea (for example, the Caspian sea). */
export type SeaBodyOfWater = SeaBodyOfWaterLeaf | string;

interface SearchActionBase extends ActionBase {
    /** A sub property of instrument. The query used on this action. */
    "schema:query"?: SchemaValue<Text>;
}
interface SearchActionLeaf extends SearchActionBase {
    "@type": "schema:SearchAction";
}
/**
 * The act of searching for an object.
 *
 * Related actions:
 * - {@link https://schema.org/FindAction FindAction}: SearchAction generally leads to a FindAction, but not necessarily.
 */
export type SearchAction = SearchActionLeaf;

interface SearchResultsPageLeaf extends WebPageBase {
    "@type": "schema:SearchResultsPage";
}
/** Web page type: Search results page. */
export type SearchResultsPage = SearchResultsPageLeaf;

interface SeasonLeaf extends CreativeWorkBase {
    "@type": "schema:Season";
}
/**
 * A media season e.g. tv, radio, video game etc.
 *
 * @deprecated Use CreativeWorkSeason instead.
 */
export type Season = SeasonLeaf;

interface SeatBase extends ThingBase {
    /** The type/class of the seat. */
    "schema:seatingType"?: SchemaValue<QualitativeValue | Text | IdReference>;
    /** The location of the reserved seat (e.g., 27). */
    "schema:seatNumber"?: SchemaValue<Text>;
    /** The row location of the reserved seat (e.g., B). */
    "schema:seatRow"?: SchemaValue<Text>;
    /** The section location of the reserved seat (e.g. Orchestra). */
    "schema:seatSection"?: SchemaValue<Text>;
}
interface SeatLeaf extends SeatBase {
    "@type": "schema:Seat";
}
/** Used to describe a seat, such as a reserved seat in an event reservation. */
export type Seat = SeatLeaf;

interface SectionBase extends ThingBase, NumberedBase {
    /** The variation in which this (sub)section was added (0 for original contract). */
    "camo:addedInVariation"?: SchemaValue<Text>;
    /** The delay damages percentages for this section. */
    "camo:hasDelayDamagesPercentage"?: SchemaValue<Number>;
    /** A subsection that is part of a section. */
    "camo:hasSubsection"?: SchemaValue<Subsection | IdReference>;
    /** Defines a contract part this section/subsection is included within (for a section, applies to all of its subsubsections which themselves do not have this property defined). */
    "camo:includedInContractPart"?: SchemaValue<ContractPart | IdReference>;
    /** Whether to allow plant and materials payment when delivered. */
    "camo:plantAndMaterialsPaymentWhenDelivered"?: SchemaValue<Boolean>;
    /** Whether to allow plant and materials payment when shipped. */
    "camo:plantAndMaterialsPaymentWhenShipped"?: SchemaValue<Boolean>;
    /** The variation in which this (sub)section was removed. */
    "camo:removedInVariation"?: SchemaValue<Text>;
    /** The number of days for time for completion for this section. */
    "camo:sectionTimeForCompletion"?: SchemaValue<Number>;
}
interface SectionLeaf extends SectionBase {
    "@type": "camo:Section";
}
/** A section within a contract. */
export type Section = SectionLeaf;

interface SectionPaymentDescriptionBase extends ThingBase {
    /** Attaches a CustomsAndImportDutiesTable to its section payment description. */
    "camo:hasCustomsAndImportDutiesTable"?: SchemaValue<CustomsAndImportDutiesTable | IdReference>;
    /** Attaches a subsection payment description description to its section payment description. */
    "camo:hasSubsectionPaymentDescriptionDescription"?: SchemaValue<SubsectionPaymentDescriptionDescription | IdReference>;
    /** The payment percentage, can be attached to a SectionPaymentDescription or a SubsectionPaymentDescriptionDescription). */
    "camo:paymentPercentage"?: SchemaValue<Number>;
    /** The section number related to a payment. */
    "camo:sectionNumber"?: SchemaValue<Text>;
    /** Identifies what kind of SectionPaymentDescription this is (useful for specialist SectionPaymentDescription, maps to layout in Contract Layout). */
    "camo:sectionPaymentDescriptionKind"?: SchemaValue<URL | IdReference>;
}
interface SectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:SectionPaymentDescription";
}
/** A payment that is directly related to a specific section of a contract payment description. */
export type SectionPaymentDescription = SectionPaymentDescriptionLeaf | AdvanceSectionPaymentDescription | ApplyAndCollectDamagesSectionPaymentDescription | ApplyDamagesSectionPaymentDescription | CollectDamagesSectionPaymentDescription | CustomsandImportDutiesSectionPaymentDescription | DiversionSectionPaymentDescription | FinalSectionPaymentDescription | InterimSectionPaymentDescription | PlantAndMaterialsDeliveredSectionPaymentDescription | PlantAndMaterialsShippedSectionPaymentDescription | RecoveryOfExcessAdvancePaymentSectionPaymentDescription | RecoveryOfExcessRegularPaymentSectionPaymentDescription | TakingOverSectionPaymentDescription;

interface SectionTableBase extends ThingBase {
    /** A section that is part of a contract. */
    "camo:hasSection"?: SchemaValue<Section | IdReference>;
}
interface SectionTableLeaf extends SectionTableBase {
    "@type": "camo:SectionTable";
}
/** Represents section contract data. */
export type SectionTable = SectionTableLeaf;

interface SeekToActionBase extends ActionBase {
    /** The start time of the clip expressed as the number of seconds from the beginning of the work. */
    "schema:startOffset"?: SchemaValue<HyperTocEntry | Number | IdReference>;
}
interface SeekToActionLeaf extends SeekToActionBase {
    "@type": "schema:SeekToAction";
}
/** This is the {@link https://schema.org/Action Action} of navigating to a specific {@link https://schema.org/startOffset startOffset} timestamp within a {@link https://schema.org/VideoObject VideoObject}, typically represented with a URL template structure. */
export type SeekToAction = SeekToActionLeaf;

interface SelfStorageLeaf extends LocalBusinessBase {
    "@type": "schema:SelfStorage";
}
/** A self-storage facility. */
export type SelfStorage = SelfStorageLeaf | string;

interface SellActionBase extends TradeActionBase {
    /** A sub property of participant. The participant/person/organization that bought the object. */
    "schema:buyer"?: SchemaValue<Organization | Person | IdReference>;
    /**
     * The warranty promise(s) included in the offer.
     *
     * @deprecated Consider using https://schema.org/warranty instead.
     */
    "schema:warrantyPromise"?: SchemaValue<WarrantyPromise | IdReference>;
}
interface SellActionLeaf extends SellActionBase {
    "@type": "schema:SellAction";
}
/** The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction. */
export type SellAction = SellActionLeaf;

interface SemanticModelLeaf extends CreativeWorkBase {
    "@type": "coremo:SemanticModel";
}
/** A semantic model. */
export type SemanticModel = SemanticModelLeaf | ContractModel;

interface SemanticModelAreaLeaf extends ThingBase {
    "@type": "coremo:SemanticModelArea";
}
/** A semantic model area (from which more specialist semantic model areas may be derived) - semantic models are associated with model areas. */
export type SemanticModelArea = SemanticModelAreaLeaf | CommunicationModelArea | CorporateModelArea | MathematicalModelArea | OperationsModelArea | SalesModelArea | ServicesModelArea | TechnologyModelArea;

interface SemanticPoolLeaf extends CreativeWorkBase {
    "@type": "coremo:SemanticPool";
}
/** A pool of semantic resources that manages a somewhat self-contained representation of an area of interest. */
export type SemanticPool = SemanticPoolLeaf | ContractSemanticPool;

interface SemanticRootLeaf extends CreativeWorkBase {
    "@type": "coremo:SemanticRoot";
}
/** A resource that can act as a root (directly attached to a semantic pool) */
export type SemanticRoot = SemanticRootLeaf | RootContractDataEntity;

interface SendActionBase extends TransferActionBase {
    /** A sub property of instrument. The method of delivery. */
    "schema:deliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface SendActionLeaf extends SendActionBase {
    "@type": "schema:SendAction";
}
/**
 * The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:
 * - {@link https://schema.org/ReceiveAction ReceiveAction}: The reciprocal of SendAction.
 * - {@link https://schema.org/GiveAction GiveAction}: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 */
export type SendAction = SendActionLeaf;

interface SeriesLeaf extends ThingBase {
    "@type": "schema:Series";
}
/** A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also {@link https://schema.org/CreativeWorkSeries CreativeWorkSeries}, {@link https://schema.org/EventSeries EventSeries}. */
export type Series = SeriesLeaf | CreativeWorkSeries | EventSeries;

interface ServiceBase extends ThingBase {
    /** The overall rating, based on a collection of reviews or ratings, of the item. */
    "schema:aggregateRating"?: SchemaValue<AggregateRating | IdReference>;
    /** The geographic area where a service or offered item is provided. */
    "schema:areaServed"?: SchemaValue<AdministrativeArea | GeoShape | Place | Text | IdReference>;
    /** An intended audience, i.e. a group for whom something was created. */
    "schema:audience"?: SchemaValue<Audience | IdReference>;
    /** A means of accessing the service (e.g. a phone bank, a web site, a location, etc.). */
    "schema:availableChannel"?: SchemaValue<ServiceChannel | IdReference>;
    /** An award won by or for this item. */
    "schema:award"?: SchemaValue<Text>;
    /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
    "schema:brand"?: SchemaValue<Brand | Organization | IdReference>;
    /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
    "schema:broker"?: SchemaValue<Organization | Person | IdReference>;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "schema:category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference>;
    /** Indicates an OfferCatalog listing for this Organization, Person, or Service. */
    "schema:hasOfferCatalog"?: SchemaValue<OfferCatalog | IdReference>;
    /** The hours during which this service or contact is available. */
    "schema:hoursAvailable"?: SchemaValue<OpeningHoursSpecification | IdReference>;
    /** A pointer to another, somehow related product (or multiple products). */
    "schema:isRelatedTo"?: SchemaValue<Product | Service | IdReference>;
    /** A pointer to another, functionally similar product (or multiple products). */
    "schema:isSimilarTo"?: SchemaValue<Product | Service | IdReference>;
    /** An associated logo. */
    "schema:logo"?: SchemaValue<ImageObject | URL | IdReference>;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:offers"?: SchemaValue<Demand | Offer | IdReference>;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     *
     * @deprecated Consider using https://schema.org/serviceOutput instead.
     */
    "schema:produces"?: SchemaValue<Thing | IdReference>;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "schema:provider"?: SchemaValue<Organization | Person | IdReference>;
    /** Indicates the mobility of a provided service (e.g. 'static', 'dynamic'). */
    "schema:providerMobility"?: SchemaValue<Text>;
    /** A review of the item. */
    "schema:review"?: SchemaValue<Review | IdReference>;
    /**
     * The geographic area where the service is provided.
     *
     * @deprecated Consider using https://schema.org/areaServed instead.
     */
    "schema:serviceArea"?: SchemaValue<AdministrativeArea | GeoShape | Place | IdReference>;
    /**
     * The audience eligible for this service.
     *
     * @deprecated Consider using https://schema.org/audience instead.
     */
    "schema:serviceAudience"?: SchemaValue<Audience | IdReference>;
    /** The tangible thing generated by the service, e.g. a passport, permit, etc. */
    "schema:serviceOutput"?: SchemaValue<Thing | IdReference>;
    /** The type of service being offered, e.g. veterans' benefits, emergency relief, etc. */
    "schema:serviceType"?: SchemaValue<GovernmentBenefitsType | Text | IdReference>;
    /** A slogan or motto associated with the item. */
    "schema:slogan"?: SchemaValue<Text>;
    /** Human-readable terms of service documentation. */
    "schema:termsOfService"?: SchemaValue<Text | URL | IdReference>;
}
interface ServiceLeaf extends ServiceBase {
    "@type": "schema:Service";
}
/** A service provided by an organization, e.g. delivery service, print services, etc. */
export type Service = ServiceLeaf | BroadcastService | CableOrSatelliteService | FinancialProduct | FoodService | GovernmentService | Taxi | TaxiService | WebAPI;

interface ServiceChannelBase extends ThingBase {
    /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/inLanguage inLanguage} */
    "schema:availableLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** Estimated processing time for the service using this channel. */
    "schema:processingTime"?: SchemaValue<Duration | IdReference>;
    /** The service provided by this channel. */
    "schema:providesService"?: SchemaValue<Service | IdReference>;
    /** The location (e.g. civic structure, local business, etc.) where a person can go to access the service. */
    "schema:serviceLocation"?: SchemaValue<Place | IdReference>;
    /** The phone number to use to access the service. */
    "schema:servicePhone"?: SchemaValue<ContactPoint | IdReference>;
    /** The address for accessing the service by mail. */
    "schema:servicePostalAddress"?: SchemaValue<PostalAddress | IdReference>;
    /** The number to access the service by text message. */
    "schema:serviceSmsNumber"?: SchemaValue<ContactPoint | IdReference>;
    /** The website to access the service. */
    "schema:serviceUrl"?: SchemaValue<URL | IdReference>;
}
interface ServiceChannelLeaf extends ServiceChannelBase {
    "@type": "schema:ServiceChannel";
}
/** A means for accessing a service, e.g. a government office location, web site, or phone number. */
export type ServiceChannel = ServiceChannelLeaf;

interface ServicesEntityLeaf extends ThingBase {
    "@type": "coremo:ServicesEntity";
}
/** A services entity. */
export type ServicesEntity = ServicesEntityLeaf;

interface ServicesModelAreaLeaf extends ThingBase {
    "@type": "coremo:ServicesModelArea";
}
/** A services model area. */
export type ServicesModelArea = ServicesModelAreaLeaf;

interface ShareActionLeaf extends CommunicateActionBase {
    "@type": "schema:ShareAction";
}
/** The act of distributing content to people for their amusement or edification. */
export type ShareAction = ShareActionLeaf;

interface SheetMusicLeaf extends CreativeWorkBase {
    "@type": "schema:SheetMusic";
}
/** Printed music, as opposed to performed or recorded music. */
export type SheetMusic = SheetMusicLeaf;

interface ShippingDeliveryTimeBase extends ThingBase {
    /** Days of the week when the merchant typically operates, indicated via opening hours markup. */
    "schema:businessDays"?: SchemaValue<OpeningHoursSpecification | IdReference>;
    /** Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the {@link https://schema.org/ShippingRateSettings ShippingRateSettings} publication pattern. The time is indicated using the ISO-8601 Time format, e.g. "23:30:00-05:00" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC). */
    "schema:cutoffTime"?: SchemaValue<Time>;
    /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. Typical properties: minValue, maxValue, unitCode (d for DAY). This is by common convention assumed to mean business days (if a unitCode is used, coded as "d"), i.e. only counting days when the business normally operates. */
    "schema:handlingTime"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The typical delay the order has been sent for delivery and the goods reach the final customer. Typical properties: minValue, maxValue, unitCode (d for DAY). */
    "schema:transitTime"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface ShippingDeliveryTimeLeaf extends ShippingDeliveryTimeBase {
    "@type": "schema:ShippingDeliveryTime";
}
/** ShippingDeliveryTime provides various pieces of information about delivery times for shipping. */
export type ShippingDeliveryTime = ShippingDeliveryTimeLeaf;

interface ShippingRateSettingsBase extends ThingBase {
    /** Indicates when shipping to a particular {@link https://schema.org/shippingDestination shippingDestination} is not available. */
    "schema:doesNotShip"?: SchemaValue<Boolean>;
    /** A monetary value above which (or equal to) the shipping rate becomes free. Intended to be used via an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with {@link https://schema.org/shippingSettingsLink shippingSettingsLink} matching this {@link https://schema.org/ShippingRateSettings ShippingRateSettings}. */
    "schema:freeShippingThreshold"?: SchemaValue<DeliveryChargeSpecification | MonetaryAmount | IdReference>;
    /** This can be marked 'true' to indicate that some published {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings} or {@link https://schema.org/ShippingRateSettings ShippingRateSettings} are intended to apply to all {@link https://schema.org/OfferShippingDetails OfferShippingDetails} published by the same merchant, when referenced by a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for {@link https://schema.org/DeliveryTimeSettings DeliveryTimeSettings}) or shippingLabel (for {@link https://schema.org/ShippingRateSettings ShippingRateSettings}), since this property is for use with unlabelled settings. */
    "schema:isUnlabelledFallback"?: SchemaValue<Boolean>;
    /** indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges. */
    "schema:shippingDestination"?: SchemaValue<DefinedRegion | IdReference>;
    /** Label to match an {@link https://schema.org/OfferShippingDetails OfferShippingDetails} with a {@link https://schema.org/ShippingRateSettings ShippingRateSettings} (within the context of a {@link https://schema.org/shippingSettingsLink shippingSettingsLink} cross-reference). */
    "schema:shippingLabel"?: SchemaValue<Text>;
    /** The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the {@link https://schema.org/MonetaryAmount MonetaryAmount}) are most appropriate. */
    "schema:shippingRate"?: SchemaValue<MonetaryAmount | IdReference>;
}
interface ShippingRateSettingsLeaf extends ShippingRateSettingsBase {
    "@type": "schema:ShippingRateSettings";
}
/** A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the {@link https://schema.org/shippingSettingsLink shippingSettingsLink} property of an {@link https://schema.org/OfferShippingDetails OfferShippingDetails}. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for {@link https://schema.org/shippingLabel shippingLabel}. */
export type ShippingRateSettings = ShippingRateSettingsLeaf;

interface ShoeStoreLeaf extends LocalBusinessBase {
    "@type": "schema:ShoeStore";
}
/** A shoe store. */
export type ShoeStore = ShoeStoreLeaf | string;

interface ShoppingCenterLeaf extends LocalBusinessBase {
    "@type": "schema:ShoppingCenter";
}
/** A shopping center or mall. */
export type ShoppingCenter = ShoppingCenterLeaf | string;

interface ShortStoryLeaf extends CreativeWorkBase {
    "@type": "schema:ShortStory";
}
/** Short story or tale. A brief work of literature, usually written in narrative prose. */
export type ShortStory = ShortStoryLeaf;

interface SingleFamilyResidenceBase extends HouseBase {
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "schema:numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person). Typical unit code(s): C62 for person */
    "schema:occupancy"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface SingleFamilyResidenceLeaf extends SingleFamilyResidenceBase {
    "@type": "schema:SingleFamilyResidence";
}
/** Residence type: Single-family home. */
export type SingleFamilyResidence = SingleFamilyResidenceLeaf | string;

interface SiteNavigationElementLeaf extends WebPageElementBase {
    "@type": "schema:SiteNavigationElement";
}
/** A navigation element of the page. */
export type SiteNavigationElement = SiteNavigationElementLeaf;

interface SizeGroupEnumerationLeaf extends EnumerationBase {
    "@type": "schema:SizeGroupEnumeration";
}
/** Enumerates common size groups for various product categories. */
export type SizeGroupEnumeration = SizeGroupEnumerationLeaf | WearableSizeGroupEnumeration;

interface SizeSpecificationBase extends QualitativeValueBase {
    /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
    "schema:hasMeasurement"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular" */
    "schema:sizeGroup"?: SchemaValue<SizeGroupEnumeration | Text | IdReference>;
    /** The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial"). */
    "schema:sizeSystem"?: SchemaValue<SizeSystemEnumeration | Text | IdReference>;
    /** The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers. */
    "schema:suggestedAge"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The suggested gender of the intended person or audience, for example "male", "female", or "unisex". */
    "schema:suggestedGender"?: SchemaValue<GenderType | Text | IdReference>;
    /** A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products. */
    "schema:suggestedMeasurement"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface SizeSpecificationLeaf extends SizeSpecificationBase {
    "@type": "schema:SizeSpecification";
}
/** Size related properties of a product, typically a size code ({@link https://schema.org/name name}) and optionally a {@link https://schema.org/sizeSystem sizeSystem}, {@link https://schema.org/sizeGroup sizeGroup}, and product measurements ({@link https://schema.org/hasMeasurement hasMeasurement}). In addition, the intended audience can be defined through {@link https://schema.org/suggestedAge suggestedAge}, {@link https://schema.org/suggestedGender suggestedGender}, and suggested body measurements ({@link https://schema.org/suggestedMeasurement suggestedMeasurement}). */
export type SizeSpecification = SizeSpecificationLeaf;

interface SizeSystemEnumerationLeaf extends EnumerationBase {
    "@type": "schema:SizeSystemEnumeration";
}
/** Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws. */
export type SizeSystemEnumeration = "https://schema.org/SizeSystemImperial" | "schema:SizeSystemImperial" | "https://schema.org/SizeSystemMetric" | "schema:SizeSystemMetric" | SizeSystemEnumerationLeaf | WearableSizeSystemEnumeration;

interface SkiResortBase extends LodgingBusinessBase, LocalBusinessBase {
}
interface SkiResortLeaf extends SkiResortBase {
    "@type": "schema:SkiResort";
}
/** A ski resort. */
export type SkiResort = SkiResortLeaf | string;

interface SocialEventLeaf extends EventBase {
    "@type": "schema:SocialEvent";
}
/** Event type: Social event. */
export type SocialEvent = SocialEventLeaf;

interface SocialMediaPostingBase extends ArticleBase {
    /** A CreativeWork such as an image, video, or audio clip shared as part of this posting. */
    "schema:sharedContent"?: SchemaValue<CreativeWork | IdReference>;
}
interface SocialMediaPostingLeaf extends SocialMediaPostingBase {
    "@type": "schema:SocialMediaPosting";
}
/** A post to a social media platform, including blog posts, tweets, Facebook posts, etc. */
export type SocialMediaPosting = SocialMediaPostingLeaf | BlogPosting | DiscussionForumPosting;

interface SoftwareApplicationBase extends CreativeWorkBase {
    /** Type of software application, e.g. 'Game, Multimedia'. */
    "schema:applicationCategory"?: SchemaValue<Text | URL | IdReference>;
    /** Subcategory of the application, e.g. 'Arcade Game'. */
    "schema:applicationSubCategory"?: SchemaValue<Text | URL | IdReference>;
    /** The name of the application suite to which the application belongs (e.g. Excel belongs to Office). */
    "schema:applicationSuite"?: SchemaValue<Text>;
    /** Device required to run the application. Used in cases where a specific make/model is required to run the application. */
    "schema:availableOnDevice"?: SchemaValue<Text>;
    /** Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. */
    "schema:countriesNotSupported"?: SchemaValue<Text>;
    /** Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code. */
    "schema:countriesSupported"?: SchemaValue<Text>;
    /**
     * Device required to run the application. Used in cases where a specific make/model is required to run the application.
     *
     * @deprecated Consider using https://schema.org/availableOnDevice instead.
     */
    "schema:device"?: SchemaValue<Text>;
    /** If the file can be downloaded, URL to download the binary. */
    "schema:downloadUrl"?: SchemaValue<URL | IdReference>;
    /** Features or modules provided by this application (and possibly required by other applications). */
    "schema:featureList"?: SchemaValue<Text | URL | IdReference>;
    /** Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed. */
    "schema:fileSize"?: SchemaValue<Text>;
    /** URL at which the app may be installed, if different from the URL of the item. */
    "schema:installUrl"?: SchemaValue<URL | IdReference>;
    /** Minimum memory requirements. */
    "schema:memoryRequirements"?: SchemaValue<Text | URL | IdReference>;
    /** Operating systems supported (Windows 7, OSX 10.6, Android 1.6). */
    "schema:operatingSystem"?: SchemaValue<Text>;
    /** Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi). */
    "schema:permissions"?: SchemaValue<Text>;
    /** Processor architecture required to run the application (e.g. IA64). */
    "schema:processorRequirements"?: SchemaValue<Text>;
    /** Description of what changed in this version. */
    "schema:releaseNotes"?: SchemaValue<Text | URL | IdReference>;
    /**
     * Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
     *
     * @deprecated Consider using https://schema.org/softwareRequirements instead.
     */
    "schema:requirements"?: SchemaValue<Text | URL | IdReference>;
    /** A link to a screenshot image of the app. */
    "schema:screenshot"?: SchemaValue<ImageObject | URL | IdReference>;
    /** Additional content for a software application. */
    "schema:softwareAddOn"?: SchemaValue<SoftwareApplication | IdReference>;
    /** Software application help. */
    "schema:softwareHelp"?: SchemaValue<CreativeWork | IdReference>;
    /** Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime). */
    "schema:softwareRequirements"?: SchemaValue<Text | URL | IdReference>;
    /** Version of the software instance. */
    "schema:softwareVersion"?: SchemaValue<Text>;
    /** Storage requirements (free space required). */
    "schema:storageRequirements"?: SchemaValue<Text | URL | IdReference>;
    /** Supporting data for a SoftwareApplication. */
    "schema:supportingData"?: SchemaValue<DataFeed | IdReference>;
}
interface SoftwareApplicationLeaf extends SoftwareApplicationBase {
    "@type": "schema:SoftwareApplication";
}
/** A software application. */
export type SoftwareApplication = SoftwareApplicationLeaf | MobileApplication | VideoGame | WebApplication;

interface SoftwareSourceCodeBase extends CreativeWorkBase {
    /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). */
    "schema:codeRepository"?: SchemaValue<URL | IdReference>;
    /** What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template. */
    "schema:codeSampleType"?: SchemaValue<Text>;
    /** The computer programming language. */
    "schema:programmingLanguage"?: SchemaValue<ComputerLanguage | Text | IdReference>;
    /**
     * Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).
     *
     * @deprecated Consider using https://schema.org/runtimePlatform instead.
     */
    "schema:runtime"?: SchemaValue<Text>;
    /** Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0). */
    "schema:runtimePlatform"?: SchemaValue<Text>;
    /**
     * What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
     *
     * @deprecated Consider using https://schema.org/codeSampleType instead.
     */
    "schema:sampleType"?: SchemaValue<Text>;
    /** Target Operating System / Product to which the code applies. If applies to several versions, just the product name can be used. */
    "schema:targetProduct"?: SchemaValue<SoftwareApplication | IdReference>;
}
interface SoftwareSourceCodeLeaf extends SoftwareSourceCodeBase {
    "@type": "schema:SoftwareSourceCode";
}
/** Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates. */
export type SoftwareSourceCode = SoftwareSourceCodeLeaf;

interface SolveMathActionBase extends ActionBase {
    /** For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard". */
    "schema:eduQuestionType"?: SchemaValue<Text>;
}
interface SolveMathActionLeaf extends SolveMathActionBase {
    "@type": "schema:SolveMathAction";
}
/** The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression. */
export type SolveMathAction = SolveMathActionLeaf;

interface SomeProductsBase extends ProductBase {
    /** The current approximate inventory level for the item or items. */
    "schema:inventoryLevel"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface SomeProductsLeaf extends SomeProductsBase {
    "@type": "schema:SomeProducts";
}
/** A placeholder for multiple similar products of the same kind. */
export type SomeProducts = SomeProductsLeaf;

interface SpaceMathematicalEntityLeaf extends ThingBase {
    "@type": "coremo:SpaceMathematicalEntity";
}
/** A mathematical space entity. */
export type SpaceMathematicalEntity = SpaceMathematicalEntityLeaf;

interface SpaceMathematicalModelAreaLeaf extends ThingBase {
    "@type": "coremo:SpaceMathematicalModelArea";
}
/** A space mathematical model area. */
export type SpaceMathematicalModelArea = SpaceMathematicalModelAreaLeaf;

interface SpeakableSpecificationBase extends ThingBase {
    /** A CSS selector, e.g. of a {@link https://schema.org/SpeakableSpecification SpeakableSpecification} or {@link https://schema.org/WebPageElement WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
    "schema:cssSelector"?: SchemaValue<CssSelectorType>;
    /** An XPath, e.g. of a {@link https://schema.org/SpeakableSpecification SpeakableSpecification} or {@link https://schema.org/WebPageElement WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
    "schema:xpath"?: SchemaValue<XPathType>;
}
interface SpeakableSpecificationLeaf extends SpeakableSpecificationBase {
    "@type": "schema:SpeakableSpecification";
}
/** A SpeakableSpecification indicates (typically via {@link https://schema.org/xpath xpath} or {@link https://schema.org/cssSelector cssSelector}) sections of a document that are highlighted as particularly {@link https://schema.org/speakable speakable}. Instances of this type are expected to be used primarily as values of the {@link https://schema.org/speakable speakable} property. */
export type SpeakableSpecification = SpeakableSpecificationLeaf;

interface SpecialAnnouncementBase extends CreativeWorkBase {
    /** Indicates a specific {@link https://schema.org/CivicStructure CivicStructure} or {@link https://schema.org/LocalBusiness LocalBusiness} associated with the SpecialAnnouncement. For example, a specific testing facility or business with special opening hours. For a larger geographic region like a quarantine of an entire region, use {@link https://schema.org/spatialCoverage spatialCoverage}. */
    "schema:announcementLocation"?: SchemaValue<CivicStructure | LocalBusiness | IdReference>;
    /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
    "schema:category"?: SchemaValue<PhysicalActivityCategory | Text | Thing | URL | IdReference>;
    /** Publication date of an online listing. */
    "schema:datePosted"?: SchemaValue<Date | DateTime>;
    /** Information about disease prevention. */
    "schema:diseasePreventionInfo"?: SchemaValue<URL | WebContent | IdReference>;
    /** Statistical information about the spread of a disease, either as {@link https://schema.org/WebContent WebContent}, or described directly as a {@link https://schema.org/Dataset Dataset}, or the specific {@link https://schema.org/Observation Observation}s in the dataset. When a {@link https://schema.org/WebContent WebContent} URL is provided, the page indicated might also contain more such markup. */
    "schema:diseaseSpreadStatistics"?: SchemaValue<Dataset | Observation | URL | WebContent | IdReference>;
    /** Information about getting tested (for a {@link https://schema.org/MedicalCondition MedicalCondition}), e.g. in the context of a pandemic. */
    "schema:gettingTestedInfo"?: SchemaValue<URL | WebContent | IdReference>;
    /** governmentBenefitsInfo provides information about government benefits associated with a SpecialAnnouncement. */
    "schema:governmentBenefitsInfo"?: SchemaValue<GovernmentService | IdReference>;
    /** Indicates a page with news updates and guidelines. This could often be (but is not required to be) the main page containing {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement} markup on a site. */
    "schema:newsUpdatesAndGuidelines"?: SchemaValue<URL | WebContent | IdReference>;
    /** Information about public transport closures. */
    "schema:publicTransportClosuresInfo"?: SchemaValue<URL | WebContent | IdReference>;
    /** Guidelines about quarantine rules, e.g. in the context of a pandemic. */
    "schema:quarantineGuidelines"?: SchemaValue<URL | WebContent | IdReference>;
    /** Information about school closures. */
    "schema:schoolClosuresInfo"?: SchemaValue<URL | WebContent | IdReference>;
    /** Information about travel bans, e.g. in the context of a pandemic. */
    "schema:travelBans"?: SchemaValue<URL | WebContent | IdReference>;
    /** The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom. */
    "schema:webFeed"?: SchemaValue<DataFeed | URL | IdReference>;
}
interface SpecialAnnouncementLeaf extends SpecialAnnouncementBase {
    "@type": "schema:SpecialAnnouncement";
}
/**
 * A SpecialAnnouncement combines a simple date-stamped textual information update with contextualized Web links and other structured data. It represents an information update made by a locally-oriented organization, for example schools, pharmacies, healthcare providers, community groups, police, local government.
 *
 * For work in progress guidelines on Coronavirus-related markup see {@link https://docs.google.com/document/d/14ikaGCKxo50rRM7nvKSlbUpjyIk2WMQd3IkB1lItlrM/edit# this doc}.
 *
 * The motivating scenario for SpecialAnnouncement is the {@link https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic Coronavirus pandemic}, and the initial vocabulary is oriented to this urgent situation. Schema.org expect to improve the markup iteratively as it is deployed and as feedback emerges from use. In addition to our usual {@link https://github.com/schemaorg/schemaorg/issues/2490 Github entry}, feedback comments can also be provided in {@link https://docs.google.com/document/d/1fpdFFxk8s87CWwACs53SGkYv3aafSxz_DTtOQxMrBJQ/edit# this document}.
 *
 * While this schema is designed to communicate urgent crisis-related information, it is not the same as an emergency warning technology like {@link https://en.wikipedia.org/wiki/Common_Alerting_Protocol CAP}, although there may be overlaps. The intent is to cover the kinds of everyday practical information being posted to existing websites during an emergency situation.
 *
 * Several kinds of information can be provided:
 *
 * We encourage the provision of "name", "text", "datePosted", "expires" (if appropriate), "category" and "url" as a simple baseline. It is important to provide a value for "category" where possible, most ideally as a well known URL from Wikipedia or Wikidata. In the case of the 2019-2020 Coronavirus pandemic, this should be "https://en.wikipedia.org/w/index.php?title=2019-20\_coronavirus\_pandemic" or "https://www.wikidata.org/wiki/Q81068910".
 *
 * For many of the possible properties, values can either be simple links or an inline description, depending on whether a summary is available. For a link, provide just the URL of the appropriate page as the property's value. For an inline description, use a {@link https://schema.org/WebContent WebContent} type, and provide the url as a property of that, alongside at least a simple "{@link https://schema.org/text text}" summary of the page. It is unlikely that a single SpecialAnnouncement will need all of the possible properties simultaneously.
 *
 * We expect that in many cases the page referenced might contain more specialized structured data, e.g. contact info, {@link https://schema.org/openingHours openingHours}, {@link https://schema.org/Event Event}, {@link https://schema.org/FAQPage FAQPage} etc. By linking to those pages from a {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement} you can help make it clearer that the events are related to the situation (e.g. Coronavirus) indicated by the {@link https://schema.org/category category} property of the {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement}.
 *
 * Many {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement}s will relate to particular regions and to identifiable local organizations. Use {@link https://schema.org/spatialCoverage spatialCoverage} for the region, and {@link https://schema.org/announcementLocation announcementLocation} to indicate specific {@link https://schema.org/LocalBusiness LocalBusiness}es and {@link https://schema.org/CivicStructure CivicStructure}s. If the announcement affects both a particular region and a specific location (for example, a library closure that serves an entire region), use both {@link https://schema.org/spatialCoverage spatialCoverage} and {@link https://schema.org/announcementLocation announcementLocation}.
 *
 * The {@link https://schema.org/about about} property can be used to indicate entities that are the focus of the announcement. We now recommend using {@link https://schema.org/about about} only for representing non-location entities (e.g. a {@link https://schema.org/Course Course} or a {@link https://schema.org/RadioStation RadioStation}). For places, use {@link https://schema.org/announcementLocation announcementLocation} and {@link https://schema.org/spatialCoverage spatialCoverage}. Consumers of this markup should be aware that the initial design encouraged the use of /about for locations too.
 *
 * The basic content of {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement} is similar to that of an {@link https://en.wikipedia.org/wiki/RSS RSS} or {@link https://en.wikipedia.org/wiki/Atom_(Web_standard) Atom} feed. For publishers without such feeds, basic feed-like information can be shared by posting {@link https://schema.org/SpecialAnnouncement SpecialAnnouncement} updates in a page, e.g. using JSON-LD. For sites with Atom/RSS functionality, you can point to a feed with the {@link https://schema.org/webFeed webFeed} property. This can be a simple URL, or an inline {@link https://schema.org/DataFeed DataFeed} object, with {@link https://schema.org/encodingFormat encodingFormat} providing media type information e.g. "application/rss+xml" or "application/atom+xml".
 */
export type SpecialAnnouncement = SpecialAnnouncementLeaf;

interface SpecialtyLeaf extends EnumerationBase {
    "@type": "schema:Specialty";
}
/** Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort. */
export type Specialty = SpecialtyLeaf | MedicalSpecialty;

interface SportingGoodsStoreLeaf extends LocalBusinessBase {
    "@type": "schema:SportingGoodsStore";
}
/** A sporting goods store. */
export type SportingGoodsStore = SportingGoodsStoreLeaf | string;

interface SportsActivityLocationLeaf extends LocalBusinessBase {
    "@type": "schema:SportsActivityLocation";
}
/** A sports location, such as a playing field. */
export type SportsActivityLocation = SportsActivityLocationLeaf | BowlingAlley | ExerciseGym | GolfCourse | HealthClub | PublicSwimmingPool | SkiResort | SportsClub | StadiumOrArena | TennisComplex | string;

interface SportsClubLeaf extends LocalBusinessBase {
    "@type": "schema:SportsClub";
}
/** A sports club. */
export type SportsClub = SportsClubLeaf | string;

interface SportsEventBase extends EventBase {
    /** The away team in a sports event. */
    "schema:awayTeam"?: SchemaValue<Person | SportsTeam | IdReference>;
    /** A competitor in a sports event. */
    "schema:competitor"?: SchemaValue<Person | SportsTeam | IdReference>;
    /** The home team in a sports event. */
    "schema:homeTeam"?: SchemaValue<Person | SportsTeam | IdReference>;
    /** A type of sport (e.g. Baseball). */
    "schema:sport"?: SchemaValue<Text | URL | IdReference>;
}
interface SportsEventLeaf extends SportsEventBase {
    "@type": "schema:SportsEvent";
}
/** Event type: Sports event. */
export type SportsEvent = SportsEventLeaf;

interface SportsOrganizationBase extends OrganizationBase {
    /** A type of sport (e.g. Baseball). */
    "schema:sport"?: SchemaValue<Text | URL | IdReference>;
}
interface SportsOrganizationLeaf extends SportsOrganizationBase {
    "@type": "schema:SportsOrganization";
}
/** Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations. */
export type SportsOrganization = SportsOrganizationLeaf | SportsTeam | string;

interface SportsTeamBase extends SportsOrganizationBase {
    /** A person that acts as performing member of a sports team; a player as opposed to a coach. */
    "schema:athlete"?: SchemaValue<Person | IdReference>;
    /** A person that acts in a coaching role for a sports team. */
    "schema:coach"?: SchemaValue<Person | IdReference>;
    /** Gender of something, typically a {@link https://schema.org/Person Person}, but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The {@link https://schema.org/gender gender} property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender {@link https://schema.org/SportsTeam SportsTeam} can be indicated with a text value of "Mixed". */
    "schema:gender"?: SchemaValue<GenderType | Text | IdReference>;
}
interface SportsTeamLeaf extends SportsTeamBase {
    "@type": "schema:SportsTeam";
}
/** Organization: Sports team. */
export type SportsTeam = SportsTeamLeaf | string;

interface SpreadsheetDigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "schema:SpreadsheetDigitalDocument";
}
/** A spreadsheet file. */
export type SpreadsheetDigitalDocument = SpreadsheetDigitalDocumentLeaf;

interface StadiumOrArenaBase extends LocalBusinessBase, CivicStructureBase {
}
interface StadiumOrArenaLeaf extends StadiumOrArenaBase {
    "@type": "schema:StadiumOrArena";
}
/** A stadium. */
export type StadiumOrArena = StadiumOrArenaLeaf | string;

interface StateLeaf extends PlaceBase {
    "@type": "schema:State";
}
/** A state or province of a country. */
export type State = StateLeaf | string;

interface StatementLeaf extends CreativeWorkBase {
    "@type": "schema:Statement";
}
/** A statement about something, for example a fun or interesting fact. If known, the main entity this statement is about, can be indicated using mainEntity. For more formal claims (e.g. in Fact Checking), consider using {@link https://schema.org/Claim Claim} instead. Use the {@link https://schema.org/text text} property to capture the text of the statement. */
export type Statement = StatementLeaf;

interface StatisticalPopulationBase extends ThingBase {
    /** Indicates a property used as a constraint to define a {@link https://schema.org/StatisticalPopulation StatisticalPopulation} with respect to the set of entities corresponding to an indicated type (via {@link https://schema.org/populationType populationType}). */
    "schema:constrainingProperty"?: SchemaValue<Integer>;
    /** Indicates the number of constraints (not counting {@link https://schema.org/populationType populationType}) defined for a particular {@link https://schema.org/StatisticalPopulation StatisticalPopulation}. This helps applications understand if they have access to a sufficiently complete description of a {@link https://schema.org/StatisticalPopulation StatisticalPopulation}. */
    "schema:numConstraints"?: SchemaValue<Integer>;
    /** Indicates the populationType common to all members of a {@link https://schema.org/StatisticalPopulation StatisticalPopulation}. */
    "schema:populationType"?: SchemaValue<Class | IdReference>;
}
interface StatisticalPopulationLeaf extends StatisticalPopulationBase {
    "@type": "schema:StatisticalPopulation";
}
/** A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property {@link https://schema.org/populationType populationType} is used to specify the type. Any property that can be used on instances of that type can appear on the statistical population. For example, a {@link https://schema.org/StatisticalPopulation StatisticalPopulation} representing all {@link https://schema.org/Person Person}s with a {@link https://schema.org/homeLocation homeLocation} of East Podunk California, would be described by applying the appropriate {@link https://schema.org/homeLocation homeLocation} and {@link https://schema.org/populationType populationType} properties to a {@link https://schema.org/StatisticalPopulation StatisticalPopulation} item that stands for that set of people. The properties {@link https://schema.org/numConstraints numConstraints} and {@link https://schema.org/constrainingProperty constrainingProperty} are used to specify which of the populations properties are used to specify the population. Note that the sense of "population" used here is the general sense of a statistical population, and does not imply that the population consists of people. For example, a {@link https://schema.org/populationType populationType} of {@link https://schema.org/Event Event} or {@link https://schema.org/NewsArticle NewsArticle} could be used. See also {@link https://schema.org/Observation Observation}, and the {@link /docs/data-and-datasets.html data and datasets} overview for more details. */
export type StatisticalPopulation = StatisticalPopulationLeaf;

interface StatusEnumerationLeaf extends EnumerationBase {
    "@type": "schema:StatusEnumeration";
}
/** Lists or enumerations dealing with status types. */
export type StatusEnumeration = StatusEnumerationLeaf | ActionStatusType | EventStatusType | GameServerStatus | LegalForceStatus | OrderStatus | PaymentStatusType | ReservationStatusType;

interface SteeringPositionValueLeaf extends QualitativeValueBase {
    "@type": "schema:SteeringPositionValue";
}
/** A value indicating a steering position. */
export type SteeringPositionValue = "https://schema.org/LeftHandDriving" | "schema:LeftHandDriving" | "https://schema.org/RightHandDriving" | "schema:RightHandDriving" | SteeringPositionValueLeaf;

interface StorageTechnologyEntityLeaf extends ThingBase {
    "@type": "coremo:StorageTechnologyEntity";
}
/** A storage entity. */
export type StorageTechnologyEntity = StorageTechnologyEntityLeaf;

interface StorageTechnologyModelAreaLeaf extends ThingBase {
    "@type": "coremo:StorageTechnologyModelArea";
}
/** A storage model area. */
export type StorageTechnologyModelArea = StorageTechnologyModelAreaLeaf;

interface StoreLeaf extends LocalBusinessBase {
    "@type": "schema:Store";
}
/** A retail good store. */
export type Store = StoreLeaf | AutoPartsStore | BikeStore | BookStore | ClothingStore | ComputerStore | ConvenienceStore | DepartmentStore | ElectronicsStore | Florist | FurnitureStore | GardenStore | GroceryStore | HardwareStore | HobbyShop | HomeGoodsStore | JewelryStore | LiquorStore | MensClothingStore | MobilePhoneStore | MovieRentalStore | MusicStore | OfficeEquipmentStore | OutletStore | PetStore | ShoeStore | SportingGoodsStore | TireShop | ToyStore | WholesaleStore | string;

interface StructuredValueLeaf extends ThingBase {
    "@type": "schema:StructuredValue";
}
/** Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing. */
export type StructuredValue = StructuredValueLeaf | CDCPMDRecord | ContactPoint | DatedMoneySpecification | DefinedRegion | DeliveryTimeSettings | EngineSpecification | ExchangeRateSpecification | GeoCoordinates | GeoShape | InteractionCounter | MonetaryAmount | NutritionInformation | OfferShippingDetails | OpeningHoursSpecification | OwnershipInfo | PostalCodeRangeSpecification | PriceSpecification | PropertyValue | QuantitativeValue | QuantitativeValueDistribution | RepaymentSpecification | ShippingDeliveryTime | ShippingRateSettings | TypeAndQuantityNode | WarrantyPromise;

interface StructureMathematicalEntityLeaf extends ThingBase {
    "@type": "coremo:StructureMathematicalEntity";
}
/** A mathematical structure entity. */
export type StructureMathematicalEntity = StructureMathematicalEntityLeaf;

interface StructureMathematicalModelAreaLeaf extends ThingBase {
    "@type": "coremo:StructureMathematicalModelArea";
}
/** A structure mathematical model area. */
export type StructureMathematicalModelArea = StructureMathematicalModelAreaLeaf;

interface SubscribeActionLeaf extends ActionBase {
    "@type": "schema:SubscribeAction";
}
/**
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.
 *
 * Related actions:
 * - {@link https://schema.org/FollowAction FollowAction}: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.
 * - {@link https://schema.org/RegisterAction RegisterAction}: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
 * - {@link https://schema.org/JoinAction JoinAction}: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
 */
export type SubscribeAction = SubscribeActionLeaf;

interface SubsectionBase extends RootContractDataEntityBase, NumberedBase {
    /** The variation in which this (sub)section was added (0 for original contract). */
    "camo:addedInVariation"?: SchemaValue<Text>;
    /** The PercentagePriceSpecification associated with a subsection. */
    "camo:hasPercentagePriceSpecification"?: SchemaValue<Text>;
    /** Defines a contract part this section/subsection is included within (for a section, applies to all of its subsubsections which themselves do not have this property defined). */
    "camo:includedInContractPart"?: SchemaValue<ContractPart | IdReference>;
    /** The amount and currency for this plantAndMaterialsItem. */
    "camo:plantAndMaterialsItemPrice"?: SchemaValue<PriceSpecification | IdReference>;
    /** Whether to allow plant and materials payment when delivered. */
    "camo:plantAndMaterialsPaymentWhenDelivered"?: SchemaValue<Boolean>;
    /** Whether to allow plant and materials payment when shipped. */
    "camo:plantAndMaterialsPaymentWhenShipped"?: SchemaValue<Boolean>;
    /** The variation in which this (sub)section was removed. */
    "camo:removedInVariation"?: SchemaValue<Text>;
    /** The amount and currency for this Contract Price. */
    "camo:subsectionPrice"?: SchemaValue<PercentagePriceSpecification | PriceSpecification | IdReference>;
}
interface SubsectionLeaf extends SubsectionBase {
    "@type": "camo:Subsection";
}
/** A Subsection */
export type Subsection = SubsectionLeaf;

interface SubsectionPaymentDescriptionDescriptionBase extends ThingBase {
    /** The currency symbol for this payment. */
    "camo:PaymentCurrency"?: SchemaValue<Text>;
    /** The payment percentage, can be attached to a SectionPaymentDescription or a SubsectionPaymentDescriptionDescription). */
    "camo:paymentPercentage"?: SchemaValue<Number>;
    /** The subsection number. */
    "camo:SubsectionNumber"?: SchemaValue<Text>;
    /** The payment due for a subsection. */
    "camo:SubsectionPaymentDescriptionDescriptionDue"?: SchemaValue<Number>;
    /** The work completed for a subsection. */
    "camo:SubsectionWorkCompleted"?: SchemaValue<Number>;
}
interface SubsectionPaymentDescriptionDescriptionLeaf extends SubsectionPaymentDescriptionDescriptionBase {
    "@type": "camo:SubsectionPaymentDescriptionDescription";
}
/** A subsection payment description description that is part of a SectionPaymentDescription */
export type SubsectionPaymentDescriptionDescription = SubsectionPaymentDescriptionDescriptionLeaf;

interface SubstanceBase extends MedicalEntityBase {
    /** An active ingredient, typically chemical compounds and/or biologic substances. */
    "schema:activeIngredient"?: SchemaValue<Text>;
    /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
    "schema:maximumIntake"?: SchemaValue<MaximumDoseSchedule | IdReference>;
}
interface SubstanceLeaf extends SubstanceBase {
    "@type": "schema:Substance";
}
/** Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical. */
export type Substance = SubstanceLeaf | DietarySupplement | Drug;

interface SubwayStationLeaf extends CivicStructureBase {
    "@type": "schema:SubwayStation";
}
/** A subway station. */
export type SubwayStation = SubwayStationLeaf | string;

interface SuiteBase extends AccommodationBase {
    /** The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text. If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property. */
    "schema:bed"?: SchemaValue<BedDetails | BedType | Text | IdReference>;
    /** The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business. Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue. */
    "schema:numberOfRooms"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person). Typical unit code(s): C62 for person */
    "schema:occupancy"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface SuiteLeaf extends SuiteBase {
    "@type": "schema:Suite";
}
/**
 * A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see {@link http://en.wikipedia.org/wiki/Suite_(hotel) http://en.wikipedia.org/wiki/Suite_(hotel)}).
 *
 * See also the {@link /docs/hotels.html dedicated document on the use of schema.org for marking up hotels and other forms of accommodations}.
 */
export type Suite = SuiteLeaf | string;

interface SuperficialAnatomyBase extends MedicalEntityBase {
    /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
    "schema:associatedPathophysiology"?: SchemaValue<Text>;
    /** Anatomical systems or structures that relate to the superficial anatomy. */
    "schema:relatedAnatomy"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | IdReference>;
    /** A medical condition associated with this anatomy. */
    "schema:relatedCondition"?: SchemaValue<MedicalCondition | IdReference>;
    /** A medical therapy related to this anatomy. */
    "schema:relatedTherapy"?: SchemaValue<MedicalTherapy | IdReference>;
    /** The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment. */
    "schema:significance"?: SchemaValue<Text>;
}
interface SuperficialAnatomyLeaf extends SuperficialAnatomyBase {
    "@type": "schema:SuperficialAnatomy";
}
/** Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure). */
export type SuperficialAnatomy = SuperficialAnatomyLeaf;

interface SurgicalProcedureLeaf extends MedicalProcedureBase {
    "@type": "schema:SurgicalProcedure";
}
/** A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes. */
export type SurgicalProcedure = SurgicalProcedureLeaf;

interface SuspendActionLeaf extends ActionBase {
    "@type": "schema:SuspendAction";
}
/** The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer). */
export type SuspendAction = SuspendActionLeaf;

interface SynagogueLeaf extends CivicStructureBase {
    "@type": "schema:Synagogue";
}
/** A synagogue. */
export type Synagogue = SynagogueLeaf | string;

interface SyntheticCurrencyBase extends ThingBase {
    /** The regular currency upon which a synthetic currency is based. */
    "camo:basedOnRegularCurrency"?: SchemaValue<Text>;
    /** The name of a synthetic currency. */
    "camo:hasSyntheticCurrencyName"?: SchemaValue<Text>;
}
interface SyntheticCurrencyLeaf extends SyntheticCurrencyBase {
    "@type": "camo:SyntheticCurrency";
}
/** A synthetic currency (a custom currency based on regular currency). */
export type SyntheticCurrency = SyntheticCurrencyLeaf;

interface TableLeaf extends WebPageElementBase {
    "@type": "schema:Table";
}
/** A table on a Web page. */
export type Table = TableLeaf;

interface TakeActionLeaf extends TransferActionBase {
    "@type": "schema:TakeAction";
}
/**
 * The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.
 *
 * Related actions:
 * - {@link https://schema.org/GiveAction GiveAction}: The reciprocal of TakeAction.
 * - {@link https://schema.org/ReceiveAction ReceiveAction}: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.
 */
export type TakeAction = TakeActionLeaf;

interface TakingOverCertificateBase extends CertificateBase {
    /** The Date Of Completion for this taking-over cert [See definition in FIDIC 1.1]. */
    "camo:contractDateOfCompletion"?: SchemaValue<Date>;
}
interface TakingOverCertificateLeaf extends TakingOverCertificateBase {
    "@type": "camo:TakingOverCertificate";
}
/** A taking-over certificate for a contract. */
export type TakingOverCertificate = TakingOverCertificateLeaf;

interface TakingOverPaymentBase extends PaymentBase {
    /** The taking over cert this is based upon (to discover withheld amounts). */
    "camo:takingOverPaymentBasedOnTakingOverCertificate"?: SchemaValue<Text>;
    /** The revision of the taking over cert to use. */
    "camo:takingOverPaymentBasedOnTakingOverCertificateRevision"?: SchemaValue<Integer>;
}
interface TakingOverPaymentLeaf extends TakingOverPaymentBase {
    "@type": "camo:TakingOverPayment";
}
/** A taking-over payment Explanation (specifically for payment of the taking-over portion of the retention money)). */
export type TakingOverPayment = TakingOverPaymentLeaf;

interface TakingOverPaymentCertificateBase extends PaymentCertificateBase {
    /** The taking over cert this is based upon (to discover withheld amounts). */
    "camo:takingOverPaymentCertificateBasedOnTakingOverCertificate"?: SchemaValue<Text>;
    /** The revision of the taking over cert to use. */
    "camo:takingOverPaymentCertificateBasedOnTakingOverRevision"?: SchemaValue<Integer>;
}
interface TakingOverPaymentCertificateLeaf extends TakingOverPaymentCertificateBase {
    "@type": "camo:TakingOverPaymentCertificate";
}
/** A taking-over payment certificate (specifically for payment of the taking-over portion of the retention money)). */
export type TakingOverPaymentCertificate = TakingOverPaymentCertificateLeaf;

interface TakingOverSectionPaymentDescriptionLeaf extends SectionPaymentDescriptionBase {
    "@type": "camo:TakingOverSectionPaymentDescription";
}
/** taking over payment that is part of a contract payment description. */
export type TakingOverSectionPaymentDescription = TakingOverSectionPaymentDescriptionLeaf;

interface TakingOverStatementBase extends ContractStatementBase {
    /** The taking over cert this is based upon (to discover withheld amounts). */
    "camo:takingOverStatementBasedOnTakingOverCertificate"?: SchemaValue<Text>;
    /** The revision of the taking over cert to use. */
    "camo:takingOverStatementBasedOnTakingOverCertificateRevision"?: SchemaValue<Integer>;
}
interface TakingOverStatementLeaf extends TakingOverStatementBase {
    "@type": "camo:TakingOverStatement";
}
/** A taking-over statement (specifically for payment of the taking-over portion of the retention money)). */
export type TakingOverStatement = TakingOverStatementLeaf;

interface TattooParlorLeaf extends LocalBusinessBase {
    "@type": "schema:TattooParlor";
}
/** A tattoo parlor. */
export type TattooParlor = TattooParlorLeaf | string;

interface TaxiLeaf extends ServiceBase {
    "@type": "schema:Taxi";
}
/**
 * A taxi.
 *
 * @deprecated Use TaxiService instead.
 */
export type Taxi = TaxiLeaf;

interface TaxiReservationBase extends ReservationBase {
    /** Number of people the reservation should accommodate. */
    "schema:partySize"?: SchemaValue<Integer | QuantitativeValue | IdReference>;
    /** Where a taxi will pick up a passenger or a rental car can be picked up. */
    "schema:pickupLocation"?: SchemaValue<Place | IdReference>;
    /** When a taxi will pickup a passenger or a rental car can be picked up. */
    "schema:pickupTime"?: SchemaValue<DateTime>;
}
interface TaxiReservationLeaf extends TaxiReservationBase {
    "@type": "schema:TaxiReservation";
}
/**
 * A reservation for a taxi.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export type TaxiReservation = TaxiReservationLeaf;

interface TaxiServiceLeaf extends ServiceBase {
    "@type": "schema:TaxiService";
}
/** A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled. */
export type TaxiService = TaxiServiceLeaf;

interface TaxiStandLeaf extends CivicStructureBase {
    "@type": "schema:TaxiStand";
}
/** A taxi stand. */
export type TaxiStand = TaxiStandLeaf | string;

interface TaxonBase extends ThingBase {
    /** Closest child taxa of the taxon in question. */
    "schema:childTaxon"?: SchemaValue<Taxon | Text | URL | IdReference>;
    /** A Defined Term contained in this term set. */
    "schema:hasDefinedTerm"?: SchemaValue<DefinedTerm | IdReference>;
    /** Closest parent taxon of the taxon in question. */
    "schema:parentTaxon"?: SchemaValue<Taxon | Text | URL | IdReference>;
    /** The taxonomic rank of this taxon given preferably as a URI from a controlled vocabulary \u2013 (typically the ranks from TDWG TaxonRank ontology or equivalent Wikidata URIs). */
    "schema:taxonRank"?: SchemaValue<PropertyValue | Text | URL | IdReference>;
}
interface TaxonLeaf extends TaxonBase {
    "@type": "schema:Taxon";
}
/** A set of organisms asserted to represent a natural cohesive biological unit. */
export type Taxon = TaxonLeaf;

interface TechArticleBase extends ArticleBase {
    /** Prerequisites needed to fulfill steps in article. */
    "schema:dependencies"?: SchemaValue<Text>;
    /** Proficiency needed for this content; expected values: 'Beginner', 'Expert'. */
    "schema:proficiencyLevel"?: SchemaValue<Text>;
}
interface TechArticleLeaf extends TechArticleBase {
    "@type": "schema:TechArticle";
}
/** A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc. */
export type TechArticle = TechArticleLeaf | APIReference;

interface TechnologyEntityLeaf extends ThingBase {
    "@type": "coremo:TechnologyEntity";
}
/** A technology entity. */
export type TechnologyEntity = TechnologyEntityLeaf | StorageTechnologyEntity;

interface TechnologyModelAreaLeaf extends ThingBase {
    "@type": "coremo:TechnologyModelArea";
}
/** A technology model area. */
export type TechnologyModelArea = TechnologyModelAreaLeaf | CodeTechnologyModelArea | ComputeTechnologyModelArea | IntelligenceTechnologyModelArea | NetworkingTechnologyModelArea | StorageTechnologyModelArea;

interface TelevisionChannelLeaf extends BroadcastChannelBase {
    "@type": "schema:TelevisionChannel";
}
/** A unique instance of a television BroadcastService on a CableOrSatelliteService lineup. */
export type TelevisionChannel = TelevisionChannelLeaf;

interface TelevisionStationLeaf extends LocalBusinessBase {
    "@type": "schema:TelevisionStation";
}
/** A television station. */
export type TelevisionStation = TelevisionStationLeaf | string;

interface TemplatableBase extends ThingBase {
    /** The template which this entity is based upon. */
    "coremo:basedOnTemplate"?: SchemaValue<Templatable | IdReference>;
    /** Indicates whether this resource is a template. */
    "coremo:isTemplate"?: SchemaValue<Boolean>;
}
interface TemplatableLeaf extends TemplatableBase {
    "@type": "coremo:Templatable";
}
/** A entity which may be part of a template relationship */
export type Templatable = TemplatableLeaf | Contract | ContractConfiguration;

interface TemporaryWorksLeaf extends ThingBase {
    "@type": "camo:TemporaryWorks";
}
/** The Temporary Works. */
export type TemporaryWorks = TemporaryWorksLeaf;

interface TennisComplexLeaf extends LocalBusinessBase {
    "@type": "schema:TennisComplex";
}
/** A tennis complex. */
export type TennisComplex = TennisComplexLeaf | string;

interface TextDigitalDocumentLeaf extends DigitalDocumentBase {
    "@type": "schema:TextDigitalDocument";
}
/** A file composed primarily of text. */
export type TextDigitalDocument = TextDigitalDocumentLeaf;

interface TheaterEventLeaf extends EventBase {
    "@type": "schema:TheaterEvent";
}
/** Event type: Theater performance. */
export type TheaterEvent = TheaterEventLeaf;

interface TheaterGroupLeaf extends OrganizationBase {
    "@type": "schema:TheaterGroup";
}
/** A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre. */
export type TheaterGroup = TheaterGroupLeaf | string;

interface TherapeuticProcedureBase extends MedicalProcedureBase {
    /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead. */
    "schema:adverseOutcome"?: SchemaValue<MedicalEntity | IdReference>;
    /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. */
    "schema:doseSchedule"?: SchemaValue<DoseSchedule | IdReference>;
    /** Specifying a drug or medicine used in a medication procedure. */
    "schema:drug"?: SchemaValue<Drug | IdReference>;
}
interface TherapeuticProcedureLeaf extends TherapeuticProcedureBase {
    "@type": "schema:TherapeuticProcedure";
}
/** A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition. */
export type TherapeuticProcedure = TherapeuticProcedureLeaf | MedicalTherapy | PsychologicalTreatment;

interface ThesisBase extends CreativeWorkBase {
    /** Qualification, candidature, degree, application that Thesis supports. */
    "schema:inSupportOf"?: SchemaValue<Text>;
}
interface ThesisLeaf extends ThesisBase {
    "@type": "schema:Thesis";
}
/** A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification. */
export type Thesis = ThesisLeaf;

interface ThingBase extends Partial<IdReference> {
    /** An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally. */
    "schema:additionalType"?: SchemaValue<URL | IdReference>;
    /** An alias for the item. */
    "schema:alternateName"?: SchemaValue<Text>;
    /** A description of the item. */
    "schema:description"?: SchemaValue<Text>;
    /** A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation. */
    "schema:disambiguatingDescription"?: SchemaValue<Text>;
    /** A knowledge graph is not to be used directly (may be the input for a further transform). */
    "coremo:graphIsAbstract"?: SchemaValue<Boolean>;
    /** The identifier property represents any kind of identifier for any kind of {@link https://schema.org/Thing Thing}, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See {@link /docs/datamodel.html#identifierBg background notes} for more details. */
    "schema:identifier"?: SchemaValue<PropertyValue | Text | URL | IdReference>;
    /** An image of the item. This can be a {@link https://schema.org/URL URL} or a fully described {@link https://schema.org/ImageObject ImageObject}. */
    "schema:image"?: SchemaValue<ImageObject | URL | IdReference>;
    /** Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See {@link /docs/datamodel.html#mainEntityBackground background notes} for details. */
    "schema:mainEntityOfPage"?: SchemaValue<CreativeWork | URL | IdReference>;
    /** The name of the item. */
    "schema:name"?: SchemaValue<Text>;
    /** Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. */
    "schema:potentialAction"?: SchemaValue<Action | IdReference>;
    /** URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website. */
    "schema:sameAs"?: SchemaValue<URL | IdReference>;
    /** A CreativeWork or Event about this Thing. */
    "schema:subjectOf"?: SchemaValue<CreativeWork | Event | IdReference>;
    /** URL of the item. */
    "schema:url"?: SchemaValue<URL | IdReference>;
}
interface ThingLeaf extends ThingBase {
    "@type": "schema:Thing";
}
/** The most generic type of item. */
export type Thing = ThingLeaf | Action | BioChemEntity | CommunicationEntity | Concept | CorporateEntity | CreativeWork | Event | Intangible | MathematicalEntity | MedicalEntity | OperationsEntity | Organization | Person | Place | Product | SalesEntity | ServicesEntity | Taxon | TechnologyEntity;

interface TicketBase extends ThingBase {
    /** The date the ticket was issued. */
    "schema:dateIssued"?: SchemaValue<Date | DateTime>;
    /** The organization issuing the ticket or permit. */
    "schema:issuedBy"?: SchemaValue<Organization | IdReference>;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:priceCurrency"?: SchemaValue<Text>;
    /** The seat associated with the ticket. */
    "schema:ticketedSeat"?: SchemaValue<Seat | IdReference>;
    /** The unique identifier for the ticket. */
    "schema:ticketNumber"?: SchemaValue<Text>;
    /** Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance. */
    "schema:ticketToken"?: SchemaValue<Text | URL | IdReference>;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.
     *
     * Usage guidelines:
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    "schema:totalPrice"?: SchemaValue<Number | PriceSpecification | Text | IdReference>;
    /** The person or organization the reservation or ticket is for. */
    "schema:underName"?: SchemaValue<Organization | Person | IdReference>;
}
interface TicketLeaf extends TicketBase {
    "@type": "schema:Ticket";
}
/** Used to describe a ticket to an event, a flight, a bus ride, etc. */
export type Ticket = TicketLeaf;

interface TieActionLeaf extends ActionBase {
    "@type": "schema:TieAction";
}
/** The act of reaching a draw in a competitive activity. */
export type TieAction = TieActionLeaf;

interface TipActionBase extends TradeActionBase {
    /** A sub property of participant. The participant who is at the receiving end of the action. */
    "schema:recipient"?: SchemaValue<Audience | ContactPoint | Organization | Person | IdReference>;
}
interface TipActionLeaf extends TipActionBase {
    "@type": "schema:TipAction";
}
/** The act of giving money voluntarily to a beneficiary in recognition of services rendered. */
export type TipAction = TipActionLeaf;

interface TireShopLeaf extends LocalBusinessBase {
    "@type": "schema:TireShop";
}
/** A tire shop. */
export type TireShop = TireShopLeaf | string;

interface TouristAttractionBase extends PlaceBase {
    /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/inLanguage inLanguage} */
    "schema:availableLanguage"?: SchemaValue<Language | Text | IdReference>;
    /** Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. */
    "schema:touristType"?: SchemaValue<Audience | Text | IdReference>;
}
interface TouristAttractionLeaf extends TouristAttractionBase {
    "@type": "schema:TouristAttraction";
}
/** A tourist attraction. In principle any Thing can be a {@link https://schema.org/TouristAttraction TouristAttraction}, from a {@link https://schema.org/Mountain Mountain} and {@link https://schema.org/LandmarksOrHistoricalBuildings LandmarksOrHistoricalBuildings} to a {@link https://schema.org/LocalBusiness LocalBusiness}. This Type can be used on its own to describe a general {@link https://schema.org/TouristAttraction TouristAttraction}, or be used as an {@link https://schema.org/additionalType additionalType} to add tourist attraction properties to any other type. (See examples below) */
export type TouristAttraction = TouristAttractionLeaf | string;

interface TouristDestinationBase extends PlaceBase {
    /** Attraction located at destination. */
    "schema:includesAttraction"?: SchemaValue<TouristAttraction | IdReference>;
    /** Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. */
    "schema:touristType"?: SchemaValue<Audience | Text | IdReference>;
}
interface TouristDestinationLeaf extends TouristDestinationBase {
    "@type": "schema:TouristDestination";
}
/** A tourist destination. In principle any {@link https://schema.org/Place Place} can be a {@link https://schema.org/TouristDestination TouristDestination} from a {@link https://schema.org/City City}, Region or {@link https://schema.org/Country Country} to an {@link https://schema.org/AmusementPark AmusementPark} or {@link https://schema.org/Hotel Hotel}. This Type can be used on its own to describe a general {@link https://schema.org/TouristDestination TouristDestination}, or be used as an {@link https://schema.org/additionalType additionalType} to add tourist relevant properties to any other {@link https://schema.org/Place Place}. A {@link https://schema.org/TouristDestination TouristDestination} is defined as a {@link https://schema.org/Place Place} that contains, or is colocated with, one or more {@link https://schema.org/TouristAttraction TouristAttraction}s, often linked by a similar theme or interest to a particular {@link https://schema.org/touristType touristType}. The {@link http://www2.unwto.org/ UNWTO} defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip. (See examples below). */
export type TouristDestination = TouristDestinationLeaf | string;

interface TouristInformationCenterLeaf extends LocalBusinessBase {
    "@type": "schema:TouristInformationCenter";
}
/** A tourist information center. */
export type TouristInformationCenter = TouristInformationCenterLeaf | string;

interface TouristTripBase extends TripBase {
    /** Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. */
    "schema:touristType"?: SchemaValue<Audience | Text | IdReference>;
}
interface TouristTripLeaf extends TouristTripBase {
    "@type": "schema:TouristTrip";
}
/** A tourist trip. A created itinerary of visits to one or more places of interest ({@link https://schema.org/TouristAttraction TouristAttraction}/{@link https://schema.org/TouristDestination TouristDestination}) often linked by a similar theme, geographic area, or interest to a particular {@link https://schema.org/touristType touristType}. The {@link http://www2.unwto.org/ UNWTO} defines tourism trip as the Trip taken by visitors. (See examples below). */
export type TouristTrip = TouristTripLeaf;

interface ToyStoreLeaf extends LocalBusinessBase {
    "@type": "schema:ToyStore";
}
/** A toy store. */
export type ToyStore = ToyStoreLeaf | string;

interface TrackActionBase extends ActionBase {
    /** A sub property of instrument. The method of delivery. */
    "schema:deliveryMethod"?: SchemaValue<DeliveryMethod | IdReference>;
}
interface TrackActionLeaf extends TrackActionBase {
    "@type": "schema:TrackAction";
}
/**
 * An agent tracks an object for updates.
 *
 * Related actions:
 * - {@link https://schema.org/FollowAction FollowAction}: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.
 * - {@link https://schema.org/SubscribeAction SubscribeAction}: Unlike SubscribeAction, TrackAction refers to the interest on the location of innanimate objects.
 */
export type TrackAction = TrackActionLeaf;

interface TradeActionBase extends ActionBase {
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     *
     * Usage guidelines:
     * - Use the {@link https://schema.org/priceCurrency priceCurrency} property (with standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR") instead of including {@link http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign ambiguous symbols} such as '$' in the value.
     * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * - Note that both {@link http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.
     * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     */
    "schema:price"?: SchemaValue<Number | Text>;
    /**
     * The currency of the price, or a price component when attached to {@link https://schema.org/PriceSpecification PriceSpecification} and its subtypes.
     *
     * Use standard formats: {@link http://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    "schema:priceCurrency"?: SchemaValue<Text>;
    /** One or more detailed price specifications, indicating the unit price and delivery or payment charges. */
    "schema:priceSpecification"?: SchemaValue<PriceSpecification | IdReference>;
}
interface TradeActionLeaf extends TradeActionBase {
    "@type": "schema:TradeAction";
}
/** The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment. */
export type TradeAction = TradeActionLeaf | BuyAction | DonateAction | OrderAction | PayAction | PreOrderAction | QuoteAction | RentAction | SellAction | TipAction;

interface TrainReservationLeaf extends ReservationBase {
    "@type": "schema:TrainReservation";
}
/**
 * A reservation for train travel.
 *
 * Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use {@link https://schema.org/Offer Offer}.
 */
export type TrainReservation = TrainReservationLeaf;

interface TrainStationLeaf extends CivicStructureBase {
    "@type": "schema:TrainStation";
}
/** A train station. */
export type TrainStation = TrainStationLeaf | string;

interface TrainTripBase extends TripBase {
    /** The platform where the train arrives. */
    "schema:arrivalPlatform"?: SchemaValue<Text>;
    /** The station where the train trip ends. */
    "schema:arrivalStation"?: SchemaValue<TrainStation | IdReference>;
    /** The platform from which the train departs. */
    "schema:departurePlatform"?: SchemaValue<Text>;
    /** The station from which the train departs. */
    "schema:departureStation"?: SchemaValue<TrainStation | IdReference>;
    /** The name of the train (e.g. The Orient Express). */
    "schema:trainName"?: SchemaValue<Text>;
    /** The unique identifier for the train. */
    "schema:trainNumber"?: SchemaValue<Text>;
}
interface TrainTripLeaf extends TrainTripBase {
    "@type": "schema:TrainTrip";
}
/** A trip on a commercial train line. */
export type TrainTrip = TrainTripLeaf;

interface TransferActionBase extends ActionBase {
    /** A sub property of location. The original location of the object or the agent before the action. */
    "schema:fromLocation"?: SchemaValue<Place | IdReference>;
    /** A sub property of location. The final location of the object or the agent after the action. */
    "schema:toLocation"?: SchemaValue<Place | IdReference>;
}
interface TransferActionLeaf extends TransferActionBase {
    "@type": "schema:TransferAction";
}
/** The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another. */
export type TransferAction = TransferActionLeaf | BorrowAction | DownloadAction | GiveAction | LendAction | MoneyTransfer | ReceiveAction | ReturnAction | SendAction | TakeAction;

interface TransformBase extends ThingBase {
    /** The thing to use as input to the transform. */
    "coremo:transformInput"?: SchemaValue<Thing | IdReference>;
    /** The thing to be changed. */
    "coremo:transformParent"?: SchemaValue<Thing | IdReference>;
    /** The Transformable property to be changed. */
    "coremo:transformProperty"?: SchemaValue<URL | IdReference>;
    /** The thing to use as input to the transform. */
    "coremo:transformSource"?: SchemaValue<Thing | IdReference>;
}
interface TransformLeaf extends TransformBase {
    "@type": "coremo:Transform";
}
/** A transform for a Transformable. */
export type Transform = TransformLeaf | AddTransform | ClearTransform | RemoveTransform;

interface TransformableBase extends ThingBase {
    /** Attaches a transform to a Transformable. */
    "coremo:hasTransform"?: SchemaValue<Transform | IdReference>;
}
interface TransformableLeaf extends TransformableBase {
    "@type": "coremo:Transformable";
}
/** A resource whose properties can be transformed via add/remove/clear transforms. */
export type Transformable = TransformableLeaf;

interface TravelActionBase extends MoveActionBase {
    /** The distance travelled, e.g. exercising or travelling. */
    "schema:distance"?: SchemaValue<Distance | IdReference>;
}
interface TravelActionLeaf extends TravelActionBase {
    "@type": "schema:TravelAction";
}
/** The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants. */
export type TravelAction = TravelActionLeaf;

interface TravelAgencyLeaf extends LocalBusinessBase {
    "@type": "schema:TravelAgency";
}
/** A travel agency. */
export type TravelAgency = TravelAgencyLeaf | string;

interface TreatmentIndicationLeaf extends MedicalEntityBase {
    "@type": "schema:TreatmentIndication";
}
/** An indication for treating an underlying condition, symptom, etc. */
export type TreatmentIndication = TreatmentIndicationLeaf;

interface TripBase extends ThingBase {
    /** The expected arrival time. */
    "schema:arrivalTime"?: SchemaValue<DateTime | Time>;
    /** The expected departure time. */
    "schema:departureTime"?: SchemaValue<DateTime | Time>;
    /** Destination(s) ( {@link https://schema.org/Place Place} ) that make up a trip. For a trip where destination order is important use {@link https://schema.org/ItemList ItemList} to specify that order (see examples). */
    "schema:itinerary"?: SchemaValue<ItemList | Place | IdReference>;
    /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
    "schema:offers"?: SchemaValue<Demand | Offer | IdReference>;
    /** Identifies that this {@link https://schema.org/Trip Trip} is a subTrip of another Trip. For example Day 1, Day 2, etc. of a multi-day trip. */
    "schema:partOfTrip"?: SchemaValue<Trip | IdReference>;
    /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
    "schema:provider"?: SchemaValue<Organization | Person | IdReference>;
    /** Identifies a {@link https://schema.org/Trip Trip} that is a subTrip of this Trip. For example Day 1, Day 2, etc. of a multi-day trip. */
    "schema:subTrip"?: SchemaValue<Trip | IdReference>;
}
interface TripLeaf extends TripBase {
    "@type": "schema:Trip";
}
/** A trip or journey. An itinerary of visits to one or more places. */
export type Trip = TripLeaf | BoatTrip | BusTrip | Flight | TouristTrip | TrainTrip;

interface TVClipBase extends ClipBase {
    /**
     * The TV series to which this episode or season belongs.
     *
     * @deprecated Consider using https://schema.org/partOfSeries instead.
     */
    "schema:partOfTVSeries"?: SchemaValue<TVSeries | IdReference>;
}
interface TVClipLeaf extends TVClipBase {
    "@type": "schema:TVClip";
}
/** A short TV program or a segment/part of a TV program. */
export type TVClip = TVClipLeaf;

interface TVEpisodeBase extends EpisodeBase {
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "schema:countryOfOrigin"?: SchemaValue<Country | IdReference>;
    /**
     * The TV series to which this episode or season belongs.
     *
     * @deprecated Consider using https://schema.org/partOfSeries instead.
     */
    "schema:partOfTVSeries"?: SchemaValue<TVSeries | IdReference>;
    /** Languages in which subtitles/captions are available, in {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard format}. */
    "schema:subtitleLanguage"?: SchemaValue<Language | Text | IdReference>;
    /**
     * An {@link https://eidr.org/ EIDR} (Entertainment Identifier Registry) {@link https://schema.org/identifier identifier} representing at the most general/abstract level, a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" has a titleEIDR of "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See {@link https://schema.org/editEIDR editEIDR}.
     *
     * Since schema.org types like {@link https://schema.org/Movie Movie} and {@link https://schema.org/TVEpisode TVEpisode} can be used for both works and their multiple expressions, it is possible to use {@link https://schema.org/titleEIDR titleEIDR} alone (for a general description), or alongside {@link https://schema.org/editEIDR editEIDR} for a more edit-specific description.
     */
    "schema:titleEIDR"?: SchemaValue<Text | URL | IdReference>;
}
interface TVEpisodeLeaf extends TVEpisodeBase {
    "@type": "schema:TVEpisode";
}
/** A TV episode which can be part of a series or season. */
export type TVEpisode = TVEpisodeLeaf;

interface TVSeasonBase extends CreativeWorkSeasonBase, CreativeWorkBase {
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "schema:countryOfOrigin"?: SchemaValue<Country | IdReference>;
    /**
     * The TV series to which this episode or season belongs.
     *
     * @deprecated Consider using https://schema.org/partOfSeries instead.
     */
    "schema:partOfTVSeries"?: SchemaValue<TVSeries | IdReference>;
}
interface TVSeasonLeaf extends TVSeasonBase {
    "@type": "schema:TVSeason";
}
/** Season dedicated to TV broadcast and associated online delivery. */
export type TVSeason = TVSeasonLeaf;

interface TVSeriesBase extends CreativeWorkSeriesBase, CreativeWorkBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /** A season that is part of the media series. */
    "schema:containsSeason"?: SchemaValue<CreativeWorkSeason | IdReference>;
    /**
     * The country of origin of something, including products as well as creative works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link https://schema.org/CreativeWork CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link https://schema.org/contentLocation contentLocation} and {@link https://schema.org/locationCreated locationCreated} may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    "schema:countryOfOrigin"?: SchemaValue<Country | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** An episode of a tv, radio or game media within a series or season. */
    "schema:episode"?: SchemaValue<Episode | IdReference>;
    /**
     * An episode of a TV/radio series or season.
     *
     * @deprecated Consider using https://schema.org/episode instead.
     */
    "schema:episodes"?: SchemaValue<Episode | IdReference>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** The number of episodes in this season or series. */
    "schema:numberOfEpisodes"?: SchemaValue<Integer>;
    /** The number of seasons in this series. */
    "schema:numberOfSeasons"?: SchemaValue<Integer>;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "schema:productionCompany"?: SchemaValue<Organization | IdReference>;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/containsSeason instead.
     */
    "schema:season"?: SchemaValue<CreativeWorkSeason | URL | IdReference>;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/season instead.
     */
    "schema:seasons"?: SchemaValue<CreativeWorkSeason | IdReference>;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "schema:trailer"?: SchemaValue<VideoObject | IdReference>;
}
interface TVSeriesLeaf extends TVSeriesBase {
    "@type": "schema:TVSeries";
}
/** CreativeWorkSeries dedicated to TV broadcast and associated online delivery. */
export type TVSeries = TVSeriesLeaf;

interface TypeAndQuantityNodeBase extends ThingBase {
    /** The quantity of the goods included in the offer. */
    "schema:amountOfThisGood"?: SchemaValue<Number>;
    /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
    "schema:businessFunction"?: SchemaValue<BusinessFunction | IdReference>;
    /** The product that this structured value is referring to. */
    "schema:typeOfGood"?: SchemaValue<Product | Service | IdReference>;
    /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    "schema:unitCode"?: SchemaValue<Text | URL | IdReference>;
    /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
    "schema:unitText"?: SchemaValue<Text>;
}
interface TypeAndQuantityNodeLeaf extends TypeAndQuantityNodeBase {
    "@type": "schema:TypeAndQuantityNode";
}
/** A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer. */
export type TypeAndQuantityNode = TypeAndQuantityNodeLeaf;

interface UKNonprofitTypeLeaf extends EnumerationBase {
    "@type": "schema:UKNonprofitType";
}
/** UKNonprofitType: Non-profit organization type originating from the United Kingdom. */
export type UKNonprofitType = "https://schema.org/CharitableIncorporatedOrganization" | "schema:CharitableIncorporatedOrganization" | "https://schema.org/LimitedByGuaranteeCharity" | "schema:LimitedByGuaranteeCharity" | "https://schema.org/UKTrust" | "schema:UKTrust" | "https://schema.org/UnincorporatedAssociationCharity" | "schema:UnincorporatedAssociationCharity" | UKNonprofitTypeLeaf;

interface UnitPriceSpecificationBase extends PriceSpecificationBase {
    /** Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property). */
    "schema:billingDuration"?: SchemaValue<Duration | Number | QuantitativeValue | IdReference>;
    /** This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property. */
    "schema:billingIncrement"?: SchemaValue<Number>;
    /** Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property. */
    "schema:billingStart"?: SchemaValue<Number>;
    /** Identifies a price component (for example, a line item on an invoice), part of the total price for an offer. */
    "schema:priceComponentType"?: SchemaValue<PriceComponentTypeEnumeration | IdReference>;
    /** Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the {@link https://schema.org/priceType priceType} property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration. */
    "schema:priceType"?: SchemaValue<PriceTypeEnumeration | Text | IdReference>;
    /** The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit. */
    "schema:referenceQuantity"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    "schema:unitCode"?: SchemaValue<Text | URL | IdReference>;
    /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode unitCode}. */
    "schema:unitText"?: SchemaValue<Text>;
}
interface UnitPriceSpecificationLeaf extends UnitPriceSpecificationBase {
    "@type": "schema:UnitPriceSpecification";
}
/** The price asked for a given offer by the respective organization or person. */
export type UnitPriceSpecification = UnitPriceSpecificationLeaf;

interface UnRegisterActionLeaf extends ActionBase {
    "@type": "schema:UnRegisterAction";
}
/**
 * The act of un-registering from a service.
 *
 * Related actions:
 * - {@link https://schema.org/RegisterAction RegisterAction}: antonym of UnRegisterAction.
 * - {@link https://schema.org/LeaveAction LeaveAction}: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.
 */
export type UnRegisterAction = UnRegisterActionLeaf;

interface UpdateActionBase extends ActionBase {
    /**
     * A sub property of object. The collection target of the action.
     *
     * @deprecated Consider using https://schema.org/targetCollection instead.
     */
    "schema:collection"?: SchemaValue<Thing | IdReference>;
    /** A sub property of object. The collection target of the action. */
    "schema:targetCollection"?: SchemaValue<Thing | IdReference>;
}
interface UpdateActionLeaf extends UpdateActionBase {
    "@type": "schema:UpdateAction";
}
/** The act of managing by changing/editing the state of the object. */
export type UpdateAction = UpdateActionLeaf | AddAction | DeleteAction | ReplaceAction;

interface URLBase extends Partial<IdReference> {
    /** The Commencement Date of this contract [See definition in FIDIC 1.1]. */
    "camo:contractCommencementDate"?: SchemaValue<Date>;
    /** A knowledge graph to be transformed. */
    "coremo:transformGraphInput"?: SchemaValue<Thing | IdReference>;
    /** The resulting knowledge graph after a transform. */
    "coremo:transformGraphOutput"?: SchemaValue<Thing | IdReference>;
}
interface URLLeaf extends URLBase {
    "@type": "schema:URL";
}
/** Data type: URL. */
export type URL = URLLeaf | string;

interface UseActionLeaf extends ConsumeActionBase {
    "@type": "schema:UseAction";
}
/** The act of applying an object to its intended purpose. */
export type UseAction = UseActionLeaf | WearAction;

interface UserBlocksLeaf extends EventBase {
    "@type": "schema:UserBlocks";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserBlocks = UserBlocksLeaf;

interface UserCheckinsLeaf extends EventBase {
    "@type": "schema:UserCheckins";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserCheckins = UserCheckinsLeaf;

interface UserCommentsBase extends EventBase {
    /** The text of the UserComment. */
    "schema:commentText"?: SchemaValue<Text>;
    /** The time at which the UserComment was made. */
    "schema:commentTime"?: SchemaValue<Date | DateTime>;
    /** The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork. */
    "schema:creator"?: SchemaValue<Organization | Person | IdReference>;
    /** Specifies the CreativeWork associated with the UserComment. */
    "schema:discusses"?: SchemaValue<CreativeWork | IdReference>;
    /** The URL at which a reply may be posted to the specified UserComment. */
    "schema:replyToUrl"?: SchemaValue<URL | IdReference>;
}
interface UserCommentsLeaf extends UserCommentsBase {
    "@type": "schema:UserComments";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserComments = UserCommentsLeaf;

interface UserDownloadsLeaf extends EventBase {
    "@type": "schema:UserDownloads";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserDownloads = UserDownloadsLeaf;

interface UserInteractionLeaf extends EventBase {
    "@type": "schema:UserInteraction";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserInteraction = UserInteractionLeaf | UserBlocks | UserCheckins | UserComments | UserDownloads | UserLikes | UserPageVisits | UserPlays | UserPlusOnes | UserTweets;

interface UserLikesLeaf extends EventBase {
    "@type": "schema:UserLikes";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserLikes = UserLikesLeaf;

interface UserPageVisitsLeaf extends EventBase {
    "@type": "schema:UserPageVisits";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserPageVisits = UserPageVisitsLeaf;

interface UserPlaysLeaf extends EventBase {
    "@type": "schema:UserPlays";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserPlays = UserPlaysLeaf;

interface UserPlusOnesLeaf extends EventBase {
    "@type": "schema:UserPlusOnes";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserPlusOnes = UserPlusOnesLeaf;

interface UserReviewLeaf extends ReviewBase {
    "@type": "schema:UserReview";
}
/** A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with {@link https://schema.org/CriticReview CriticReview}. */
export type UserReview = UserReviewLeaf;

interface UserTweetsLeaf extends EventBase {
    "@type": "schema:UserTweets";
}
/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use {@link https://schema.org/Action Action}-based vocabulary, alongside types such as {@link https://schema.org/Comment Comment}.
 *
 * @deprecated Use InteractionCounter instead.
 */
export type UserTweets = UserTweetsLeaf;

interface USNonprofitTypeLeaf extends EnumerationBase {
    "@type": "schema:USNonprofitType";
}
/** USNonprofitType: Non-profit organization type originating from the United States. */
export type USNonprofitType = "https://schema.org/Nonprofit501a" | "schema:Nonprofit501a" | "https://schema.org/Nonprofit501c1" | "schema:Nonprofit501c1" | "https://schema.org/Nonprofit501c10" | "schema:Nonprofit501c10" | "https://schema.org/Nonprofit501c11" | "schema:Nonprofit501c11" | "https://schema.org/Nonprofit501c12" | "schema:Nonprofit501c12" | "https://schema.org/Nonprofit501c13" | "schema:Nonprofit501c13" | "https://schema.org/Nonprofit501c14" | "schema:Nonprofit501c14" | "https://schema.org/Nonprofit501c15" | "schema:Nonprofit501c15" | "https://schema.org/Nonprofit501c16" | "schema:Nonprofit501c16" | "https://schema.org/Nonprofit501c17" | "schema:Nonprofit501c17" | "https://schema.org/Nonprofit501c18" | "schema:Nonprofit501c18" | "https://schema.org/Nonprofit501c19" | "schema:Nonprofit501c19" | "https://schema.org/Nonprofit501c2" | "schema:Nonprofit501c2" | "https://schema.org/Nonprofit501c20" | "schema:Nonprofit501c20" | "https://schema.org/Nonprofit501c21" | "schema:Nonprofit501c21" | "https://schema.org/Nonprofit501c22" | "schema:Nonprofit501c22" | "https://schema.org/Nonprofit501c23" | "schema:Nonprofit501c23" | "https://schema.org/Nonprofit501c24" | "schema:Nonprofit501c24" | "https://schema.org/Nonprofit501c25" | "schema:Nonprofit501c25" | "https://schema.org/Nonprofit501c26" | "schema:Nonprofit501c26" | "https://schema.org/Nonprofit501c27" | "schema:Nonprofit501c27" | "https://schema.org/Nonprofit501c28" | "schema:Nonprofit501c28" | "https://schema.org/Nonprofit501c3" | "schema:Nonprofit501c3" | "https://schema.org/Nonprofit501c4" | "schema:Nonprofit501c4" | "https://schema.org/Nonprofit501c5" | "schema:Nonprofit501c5" | "https://schema.org/Nonprofit501c6" | "schema:Nonprofit501c6" | "https://schema.org/Nonprofit501c7" | "schema:Nonprofit501c7" | "https://schema.org/Nonprofit501c8" | "schema:Nonprofit501c8" | "https://schema.org/Nonprofit501c9" | "schema:Nonprofit501c9" | "https://schema.org/Nonprofit501d" | "schema:Nonprofit501d" | "https://schema.org/Nonprofit501e" | "schema:Nonprofit501e" | "https://schema.org/Nonprofit501f" | "schema:Nonprofit501f" | "https://schema.org/Nonprofit501k" | "schema:Nonprofit501k" | "https://schema.org/Nonprofit501n" | "schema:Nonprofit501n" | "https://schema.org/Nonprofit501q" | "schema:Nonprofit501q" | "https://schema.org/Nonprofit527" | "schema:Nonprofit527" | USNonprofitTypeLeaf;

interface VariationBase extends ThingBase, NumberedBase {
    /** The amount and currency for the Contract Price, updated for this Variation. */
    "camo:hasContractPrice"?: SchemaValue<PriceSpecification | IdReference>;
    /** A topic (textual explanation) for this variation. */
    "camo:variationTopic"?: SchemaValue<Text>;
}
interface VariationLeaf extends VariationBase {
    "@type": "camo:Variation";
}
/** A variation. */
export type Variation = VariationLeaf;

interface VehicleBase extends ProductBase {
    /**
     * The time needed to accelerate the vehicle from a given start velocity to a given target velocity.
     *
     * Typical unit code(s): SEC for seconds
     * - Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue}, or use {@link https://schema.org/valueReference valueReference} with a {@link https://schema.org/QuantitativeValue QuantitativeValue} of 0..60 mph or 0..100 km/h to specify the reference speeds.
     */
    "schema:accelerationTime"?: SchemaValue<QuantitativeValue | IdReference>;
    /** Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.). */
    "schema:bodyType"?: SchemaValue<QualitativeValue | Text | URL | IdReference>;
    /** A {@link https://en.wikipedia.org/wiki/Call_sign callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. */
    "schema:callSign"?: SchemaValue<Text>;
    /**
     * The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
     *
     * Typical unit code(s): LTR for liters, FTQ for cubic foot/feet
     *
     * Note: You can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:cargoVolume"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The date of the first registration of the vehicle with the respective public authorities. */
    "schema:dateVehicleFirstRegistered"?: SchemaValue<Date>;
    /** The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain. */
    "schema:driveWheelConfiguration"?: SchemaValue<DriveWheelConfigurationValue | Text | IdReference>;
    /** The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km". */
    "schema:emissionsCO2"?: SchemaValue<Number>;
    /**
     * The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.
     *
     * Typical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles).
     */
    "schema:fuelCapacity"?: SchemaValue<QuantitativeValue | IdReference>;
    /**
     * The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).
     * - Note 1: There are unfortunately no standard unit codes for liters per 100 km. Use {@link https://schema.org/unitText unitText} to indicate the unit of measurement, e.g. L/100 km.
     * - Note 2: There are two ways of indicating the fuel consumption, {@link https://schema.org/fuelConsumption fuelConsumption} (e.g. 8 liters per 100 km) and {@link https://schema.org/fuelEfficiency fuelEfficiency} (e.g. 30 miles per gallon). They are reciprocal.
     * - Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use {@link https://schema.org/valueReference valueReference} to link the value for the fuel consumption to another value.
     */
    "schema:fuelConsumption"?: SchemaValue<QuantitativeValue | IdReference>;
    /**
     * The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).
     * - Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use {@link https://schema.org/unitText unitText} to indicate the unit of measurement, e.g. mpg or km/L.
     * - Note 2: There are two ways of indicating the fuel consumption, {@link https://schema.org/fuelConsumption fuelConsumption} (e.g. 8 liters per 100 km) and {@link https://schema.org/fuelEfficiency fuelEfficiency} (e.g. 30 miles per gallon). They are reciprocal.
     * - Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use {@link https://schema.org/valueReference valueReference} to link the value for the fuel economy to another value.
     */
    "schema:fuelEfficiency"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle. */
    "schema:fuelType"?: SchemaValue<QualitativeValue | Text | URL | IdReference>;
    /** A textual description of known damages, both repaired and unrepaired. */
    "schema:knownVehicleDamages"?: SchemaValue<Text>;
    /** Indicates that the vehicle meets the respective emission standard. */
    "schema:meetsEmissionStandard"?: SchemaValue<QualitativeValue | Text | URL | IdReference>;
    /**
     * The total distance travelled by the particular vehicle since its initial production, as read from its odometer.
     *
     * Typical unit code(s): KMT for kilometers, SMI for statute miles
     */
    "schema:mileageFromOdometer"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The release date of a vehicle model (often used to differentiate versions of the same make and model). */
    "schema:modelDate"?: SchemaValue<Date>;
    /** The number or type of airbags in the vehicle. */
    "schema:numberOfAirbags"?: SchemaValue<Number | Text>;
    /**
     * The number of axles.
     *
     * Typical unit code(s): C62
     */
    "schema:numberOfAxles"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /**
     * The number of doors.
     *
     * Typical unit code(s): C62
     */
    "schema:numberOfDoors"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /**
     * The total number of forward gears available for the transmission system of the vehicle.
     *
     * Typical unit code(s): C62
     */
    "schema:numberOfForwardGears"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /**
     * The number of owners of the vehicle, including the current one.
     *
     * Typical unit code(s): C62
     */
    "schema:numberOfPreviousOwners"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /**
     * The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of {@link https://schema.org/weight weight} and {@link https://schema.org/payload payload}
     * - Note 2: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 3: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}.
     * - Note 4: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:payload"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The date of production of the item, e.g. vehicle. */
    "schema:productionDate"?: SchemaValue<Date>;
    /** The date the item e.g. vehicle was purchased by the current owner. */
    "schema:purchaseDate"?: SchemaValue<Date>;
    /**
     * The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.
     *
     * Typical unit code(s): C62 for persons
     */
    "schema:seatingCapacity"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /**
     * The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by {@link https://schema.org/maxValue maxValue} should be the maximum speed achievable under regular conditions.
     *
     * Typical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot
     *
     * *Note 1: Use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate the range. Typically, the minimal value is zero.
     * - Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the {@link https://schema.org/valueReference valueReference} property.
     */
    "schema:speed"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The position of the steering wheel or similar device (mostly for cars). */
    "schema:steeringPosition"?: SchemaValue<SteeringPositionValue | IdReference>;
    /**
     * The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR)
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}.
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:tongueWeight"?: SchemaValue<QuantitativeValue | IdReference>;
    /**
     * The permitted weight of a trailer attached to the vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}.
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:trailerWeight"?: SchemaValue<QuantitativeValue | IdReference>;
    /** A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'. */
    "schema:vehicleConfiguration"?: SchemaValue<Text>;
    /** Information about the engine or engines of the vehicle. */
    "schema:vehicleEngine"?: SchemaValue<EngineSpecification | IdReference>;
    /** The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles. */
    "schema:vehicleIdentificationNumber"?: SchemaValue<Text>;
    /** The color or color combination of the interior of the vehicle. */
    "schema:vehicleInteriorColor"?: SchemaValue<Text>;
    /** The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience. */
    "schema:vehicleInteriorType"?: SchemaValue<Text>;
    /** The release date of a vehicle model (often used to differentiate versions of the same make and model). */
    "schema:vehicleModelDate"?: SchemaValue<Date>;
    /**
     * The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
     *
     * Typical unit code(s): C62 for persons.
     */
    "schema:vehicleSeatingCapacity"?: SchemaValue<Number | QuantitativeValue | IdReference>;
    /** Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale. */
    "schema:vehicleSpecialUsage"?: SchemaValue<CarUsageType | Text | IdReference>;
    /** The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars). */
    "schema:vehicleTransmission"?: SchemaValue<QualitativeValue | Text | URL | IdReference>;
    /**
     * The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.
     *
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * - Note 1: You can indicate additional information in the {@link https://schema.org/name name} of the {@link https://schema.org/QuantitativeValue QuantitativeValue} node.
     * - Note 2: You may also link to a {@link https://schema.org/QualitativeValue QualitativeValue} node that provides additional information using {@link https://schema.org/valueReference valueReference}.
     * - Note 3: Note that you can use {@link https://schema.org/minValue minValue} and {@link https://schema.org/maxValue maxValue} to indicate ranges.
     */
    "schema:weightTotal"?: SchemaValue<QuantitativeValue | IdReference>;
    /**
     * The distance between the centers of the front and rear wheels.
     *
     * Typical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
     */
    "schema:wheelbase"?: SchemaValue<QuantitativeValue | IdReference>;
}
interface VehicleLeaf extends VehicleBase {
    "@type": "schema:Vehicle";
}
/** A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space. */
export type Vehicle = VehicleLeaf | BusOrCoach | Car | Motorcycle | MotorizedBicycle;

interface VeinBase extends AnatomicalStructureBase {
    /** The vasculature that the vein drains into. */
    "schema:drainsTo"?: SchemaValue<Vessel | IdReference>;
    /** The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ. */
    "schema:regionDrained"?: SchemaValue<AnatomicalStructure | AnatomicalSystem | IdReference>;
    /** The anatomical or organ system that the vein flows into; a larger structure that the vein connects to. */
    "schema:tributary"?: SchemaValue<AnatomicalStructure | IdReference>;
}
interface VeinLeaf extends VeinBase {
    "@type": "schema:Vein";
}
/** A type of blood vessel that specifically carries blood to the heart. */
export type Vein = VeinLeaf;

interface VesselLeaf extends AnatomicalStructureBase {
    "@type": "schema:Vessel";
}
/** A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body. */
export type Vessel = VesselLeaf | Artery | LymphaticVessel | Vein;

interface VeterinaryCareLeaf extends MedicalOrganizationBase {
    "@type": "schema:VeterinaryCare";
}
/** A vet's office. */
export type VeterinaryCare = VeterinaryCareLeaf | string;

interface VideoGalleryLeaf extends WebPageBase {
    "@type": "schema:VideoGallery";
}
/** Web page type: Video gallery page. */
export type VideoGallery = VideoGalleryLeaf;

interface VideoGameBase extends SoftwareApplicationBase, GameBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /** Cheat codes to the game. */
    "schema:cheatCode"?: SchemaValue<CreativeWork | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** The electronic systems used to play {@link http://en.wikipedia.org/wiki/Category:Video_game_platforms video games}. */
    "schema:gamePlatform"?: SchemaValue<Text | Thing | URL | IdReference>;
    /** The server on which it is possible to play the game. */
    "schema:gameServer"?: SchemaValue<GameServer | IdReference>;
    /** Links to tips, tactics, etc. */
    "schema:gameTip"?: SchemaValue<CreativeWork | IdReference>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** Indicates whether this game is multi-player, co-op or single-player. The game can be marked as multi-player, co-op and single-player at the same time. */
    "schema:playMode"?: SchemaValue<GamePlayMode | IdReference>;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "schema:trailer"?: SchemaValue<VideoObject | IdReference>;
}
interface VideoGameLeaf extends VideoGameBase {
    "@type": "schema:VideoGame";
}
/** A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device. */
export type VideoGame = VideoGameLeaf;

interface VideoGameClipLeaf extends ClipBase {
    "@type": "schema:VideoGameClip";
}
/** A short segment/part of a video game. */
export type VideoGameClip = VideoGameClipLeaf;

interface VideoGameSeriesBase extends CreativeWorkSeriesBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /** A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage). */
    "schema:characterAttribute"?: SchemaValue<Thing | IdReference>;
    /** Cheat codes to the game. */
    "schema:cheatCode"?: SchemaValue<CreativeWork | IdReference>;
    /** A season that is part of the media series. */
    "schema:containsSeason"?: SchemaValue<CreativeWorkSeason | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** An episode of a tv, radio or game media within a series or season. */
    "schema:episode"?: SchemaValue<Episode | IdReference>;
    /**
     * An episode of a TV/radio series or season.
     *
     * @deprecated Consider using https://schema.org/episode instead.
     */
    "schema:episodes"?: SchemaValue<Episode | IdReference>;
    /** An item is an object within the game world that can be collected by a player or, occasionally, a non-player character. */
    "schema:gameItem"?: SchemaValue<Thing | IdReference>;
    /** Real or fictional location of the game (or part of game). */
    "schema:gameLocation"?: SchemaValue<Place | PostalAddress | URL | IdReference>;
    /** The electronic systems used to play {@link http://en.wikipedia.org/wiki/Category:Video_game_platforms video games}. */
    "schema:gamePlatform"?: SchemaValue<Text | Thing | URL | IdReference>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** The number of episodes in this season or series. */
    "schema:numberOfEpisodes"?: SchemaValue<Integer>;
    /** Indicate how many people can play this game (minimum, maximum, or range). */
    "schema:numberOfPlayers"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The number of seasons in this series. */
    "schema:numberOfSeasons"?: SchemaValue<Integer>;
    /** Indicates whether this game is multi-player, co-op or single-player. The game can be marked as multi-player, co-op and single-player at the same time. */
    "schema:playMode"?: SchemaValue<GamePlayMode | IdReference>;
    /** The production company or studio responsible for the item e.g. series, video game, episode etc. */
    "schema:productionCompany"?: SchemaValue<Organization | IdReference>;
    /** The task that a player-controlled character, or group of characters may complete in order to gain a reward. */
    "schema:quest"?: SchemaValue<Thing | IdReference>;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/containsSeason instead.
     */
    "schema:season"?: SchemaValue<CreativeWorkSeason | URL | IdReference>;
    /**
     * A season in a media series.
     *
     * @deprecated Consider using https://schema.org/season instead.
     */
    "schema:seasons"?: SchemaValue<CreativeWorkSeason | IdReference>;
    /** The trailer of a movie or tv/radio series, season, episode, etc. */
    "schema:trailer"?: SchemaValue<VideoObject | IdReference>;
}
interface VideoGameSeriesLeaf extends VideoGameSeriesBase {
    "@type": "schema:VideoGameSeries";
}
/** A video game series. */
export type VideoGameSeries = VideoGameSeriesLeaf;

interface VideoObjectBase extends MediaObjectBase {
    /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
    "schema:actor"?: SchemaValue<Person | IdReference>;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/actor instead.
     */
    "schema:actors"?: SchemaValue<Person | IdReference>;
    /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link https://schema.org/encodingFormat encodingFormat}. */
    "schema:caption"?: SchemaValue<MediaObject | Text | IdReference>;
    /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
    "schema:director"?: SchemaValue<Person | IdReference>;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     *
     * @deprecated Consider using https://schema.org/director instead.
     */
    "schema:directors"?: SchemaValue<Person | IdReference>;
    /** Represents textual captioning from a {@link https://schema.org/MediaObject MediaObject}, e.g. text of a 'meme'. */
    "schema:embeddedTextCaption"?: SchemaValue<Text>;
    /** The composer of the soundtrack. */
    "schema:musicBy"?: SchemaValue<MusicGroup | Person | IdReference>;
    /** Thumbnail image for an image or video. */
    "schema:thumbnail"?: SchemaValue<ImageObject | IdReference>;
    /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object. */
    "schema:transcript"?: SchemaValue<Text>;
    /** The frame size of the video. */
    "schema:videoFrameSize"?: SchemaValue<Text>;
    /** The quality of the video. */
    "schema:videoQuality"?: SchemaValue<Text>;
}
interface VideoObjectLeaf extends VideoObjectBase {
    "@type": "schema:VideoObject";
}
/** A video file. */
export type VideoObject = VideoObjectLeaf | VideoObjectSnapshot;

interface VideoObjectSnapshotLeaf extends VideoObjectBase {
    "@type": "schema:VideoObjectSnapshot";
}
/** A specific and exact (byte-for-byte) version of a {@link https://schema.org/VideoObject VideoObject}. Two byte-for-byte identical files, for the purposes of this type, considered identical. If they have different embedded metadata the files will differ. Different external facts about the files, e.g. creator or dateCreated that aren't represented in their actual content, do not affect this notion of identity. */
export type VideoObjectSnapshot = VideoObjectSnapshotLeaf;

interface ViewActionLeaf extends ConsumeActionBase {
    "@type": "schema:ViewAction";
}
/** The act of consuming static visual content. */
export type ViewAction = ViewActionLeaf;

interface VirtualLocationLeaf extends ThingBase {
    "@type": "schema:VirtualLocation";
}
/** An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world. */
export type VirtualLocation = VirtualLocationLeaf;

interface VisualArtsEventLeaf extends EventBase {
    "@type": "schema:VisualArtsEvent";
}
/** Event type: Visual arts event. */
export type VisualArtsEvent = VisualArtsEventLeaf;

interface VisualArtworkBase extends CreativeWorkBase {
    /** The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20"). */
    "schema:artEdition"?: SchemaValue<Integer | Text>;
    /** e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc. */
    "schema:artform"?: SchemaValue<Text | URL | IdReference>;
    /** The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints. */
    "schema:artist"?: SchemaValue<Person | IdReference>;
    /** The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.) */
    "schema:artMedium"?: SchemaValue<Text | URL | IdReference>;
    /** The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc. */
    "schema:artworkSurface"?: SchemaValue<Text | URL | IdReference>;
    /** The individual who adds color to inked drawings. */
    "schema:colorist"?: SchemaValue<Person | IdReference>;
    /** The depth of the item. */
    "schema:depth"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
    /** The height of the item. */
    "schema:height"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
    /** The individual who traces over the pencil drawings in ink after pencils are complete. */
    "schema:inker"?: SchemaValue<Person | IdReference>;
    /** The individual who adds lettering, including speech balloons and sound effects, to artwork. */
    "schema:letterer"?: SchemaValue<Person | IdReference>;
    /** The individual who draws the primary narrative artwork. */
    "schema:penciler"?: SchemaValue<Person | IdReference>;
    /**
     * A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.
     *
     * @deprecated Consider using https://schema.org/artworkSurface instead.
     */
    "schema:surface"?: SchemaValue<Text | URL | IdReference>;
    /** The width of the item. */
    "schema:width"?: SchemaValue<Distance | QuantitativeValue | IdReference>;
}
interface VisualArtworkLeaf extends VisualArtworkBase {
    "@type": "schema:VisualArtwork";
}
/** A work of art that is primarily visual in character. */
export type VisualArtwork = VisualArtworkLeaf | CoverArt;

interface VitalSignLeaf extends MedicalSignBase {
    "@type": "schema:VitalSign";
}
/** Vital signs are measures of various physiological functions in order to assess the most basic body functions. */
export type VitalSign = VitalSignLeaf;

interface VolcanoLeaf extends PlaceBase {
    "@type": "schema:Volcano";
}
/** A volcano, like Fuji san. */
export type Volcano = VolcanoLeaf | string;

interface VoteActionBase extends ChooseActionBase {
    /** A sub property of object. The candidate subject of this action. */
    "schema:candidate"?: SchemaValue<Person | IdReference>;
}
interface VoteActionLeaf extends VoteActionBase {
    "@type": "schema:VoteAction";
}
/** The act of expressing a preference from a fixed/finite/structured set of choices/options. */
export type VoteAction = VoteActionLeaf;

interface WantActionLeaf extends ActionBase {
    "@type": "schema:WantAction";
}
/** The act of expressing a desire about the object. An agent wants an object. */
export type WantAction = WantActionLeaf;

interface WarrantyPromiseBase extends ThingBase {
    /** The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days. */
    "schema:durationOfWarranty"?: SchemaValue<QuantitativeValue | IdReference>;
    /** The scope of the warranty promise. */
    "schema:warrantyScope"?: SchemaValue<WarrantyScope | IdReference>;
}
interface WarrantyPromiseLeaf extends WarrantyPromiseBase {
    "@type": "schema:WarrantyPromise";
}
/** A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product. */
export type WarrantyPromise = WarrantyPromiseLeaf;

interface WarrantyScopeLeaf extends EnumerationBase {
    "@type": "schema:WarrantyScope";
}
/**
 * A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 *
 * Commonly used values:
 * - http://purl.org/goodrelations/v1#Labor-BringIn
 * - http://purl.org/goodrelations/v1#PartsAndLabor-BringIn
 * - http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
 */
export type WarrantyScope = WarrantyScopeLeaf;

interface WatchActionLeaf extends ConsumeActionBase {
    "@type": "schema:WatchAction";
}
/** The act of consuming dynamic/moving visual content. */
export type WatchAction = WatchActionLeaf;

interface WaterfallLeaf extends PlaceBase {
    "@type": "schema:Waterfall";
}
/** A waterfall, like Niagara. */
export type Waterfall = WaterfallLeaf | string;

interface WearableMeasurementTypeEnumerationLeaf extends EnumerationBase {
    "@type": "schema:WearableMeasurementTypeEnumeration";
}
/** Enumerates common types of measurement for wearables products. */
export type WearableMeasurementTypeEnumeration = "https://schema.org/WearableMeasurementBack" | "schema:WearableMeasurementBack" | "https://schema.org/WearableMeasurementChestOrBust" | "schema:WearableMeasurementChestOrBust" | "https://schema.org/WearableMeasurementCollar" | "schema:WearableMeasurementCollar" | "https://schema.org/WearableMeasurementCup" | "schema:WearableMeasurementCup" | "https://schema.org/WearableMeasurementHeight" | "schema:WearableMeasurementHeight" | "https://schema.org/WearableMeasurementHips" | "schema:WearableMeasurementHips" | "https://schema.org/WearableMeasurementInseam" | "schema:WearableMeasurementInseam" | "https://schema.org/WearableMeasurementLength" | "schema:WearableMeasurementLength" | "https://schema.org/WearableMeasurementOutsideLeg" | "schema:WearableMeasurementOutsideLeg" | "https://schema.org/WearableMeasurementSleeve" | "schema:WearableMeasurementSleeve" | "https://schema.org/WearableMeasurementWaist" | "schema:WearableMeasurementWaist" | "https://schema.org/WearableMeasurementWidth" | "schema:WearableMeasurementWidth" | WearableMeasurementTypeEnumerationLeaf;

interface WearableSizeGroupEnumerationLeaf extends EnumerationBase {
    "@type": "schema:WearableSizeGroupEnumeration";
}
/** Enumerates common size groups (also known as "size types") for wearable products. */
export type WearableSizeGroupEnumeration = "https://schema.org/WearableSizeGroupBig" | "schema:WearableSizeGroupBig" | "https://schema.org/WearableSizeGroupBoys" | "schema:WearableSizeGroupBoys" | "https://schema.org/WearableSizeGroupExtraShort" | "schema:WearableSizeGroupExtraShort" | "https://schema.org/WearableSizeGroupExtraTall" | "schema:WearableSizeGroupExtraTall" | "https://schema.org/WearableSizeGroupGirls" | "schema:WearableSizeGroupGirls" | "https://schema.org/WearableSizeGroupHusky" | "schema:WearableSizeGroupHusky" | "https://schema.org/WearableSizeGroupInfants" | "schema:WearableSizeGroupInfants" | "https://schema.org/WearableSizeGroupJuniors" | "schema:WearableSizeGroupJuniors" | "https://schema.org/WearableSizeGroupMaternity" | "schema:WearableSizeGroupMaternity" | "https://schema.org/WearableSizeGroupMens" | "schema:WearableSizeGroupMens" | "https://schema.org/WearableSizeGroupMisses" | "schema:WearableSizeGroupMisses" | "https://schema.org/WearableSizeGroupPetite" | "schema:WearableSizeGroupPetite" | "https://schema.org/WearableSizeGroupPlus" | "schema:WearableSizeGroupPlus" | "https://schema.org/WearableSizeGroupRegular" | "schema:WearableSizeGroupRegular" | "https://schema.org/WearableSizeGroupShort" | "schema:WearableSizeGroupShort" | "https://schema.org/WearableSizeGroupTall" | "schema:WearableSizeGroupTall" | "https://schema.org/WearableSizeGroupWomens" | "schema:WearableSizeGroupWomens" | WearableSizeGroupEnumerationLeaf;

interface WearableSizeSystemEnumerationLeaf extends EnumerationBase {
    "@type": "schema:WearableSizeSystemEnumeration";
}
/** Enumerates common size systems specific for wearable products */
export type WearableSizeSystemEnumeration = "https://schema.org/WearableSizeSystemAU" | "schema:WearableSizeSystemAU" | "https://schema.org/WearableSizeSystemBR" | "schema:WearableSizeSystemBR" | "https://schema.org/WearableSizeSystemCN" | "schema:WearableSizeSystemCN" | "https://schema.org/WearableSizeSystemContinental" | "schema:WearableSizeSystemContinental" | "https://schema.org/WearableSizeSystemDE" | "schema:WearableSizeSystemDE" | "https://schema.org/WearableSizeSystemEN13402" | "schema:WearableSizeSystemEN13402" | "https://schema.org/WearableSizeSystemEurope" | "schema:WearableSizeSystemEurope" | "https://schema.org/WearableSizeSystemFR" | "schema:WearableSizeSystemFR" | "https://schema.org/WearableSizeSystemGS1" | "schema:WearableSizeSystemGS1" | "https://schema.org/WearableSizeSystemIT" | "schema:WearableSizeSystemIT" | "https://schema.org/WearableSizeSystemJP" | "schema:WearableSizeSystemJP" | "https://schema.org/WearableSizeSystemMX" | "schema:WearableSizeSystemMX" | "https://schema.org/WearableSizeSystemUK" | "schema:WearableSizeSystemUK" | "https://schema.org/WearableSizeSystemUS" | "schema:WearableSizeSystemUS" | WearableSizeSystemEnumerationLeaf;

interface WearActionLeaf extends ConsumeActionBase {
    "@type": "schema:WearAction";
}
/** The act of dressing oneself in clothing. */
export type WearAction = WearActionLeaf;

interface WebAPIBase extends ServiceBase {
    /** Further documentation describing the Web API in more detail. */
    "schema:documentation"?: SchemaValue<CreativeWork | URL | IdReference>;
}
interface WebAPILeaf extends WebAPIBase {
    "@type": "schema:WebAPI";
}
/** An application programming interface accessible over Web/Internet technologies. */
export type WebAPI = WebAPILeaf;

interface WebApplicationBase extends SoftwareApplicationBase {
    /** Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'. */
    "schema:browserRequirements"?: SchemaValue<Text>;
}
interface WebApplicationLeaf extends WebApplicationBase {
    "@type": "schema:WebApplication";
}
/** Web applications. */
export type WebApplication = WebApplicationLeaf;

interface WebContentLeaf extends CreativeWorkBase {
    "@type": "schema:WebContent";
}
/** WebContent is a type representing all {@link https://schema.org/WebPage WebPage}, {@link https://schema.org/WebSite WebSite} and {@link https://schema.org/WebPageElement WebPageElement} content. It is sometimes the case that detailed distinctions between Web pages, sites and their parts is not always important or obvious. The {@link https://schema.org/WebContent WebContent} type makes it easier to describe Web-addressable content without requiring such distinctions to always be stated. (The intent is that the existing types {@link https://schema.org/WebPage WebPage}, {@link https://schema.org/WebSite WebSite} and {@link https://schema.org/WebPageElement WebPageElement} will eventually be declared as subtypes of {@link https://schema.org/WebContent WebContent}). */
export type WebContent = WebContentLeaf | HealthTopicContent;

interface WebPageBase extends CreativeWorkBase {
    /** A set of links that can help a user understand and navigate a website hierarchy. */
    "schema:breadcrumb"?: SchemaValue<BreadcrumbList | Text | IdReference>;
    /** Date on which the content on this web page was last reviewed for accuracy and/or completeness. */
    "schema:lastReviewed"?: SchemaValue<Date>;
    /** Indicates if this web page element is the main subject of the page. */
    "schema:mainContentOfPage"?: SchemaValue<WebPageElement | IdReference>;
    /** Indicates the main image on the page. */
    "schema:primaryImageOfPage"?: SchemaValue<ImageObject | IdReference>;
    /** A link related to this web page, for example to other related web pages. */
    "schema:relatedLink"?: SchemaValue<URL | IdReference>;
    /** People or organizations that have reviewed the content on this web page for accuracy and/or completeness. */
    "schema:reviewedBy"?: SchemaValue<Organization | Person | IdReference>;
    /** One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most. */
    "schema:significantLink"?: SchemaValue<URL | IdReference>;
    /**
     * The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
     *
     * @deprecated Consider using https://schema.org/significantLink instead.
     */
    "schema:significantLinks"?: SchemaValue<URL | IdReference>;
    /**
     * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
     *
     * The _speakable_ property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
     *
     * 1.) _id-value_ URL references - uses _id-value_ of an element in the page being annotated. The simplest use of _speakable_ has (potentially relative) URL values, referencing identified sections of the document concerned.
     *
     * 2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the {@link https://schema.org/cssSelector cssSelector} property.
     *
     * 3.) XPaths - addresses content via XPaths (assuming an XML view of the content). Use the {@link https://schema.org/xpath xpath} property.
     *
     * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this we define a supporting type, {@link https://schema.org/SpeakableSpecification SpeakableSpecification} which is defined to be a possible value of the _speakable_ property.
     */
    "schema:speakable"?: SchemaValue<SpeakableSpecification | URL | IdReference>;
    /** One of the domain specialities to which this web page's content applies. */
    "schema:specialty"?: SchemaValue<Specialty | IdReference>;
}
interface WebPageLeaf extends WebPageBase {
    "@type": "schema:WebPage";
}
/** A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as `breadcrumb` may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page. */
export type WebPage = WebPageLeaf | AboutPage | CheckoutPage | CollectionPage | ContactPage | FAQPage | ItemPage | MedicalWebPage | ProfilePage | QAPage | RealEstateListing | SearchResultsPage;

interface WebPageElementBase extends CreativeWorkBase {
    /** A CSS selector, e.g. of a {@link https://schema.org/SpeakableSpecification SpeakableSpecification} or {@link https://schema.org/WebPageElement WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
    "schema:cssSelector"?: SchemaValue<CssSelectorType>;
    /** An XPath, e.g. of a {@link https://schema.org/SpeakableSpecification SpeakableSpecification} or {@link https://schema.org/WebPageElement WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
    "schema:xpath"?: SchemaValue<XPathType>;
}
interface WebPageElementLeaf extends WebPageElementBase {
    "@type": "schema:WebPageElement";
}
/** A web page element, like a table or an image. */
export type WebPageElement = WebPageElementLeaf | SiteNavigationElement | Table | WPAdBlock | WPFooter | WPHeader | WPSideBar;

interface WebSiteBase extends CreativeWorkBase {
    /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
    "schema:issn"?: SchemaValue<Text>;
}
interface WebSiteLeaf extends WebSiteBase {
    "@type": "schema:WebSite";
}
/** A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs. */
export type WebSite = WebSiteLeaf;

interface WholesaleStoreLeaf extends LocalBusinessBase {
    "@type": "schema:WholesaleStore";
}
/** A wholesale store. */
export type WholesaleStore = WholesaleStoreLeaf | string;

interface WinActionBase extends ActionBase {
    /** A sub property of participant. The loser of the action. */
    "schema:loser"?: SchemaValue<Person | IdReference>;
}
interface WinActionLeaf extends WinActionBase {
    "@type": "schema:WinAction";
}
/** The act of achieving victory in a competitive activity. */
export type WinAction = WinActionLeaf;

interface WineryLeaf extends FoodEstablishmentBase {
    "@type": "schema:Winery";
}
/** A winery. */
export type Winery = WineryLeaf | string;

interface WorkBasedProgramBase extends EducationalOccupationalProgramBase {
    /**
     * A category describing the job, preferably using a term from a taxonomy such as {@link http://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
     *
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    "schema:occupationalCategory"?: SchemaValue<CategoryCode | Text | IdReference>;
    /** The estimated salary earned while in the program. */
    "schema:trainingSalary"?: SchemaValue<MonetaryAmountDistribution | IdReference>;
}
interface WorkBasedProgramLeaf extends WorkBasedProgramBase {
    "@type": "schema:WorkBasedProgram";
}
/** A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs. */
export type WorkBasedProgram = WorkBasedProgramLeaf;

interface WorkersUnionLeaf extends OrganizationBase {
    "@type": "schema:WorkersUnion";
}
/** A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying. */
export type WorkersUnion = WorkersUnionLeaf | string;

interface WPAdBlockLeaf extends WebPageElementBase {
    "@type": "schema:WPAdBlock";
}
/** An advertising section of the page. */
export type WPAdBlock = WPAdBlockLeaf;

interface WPFooterLeaf extends WebPageElementBase {
    "@type": "schema:WPFooter";
}
/** The footer section of the page. */
export type WPFooter = WPFooterLeaf;

interface WPHeaderLeaf extends WebPageElementBase {
    "@type": "schema:WPHeader";
}
/** The header section of the page. */
export type WPHeader = WPHeaderLeaf;

interface WPSideBarLeaf extends WebPageElementBase {
    "@type": "schema:WPSideBar";
}
/** A sidebar section of the page. */
export type WPSideBar = WPSideBarLeaf;

interface WriteActionBase extends ActionBase {
    /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link https://schema.org/availableLanguage availableLanguage}. */
    "schema:inLanguage"?: SchemaValue<Language | Text | IdReference>;
    /**
     * A sub property of instrument. The language used on this action.
     *
     * @deprecated Consider using https://schema.org/inLanguage instead.
     */
    "schema:language"?: SchemaValue<Language | IdReference>;
}
interface WriteActionLeaf extends WriteActionBase {
    "@type": "schema:WriteAction";
}
/** The act of authoring written creative content. */
export type WriteAction = WriteActionLeaf;

/** Text representing an XPath (typically but not necessarily version 1.0). */
export type XPathType = string;

interface ZooLeaf extends CivicStructureBase {
    "@type": "schema:Zoo";
}
/** A zoo. */
export type Zoo = ZooLeaf | string;

