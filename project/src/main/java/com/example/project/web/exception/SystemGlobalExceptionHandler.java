package com.example.project.web.exception;

import com.example.project.entity.response.ResponseEntity;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Log4j2
@RestControllerAdvice
public class SystemGlobalExceptionHandler {

    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    private ResponseEntity<Object> exceptionHandler(Exception exception) {
        log.error(exception.getMessage());
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), exception.getMessage());
    }
}
