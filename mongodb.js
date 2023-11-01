db.createCollection("product", {
    validator: {
        $jsonSchema: {
            bsonType:"object",
            required: ["name"],
            properties: {
                name: {
                    bsonType: "string"
                },
                description: {
                    bsonType: "string"
                },
                price: {
                    bsonType: "number"
                },
                quantity: {
                    bsonType: "number"
                },
                category: {
                    bsonType: "string"
                }
            }
        }
    }
});

db.createCollection("categories", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name"],
            properties: {
                name: {
                    bsonType: "string",
                    enum: ["men","women","teens","kids"]
                }
            }
        }
    }
});