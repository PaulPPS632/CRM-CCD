export default class Lead {
    constructor(
        public IdLead: number,
        public Formulario_Id: number,    // Form ID
        public Origen: string,          // Platform
        public NombreAnuncio: string,   // Adset name
        public Campana_Id: number,       // Campaign ID
        public NombreCampana: string,   // Campaign name
        public FechaRegistro: Date,     // Date created
        public Data: {
            Nombre?: string;          //FullName
            Celular?: string;         //PhoneNumber
            Correo?: string;          //Email
            ChatEnVivo?: string;      //InboxUrl
            IdPagina?: number;        //PageID
            IdGrupoAnuncio?: number;  //AdGroupID
        }                             // Field data
    ) {        
    }
}
