interface house{
    title:string; 
    data:
        {
            date:string;
            time:string;
            subtitle:string;
            profile:string;
            name:string;
            option:string,
            houseImg:string
        }[]
       
}


export const data:house[] = [
    {
        title:"Latest Articles by Agents",
        data:[
            {
                date:"MARCH   21, 2022",
                time:"5 MIN READ",
                subtitle:"How to get multiple offers on your home",
                profile:"/images/profile1.png",
                name:"Joan Hollie ",
                option:"SELLING",
                houseImg:"/images/house1.png"

            },{
                date:"MARCH 21, 2022",
                time:"5 MIN READ",
                subtitle:"10 home buying tips for first-time home buyers",
                profile:"images/profile2.png",
                name:"tim hortons",
                option:"BUYING",
                houseImg:"/images/house2.png"
            }
            ,{
                date:"MARCH 21, 2022",
                time:"5 MIN READ",
                subtitle:"15 simple and relaxing  decor ideas to transform your home ",
                profile:"images/profile3.png",
                name:"Joan Hollie ",
                option:"BUYING",
                houseImg:"/images/house3.png"
            }
        ]
    }

]

