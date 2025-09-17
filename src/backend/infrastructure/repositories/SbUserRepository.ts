import { UserRepository } from "@/backend/domain/repositories/userRepository";
import { User } from "@/backend/domain/entities/user";
import { supabase } from "@/backend/utils/SbClient";

export class SbUserRepository implements UserRepository {
    async create(user: User): Promise<User> {
        const { data, error } = await supabase.from("users").insert(user).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async findById(id: string): Promise<User | null> {
        const { data, error } = await supabase.from("users").select("*").eq("id", id).single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async update(user: User): Promise<User> {
        const { data, error } = await supabase.from("users").update(user).eq("id", user.id).select().single();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async delete(id: string): Promise<void> {
        const { error } = await supabase.from("users").delete().eq("id", id);
        if (error) {
            throw new Error(error.message);
        }
    }
    async findAll(): Promise<User[]> {
        const { data, error } = await supabase.from("users").select("*");
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
}