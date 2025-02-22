export interface CourseI {
    name: string;
    id: string;
}

export interface VehicleApiResponseI {
    Count: number;
    Message: string;
    Results: VehicleDetailsI[];
    SearchCriteria: string;
}

export interface VehicleDetailsI {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number; 
    VehicleTypeName: string;
}