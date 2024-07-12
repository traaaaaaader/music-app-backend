import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";


@Controller("/user")
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    create(@Body() dto: CreateUserDto){
        return this.userService.create(dto);
    }

}