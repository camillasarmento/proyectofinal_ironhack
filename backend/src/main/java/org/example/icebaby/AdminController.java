package org.example.icebaby;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:5174")
public class AdminController {

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/messages")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @DeleteMapping("/messages/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> deleteMessage(@PathVariable Long id) {
        return messageRepository.findById(id)
                .map(message -> {
                    messageRepository.delete(message);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}